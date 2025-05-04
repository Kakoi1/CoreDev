import { Route, Routes } from "react-router-dom";
import MainLayout  from "../layout/MainLayout"
import { lazy } from "react";


const HomePage = lazy(() => import('../pages/Home/Home'));
const CareerPage = lazy(() => import('../pages/Careers/Careers'));
const ProductPage = lazy(() => import('../pages/Products/ProductPage'));
const ProductDetailsPage = lazy(() => import('../features/hardware-products/components/HardwareProduct'));
const ClientPage = lazy(() => import('../pages/Clients/Clients'));
const ContactPage = lazy(() => import('../pages/contactus/Contact-us'));
const AboutPage = lazy(() => import('../pages/WhoweAre/WhoWeAre'));
const OurTeamPage = lazy(() => import('../pages/OurTeam/OurTeam'));
const RegultionPage = lazy(() => import ('../pages/regulation/Regulation'));
const MilestonePage = lazy(() => import ('../pages/Milestone/MileStone'));
const PolicyPage = lazy(() => import ('../pages/policy/Policy'));



export const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/Products" element={<ProductPage />}></Route>
                <Route
                    path="/Products/Hardware"
                    element={<ProductPage />}
                ></Route>
                <Route
                    path="/Products/Software"
                    element={<ProductPage />}
                ></Route>
                <Route path="/Clients" element={<ClientPage />}></Route>
                <Route path="/careers" element={<CareerPage />}></Route>
                <Route path="/Contact-us" element={<ContactPage />}></Route>
                <Route path="/about/who-we-are" element={<AboutPage />}></Route>
                <Route
                    path="/about/government-regulation"
                    element={<RegultionPage />}
                ></Route>
                <Route
                    path="/about/milestone"
                    element={<MilestonePage />}
                ></Route>
                <Route path="/Privacy-policy" element={<PolicyPage />}></Route>
                <Route path="/about/our-team" element={<OurTeamPage />}></Route>
                <Route
                    path="/Products/Hardware/:category"
                    element={<ProductDetailsPage />}
                ></Route>
            </Route>
        </Routes>
    );
};
