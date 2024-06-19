import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7,
     thumbnailShoe1, thumbnailShoe2, thumbnailShoe3, neca_esporte, Unimed_litoralsul } from "../assets/images";

export const navLinks = [
    { href: "http://localhost:5173/#home", label: "Home" },
    { 
        href: "#", 
        label: "Campeonatos",
        subLinks: [
            { href: "http://localhost:5173/#campeonatos", label: "Campeonatos Em Andamento" },
            { href: "#", label: "Campeonatos Finalizados" },
            { href: "https://docs.google.com/document/d/1NMkbIosEy2_PvUZT41fafTgEOtKZJSEo_ZME2rXt4Uc/edit?usp=sharing", label: "Tabela de Jogos", external: true},
            { href: "#", label: "Regulamentos" }
        ]
    },
    {
        href:"#",
        label:"Equipes",
        subLinks: [
            { href: "/equipes", label: "Equipes" },
            { href: "#", label: "Ranking" },
        ]
    },
    { href: "http://localhost:5173/#news", label: "Notícias" },
    { href: "http://localhost:5173/#fotos", label: "Fotos" },
    { href: "https://dashboard.zsulesportes.com/atletas_lp", label: "Atletas", external: true },
];




export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '20+', label: 'Campeonatos' },
    { value: '1.000+', label: 'Jogos' },
    { value: '10.000+', label: 'Atletas' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: neca_esporte,
        label: "Neca Esporte",
        subtext: "A Loja de Esportes Mais Completa da Cidade!",
        link: "https://www.instagram.com/necaesporte/"
    },
    {
        imgURL: Unimed_litoralsul,
        label: "Unimed - Litoral Sul/RS",
        subtext: "Aqui tem Gente. Aqui tem Vida. Aqui tem Unimed.",
        link: "https://www.instagram.com/unimedlitoralsul.rs/"
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Entre em Contato",
        links: [
            { name: "zsul@zsul.com", link: "mailto:zsul@zsul.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];