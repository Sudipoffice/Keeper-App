import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb} from '@fortawesome/free-solid-svg-icons';


function Header(){
  return  (
    <header>
  <h1 className="header">
  <FontAwesomeIcon icon={faLightbulb} />
  Keeper</h1>
  </header>
  );
}


export default Header;