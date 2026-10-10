function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <p className="brand-footer">Visit Lesotho</p>
          <p>The Mountain Kingdom — trails, culture and highland hospitality.</p>
        </div>
        <div>
          <p className="footer-heading">Explore</p>
          <button type="button" onClick={() => onNavigate('home')}>
            Home
          </button>
          <button type="button" onClick={() => onNavigate('attractions')}>
            Attractions
          </button>
          <button type="button" onClick={() => onNavigate('enquiry')}>
            Enquiry
          </button>
        </div>
        <div>
          <p className="footer-heading">Visitor desk</p>
          <p>Maseru, Lesotho</p>
          <p>hello@visitlesotho.ls</p>
          <p>+266 2231 2000</p>
        </div>
      </div>
      <p className="copyright">Discover the beauty, culture and adventure of the Kingdom
          in the Sky</p>
    </footer>
  );
}

export default Footer;
