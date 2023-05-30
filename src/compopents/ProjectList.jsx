import Project from "./Project";

function ProjectList(props) {
    console.log(props)
  return (
    <div className="ProjectList">
      {
        Array.from(props.projects).map((project, projectIndex) => 
          <Project
            key={projectIndex}
            img={project.img}
            name={props.category}
          />
        )
      }
    </div>
  )
}

export default ProjectList