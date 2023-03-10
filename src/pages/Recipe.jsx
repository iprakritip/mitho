import { useEffect, useState } from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";


function Recipe() {

  let params= useParams();
  const [details, setDetails]= useState({});
  const [activeTab, setActiveTab]= useState("instructions");

  const fetchDetails= async()=>{
    const data= await fetch(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    )
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
    
  }
  useEffect(()=>{
    fetchDetails();
  },[params.name])

  return (
    <DetailWrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt={details.title} />
        </div>
        <Info>
          <article>
            <Button 
            className={activeTab === "instructions" ? "active" : ""} onClick={()=>{setActiveTab("instructions")}}
            >
            Instructions
            </Button>
            <Button 
            className={activeTab === "ingredients" ? "active" : ""} onClick={()=>{setActiveTab("ingredients")}}
            >
            Ingredients
            </Button>
            </article>
            {activeTab === "instructions" && (
                <div>
                <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
                <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
            </div>
            )}
            {activeTab === "ingredients" && (
                 <ul>
                  {details?.extendedIngredients?.length>0 && details.extendedIngredients.map((ingredient)=>{
                    return(
                        <li key={ingredient.id}>{ingredient.original}</li>
                    );
                  })}
                </ul>
            )}
            
        </Info>
    </DetailWrapper>
  )
}

const DetailWrapper= styled.div`
 margin: 4rem 0 5rem;
 display:flex;
 .active{
    background:linear-gradient(35deg, #494949, #313131); 
    color:#fff;
 }
 h2{
    font-size:1.5rem;
    margin-bottom:1rem;
 }
 @media screen and (max-width: 480px) {
  flex-direction:column;
  width:100%;
  
  img{
    width:100%;
  }
}
`;
const Button =styled.button`
 padding:0.5rem 1.5rem;
 color: #313131;
 background:#fff;
 border: 2px solid black;
 margin-right:2rem;
 font-weight:600;
 cursor:pointer;
 
`;
const Info= styled.div`
margin-top:2.8rem;
 margin-left:2rem;

 h3{
  font-size:1rem;
  line-height:2rem;
  margin-top:1rem;
  font-weight:400;
 }
 li{
  font-size:1rem;
  line-height:2rem;
}
ul{
  margin-top:1rem;
}
article{
  @media screen and (max-width: 480px){
    display:flex;
}

}
`;

export default Recipe