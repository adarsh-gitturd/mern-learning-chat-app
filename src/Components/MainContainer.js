import React from 'react'
import "./styles.css"
import SideBar from "./SideBar"
import WorkArea from "./WorkArea"

const MainContainer = () => {
  return (
    <div className="main-container">
      <SideBar />
      <WorkArea />
    </div>
  );
}

export default MainContainer;
