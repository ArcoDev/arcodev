import { useState } from 'react';
import CardProjects from "../card-projects/Card-Projects";
import {projects, categories} from '../card-projects/Array-Techs';

export default function Proyectos() {
  const [activeTab, setActiveTab] = useState('todos');

  const filteredProjects = activeTab === 'todos'
    ? projects
    : projects.filter(project => project.category === activeTab);

  return (
    <>
      <div id="projects" className="anchor"></div>
      <div className="title-section">
        <h2>Proyectos</h2>
      </div>

      <div className="projects-tabs">
        <select onChange={e => setActiveTab(e.target.value)} value={activeTab}>
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        {categories.map(cat => (
          <button
            key={cat}
            className={activeTab === cat ? 'active' : ''}
            onClick={() => setActiveTab(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="container-card">
        {filteredProjects.map(({ id, img_jpg, img_webp, title, description, repository, webSite, links, technologies }) => (
          <CardProjects
            key={id}
            imgjpg={img_jpg}
            imgwebp={img_webp}
            title={title}
            description={description}
            repository={repository}
            webSite={webSite}
            technologies={technologies}
            links={links}
          />
        ))}
        {/* <a
          target="_blank"
          href="https://github.com/ArcoDev?tab=repositories"
          className="btn-more"
          rel="noreferrer"
        >
          Ver más proyectos
        </a> */}
      </div>
    </>
  );
}
