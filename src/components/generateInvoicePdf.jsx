import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import amiriFont from "./amiriFont";

// تسجيل الخط العربي
jsPDF.API.events.push(['addFonts', function () {
  this.addFileToVFS("Amiri-Regular.ttf", amiriFont);
  this.addFont("Amiri-Regular.ttf", "Amiri-Regular", "normal");
}]);

export function generateInvoicePdf(summary, journalEntries) {
  const { total, discount, tax, additionalTax } = summary;

  const afterDiscount = total - (total * discount) / 100;
  const taxValue = (afterDiscount * tax) / 100;
  const invoiceValue = afterDiscount + taxValue;
  const additionalTaxValue = (invoiceValue * additionalTax) / 100;
  const finalTotal = invoiceValue + additionalTaxValue;

  const doc = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });
  doc.setFont("Amiri-Regular", "normal");
  doc.setFontSize(16);
const pageWidth = doc.internal.pageSize.getWidth();
doc.text("فاتورة المبيعات", pageWidth / 2, 20, { align: "center" });


  // جدول القيود المحاسبية أولاً
  const journalTableData = journalEntries.map(entry => [
    entry.creditParty,
    entry.creditAmount,
    entry.debitParty,
    entry.debitAmount
  ]);

  autoTable(doc, {
    head: [["الطرف الدائن", "المبلغ (دائن)", "الطرف المدين", "المبلغ (مدين)"]],
    body: journalTableData,
    startY: 30,
    styles: {
      font: "Amiri-Regular",
      fontStyle: "normal",
      fontSize: 11,
      halign: "right",
    },
    headStyles: {
      fillColor: [41, 128, 185],
      textColor: "#fff",
      fontStyle: "normal",
      halign: "right",
    },
    margin: { left: 10, right: 10 },
    rtl: true,
  });

  // بعد جدول القيود: جدول تفاصيل الفاتورة
  const summaryTableData = [
    [total, "الإجمالي"],
    [discount, "(%)الخصم"],
    [afterDiscount.toFixed(2), "بعد الخصم"],
    [tax, "(%)الضريبة"],
    [invoiceValue.toFixed(2), "قيمة الفاتورة"],
    [additionalTax, "(%)ضريبة إضافية"],
    [finalTotal.toFixed(2), "الإجمالي بعدها"],
  ];

  autoTable(doc, {
    head: [["القيمة", "الوصف"]],
    body: summaryTableData,
    startY: doc.lastAutoTable.finalY + 10,
    styles: {
      font: "Amiri-Regular",
      fontStyle: "normal",
      fontSize: 12,
      halign: "right",
    },
    headStyles: {
      fillColor: [41, 128, 185],
      textColor: "#fff",
      fontStyle: "normal",
      halign: "right",
    },
    margin: { left: 10, right: 10 },
    rtl: true,
  });

  doc.save("فاتورة.pdf");
}
