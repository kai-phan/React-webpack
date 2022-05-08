import React, { useState } from 'react';

import { useControllableValue } from 'src/hooks/index';

const CustomInput = (props: {
  value?: string;
  defaultValue?: string;
  onChange?: (args: string) => void;
  text?: string;
}) => {
  const { text } = props;
  const [value, onChange] = useControllableValue<string>(props);

  return (
    <React.Fragment>
      <h4>{text}</h4>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </React.Fragment>
  );
};

const ControllableValue: React.FC = () => {
  const [state] = useState('init');
  const [, setState] = useState('init');
  const [defaultValue] = useState('default');

  return (
    <section>
      <hr />
      <h3>useControllableValue</h3>
      <ul>
        <li>
          <CustomInput text="Without control" />
        </li>
        <li>
          <CustomInput text="With control value" value={state} />
        </li>
        <li>
          <CustomInput text="With only onchange" onChange={setState} />
        </li>
        <li>
          <CustomInput text="With default value" defaultValue={defaultValue} />
        </li>
      </ul>
    </section>
  );
};

export default ControllableValue;
