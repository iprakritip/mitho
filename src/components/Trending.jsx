import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from "react-router-dom";

const Trending = () => {

const [trending, setTrending]= useState([]);

 const getTrending = async()=>{

   const check=localStorage.getItem("trending");

   if(check){
     setTrending(JSON.parse(check));
   }else{
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();
      localStorage.setItem("trending", JSON.stringify(data.recipes));
      setTrending(data.recipes);
   
    }
 }

 useEffect(()=>{
    getTrending();
  },[]);

 return (
    <div>
       <Wrapper>
          <h4>Trending Picks</h4>
          <Splide options={{
            perPage:4,
            arrows:true,
            pagination:false,
            drag: "free",
            gap: "1rem",
           }}>
           {trending.map((recipe)=>{
            return(
              <SplideSlide key={recipe.id}>
              <Card>
                <Link to={"/recipe/"+recipe.id}>
                <p>{recipe.title}</p> 
                <img src={recipe.image} alt={recipe.title} />  
                <Gradient />
                </Link>
              </Card>
              </SplideSlide>
              );
            })}
          </Splide> 
      </Wrapper>   
    </div>
  )
}

const Wrapper =styled.div`
margin: 4rem 0;

h4{
  margin-bottom:1rem;
}
@media screen and (max-width: 480px) {
  display:flex;
  flex-direction:column;
}
`;
const Card = styled.div`
min-height:15rem;
overflow:hidden;
position:relative;
border-radius:1rem;

 img{
  position:absolute;
  left:0;
  border-radius:1rem;
  width:100%;
  height:100%;
  object-fit:cover;
  
 }
 p{
  position:absolute;
  z-index:10;
  left:50%;
  bottom:0%;
  transform: translate(-50%,0%);
  color:#fff;
  width:100%;
  text-align:center;
  font-weight:600;
  font-size:0.8rem;
  height:20%;
  display:flex;
  justify-content:center;
  align-items:center;
 }
 &:hover{
  opacity:0.9;
 }
`;

const Gradient = styled.div`
z-index:3;
position: absolute;
width:100%;
height:100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

export default Trending