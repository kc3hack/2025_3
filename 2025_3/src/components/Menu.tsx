import React, { use, useState } from 'react';
import { useUserData } from '../api/game_functions';
import '../css_designs/Menu.css';

function Menu() {
  const { userData, setUserData } = useUserData();
  const [isVisible, setIsVisible] = useState(false);
  const [newName, setNewName] = useState(userData?.name || '');

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const updateName = () => {
    if (userData) {
      const updatedUserData = { ...userData, name: newName };
      setUserData(updatedUserData);
      localStorage.setItem('userData', JSON.stringify(updatedUserData));
    }
  };

  return (
    <div>
      <button className="menu-icon" onClick={toggleVisibility}>
 ///
      </button>
      {isVisible && userData && (
        <div className="user-data-window">
          <h2>{userData.name}'s Data</h2>
          <ul>
            <li>ID: {userData.id}</li>
            <li>
              Name: {userData.name}
              <input 
                type="text" 
                value={newName} 
                onChange={handleNameChange} 
              />
              <button onClick={updateName}>更新</button>
            </li>
            <li>Sand: {userData.sand}</li>
            <li>Elevation: {userData.elevation}m</li>
            <li>Money: {userData.money}</li>
            <li>Tool Level: {userData.tool_level}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Menu;