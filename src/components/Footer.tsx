import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p>Crafted with care</p>
        </div>
        <div className="footer-right">
          <p>
            Created with <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a> and <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>, hosted on <a href="https://www.cloudflare.com/" target="_blank" rel="noopener noreferrer">Cloudflare</a>.
          </p>
          <p>
            Powered by <a href="https://azure.microsoft.com/" target="_blank" rel="noopener noreferrer">Azure</a> and <a href="https://sway.office.com/" target="_blank" rel="noopener noreferrer">Microsoft Sway</a>.
          </p>
          <p>© 2024 Objective Artefacts Australia</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;