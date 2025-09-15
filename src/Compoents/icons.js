

import React, { useState } from 'react';
import './SocialSidebar.scss';
import { 
  FaFacebook, 
 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube, 
  FaWhatsapp,
  FaChevronLeft,
  FaChevronRight,
  FaTiktok
} from 'react-icons/fa';

const SocialSidebar = () => {
  const [open, setOpen] = useState(false);

  const socialLinks = [
    { name: 'facebook', url: 'https://www.facebook.com/profile.php?id=61568445782096', icon: <FaFacebook size={20} />, color: '#1877F2' },
    { name: 'whatsapp', url: 'https://wa.me/923178221428', icon: <FaWhatsapp size={20} />, color: '#25D366' },
    { name: 'instagram', url: 'https://www.instagram.com/musa.alraza_tandt?igsh=d2t6cTNpODdnZDF2', icon: <FaInstagram size={20} />, color: '#E4405F' },
    { name: 'linkedin', url: 'https://www.linkedin.com/', icon: <FaLinkedin size={20} />, color: '#0A66C2' },
    { name: 'tiktok', url: 'https://www.tiktok.com/@musa.al.raza.tandt?_t=ZS-8uHj7S7wE1w&_r=1', icon: <FaTiktok size={20} />, color: '#000000' },
    { name: 'youtube', url: 'https://www.youtube.com/@MUSAALRAZA', icon: <FaYoutube size={20} />, color: '#FF0000' }
  ];

  return (
    <div className={`social-sidebar ${open ? 'open' : ''}`}>
      <div className="sidebar-toggle" onClick={() => setOpen(!open)}>
        {open ? <FaChevronRight size={20} /> : <FaChevronLeft size={20} />}
      </div>
      <div className="social-links">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-link social-${social.name}`}
            style={{ '--social-color': social.color }}
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialSidebar;
