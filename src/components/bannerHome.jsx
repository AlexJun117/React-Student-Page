import React, { memo } from "react";

const BannerHome = memo(() => {
  return (
    <div
      style={{
        backgroundPosition: "top",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "99vw",
        height: "32vw",
        backgroundImage: "url(/home_bg.jpg)",
      }}
      className="d-flex justify-content-center"
    >
      <p className="home-title">Student Management</p>
    </div>
  );
});

export default BannerHome;
