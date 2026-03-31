import React from "react";

const UserInfo = ({ user, skills, isLoggedIn }) => {
  return (
    <div>
      <h2>User Info</h2>

      {/* Object */}
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>

      {/* Boolean */}
      <p>Status: {isLoggedIn ? "Logged In ✅" : "Logged Out ❌"}</p>

      {/* Array */}
      <h3>Skills:</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserInfo;