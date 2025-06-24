import React from 'react';

const TotalsPanel = () => {
  return (
    <div className="totals-panel">
      <label>الإجمالي: <input type="number" readOnly /></label>
      <label>خصم %: <input type="number" /></label>
      <label>بعد الخصم: <input type="number" readOnly /></label>
      <label>ضريبة %: <input type="number" /></label>
      <label>قيمة الفاتورة: <input type="number" readOnly /></label>
      <button>ترحيل</button>
    </div>
  );
};

export default TotalsPanel;
