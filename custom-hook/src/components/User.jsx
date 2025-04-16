import React from "react";
import useFetchWithCache from "../hooks/useFetchWithCache";

const User = () => {
  const { data, loading, error } = useFetchWithCache(
    "https://jsonplaceholder.typicode.com/users",
    "users"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>📦 User List</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}

export default User;
