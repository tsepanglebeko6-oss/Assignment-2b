function AttractionCard({ attraction, onSelect, featured = false }) {
  return (
    <article className={featured ? 'card card-featured' : 'card'}>
      <button type="button" className="card-media" onClick={() => onSelect(attraction.id)}>
        <img src={attraction.image} alt={attraction.name} />
        <span className="badge">{attraction.category}</span>
      </button>
      <div className="card-body">
        <h3>{attraction.name}</h3>
        <p className="muted">{attraction.location}</p>
        <p>{attraction.shortDescription}</p>
        <div className="card-meta">
          <span>{attraction.estimatedCost}</span>
          <button type="button" className="text-link" onClick={() => onSelect(attraction.id)}>
            View details
          </button>
        </div>
      </div>
    </article>
  );
}

export default AttractionCard;
