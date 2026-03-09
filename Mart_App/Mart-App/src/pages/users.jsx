import { useEffect, useState } from "react";
import api from "../api";
import UserTable from "../components/userTable";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await api.get("/users");
    setUsers(res.data.data);
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      <UserTable users={users} />
    </div>
  );
}