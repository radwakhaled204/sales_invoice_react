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
          <tr>
            <td><input type="checkbox" /></td>
            <td><input type="number" name="month" defaultValue="6" className="table-input" /></td>
            <td><input type="number" name="year" defaultValue="2025" className="table-input" /></td>
            <td><input type="number" name="quantity" defaultValue="10" className="table-input" /></td>
            <td><input type="date" name="expiryDate" defaultValue="2026-01-01" className="table-input" /></td>
            <td><input type="number" name="bonus" defaultValue="2" className="table-input" /></td>
            <td><input type="number" name="stock" defaultValue="20" className="table-input" /></td>
            <td><input type="number" name="pack" defaultValue="1" className="table-input" /></td>
            <td><input type="number" name="price" defaultValue="100" className="table-input" /></td>
            <td><input type="text" name="discount" defaultValue="5%" className="table-input" /></td>
            <td><input type="number" name="priceAfter" defaultValue="95" className="table-input" /></td>
            <td><input type="number" name="total" defaultValue="950" className="table-input" /></td>
          </tr>
        </tbody>

      </table>
    </div>
  );
};

export default ProductDetails;
