import React, { useState } from "react";

const AddUser = () => {
  const [user, setUser] = useState({});
  const handleAddUser = (event) => {
    event.preventDefault();
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert(" User Added Successfully");
          event.target.reset();
        }
      });
  };
  const handleBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };

  return (
    <div>
      <h1>Please Add a New User</h1>
      <form onSubmit={handleAddUser}>
        <input
          onChange={handleBlur}
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <br />
        <input
          onChange={handleBlur}
          type="text"
          name="address"
          placeholder="Address"
          required
        />
        <br />
        <input
          onChange={handleBlur}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <br />
        <input type="submit" value="AddUser" />
      </form>
    </div>
  );
};

export default AddUser;
