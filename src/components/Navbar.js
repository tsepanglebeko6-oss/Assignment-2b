function Navbar({ currentPage, onNavigate }) {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'attractions', label: 'Attractions' },
    { id: 'enquiry', label: 'Plan a visit' },
  ];

  return (
    <header className="nav">
      <div className="nav-inner">
        <button className="brand" type="button" onClick={() => onNavigate('home')}>
          <span className="brand-mark" aria-hidden="true">
            ◇
          </span>
          <span>
            Visit <strong>Lesotho</strong>
          </span>
        </button>
        <nav className="nav-links" aria-label="Main">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              className={currentPage === link.id ? 'nav-link active' : 'nav-link'}
              onClick={() => onNavigate(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
