import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './login.jsx'
import Business from './BusinessCustomers.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormPropsTextFields from './FormPropsTextFields.jsx'
import Admin from './Admin.jsx'
import ListServices from './ListServices.jsx'
import Setservices from './Set.jsx'
import ExampleTrackChild from './Details.jsx'
import ExampleTrackChildd from './Details.jsx'
import ListAppointments from './ListAppointments.jsx'
// import SetSetService from './SetAppointment.jsx'
import SetAppointment from './SetAppointment.jsx'
import AsortAppointments from './AsortAppointments.jsx'
import Client from './Client.jsx'
import AdminBusinessToEdit from './adminDetailsToEdit.jsx'
import HomePage from './home.jsx'
import BusinessDataEdit from './businessDataEdit.jsx'
import BusinessData from './BusinessData.jsx'
import NewAppointment from './NewAppointment.jsx'
import UsersAppointment from './userAppointment.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='admin' element={<Admin></Admin>} ></Route>
      <Route path='client' element={<Client></Client>}> </Route>
      {/* <Route path='listServices' element={<ListServices></ListServices>} > </Route> */}
      {/* <Route path='ListAppointments' element={<ListAppointments></ListAppointments>}></Route> */}
    </Routes>
    {/* <EexampleTrackChild/> */}
    {/* <AdminBusinessToEdit/> */}
    {/* <Login/> */}
    <HomePage/>
    {/* <UsersAppointment/> */}
    {/* <ExampleTrackChildd/> */}
   {/* <AsortAppointments/> */}
    {/* <ExampleTrackChild/> */}
    {/* <Admin/> */}
    {/* <FormPropsTextFields/> */}
    {/* <ListServices/> */}
    {/* <NewAppointment/> */}
    {/* <SetAppointment/> */}
    {/* <handleOpenModal/> */}
    {/* <openForm/> */}
    {/* <Client/> */}
    {/* <SetService/> */}
    {/* <BusinessData/> */}
    {/* <BusinessDataEdit/> */}
    </BrowserRouter>
    {/* <App/> */}
  </React.StrictMode>,
)


