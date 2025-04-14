
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Index from './pages/Index';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import { DataProvider } from './components/DataProvider';
import './App.css';

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster position="top-right" />
      </Router>
    </DataProvider>
  );
}

export default App;
