import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  lng: "",
  resources: {
    en: {
      translation: {
      
        "Send Message": "Send Message",
        "Buy now": "Buy now",
        "Quick Links": "Quick Links",
        "Corporate Law Firms": "Corporate Law Firms",
        "25 Years Of Experience In Law Solutiuons": "25 Years Of Experience In Law Solutiuons",
        "Karabakh Street, 15 Khatai Ave, Baku": "Karabakh Street, 15 Khatai Ave, Baku",
        "Our Services": "Our Services",
        "Next": "Next",
        "Previous": "Previous",

        "Phone Number": "Phone Number",
        "Email Address": "Email Address",
        "Email": "Email",
        "Login Now": "Login Now",
        "About Us": "About Us",
        "Privacy Policy": "Privacy Policy",
        "Terms &amp; Conditions": "Terms &amp; Conditions",

        "Request A Quote": "Request A Quote",
        "Portfolios": "Portfolios",
        "Products": "Products",
        "Contact us": "Contact us",
        "Login": "Login",
        "Logout": "Logout",
        "Home": "Home",
      }
    },

    az: {
      translation: {

        "Send Message": "Send Message",
        "Buy now": "Buy now",
        "Quick Links": "Quick Links",
        "Corporate Law Firms": "Corporate Law Firms",
        "25 Years Of Experience In Law Solutiuons": "25 Years Of Experience In Law Solutiuons",
        "Karabakh Street, 15 Khatai Ave, Baku": "Xətai pr. 31, Bakı Şərq Bazarı Ticarət mərkəzi",
        "Our Services": "Our Services",
        "Next": "Next",
        "Previous": "Previous",


        "Phone Number": "Phone Number",
        "Quick Links": "Quick Links",
        "heroTitle": "Corporate Law Firms",
        "Email Address": "Email Address",
        "Email": "Email",
        "Login Now": "Login Now",
        "About Us": "About Us",
        "Privacy Policy": "Privacy Policy",
        "Terms &amp; Conditions": "Terms &amp; Conditions",

        "Request A Quote": "Request A Quote",
        "Portfolios": "Portfolios",
        "Products": "Products",
        "Contact us": "Contact us",
        "Contact us": "Bizimlə əlaqə saxlayın",
        "Login": "Daxil ol",
        "Logout": "Çıxış",
        "Home": "ev",
      
      }
    },
  },
  keySeparator: false,
  interpolation: { escapeValue: false }
});

export default i18n;
