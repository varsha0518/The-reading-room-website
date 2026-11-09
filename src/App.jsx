
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

      <section className="menu-section" id="menu">

  <div className="menu-heading">

    <p className="section-tag">
      TASTE THE MOMENT
    </p>

    <h2>
      Our <span>Menu</span>
    </h2>

    <p className="menu-intro">
      Freshly brewed coffee, delicious bites,
      and little treats made with love.
    </p>

  </div>


  {/* MENU CATEGORIES */}

  <div className="menu-categories">

    <a href="#coffee">Coffee</a>
    <a href="#tea">Tea & Drinks</a>
    <a href="#breakfast">Breakfast</a>
    <a href="#sandwiches">Sandwiches</a>
    <a href="#desserts">Desserts</a>
    <a href="#combos">Special Combos</a>

  </div>


  {/* COFFEE */}

  <div className="menu-category" id="coffee">

    <div className="category-heading">
      <h3>Coffee & Espresso</h3>
      <p>Freshly brewed happiness in every cup.</p>
    </div>

    <div className="food-grid">

      <FoodCard
        image="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700"
        name="Classic Cappuccino"
        description="Rich espresso topped with creamy steamed milk."
        price="₹180"
      />

      <FoodCard
        image="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700"
        name="Caramel Latte"
        description="Smooth espresso blended with sweet caramel."
        price="₹210"
      />

      <FoodCard
        image="https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=700"
        name="Cold Coffee"
        description="Chilled coffee with a creamy and refreshing taste."
        price="₹190"
      />

    </div>

  </div>


  {/* TEA */}

  <div className="menu-category" id="tea">

    <div className="category-heading">
      <h3>Tea & Refreshments</h3>
      <p>A refreshing break for your day.</p>
    </div>

    <div className="food-grid">

      <FoodCard
        image="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=700"
        name="Classic Masala Tea"
        description="Traditional Indian tea with aromatic spices."
        price="₹100"
      />

      <FoodCard
        image="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=700"
        name="Iced Lemon Tea"
        description="Fresh lemon tea served chilled."
        price="₹140"
      />

      <FoodCard
        image="https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=700"
        name="Matcha Latte"
        description="Japanese matcha blended with creamy milk."
        price="₹220"
      />

    </div>

  </div>


  {/* BREAKFAST */}

  <div className="menu-category" id="breakfast">

    <div className="category-heading">
      <h3>Breakfast & Bakery</h3>
      <p>Start your morning with something delicious.</p>
    </div>

    <div className="food-grid">

      <FoodCard
        image="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=700"
        name="Butter Croissant"
        description="Freshly baked, flaky and buttery pastry."
        price="₹150"
      />

      <FoodCard
        image="https://images.unsplash.com/photo-1525351484163-7529414344d8?w=700"
        name="Pancake Stack"
        description="Soft pancakes served with honey and fruits."
        price="₹240"
      />

      <FoodCard
        image="https://images.unsplash.com/photo-1525351484163-7529414344d8?w=700"
        name="Classic Breakfast"
        description="A wholesome breakfast platter."
        price="₹280"
      />

    </div>

  </div>


  {/* SANDWICHES */}

  <div className="menu-category" id="sandwiches">

    <div className="category-heading">
      <h3>Sandwiches & Savouries</h3>
      <p>Delicious bites for your coffee break.</p>
    </div>

    <div className="food-grid">

      <FoodCard
        image="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=700"
        name="Grilled Cheese Sandwich"
        description="Golden toasted bread with melted cheese."
        price="₹190"
      />

      <FoodCard
        image="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=700"
        name="Veg Club Sandwich"
        description="Fresh vegetables layered with delicious sauces."
        price="₹220"
      />

      <FoodCard
        image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700"
        name="Paneer Sandwich"
        description="Spiced paneer filling with toasted bread."
        price="₹230"
      />

    </div>

  </div>


  {/* DESSERTS */}

  <div className="menu-category" id="desserts">

    <div className="category-heading">
      <h3>Desserts & Sweet Treats</h3>
      <p>Because every story deserves a sweet ending.</p>
    </div>

    <div className="food-grid">

      <FoodCard
        image="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700"
        name="Chocolate Cake"
        description="Rich chocolate cake with smooth ganache."
        price="₹180"
      />

      <FoodCard
        image="https://images.unsplash.com/photo-1488477181946-6428a0291777?w=700"
        name="Strawberry Cheesecake"
        description="Creamy cheesecake with strawberry topping."
        price="₹220"
      />

      <FoodCard
        image="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=700"
        name="Vanilla Ice Cream"
        description="Classic creamy vanilla ice cream."
        price="₹130"
      />

    </div>

  </div>


  {/* SPECIAL COMBOS */}

  <div className="menu-category" id="combos">

    <div className="category-heading">
      <h3>Our Special Combos</h3>
      <p>A perfect pairing of coffee, food and stories.</p>
    </div>

    <div className="food-grid">

      <FoodCard
        image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700"
        name="Coffee & Croissant"
        description="Your favourite coffee paired with a buttery croissant."
        price="₹260"
      />

      <FoodCard
        image="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700"
        name="Coffee & Book Combo"
        description="Enjoy a coffee and a peaceful reading experience."
        price="₹299"
      />

      <FoodCard
        image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700"
        name="Breakfast Special"
        description="Coffee and a delicious breakfast platter."
        price="₹350"
      />

    </div>

  </div>

</section>

{/* BOOKSTORE SECTION */}

<section className="books-section" id="books">

  <div className="books-heading">
    <p>OUR LITTLE LIBRARY</p>

    <h2>Stories Waiting to Be <span>Discovered.</span></h2>

    <p>
      Find your next favourite book and enjoy a beautiful
      reading experience with your coffee.
    </p>
  </div>

  <div className="books-grid">

    <BookCard
      image="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=700"
      name="The Great Gatsby"
      author="F. Scott Fitzgerald"
      genre="Classic Fiction"
      description="A story of love, dreams, wealth and the American Dream."
      price="₹350"
    />

    <BookCard
      image="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=700"
      name="Pride and Prejudice"
      author="Jane Austen"
      genre="Romance"
      description="A timeless romantic story about love, family and society."
      price="₹299"
    />

    <BookCard
      image="https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=700"
      name="The Alchemist"
      author="Paulo Coelho"
      genre="Adventure"
      description="A beautiful journey about following your dreams."
      price="₹399"
    />

    <BookCard
      image="https://images.unsplash.com/photo-1513001900722-370f803f498d?w=700"
      name="It Ends With Us"
      author="Colleen Hoover"
      genre="Romance"
      description="An emotional story about love, courage and difficult choices."
      price="₹450"
    />

    <BookCard
      image="https://images.unsplash.com/photo-1511108690759-009324a90311?w=700"
      name="The Silent Patient"
      author="Alex Michaelides"
      genre="Psychological Thriller"
      description="A gripping mystery about a woman who refuses to speak."
      price="₹380"
    />

    <BookCard
      image="https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=700"
      name="Atomic Habits"
      author="James Clear"
      genre="Self Development"
      description="Learn how small daily habits can create remarkable changes."
      price="₹499"
    />

  </div>

</section>


    </main>

  );

}

export default App;

// BOOK CARD COMPONENT

function BookCard({ image, name, author, genre, description, price }) {

  return (

    <article className="book-card">

      <div className="book-image">
        <img src={image} alt={name} loading="lazy" />
      </div>

      <div className="book-details">

        <span className="book-genre">{genre}</span>

        <h3>{name}</h3>

        <p className="book-author">By {author}</p>

        <p className="book-description">
          {description}
        </p>

        <div className="book-bottom">
          <span className="book-price">{price}</span>

          <button className="book-button">
            Explore Book
          </button>
        </div>

      </div>

    </article>

  );
}

function FoodCard({ image, name, description, price }) {

  return (

    <article className="food-card">

      <div className="food-image">

        <img src={image} alt={name} loading="lazy" />

      </div>

      <div className="food-details">

        <h4>{name}</h4>

        <p>{description}</p>

        <span className="food-price">{price}</span>

      </div>

    </article>

  );

}