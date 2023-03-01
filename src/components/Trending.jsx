import { useEffect, useState } from "react";

const Trending = () => {

// const [trending, setTrending]= useState([]);

const getTrending = async()=>{
    const api = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_API_KEY}&number=9`
    );
    const data = await api.json();
    console.log(data);
}

useEffect=(()=>{
    getTrending();
  },[]);
  return (
    <div>Trending</div>
  )
}

export default Trending