// src/[locale]/not-found.tsx
import React from "react";
import Link from "next/link";

const LocaleNotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "3rem", margin: "1rem 0" }}>
        404 - الصفحة غير موجودة
      </h1>
      <p style={{ textAlign: "center" }}>
        الصفحة التي تبحث عنها غير موجودة.
      </p>
      <p>
        <Link href="/ar" style={{ color: "blue", textDecoration: "underline" }}>
          العودة إلى الصفحة الرئيسية
        </Link>
      </p>
    </div>
  );
};

export default LocaleNotFound;
