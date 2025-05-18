import React, { useState } from "react";
import { AuthContext } from "./AuthContext";



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
