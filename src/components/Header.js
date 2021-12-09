import React from "react";

function Header(props) {
    return (
      <div className="header">
        <div className="grid">
            <div className="start">
            <a href="/">Home</a>
            </div>
            <div className="end">
            {props.nickname ? (
                <span className="nickname">
                    <i className="far fa-user"></i>
                    {props.nickname}
                </span>
            ) : (
                <React.Fragment>
                    <a href="/">Login</a>
                    <a href="/">Register</a>
                </React.Fragment>
            )}
            </div>
        </div>
      </div>
    );
}

// class Header extends React.Component{


//     renderLink() {
//         const nickname = this.props.nickname;
//         if (nickname) {
//             return (
                
//             )
//         } else {
//             return (
                
//             )
//         }
//     }

//     render() {
//         return (
//           <div className="header">
//             <div className="grid">
//               <div className="start">
//                 <a href="/">Home</a>
//               </div>
//               <div className="end">
//                     {this.renderLink()}
//               </div>
//             </div>
//           </div>
//         );
//     }
// }

export default Header;