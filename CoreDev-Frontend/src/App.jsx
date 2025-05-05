import { BrowserRouter } from "react-router-dom";
import NoticeBanner from "./components/Footer/NoticeBanner";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
    return (
        <>
            <BrowserRouter>
                <NoticeBanner />
                <AppRoutes />
            </BrowserRouter>
        </>
    );
}

export default App;
