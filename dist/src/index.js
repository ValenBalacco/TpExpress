import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>¡El Servidor está funcionando!</h1>
      <p>Esta es una aplicación React básica servida con Express.</p>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
