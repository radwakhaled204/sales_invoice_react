import React from "react";
import "../styles/InvoiceHeader.css";

const ProductDetails = ({ onChange }) => {
  return (
    <div className="product-details">
      <h2 className="section-title">بيانات المنتج</h2>
        <div className="product-details">
  <h2 className="section-title">بيانات المنتج</h2>

  {/* First row: كود المنشأة and Bare Code */}
  <div className="form-row">
    <div className="form-group small">
      <label>كود المنشأة:</label>
      <input type="text" name="label" onChange={onChange} />
    </div>

    <div className="form-group small">
      <label>Bare Code:</label>
      <input type="text" name="bareCode" onChange={onChange} />
    </div>
  </div>

  <div className="form-row">
    
    <div className="form-group">
      <input
        type="number"
        name="quantity"
        defaultValue="1"
        onChange={onChange}
      />
    </div>
    

    <div className="form-group">
      <input
        type="text"
        name="extraField"
        defaultValue="مساعد خنق ٢٠١٧"
        placeholder="اسم المنتج"
        onChange={onChange}
      />
    </div>

    <div className="form-group">
      <input
        type="text"
        name="leftExtra"
        placeholder=""
        onChange={onChange}
      />
    </div>
    
  </div>


  <div className="form-row align-middle">
    
    <div className="button-row">
      <button>جديد</button>
      <button>إضافة</button>
      <button>طباعة</button>
      <button>الاجمالي</button>
      <button>تسعير دواء</button>
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
