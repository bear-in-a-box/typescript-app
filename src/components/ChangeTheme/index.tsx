import React, {useContext} from 'react';
import {ThemeContext} from "../../contexts/ThemeContext";
import './style.css';

const ChangeTheme: React.FC = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return(
        <div>
            <button className="SwitchButton" onClick={toggleTheme}>
                Switch to {theme === "light" ? "dark":"light"} mode
            </button>
        </div>
    )
}
export default ChangeTheme;