import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminAuthContext = createContext();

export function AdminAuthProvider({ children }) {
  // Session authentication state (persists only for browser session via sessionStorage token, NO passwords stored)
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('mnl_admin_session') === 'active';
  });

  const [adminUser, setAdminUser] = useState(() => {
    return {
      name: "Er. Mukund N. Lal",
      email: "admin@mnlgroup.com",
      role: "Super Administrator",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
      lastLogin: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    };
  });

  const login = (email, password) => {
    // In this frontend-only architecture without backend:
    // Verify format and grant session token. Clean API point for future backend JWT/OAuth.
    if (!email || !password) {
      return { success: false, error: "Please enter your email and password." };
    }

    // Default admin credential check for UI testing
    if (email.toLowerCase() === 'admin@mnlgroup.com' && password === 'admin123') {
      sessionStorage.setItem('mnl_admin_session', 'active');
      setIsAuthenticated(true);
      return { success: true };
    }

    return { success: false, error: "Invalid credentials. Use demo: admin@mnlgroup.com / admin123" };
  };

  const logout = () => {
    sessionStorage.removeItem('mnl_admin_session');
    setIsAuthenticated(false);
  };

  const updateProfile = (updatedData) => {
    setAdminUser(prev => ({ ...prev, ...updatedData }));
  };

  return (
    <AdminAuthContext.Provider
      value={{
        isAuthenticated,
        adminUser,
        login,
        logout,
        updateProfile
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export const useAdminAuth = () => useContext(AdminAuthContext);
