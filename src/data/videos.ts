import type { Video } from "../types/content";
import { sortByPublishedDate } from "../utils/sort";

const videoData: Video[] = [

{
id:1,

title:"Warna Ban mobil",

slug:"ban-mobil",

excerpt:"Ternyata Ban Mobil Tidak Terlahir Berwarna Hitam! Ini Alasannya.",

description:"Tahukah kamu kalau karet alami sebenarnya bukan berwarna hitam? Warna hitam pada ban bukan sekadar untuk tampilan, tetapi berasal dari bahan bernama carbon black yang membuat ban lebih kuat, lebih tahan panas, lebih tahan aus",

categories: [
    "Undercarriage"
],

level:"Pemula",

duration:"00:34",

image:"/images/videos/thumbnails/001-ban-mobil-warna.webp",

videoUrl:"https://www.youtube.com/embed/T6mihouCyaE",

featured:true,

status:"published",

publishedAt:"2026-06-22",
},

{
id:2,

title:"Pemilihan Oli",

slug:"pemilihan-oli",

excerpt:"Apakah Oli Mahal Selalu Lebih Bagus? Ini Faktanya!",

description:"Oli yang tepat akan melindungi mesin secara optimal, sedangkan oli yang tidak sesuai justru bisa mengurangi performa pelumasan pada kondisi tertentu, meskipun harganya lebih mahal.",

categories: [
    "Lubrication",
    "Engine"
],

level:"Pemula",

duration:"01:01",

image:"/images/videos/thumbnails/002-oli-mahal.webp",

videoUrl:"https://www.youtube.com/embed/r3xeaZDsu-8",

featured:true,

status:"published",

publishedAt:"2026-06-23",
},

{
id:3,

title:"Mesin Knocking",

slug:"mesin-knocking",

excerpt:"Kenapa Mesin Mobil Bisa Knocking? Ini Penyebab dan Cara Mencegahnya",

description:"Banyak orang mengira itu hal biasa, padahal suara tersebut bisa menjadi tanda knocking, yaitu pembakaran yang terjadi tidak normal di dalam ruang bakar.",

categories: [
    "Engine"
],

level:"Pemula",

duration:"01:10",

videoUrl:"https://www.youtube.com/embed/zU76TIJkANM",

image:"/images/videos/thumbnails/003-mesin-knocking.webp",

featured:true,

status:"published",

publishedAt:"2026-06-24",
},

{
id:4,

title:"Sensor IAT",

slug:"sensor-iat",

excerpt:"Penyebab Mobil Loyo Ternyata Bisa dari Sensor Ini",

description:"Banyak orang mengira sensor IAT hanyalah sensor biasa. Padahal, data dari sensor ini digunakan ECU untuk menghitung campuran udara dan bahan bakar agar pembakaran tetap optimal.",

categories: [
    "Sensor",
    "Air Intake"
],

level:"Pemula",

duration:"01:03",

videoUrl:"https://www.youtube.com/embed/nAjR57QJiZc",

image:"/images/videos/thumbnails/004-sensor-iat.webp",

featured:true,

status:"published",

publishedAt:"2026-06-26",
},

{
id:5,

title:"ECU Salah Baca Data",

slug:"ecu-salah-baca-data",

excerpt:"ECU Dibohongi! Ini yang Terjadi Kalau Menerima Data yang Salah! 😱",

description:"ECU mengatur kerja mesin berdasarkan data dari berbagai sensor. Jika salah satu sensor mengirimkan data yang keliru, ECU juga bisa mengambil keputusan yang tidak tepat.",

categories: [
    "ECU"
],

level:"Pemula",

duration:"01:09",

videoUrl:"https://www.youtube.com/embed/zU76TIJkANM",

image:"/images/videos/thumbnails/005-ecu-salah-data.webp",

featured:true,

status:"published",

publishedAt:"2026-06-27",
},

{
id:6,

title:"Throttle Body Kotor",

slug:"throttle-body-kotor",

excerpt:"Kenapa Throttle Body Kotor Membuat Idle Tidak Stabil? Ini Penjelasan Ilmiahnya!",

description:"🚗 RPM mobil naik turun saat langsam? Mesin terasa bergetar ketika berhenti di lampu merah? salah satu penyebab yang sering terlewat adalah throttle body yang kotor.",

categories: [
    "Air Intake",
    "Engine"
],

level:"Pemula",

duration:"01:23",

videoUrl:"https://www.youtube.com/embed/QvckOuOFCPY",

image:"/images/videos/thumbnails/006-throttle-body-kotor.webp",

featured:true,

status:"published",

publishedAt:"2026-07-01",
},

{
id:7,

title:"MAF vs MAP",

slug:"maf-vs-map",

excerpt:"MAF vs MAP! Bedanya Ternyata Bukan Cuma Nama",

description:"Kalau tugasnya sama, kenapa pabrikan tidak memakai satu jenis sensor saja? Ternyata MAF dan MAP memiliki cara kerja yang berbeda dalam membantu ECU menghitung udara yang masuk ke mesin.",

categories: [
    "Sensor",
    "Air Intake"
],

level:"Pemula",

duration:"01:03",

videoUrl:"https://www.youtube.com/embed/ODhhtcIH10o",

image:"/images/videos/thumbnails/007-maf-vs-map.webp",

featured:true,

status:"published",

publishedAt:"2026-07-15",
},

{
id:8,

title:"Sensor MAF Kotor?",

slug:"sensor-maf-kotor",

excerpt:"Mobil loyo? bisa jadi sensor MAF kotor",

description:"Sensor MAF (Mass Air Flow Sensor) berfungsi mengukur jumlah udara yang masuk ke mesin. Namun seiring waktu, sensor ini bisa kotor akibat debu, uap oli dari sistem PCV, filter udara yang buruk, atau lingkungan yang berdebu.",

categories: [
    "Sensor",
    "Air Intake"
],

level:"Pemula",

duration:"01:35",

videoUrl:"https://www.youtube.com/embed/W13_BszvM38",

image:"/images/videos/thumbnails/008-sensor-maf-kotor.webp",

featured:true,

status:"published",

publishedAt:"2026-07-17",
},

{
id:9,

title:"Bersihkan Sensor MAF",

slug:"bersihkan-sensor-maf",

excerpt:"🚨 Jangan asal semprot! Satu kesalahan kecil saat membersihkan sensor MAF bisa membuat sensor rusak",

description:"Banyak pemilik mobil mengira membersihkan sensor MAF cukup dengan menyemprot cairan Cleaner, padahal ada langkah-langkah penting yang harus dilakukan agar elemen sensor yang sangat sensitif tetap aman.",

categories: [
    "Sensor",
    "Air Intake"
],

level:"Pemula",

duration:"01:43",

videoUrl:"https://www.youtube.com/embed/5wLMX6qsl6o",

image:"/images/videos/thumbnails/009-bersihkan-maf.webp",

featured:true,

status:"published",

publishedAt:"2026-07-20",
},

];

export const videos = sortByPublishedDate(videoData);