import React, { useState } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import Projects from '../data/projects-pictures'
import App from "../App.css"

function Portfolio() {
  const filters = ["All", "Websites", "Flayers", "Business Cards"];
  const [filter, setFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(Projects);
  const filterTool = (filter) => {
    return Projects.filter(project => {
        return filter === "All" ? Projects : project.category === filter})
    }

  return (
    <div className="Portfolio">
        <Toolbar
        filters={filters}
        selected={filter}
        onSelectFilter={(filter) => {
            setFilter(filter);
            setFilteredProjects(filterTool(filter));
        }}
      />
      <ProjectList
        projects={filteredProjects}
      />
    </div>
  );
}

export default Portfolio;
