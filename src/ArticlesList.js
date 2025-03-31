import React from "react";

const HighlightedText=({text, highlight})=>{
    if(!highlight.trim()) return text;

    const regex =new RegExp(`(${highlight})`, "gi");
    return text.split(regex).map((part, index) => {
        if (part.toLowerCase() === highlight.toLowerCase()) {
            return <span key={index} style={{ backgroundColor: "yellow" }}>{part}</span>;
        }
        return part;
    })
}

const articlesList = ({ articles, searchItem }) => {
    return (
        <div className="articles-list">
            <p> {articles.length} posts found</p>
            {articles.map((article) => (
                <div key={article.id} className="article-item">
                    <h3><HighlightedText text={article.title} highlight={searchItem}/></h3>
                    <p>{article.Date}</p>
                    <p><HighlightedText text={article.Content} highlight={searchItem}/></p>
                    <br></br>
                </div>
            ))}
        </div>
    );
}
export default articlesList;