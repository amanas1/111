import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import ServiceDistrictPage from "./pages/ServiceDistrictPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/uslugi/:serviceId/:districtId" element={<ServiceDistrictPage />} />
        </Routes>
        <Footer />
        <FloatingButtons />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
