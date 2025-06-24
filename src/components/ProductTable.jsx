import React from 'react';

const ProductTable = () => {
  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>الكود</th>
          <th>اسم الصنف</th>
          <th>الكمية</th>
          <th>الوحدة</th>
          <th>السعر</th>
          <th>الخصم</th>
          <th>الإجمالي</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="text" /></td>
          <td><input type="text" /></td>
          <td><input type="number" /></td>
          <td><select><option>قطعة</option></select></td>
          <td><input type="number" /></td>
          <td><input type="number" /></td>
          <td><input type="number" readOnly /></td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductTable;
