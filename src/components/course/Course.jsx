import "./course.css";
import "./ResponsiveBlog.css";
import { PostCourse } from "./postcourse/PostCourse";

import BlogPic1 from "../../assets/blog_image_1.svg";
import BlogPic2 from "../../assets/bloco_image_2.svg";
import BlogPic3 from "../../assets/bloco_image_3.svg";
// import BlogPic4 from "../../../assets/bloco_image_4.svg";
import ProfilePic from "../../assets/profile.jpg";
import { Link } from "react-router-dom";

export const Course = () => {
 
  return (
    <section className="blog">
      <div className="blogWrapper">
        <div className="topInfo">
          <h2>Welcome to Qurio Class</h2>
          <h3>Where teaching and learning come together</h3>
          <p>
          Qurio Class is your all-in-one place for teaching and learning. Our easy-to-use and secure tool helps educators manage, measure, and enrich learning experiences.
          </p>
        </div>

        <div className="postsWrapper">
            <div className="postBtn">
            <button className="left">←</button>
            </div>
            
          <PostCourse
            src={BlogPic1}
            alt="alimento1"
            title="Pre Class"
            profile={ProfilePic}
            name="fabio"
            author="KuldeepSinh Chavda"
          />

          <PostCourse
            src={BlogPic2}
            alt="alimento2"
            title="During Class"
            profile={ProfilePic}
            name="Rapha Gama"
            author="KuldeepSinh Chavda"
          />
<Link to="/md" style={{ color: 'red'}} >
          <PostCourse
            src={BlogPic3}
            alt="alimento3"
            title="After Class"
            profile={ProfilePic}
            name="MM"
            author="KuldeepSinh Chavda"
          />
</Link>
          
          <div className="postBtn">
            <button className="rigth">→</button>
            </div>
        </div>
      </div>
    </section>
  );
};
