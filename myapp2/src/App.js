import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ExplorePage from './components/ExplorePage';
import SchedulePage from './components/SchedulePage';
import ConfirmationPage from './components/ConfirmationPage';
import SupportPage from './components/SupportPage';
import TicketConfirmationPage from './components/TicketConfirmationPage';
import BlogPage from './components/BlogPage';
import ProductsPage from './components/ProductsPage';
import FaqPage from './components/FaqPage';
import DashboardPage from './components/DashboardPage';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/ticket-confirmation" element={<TicketConfirmationPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
