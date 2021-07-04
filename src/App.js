import React, { useState } from "react";

import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const handleAdduser = (username, userAge) => {
    setUsersList((prevState) => {
      return [
        ...prevState,
        { id: Math.random().toString(), name: username, age: userAge },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={handleAdduser} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
