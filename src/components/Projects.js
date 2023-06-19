import React from 'react';
import './Projects.css';

const ProjectLink = ({ name, link }) => {
  const buttonStyle = {
    padding: '10px 20px',
    fontSize: 'medium',
    color: 'black',
    width: '150px',
  };

  const getRating = (name) => {
    const ratings = {
      'HTML and CSS': 5,
      'Calculator React JS': 4,
      'Bootstrap Tasks': 3,
      'Age Calculator React JS': 5,
    };
    return ratings[name] || 0;
  };

  const RatingStars = ({ rating }) => {
    const starStyle = {
      color: 'gold',
      marginRight: '2px',
    };

    const getStars = (rating) => {
      const stars = [];
      for (let i = 0; i < rating; i++) {
        stars.push(<span key={i} style={starStyle}>★</span>);
      }
      return stars;
    };

    return <div className="rating-stars">{getStars(rating)}</div>;
  };

  return (
    <div className="project-link">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button style={buttonStyle}>{name}</button>
      </a>
      <RatingStars rating={getRating(name)} />
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      name: 'HTML and CSS',
      link: 'https://vikramreddy2703.github.io/VikramS_HTML/',
    },
    {
      name: 'Calculator React JS',
      link: 'https://vikramreddy2703.github.io/VikramS_React_2/',
    },
    {
      name: 'Bootstrap Tasks',
      link: 'https://vikramreddy2703.github.io/VikramS_BS/',
    },
    {
      name: 'Age Calculator React JS',
      link: 'https://vikramreddy2703.github.io/VikramS_React__5/',
    },
  ];

  return (
    <div>
      <h1>Projects</h1>
      <div className="project-links">
        {projects.map((project, index) => (
          <ProjectLink
            key={index}
            name={project.name}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
