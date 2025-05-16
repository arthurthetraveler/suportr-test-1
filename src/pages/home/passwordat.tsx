// components/PasswordGate.tsx
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";

type PasswordGateProps = {
  children?: React.ReactNode;
};

const PasswordGate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const correctPassword = "suP@25"; // 🔒 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === correctPassword) {
      setAuthenticated(true);
      navigate("/home");
    } else {
      alert("Incorrect password.");
    }
  };

  if (authenticated) return <>{children}</>;

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-lg font-bold mb-4">Enter Password</h2>
        <input
          type="password"
          className="w-full p-2 border rounded mb-4"
          placeholder="Password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PasswordGate;
