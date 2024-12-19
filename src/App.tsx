import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <div style={{ flex: 1, display: 'flex' }}>
          <iframe
            src="https://sway.office.com/s/CWiorgNCvgEpsesE/embed"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            sandbox="allow-forms allow-modals allow-orientation-lock allow-popups allow-same-origin allow-scripts"
            scrolling="no"
            style={{ border: 'none', width: '100%', height: '100%' }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;