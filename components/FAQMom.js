import { useState } from 'react';

const FaqCard = ({ question, answer }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className="max-w-lg mx-auto mb-4 border border-gray-300 rounded-lg p-4 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <h3 className="text-lg font-medium">{question}</h3>
      {isHovered && (
        <p className="text-gray-600 mt-2">{answer}</p>
      )}
    </div>
  );
};

const FAQMom = () => {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Pertanyaan Umum tentang Kehamilan</h2>
      <div>
        <FaqCard
          question="Berapa berat badan yang ideal untuk saya selama kehamilan?"
          answer="Berat badan yang ideal selama kehamilan dapat bervariasi tergantung pada indeks massa tubuh (IMT) sebelum kehamilan. Dokter kandungan akan menentukan berat badan yang sehat berdasarkan situasi individu. Secara umum, penambahan berat badan yang direkomendasikan selama kehamilan adalah sekitar 11-16 kg untuk wanita dengan IMT normal."
        />
        <FaqCard
          question="Apakah saya perlu mengubah pola makan saya?"
          answer="Pola makan yang sehat dan seimbang sangat penting selama kehamilan. Anda perlu mengonsumsi makanan bergizi yang mencakup protein, karbohidrat kompleks, lemak sehat, serta vitamin dan mineral penting. Dokter kandungan dapat memberikan saran khusus terkait kebutuhan gizi dan mungkin merekomendasikan suplemen vitamin atau mineral tambahan."
        />
         <FaqCard
          question="Apakah aman untuk melakukan olahraga selama kehamilan?"
          answer="Dalam banyak kasus, olahraga ringan atau aktivitas fisik yang teratur dianjurkan selama kehamilan, kecuali jika ada kontraindikasi medis. Aktivitas seperti berjalan, berenang, atau yoga prenatal dapat memberikan manfaat kesehatan fisik dan mental. Namun, penting untuk berkonsultasi dengan dokter kandungan untuk mendapatkan rekomendasi yang tepat berdasarkan kondisi kesehatan individu."
        />
         <FaqCard
          question="Bagaimana cara mengatasi mual dan muntah selama kehamilan (morning sickness)?"
          answer="Mual dan muntah adalah gejala umum yang dialami selama kehamilan. Dokter kandungan dapat memberikan saran tentang cara mengurangi gejala tersebut, seperti makan makanan kecil tapi sering, menghindari makanan berbau atau beraroma kuat, atau mencoba teknik relaksasi seperti akupresur atau pijatan ringan."
        />
         <FaqCard
          question="Apa yang perlu saya lakukan jika saya mengalami kejang otot atau kram kaki selama kehamilan?"
          answer="Kejang otot atau kram kaki sering terjadi selama kehamilan. Untuk meredakan gejalanya, cobalah meregangkan otot yang kram dengan perlahan, menggunakan pijatan lembut, atau mengompres otot dengan handuk hangat. Dokter kandungan juga dapat merekomendasikan suplemen tambahan seperti magnesium jika diperlukan."
        />
         <FaqCard
          question="Apakah aman untuk bepergian atau naik pesawat selama kehamilan?"
          answer="Bepergian atau naik pesawat dalam kehamilan dapat aman, tetapi penting untuk berkonsultasi dengan dokter kandungan terlebih dahulu, terutama jika kehamilan Anda memiliki risiko tinggi atau mendekati tanggal perkiraan kelahiran. Dokter akan memberikan saran khusus terkait perjalanan yang aman dan nyaman bagi Anda dan bayi."
        />
         <FaqCard
          question="Kapan saya perlu memulai persiapan untuk persalinan?"
          answer="Persiapan untuk persalinan sebaiknya dimulai sejak awal kehamilan. Ini termasuk menghadiri kelas persiapan kehamilan, mempelajari teknik pernapasan dan relaksasi, serta membuat rencana kelahiran. Dokter kandungan akan memberikan panduan lebih lanjut tentang persiapan dan memastikan bahwa Anda siap secara fisik dan mental."
        />
      </div>
    </div>
  );
};

export default FAQMom;
