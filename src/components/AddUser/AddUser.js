import React from "react";

const AddUser = () => {
  return (
    <div>
      <h1>Please Add a New User</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input type="email" name="email" placeholder="Email" />
        <br />
        <input type="submit" value="AddUser" />
      </form>
    </div>
  );
};

export default AddUser;
