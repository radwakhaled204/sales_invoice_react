import React from 'react';

const AccountingEntries = () => {
  return (
    <table className="accounting-table">
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
          <td><input type="number" /></td>
          <td><input type="text" /></td>
          <td><input type="number" /></td>
          <td><input type="text" /></td>
        </tr>
      </tbody>
    </table>
  );
};

export default AccountingEntries;
