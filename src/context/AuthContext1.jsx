import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser) setUser(JSON.parse(storedUser));

    if (storedToken) setToken(storedToken);
  }, []);

  const signup = async (userData) => {
    console.log("Signup called with:", userData);

    try {
      const res = await fetch(
        "https://beta-house-backend-fteb.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );

      const data = await res.json();
      console.log("Parsed signup response:", data);

      if (!res.ok) {
        throw new Error(data.message || "Signup failed");
      }

      const { user, token } = data.data;

      setUser(user);
      setToken(token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      toast.success("Signup successful!");
      return user;
    } catch (error) {
      console.error("Signup error:", error);
      toast.error(error.message);
      throw error;
    }
  };

  const login = async (credentials) => {
    console.log("Login called with credentials:", credentials);

    try {
      const res = await fetch(
        "https://beta-house-backend-fteb.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        }
      );

      console.log("Raw login response:", res);

      const text = await res.text();
      const data = JSON.parse(text);

      console.log("Raw login text:", text);

      if (!res.ok) throw new Error(data.message || "Login failed");

      setUser(data.data.user);
      setToken(data.data.token);

      localStorage.setItem("user", JSON.stringify(data.data.user));
      localStorage.setItem("token", data.data.token);

      toast.success("Login successful!");
      return data.data.user;
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.message);
      throw error;
    }
  };

  const logout = () => {
    console.log("Logging out user:", user);
    setUser(null);
    setToken(null);

    localStorage.removeItem("user");
    localStorage.removeItem("token");

    toast.success("Logged out successfully!");
  };

  const toggleFavourite = async (propertyId) => {
    if (!user) {
      toast.error("Please login to add favourites");
      return;
    }

    const isFav = (user.favourites || []).includes(propertyId);

    try {
      const url = `https://beta-house-backend-fteb.onrender.com/api/favourite/${propertyId}/${
        isFav ? "delete" : "add"
      }`;

      const res = await fetch(url, {
        method: isFav ? "DELETE" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Failed to update favourite");
      }

      const data = await res.json();

      setUser((prev) => ({
        ...prev,
        favourites: data.data || [],
      }));

      toast.success(isFav ? "Removed from favourites" : "Added to favourites");
    } catch (err) {
      console.log(err);
      toast.error(err.message || "Could not update favourites");
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, token, signup, login, logout, toggleFavourite }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
