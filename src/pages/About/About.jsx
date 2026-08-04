import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          Welcome to Fast Food App! We are passionate about serving delicious,
          fresh, and high-quality fast food that satisfies every craving.
        </p>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide fresh, tasty, and affordable meals with
            fast delivery and excellent customer service.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose Us?</h2>

          <ul>
            <li>🍔 Fresh & Quality Ingredients</li>
            <li>🚚 Fast Delivery</li>
            <li>💰 Affordable Prices</li>
            <li>⭐ Excellent Customer Experience</li>
            <li>❤️ Made with Passion</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Our Vision</h2>

          <p>
            We aim to become the most trusted online fast food platform by
            delivering delicious food with quality and care.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;