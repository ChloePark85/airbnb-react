import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./Components/Header";
import Booking from "./Routes/Booking";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');
 ` /* other styles */


function App() {
  return (
    <>
    <GlobalStyle/>
    <Router>
      <Header/>
      <Switch>
        <Route path="/">
          <Home/>
        </Route>
        <Route path="/detail">
          <Detail/>
        </Route>
        <Route path="/booking">
          <Booking/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
