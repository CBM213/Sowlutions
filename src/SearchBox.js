import React from 'react';

const SearchBox= ({SearchItem, setSearchItem}) => {
  return (
    <div id="search-box" className="search-box">
      <input
      key={SearchItem}
        type="text"
        placeholder="Search..."
        value={SearchItem}
        onChange={(e) => 
            setSearchItem(e.target.value)}
      />
         <button id="clear" onClick={()=>setSearchItem("")}>x</button>
    </div>
  );
}
export default SearchBox;