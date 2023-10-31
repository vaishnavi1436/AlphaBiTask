import React from "react";
import '../App.css';
import {FcLike} from 'react-icons/fc';
import { useState } from 'react';
import GiphyDisplay from "./GiphyDisplay";
const Home = ({onSearch}) =>{
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = () => {
        onSearch(searchTerm);
      };
    return(
        <div>
        <nav className="Navbar-search">
                <input className="search-box" placeholder="Search GIF" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <button className="searchButton" onClick={handleSearch}>Search</button>
            </nav>
            <div className="buttons">
                <button className="btn"><FcLike className="like"></FcLike> Liked</button>
                <button className="btn">Trending GIF</button>
                <button className="btn">Random GIF</button>
            </div>
            <GiphyDisplay searchTerm={searchTerm} />
        </div>
            
    );
}
export default Home;