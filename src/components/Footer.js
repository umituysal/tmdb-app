import React from "react";
import logo from "../images/footer-logo.svg";
function Footer() {
  return (
    <footer className="p-24" style={{ backgroundColor: "#032541" }}>
      <div className="container mx-auto flex items-center justify-center min-h-full">
        <div className="flex flex-col leading-8 lg:flex-row ">
          <ul className="text-white px-12 mb-2 md:mb-0">
            <li>
              <img src={logo} alt="logo" className="w-32 mb-4" />
            </li>
            <li className="text-lg">Hoşgeldiniz!</li>
          </ul>
          <ul className="text-white px-12 mb-2 md:mb-0">
            <h2 className="uppercase text-lg mb-2 font-medium">The Basics</h2>
            <li>TMDB Hakkında</li>
            <li>Bize Ulaşın</li>
            <li>Destek Forumları</li>
            <li>API</li>
            <li>Sistem Durumu</li>
          </ul>
          <ul className="text-white px-12 mb-2 md:mb-0">
            <h2 className="uppercase text-lg mb-2 font-medium">
              katkıda bulunun
            </h2>
            <li>Katılım Başvuru Kitabı</li>
            <li>Yeni Film Ekle</li>
            <li>Yeni Dizi Ekle</li>
          </ul>
          <ul className="text-white px-12 mb-2 md:mb-0">
            <h2 className="uppercase text-lg mb-2 font-medium">topluluk</h2>
            <li>Rehberler</li>
            <li>Tartışmalar</li>
            <li>Öne Çıkanlar</li>
            <li>Twitter</li>
          </ul>
          <ul className="text-white px-12 mb-2 md:mb-0">
            <h2 className="uppercase text-lg mb-2 font-medium">yasal</h2>
            <li>Kullanım Koşulları</li>
            <li>API Kullanım Şartları</li>
            <li>Gizlilik Politikası</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
