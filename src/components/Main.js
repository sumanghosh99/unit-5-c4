import React from 'react';
import { useNavigate } from "react-router-dom";

export const Main = () => {
  let navigate = useNavigate();
  return (
    <div>
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="img" />
        <br />
        <input type="text" name="search" className='search-box' placeholder='Search Google' onChange={()=>{
          navigate(`/search`);
        }}/>
    </div>
  )
}