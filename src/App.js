import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function App() {
  const [check, setCheck] = useState(false);

  const handleChange = () => {
    setCheck(!check);
  };

  return (
    <div className={check === true ? "app dark" : "app"}>
      <input
        type="checkbox"
        className="checkbox"
        checked={check}
        onChange={handleChange}
        id="chk"
      />
      <label className="label" htmlFor="chk">
        <FontAwesomeIcon className="moon" icon={faMoon} />
        <FontAwesomeIcon className="sun" icon={faSun} />
        <div className="ball"></div>
      </label>
    </div>
  );
}
