import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-text">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
