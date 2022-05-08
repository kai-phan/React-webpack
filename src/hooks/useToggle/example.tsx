import React from 'react';
import useToggle from 'src/hooks/useToggle/index';

const Toggle: React.FC = () => {
  const [state1, actions1] = useToggle();
  const [state2, actions2] = useToggle(true);
  const [state3, actions3] = useToggle('male' as 'male', 'female' as 'female');

  return (
    <section>
      <hr />
      <h3>useToggle</h3>
      <ul>
        <li>
          <p>{JSON.stringify(state1)}</p>
          <button onClick={() => actions1.toggle()}>Toggle true</button>
          <button onClick={() => actions1.setLeft()}>Set left</button>
          <button onClick={() => actions1.setRight()}>Set right</button>
          <button onClick={() => actions1.set(true)}>Set true</button>
          <button onClick={() => actions1.set(false)}>Set false</button>
        </li>
        <li>
          <p>{JSON.stringify(state2)}</p>
          <button onClick={() => actions2.toggle()}>Toggle true</button>
          <button onClick={() => actions2.setLeft()}>Set left</button>
          <button onClick={() => actions2.setRight()}>Set right</button>
          <button onClick={() => actions2.set(true)}>Set true</button>
          <button onClick={() => actions2.setRight()}>Set false</button>
        </li>
        <li>
          <p>{state3}</p>
          <button onClick={() => actions3.toggle()}>Toggle true</button>
          <button onClick={() => actions3.setLeft()}>Set left</button>
          <button onClick={() => actions3.setRight()}>Set right</button>
          <button onClick={() => actions3.set('male')}>Set mail</button>
          <button onClick={() => actions3.set('female')}>Set false</button>
        </li>
      </ul>
    </section>
  );
};

export default Toggle;
