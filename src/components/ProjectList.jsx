function ProjectList() {
  const projects = [
    {
      id: 1,
      name: 'Blog',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing \
        elit. Voluptates doloribus tenetur expedita magni error beatae \
        quas laborum itaque nesciunt tempora cumque natus repellat, et ',
      stackUsed: ['html', 'css', 'git'],
      link: 'temp.link'
    },
    {
      id: 2,
      name: 'Exam',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing \
        elit. Voluptates doloribus tenetur expedita magni error beatae \
        quas laborum itaque nesciunt tempora cumque natus repellat, et ',
      stackUsed: ['html', 'css', 'git'],
      link: 'temp.link'
    },
    {
      id: 3,
      name: 'Weather',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing \
        elit. Voluptates doloribus tenetur expedita magni error beatae \
        quas laborum itaque nesciunt tempora cumque natus repellat, et ',
      stackUsed: ['html', 'css', 'git'],
      link: 'temp.link'
    },
    {
      id: 4,
      name: 'E-commerce Store',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing \
        elit. Voluptates doloribus tenetur expedita magni error beatae \
        quas laborum itaque nesciunt tempora cumque natus repellat, et ',
      stackUsed: ['html', 'css', 'git'],
      link: 'temp.link'
    },
  ];
  
  return (
    <div className="fullsection">
      <h1>Projects</h1>
      <div className="projects">
        { projects.map(project => <Project key={project.id} project={project} />) }
      </div>
    </div>
  );
}

function Project({ project }) {
  return (
    <div className="project">
      <h3>{ project.name }</h3>
      <p>
        { project.description.length > 150 ? 
          project.description.slice(0, 150) + '...' : project.description }
      </p>

      <div className="skills">
        <span className="stack-title">Stack</span>
        { project.stackUsed.map((skill, index) => <span key={index} className="skill">{skill}</span>) }
      </div>
      
      <a href={project.link}>Github</a>
    </div>
  );
}

export default ProjectList;