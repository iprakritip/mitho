import{FaPizzaSlice, FaHamburger} from "react-icons/fa";
import {GiNoodles, GiChopsticks} from "react-icons/gi";
import styled from "styled-components";
import {NavLink} from "react-router-dom";


function Category() {
  return (
    <List>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Thai'}>
            <GiNoodles />
            <h4>Thai</h4>
        </SLink>
        <SLink to={'/cuisine/Japanese'}>
            <GiChopsticks />
            <h4>Japanese</h4>
        </SLink>
    </List>
  )
}
const List = styled.div`
 display:flex;
 justify-content:center;
 margin: 1rem 0;
 @media screen and (max-width: 480px) {
    
  }
`;
const SLink =styled(NavLink)`
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 border-radius:50%;
 margin-right:2rem;
 text-decoration:none;
 background:linear-gradient(35deg, #494949, #313131);
 width:6rem;
 height:6rem;
 cursor : pointer;
 transform: scale(0.7);

 h4{
    color:#fff;
    font-size:0.8rem;
 }
 svg{
    color:#fff;
    font-size: 1.5rem;
 @media screen and (max-width: 480px) {
    margin:0;
    border-radius: 25%;
    

    svg{
        font-size:0.5rem;
    }
    }
    
 }
 &.active{
    background:linear-gradient(to right, #f27121, #e94057);

    svg{
        color:#fff;
    }
    h4{
        color:#fff;
    }
 }
`;

export default Category