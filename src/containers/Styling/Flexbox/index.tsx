import React from 'react';

import './index.css';
import FlexWrap from './FlexWrap';
import FlexBasis from './FlexBasis';
import AlignItems from './AlignItems';

const Flexbox: React.FC = () => {
  return (
    <div>
      <h4 className="text-4xl">Flexbox</h4>
      <FlexWrap />
      <FlexBasis />
      <AlignItems />
    </div>
  );
};

export default Flexbox;
