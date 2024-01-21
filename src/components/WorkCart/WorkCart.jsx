import "./WorkCartStyle.css";
import { NavLink } from "react-router-dom";
const WorkCart = ({imgsrc,text,title,view}) => {
  return (
    <div className="project-cart">  
          <img src={imgsrc} alt="Project Image" />
          <h2 className="project-titile">{title}</h2>
          <div className="pro-details">
            <p>{text}</p>
            <div className="pro-btns">
                <NavLink to={view} className="btn">
                    View
                </NavLink>
                <NavLink to="url.com" className="btn">
                    Source
                </NavLink>
            </div>
          </div>
        </div>
  );
};

export default WorkCart;
