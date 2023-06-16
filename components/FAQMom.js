import { useState, useEffect } from 'react';
import { database } from '../config/config.js'
import { onValue, ref } from 'firebase/database';

const FaqCard = ({ question, answer, ...props }) => {
  return (
    <div
      {...props}
      className="max-w-lg mx-auto mb-4 border border-gray-300 rounded-lg p-4 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
    >
      <h3 className="text-lg font-medium">{question}</h3>
      {props.open === props.index && (
        <p className="text-gray-600 mt-2">{answer}</p>
      )}
    </div>
  );
};

const FAQMom = () => {
  const dbref = ref(database, 'FAQ/')
  const [Data, setData] = useState([])
  const [open, setOpen] = useState(-1)

  const fetching = () => {
		onValue(dbref, (e) => {
			console.log(e.val())
			setData(e.val())
		})
	}

  useEffect(() => {
		fetching()
	}, [])
  
  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Pertanyaan Umum tentang Kehamilan</h2>
      <div>
        {Data.length ? Data.map((item, idx) => (
          <FaqCard
            key={idx}
            index={idx}
            onClick={() => setOpen(idx)}
            open={open}
            question={item.question}
            answer={item.answer}
          />
        )) : ''}
      </div>
    </div>
  );
};

export default FAQMom;
