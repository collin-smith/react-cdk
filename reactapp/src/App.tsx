import React from 'react';
import {  BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AddBlog from './pages/AddBlog';
import ViewBlog from './pages/ViewBlog';
import EditBlog from './pages/EditBlog';
import Navigation from './components/Navigation';
import './output.css';

export interface IApplicationProps {}




const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        
        <BrowserRouter>
          <div className="grid md:grid-cols-1">
            <Navigation />
          </div>
          <main className="grid">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="addblog" element={<AddBlog />} />
                <Route path="viewblog">
                    <Route  path=":id" element={<ViewBlog />} />
                </Route>
                <Route path="editblog">
                    <Route  path=":id" element={<EditBlog />} />
                </Route>
            </Routes>
          </main>
        </BrowserRouter>

    );
};

export default Application;