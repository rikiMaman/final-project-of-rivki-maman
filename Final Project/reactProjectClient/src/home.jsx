import { Button } from "@mui/material";
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import * as React from 'react';
import Box from '@mui/material/Box';
import { BrowserRouter as Router } from 'react-router-dom';
import Client from "./Client";
import Admin from "./Admin";





// export default function Home() {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const { register, handleSubmit } = useForm();
//     const [ddata, setData] = useState({});
//     const [massege, setmassege] = useState("");
//     const [showPersonalDetails, setShowPersonalDetails] = useState("");
//     // let navi = useNavigate()
    

  
//     // const goToAerver = (data) => {
//     //   axios.post(`http://localhost:8787/login`, data)
//     //     .then(res => {
//     //       const r = res.data;
//     //       console.log(r)
//     //       naviga("/Admin")
//     //       setmassege(r)
//     //       setData(JSON.stringify(data))
//     //     }
//     //     ).catch(err =>
//     //       setmassege(err.response.data)
//     //     )
//     // }
//     return (
//       <>
//         {/* <BrowserRouter>
//         <div>
//           <Link to="/Client">Client</Link>
//           <Link to="/Login">Business</Link>
//         </div>
//         <Route path="/Client"  />
//         <Route path="/Login" />
//       </BrowserRouter> */}
//         {/* {showPersonalDetails ? <PersonalDetails /> : */}
  
//           {/* <form onSubmit={handleSubmit((data) => {
//             goToAerver(data)
//           })}> */}
//             {/* type="password" */}
//             {/* <input   {...register("name")} placeholder="name" />
//             <input  {...register("password")} placeholder="password" /> */}
//             <div id='home'>
//             {/* <TextField type="submit" variant="filled" placeholder="password" /> */}
//             {/* <input  /> */}
//             <Stack spacing={0} direction="row">
//               {/* <Button variant="text">Text</Button> */}
//               <Button type="submit" variant="outlined"  >Client</Button>
              
//               <Button type="submit" variant="outlined"  >Business</Button>
//             </Stack>
//             <p>{massege}</p>
//             </div>
//           {/* </form> */}
//       </>
//     )
  
//   }



//   function App() {
//     return (
    
//     );
//   }
  
//   function ClientComponent() {
//     return <h1>This is the Client page</h1>;
//   }
  
//   function LoginComponent() {
//     return <h1>This is the Login page</h1>;
//   }

import { useLocation } from 'react-router-dom';
import styled from "@emotion/styled";

function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [buttonVisible, setButtonVisible] = useState(true);

  const handleNavigation = (path) => {
    navigate(path);
    setButtonVisible(false)
  };

  return (
    <div >
      {buttonVisible&&<Button  type="submit" variant="outlined" onClick={() => handleNavigation('/client')}>
        Client
      </Button>}
      {buttonVisible&& <Button  type="submit"  variant="outlined" onClick={() => handleNavigation('/Admin')  } >
        Business
      </Button>}
      
    </div>
  );
}
export default HomePage;