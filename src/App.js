import './App.css';
import Menu from "./components/Menu/Menu.js";
import Kickstarter from "./components/Kickstarter/Kickstarter.js";
import Aquascapes from "./components/Aquascapes/aquascapes.js"
import Nature from "./components/Nature/Nature.js"
import Emotions from "./components/Emotions/Emotions.js"
import Contact from "./components/Contact/Contact.js"
import { useState } from "react";

function App() {
  const [menuColor, setMenuColor] = useState(`white`);
  const changeMenuColor = (str) => {
    setMenuColor(str)
  }

  return (
    <div id="appContainer">
      <Menu menuColor={menuColor}/>
          <div id="contentContainer">
            <Kickstarter />
            <Aquascapes callbackFn={changeMenuColor}/>
            <Nature />
            <Emotions />
            <Contact />
          </div>
    </div>
  );
}

export default App;