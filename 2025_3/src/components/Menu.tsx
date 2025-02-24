import React, { use, useState } from 'react';
import { useUserData } from '../api/game_functions';
import '../css_designs/Menu.css';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

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
      <Button sx={{
        position: "absolute",
        top: "10px",
        right: "10px",
      }} onClick={toggleVisibility}>
        <MenuIcon />
      </Button>
      {isVisible && userData && (
        <div className="user-data-window">
          <h2>{userData.name}'s Data</h2>
          <hr />
          <ul>
            <li>
              Name: {userData.name}
              <input
                type="text"
                value={newName}
                onChange={handleNameChange}
              />
              <button onClick={updateName}>更新</button>
            </li>
            <li>Sand: {userData.sand}kg</li>
            <li>Elevation: {userData.elevation}m</li>
            <li>Money: {userData.money}yen</li>
            <li>Tool Level: {userData.tool_level}</li>
            <button
              onClick={() => {
                localStorage.removeItem('userData');
                window.location.reload();
              }}
            >
              Reset
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Menu;
