
import { useState } from "react";
import {
  FiArrowUpRight,
  FiMenu,
  FiX
} from "react-icons/fi";

import "./App.css";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Our Story", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Books", href: "#books" },
    { name: "Contact", href: "#contact" },
  ];

  return (

    <main>

      {/* NAVBAR */}

      <nav className="navbar">

        <a href="#home" className="logo">

          <h2>THE READING ROOM</h2>

          <span>CAFÉ & BOOKSTORE</span>

        </a>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>

          {navLinks.map((link) => (

            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >

              {link.name}

            </a>

          ))}

        </div>

        <a href="#contact" className="nav-button">

          Visit Us <FiArrowUpRight />

        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >

          {menuOpen ? <FiX /> : <FiMenu />}

        </button>

      </nav>


      {/* HERO SECTION */}

      <section className="hero" id="home">

        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920"
        >

          <source
            src="/videos/cafe-hero.mp4"
            type="video/mp4"
          />

        </video>


        <div className="hero-overlay"></div>


        <div className="hero-content">

          <p className="hero-tag">

            <span></span>

            COFFEE · BOOKS · SLOW LIVING

          </p>


          <h1>

            Where Every Sip

            <br />

            Tells a <span>Story.</span>

          </h1>


          <p className="hero-description">

            A little coffee, a good book, and a place to belong.
            Discover a beautiful space where stories and flavours
            come together.

          </p>


          <div className="hero-buttons">

            <a href="#menu" className="primary-button">

              Explore Our Menu <FiArrowUpRight />

            </a>


            <a href="#books" className="secondary-button">

              Discover Books

            </a>

          </div>

        </div>


        <div className="hero-bottom">

          <p>YOUR SPACE TO READ, SIP & UNWIND.</p>

          <a href="#about">

            SCROLL TO EXPLORE ↓

          </a>

        </div>

      </section>

    </main>

  );

}

export default App;
