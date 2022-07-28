import React from 'react';

import './index.css';
import FlexWrap from './FlexWrap';
import AlignItems from './AlignItems';

const Flexbox: React.FC = () => {
  return (
    <div>
      <h4 className="text-4xl">Flexbox</h4>
      <FlexWrap />
      <AlignItems />
    </div>
  );
};

export default Flexbox;
