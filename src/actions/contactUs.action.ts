import { IContactForm } from "@/types";
import { AR_LOCALE, baseUrl } from "@/constants";
import { toast } from "react-toastify";
import Swal from 'sweetalert2';

export const contactUs = async (data: IContactForm, localActive: string) => {
  const payload = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    subject: data.subject,
    body: data.body,
  };

  try {
    const response = await fetch(`${baseUrl}send-contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    if (result.success === true) {
      Swal.fire({
        icon: "success",
        position: "center",
        title: localActive === AR_LOCALE ? "تم استلام ردك وسوف يتم التواصل معك في أقرب وقت. شكراً!" : "We received your submission and we will contact you soon!",
        showConfirmButton: false,
        timer: 3000,
        background: "#121212", // Dark background color
        customClass: {
          popup: "swal-popup-custom", // Add a custom class for further styling
          icon: "swal-icon-custom", // Custom class for the icon
        },
        didOpen: () => {
          // Apply additional styles here if needed
          const popup = Swal.getPopup();
          if (popup) {
            popup.style.borderRadius = "15px"; // Add border-radius
            popup.style.color = "#fff"; // Text color
            popup.style.boxShadow = "0px 0px 10px 0px rgba(255,255,255,0.75)";
          }
        },
      });

      // toast.success(localActive !== AR_LOCALE ? "تم استلام ردك وسوف يتم التواصل معك في أقرب وقت. شكراً!" : "We received your submission and we will contact you soon!");
    } else {
      toast.error(result.message);
    }
    return result;
  } catch (error) {
    toast.error("Something went wrong");
  }
};
