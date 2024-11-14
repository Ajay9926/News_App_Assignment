// Sidebar.jsx

function Sidebar({ isOpen, setCategory, setIsSidebarOpen }) {
  // Handle category click and close sidebar if it's open
  const handleCategoryClick = (category) => {
    setCategory(category);
    if (isOpen) setIsSidebarOpen(false); // Close sidebar after category selection
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <h2>Categories</h2>
      <ul>
        {/* List of categories */}
        {['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'].map((category) => (
          <li key={category} onClick={() => handleCategoryClick(category)}>
            {category.charAt(0).toUpperCase() + category.slice(1)} {/* Capitalizing the first letter */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;