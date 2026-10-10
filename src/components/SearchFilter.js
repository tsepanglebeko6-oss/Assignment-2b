function SearchFilter({ query, category, categories, resultCount, onQueryChange, onCategoryChange }) {
  return (
    <section className="filter-bar" aria-label="Search and filter attractions">
      <label className="sr-only" htmlFor="attraction-search">
        Search by name
      </label>
      <input
        id="attraction-search"
        type="search"
        placeholder="Search attractions by name"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
      />
      <div className="chips" role="group" aria-label="Filter by category">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            className={category === item ? 'chip active' : 'chip'}
            onClick={() => onCategoryChange(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="result-count">{resultCount} destination{resultCount === 1 ? '' : 's'} found</p>
    </section>
  );
}

export default SearchFilter;
