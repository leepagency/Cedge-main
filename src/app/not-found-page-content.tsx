// This is your regular React component
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { Button } from "@mui/material";
import Image from "next/image";
import globeImage from "../assets/images/404.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"; // Import arrow icons

const NotFoundComponent = () => {
    const [locale, setLocale] = useState("en");

    useEffect(() => {
        const fetchData = async () => {
            try {
            const storedLocale = localStorage.getItem("locale") || "en";
            setLocale(storedLocale);
            } catch (error) {
            console.error("Failed to fetch data:", error);
            }
        };
        fetchData();
    }, []);
    return (
    <div
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            padding: "10px",
            height: "55vh",
            color: "#fff",
            textAlign: "center",
            backgroundColor: "#0a012b",
        }}>
        <div
            style={{
            display: "flex",
            flexDirection: window.innerWidth < 768 ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: "20px",
            padding: "2px",
            }}
        >
            {/* Text Content */}
            <div style={{ flex: 1 }}>
            <h1
                style={{
                fontSize: window.innerWidth < 768 ? "2rem" : "4rem",
                fontWeight: "bold",
                margin: "0.5rem 0",
                color: "#fff",
                }}
            >
                {locale === "ar" ? "الصفحة غير موجودة" : "Page Not Found"}
            </h1>
            <p
                style={{
                marginBottom: "2rem",
                fontSize: "1rem",
                fontWeight: "400",
                color: "#797979",
                }}
            >
                {locale === "ar"
                ? "الصفحة التي تحاول الوصول إليها غير موجودة أو تم إزالتها."
                : "The page you are looking for does not exist or was removed."}
                <br />
                {locale === "ar"
                ? "نقترح العودة الي الصفحة الرئيسية"
                : "we suggest you back to home"}
            </p>
            <Link href={`/${locale}`} passHref>
                <Button
                variant="contained"
                disableElevation
                style={{
                    backgroundColor: "#8e44ad",
                    color: "#fff",
                    padding: "10px 20px",
                    borderRadius: "50px",
                }}
                >
                {locale === "ar" ? (
                    <>
                    <AiOutlineArrowRight style={{ marginLeft: "8px" }} />
                    العودة إلى الصفحة الرئيسية
                    </>
                ) : (
                    <>
                    <AiOutlineArrowLeft style={{ marginRight: "8px" }} />
                    Back To Home
                    </>
                )}
                </Button>
            </Link>
            </div> 
            {/* Image Content */}
            <div
            style={{
                flex: 1,
                justifyContent: "center",
                display: window.innerWidth < 768 ? "none" : "flex",
            }}
            >
            <Image
                src={globeImage}
                alt="not-found"
                unoptimized
                style={{
                width: "100%",
                maxWidth: "500px",
                objectFit: "contain",
                }}
            />
            </div>
        </div>
    </div>
    );
};

export default NotFoundComponent;