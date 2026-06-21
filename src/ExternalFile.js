export default function ExternalFile() {
  return (
    <div>
      <h2>إنشاء واستيراد المكونات</h2>
      <p>الغرض من هذه الممارسة هو إعادة استخدام الكود.</p>
      <p>بحيث نكتب المكون مرة واحدة، ونستطيع استدعاءه في أي مكان آخر.</p>

      <h5>خطوات عمل ذلك:</h5>
      <ul>
        <li>
          <strong>أولاً:</strong> ننشئ ملف جافاسكريبت مستقل للمكون، مع مراعاة
          بدء اسم الملف بحرف كبير مثل:
          <br /> <code>ExternalFile.js</code>
        </li>

        <li>
          <strong>ثانياً:</strong> نكتب دالة تبدأ بحرف كبير، ونضيف قبلها عبارة
          التصدير التالية:
          <br /> <code>export default function</code>
        </li>

        <li>
          <strong>ثالثاً:</strong> نكتب داخل الدالة أمر الإرجاع ونضع بداخله
          عناصر الاتش تي إم إل:
          <br /> <code>return ( )</code>
        </li>

        <li>
          <strong>رابعاً:</strong> نذهب للملف المراد العرض فيه، ونستورد المكون
          في الأعلى بالطريقة التالية:
          <br /> <code>import ExternalFile from "./ExternalFile";</code>
        </li>

        <li>
          <strong>خامساً:</strong> نستخدم المكون داخل كود الجي إس إكس كـ وسم
          ذاتي الإغلاق هكذا:
          <br /> <code>&lt;ExternalFile /&gt;</code>
        </li>
      </ul>
    </div>
  );
}
