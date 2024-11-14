// NewsList.jsx
import NewsCard from './NewsCard';

function NewsList({ articles, onArticleSelect, selectedArticle, isMobile }) {
  return (
    <div className={`news-list ${selectedArticle && !isMobile ? 'shifted' : ''}`}>
      {/* Rendering a NewsCard for each article */}
      {articles.map((article) => (
        <NewsCard key={article.url} article={article} onArticleSelect={onArticleSelect} />
      ))}
    </div>
  );
}

export default NewsList;