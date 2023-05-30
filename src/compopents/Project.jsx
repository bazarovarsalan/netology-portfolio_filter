function Project(props) {
    return (
      <article className="Project">
        <img 
          className="project__img"
          src={props.img}
          alt={props.name}
          title={props.name}
        />
      </article>
    );
  }
  
  export default Project;
  