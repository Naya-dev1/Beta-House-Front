import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      console.log("Loaded user from localStorage:", JSON.parse(storedUser));
    }
  }, []);

  const signup = async (userData) => {
    console.log("Signup called with data:", userData); 

    try {
      const res = await fetch("https://beta-house-backend-fteb.onrender.com/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      console.log("Raw response from server:", res); 

      const text = await res.text();
      console.log("Raw response text:", text); 

      let data;
      try {
        data = JSON.parse(text); 
      } catch (parseError) {
        console.error("Failed to parse JSON:", parseError);
        toast.error("Server response is not valid JSON");
        throw parseError;
      }

      console.log("Parsed response data:", data); 

      if (!res.ok) throw new Error(data.message || "Signup failed");

      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      toast.success("Signup successful!");
      return data.user;
    } catch (error) {
      console.error("Signup error caught:", error); 
      toast.error(error.message);
      throw error;
    }
  };

  const login = async (credentials) => {
    console.log("Login called with credentials:", credentials);

    try {
      const res = await fetch("https://beta-house-backend-fteb.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      console.log("Raw login response:", res);

      const text = await res.text();
      console.log("Raw login text:", text);

      let data;
      try {
        data = JSON.parse(text);
      } catch (parseError) {
        console.error("Failed to parse login JSON:", parseError);
        toast.error("Server response is not valid JSON");
        throw parseError;
      }

      if (!res.ok) throw new Error(data.message || "Login failed");

      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      toast.success("Login successful!");
      return data.user;
    } catch (error) {
      console.error("Login error caught:", error);
      toast.error(error.message);
      throw error;
    }
  };

  const logout = () => {
    console.log("Logging out user:", user); 
    setUser(null);
    localStorage.removeItem("user");
    toast.success("Logged out successfully!");
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
