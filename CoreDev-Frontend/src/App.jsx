import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { lazy } from "react";
import { useEffect } from 'react';
const HomePage = lazy(() => import('./pages/Home/Home'));
const CareerPage = lazy(() => import('./pages/Careers/Careers'));
const ProductPage = lazy(() => import('./pages/Products/ProductPage'));
const SoftwareProductPage = lazy(() => import('./pages/Products/SoftwareProduct/SoftwareProduct'));
const IAccsPage = lazy(() => import('./pages/Products/SoftwareProduct/iAccs'));
const HardwarePage = lazy(() => import('./pages/Products/Hardware'));
const HardwareProductPage = lazy(() => import('./pages/Products/HardwareProd/Product'));
const ProductDetailsPage = lazy(() => import('./pages/Products/HardwareProd/ProductDetails'));
const ClientPage = lazy(() => import('./pages/Clients/Clients'));
const ContactPage = lazy(() => import('./pages/contactus/Contact-us'));
const AboutPage = lazy(() => import('./pages/WhoweAre/WhoWeAre'));
const OurTeamPage = lazy(() => import('./pages/OurTeam/OurTeam'));
const PartnerPage = lazy(() => import ('./pages/Partners/Partners'));
const RegultionPage = lazy(() => import ('./pages/regulation/Regulation'));
const MilestonePage = lazy(() => import ('./pages/Milestone/MileStone'));
const PolicyPage = lazy(() => import ('./pages/policy/Policy'));


function App() {
  
  useEffect(() => {
    const preloader = document.getElementById('loader-wrapper');
    if (preloader) {
      // Start fade out
      preloader.style.opacity = '0';
      // Remove after animation completes
      setTimeout(() => {
        preloader.remove();
      }, 500);
    }
  }, []);

  return (
    
    <> 
    
      <BrowserRouter>
       <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/Products" element={<ProductPage/>}></Route>
          <Route path="/Products/Hardware" element={<ProductPage/>}></Route>
          <Route path="/Products/Software" element={<ProductPage/>}></Route>
          {/* <Route path="/Products/:product" element={<SoftwareProductPage/>}></Route> */}
          <Route path="/Products/Software/iAccs" element={<IAccsPage/>}></Route>
          <Route path="/Clients" element={<ClientPage/>}></Route>
          {/* <Route path="/partners" element={<PartnerPage/>}></Route> */}
          <Route path="/careers" element={<CareerPage/>}></Route>
          <Route path="/Contact-us" element={<ContactPage/>}></Route>
          <Route path="/about/who-we-are" element={<AboutPage/>}></Route>
          <Route path="/about/government-regulation" element={<RegultionPage/>}></Route>
          <Route path="/about/milestone" element={<MilestonePage/>}></Route>
          <Route path="/Privacy-policy" element={<PolicyPage/>}></Route>
          <Route path="/about/our-team" element={<OurTeamPage/>}></Route>
          <Route path="/Products/Hardware/:category" element={<HardwareProductPage/>}></Route>
          <Route path="/Products/Hardware/details" element={<ProductDetailsPage />} > </Route>
        </Route>
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
