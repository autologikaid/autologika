import type { Diagram } from "../types/content";
import { sortByPublishedDate } from "../utils/sort";

const diagramData: Diagram[] = [

{
    id:1,

    title:"Alur Intake",

    slug:"alur-intake",

    excerpt:"Jalur udara masuk mulai dari udara luar sampai ke pembakaran",

    description:"Diagram visual ini menjelaskan mengenai perjalanan udara dari luar sampai ke dalam sistem pembakaran.",

    category:"Air Intake",

    level:"Pemula",

    thumbnail:"/images/diagrams/thumbnails/T001-alur-intake.webp",

    image:"/images/diagrams/pictures/P001-alur-intake.webp",

    featured:true,

    status:"published",

    publishedAt:"2026-06-27",

    diagramNumber:1,
},

{
    id:2,

    title:"Mesin Knocking",

    slug:"mesin-knocking",

    excerpt:"Penjelasan dan penyebab mesin Knocking",

    description:"Diagram ini menjelaskan kenapa mesin mobil bisa mengalami Knocking dan apa penyebabnya",

    category:"Engine",

    level:"Pemula",

    thumbnail:"/images/diagrams/thumbnails/T002-mesin-knocking.webp",

    image:"/images/diagrams/pictures/P002-mesin-knocking.webp",

    featured:true,

    status:"published",

    publishedAt:"2026-06-28",

    diagramNumber:2,
},

{
    id:3,

    title:"Sensor IAT",

    slug:"sensor-iat",

    excerpt:"Penjelasan mengenai sensor IAT yang ada di mobil anda.",

    description:"Infografis ini menjelaskan apa itu sensor IAT dan kegunaannya, serta efek yang di timbulkan apabila sensor IAT rusak",

    category:"Sensor",

    level:"Pemula",

    thumbnail:"/images/diagrams/thumbnails/T003-sensor-iat.webp",

    image:"/images/diagrams/pictures/P003-sensor-iat.webp",

    featured:true,

    status:"published",

    publishedAt:"2026-06-29",

    diagramNumber:3,
},

{
    id:4,

    title:"Cara Kerja Throttle Body",

    slug:"throttle-body",

    excerpt:"Apa itu Throttle Body?",

    description:"Komponen ini bekerja layaknya pintu udara yang mengatur seberapa banyak udara boleh masuk ke mesin.",

    category:"Air Intake",

    level:"Pemula",

    thumbnail:"/images/diagrams/thumbnails/T004-throttle-body.webp",

    image:"/images/diagrams/pictures/P004-throttle-body.webp",

    featured:true,

    status:"published",

    publishedAt:"2026-06-30",

    diagramNumber:4,
},

{
    id:5,

    title:"MAF VS MAP",

    slug:"maf-vs-map",

    excerpt:"Perbedaan Sensor MAF dengan Sensor MAP",

    description:"Jangan Asal Ganti Sensor! Kenali Dulu Bedanya MAF dan MAP. Masih bingung membedakan sensor MAF dan MAP? Di diagram ini saya menjelaskan dengan sederhana",

    category:"Sensor",

    level:"Pemula",

    thumbnail:"/images/diagrams/thumbnails/T005-maf-vs-map.webp",

    image:"/images/diagrams/pictures/P005-maf-vs-map.webp",

    featured:true,

    status:"published",

    publishedAt:"2026-07-01",

    diagramNumber:5,
},

{
    id:6,

    title:"Filter Udara Kotor",

    slug:"filter-udara-kotor",

    excerpt:"Berikut Dampak dari Filter Udara yang Kotor",

    description:"Ketika filter udara mulai tersumbat, aliran udara ke mesin ikut berkurang. Akibatnya pembakaran tidak lagi optimal. Pahami resikonya melalui penjelasan di diagram berikut.",

    category:"Air Intake",

    level:"Pemula",

    thumbnail:"/images/diagrams/thumbnails/T006-filter-udara-kotor.webp",

    image:"/images/diagrams/pictures/P006-filter-udara-kotor.webp",

    featured:true,

    status:"published",

    publishedAt:"2026-07-05",

    diagramNumber:6,
},

{
    id:7,

    title:"Sensor MAF Kotor",

    slug:"sensor-maf-kotor",

    excerpt:"Berikut Penyebab dari Sensor MAF yang Kotor di Kendaraan Anda",

    description:"Sensor MAF yang kotor berpengaruh terhadap tarikan mesin anda. Ketahui penyebab dan gejalanya melalui diagram berikut.",

    category:"Sensor",

    level:"Pemula",

    thumbnail:"/images/diagrams/thumbnails/T007-sensor-maf-kotor.webp",

    image:"/images/diagrams/pictures/P007-sensor-maf-kotor.webp",

    featured:true,

    status:"published",

    publishedAt:"2026-07-07",

    diagramNumber:7,
},

];

export const diagrams = sortByPublishedDate(diagramData);