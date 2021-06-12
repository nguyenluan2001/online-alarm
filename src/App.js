import './App.css';
import Sidebar from "./components/sidebar/Sidebar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AlarmClock from './pages/AlarmClock';
import StopWatch from './pages/StopWatch';
import Time from './pages/Time';
import Timer from './pages/Timer';
import { darkTheme, lightTheme } from "./themes"
import { useState, useEffect } from "react"
import { MainContent } from "./AppStyle"

function App(props) {

  const [theme, setTheme] = useState('darkTheme')
  const [useTheme, setUseTheme] = useState({})
  useEffect(() => {
    if (theme == 'darkTheme') {
      setUseTheme(darkTheme)
    }
    else {
      setUseTheme(lightTheme)
    }
  }, [theme])
  return (
    <Router>
      <div className="App">
       
        <Sidebar theme={theme} setTheme={setTheme}></Sidebar>
        <MainContent theme={useTheme}>
          <Switch>
            <Route path="/alarm-clock">
              <AlarmClock theme={useTheme}></AlarmClock>
            </Route>
            <Route path="/stop-watch">
              <StopWatch theme={useTheme}></StopWatch>
            </Route>
            <Route path="/time">
              <Time></Time>
            </Route>
            <Route path="/timer">
              <Timer theme={useTheme}></Timer>
            </Route>
          </Switch>
        </MainContent>
      </div>
    </Router>
  );
}

export default App;

