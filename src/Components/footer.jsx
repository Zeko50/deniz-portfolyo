import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-950 shadow-2xl text-white py-3">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Zekeriya Deniz Uğurlu. Tüm hakları
          saklıdır.
        </p>
        <p className="text-xs mt-2">
          Bu portföy, React ve Tailwind CSS kullanılarak oluşturulmuştur.
        </p>
        <p className="text-xs mt-2">
          E-posta : zekeriyadenizugurlu@gmail.com
          <br />
          Telefon: 0539 589 99 59
        </p>
      </div>
    </footer>
  );
}

export default Footer;
