'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type ViewType = 'home' | 'contact';

interface ViewContextType {
  currentView: ViewType;
  setView: (view: ViewType) => void;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export function ViewProvider({ children }: { children: ReactNode }) {
  const [currentView, setCurrentView] = useState<ViewType>('home');

  const setView = (view: ViewType) => {
    setCurrentView(view);
    // Smooth scroll to top when changing views
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ViewContext.Provider value={{ currentView, setView }}>
      {children}
    </ViewContext.Provider>
  );
}

export function useView() {
  const context = useContext(ViewContext);
  if (context === undefined) {
    throw new Error('useView must be used within a ViewProvider');
  }
  return context;
}
