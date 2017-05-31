import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
const FILME = [
    {
        id: 0,
        name: 'Snatch',
        an: '2001',
        gen: 'Comedy,Crime',
        sursa: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Snatch_ver4.jpg',
    }, {
        id: 1,
        name: 'The Usual Suspects',
        an: '1995',
        gen: 'Crime,Drama,Mystery',
        sursa: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg',
    }, {
        id: 2,
        name: 'Casino',
        an: '1995',
        gen: 'Crime,Drama',
        sursa: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxOWYzNDYtYmM4YS00N2NkLTk0NTAtNjg1ODgwZjAxYzI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },{
        id: 3,
        name: 'Bronson',
        an: '2009',
        gen: 'Action,Biography',
        sursa: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTA2MjA3OV5BMl5BanBnXkFtZTcwODM4Nzc4Mg@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },{
        id: 4,
        name: 'Mad Max: Fury Road',
        an: '2015',
        gen: 'Action,Aventure',
        sursa: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyMTE0ODcxNF5BMl5BanBnXkFtZTgwODE4NDQzNTE@._V1_UY268_CR1,0,182,268_AL_.jpg',
    },{
        id: 5,
        name: 'The Lord of the Rings',
        an: '2001',
        gen: 'Fantasy',
        sursa: 'https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },{
        id: 6,
        name: 'Anchorman',
        an: '2004',
        gen: 'Comendy',
        sursa: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2MzYwMzk5Ml5BMl5BanBnXkFtZTcwOTI4NzUyMw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },{
        id: 7,
        name: 'Zoolander',
        an: '2015',
        gen: 'Comendy',
        sursa: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODI4NDY2NDM5M15BMl5BanBnXkFtZTgwNzEwOTMxMDE@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },{
        id: 8,
        name: 'Zoolander2',
        an: '2001',
        gen: 'Comendy',
        sursa: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjI2MjQxNTQzOV5BMl5BanBnXkFtZTgwMDE2MTY2NzE@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },{
        id: 9,
        name: '2001: A Space Odyssey',
        an: '1968',
        gen: 'Sci-fi',
        sursa: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTZkZTBhYmUtMTIzNy00YTViLTg1OWItNGUwMmVlN2FjZTVkXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },
];
ReactDOM.render(<App data={FILME}/>, document.getElementById('root'));
