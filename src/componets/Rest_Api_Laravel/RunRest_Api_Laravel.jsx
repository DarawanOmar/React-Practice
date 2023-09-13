import React from 'react'
import App from './pages/App'
import {Routes,Route, useLocation} from 'react-router-dom'
import Navbar from './components/Navbar'
import Properties from './pages/Properties'
import Intro01 from './pages/Intro01'
import Intro02 from './pages/Intro02'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import Property from './pages/Property'
import Contact from './pages/Contact'
import AddProperty from './pages/AddProperty'
import Profile from './pages/Profile'
import Users from './pages/Users'
import ProfileUsers from './pages/ProfileUsers'
import Tests from './pages/Tests'
import Setting from './pages/Setting'
import SearchPrtoperty from './pages/SearchPrtoperty'
import PropertyEdit from './pages/PropertyEdit'
import FavoraiteProperties from './pages/FavoraiteProperties'
import ChangePassword from './pages/ChangePassword'
import PrivicyAndPoliciy from './pages/PrivicyAndPoliciy'
import ChangeName from './pages/ChangeName'

const RunRestApiLaravel = () => {
  const location = useLocation();

  // An array of paths where you don't want to show the Navbar
  const pathsWithoutNavbar = ['/', '/intro02', '/login'];

  return (
    <div className='font-realEstate2'>
      {/* Conditionally render Navbar */}
      {!pathsWithoutNavbar.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path='/'>
            <Route path='/home' element={<App/>}/>
            <Route index element={<Intro01/>}/>
        </Route>
        <Route path='/intro02' element={<Intro02/>}/>
        <Route path='/properties' element={<Properties/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/properties/property/:id' element={<Property/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/addproperty' element={<AddProperty/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/profileuser/:id' element={<ProfileUsers/>}/>
        <Route path='/testing' element={<Tests/>}/>
        <Route path='/setting' element={<Setting/>}/>
        <Route path='/favoraiteproperties' element={<FavoraiteProperties/>}/>
        <Route path='/searchproperty/:city_id' element={<SearchPrtoperty/>}/>
        <Route path='/profile/editproperty/:id' element={<PropertyEdit/>}/>
        <Route path='/changepassword' element={<ChangePassword/>}/>
        <Route path='/changename' element={<ChangeName/>}/>
        <Route path='/privicyandpoliciy' element={<PrivicyAndPoliciy/>}/>
      </Routes>
    </div>
  );
}

export default RunRestApiLaravel;