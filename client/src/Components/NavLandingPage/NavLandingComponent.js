import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginBtn from "../LoginBtn/LoginBtn";
import SignupBtn from "../SignupBtn/index";
import "./style.css";

export default class NavLandingPage extends Component {

  
render() {
    return (
        <div className="navbar">
        <nav className="nav-extended">
    <div className="nav-wrapper z-depth-3">
      <a href="/" id="nav-title" className="brand-logo center">Quarantinee</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
            <SignupBtn />
        </li>
        <li>
        <LoginBtn />
        </li>
      </ul>
    </div>
  </nav>
  </div>
    );
}
}




// export default class NavLandingPage extends Component {

//   constructor() {
//     super()
//     this.logout = this.logout.bind(this)
//   }

//   logout(event) {
//     event.preventDefault()
//     console.log('logging out')
//     axios.post('/user/logout').then(response => {
//       console.log(response.data)
//       if (response.status === 200) {
//         this.props.updateUser({
//           loggedIn: false,
//           username: null
//         })
//       }
//     }).catch(error => {
//       console.log('Logout error')
//     })
//   }


//   render() {
//     const loggedIn = this.props.loggedIn;
//     console.log('navbar render, props: ')
//     console.log(this.props);

//     return (
//       <div className="navbar">
//         <nav className="nav-extended">
//           <div className="nav-wrapper z-depth-3">
//             <a href="/" id="nav-title" className="brand-logo center">Quarantinee</a>

//             {loggedIn ? (
//               <section className="navbar-section">
//                 <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
//                   <span className="text-secondary">logout</span></Link>
//               </section>
//             ) : (
//                 <ul id="nav-mobile" className="right hide-on-med-and-down">
//                   <li>
//                     <Link
//                       to="/Signup/"
//                       className={
//                         window.location.pathname === "/Signup/"
//                           ? "nav-link active"
//                           : "nav-link"
//                       }>
//                       <SignupBtn />
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/Login/"
//                       className={
//                         window.location.pathname === "/Login/"
//                           ? "nav-link active"
//                           : "nav-link"
//                       }>
//                       <LoginBtn />
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//           </div>
//         </nav>
//       </div>
//     );
//   }

// }

