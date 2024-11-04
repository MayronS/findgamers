import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export function SidebarProvider({ children, collapsed }) {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, setIsCollapsed, toggleSidebar, showNotifications, toggleNotifications }}>
      {children}
    </SidebarContext.Provider>
  );
}

// Hook personalizado para usar o contexto
export function useSidebar() {
  return useContext(SidebarContext);
}