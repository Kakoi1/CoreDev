import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import('./pages/Home/Home'));
const CareerPage = lazy(() => import('./pages/Careers/Careers'));
const SoftwarePage = lazy(() => import('./pages/Products/Software'));
const SoftwareProductPage = lazy(() => import('./pages/Products/SoftwareProduct/SoftwareProduct'));
const HardwarePage = lazy(() => import('./pages/Products/Hardware'));
const HardwareProductPage = lazy(() => import('./pages/Products/HardwareProd/Product'));
const ProductDetailsPage = lazy(() => import('./pages/Products/HardwareProd/ProductDetails')); // New Page
const ClientPage = lazy(() => import('./pages/Clients/Clients'));

function App() {
  return (
    <> 
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/Products/Software" element={<SoftwarePage />}></Route>
              <Route path="/Products/Software/:product" element={<SoftwareProductPage/>}></Route>
              <Route path="/Products/Hardware" element={<HardwarePage />} ></Route>
              <Route path="/Clients" element={<ClientPage />} ></Route>
              <Route path="/careers" element={<CareerPage />} ></Route>
              <Route path="/Products/Hardware/:category" element={<HardwareProductPage />} ></Route>
              <Route path="/Products/Hardware/details" element={<ProductDetailsPage />} > </Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
