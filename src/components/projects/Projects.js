import './Projects.css';
import Project from './Project';
import github from '../../images/github.png';

const Projects = () => {
  // could connect this with the github api and add the data 
  const projects = [
    {desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla labore et molestiae laborum repudiandae, suscipit doloribus sequi recusandae laboriosam adipisci alias vitae rerum quidem sit. Molestias, odio! Accusamus quo est vero repellat autem sed cum voluptates amet, maxime inventore nam magnam atque commodi dolor voluptatum fugit necessitatibus? Quibusdam, iste delectus."},
    {desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla labore et molestiae laborum repudiandae, suscipit doloribus sequi recusandae laboriosam adipisci alias vitae rerum quidem sit. Molestias, odio! Accusamus quo est vero repellat autem sed cum voluptates amet, maxime inventore nam magnam atque commodi dolor voluptatum fugit necessitatibus? Quibusdam, iste delectus."},
    {desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla labore et molestiae laborum repudiandae, suscipit doloribus sequi recusandae laboriosam adipisci alias vitae rerum quidem sit. Molestias, odio! Accusamus quo est vero repellat autem sed cum voluptates amet, maxime inventore nam magnam atque commodi dolor voluptatum fugit necessitatibus? Quibusdam, iste delectus."},
    {desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla labore et molestiae laborum repudiandae, suscipit doloribus sequi recusandae laboriosam adipisci alias vitae rerum quidem sit. Molestias, odio! Accusamus quo est vero repellat autem sed cum voluptates amet, maxime inventore nam magnam atque commodi dolor voluptatum fugit necessitatibus? Quibusdam, iste delectus."},
    {desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla labore et molestiae laborum repudiandae, suscipit doloribus sequi recusandae laboriosam adipisci alias vitae rerum quidem sit. Molestias, odio! Accusamus quo est vero repellat autem sed cum voluptates amet, maxime inventore nam magnam atque commodi dolor voluptatum fugit necessitatibus? Quibusdam, iste delectus."},
    {desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla labore et molestiae laborum repudiandae, suscipit doloribus sequi recusandae laboriosam adipisci alias vitae rerum quidem sit. Molestias, odio! Accusamus quo est vero repellat autem sed cum voluptates amet, maxime inventore nam magnam atque commodi dolor voluptatum fugit necessitatibus? Quibusdam, iste delectus."},
  ]

  const renderProjects = () => {
    return projects.map((project, index) => <Project key={index} project={project} /> )
  }

  return (
    <div id="projects-container">
      <h1>PROJECTS</h1>
      <div id="projects">
        {renderProjects()}
      </div>
      <a id="github-link" href="http://github.com/RTBlanco" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="link to github" />
      </a>
    </div>
  );
};

export default Projects;