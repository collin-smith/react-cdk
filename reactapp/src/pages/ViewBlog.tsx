import React, { useEffect, useState } from 'react';
import { Link, useNavigate,useParams } from 'react-router-dom';

import useFetch from "../hooks/useFetch";
import BlogList from "../components/BlogList";
import '../output.css';

export interface IDataListProps {}

const ViewBlog: React.FunctionComponent<IDataListProps> = (props) => {
 
    const { id } = useParams();
    const { data: blogObj , error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();
    const [blogId, setBlogId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');


    useEffect(() => {
        console.log("Returned from useFetch");
        if (blogObj !=null)
          {
            setBlogId(blogObj['id']);
            setTitle(blogObj['title']);
            setBody(blogObj['body']);
            setAuthor(blogObj['author']);
          }
  
    }, [blogObj])
  


    return (
        <div>
            <p>View Blog</p>

            { isPending && <div>Loading...</div> }
{ error && <div>{ error }</div> }
{ blogObj && (
            <form>

    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">


      <div className=""><label className="text-black">Title:</label><label>{title}</label>
    </div>
    <div  className="border-blue-500"> <label  className="border-black-500">Id:</label>
    <label>{id}</label></div>

    <div  className="border-blue-500"> <label  className="border-black-500">Author:</label>
    <label>{author}</label></div>
    
    <div  className=""><label  className="border-black-500">Blog body:</label>
      <label>{body}</label>
     </div>

    </div>
    <div>
     </div>
      </form>


)}

        </div>
    );
};

export default ViewBlog;