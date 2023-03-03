import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import logo from "./img/Mitho-logo.png";

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
       <Nav>
        <img src={logo} alt="mitho-logo" />
       </Nav>
       <Search />
       <Category />
       <Pages />
      </BrowserRouter>
      <p className="builtBy">Built by <a href="https://github.com/iprakritip" target="_blank">@iprakritip</a></p>
    </div>
  );
}
const Nav=styled.nav`
display:flex;
justify-content:left;
width:8%;
height:8%;
margin: 0.8rem 0;

img{
  width:100%;
  height:100%;
  object-fit:cover;
}
@media screen and (max-width: 480px) {
  margin:0.3rem 0;
}
`;


export default App;
