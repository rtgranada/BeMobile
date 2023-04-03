import React, { useState } from "react";
import { SwitchDark } from "../../style/components/SwitchDark";

function Switch({ toggleTheme, isDarkTheme }) {
  const [isToggled, setIsToggled] = useState(isDarkTheme);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <SwitchDark>
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </SwitchDark>
  );
}
export default Switch;
