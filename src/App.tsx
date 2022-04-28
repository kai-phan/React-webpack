import React from 'react';
import logo from 'src/assets/forge_react.png';

const App: React.FC = ({ children }) => {
  return (
    <div>
      <h1>Hoc Webpack</h1>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default App;
