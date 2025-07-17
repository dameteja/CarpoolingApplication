import { Link } from "react-router-dom";
import '../Css/Footer.css';

const Footer = () => {
  return (
    <div>
      <footer
        style={{
          background: "linear-gradient(to right, #0D92F4, #77CDFF)",
          color: "#fff",
          padding: "3rem",
          marginTop: "50px",
        }}
      >
        <div className="container">
          <div className="row text-center text-md-center">
            {/* Publish Ride Section */}
            <div className="col-md-6 mb-4">
              <h5>Wants to find a travel buddy?</h5>
              <p>You are at the right place!</p>
              <p>
                <Link to="/AddDriver" className="text-warning">
                  Click here to Publish Ride →
                </Link>
              </p>
              <p style={{ fontStyle: "italic" }}>
                "Publish a ride and connect with passengers for a seamless traveling
                experience!"
              </p>
            </div>

            {/* Get Ride Section */}
            <div className="col-md-6 mb-4">
              <h5>Find your perfect ride here</h5>
              <p>
                <a href="/findRide" className="text-warning">
                  Click to Get a Ride →
                </a>
              </p>
              <p style={{ fontStyle: "italic" }}>
                "Just enter the source and destination, and we’ll find the best ride
                for you."
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;