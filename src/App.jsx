// App.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import NewsList from './components/NewsList';
import ArticlePreview from './components/ArticlePreview';
import './App.css';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('general');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Manages sidebar toggle state

  // Fetch articles based on the selected category
  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch(
        `${API_URL}?country=us&category=${category}&apiKey=${API_KEY}`
      );
      const data = await res.json();
      setArticles(data.articles || []);
    };
    fetchArticles();
  }, [category]);

  // If an article is selected, show the article preview page
  if (selectedArticle) {
    return (
      <div className="article-preview-page">
        <ArticlePreview article={selectedArticle} onClose={() => setSelectedArticle(null)} />
      </div>
    );
  }

  // Main UI with sidebar and news list
  return (
    <div className="news-app">
      <Sidebar
        isOpen={isSidebarOpen}
        setCategory={setCategory}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="main-content">
        {/* Button to toggle sidebar */}
        <button
          className="sidebar-toggle-btn"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          ☰
        </button>

        {/* Displaying the list of news articles */}
        <NewsList articles={articles} onArticleSelect={setSelectedArticle} />
      </div>
    </div>
  );
}

export default App;