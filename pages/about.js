
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../components/index";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100">
        <div className="container mx-auto py-12">
          <h1 className="text-4xl font-bold mb-6">About Page</h1>
          <p className="text-lg text-gray-700 mb-12">
            Kesehatan selama kehamilan sangat penting karena memiliki dampak langsung pada kesejahteraan ibu dan perkembangan janin yang sedang dikandung. Di situs web "Ibu Hamil Sehat", kami bertujuan untuk memberikan informasi dan sumber daya yang dibutuhkan oleh ibu hamil untuk mencapai kehamilan yang sehat.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Kesejahteraan Ibu</h2>
              <p className="text-gray-700">
                Kesehatan ibu hamil memiliki dampak langsung pada kesejahteraan fisik dan mental ibu. Melalui informasi tentang gizi yang sehat, pola makan yang dianjurkan, dan saran praktis, kami membantu ibu hamil dalam menjaga kesehatan fisik dan mental mereka.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Perkembangan Janin yang Sehat</h2>
              <p className="text-gray-700">
                Kesehatan ibu hamil memiliki dampak langsung pada perkembangan dan kesehatan janin yang sedang dikandung. Kami menyediakan informasi tentang nutrisi penting untuk perkembangan janin, perkembangan embrio minggu demi minggu, serta pentingnya perawatan prenatal yang adekuat.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Pengetahuan dan Pemahaman</h2>
              <p className="text-gray-700">
                Situs web "Ibu Hamil Sehat" merupakan sumber informasi yang dapat diandalkan bagi ibu hamil untuk mendapatkan pengetahuan yang diperlukan seputar kesehatan selama kehamilan. Melalui artikel-artikel informatif, tips kesehatan, dan panduan praktis, kami membantu ibu hamil memahami perubahan yang terjadi selama kehamilan dan memberikan dukungan yang diperlukan.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Dukungan dan Komunitas</h2>
              <p className="text-gray-700">
                Selain menyediakan informasi, kami juga ingin menjadi wadah dukungan dan interaksi bagi ibu hamil. Melalui fitur-fitur seperti forum dan komunitas, kami memungkinkan ibu hamil untuk berbagi pengalaman, mendapatkan dukungan emosional, dan bertukar informasi dengan sesama ibu hamil. Kami mendorong terbentuknya komunitas yang saling mendukung dan memberikan rasa kebersamaan dalam perjalanan kehamilan.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About
