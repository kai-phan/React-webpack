import React from 'react';

import './index.css';
import Button from './Button';

const EmRem: React.FC = () => {
  return (
    <React.Fragment>
      <h1 className="text-3xl">Units in CSS</h1>
      <p className="text-2xl my-4">em | rem</p>
      <hr />

      <div className="grid">
        <div className="col col--2em">
          <h1>2em</h1>
          <p>All the font sizes in this column are set using 2 ems.</p>

          <Button>Click</Button>
        </div>

        <div className="col col--2rem">
          <h1>2rem</h1>
          <p>All the font sizes in this column are set using 2 rems.</p>

          <Button>Click</Button>
        </div>

        <div className="col col--3rem">
          <h1>3rem</h1>
          <p>All the font sizes in this column are set using 3 rems.</p>

          <Button>Click</Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EmRem;
