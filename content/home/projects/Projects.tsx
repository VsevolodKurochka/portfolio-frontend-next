import React from 'react';
import Container from 'components/container';
import Button, {ButtonTypes} from 'components/button';
//import './styles.scss';
import SectionSubHeader from 'components/section-subheader';
import ProjectsGrid from 'components/projects-grid/ProjectsGrid';

const Projects: React.FC = () => {
    const projects = [];
    const cuttedProjects = projects
      .filter((project) => project.categories.some(cat => cat.url === 'top-rated-projects'))
      .slice(0, 9);

    return (
        <section className="home-projects">
            <Container>
                <SectionSubHeader title={<span><strong>Top Rated</strong> Projects</span>} />

            </Container>
            <ProjectsGrid
                isLoading={false}
                error={''}
                items={cuttedProjects}
            />
            <div className="home-projects__footer">
                <Button routerLink={'/projects'} styleType={ButtonTypes.BORDER}>Show all projects</Button>
            </div>
        </section>
    );
};

export default Projects;
