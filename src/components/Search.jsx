import styled from "styled-components";
import {useState} from "react";
import {FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const Search = () => {

    const [input, setInput]=useState("");
    const navigate= useNavigate();

    const submitHandler=(e)=>{
        e.preventDefault();
        navigate("/searched/"+input);
    }

  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch></FaSearch>
         <input onChange={(e)=>{setInput(e.target.value)}} type="text" value={input}/>
         
        </div>
    </FormStyle>
  )
}

const FormStyle= styled.form`
 padding:0 14rem;
 width:100%;

div{
width:100%;
position:relative;
}

 input{
    border:none;
    background:linear-gradient(35deg, #494949, #313131);
    font-size:0.8rem;
    color:white;
    padding:1rem 3rem;
    border-radius:1rem;
    outline:none;
    width:100%;
    @media screen and (max-width: 480px) {
      height:0.8rem;
      border-radius:0.5rem;
      font-size:0.7rem;
    }
 }

 svg{
    position:absolute;
    top:50%;
    left:0;
    transform:translate(100%,-50%);
    color:#fff;
 }
 @media screen and (max-width: 480px) {
  padding:0 1rem;
}
`;

export default Search