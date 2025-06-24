import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const DownloadInvoicePdf = ({ invoiceData }) => {
  const invoiceRef = useRef();

  const downloadPdf = () => {
    const input = invoiceRef.current;
    html2canvas(input, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save("فاتورة.pdf");
    });
  };

  return (
    <div style={{ marginTop: '30px', textAlign: 'center' }}>
      <button onClick={downloadPdf}>📥 تحميل كـ PDF</button>

      <div ref={invoiceRef} style={{ padding: 20, width: '100%', background: 'white', direction: 'rtl' }}>
        <h2 style={{ textAlign: 'center' }}>فاتورة مبيعات</h2>
        <p>العميل: {invoiceData.customer}</p>
        <p>التاريخ: {invoiceData.date}</p>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr>
              <th style={th}>الصنف</th>
              <th style={th}>الكمية</th>
              <th style={th}>السعر</th>
              <th style={th}>الخصم</th>
              <th style={th}>الإجمالي</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.items.map((item, i) => (
              <tr key={i}>
                <td style={td}>{item.name}</td>
                <td style={td}>{item.qty}</td>
                <td style={td}>{item.price}</td>
                <td style={td}>{item.discount}</td>
                <td style={td}>{(item.qty * item.price) - item.discount}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr />
        <p><strong>الإجمالي النهائي:</strong> {invoiceData.total}</p>
      </div>
    </div>
  );
};

const th = {
  border: '1px solid #000',
  padding: '5px',
  backgroundColor: '#eee',
};

const td = {
  border: '1px solid #000',
  padding: '5px',
};

export default DownloadInvoicePdf;
