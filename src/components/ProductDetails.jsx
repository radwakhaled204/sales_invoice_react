import React from "react";
import "../styles/InvoiceHeader.css";

const ProductDetails = ({ onChange }) => {
  return (
    <div className="product-details">
      <h2 className="section-title">بيانات المنتج</h2>
        <div className="form-group">
          <label>كود المنشأة:</label>
          <input type="text" name="label" onChange={onChange} />
        </div>
      <div className="form-row">
        <div className="form-group">
          <label>Bare Code:</label>
          <input type="text" name="bareCode" onChange={onChange} />
        </div>


        <div className="form-group">
          <label>حقل آخر:</label>
          <input type="text" name="extraField" onChange={onChange} />
        </div>
      </div>
       <div className="form-group">
          <label>عدد القطع:</label>
          <input type="number" name="quantity" defaultValue="1" onChange={onChange} />
        </div>

      <div className="form-row">
        <button>جديد</button>
        <button>إضافة</button>
        <button>طباعة</button>
        <button>اجمالي</button>
        <button>تسعر دواء</button>
      </div>

      <table>
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
          <tr>
            <td><input type="checkbox" /></td>
            <td>6</td>
            <td>2025</td>
            <td>10</td>
            <td>2026-01-01</td>
            <td>2</td>
            <td>20</td>
            <td>1</td>
            <td>100</td>
            <td>5%</td>
            <td>95</td>
            <td>950</td>
          </tr>
          {/* مزيد من الصفوف حسب الحاجة */}
        </tbody>
      </table>
    </div>
  );
};

export default ProductDetails;
