import react from 'react'
import { connect } from 'react-redux';
import { get_data, } from '../../store/action'
class About extends react.Component {

    componentDidMount() {
       console.log("dataa",this.props.get_data())
    }
constructor(){
    super()
    this.state =  {
        chat_users : {},
        chat : []
    }
}
chats = ()=>{
    console.log("ok hai")
}
    render() {
      
        // console.log("dataa2",this.props.get_data())
        console.log("users mil gy", this.props.users)

        let user = this.props.current_users

        return (
            <div>
                <h1>
                    Welcome {user.name}
                </h1>
                <img src={user.photo} ></img>
                <h3> {user.email}</h3>
                <div style={{display:"flex"}}>
          <div style={{backgroundColor:"gray",display:"flex"}}>
          <h3>Chat users</h3>
                <ul >
                    {this.props.users.map((v, i) => {

                        return v.uid!==this.props.current_users.uid && <li key={i}> < img src='v.photo' /> {v.name} <button>Chat</button> </li>

                    })}
                </ul>
                <div style={{backgroundColor:"greenyellow",width:"230px"}}>
                    <h2 onClick={()=> this.chats()}>
                        Chat
                    </h2>
                    <input type={"text"} placeholder='Enter your message'/>
                    <button>Send</button>
                </div>
          </div>

            </div> </div>
        )
    }
}
const mapStatetoProps = (state) => ({
    current_users: state.current_users,
    users: state.users
})

const mapdispatchtoprops = (dispatch) => ({
    get_data: () => dispatch(get_data())

})
export default connect(mapStatetoProps, mapdispatchtoprops)(About);
