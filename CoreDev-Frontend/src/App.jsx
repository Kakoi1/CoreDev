import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import { lazy, Suspense } from "react"


const HomePage = lazy(() => import('./pages/Home/Home'));
const CareerPage = lazy(() => import('./pages/Careers/Careers'));
const SoftwarePage = lazy(() => import('./pages/Products/Software'));
const HardwarePage = lazy(() => import('./pages/Products/Hardware'));
const HardwareProductPage = lazy(() => import('./pages/Products/HardwareProd/Product'));
const ClientPage = lazy(() => import('./pages/Clients/Clients'));
const ContactPage = lazy(() => import('./pages/contactus/Contact-us'));


function App() {
 
  return (
    <> 
      <BrowserRouter>
       <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/Products/Software" element={<SoftwarePage/>}></Route>
          <Route path="/Products/Hardware" element={<HardwarePage/>}></Route>
          <Route path="/Clients" element={<ClientPage/>}></Route>
          <Route path="/careers" element={<CareerPage/>}></Route>
          <Route path="/Products/Hardware/:category" element={<HardwareProductPage/>}></Route>
          <Route path="/Contact-us" element={<ContactPage/>}></Route>
        </Route>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
