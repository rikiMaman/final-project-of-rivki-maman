import React from 'react'
import axios from "axios";
import { useState, useEffect,userRole } from 'react'
import { useNavigate } from 'react'
import SetService from './SetAppointment'
import { Button } from '@mui/material';
// Example in the parent component (where you render ListServices)
// userRole could be obtained from your authentication context or wherever it is stored

// export default function ListServices() {

//   const [showServices, setShowServices] = useState(false);

//   // let nav = useNavigate()
//   // const { register, handleSubmit } = useForm();
//   const [massege, setmassege] = useState("");
//   const [good, setGood] = useState(false);

//   const [services, setservices] = useState([]);//מכיל את כל השירותים הקימים
//   const [add, setadd] = useState(false);


//   function getServices() {
//     axios.get(`http://localhost:8787/services`)
//       .then(res => {
//         setservices(res.data)
//       })
//   }
//   useEffect(() => {//להפעיל את הבקשה מהשרת- רק במקרה שהוא ריק
//     getServices()
//   }, [])

//   function display() {
//     setShowServices(!showServices);

//   }


  

//   return (
//     <>
//       <button className='InAdmin' onClick={display}> <h3 className='Ser'>ALL SERVICES:</h3> </button>


//       <>
//         {/* //   לא ריק data רק אם המשתנה שמחזיק את כל ה */}
//         {showServices && <p>{services && services.map(i => <Service name={i.name} description={i.description} />)}
//         </p>}
//         {/* <SetService/> */}

//       </>
//     </>)
//   function Service(props) {
//     return (
//       <>
//         <SetService />

//         <Button>

//           <div className='service'> <b>NAME: </b>  {props.name}
//             <b>    DESCRIPTION: </b>  {props.description}
//           </div>
//         </Button>
//         <br />


//       </>
//     )
//   }
// };


// Assume you get the user role from props
// Example usage: <ListServices userRole="admin" />
export default function ListServices({ userRole }) {
  const [showServices, setShowServices] = useState(false);
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices();
  }, []);

  function getServices() {
    axios.get(`http://localhost:8787/services`)
      .then(res => {
        setServices(res.data);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
      });
  }

  function display() {
    setShowServices(!showServices);
  }

  return (
    <>
    <>
      <button className='InAdmin' onClick={display}>
        <h3 className='Ser'>ALL SERVICES:</h3>
      </button>
    </>
      {showServices && (
        <p>
          {services && services.map(i => (
            <Service key={i.id} name={i.name} description={i.description} />
          ))}
        </p>
      )}
      

      {/* {userRole === 'admin' && <SetService />} */}
      <SetService />
    </>
  );

  function Service(props) {
    return (
      <>
        <Button>
          <div className='service'>
            <b>NAME: </b>  {props.name}
            <b>    DESCRIPTION: </b>  {props.description}
          </div>
        </Button>
        <br />
      </>
    );
  }
}

