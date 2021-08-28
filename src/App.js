
import React from 'react'
import classes from "./App.module.css"
import CardOne from './CardItem/CardOne/CardOne'

function App() {
  return (
    <div className="App">
      <div className={classes.cardStyle+" m-5"}>
          <CardOne />
      </div>
{/* 
      <Switch>
          <Route exact path="" ></Route> 
           <Route path="/" ></Route>
      </Switch>
     */}
    </div>
  );
}

export default App;
