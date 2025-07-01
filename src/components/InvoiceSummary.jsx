import React, { useState } from "react";
import "../styles/InvoiceHeader.css";
import { generateInvoicePdf } from '../components/generateInvoicePdf';
import { useNavigate } from "react-router-dom";



const InvoiceSummary = () => {
  const [summary, setSummary] = useState({
    total: 0,
    discount: 0,
    tax: 0,
    additionalTax: 0,
  });
const navigate = useNavigate();

  const [journalEntries, setJournalEntries] = useState([
    { debitAmount: "", debitParty: "", creditAmount: "", creditParty: "" },
  ]);

  const handleSummaryChange = (e) => {
    const { name, value } = e.target;
    setSummary((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  const calculateAfterDiscount = summary.total - (summary.total * summary.discount) / 100;
  const taxValue = (calculateAfterDiscount * summary.tax) / 100;
  const invoiceValue = calculateAfterDiscount + taxValue;
  const additionalTaxValue = (invoiceValue * summary.additionalTax) / 100;
  const finalTotal = invoiceValue + additionalTaxValue;

  const handleEntryChange = (index, field, value) => {
    const updated = [...journalEntries];
    updated[index][field] = value;
    setJournalEntries(updated);
  };

  const addRow = () => {
    setJournalEntries([
      ...journalEntries,
      { debitAmount: "", debitParty: "", creditAmount: "", creditParty: "" },
    ]);
  };

return (
  <div className="invoice-summary">
  

    <div className="summary-layout">
      {/* يمين: تفاصيل الفاتورة */}
      <div className="summary-table">
        <div className="row">
          <label>الإجمالي:</label>
          <input type="number" name="total" value={summary.total} onChange={handleSummaryChange} />
        </div>
        <div className="row">
          <label>خصم (%):</label>
          <input type="number" name="discount" value={summary.discount} onChange={handleSummaryChange} />
        </div>
        <div className="row">
          <label>بعد الخصم:</label>
          <span>{calculateAfterDiscount.toFixed(2)}</span>
        </div>
        <div className="row">
          <label>ضريبة (%):</label>
          <input type="number" name="tax" value={summary.tax} onChange={handleSummaryChange} />
        </div>
        <div className="row">
          <label>قيمة الفاتورة:</label>
          <span>{invoiceValue.toFixed(2)}</span>
        </div>
        <div className="row">
          <label>ض.خ إضافية (%):</label>
          <input type="number" name="additionalTax" value={summary.additionalTax} onChange={handleSummaryChange} />
        </div>
        <div className="row">
          <label>الإجمالي بعدها:</label>
          <span>{finalTotal.toFixed(2)}</span>
        </div>
       <button className="post-button" onClick={() => generateInvoicePdf(summary, journalEntries)}>
  ترحيل
</button>
<button className="post-button" onClick={() => navigate(-1)}>
  السابق
</button>

      </div>

     
      <div className="journal-container">
        <table className="journal-table">
          <thead>
            <tr>
              <th>المبلغ (مدين)</th>
              <th>الطرف المدين</th>
              <th>المبلغ (دائن)</th>
              <th>الطرف الدائن</th>
            </tr>
          </thead>
          <tbody>
            {journalEntries.map((entry, index) => (
              <tr key={index}>
                <td><input type="text" value={entry.debitAmount} onChange={(e) => handleEntryChange(index, "debitAmount", e.target.value)} /></td>
                <td><input type="text" value={entry.debitParty} onChange={(e) => handleEntryChange(index, "debitParty", e.target.value)} /></td>
                <td><input type="text" value={entry.creditAmount} onChange={(e) => handleEntryChange(index, "creditAmount", e.target.value)} /></td>
                <td><input type="text" value={entry.creditParty} onChange={(e) => handleEntryChange(index, "creditParty", e.target.value)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={addRow}>إضافة صف جديد</button>
      </div>
    </div>
  </div>
);
};

export default InvoiceSummary;
