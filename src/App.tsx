import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import ServiceDistrictPage from "./pages/ServiceDistrictPage";
import Services from "./pages/Services";
import Prices from "./pages/Prices";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import Reviews from "./pages/Reviews";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
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
          <Route path="/services" element={<Services />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
        <FloatingButtons />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
