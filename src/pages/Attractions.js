import { useEffect, useMemo, useState } from 'react';
import attractions, { categories } from '../data/attractions';
import AttractionCard from '../components/AttractionCard';
import SearchFilter from '../components/SearchFilter';

function Attractions({ onSelectAttraction }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [filtered, setFiltered] = useState(attractions);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return attractions.filter((item) => {
      const matchesName = item.name.toLowerCase().includes(needle);
      const matchesCategory = category === 'All' || item.category === category;
      return matchesName && matchesCategory;
    });
  }, [query, category]);

  useEffect(() => {
    setFiltered(results);
  }, [results]);

  return (
    <main className="page">
      <header className="page-header">
        <p className="eyebrow">Destinations</p>
        <h1>Attractions across Lesotho</h1>
        <p>
          Search by name or filter by category. Every card is rendered from a JavaScript array of
          destination objects.
        </p>
      </header>

      <SearchFilter
        query={query}
        category={category}
        categories={categories}
        resultCount={filtered.length}
        onQueryChange={setQuery}
        onCategoryChange={setCategory}
      />

      {filtered.length === 0 ? (
        <p className="empty">No attractions match that search. Try another name or category.</p>
      ) : (
        <div className="card-grid">
          {filtered.map((attraction) => (
            <AttractionCard key={attraction.id} attraction={attraction} onSelect={onSelectAttraction} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Attractions;
