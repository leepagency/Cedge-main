"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.scss"; // Import the SCSS module
import { useLocale, useTranslations } from "next-intl";

interface BreadcrumbItem {
  href: string;
  label: string;
}

interface BreadcrumbProps {
  color?: string; // The color prop is optional and will default to white
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ color = "#fff" }) => {
  const t = useTranslations("labelsUrl");
  const pathname = usePathname();
  const pathSegments = pathname?.split("/").filter((segment) => segment) ?? [];
  const localActive = useLocale();
  const breadcrumbs: BreadcrumbItem[] = pathSegments.map((segment, index) => {
    
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    let pageDetailsURL;
    
    if (pathname?.split('/').reverse()[0] == 'articles' || pathname?.split('/').reverse()[0] == 'e-books' || pathname?.split('/').reverse()[0] == 'reports') {
      switch (href.split('/').reverse()[0]) {
        case 'articles':
          pageDetailsURL = 'articleDetails';
          break;
        case 'e-books':
          pageDetailsURL = 'eBookDetails';
          break;
        case 'reports':
          pageDetailsURL = 'reportDetails';
          break;
      }
    }

    switch (href.split('/').reverse()[1]) {
      case 'articles':
        pageDetailsURL = 'articleDetails';
        break;
      case 'e-books':
        pageDetailsURL = 'eBookDetails';
        break;
      case 'reports':
        pageDetailsURL = 'reportDetails';
        break;
      case 'industries':
        pageDetailsURL = 'industryDetails';
        break;
      case 'services':
        pageDetailsURL = 'serviceDetails';
        break;
      case '':
        pageDetailsURL = 'homeBreadcrumb';
        break;
    }

    const label = pageDetailsURL ? pageDetailsURL : decodeURIComponent(segment);
    
    return { href, label };
  });
  
  return (
    <nav aria-label="breadcrumb">
      <ol className={styles.breadcrumb}>
       
        {breadcrumbs.map((breadcrumb, index) => {
          const shouldNotTranslate = pathSegments.length > 2 && index === breadcrumbs.length - 1;
          return (
            (t(breadcrumb.label) !== '') ?  (
              <li
                key={breadcrumb.href}
                className={`${styles["breadcrumb-item"]} ${
                  index === breadcrumbs.length - 1 ? styles.active : ""
                }`}
                style={{ color: color }}
                aria-current={index === breadcrumbs.length - 1 ? "page" : undefined}
              >
              {shouldNotTranslate ? (
                // If it's the last breadcrumb and the length of pathSegments is greater than 3, do not translate it
                <Link href={breadcrumb.href} style={{ color: color }}>
                {(t(breadcrumb.label) !== '') ?'':t(breadcrumb.label)}
              </Link>
              ) : (
                <Link href={breadcrumb.href} style={{ color: color }}>
                  {t(breadcrumb.label)}
                </Link>
              )}
              </li>
            ) : (<></>)
          )
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
