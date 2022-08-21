import React from 'react';
import Loader, {LOADER_COLORS, LOADER_SIZES} from 'components/loader';
import {ProjectDto} from 'dto/ProjectDto';
//import './styles.scss';
import ProjectItem from 'components/project-item';

type Props = {
    isLoading: boolean;
    error: string;
    items: ProjectDto[];
};

const ProjectsGrid: React.FC<Props> = ({items, isLoading, error}) => {
    if (isLoading) {
        return (
          <div className="projects-grid-loader">
              <Loader color={LOADER_COLORS.WHITE} size={LOADER_SIZES.ABOVE} />
          </div>
        );
    }

    if (error) {
        return (
          <div>{error}</div>
        );
    }

    return (
        <div className="projects-grid">
            {
                items.map((item, index) => {
                    return (
                        <ProjectItem
                            key={index}
                            link={item.website}
                            image={item.image}
                            title={item.title}
                            content={item.content}
                            categories={item.categories}
                            url={item.url}
                        />
                    );
                })
            }
        </div>
    );
};

export default ProjectsGrid;
