import { useState } from 'react';

const PregnancyWeightGainCalculator = () => {
  const [prePregnancyWeight, setPrePregnancyWeight] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [height, setHeight] = useState('');
  const [pregnancyWeeks, setPregnancyWeeks] = useState('');
  const [weightGain, setWeightGain] = useState(0);
  const [weightCategory, setWeightCategory] = useState('');
  const [showResult, setShowResult] = useState(false);

  const calculateWeightGain = () => {
    if (prePregnancyWeight && currentWeight && height && pregnancyWeeks) {
      const prePregnancyWeightKg = parseFloat(prePregnancyWeight);
      const currentWeightKg = parseFloat(currentWeight);
      const heightCm = parseFloat(height);
      const weeks = parseInt(pregnancyWeeks);

      const bmi = currentWeightKg / Math.pow(heightCm / 100, 2);
      const weightGainRange = calculateWeightGainRange(bmi, weeks);
      const suggestedWeightGain = weightGainRange[1] - prePregnancyWeightKg;

      setWeightGain(suggestedWeightGain.toFixed(1));
      setWeightCategory(getWeightCategory(bmi));
      setShowResult(true);
    }
  };

  const calculateWeightGainRange = (bmi, weeks) => {
    // Tabel kenaikan berat badan berdasarkan BMI dan usia kehamilan
    const weightGainTable = [
      [18.5, 25, 28, 40.9],   // BMI < 18.5
      [15.9, 22.7, 25.4, 40.9], // 18.5 ≤ BMI < 24.9
      [11.3, 15.9, 20.4, 40.9], // 25.0 ≤ BMI < 29.9
      [7, 11.3, 13.6, 40.9]    // BMI ≥ 30.0
    ];

    let weightGainRange = [0, 0];

    if (bmi < 18.5) {
      weightGainRange = weightGainTable[0];
    } else if (bmi < 24.9) {
      weightGainRange = weightGainTable[1];
    } else if (bmi < 29.9) {
      weightGainRange = weightGainTable[2];
    } else {
      weightGainRange = weightGainTable[3];
    }

    // Mengembalikan kisaran kenaikan berat badan sesuai usia kehamilan
    if (weeks <= 12) {
      return [weightGainRange[0], weightGainRange[1]];
    } else if (weeks <= 26) {
      return [weightGainRange[1], weightGainRange[2]];
    } else if (weeks <= 40) {
      return [weightGainRange[2], weightGainRange[3]];
    } else {
      return [0, 0];
    }
  };

  const getWeightCategory = (bmi) => {
    if (bmi < 18.5) {
      return 'Kurang Gizi';
    } else if (bmi < 30) {
      return 'Normal';
    } else {
      return 'Obesitas';
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="prePregnancyWeight" className="block mb-2">Berat Badan Sebelum Hamil (kg):</label>
        <input
          id="prePregnancyWeight"
          type="number"
          step="0.1"
          value={prePregnancyWeight}
          onChange={(e) => setPrePregnancyWeight(e.target.value)}
          className="border border-gray-300 rounded-full px-3 py-2 mb-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="currentWeight" className="block mb-2">Berat Badan Saat Ini (kg):</label>
        <input
          id="currentWeight"
          type="number"
          step="0.1"
          value={currentWeight}
          onChange={(e) => setCurrentWeight(e.target.value)}
          className="border border-gray-300 rounded-full px-3 py-2 mb-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="height" className="block mb-2">Tinggi Badan Mama (cm):</label>
        <input
          id="height"
          type="number"
          step="1"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="border border-gray-300 rounded-full px-3 py-2 mb-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="pregnancyWeeks" className="block mb-2">Usia Kehamilan (minggu):</label>
        <input
          id="pregnancyWeeks"
          type="number"
          step="1"
          value={pregnancyWeeks}
          onChange={(e) => setPregnancyWeeks(e.target.value)}
          className="border border-gray-300 rounded-full px-3 py-2 mb-2"
        />
      </div>
      <button
        onClick={calculateWeightGain}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
      >
        Hitung
      </button>
      {showResult && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-white rounded-lg p-6">
            <p className="text-lg text-center mb-4">Kisaran Kenaikan Berat Badan yang Disarankan:</p>
            <p className="text-2xl text-center font-bold">{weightGain} kg</p>
            <p className="text-center text-sm mt-2">Status Berat Badan Saat Ini: {weightCategory}</p>
            <p className="text-center text-sm mt-4">Kenaikan berat badan yang disarankan dapat bervariasi untuk setiap individu. Pastikan untuk berkonsultasi dengan dokter atau bidan Anda untuk mendapatkan rekomendasi yang sesuai dengan kondisi Anda.</p>
            <button
              onClick={() => setShowResult(false)}
              className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PregnancyWeightGainCalculator;
