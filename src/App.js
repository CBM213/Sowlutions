import SearchBox from "./SearchBox";
import React, { useState } from "react";
import ArticlesList from "./ArticlesList";
import articles from "./articles";
import "./App.css";
const App=()=>{const [searchItem, setSearchItem] = useState("");
const filteredArticles = articles.filter((article) =>
  article.title.toLowerCase().includes(searchItem.toLowerCase()) || article.Content.toLowerCase().includes(searchItem.toLowerCase())
)
return (
  <div>
    <h1>Search</h1>
    <SearchBox searchItem={searchItem} setSearchItem={setSearchItem} />
    <ArticlesList articles={filteredArticles} searchItem={searchItem} />
  </div>
)
};
export default App;