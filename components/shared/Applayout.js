import React from "react";
import AppHeader from "./AppHeader";
import Footer from "./Footer";

function Applayout({ children }) {
  return (
    <div>
      <div className="min-h-screen md:min-w-0 flex flex-col mx-auto overflow-hidden">
        <span className="navigation-bar">
          <AppHeader />
        </span>
        <div className=" md:pt-16 flex-1">{children}</div>
        {/* <GradientHr /> */}
        <Footer className="z-20" />
      </div>
    </div>
  );
}

export default Applayout;
