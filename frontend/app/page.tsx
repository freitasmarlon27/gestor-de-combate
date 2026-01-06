'use client';

import { ViewProvider, useView } from './contexts/ViewContext';
import HomeView from './components/HomeView';
import ContactView from './components/ContactView';

function Navigation() {
  const { currentView, setView } = useView();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <h1>Dra. Mariana Romão</h1>
        </div>
        <ul className="nav-menu">
          <li>
            <button
              className={`nav-link ${currentView === 'home' ? 'active' : ''}`}
              onClick={() => setView('home')}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${currentView === 'contact' ? 'active' : ''}`}
              onClick={() => setView('contact')}
            >
              Contato
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function MainContent() {
  const { currentView } = useView();

  return (
    <main className="main-content">
      {currentView === 'home' && <HomeView />}
      {currentView === 'contact' && <ContactView />}
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Dra. Mariana Romão. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <ViewProvider>
      <div className="app">
        <Navigation />
        <MainContent />
        <Footer />
      </div>
    </ViewProvider>
  );
}
