import React from "react";

const PasswordManager = () => {
  return (
    <form action="update-password">
      <div>
        <label htmlFor="">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <div>
        <label htmlFor="">New Password</label>
        <input type="password" name="newPassword" />
      </div>
      <div>
        <label htmlFor="">Confirm Password</label>
        <input type="password" name="confirmPassword" />
      </div>
    </form>
  );
};

export default PasswordManager;
