import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { lazy } from "react";

const HomePage = lazy(() => import('@pages/Home/Home'));
const CareerPage = lazy(() => import('@pages/Careers/Careers'));
const ProductPage = lazy(() => import('@pages/Products/ProductPage'));
const HardwareProductPage = lazy(() => import('@features/hardwareProducts/components/HardwareProduct'));
const ClientPage = lazy(() => import('@pages/Clients/Clients'));
const ContactPage = lazy(() => import('@pages/contactus/Contact-us'));
const AboutPage = lazy(() => import('@pages/About-us/About_us'));
const PolicyPage = lazy(() => import('@pages/policy/Policy'));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/Products" element={<ProductPage />} />
        <Route path="/Products/Hardware" element={<ProductPage />} />
        <Route path="/Products/Software" element={<ProductPage />} />
        <Route path="/Clients" element={<ClientPage />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/Contact-us" element={<ContactPage />} />
        <Route path="/About_us" element={<AboutPage />} />
        <Route path="/Privacy-policy" element={<PolicyPage />} />
        <Route path="/Products/Hardware/:category" element={<HardwareProductPage />} />
         <Route path="/Products/:category" element={<HardwareProductPage />} />
      </Route>
    </Routes>
  );
};