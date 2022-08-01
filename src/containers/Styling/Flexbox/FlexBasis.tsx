import React from 'react';
import classNames from 'classnames';

const FlexWrap: React.FC = () => {
  return (
    <div className="mt-8">
      <div className="font-bold text-blue-500">2. Flex-basis</div>

      <div className="mt-4">
        <ul className={classNames('d-flex border')}>
          <li className="bg-green-500 ">1</li>
          <li className="bg-green-500 ">1</li>
          <li className="bg-green-500  bg-rose-500 flex-item-shrink">2</li>
          <li className="bg-green-500 ">3</li>
          <li className="bg-green-500 ">5</li>
        </ul>
        {/*<ul className={classNames('d-flex border')}>*/}
        {/*  <li className="bg-green-500 ">1</li>*/}
        {/*  <li className="bg-green-500 ">2</li>*/}
        {/*  <li className="bg-green-500  bg-rose-500">3</li>*/}
        {/*  <li className="bg-green-500 ">4</li>*/}
        {/*  <li className="bg-green-500 ">5</li>*/}
        {/*</ul>*/}
      </div>
    </div>
  );
};

export default FlexWrap;
