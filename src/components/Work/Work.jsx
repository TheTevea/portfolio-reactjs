import "../WorkCart/WorkCartStyle.css";
import WorkCart from "../WorkCart/WorkCart";
import WorkCartData from "../Work/WorkCardData";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Project</h1>
      <div className="project-container">
        {WorkCartData.map((val,ind)=>{
            return <WorkCart {...val} key={ind}/>
        })}
      </div>
    </div>
  );
};

export default Work;
