import React from "react";
import logo from "../images/footer-logo.svg";

function Footer() {
  return (
    <footer className="p-24 bg-dark-blue">
      <div className="container mx-auto flex items-center justify-center min-h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 leading-8 ">
          <ul className="text-white sm:px-12 md:px-8 lg:px-4 mb-4 ">
            <li>
              <img src={logo} alt="logo" className="w-32 mb-4" />
            </li>
            <li className="text-lg">Hoşgeldiniz!</li>
          </ul>
          <ul className="text-white sm:px-12 md:px-8 lg:px-4 mb-4">
            <h2 className="uppercase text-lg mb-2 font-medium">The Basics</h2>
            <li>TMDB Hakkında</li>
            <li>Bize Ulaşın</li>
            <li>Destek Forumları</li>
            <li>API</li>
            <li>Sistem Durumu</li>
          </ul>
          <ul className="text-white  md:px-8 lg:px-4 mb-4">
            <h2 className="uppercase text-lg mb-2 font-medium">
              katkıda bulunun
            </h2>
            <li>Katılım Başvuru Kitabı</li>
            <li>Yeni Film Ekle</li>
            <li>Yeni Dizi Ekle</li>
          </ul>
          <ul className="text-white sm:px-12 md:px-8 lg:px-4 mb-4">
            <h2 className="uppercase text-lg mb-2 font-medium">topluluk</h2>
            <li>Rehberler</li>
            <li>Tartışmalar</li>
            <li>Öne Çıkanlar</li>
            <li>Twitter</li>
          </ul>
          <ul className="text-white sm:px-12 md:px-8 lg:px-4 mb-4">
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
