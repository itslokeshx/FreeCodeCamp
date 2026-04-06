const { useState } = React;

export const ShoppingList = () => {
  return (
    <div className="container">
      <h1>Shopping List</h1>
      <form>
        <label htmlFor="search">Search for an item:</label>
        <input
          type="search"
          id="search"
          placeholder="Search..."
          aria-describedby="search-description"
        />

        <p id="search-description">Type to filter the list below:</p>
      </form>
    </div>
  );
};
