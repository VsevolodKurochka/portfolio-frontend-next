import React from 'react';
import {Props} from './types';
//import './styles.scss';
import Link from 'next/link';
import { useRouter } from "next/router";

const ProjectItem: React.FC<Props> = ({title, image, categories, link, onLoad, content, url}) => {
	let history = useRouter();
	const handleCategoryClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>, url: string) => {
		event.preventDefault();
		history.push(`/projects/${url}`);
	};
	return (
		<figure className="project-item">
			<Link href={`/project/${url}`}>
				<a className="project-item__link">
				<img src={image} alt={title} onLoad={onLoad} className="project-item__image" />
					<figcaption className="project-item__caption">
						<p className="project-item__title" dangerouslySetInnerHTML={{
							__html: title
						}} />
						<div className="project-item__content" dangerouslySetInnerHTML={{
							__html: content
						}} />
						<div className="project-item__categories">
							{categories.map((category) => {
								return <span
									key={category._id}
									title={category.name}
									onClick={(event) => handleCategoryClick(event, category.url)}>
									{category.name}
								</span>
							})}
						</div>
						<div className="project-item__footer">
							<span className={'btn btn_filled-brand btn_default'}>
								Read more
							</span>
						</div>
					</figcaption>
				</a>
			</Link>
		</figure>
	);
};

export default ProjectItem;
