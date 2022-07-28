import React, { useState } from 'react';
import classNames from 'classnames';

const FlexWrap: React.FC = () => {
  const [wrap, setWrap] = useState<'nowrap' | 'wrap' | 'wrap-revert'>('nowrap');

  return (
    <div className="mt-8">
      <div className="font-bold text-blue-500">1. Flex-wrap</div>
      <div>
        <button className="btn" onClick={() => setWrap('nowrap')}>
          nowrap
        </button>
        <button className="btn" onClick={() => setWrap('wrap')}>
          wrap
        </button>
        <button className="btn" onClick={() => setWrap('wrap-revert')}>
          wrap-reverse
        </button>
      </div>

      <div className="mt-4">
        <ul className={classNames('d-flex border', `flex-${wrap}`)}>
          <li className="bg-green-500 w-[300px]">1</li>
          <li className="bg-green-500 w-[300px]">2</li>
          <li className="bg-green-500 w-[300px]">3</li>
          <li className="bg-green-500 w-[300px]">4</li>
          <li className="bg-green-500 w-[300px]">5</li>
          <li className="bg-green-500 w-[300px]">6</li>
          <li className="bg-green-500 w-[300px]">7</li>
          <li className="bg-green-500 w-[300px]">8</li>
          <li className="bg-green-500 w-[300px]">9</li>
          <li className="bg-green-500 w-[300px]">10</li>
        </ul>
      </div>
    </div>
  );
};

export default FlexWrap;
