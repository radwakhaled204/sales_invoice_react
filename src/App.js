import React, { useState } from 'react';
import './styles/app.css';
import './styles/InvoiceHeader.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import InvoiceSummary from './components/InvoiceSummary';
import InvoiceHeader from './components/InvoiceHeader';
import ProductDetails from "./components/ProductDetails";
import Invoice from './components/Invoice';
import generateInvoicePdf from "./components/generateInvoicePdf";


function App() {
  const [formData, setFormData] = useState({
    invoiceNumber: "",
    customerNumber: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Invoice" />} />
        <Route path="/Invoice" element={<Invoice />} />
        
       
      </Routes>
    </Router>
  );
}

export default App;
