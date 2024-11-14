// ArticlePreview.jsx

function ArticlePreview({ article, onClose }) {
  return (
    <div className="article-preview-page">
      {/* Button to close the preview and go back */}
      <button onClick={onClose} className="close-btn">Go Back</button>

      {/* Displaying the article title */}
      <h2>{article.title}</h2>

      {/* Displaying the article image */}
      <img src={article.urlToImage} alt={article.title} />

      {/* Displaying article content */}
      <p>{article.content}</p>

      {/* Link to read the full article */}
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read full article</a>
    </div>
  );
}

export default ArticlePreview;