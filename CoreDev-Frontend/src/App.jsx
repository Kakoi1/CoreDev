import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import('./pages/Home/Home'));
const CareerPage = lazy(() => import('./pages/Careers/Careers'));
const SoftwarePage = lazy(() => import('./pages/Products/Software'));
const SoftwareProductPage = lazy(() => import('./pages/Products/SoftwareProduct/SoftwareProduct'));
const HardwarePage = lazy(() => import('./pages/Products/Hardware'));
const HardwareProductPage = lazy(() => import('./pages/Products/HardwareProd/Product'));
const ProductDetailsPage = lazy(() => import('./pages/Products/HardwareProd/ProductDetails'));
const ClientPage = lazy(() => import('./pages/Clients/Clients'));
const ContactPage = lazy(() => import('./pages/contactus/Contact-us'));
const AboutPage = lazy(() => import('./pages/WhoweAre/WhoWeAre'));
const PartnerPage = lazy(() => import ('./pages/Partners/Partners'));
const RegultionPage = lazy(() => import ('./pages/regulation/Regulation'));
const MilestonePage = lazy(() => import ('./pages/Milestone/MileStone'));
const PolicyPage = lazy(() => import ('./pages/policy/Policy'));


function App() {
  return (
    <> 
      <BrowserRouter>
       <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/Products/Software" element={<SoftwarePage/>}></Route>
          <Route path="/Products/Hardware" element={<HardwarePage/>}></Route>
          <Route path="/Products/Software/:product" element={<SoftwareProductPage/>}></Route>
          <Route path="/Clients" element={<ClientPage/>}></Route>
          <Route path="/partners" element={<PartnerPage/>}></Route>
          <Route path="/careers" element={<CareerPage/>}></Route>
          <Route path="/Contact-us" element={<ContactPage/>}></Route>
          <Route path="/about/who-we-are" element={<AboutPage/>}></Route>
          <Route path="/about/government-regulation" element={<RegultionPage/>}></Route>
          <Route path="/about/milestone" element={<MilestonePage/>}></Route>
          <Route path="/Privacy-policy" element={<PolicyPage/>}></Route>
          <Route path="/Products/Hardware/:category" element={<HardwareProductPage/>}></Route>
          <Route path="/Products/Hardware/details" element={<ProductDetailsPage />} > </Route>
        </Route>
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
