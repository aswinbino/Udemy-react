import React from "react";
import { FaShoppingCart, FaBell, FaPhone, FaSearch , FaBars} from "react-icons/fa";

function Header() {
  return (
    <div className="navbar">
      {/* Left section */}
      <div className="navbar__s1">
        <h1 className="navbar__s1__title">Udemy</h1>
      </div>

      {/* Search section */}
      <div className="navbar__s2">
        <FaSearch />
        <input placeholder="Search for anything" />
      </div>

      {/* Right section */}
      <div className="navbar__s3">
        <p>Courses</p>

        {/* My Learning */}
        <div className="mylearing">
          <p>My Learning</p>
          <div className="mylearing__popup">
            <p>You did not purchase anything yet</p>
          </div>
        </div>

        {/* Icons from react-icons */}
        <FaShoppingCart  />
        <FaBell  />
        <FaPhone  />
      </div>

      {/* Mobile menu */}
      <div className="navbar__s4">
        <FaBars/>
      </div>
    </div>
  );
}

export default Header;
