import React from 'react';
import Link from 'next/link';
import {ProjectCategoryDto} from '../../dto/ProjectCategoryDto';
//import './styles.scss';

export type Props = {
	categories: ProjectCategoryDto[];
};

const ProjectsTabs: React.FC<Props> = ({categories}) => {
	if (categories.length) {
		return (
			<ul className="projects-tabs">
				<li><Link href={`/projects`}>All projects</Link></li>
				{
					categories.map((category) =>
						<li key={category._id}><Link href={`/projects/${category.url}`}>{category.name}</Link></li>
					)
				}
			</ul>
		)
	}
	return null;
}

export default ProjectsTabs;