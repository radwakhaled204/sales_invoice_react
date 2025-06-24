import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import './amiriFont'; 


jsPDF.API.events.push([
  "addFonts",
  function () {
    
    this.addFont("Amiri-Regular.ttf", "Amiri-Regular", "normal");
  },
]);

export function generateInvoicePdf(summary = {}, journalEntries = [], rows = [], invoiceNumber = "بدون رقم") {
  const {
    total = 0,
    discount = 0,
    tax = 0,
    additionalTax = 0
  } = summary;

  const calculateAfterDiscount = total - (total * discount) / 100;
  const taxValue = (calculateAfterDiscount * tax) / 100;
  const invoiceValue = calculateAfterDiscount + taxValue;
  const additionalTaxValue = (invoiceValue * additionalTax) / 100;
  const finalTotal = invoiceValue + additionalTaxValue;

  // إعداد المستند
  const doc = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });

  // الهيدر
  doc.setFont("Amiri-Regular", "normal");
  doc.setFontSize(16);
  doc.text("تفاصيل الفاتورة", 105, 15, {
    align: "center",
    lang: "AR",
  });

  // بيانات الفاتورة
  doc.setFontSize(12);
  doc.text(`الإجمالي: ${total}`, 20, 30);
  doc.text(`الخصم (%): ${discount}`, 20, 40);
  doc.text(`بعد الخصم: ${calculateAfterDiscount.toFixed(2)}`, 20, 50);
  doc.text(`الضريبة (%): ${tax}`, 20, 60);
  doc.text(`قيمة الفاتورة: ${invoiceValue.toFixed(2)}`, 20, 70);
  doc.text(`ضريبة إضافية (%): ${additionalTax}`, 20, 80);
  doc.text(`الإجمالي بعدها: ${finalTotal.toFixed(2)}`, 20, 90);

  // جدول تفاصيل المنتجات
  if (Array.isArray(rows) && rows.length > 0) {
    const productHeaders = [[
      'قيمة بعد', 'نسبة', 'ت. خصم', 'سعر بعد', 'السعر',
      'الوحدة', 'الرصيد', 'بيان', 'الصلاحية', 'العدد'
    ]];

    const productBody = rows.map(row => [
      row.total,
      row.discountPercent,
      row.discountValue,
      row.priceAfter,
      row.price,
      row.unit,
      row.stock,
      row.note,
      row.expiry,
      row.quantity
    ]);

    autoTable(doc, {
      head: productHeaders,
      body: productBody,
      styles: {
        font: 'Amiri-Regular',
        fontStyle: 'normal',
        halign: 'right'
      },
      headStyles: {
        font: 'Amiri-Regular',
        fontStyle: 'normal',
        halign: 'right',
        textColor: [255, 255, 255],
        fillColor: [0, 112, 192]
      },
      startY: 100,
      theme: 'striped'
    });
  }

  // جدول القيود المحاسبية
  if (Array.isArray(journalEntries) && journalEntries.length > 0) {
    const journalTableData = journalEntries.map(entry => [
      entry.debitAmount,
      entry.debitParty,
      entry.creditAmount,
      entry.creditParty
    ]);

    autoTable(doc, {
      head: [["المبلغ (مدين)", "الطرف المدين", "المبلغ (دائن)", "الطرف الدائن"]],
      body: journalTableData,
      styles: {
        font: "Amiri-Regular",
        fontSize: 11,
        halign: "center",
      },
      headStyles: {
        fillColor: [41, 128, 185],
        textColor: "#fff",
      },
      margin: { top: doc.lastAutoTable?.finalY + 10 || 110 },
    });
  }

  // حفظ الملف
  doc.save(`فاتورة-${invoiceNumber}.pdf`);
}
