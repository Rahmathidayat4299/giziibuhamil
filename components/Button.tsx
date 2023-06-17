import React from 'react';
import { useFetchId } from './Fetch';

type Props = {
  typeFetch: 'makanan/' | 'minuman/' | 'suplement/'
  data: string
  className: string
  children: string
}

const Button = (props: Props) => {
  return (
    <button data-id={`${props.data}`} className={`${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
