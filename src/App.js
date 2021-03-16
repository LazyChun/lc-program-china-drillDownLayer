import React from "react";
import DrillMap from "./components/DrillMap";

const appStyle = {
  maxWidth: 1300,
  minHeight: 574
};

const App = () => {
  return <div style={appStyle}><DrillMap/></div>;
};

export default App;
