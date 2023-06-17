import React from 'react';
import Modal from './Modal';
import { useFetchId } from './Fetch';

type Props = {
  typeFetch: 'makanan/' | 'minuman/' | 'suplement/'
  data: string
  className: string
  children: string
}

const Button = (props: Props) => {
  const modalData = useFetchId(props.typeFetch + props.data)
  const check = () => {
    Modal(modalData)
  }
  return (
    <button data-modal-target='' onClickCapture={check} data-id={`${props.data}`} className={`${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
