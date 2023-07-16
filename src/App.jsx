import React from 'react'
import Home from './components/homePage/Home'
import Header from './components/header/Header'
import AboutUs from './components/aboutUs/AboutUs'
import Services from './components/services/Services'
import ServicesPackages from './components/servicesPackages/ServicesPackages'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Faq from './components/faq/Faq'
import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/services/engagement" element={<ServicesPackages/>}/>
        <Route path="/services/dateNight" element={<ServicesPackages/>}/>
        <Route path="/services/promposal" element={<ServicesPackages/>}/>
        <Route path="/services/anniversary" element={<ServicesPackages/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Route>
    )
  )
  return (
      <>
       <RouterProvider router={router}/>
      </>
   

    
  )
}

export default App

const Root= () => {
  return (
    <>
      < div className='hoamundo'>
    <Header/>
  </div>
    </>

  )
}