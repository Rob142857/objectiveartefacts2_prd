import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p>Crafted with care.</p>
          <p className="footer-copyright">© 2024 Objective Artefacts Australia</p>
        </div>
        <div className="footer-right">
          <p>
            Architecture: <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a> + <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> + <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a> + <a href="https://www.cloudflare.com/" target="_blank" rel="noopener noreferrer">Cloudflare</a> + <a href="https://azure.microsoft.com/" target="_blank" rel="noopener noreferrer">Azure</a> + <a href="https://sway.office.com/" target="_blank" rel="noopener noreferrer">Microsoft Sway</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;