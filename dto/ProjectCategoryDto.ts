export type ProjectCategoryDto = {
    _id: string;
    name: string;
    description: string;
    url: string;
};

export type ProjectCategoryServerDto = {
    id: number,
    description: string,
    name: string,
    slug: string,
    taxonomy: string
};
