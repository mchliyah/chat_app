
import React from 'react';
import './landing.css';
import NavbarAuth from './AuthNavbar';

function Landing() {
    return (
        <div>
            <NavbarAuth />
            {/* to add some things later  */}
        </div>
    );
}

export default Landing;
// import React from 'react';
// import { To, useNavigate } from 'react-router-dom';

// function Landing() {
//   const navigate = useNavigate();

//   const handleNavigation = (route: To) => {
//     navigate(route);
//   };

//   return (
//     <div>
//       <aside>
//         <h1>Welcome to the Chat App!</h1>
//         <p>Please sign up or login to continue.</p>
//         <button onClick={() => handleNavigation('/Signup')}>Sign Up</button>
//         <button onClick={() => handleNavigation('/Login')}>Login</button>
//       </aside>

//       <main>
//         <h2>Features</h2>
//         <ul>
//           <li>Real-time chat</li>
//           <li>Private messaging</li>
//           <li>Public chat rooms</li>
//         </ul>
//       </main>
//     </div>
//   );
// }

// export default Landing;

