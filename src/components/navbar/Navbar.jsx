import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Booking.com</span>

        <span className="inr">
          <h3>INR</h3>
        </span>
        <img
          className="imgind"
          src="https://t-cf.bstatic.com/design-assets/assets/v3.79.0/images-flags/In@3x.png"
          alt="Img"
        />
        <span className="ques" id="first">
          ?
        </span>
        <span className="list">List your properties</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Signin</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
