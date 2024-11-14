import pokemon from '../assets/cardsImages/pokemon.jpg'
import hoobank from '../assets/cardsImages/hoobank.png'
import pianobar from '../assets/covers/pianobar.jpg'
import portafolio from '../assets/cardsImages/portafolio2.png'
import gea from '../assets/cardsImages/gea.png'
import rubberducky from '../assets/cardsImages/web-scraping.png'
import countries from '../assets/cardsImages/countries.jpg'
import andes from '../assets/cardsImages/andesdean.jpg'
import tresdimensiones from '../assets/cardsImages/tresdimensiones.png'
import camuzzi  from '../assets/cardsImages/camuzzi.jpg'
import broker from '../assets/cardsImages/broker.webp'
import rick from '../assets/cardsImages/rick&morty.jpg'
import webdev from '../assets/cardsImages/webdev.png'
import digitalmakers from '../assets/cardsImages/digitalmakers.png'
import {
    html,
    css,
    javascript,
    git,
    node,
    react,
    tailwind,
    framer,
    python,
    mysql,
    photoshop,
    bootstrap,
    angular
} from '../assets/logos/index'

export const projects = [
    {
        id:'digitalmakers',
        title:"Digital Makers",
        description:"Sitio web para empredimiento de desarrollos web",
        tipo:"Freelance",
        img:digitalmakers,
        technologies:[react,html,css,framer,tailwind],
        time:'08/2024',
        boton:"Ver",
        link:'https://digitalmakers.tech/',
        repositorio:'https://github.com/IvoGarraza/digital-makers'
    },
    {
        id:'webdev',
        title:"Webdev",
        description:"Sitio web para una marca de desarrollos web",
        tipo:"Freelance",
        img:webdev,
        technologies:[react,html,css,framer,tailwind],
        time:'02/2024',
        boton:"Ver",
        link:'https://webdevarg.onrender.com/',
        repositorio:'https://github.com/IvoGarraza/webdevarg'
    },
    {
        id:'andes-dean',
        title:'AndesDean Engineering Studio',
        description:'Sitio Web para el estudio de ingenieria civil Andes Dean',
        descripcionLarga:'Este sitio web realizado para el estudio de ingenieria civil AndesDean, este proyecto empezo en una etapa inicial realizado en Google Sites, despues de ser revisado y aprovado por el dueño, se inicio la "migracion" a un desarrollo de web completo con React y algunos framework de stilos como TailwindCSS y para las animaciones Framer-Motion',
        tipo:"AndesDean Engeneering Studio",
        img:andes,
        technologies:[react, html, css, tailwind, framer],
        time:'05/2023',
        boton:'Ver',
        
        link:'https://andesdean.onrender.com',
        repositorio:'https://github.com/IvoGarraza/AndesDean-WebSite'
    },
    {
        id:'tres-dimensiones',
        title:'Tres Dimensiones',
        description:'Ecommerce para ventas de productos impresos en 3D e insumos para impresoras',
        descripcionLarga:'Sitio web de ventas de productos para insumos y productos para impresoras 3D',
        technologies:[react, html, css, tailwind, framer, photoshop],
        tipo:"Freelance",
        img:tresdimensiones,
        boton:'Ver',
        link:'',
        repositorio:'https://github.com/IvoGarraza/Tres-Dimensiones-v2.0'

    },
    {
        id:'tres-dimensiones-API',
        title:'API Tres Dimensiones',
        description:'API REST realizada con el headless CMS Strapi para el ecommerce Tres Dimensiones',
        technologies:[javascript, node],
        tipo:"Freelance",
        img:tresdimensiones,
        boton:'Ver',
        repositorio:'https://github.com/IvoGarraza/TresDimensiones-Strapi-Render'
    },
    {
        id:'camuzzi',
        title:'Sistemas de registro incidentes para Camuzzi',
        tipo:"Ubicuo Technologies",
        technologies:[html, css, angular, bootstrap, javascript],
        description:'Sistemas de registro de incidentes laborales para la empresa de gas natural de Camuzzi. Este sistemas se realizo con el equipo de Ubicuo Technologies, integrando la plataforma ya existente con su base de datos y diseñando un sistema exclusivo',
        img:camuzzi,
        boton:'Ver',
        repositorio:'https://github.com/IvoGarraza/Formulario-Registro-de-Incidentes---Camuzzi'
    },
    {
        //cambiar imagen y datos
        id:'broker',
        title: 'ARGBroker',
        description:'Proyecto realizado en la capacitacion de desarrollo fullstack .NET donde realizamos un broker utilizando la api de Banco Supervielle Invertir Online',
        tipo:"Instituto Superior Politecnico Córdoba",
        technologies:[html, css, angular, bootstrap],
        img:'bg-portafolio',
        img:broker,
        time:'18/01/2022',
        repositorio:'https://github.com/Pil-Grupo-4/Frontend',
        boton:'Ver',
        /* link:'https://calm-kangaroo-be7b3c.netlify.app/' */
    },
    {
        id:'portfolio',
        title: 'Portfolio Web Developer v2',
        description:'Aca vas a poder encontrar el codigo de mi anterior portafolio creado con React, TailwindCSS y Framer Motion',
        tipo:"Personal",
        technologies:[react, html, css, tailwind, framer, photoshop],
        img:'bg-portafolio',
        img:portafolio,
        time:'18/01/2022',
        repositorio:'https://github.com/IvoGarraza/Personal-Portfolio---Full-Stack-Web-Developer',
        boton:'Ver',
        link:'https://calm-kangaroo-be7b3c.netlify.app/'

    },
    {
        id:'rickandmorty',
        title:'Rick & Morty App',
        description:'Proyecto Web Frontend de Rick & Morty donde consume una api publica y se puede consultar todos los personajes, ubicacion y capitulos de la serie de Adult Swim',
        link:'https://papaya-nougat-5315f0.netlify.app/',
        img:rick,
        boton:'ver',
        time:'18/01/2022',
        technologies:[react, tailwind, framer],
        repositorio:'https://github.com/IvoGarraza/Rick-and-Morty-Web'
    },
    {
        id:'gea',
        title:'GEA',
        description:'Website for a company of geotecnichal studies',
        img:gea,
        /* avatar:foto, */
        tipo:"Freelance",
        technologies:[react, html, css, tailwind],
        time:'20/11/2022',
        path:'/gea-web',
        repositorio:'https://github.com/IvoGarraza/gea-web',
        link:'https://mellifluous-meringue-160b7a.netlify.app/',
        boton:'Ver'
    },
    {
        id:'web-scraping',
        title:'Web Scrapping con Python',
        technologies:[python],
        tipo:"Ubicuo Technologies",
        description: 'Proyecto de Web Scraping con Python para recopilar potenciales clientes',
        img:rubberducky,
        /* avatar:foto, */
        time:'17/07/2022',
        path:'/rubber-ducky-with-arduino',
        repositorio:'https://github.com/IvoGarraza/web-scraping-with-python'
                
    },
/*     {
        id:'analisis',
        title:'Analisis de sistema - Torralba Refrigeracion S.R.L',
        description: 'Analisis de sistema realizado para la Torralba Refrigeracion, este documento fue confeccionado durante el periodo laboral en la empresa para poder describir las diferentes areas de la organizacion y como se relacionan sus partes y la informacion de las mismas',
        img:'bg-torralba',
        link:'https://docs.google.com/document/d/16qE0waJmuFylFn2RmMvKpvTzNVx0AUmQ-G9W_-G05Xg/edit?usp=sharing'
    }, */
    {
        id:'hoobank',
        title: 'Modern Website with TailwindCSS',
        type:'FrontEnd Project',
        technologies:[react, html, css, tailwind],
        tipo:"Personal",
        description:'Sitio Web simulando ser la página de un banco. Programada con React.js y usando TailwindCSS, un framework para estilos de CSS',
        img:hoobank,
        /* avatar:foto, */
        time:'20/12/2022',
        path:'/bank',
        link:'https://extraordinary-mochi-3eb5fd.netlify.app/',
        repositorio:'https://github.com/IvoGarraza/modern_website_with_tailwind',
        boton:'Ver'
    },
    {
        id:'pokemon',
        title:'Pokemon Page',
        type:'FullStack Project',
        technologies:[react, html, css, node],
        tipo:"SoyHenry",
        description:'A popular project site whit a all pokemons exist for now, this projects was realice in a bootcamp of web developer. In this project made a API REST & Front',
        img:pokemon,
        /* avatar:foto, */
        time:'18/01/2023',
        /* link:'https://github.com/IvoGarraza/Pokemon_Page_IndividualProyect', */
        repositorio:'https://github.com/IvoGarraza/Pokemon_Page_IndividualProyect',
        boton:'Link del Repositorio'

    },
    {
        id:'countries',
        title:'Countries Page',
        type:'FullStack Project',
        technologies:[react, html, css, node],
        tipo:"SoyHenry",
        description: 'Sitio web con todos los paises y descripciones de los mismos, realizado en el bootcamp de desarrollador web. En este proyecto se contruyo una API REST con node.js, para luego ser consumida y construir el frontend con React.js',
        path:'/countries-page',
        img:countries,
        boton:'Link del repositorio',
        link:'',
        repositorio:''
    },

]

export const music = [
    {
        img:pianobar,
        title:'Promesas sobre el bidet',
        artist:'Charly Garcia',
        album:'Piano Bar'
    },
    
]

export const certifications = [
    {
        title:'Desarrollador Web FullStack .NET',
        institucion:'Instituto Superior Politecnico de Córdoba',
        estado:'(Finalizado)'
    },
    {
        title:'Desarrollo Web FullStack',
        institucion:'SoyHenry',
        estado:'(Finalizado)'
    },
    {
        title:'Ing en Sistemas de Informacion',
        institucion:'Universidad Tecnologica Nacional',
        estado:'(En curso)'
    }
]