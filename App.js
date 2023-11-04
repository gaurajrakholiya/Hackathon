import React from "react";
import { NavigationBar } from "./Navbar";
import { MainPart } from "./mainpart"
import { Sports } from "./Sports";
import { Coach } from "./coach";
import './App.css'

export const HomePage = () => {
  return (
    <div className="home-page">
      <MainPart />
      <NavigationBar />
      <Sports />
      <Coach />
      {/* Rest of the homepage content */}
    </div>
  );
};
