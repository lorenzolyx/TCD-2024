import React from 'react';
import './Settings.css';

const Settings: React.FC = () => {
  return (
    <div className="settings">
      <h1>Configurações</h1>
      <div className="settings-options">
        <div className="option">
          <label htmlFor="theme">Tema:</label>
          <select id="theme">
            <option value="light">Claro</option>
            <option value="dark">Escuro</option>
          </select>
        </div>
        <div className="option">
          <label htmlFor="language">Idioma:</label>
          <select id="language">
            <option value="pt-BR">Português</option>
            <option value="en-US">Inglês</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Settings;
