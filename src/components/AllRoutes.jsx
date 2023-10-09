// src/components/AllRoutes.js
import React from 'react';
import { Route, Switch, Redirect, Routes } from 'react-router-dom';
import ComingSoon from './ComingSoon';
import HomePage from '../Page/HomePage';
import Profile from '../Page/Profile';
import Home from '../Page/Home';
import Todo from '../Page/Todo';



const AllRoutes = () => {
  return (
   <Routes>
     <Route path="/" element={<HomePage/>}/>
    <Route path="/:id" element={<Home/>}/>
    <Route path="/post" element={<ComingSoon/>}/>
    <Route path="/gallery" element={<ComingSoon/>}/>
    <Route path="/todo" element={<Todo/>}/>


   </Routes>
  );
};

export default AllRoutes;
