import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../components/index';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Card, CardHeader, CardBody, Typography } from '@material-tailwind/react';
import React ,{ useRef } from 'react';

const About = () => {
  const aboutRef = useRef(null);

  const handleButtonClick = () => {
    const cardContainer = document.querySelector('.card-container');
    cardContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100">
        <div className="container mx-auto py-10 ">
          <div className=" py-10  flex justify-center items-center flex-col">
            <h1 className="text-5xl font-bold mb-6 mt-10 text-center">About Our Website</h1>
            <p className="text-lg text-gray-700 mb-10 mr-20 ml-20 mt-5 text-center">
              Selamat datang di website kami yang didedikasikan untuk memberikan informasi seputar gizi ibu hamil. Kami percaya bahwa gizi yang seimbang dan tepat adalah kunci untuk menjaga kesehatan ibu hamil dan perkembangan janin yang
              optimal.Kami berharap website kami dapat menjadi sumber informasi yang bermanfaat bagi Anda selama masa kehamilan. Kami selalu mengedepankan kualitas dan keakuratan informasi yang kami sajikan, sehingga Ibu hamil dapat merasa
              yakin dengan gizi yang dapat dan siap menghadapi perjalanan kehamilan dengan pengetahuan yang memadai.
            </p>
            <button
              className="bg-gray-100 border border-gray-900 border-4 hover:text-white hover:bg-gray-900 font-bold py-4 px-8 rounded-xl"
              onClick={handleButtonClick}
            >
              Lihat selengkapnya
            </button>
            <div className="card-container"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 ">
            <div className="flex items-center justify-center">
              <div className="p-6 rounded-lg">
                <h2 className="text-4xl font-bold mb-4">Tentang Kami</h2>
                <p className="text-gray-700">
                  Berdiri sejak tahun 2023, Website ini adalah hasil karya sekelompok mahasiswa dan mahasiswi yang mengikuti program MSIB (Studi Independen kamus merdeka) dari mitra Dicoding dengan learning path Pengembang Front-End Web dan
                  Back-End. Kami membuat wesite ini ditujukan untuk ibu hamil
                </p>
                <br />
                <p>
                  Tujuan utama kami adalah menyediakan informasi yang berkualitas dan terpercaya tentang gizi ibu hamil kepada masyarakat secara luas. Kami berkomitmen untuk menciptakan sebuah platform yang memberikan pengetahuan yang
                  bermanfaat dan membantu para ibu hamil dalam menjaga kesehatan mereka dan pertumbuhan bayi dalam kandungan. Dengan desain yang menarik dan pengalaman pengguna yang baik, kami berharap website ini dapat memberikan nilai
                  tambah yang signifikan bagi para pengguna.
                </p>
              </div>
            </div>
            <div className="flex  md:grid md:grid-cols-2 p-5 gap-8">
              <div className="flex gap-8 items-center justify-center">
                <div className="rounded-xl w-auto h-auto overflow-hidden shadow-md">
                  <img
                    src="https://raw.githubusercontent.com/nabati17/DATAC/main/img_campus/Gubl.jpeg"
                    className="w-full h-full object-cover"
                    alt="Kampus Universitas Bandar Lampung"
                  />
                </div>
              </div>
              <div className="grid gap-8 md:grid-cols-1">
                <div className="rounded-xl w-auto h-auto overflow-hidden shadow-md">
                  <img
                    src="https://raw.githubusercontent.com/nabati17/DATAC/main/img_campus/Gunilak.jpeg"
                    className="w-full h-full object-cover"
                    alt="Kampus Univetsitas Lancang Kuning"
                  />
                </div>
                <div className="rounded-xl w-auto h-auto overflow-hidden shadow-md">
                  <img
                    src="https://raw.githubusercontent.com/nabati17/DATAC/main/img_campus/Gumg.jpeg"
                    className="w-full h-full object-cover"
                    alt="Kampus Universitas Muhammadiyah Gersik"
                  />
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-center mt-20 ">Tim Kami</h1>
          <div className="grid grid-cols-1 rounded-lg md:grid-cols-2 lg:grid-cols-4 gap-8 p-5 mt-5">
            <Card className="rounded-xl  w-90 mt-4  group hover:shadow-xl hover:text-white hover:bg-gray-900 transition duration-300">
              <CardHeader className="flex items-center justify-center mt-7 group-hover:bg-gray-900 transition duration-300">
                <img
                  className="flex items-center justify-center w-40 h-40 rounded-full border-4 border-gray-300 group-hover:border-white"
                  src="https://raw.githubusercontent.com/nabati17/DATAC/main/img/Rakmadhan.jpg  "
                  alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="mb-2 font-bold"
                >
                  Rakhmadhan Rizky
                </Typography>
                <Typography
                  color="blue"
                  className="font-medium"
                  textGradient
                >
                  Fullstack Developer
                </Typography>
                <div className="flex justify-center mt-4">
                  <a
                    href="https://www.instagram.com/idkwhat_it_mean/"
                    target="_blank"
                    className="mr-4 hover:text-blue-500"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rakhmadhan-rizky-23b981259/"
                    className="mr-4 hover:text-blue-500"
                    target="_blank"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/thelastman1127"
                    className="hover:text-blue-500"
                    target="_blank"
                  >
                    <FaGithub size={24} />
                  </a>
                </div>
              </CardBody>
            </Card>

            <Card className="w-90 mt-4 rounded-xl group hover:shadow-xl hover:text-white hover:bg-gray-900 transition duration-300">
              <CardHeader className="flex items-center justify-center mt-7 group-hover:bg-gray-900 transition duration-300">
                <img
                  className="flex items-center justify-center w-40 h-40 rounded-full border-4 border-gray-300 group-hover:border-white"
                  src="https://raw.githubusercontent.com/nabati17/DATAC/main/img/rahmat.jpg"
                  alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="mb-2 font-bold"
                >
                  Rahmat Hidayat
                </Typography>
                <Typography
                  color="blue"
                  className="font-medium"
                  textGradient
                >
                  Fullstack Developer
                </Typography>
                <div className="flex justify-center mt-4">
                  <a
                    href="https://instagram.com/rahmathidayat0?igshid=ZGUzMzM3NWJiOQ=="
                    target="_blank"
                    className="mr-4 hover:text-blue-500"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rahmat-hidayat-a19419136"
                    target="_blank"
                    className="mr-4 hover:text-blue-500"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/Rahmathidayat4299"
                    target="_blank"
                    className="hover:text-blue-500"
                  >
                    <FaGithub size={24} />
                  </a>
                </div>
              </CardBody>
            </Card>
            <Card className="w-90 mt-4 rounded-xl group hover:shadow-xl hover:text-white hover:bg-gray-900 transition duration-300">
              <CardHeader className="flex items-center justify-center mt-7 group-hover:bg-gray-900 transition duration-300">
                <img
                  className="flex items-center justify-center w-40 h-40 rounded-full border-4 border-gray-300 group-hover:border-white"
                  src="https://raw.githubusercontent.com/nabati17/DATAC/main/img/ima.jpg"
                  alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="mb-2 font-bold"
                >
                  Asnabah
                </Typography>
                <Typography
                  color="blue"
                  className="font-medium"
                  textGradient
                >
                  Front-End Developer
                </Typography>
                <div className="flex justify-center mt-4">
                  <a
                    href="https://www.instagram.com/nabati._/"
                    target="_blank"
                    className="mr-4 hover:text-blue-500"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/asnabah-76420a222/"
                    className="mr-4 hover:text-blue-500"
                    target="_blank"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/nabati17"
                    className="hover:text-blue-500"
                    target="_blank"
                  >
                    <FaGithub size={24} />
                  </a>
                </div>
              </CardBody>
            </Card>

            <Card className="w-90 mt-4 rounded-xl group hover:shadow-xl hover:text-white hover:bg-gray-900 transition duration-300">
              <CardHeader className="flex items-center justify-center mt-7 group-hover:bg-gray-900 transition duration-300">
                <img
                  className="flex items-center justify-center w-40 h-40 rounded-full border-4 border-gray-300 group-hover:border-white"
                  src="https://raw.githubusercontent.com/nabati17/DATAC/main/img/siti.jpg"
                  alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="mb-2 font-bold"
                >
                  Siti Aminah Amaliah
                </Typography>
                <Typography
                  color="blue"
                  className="font-medium"
                  textGradient
                >
                  Front-End Developer
                </Typography>
                <div className="flex justify-center mt-4">
                  <a
                    href="https://www.instagram.com/staamaliah/?hl=id"
                    target="_blank"
                    className="mr-4 hover:text-blue-500"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/siti-aminah-amaliah-230112267/"
                    className="mr-4 hover:text-blue-500"
                    target="_blank"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/sitiamaliah"
                    className="hover:text-blue-500"
                    target="_blank"
                  >
                    <FaGithub size={24} />
                  </a>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="mt-10 justify-center items-center ">
            <div className="flex ml-15  items-center justify-center">
              <h1 className="mb-4 text-4xl font-bold flex justify-center pt-6 text-center  text-gray-700">Institution Partners</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-16 ">
              <div className="">
                <img
                  src="https://raw.githubusercontent.com/nabati17/DATAC/main/logo/ubl.png"
                  className="w-45 h-40 object-contain mx-auto"
                  alt="Logo UBL"
                />
                <h1 className="text-2xl py-3 font-bold text-center text-gray-700">Universitas Bandar Lampung</h1>
              </div>
              <div className="">
                <img
                  src="https://raw.githubusercontent.com/nabati17/DATAC/main/logo/umg.png"
                  className="w-40 h-40 object-contain mx-auto"
                  alt="Logo UMG"
                />
                <h1 className="text-2xl py-3 font-bold text-center text-gray-700">Universitas Muhammadiyah Gersik</h1>
              </div>
              <div className="">
                <img
                  src="https://raw.githubusercontent.com/nabati17/DATAC/main/logo/unilak.png"
                  className="w-40 h-40 object-contain mx-auto"
                  alt="Logo Unilak"
                />
                <h1 className="text-2xl py-3 font-bold text-center text-gray-700">Universitas Lancang Kuning</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
