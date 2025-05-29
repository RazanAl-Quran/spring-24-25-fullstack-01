import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import UsersTable from './components/UsersTable';
import AddUser from './components/AddUser';

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {

    const allusers = await fetch(`http://localhost:3001/api/users`);
    console.log({ allusers });
    const allusers2 = await allusers.json();
    console.log({ allusers2 });
    console.log('allusers2', allusers2);
    setUsers(allusers2);
  }

  const deleteUser = async (id) => {
    await fetch(`http://localhost:3001/api/users/${id}`, {
      method: "DELETE"
    }
    );
    fetchUsers();

  }

  const addUser = async (user) => {
    await fetch("http://localhost:3001/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    fetchUsers(); // refresh users list
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <AddUser onAdd={addUser} />
      <UsersTable users={users} onDelete={deleteUser} />
    </>
  );
}

export default App;
