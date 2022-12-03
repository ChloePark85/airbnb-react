import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
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
 `


function App() {

  return (
    <>
    <GlobalStyle/>
    <Router>
      <Switch>
        <Route path="/">
          <Home/>
        </Route>
        <Route path="/homes" component={Detail} exact={true}>
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
