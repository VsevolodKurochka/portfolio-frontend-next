import {ProjectCategoryDto} from './ProjectCategoryDto';

export type ProjectDtoCommon = {
    _id?: string;
    image: string,
    title: string,
    date: string,
    website: string,
    content: string,
    url: string
};

export type ProjectDtoSave = ProjectDtoCommon & {
    categories: string[];
};

export type ProjectDto = ProjectDtoCommon & {
    categories: ProjectCategoryDto[]
};

export type ProjectServerDto = {
    categories: number[],
    content: {
        protected: boolean,
        rendered: string
    },
    date: string,
    date_gmt: string,
    featured_media: number,
    guid: {
        rendered: string
    },
    id: number,
    project_link: string,
    meta: string[],
    modified: string,
    slug: string,
    status: string,
    tags: string[],
    template: string,
    title: {
        rendered: string,
    },
    type: string,
    _embedded: {
        "wp:featuredmedia": {
            source_url: string
        }[],
        "wp:term": [
            {
                id: number,
                link: string,
                name: string,
                slug: string,
                taxonomy: string,
                description: string
            }[]
        ]
    }
};