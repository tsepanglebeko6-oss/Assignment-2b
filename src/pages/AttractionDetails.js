function AttractionDetails({ attraction, onBack, onEnquire }) {
  if (!attraction) {
    return (
      <main className="page">
        <p className="empty">That destination could not be found.</p>
        <button type="button" className="btn ghost" onClick={onBack}>
          Back to attractions
        </button>
      </main>
    );
  }

  return (
    <main className="page details">
      <button type="button" className="text-link" onClick={onBack}>
        ← All attractions
      </button>
      <div className="details-hero">
        <img src={attraction.image} alt={attraction.name} />
        <div>
          <p className="badge">{attraction.category}</p>
          <h1>{attraction.name}</h1>
          <p className="muted">{attraction.location}</p>
          <p>{attraction.fullDescription}</p>
          <dl className="facts">
            <div>
              <dt>Estimated cost</dt>
              <dd>{attraction.estimatedCost}</dd>
            </div>
            <div>
              <dt>Best time</dt>
              <dd>{attraction.bestTime}</dd>
            </div>
            <div>
              <dt>Suggested duration</dt>
              <dd>{attraction.duration}</dd>
            </div>
          </dl>
          <button type="button" className="btn primary" onClick={() => onEnquire(attraction.id)}>
            Enquire about this destination
          </button>
        </div>
      </div>
      <section>
        <h2>Activities available</h2>
        <ul className="activity-list">
          {attraction.activities.map((activity) => (
            <li key={activity}>{activity}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default AttractionDetails;
