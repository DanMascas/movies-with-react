/**
 * Created by dell on 6/1/17.
 */
import React, {Component} from 'react';
import FilmeFilter from './FilmeFilter';
export default class FilmeList extends Component {
    render() {
        const {data, filter, favourites, addFavourite}=this.props;
        return(
            <FilmeFilter
                data={data}
                filter={filter}
                favourites={favourites}
                addFavourite={addFavourite}
            />
        );
    }
}
