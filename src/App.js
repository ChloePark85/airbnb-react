import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Routes/Home";
import Booking from "./Routes/Booking";
import Detail from "./Routes/Detail";
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');
  a {
    text-decoration: none;
    color: black;
}
button {
    border: none;
    background-color: white;
    color: black;
    text-decoration: none;
}
html, body {
  height: 1000vh;
}

 `


function App() {

  return (
    <>
    <GlobalStyle/>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/homes" exact element={<Detail />}/>
        <Route path="/booking" exact element={<Booking />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
