import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

const PrintableContent = React.forwardRef(({ invoiceData }, ref) => {
  return (
    <div ref={ref} className="print-area">
      <h2 style={{ textAlign: 'center' }}>فاتورة مبيعات</h2>
      <p>العميل: {invoiceData.customer}</p>
      <p>التاريخ: {invoiceData.date}</p>
      <hr />
      <table>
        <thead>
          <tr>
            <th>الصنف</th>
            <th>الكمية</th>
            <th>السعر</th>
            <th>الخصم</th>
            <th>الإجمالي</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>{item.price}</td>
              <td>{item.discount}</td>
              <td>{(item.qty * item.price) - item.discount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <p><strong>الإجمالي النهائي:</strong> {invoiceData.total}</p>
    </div>
  );
});

const PrintableInvoice = ({ invoiceData }) => {
  const componentRef = useRef();

  return (
    <div style={{ marginTop: '30px', textAlign: 'center' }}>
      <ReactToPrint
        trigger={() => <button>🖨️ طباعة الفاتورة</button>}
        content={() => componentRef.current}
      />
      <div style={{ display: 'none' }}>
        <PrintableContent ref={componentRef} invoiceData={invoiceData} />
      </div>
    </div>
  );
};

export default PrintableInvoice;
