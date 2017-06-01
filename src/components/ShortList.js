/**
 * Created by dell on 6/1/17.
 */
import React, {Component} from 'react';
import Name from './Name';
export default class ShortList extends Component {
    render() {
        const {favourites, data, deleteFavourite}=this.props;
        const hasFavourites = (favourites.length > 0);
        const favList = favourites.map((fav, i) => {
            return (
                <Name
                    id={i}
                    key={i}
                    info={data[fav]}
                    handleFavourite={(id) => deleteFavourite(id)}
                />
            );
        });
        return (
            <div className="favourites">
                <h4>
                    {
                        hasFavourites ? 'Lista ta de filme ' : 'Click pe un film pentru al adauga in lista ta de filme'
                    }
                </h4>
                <ul>
                    {favList}
                </ul>
                {
                    hasFavourites && <hr/>
                }
            </div>
        )
    }
}
