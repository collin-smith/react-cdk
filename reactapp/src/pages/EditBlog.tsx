import React, { useEffect, useState } from 'react';
import { Link, useNavigate,useParams } from 'react-router-dom';

import useFetch from "../hooks/useFetch";
import BlogList from "../components/BlogList";
import '../output.css';

export interface IDataListProps {}

const EditBlog: React.FunctionComponent<IDataListProps> = (props) => {
 

    const { id } = useParams();
    const { data: blogObj , error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();
    const [blogId, setBlogId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('someauthor');

    
    useEffect(() => {
        //console.log("Returned from useEffect");
        if (blogObj !=null)
          {
            console.log("Setting blog object");
            setBlogId(blogObj['id']);
            setTitle(blogObj['title']);
            setBody(blogObj['body']);
            setAuthor(blogObj['author']);
          }
    }, [blogObj])
  

    const handleClick = () => {
      fetch('http://localhost:8000/blogs/' + id, {
        method: 'DELETE'
      }).then(() => {
        navigate('/');
    }) 
    }
    
    const handleUpdateSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        const blog = { id,title, body, author };
        console.log ("Sending update blog="+JSON.stringify(blog));
    
        fetch('http://localhost:8000/blogs/' + id, {
          method: 'PUT',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blog)
        }).then(() => {
          console.log("Back from update");
          // history.go(-1);
          navigate('/');
        })

    }

    return (
        <div>
{ isPending && <div>Loading...</div> }
{ error && <div>{ error }</div> }
{ blogObj && (
            <form onSubmit={handleUpdateSubmit}>
    <h2>Edit Blog</h2>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div className=""><label className="text-black">Blog title:</label><input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /></div>
      <div  className=""><label  className="border-black-500">Blog body:</label>
        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={5} cols={20}
              ></textarea></div>
      <div  className="border-blue-500"> <label  className="border-black-500">Blog author:</label>
        <select className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Thomas">Thomas</option>
          <option value="Saylor">Saylor</option>
        </select></div>
      <div  className=""></div>
    </div>
    <div>
    <div className="flex justify-start space-x-2">
    <button className="btn">Update Blog</button>
    <button className="btn" onClick={handleClick} >Delete Blog</button>
     </div>
      </div>
      </form>


)}

        </div>
    );
};

export default EditBlog;