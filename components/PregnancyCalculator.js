import { useState } from 'react';
import moment from 'moment';

const PregnancyCalculator = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState('');
  const [estimatedDueDate, setEstimatedDueDate] = useState('');

  const calculateDueDate = () => {
    if (lastPeriodDate) {
      const dueDate = moment(lastPeriodDate).add(280, 'days').format('YYYY-MM-DD');
      setEstimatedDueDate(dueDate);
    }
  };

  return (
    <div>
      <label htmlFor="lastPeriodDate">Tanggal Hari Pertama Haid Terakhir:</label>
      <input
        id="lastPeriodDate"
        type="date"
        value={lastPeriodDate}
        onChange={(e) => setLastPeriodDate(e.target.value)}
      />
      <button onClick={calculateDueDate}>Hitung</button>
      {estimatedDueDate && (
        <p>Perkiraan Tanggal Lahir: {moment(estimatedDueDate).format('DD MMMM YYYY')}</p>
      )}
    </div>
  );
};

export default PregnancyCalculator;
