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
        img:andes,
        time:'05/2023',
        boton:'Ver',
        tec: ['html','css']
    },
    {
        id:'tres-dimensiones',
        title:'Tres Dimensiones',
        description:'Ecommerce para ventas de productos impresos en 3D e insumos para impresoras',
        img:tresdimensiones,
        boton:'Ver'

    },
    {
        id:'portfolio',
        title: 'Portfolio Web Developer v2',
        description:'Aca vas a poder encontrar el codigo de mi anterior portafolio creado con React, TailwindCSS y Framer Motion',
        img:'bg-portafolio',
        img:portafolio,
        time:'18/01/2022',
        link:'https://github.com/IvoGarraza/Personal-Portfolio---Full-Stack-Web-Developer',
        boton:'Ver'

    },
    {
        id:'gea',
        title:'GEA',
        description:'Website for a company of geotecnichal studies',
        img:gea,
        /* avatar:foto, */
        time:'20/11/2022',
        path:'/gea-web',
        boton:'Ver'
    },
    {
        id:'ducky',
        title:'Web Scrapping con Python',
        description: 'Proyecto de Web Scraping con Python para recopilar potenciales clientes',
        img:rubberducky,
        /* avatar:foto, */
        time:'17/07/2022',
        path:'/rubber-ducky-with-arduino',
        boton: 'Ver mas'
        
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
        boton:'Link del Repositorio'

    },
    {
        id:'countries',
        title:'Countries Page',
        type:'FullStack Project',
        description: 'Sitio web con todos los paises y descripciones de los mismos, realizado en el bootcamp de desarrollador web. En este proyecto se contruyo una API REST con node.js, para luego ser consumida y construir el frontend con React.js',
        path:'/countries-page',
        img:countries,
        boton:'Link del repositorio'
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