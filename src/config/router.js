import React from "react";
import {
  BrowserRouter as Router,
 Routes,
  Route,
  Switch,
  Link
} from "react-router-dom";
import Home from '../components/home/index'
import About from '../components/about/index'
class Approuter extends React.Component{
    render(){
        return(
            
<Router>
<Routes>
<Route path="/" element={<Home />} />
<Route  path="/about" element={<About />} /> 
</Routes>
</Router>
        )
    }
}
export default Approuter;