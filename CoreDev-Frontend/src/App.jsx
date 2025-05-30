import { BrowserRouter } from "react-router-dom";
import NoticeBanner from "./components/Footer/NoticeBanner";
import { AppRoutes } from "./routes/AppRoutes";
import { queryClient } from "lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <NoticeBanner />
                <AppRoutes />
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
}

export default App;
