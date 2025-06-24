import React from 'react';
import './styles/app.css';
import './styles/InvoiceHeader.css';
import { useState } from "react";
import InvoiceHeader from './components/InvoiceHeader';
import ProductTable from './components/ProductTable';
import TotalsPanel from './components/TotalsPanel';
import AccountingEntries from './components/AccountingEntries';
import ActionButtons from './components/ActionButtons';
import DownloadInvoicePdf from './components/DownloadInvoicePdf';

import ProductDetails from "./components/ProductDetails";

function App() {
  const [formData, setFormData] = useState({
    invoiceNumber: "",
    customerNumber: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="App">
      <InvoiceHeader
        invoiceNumber={formData.invoiceNumber}
        customerNumber={formData.customerNumber}
        onChange={handleChange}
      />
      <ProductDetails onChange={handleChange} />
    </div>
    
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
