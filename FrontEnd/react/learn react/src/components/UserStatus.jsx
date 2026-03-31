import React from "react";

const UserStatus = ({ user }) => {
  return (
    <div>
      <h2>
        {user.isLoggedIn ? "Welcome back!" : "Please login"}
      </h2>
    </div>
  );
};

export default UserStatus;