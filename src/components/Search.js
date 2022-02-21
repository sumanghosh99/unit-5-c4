import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addData } from '../Redux/action';


export const Search = () => {
  const datas=useSelector((state)=>state.Data);
  const [text,setText]=useState("");
  const dispatch=useDispatch();
  // useEffect(()=>{
  //      axios.get("https://fast-reef-22226.herokuapp.com/data").then((res)=>{
  //        dispatch(addData(res.data));
  //        //console.log(res.data);
  //      })
  // },[])
  const getDatas=()=>{
    axios.get(`https://fast-reef-22226.herokuapp.com/data?q=${text}`).then((res)=>{
      dispatch(addData(res.data));
    })
  }
  return (
    <div>
       <div id='navbar'>
          <span><img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="google" /></span>
            <input onChange={(e)=>{
               setText(e.target.value);
            }} type="text" name="search" className='inbtn'/>
            <button onClick={()=>{
              getDatas();
            }} className='search'>Search</button>
       </div>
       <div>
         <button onClick={()=>{
           datas.sort((a,b)=>{
             if(a.title<b.title){
               return -1;
             }
            if (a.title> b.title) {
              return 1;
            }
            return 0;
           });
           getDatas();
         }}>sortA-Z</button>
         <button onClick={()=>{
           datas.sort((a,b)=>{
            if(b.title<a.title){
              return 1;
            }
           if (b.title> a.title) {
             return -1;
           }
           return 0;
          });
          getDatas();
         }}>sortZ-A</button>
         <button onClick={()=>{
           datas.sort((a,b)=>{
             return a.creation_date-b.creation_date;
           });
           getDatas();
         }} >sort-by-date</button>
         <button onClick={()=>{
           datas.sort((a,b)=>{
             return b.creation_date-a.creation_date;
           });
           getDatas();
         }}>sort-by-date-desc</button>
         <button onClick={()=>{
           datas.sort((a,b)=>{
             return a.quality-b.quality;
           });
           getDatas();
         }}>sort-by-quality</button>
         <button onClick={()=>{
           datas.sort((a,b)=>{
             return b.quality-a.quality;
           });
           getDatas();
         }}>sort-by-quality-desc</button>
       </div>
        {
          datas.map((e)=>{
            return <div key={e.id} id="search-result">
              <div className='result'>
                <p>{e.url}</p>
                <p> <a href={e.url}>{e.title}</a> | {e.author}</p>
                <p>{e.description}</p>
                <p>Creation Date:{e.creation_date}</p>
                <p>Explicit:{e.explicit?"Yes":"No"} , Quality:{e.quality}</p>
              </div>
            </div>
          })
        }
    </div>
  )
}