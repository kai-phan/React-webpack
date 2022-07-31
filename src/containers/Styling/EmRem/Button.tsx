import React from 'react';
import classNames from 'classnames';

import './button.css';

type Props = {
  size?: 'small' | 'large';
};

const Button: React.FC<Props> = ({ size, children }) => {
  return (
    <button
      className={classNames('btn', {
        'btn--lg': size === 'large',
        'btn--sm': size === 'small',
      })}
    >
      {children}
    </button>
  );
};

export default Button;
