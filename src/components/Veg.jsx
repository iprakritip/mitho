import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';

const Veg = () => {
  const [veg, setVeg]= useState([]);

 const getVeg = async()=>{

   const check=localStorage.getItem("veg");

   if(check){
     setVeg(JSON.parse(check));
   }else{
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian  `
      );
      const data = await api.json();
      localStorage.setItem("veg", JSON.stringify(data.recipes));
      setVeg(data.recipes);
   
    }
 }
 useEffect(()=>{
    getVeg();
  },[]);

  return (
    <div>
       <Wrapper>
          <h4>Our Vegeterian Picks</h4>
          <Splide options={{
            perPage:3,
            arrows:false,
            pagination:false,
            drag: "free",
            gap: "5rem",
           }}>
           {veg.map((recipe)=>{
            return(
              <SplideSlide key={recipe.id}>
              <Card>
                <p>{recipe.title}</p> 
                <img src={recipe.image} alt={recipe.title} />  
                <Gradient />
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
`;
const Card = styled.div`
min-height:25rem;
overflow:hidden;
position:relative;
border-radius:2rem;

 img{
  position:absolute;
  left:0;
  border-radius:2rem;
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
  font-size:1rem;
  height:40%;
  display:flex;
  justify-content:center;
  align-items:center;
 }
`;

const Gradient = styled.div`
z-index:3;
position: absolute;
width:100%;
height:100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

export default Veg