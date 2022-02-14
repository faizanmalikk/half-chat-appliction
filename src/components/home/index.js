import { getDefaultNormalizer } from '@testing-library/react';
import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import {Link} from "react-router-dom"
import react from 'react'
import { connect } from 'react-redux';
import {set_data,facebook_login,chnglocation} from '../../store/action/index'
class Home extends react.Component{
render(){
    console.log("home props ",this.props.history)
    const ok = {
        username: "mlik sab",
        email : "mailk@getSpaceUntilMaxLength.com"
    }
    return(
        <div>
            <h1>
                this is home
                <button  >
                   <Link to={'/about'}>
                   Chat-area</Link>
             
                </button>
                <button onClick={()=> this.props.facebook_login()}>
                   Facebook Login   
                
                </button>
            </h1>
        </div>
    )
}
}
const mapStatetoProps = (state)=>({
name : state.users,
})
const mapdispatchtoprops =(dispatch)=>({
    set_data : (data)=> dispatch(set_data(data)),
    facebook_login : ()=> dispatch(facebook_login()),
    chnglocation : ()=> dispatch(chnglocation())
}) 
export default connect(mapStatetoProps,mapdispatchtoprops)(Home);