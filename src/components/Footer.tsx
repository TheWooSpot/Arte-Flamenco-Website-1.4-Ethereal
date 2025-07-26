import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display text-2xl mb-4">
              <span className="gold-gradient">Ethereal</span>
            </h3>
            <p className="text-[10px] tracking-widest text-accent/80 mb-4">DANCE STUDIO</p>
            <p className="text-light/70 mb-6 max-w-xs">
              Where movement transcends the physical, and dance becomes a journey of self-discovery.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-accent/50 flex items-center justify-center text-accent hover:bg-accent hover:text-dark transition-all">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-accent/50 flex items-center justify-center text-accent hover:bg-accent hover:text-dark transition-all">
                <FaFacebookF />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-accent/50 flex items-center justify-center text-accent hover:bg-accent hover:text-dark transition-all">
                <FaYoutube />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-accent/50 flex items-center justify-center text-accent hover:bg-accent hover:text-dark transition-all">
                <FaTiktok />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-accent uppercase tracking-wider text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-light/70 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-light/70 hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/workshops" className="text-light/70 hover:text-accent transition-colors">Workshops</Link></li>
              <li><Link to="/performances" className="text-light/70 hover:text-accent transition-colors">Performances</Link></li>
              <li><Link to="/instructors" className="text-light/70 hover:text-accent transition-colors">Instructors</Link></li>
              <li><Link to="/contact" className="text-light/70 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-accent uppercase tracking-wider text-sm mb-4">Contact Us</h4>
            <p className="text-light/70 mb-2">123 Ethereal Avenue</p>
            <p className="text-light/70 mb-2">New York, NY 10001</p>
            <p className="text-light/70 mb-4">United States</p>
            <p className="text-light/70 mb-2">info@etherealdance.com</p>
            <p className="text-light/70">+1 (555) 123-4567</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-light/10 text-center text-light/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Ethereal Dance Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
