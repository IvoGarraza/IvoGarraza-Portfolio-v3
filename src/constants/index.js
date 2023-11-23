import pokemon from '../assets/cardsImages/pokemon.jpg'
import hoobank from '../assets/cardsImages/hoobank.png'
import pianobar from '../assets/covers/pianobar.jpg'
import portafolio from '../assets/cardsImages/portafolio2.png'
import gea from '../assets/cardsImages/gea.png'
import rubberducky from '../assets/cardsImages/web-scraping.png'
import countries from '../assets/cardsImages/countries.jpg'
import andes from '../assets/cardsImages/andesdean.jpg'
import tresdimensiones from '../assets/cardsImages/tresdimensiones.png'
import { logos2 } from '../assets/logos/index'

export const projects = [
    {
        id:'andes-dean',
        title:'AndesDean Engineering Studio',
        description:'Sitio Web para el estudio de ingenieria civil Andes Dean',
        descripcionLarga:'Este sitio web realizado para el estudio de ingenieria civil AndesDean, este proyecto empezo en una etapa inicial realizado en Google Sites, despues de ser revisado y aprovado por el dueño, se inicio la "migracion" a un desarrollo de web completo con React y algunos framework de stilos como TailwindCSS y para las animaciones Framer-Motion',
        img:andes,
        time:'05/2023',
        boton:'Ver',
        tec: ['html','css'],
        link:'https://andesdean.onrender.com',
        repositorio:'https://github.com/IvoGarraza/AndesDean-WebSite'
    },
    {
        id:'tres-dimensiones',
        title:'Tres Dimensiones',
        description:'Ecommerce para ventas de productos impresos en 3D e insumos para impresoras',
        descripcionLarga:'Sitio web de ventas de productos para insumos y productos para impresoras 3D',
        img:tresdimensiones,
        boton:'Ver',
        link:'',
        repositorio:'https://github.com/IvoGarraza/Tres-Dimensiones-v2.0'

    },
    {
        id:'tres-dimensiones-API',
        title:'API Tres Dimensiones',
        description:'API para el ecommerce Tres Dimensiones',
        img:tresdimensiones,
        boton:'Ver',
        repositorio:'https://github.com/IvoGarraza/TresDimensiones-Strapi-Render'
    },
    {
        id:'camuzzi',
        title:'Sistemas de registro incidentes para Camuzzi',
        description:'Sistemas de registro de incidentes laborales para la empresa de gas natural de Camuzzi. Este sistemas se realizo con el equipo de Ubicuo, integrando la plataforma ya existente con su base de datos y diseñando un sistema exclusivos',
        img:'',
        boton:'Ver'
    },
    {
        id:'portfolio',
        title: 'Portfolio Web Developer v2',
        description:'Aca vas a poder encontrar el codigo de mi anterior portafolio creado con React, TailwindCSS y Framer Motion',
        img:'bg-portafolio',
        img:portafolio,
        time:'18/01/2022',
        repositorio:'https://github.com/IvoGarraza/Personal-Portfolio---Full-Stack-Web-Developer',
        boton:'Ver',
        link:'https://calm-kangaroo-be7b3c.netlify.app/'

    },
    {
        id:'gea',
        title:'GEA',
        description:'Website for a company of geotecnichal studies',
        img:gea,
        /* avatar:foto, */
        time:'20/11/2022',
        path:'/gea-web',
        repositorio:'https://github.com/IvoGarraza/gea-web',
        link:'https://mellifluous-meringue-160b7a.netlify.app/',
        boton:'Ver'
    },
    {
        id:'web-scraping',
        title:'Web Scrapping con Python',
        description: 'Proyecto de Web Scraping con Python para recopilar potenciales clientes',
        img:rubberducky,
        /* avatar:foto, */
        time:'17/07/2022',
        path:'/rubber-ducky-with-arduino',
        boton: 'Ver mas',
                
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
        description:'Sitio Web simulando ser la página de un banco. Programada con React.js y usando TailwindCSS, un framework para estilos de CSS',
        img:hoobank,
        /* avatar:foto, */
        time:'20/12/2022',
        path:'/bank',
        link:'https://extraordinary-mochi-3eb5fd.netlify.app/',
        repositorio:'',
        boton:'Ver'
    },
    {
        id:'pokemon',
        title:'Pokemon Page',
        type:'FullStack Project',
        description:'A popular project site whit a all pokemons exist for now, this projects was realice in a bootcamp of web developer. In this project made a API REST & Front',
        img:pokemon,
        /* avatar:foto, */
        time:'18/01/2023',
        link:'https://github.com/IvoGarraza/Pokemon_Page_IndividualProyect',
        repositorio:'https://github.com/IvoGarraza/Pokemon_Page_IndividualProyect',
        boton:'Link del Repositorio'

    },
    {
        id:'countries',
        title:'Countries Page',
        type:'FullStack Project',
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