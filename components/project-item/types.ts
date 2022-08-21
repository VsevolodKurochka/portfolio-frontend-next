import {ProjectCategoryDto} from 'dto/ProjectCategoryDto';

export type Props = {
    link: string,
    image: string,
    title: string,
    content: string,
    categories: ProjectCategoryDto[],
    onLoad?(): void;
    url: string
};
