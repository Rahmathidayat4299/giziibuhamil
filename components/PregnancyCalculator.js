import { useState } from 'react';
import moment from 'moment';

const PregnancyCalculator = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState('');
  const [estimatedDueDate, setEstimatedDueDate] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const calculateDueDate = () => {
    if (lastPeriodDate) {
      const dueDate = moment(lastPeriodDate).add(280, 'days').format('DD MMMM YYYY');
      setEstimatedDueDate(dueDate);
      setShowPopup(true);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <label htmlFor="lastPeriodDate" className="block mb-2 text-lg font-medium">Tanggal Hari Pertama Haid Terakhir:</label>
      <input
        id="lastPeriodDate"
        type="date"
        value={lastPeriodDate}
        onChange={(e) => setLastPeriodDate(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none"
      />
      <button
        onClick={calculateDueDate}
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded w-full"
      >
        Hitung
      </button>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-white rounded-lg p-6 max-w-xs w-full">
            <p className="text-lg font-medium text-center mb-4">Perkiraan Tanggal Lahir:</p>
            <p className="text-2xl font-bold text-center mb-6">{estimatedDueDate}</p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS6ExvyYwJ3WBTwGco9zd158q4BtcMgZRfHA&usqp=CAU"
              alt="Pregnancy"
              className="mx-auto w-48"
            />
            <button
              onClick={() => setShowPopup(false)}
              className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded w-full"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PregnancyCalculator;
