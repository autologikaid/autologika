export interface BaseContent {

    id:number;

    title:string;

    slug:string;

    description:string;

    excerpt:string;

    category:string;

    level:string;

    image:string;

    featured:boolean;

    status:"draft"|"published";

    publishedAt:string;

}

export interface Video extends BaseContent {

    duration:string;

    videoUrl?:string;

}

export interface Diagram extends BaseContent{

    thumbnail:string;

    diagramNumber:number;

}

export interface Article extends BaseContent {

    author:string;

    tags:string[];

    body:string;

    thumbnail:string;

    seoTitle?:string;

    seoDescription?:string;

    keywords?:string[];

    relatedDiagrams?:string[];

}