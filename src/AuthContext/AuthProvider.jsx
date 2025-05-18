import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [coffees, setCoffees] = useState([]);

    const coffeeContext = {coffees, setCoffees}
  return (
    <div>
      <AuthContext value={coffeeContext}>
        {children}
      </AuthContext>
    </div>
  );
};

export default AuthProvider;
