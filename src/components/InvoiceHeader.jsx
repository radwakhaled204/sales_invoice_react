// import React from 'react';

// const InvoiceHeader = () => {
//   return (
//     <div className="invoice-header">
//       <label>رقم الفاتورة: <input type="text" /></label>
//       <label>تاريخ  الفاتورة: <input type="date" /></label>
//       <label>العميل: <input type="text" /></label>
//       <label>المستلم: <input type="text" /></label>
//       <label>نوع العملية:
//         <select>
//           <option>صرف</option>
//           <option>شراء</option>
//         </select>
//       </label>
//       <label>المخزن الرئيسي:
//         <select>
//           <option>الرئيسي</option>
//           <option>الفرعي</option>
//         </select>
//       </label>
//             <label>المخزن الفرعي:
//         <select>
//           <option>الرئيسي</option>
//           <option>الفرعي</option>
//         </select>
//       </label>
//     </div>
//   );
// };

// export default InvoiceHeader;

import React from "react";
import "../styles/InvoiceHeader.css";

const InvoiceHeader = ({ invoiceNumber, customerNumber, onChange }) => {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="invoice-header">
      <h2 className="section-title">بيانات الفاتورة</h2>

      <div className="form-row">
        <div className="form-group">
          <label>رقم الفاتورة:</label>
          <input
            type="text"
            name="invoiceNumber"
            value={invoiceNumber}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <label>تاريخ الفاتورة:</label>
          <input
            type="date"
            name="invoiceDate"
            defaultValue={today}
            onChange={onChange}
          />
        </div>

        <div className="form-group form-inline">
          <label style={{marginBottom: '0px'}}>
            <input type="checkbox" />
            اختيار العميل
          </label>
          <div className="inline-fields">
            <input
              type="text"
              name="customerNumber"
              value={customerNumber}
              placeholder="1020"
              onChange={onChange}
              className="small-input"
            />
            <select name="subStore" onChange={onChange} className="large-select">
              <option>اختر</option>
              <option value="sub1">1</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>
            <input type="checkbox" />
            تحديد المستلم
          </label>
          <select name="receiver" onChange={onChange}>
            <option>اختر</option>
            <option value="sub1">1</option>
          </select>
        </div>

        <div className="form-group">
          <label>
            <input type="checkbox" />
            تحديد الأمر بالصرف
          </label>
          <select name="orderBy" onChange={onChange}>
            <option>اختر</option>
            <option value="sub1">1</option>
          </select>
        </div>

        <div className="form-group">
          <label>تاريخ الإذن:</label>
          <input type="date" name="authorizationDate" defaultValue={today} />
        </div>

        <div className="form-group form-inline">
          <label style={{ marginBottom: '0px' }}>الدفترى:</label>
          <div className="inline-fields">
            <input type="text" name="manualNumber" className="small-input" />
            <button>طباعة الدفترى</button>
          </div>
        </div>

        <div className="form-group form-inline">
          <label style={{ marginBottom: '0px' }}>صرف:</label>
          <div className="inline-fields fill-row">
            <input type="text" value="صرف" readOnly className="tiny-input" />
            <input type="text" value="المبيعات" readOnly className="tiny-input" />
            <input type="date" defaultValue={today} readOnly className="tiny-input" />
          </div>
        </div>

        <div className="form-group">
          <label>المخزن الرئيسي:</label>
          <select name="mainStore" onChange={onChange}>
            <option>اختر</option>
            <option value="main1">الرئيسي 1</option>
          </select>
        </div>

        <div className="form-group">
          <label>المخزن الفرعي:</label>
          <select name="subStore" onChange={onChange}>
            <option>اختر</option>
            <option value="sub1">الفرعي 1</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default InvoiceHeader;
