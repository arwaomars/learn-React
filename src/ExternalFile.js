import "./ExternalFile.css";

export default function ExternalFile() {
  const inlineStyle = {
    backgroundColor: "black",
    fontColor: "white",
    fontSize: "20px",
  };

  var x = 0;

  return (
    <div>
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

      <div style={inlineStyle}>
        <h1>كيفية تغيير الستايل </h1>
        <ul>
          <li>
            اسوي متغير من نوع كونست واضيف فيه خصائص الـ سي اس اس بس انتبه انه
            عناوين الخصائص محا يكون فيها - شرطه بين كل كلمه. اخلي الحرف الاول من
            الكلمه الثانيه كبير
          </li>
          <li>ثم اضيف اتربيوت ستايل في عنصر اتش ام ال بس اخليه بين {"{ }"}</li>{" "}
          <li className={x === 1 ? "blueBg" : "redBg"}>
            اقدر اسوي جمله شرطيه اذا استخدمت ملف تنسيق خارجي مثلا هنا بخليه اذا
            كانت قيمة المتغير اكس = 1 الخلفية زرقاء اذا قيمة اكس = 0 فالخلفية
            حمراء
          </li>
        </ul>
      </div>
    </div>
  );
}
