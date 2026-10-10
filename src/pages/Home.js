import attractions from '../data/attractions';
import AttractionCard from '../components/AttractionCard';

const activities = [
  {
    title: 'Pony trekking',
    text: 'Travel village to village on Basotho ponies through highland passes and river valleys.',
  },
  {
    title: 'Waterfall days',
    text: 'Stand in the spray at Maletsunyane or follow quieter falls after summer rain.',
  },
  {
    title: 'Heritage walks',
    text: 'Walk Thaba-Bosiu and cave dwellings with local guides who carry the nation’s stories.',
  },
  {
    title: 'Highland adventure',
    text: 'Ski AfriSki in winter, tackle Sani Pass by 4x4, or hike Sehlabathebe’s sandstone country.',
  },
];

function Home({ onNavigate, onSelectAttraction }) {
  const featured = attractions.slice(0, 3);

  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">The Mountain Kingdom</p>
          <h1>Discover Lesotho’s trails, culture and high-country light.</h1>
          <p>
            From the roar of Maletsunyane Falls to the quiet plateau of Thaba-Bosiu, Lesotho is a
            compact country of big skies, living heritage and mountain adventure.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn primary" onClick={() => onNavigate('attractions')}>
              Browse attractions
            </button>
            <button type="button" className="btn ghost" onClick={() => onNavigate('enquiry')}>
              Plan your visit
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Why visit Lesotho</h2>
          <p>
            Entirely surrounded by South Africa, Lesotho sits above 1,000 metres everywhere you go.
            Visitors come for waterfalls, highland dams, San heritage, Basotho culture and some of
            the most open mountain roads in southern Africa.
          </p>
        </div>
        <div className="stat-grid">
          <article>
            <strong>1,000 m+</strong>
            <span>Lowest point in the country</span>
          </article>
          <article>
            <strong>9</strong>
            <span>Featured destinations to explore</span>
          </article>
          <article>
            <strong>4</strong>
            <span>Seasons of highland travel</span>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading split">
          <div>
            <h2>Featured destinations</h2>
            <p>Start with three places that capture nature, culture and adventure.</p>
          </div>
          <button type="button" className="text-link" onClick={() => onNavigate('attractions')}>
            See all attractions
          </button>
        </div>
        <div className="card-grid">
          {featured.map((attraction) => (
            <AttractionCard
              key={attraction.id}
              attraction={attraction}
              featured
              onSelect={onSelectAttraction}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Popular activities</h2>
          <p>Build a trip around the experiences Lesotho is known for.</p>
        </div>
        <div className="activity-grid">
          {activities.map((activity) => (
            <article key={activity.title} className="activity-card">
              <h3>{activity.title}</h3>
              <p>{activity.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
