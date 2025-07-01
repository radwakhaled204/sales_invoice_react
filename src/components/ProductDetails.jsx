import React, { useState } from "react";
import "../styles/InvoiceHeader.css";
import { useNavigate } from "react-router-dom";

const ProductDetails = ({ onChange }) => {
  const navigate = useNavigate();

  const [rows, setRows] = useState([
    {
      selected: false,
      month: 6,
      year: 2025,
      quantity: 10,
      expiry: false,
      bonus: 2,
      stock: 20,
      pack: 1,
      price: 100,
      discount: "5%",
      priceAfter: 95,
      total: 950,
    },
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      {
        selected: false,
        month: 6,
        year: 2025,
        quantity: 0,
        expiry: false,
        bonus: 0,
        stock: 0,
        pack: 1,
        price: 0,
        discount: "0%",
        priceAfter: 0,
        total: 0,
      },
    ]);
  };

  const goToInvoice = () => {
    navigate("/invoice");
  };

  return (
    <div className="product-details">
      <h2 className="section-title">بيانات المنتج</h2>

    
      <div className="form-row">
        <div className="form-group-inline">
          <label htmlFor="label">كود المنشأة:</label>
          <input type="text" name="label" id="label" onChange={onChange} />
        </div>

        <div className="form-group-inline-name">
          <label htmlFor="bareCode">Bare Code:</label>
          <input type="text" name="bareCode" id="bareCode" onChange={onChange} />
        </div>

        <div className="checkbox-group">
          <label>
            <input type="checkbox" name="mainPackage" />
            عبوة أساسية
          </label>
          <label>
            <input type="checkbox" name="purchaseOrder" />
            أمر الشراء
          </label>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group-inline-item">
          <input
            type="number"
            name="quantity"
            defaultValue="1"
            onChange={onChange}
          />
        </div>

        <div className="form-group-inline-name">
          <input
            type="text"
            name="extraField"
            placeholder="اسم المنتج"
            onChange={onChange}
          />
        </div>

        <div className="form-group-inline">
          <input
            type="text"
            name="leftExtra"
            placeholder=""
            onChange={onChange}
          />
        </div>

        <div className="form-row align-middle">
          <div className="button-row">
            <button>جديد</button>
            <button>إضافة</button>
            <button>طباعة</button>
            <button>الاجمالي</button>
            <button>تسعير دواء</button>
            <button onClick={goToInvoice}>اجمالي الفاتورة</button>
            <button onClick={addRow}> إضافة صف </button>
          </div>
        </div>
      </div>

      <table className="editable-product-table">
        <thead>
          <tr>
            <th>اختيار</th>
            <th>شهر</th>
            <th>سنة</th>
            <th>كمية</th>
            <th>ت.الصلاحية</th>
            <th>بونص</th>
            <th>رصيد</th>
            <th>عبوة</th>
            <th>سعر</th>
            <th>ن.خصم</th>
            <th>سعر بعد</th>
            <th>قيمة بعد</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td><input type="checkbox" defaultChecked={row.selected} /></td>
              <td><input type="number" defaultValue={row.month} className="table-input" /></td>
              <td><input type="number" defaultValue={row.year} className="table-input" /></td>
              <td><input type="number" defaultValue={row.quantity} className="table-input" /></td>
              <td><input type="checkbox" defaultChecked={row.expiry} /></td>
              <td><input type="number" defaultValue={row.bonus} className="table-input" /></td>
              <td><input type="number" defaultValue={row.stock} className="table-input" /></td>
              <td><input type="number" defaultValue={row.pack} className="table-input" /></td>
              <td><input type="number" defaultValue={row.price} className="table-input" /></td>
              <td><input type="text" defaultValue={row.discount} className="table-input" /></td>
              <td><input type="number" defaultValue={row.priceAfter} className="table-input" /></td>
              <td><input type="number" defaultValue={row.total} className="table-input" /></td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  );
};

export default ProductDetails;
