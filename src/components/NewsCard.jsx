// NewsCard.jsx

function NewsCard({ article, onArticleSelect }) {
  return (
    <div className="news-card" onClick={() => onArticleSelect(article)}>
      {/* Displaying the article image */}
      <img src={article.urlToImage} alt={article.title} />

      <div className="news-content">
        {/* Displaying the article title */}
        <h3>{article.title}</h3>

        {/* Displaying the article description */}
        <p>{article.description}</p>
      </div>
    </div>
  );
}

export default NewsCard;