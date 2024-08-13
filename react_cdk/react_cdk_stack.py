from aws_cdk import (
    # Duration,
    Stack,
    aws_s3 as s3,
    aws_s3_deployment as s3_deployment,
    aws_cloudfront as cloudfront,
    aws_cloudfront_origins as origins,
    CfnOutput,
)
from constructs import Construct

class ReactCdkStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

         # Create bucket to store static website
        bucket = s3.Bucket(
            self,
            "AppBucket",
            bucket_name="myapp202408131053",
            public_read_access=True,
            block_public_access=s3.BlockPublicAccess(
                block_public_acls=False,
                block_public_policy=False,
                ignore_public_acls=False,
                restrict_public_buckets=False,
            ),
            access_control=s3.BucketAccessControl.BUCKET_OWNER_FULL_CONTROL,
            website_index_document="index.html",
        )

        bucket.add_cors_rule(
            allowed_methods=[s3.HttpMethods.GET],
            allowed_origins=["*"],
            allowed_headers=["*"],
            exposed_headers=["Access-Control-Allow-Origin"]
        )
        
        s3_deployment.BucketDeployment(
            self,
            "StaticWebsite",
            sources=[s3_deployment.Source.asset("./reactapp/build")],
            destination_bucket=bucket,
        )


        oai = cloudfront.OriginAccessIdentity(
            self,
            "My-OAI",
            comment="My OAI for the S3 Website"
        )

        bucket.grant_read(oai)


        cd = cloudfront.Distribution(self, "myCloudFrontDistribution",
            default_root_object='index.html',
            default_behavior=cloudfront.BehaviorOptions(
                origin=origins.S3Origin(bucket, origin_access_identity=oai),
                origin_request_policy=cloudfront.OriginRequestPolicy.CORS_S3_ORIGIN, 
                viewer_protocol_policy=cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
                response_headers_policy=cloudfront.ResponseHeadersPolicy.CORS_ALLOW_ALL_ORIGINS,
                cache_policy=cloudfront.CachePolicy.CACHING_OPTIMIZED,
                allowed_methods=cloudfront.AllowedMethods.ALLOW_ALL
                )
        )



        CfnOutput(
            self,
            id="A_S3BucketUrl",
            value=f"{bucket.bucket_website_url}",
            description="API Gateway endpoint URL for Prod stage for Hello World function",
        )

        CfnOutput(
            self,
            id="B_CloudFrontUrl",
            value=f"{cd.domain_name}",
            description="CloudFront Url",
        )






