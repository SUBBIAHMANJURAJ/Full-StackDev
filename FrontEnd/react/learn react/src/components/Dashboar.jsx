import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // 1 & 2 → Run on page load
  useEffect(() => {
    console.log("You are logged in"); // console
    alert("The page is loaded");      // alert
  }, []);

  // 3 → Run when state changes
  useEffect(() => {
    if (isLoggedIn) {
      alert("You are logged in");
    } else {
      alert("You are not logged in");
    }
  }, [isLoggedIn]);

  return (
    <div>
      <h2>Dashboard</h2>

      {isLoggedIn ? (
        <p>Welcome to dashboard</p>
      ) : (
        <p>Please login</p>
      )}

      {/* Logout button */}
      <button onClick={() => setIsLoggedIn(false)}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;