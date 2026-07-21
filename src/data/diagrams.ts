import type { Diagram } from "../types/content";
import { sortByPublishedDate } from "../utils/sort";

const diagramData: Diagram[] = [

{
    id:1,

    title:"Alur Intake",

    slug:"alur-intake",

    excerpt:"Jalur udara masuk mulai dari udara luar sampai ke pembakaran",

    description:"Diagram visual ini menjelaskan mengenai perjalanan udara dari luar sampai ke dalam sistem pembakaran.",

    categories: [
        "Air Intake"
    ],

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

    excerpt:"Penjelasan dan penyebab kenapa mesin mengalami 'Knocking'",

    description:"Diagram ini menjelaskan kenapa mesin mobil bisa mengalami Knocking dan apa penyebabnya",

    categories: [
        "Engine"
    ],

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

    categories: [
        "Sensor",
        "Air Intake"
    ],

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

    categories: [
        "Air Intake",
        "Engine"
    ],

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

    excerpt:"Perbedaan sensor MAF dengan sensor MAP",

    description:"Jangan Asal Ganti Sensor! Kenali Dulu Bedanya MAF dan MAP. Masih bingung membedakan sensor MAF dan MAP? Di diagram ini saya menjelaskan dengan sederhana",

    categories: [
        "Sensor",
        "Air Intake"
    ],

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

    excerpt:"Berikut dampak dari filter udara yang kotor",

    description:"Ketika filter udara mulai tersumbat, aliran udara ke mesin ikut berkurang. Akibatnya pembakaran tidak lagi optimal. Pahami resikonya melalui penjelasan di diagram berikut.",

    categories: [
        "Air Intake",
    ],

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

    excerpt:"Berikut penyebab dari sensor MAF yang kotor di kendaraan anda",

    description:"Sensor MAF yang kotor berpengaruh terhadap tarikan mesin anda. Ketahui penyebab dan gejalanya melalui diagram berikut.",

    categories: [
        "Sensor",
        "Air Intake"
    ],

    level:"Pemula",

    thumbnail:"/images/diagrams/thumbnails/T007-sensor-maf-kotor.webp",

    image:"/images/diagrams/pictures/P007-sensor-maf-kotor.webp",

    featured:true,

    status:"published",

    publishedAt:"2026-07-07",

    diagramNumber:7,
},

{
    id:8,

    title:"Cara Bersihkan Sensor MAF",

    slug:"cara-bersihkan-sensor-maf",

    excerpt:"Berikut cara membersihkan sensor MAF yang benar",

    description:"Banyak pemilik mobil mengira membersihkan sensor MAF cukup dengan menyemprot cairan pembersih. Padahal, ada beberapa kesalahan kecil yang justru bisa merusak elemen sensor yang sangat sensitif.",

    categories: [
        "Sensor",
        "Air Intake"
    ],

    level:"Pemula",

    thumbnail:"/images/diagrams/thumbnails/T008-bersihkan-maf.webp",

    image:"/images/diagrams/pictures/P008-bersihkan-maf.webp",

    featured:true,

    status:"published",

    publishedAt:"2026-07-18",

    diagramNumber:8,
},

{
    id:9,

    title:"Memilih Filter Udara Yang Tepat",

    slug:"memilih-filter-udara",

    excerpt:"Semua filter udara memang terlihat mirip. Tapi, apakah semuanya benar-benar cocok untuk mobilmu?",

    description:"Memilih filter udara bukan hanya soal ukuran atau harga. Filter yang berkualitas berperan penting dalam menyaring debu sebelum udara masuk ke mesin. Jika salah memilih, debu bisa lebih mudah lolos dan mempercepat keausan komponen mesin.",

    categories: [
        "Sensor",
        "Air Intake"
    ],

    level:"Pemula",

    thumbnail:"/images/diagrams/thumbnails/T009-memilih-filter-udara.webp",

    image:"/images/diagrams/pictures/P009-memilih-filter-udara.webp",

    featured:true,

    status:"published",

    publishedAt:"2026-07-21",

    diagramNumber:9,
},

];

export const diagrams = sortByPublishedDate(diagramData);