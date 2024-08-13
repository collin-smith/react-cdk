import { Link } from 'react-router-dom';
import * as Module from "../interfaces/Blog";


//Props Interface
interface BlogListProps { blogs: Module.Blog[]  } 

const BlogList = ({ blogs}:BlogListProps) => {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/dataupdate/${blog.id}`}>
            <h2>"{ blog.title }" by { blog.author }</h2>
          </Link>
          <div className="flex justify-start space-x-2">
          <Link to={`/viewblog/${blog.id}`}>
            <button className="btn">View Blog</button>
            </Link>
            <Link to={`/editblog/${blog.id}`}>
            <button className="btn">Edit Blog</button>
            </Link>
            </div>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;