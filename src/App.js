import React, { useState } from 'react';
import './styles/app.css';
import './styles/InvoiceHeader.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InvoiceSummary from './components/InvoiceSummary';
import InvoiceHeader from './components/InvoiceHeader';
import ProductDetails from "./components/ProductDetails";
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
        <Route
          path="/"
          element={
            <div className="App">
              <InvoiceHeader
                invoiceNumber={formData.invoiceNumber}
                customerNumber={formData.customerNumber}
                onChange={handleChange}
              />
              <ProductDetails onChange={handleChange} />
               
            </div>
          }
        />
        <Route
          path="/invoice"
          element={
            <div className="App">
              <InvoiceSummary />
            </div>
          }
        />
        <Route path="/summary" element={<InvoiceSummary />} />
      </Routes>
    </Router>
  );
}

export default App;




// const invoiceData = {
//   customer: "عميل نقدي",
//   date: "24/06/2025",
//   items: [
//     { name: "منتج 1", qty: 2, price: 100, discount: 10 },
//     { name: "منتج 2", qty: 1, price: 200, discount: 0 }
//   ],
//   total: 390
// };
// function App() {
//   return (
//     <div className="App">
//       <InvoiceHeader />
//       <ProductTable />
     
      
//       <ActionButtons />
//          <DownloadInvoicePdf invoiceData={invoiceData} />
//           <TotalsPanel />
//           <AccountingEntries />
//     </div>
//   );
// }
//export default App;
