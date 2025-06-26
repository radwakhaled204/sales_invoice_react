

import React, { useState } from "react";
import "../styles/app.css";
import { useNavigate } from "react-router-dom";

const Invoice = ({ onChange }) => {
  const navigate = useNavigate();

  const [rows, setRows] = useState([
    {
      unit: "",               
      quantity: 0,             
      price: 0,               
      discountPercent: 0,      
      discountValue: 0,        
      priceBeforeDiscount: 0,  
      valueBeforeDiscount: 0,  
      value: 0,                
      afterDiscount: 0,        
      finalDiscount: 0         
    }
  ]);

 
  const handleProductChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index] = {
      ...updatedRows[index],
      [field]: field === "unit" ? value : parseFloat(value) || 0,
    };

   
    const row = updatedRows[index];
    row.priceBeforeDiscount = row.price;
    row.discountValue = (row.price * row.discountPercent) / 100;
    row.afterDiscount = row.price - row.discountValue;
    row.valueBeforeDiscount = row.price * row.quantity;
    row.value = row.afterDiscount * row.quantity;
   

    setRows(updatedRows);
  };



  const goToInvoice = () => {
    navigate("/invoice");
  };

  return (
    <div className="header">
     <div className="four-sections-container">
  
      <div className="section">
        <div className="form-grid">
          <label>رقم الفاتورة</label>
          <input type="text" name="invoiceNumber" />

          <label>تاريخ الفاتورة</label>
          <input type="date" name="invoiceDate" />

          <label>رقم الإذن</label>
          <input type="text" name="permissionNumber" />

          <label>تاريخ الإذن</label>
          <input type="date" name="permissionDate" />

          <label>رقم دفترى</label>
          <input type="text" name="dafterNumber" />
        </div>
      </div>

     
      <div className="section">
        <div className="form-grid-2 ">
          <label>الكود</label>
          <input type="text" name="client" />
          <label>العميل</label>
          <input type="text" name="client" />
          <label>المبيعات</label>
          <input type="text" name="sales" />
          <label>المستلم</label>
          <select name="receiver">
            <option>اختر</option>
            <option value="sub1">1</option>
          </select>          
        </div>
      </div>   
<div className="section">
  <div className="form-grid-vertical">

 
    <div className="radio-group">
      <label className="radio-option">
        <input type="radio" name="status" value="registered" />
        مسجل
      </label>
      <label className="radio-option">
        <input type="radio" name="status" value="canceled" defaultChecked />
        ملغى
      </label>
      <label className="radio-option">
        <input type="radio" name="status" value="all" />
        الكل
      </label>
    </div>

  
    <div className="date-container">
      <input type="date" name="permissionDate1" />
      <input type="date" name="permissionDate2" />
    </div>


      <label>المخزن الرئيسي</label>
          <select name="mainStore">
      <option>المخزن الرئيسى</option>
      <option value="1">1</option>
    </select>


 

<label>المخزن الفرعي</label>
    <select name="subStore">
      <option>المخزن الفرعى</option>
      <option value="1">1</option>
    </select>

  </div>
</div>
<div className="section">
  <div className="date-grid-container">
    <div className="table-scroll-wrapper">
      <table className="data-grid">
        <thead>
          <tr>
            <th>كود</th>
            <th>الاسم</th>
            <th>الكمية</th>
            <th>الوحدة</th>
            <th>التصنيف</th>
            <th>السعر</th>
            <th>الضريبة</th>
            <th>المورد</th>
            <th>تاريخ الانتهاء</th>
            <th>الباركود</th>
            <th>الباركود</th>
            <th>الباركود</th>
            <th>الباركود</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001</td>
            <td>باراسيتامول</td>
            <td>50</td>
            <td>علبة</td>
            <td>مسكن</td>
            <td>12.50</td>
            <td>5%</td>
            <td>صيدليات المتحدة</td>
            <td>2025-12-30</td>
            <td>998822</td>
          </tr>
          <tr>
            <td>002</td>
            <td>أموكسيسيلين</td>
            <td>30</td>
            <td>كرتونة</td>
            <td>مضاد حيوي</td>
            <td>22.00</td>
            <td>0%</td>
            <td>دواء مصر</td>
            <td>2024-11-15</td>
            <td>889977</td>
          </tr>
          <tr>
            <td>002</td>
            <td>أموكسيسيلين</td>
            <td>30</td>
            <td>كرتونة</td>
            <td>مضاد حيوي</td>
            <td>22.00</td>
            <td>0%</td>
            <td>دواء مصر</td>
            <td>2024-11-15</td>
            <td>889977</td>
          </tr>
          <tr>
            <td>002</td>
            <td>أموكسيسيلين</td>
            <td>30</td>
            <td>كرتونة</td>
            <td>مضاد حيوي</td>
            <td>22.00</td>
            <td>0%</td>
            <td>دواء مصر</td>
            <td>2024-11-15</td>
            <td>889977</td>
          </tr>
          <tr>
            <td>002</td>
            <td>أموكسيسيلين</td>
            <td>30</td>
            <td>كرتونة</td>
            <td>مضاد حيوي</td>
            <td>22.00</td>
            <td>0%</td>
            <td>دواء مصر</td>
            <td>2024-11-15</td>
            <td>889977</td>
          </tr>
           <tr>
            <td>002</td>
            <td>أموكسيسيلين</td>
            <td>30</td>
            <td>كرتونة</td>
            <td>مضاد حيوي</td>
            <td>22.00</td>
            <td>0%</td>
            <td>دواء مصر</td>
            <td>2024-11-15</td>
            <td>889977</td>
          </tr>                                       
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>
<div className="section-divider"></div>
<div className="form-row-inline">
  <div className="form-group-inline">
    <label htmlFor="itemCode">كود الصنف</label>
    <input type="text" name="itemCode" id="itemCode" />
  </div>

  <div className="form-group-inline">
    <label htmlFor="itemName">اسم الصنف</label>
    <input type="text" name="itemName" id="itemName" />
  </div>

  <button className="action-button">جديد</button>
  <button className="action-button">إضافة</button>
</div>   
      <table className="data-grid-2">
        <thead>
          <tr>
            <th>وحدة</th>
            <th>كمية</th>
            <th>سعر</th>
            <th>ن خصم</th>
            <th>خصم</th>
            <th>س.ب.خصم</th>
            <th>قيمة ب خصم</th>
            <th>قيمة</th>
            <th>بعد خصم</th>
            <th>خصم</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={row.unit}
                  onChange={(e) => handleProductChange(index, "unit", e.target.value)}
                  className="table-input"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.quantity}
                  onChange={(e) => handleProductChange(index, "quantity", e.target.value)}
                  className="table-input"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.price}
                  onChange={(e) => handleProductChange(index, "price", e.target.value)}
                  className="table-input"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.discountPercent}
                  onChange={(e) => handleProductChange(index, "discountPercent", e.target.value)}
                  className="table-input"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.discountValue}
                  className="table-input"
                  readOnly
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.priceBeforeDiscount}
                  className="table-input"
                  readOnly
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.valueBeforeDiscount}
                  className="table-input"
                  readOnly
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.value}
                  className="table-input"
                  readOnly
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.afterDiscount}
                  className="table-input"
                  readOnly
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.finalDiscount}
                  onChange={(e) => handleProductChange(index, "finalDiscount", e.target.value)}
                  className="table-input"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
<div className="table-scroll-wrapper-2">
  <table className="data-grid">
    <thead>
      <tr>
        <th>وحدة</th>
        <th>كمية</th>
        <th>سعر</th>
        <th>ن خصم</th>
        <th>خصم</th>
        <th>س.ب.خصم</th>
        <th>قيمة ب خصم</th>
        <th>قيمة</th>
        <th>بعد خصم</th>
        <th>خصم</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>علبة</td>
        <td>50</td>
        <td>12.50</td>
        <td>5%</td>
        <td>2.50</td>
        <td>10.00</td>
        <td>500.00</td>
        <td>625.00</td>
        <td>593.75</td>
        <td>31.25</td>
      </tr>
      <tr>
        <td>كرتونة</td>
        <td>30</td>
        <td>22.00</td>
        <td>0%</td>
        <td>0.00</td>
        <td>22.00</td>
        <td>660.00</td>
        <td>660.00</td>
        <td>660.00</td>
        <td>0.00</td>
      </tr>
      <tr>
        <td>كرتونة</td>
        <td>20</td>
        <td>30.00</td>
        <td>10%</td>
        <td>3.00</td>
        <td>27.00</td>
        <td>540.00</td>
        <td>600.00</td>
        <td>570.00</td>
        <td>30.00</td>
      </tr>
      <tr>
        <td>شريط</td>
        <td>100</td>
        <td>5.00</td>
        <td>5%</td>
        <td>0.25</td>
        <td>4.75</td>
        <td>475.00</td>
        <td>500.00</td>
        <td>487.50</td>
        <td>12.50</td>
      </tr>
            <tr>
        <td>شريط</td>
        <td>100</td>
        <td>5.00</td>
        <td>5%</td>
        <td>0.25</td>
        <td>4.75</td>
        <td>475.00</td>
        <td>500.00</td>
        <td>487.50</td>
        <td>12.50</td>
      </tr>
            <tr>
        <td>شريط</td>
        <td>100</td>
        <td>5.00</td>
        <td>5%</td>
        <td>0.25</td>
        <td>4.75</td>
        <td>475.00</td>
        <td>500.00</td>
        <td>487.50</td>
        <td>12.50</td>
      </tr>
            <tr>
        <td>شريط</td>
        <td>100</td>
        <td>5.00</td>
        <td>5%</td>
        <td>0.25</td>
        <td>4.75</td>
        <td>475.00</td>
        <td>500.00</td>
        <td>487.50</td>
        <td>12.50</td>
      </tr>
            <tr>
        <td>شريط</td>
        <td>100</td>
        <td>5.00</td>
        <td>5%</td>
        <td>0.25</td>
        <td>4.75</td>
        <td>475.00</td>
        <td>500.00</td>
        <td>487.50</td>
        <td>12.50</td>
      </tr>
            <tr>
        <td>شريط</td>
        <td>100</td>
        <td>5.00</td>
        <td>5%</td>
        <td>0.25</td>
        <td>4.75</td>
        <td>475.00</td>
        <td>500.00</td>
        <td>487.50</td>
        <td>12.50</td>
      </tr>
            <tr>
        <td>شريط</td>
        <td>100</td>
        <td>5.00</td>
        <td>5%</td>
        <td>0.25</td>
        <td>4.75</td>
        <td>475.00</td>
        <td>500.00</td>
        <td>487.50</td>
        <td>12.50</td>
      </tr>
    </tbody>
  </table>
</div>
<div className="section-divider"></div>
     <div className="four-sections-container">
       <div className="section">
        <div className="form-grid">
          <label>الإجمالي</label>
          <input type="text" name="invoiceNumber" />

          <label>خصم</label>
         <input type="text" name="dafterNumber" />
          

          <label>ضريبة</label>
         <input type="text" name="dafterNumber" />


           <label>ض.خ. الاضافية</label>
          <input type="text" name="dafterNumber" />         
        </div>
      </div>   
             <div className="section">
        <div className="form-grid">
           <label> </label>
          <input type="text" name="invoiceNumber" />



          <label>بعد الخصم</label>
          <input type="text" name="dafterNumber" />



          <label>قيمة الفاتورة</label>
          <input type="text" name="dafterNumber" />
           <label>ض.خ. الاضافية</label>
          <input type="text" name="dafterNumber" />         
        </div>
      </div>     
    
 <div className="section"> 
 <div className="date-grid-container">
    <div className="table-scroll-wrapper">
<table className="data-grid">
  <thead>
    <tr>
      <th>المبلغ</th>
      <th>الطرف المدين</th>
      <th>المبلغ</th>
      <th>الطرف الدائن</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1500.00</td>
      <td>حساب المشتريات</td>
      <td>1500.00</td>
      <td>الصندوق</td>
    </tr>
    <tr>
      <td>2200.00</td>
      <td>المخزون</td>
      <td>2200.00</td>
      <td>البنك</td>
    </tr>
    <tr>
      <td>500.00</td>
      <td>حساب الأدوية</td>
      <td>500.00</td>
      <td>الموردين</td>
    </tr>
    <tr>
      <td>1000.00</td>
      <td>المصروفات العمومية</td>
      <td>1000.00</td>
      <td>الصندوق</td>
    </tr>
     <tr>
      <td>1000.00</td>
      <td>المصروفات العمومية</td>
      <td>1000.00</td>
      <td>الصندوق</td>
    </tr>
     <tr>
      <td>1000.00</td>
      <td>المصروفات العمومية</td>
      <td>1000.00</td>
      <td>الصندوق</td>
    </tr>
      <tr>
      <td>1000.00</td>
      <td>المصروفات العمومية</td>
      <td>1000.00</td>
      <td>الصندوق</td>
    </tr>
      <tr>
      <td>1000.00</td>
      <td>المصروفات العمومية</td>
      <td>1000.00</td>
      <td>الصندوق</td>
    </tr>
      <tr>
      <td>1000.00</td>
      <td>المصروفات العمومية</td>
      <td>1000.00</td>
      <td>الصندوق</td>
    </tr>            
  </tbody>
</table>

    </div>
    </div>
 </div>  
  </div> 
 </div>        
  );
};

export default Invoice;
