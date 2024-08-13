import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useFetch from "../hooks/useFetch";
import BlogList from "../components/BlogList";
import '../output.css';

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    const navigate = useNavigate();
    const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

    return (

    <div>
        <div>
            <p>Home</p>
        </div>
      <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
      </div>
    </div>
    );
};

export default HomePage;