import React from "react";
import c1 from "../assets/image/c1.jpg";
import c2 from "../assets/image/c2.jpg";
import c3 from "../assets/image/c3.jpg";
import c4 from "../assets/image/c4.jpg"; 

function Recommend() {
  return (
    <div className="recommend">
      <h1 className="recommend__title">Recommend</h1>
      <p>Pick the best</p>

      {/* First Row */}
      <div className="recommend__container">
        <div className="course-card">
          <img src={c1} alt="Java course" />
          <h3>2023 Java Data Model Class</h3>
          <p>Aliven</p>
          <p>4.9 ⭐⭐⭐⭐</p>
          <p>$555 <del>$1999</del></p>
        </div>

        <div className="course-card">
          <img src={c2} alt="Python course" />
          <h3>2023 Python Data Model Class</h3>
          <p>John</p>
          <p>4.7 ⭐⭐⭐⭐</p>
          <p>$999 <del>$1999</del></p>
        </div>

        <div className="course-card">
          <img src={c3} alt="HTML course" />
          <h3>2023 HTML Data Model Class</h3>
          <p>Pal</p>
          <p>4.5 ⭐⭐⭐⭐</p>
          <p>$899 <del>$1999</del></p>
        </div>

        <div className="course-card">
          <img src={c4} alt="CSS course" />
          <h3>2023 CSS Data Model Class</h3>
          <p>Alen</p>
          <p>4.6 ⭐⭐⭐⭐</p>
          <p>$899 <del>$1999</del></p>
        </div>
      </div>

      {/* Second Row */}
      <div className="recommend__container">
        <div className="course-card">
          <img src={c1} alt="Java course" />
          <h3>2023 Java Data Model Class</h3>
          <p>Aliven</p>
          <p>4.9 ⭐⭐⭐⭐</p>
          <p>$555 <del>$1999</del></p>
        </div>

        <div className="course-card">
          <img src={c2} alt="Python course" />
          <h3>2023 Python Data Model Class</h3>
          <p>John</p>
          <p>4.7 ⭐⭐⭐⭐</p>
          <p>$999 <del>$1999</del></p>
        </div>

        <div className="course-card">
          <img src={c3} alt="HTML course" />
          <h3>2023 HTML Data Model Class</h3>
          <p>Pal</p>
          <p>4.5 ⭐⭐⭐⭐</p>
          <p>$899 <del>$1999</del></p>
        </div>

        <div className="course-card">
          <img src={c4} alt="CSS course" />
          <h3>2023 CSS Data Model Class</h3>
          <p>Alen</p>
          <p>4.6 ⭐⭐⭐⭐</p>
          <p>$899 <del>$1999</del></p>
        </div>
      </div>
    </div>
  );
}

export default Recommend;
