import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Route, Routes} from 'react-router-dom'  
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import Login from './components/Login/Login';
import AddMember from './components/admin/AddMember';
import EditMember from './components/admin/EditMember';
import Member from './components/admin/Member';
import ViewMember from './components/admin/ViewMember';
const App = () => {
  return (
    <>
    {window.location.pathname !== '/' ? <Header /> : null}  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/member' element={<Member/>} />
        <Route path='/add-member' element={<AddMember/>} />
        <Route path='/edit-member' element={<EditMember/>} />
        <Route path='/view-member' element={<ViewMember/>} />
      </Routes>
      
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
