import Navbar from '../components/Navbar';
import PregnancyCalculator from '../components/PregnancyCalculator';
import Footer from '../components/Footer';
import FAQMom from '../components/FAQMom';
import PregnancyWeightGainCalculator from '../components/PregnancyWeightGainCalculator';

const CustomCard = ({ title, description, children }) => {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-lg">{description}</p>
      {children}
    </div>
  );
};

const CheckHealthyPregnantMother = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <Navbar />
      <h1 className="text-3xl font-bold mb-4">Check Healthy Pregnant Mother</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CustomCard
          title="Pregnancy Calculator"
          description="Hitung tanggal jatuh tempo Anda dan lacak perkembangan kehamilan Anda dengan kalkulator kehamilan kami."
        >
          <PregnancyCalculator />
        </CustomCard>

        <CustomCard
          title="Pregnancy Weight Gain Calculator"
          description="Perkirakan kenaikan berat badan yang disarankan selama kehamilan berdasarkan berat badan sebelum hamil, berat badan saat ini, tinggi badan, dan minggu kehamilan."
        >
          <PregnancyWeightGainCalculator />
        </CustomCard>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">FAQ for Moms</h2>
        <FAQMom />
      </div>

      <Footer />
    </div>
  );
};

export default CheckHealthyPregnantMother;

