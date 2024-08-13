import * as Module from "../interfaces/Blog";
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch"
export interface IDataEntryProps {}


const DataCreate: React.FunctionComponent<IDataEntryProps> = (props) => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Thomas');
  const navigate = useNavigate();

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    console.log("Handle Submit");
    event.preventDefault();
    const blog = { title, body, author };

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      navigate('/');
    })
  }
//https://v1.tailwindcss.com/components/forms
  return (
  <div>
    <form onSubmit={handleSubmit}>
    <h2>Add a New Blog</h2>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div className=""><label className="text-black">Blog title:</label><input className="input"
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /></div>
      <div  className=""><label  className="border-black-500">Blog body:</label>
        <textarea className="input"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={5} cols={20}
              ></textarea></div>
      <div  className="border-blue-500"> <label  className="border-black-500">Blog author:</label>
        <select className="input"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Thomas">Thomas</option>
          <option value="Saylor">Saylor</option>
        </select></div>
      <div  className=""></div>
    </div>
    <div className="flex justify-start space-x-2">
    <button className="btn">Add Blog</button>
      </div>
      </form>
  </div>
  );
}
export default DataCreate;