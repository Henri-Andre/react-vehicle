import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vehicule from './card_vehicle/Vehicule';
import App from "./composants/app/App";
import Contact from './contact/Contact';
import AddVehicle from './form_vehicle/AddVehicle';
import store from "./redux/store";
import reportWebVitals from './reportWebVitals';
import Sign_up from './singup/Sign_up';
import "./styles/_index.scss";
import VehicleByType from './vehicleByType/VehicleByType';
import VehiclesInfo from './vehicle_info/VehiclesInfo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>

        <BrowserRouter>

            <Routes>

                <Route path='/' element={<App/>}/>

                <Route path='/sign-up' element={<Sign_up/>}/>

                <Route path='/vehicles' element={<Vehicule/>}/>

                <Route path='/vehicles/add' element={<AddVehicle/>}/>

                <Route path='/contact' element ={<Contact/>}/>

                <Route path='/vehicles/type/:type_id' element ={<VehicleByType/>}/>

                <Route path='/vehicles_id/:id' element ={<VehiclesInfo/>}/>

            </Routes>

        </BrowserRouter>

      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
