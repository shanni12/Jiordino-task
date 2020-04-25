import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "./userData.js";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      axios
        .post("http://127.0.0.1:8000/user/add_users/", { 'users': users })
        .then(function (response) {
          console.log(response);
        });
    }
  }, [users]);

  return (
    <div>
      {users.map((userItem) => {
        return <User userItem={userItem} />;
      })}
    </div>
  );
}

export default App;
