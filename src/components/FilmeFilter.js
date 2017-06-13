/**
 * Created by dell on 6/2/17.
 */
import React, {Component} from 'react';
import Name from './Name';
export default class FilmeFilter extends Component {
    cautareFilme(data, filter, favourites, addFavourite){
        const input = filter.toLowerCase();
        const names = data.filter((film, i) => {
            return (
                //filmele care sunt deja selectate
                favourites.indexOf(film.id) === -1
                &&
                //filmele care au ramas neselectate
                (!film.name.toLowerCase().indexOf(input)
                    || !film.an.toLowerCase().indexOf(input)
                    || !film.gen.toLowerCase().indexOf(input)
                )
            )
                ;
        }).map((film, i) => {
            return (
                <Name
                    id={film.id}
                    key={i}
                    info={film}
                    handleFavourite={(id) => addFavourite(id)}
                />
            );
        });
        return names;
    }
    render() {
        const {data, filter, favourites, addFavourite}=this.props;
        return (
            <ul>
                {this.cautareFilme(data, filter, favourites, addFavourite)}
            </ul>
        )
    }
}
