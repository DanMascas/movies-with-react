import React, {Component} from 'react';
/* ##### Un film ##### */
const Name = ({
    id,
    info,
    handleFavourite,
}) => (
    <div className={info.name + ' favorit'} onClick={() => handleFavourite(id)}>
        <ul>
            <li><img src={info.sursa} alt={info.name}/></li>
            <li><strong>{info.name}</strong></li>
            <li><b>An:</b> {info.an}</li>
            <li><b>Gen:</b> {info.gen}</li>
        </ul>
    </div>
);

/* ##### Lista selectata ##### */
const ShorList = ({
    favourites,
    data,
    deleteFavourite
}) => {
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
                    hasFavourites ? 'Lista ta de filme' : 'Click pe un film pentru al adauga in lista ta de filme'
                }
            </h4>
            <ul>
                {favList}
            </ul>
            {
                hasFavourites && <hr/>
            }
        </div>
    );
};
/* ##### Lista filme ##### */

const FilmeList = ({
    data,
    filter,
    favourites,
    addFavourite
}) => {
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
    return (
        <ul>
            {names}
        </ul>
    )
};
/* ##### Bara de cautare ##### */
class Search extends Component {
    render() {
        const {filterVal, filterUpdate}=this.props
        return (
            <form>
                <input
                    type="text"
                    ref="filterInput"
                    placeholder="Cauta film"
                    value={filterVal}
                    onChange={() => {
                        filterUpdate(this.refs.filterInput.value)
                    }}
                />
            </form>
        )
    }
}

/* ##### Componenta principala ##### */

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            favourites: []
        }
    }
    filterUpdate(value) {
        this.setState({
            filterText: value
        });
    }
    addFavourite(id) {
        const newSet = this.state.favourites.concat([id]);
        this.setState({
            favourites: newSet
        });
    }
    deleteFavourite(id) {
        const {favourites}=this.state;
        const newList = [
            ...favourites.slice(0, id),
            ...favourites.slice(id + 1)
        ];
        this.setState({
            favourites: newList
        })
    }

    render() {
        const hasSearch = this.state.filterText.length > 0;
        return (
            <div>
                <header>
                    <Search
                        filterVal={this.state.filterText}
                        filterUpdate={this.filterUpdate.bind(this)}
                    />
                </header>
                <main>
                    <ShorList
                        data={this.props.data}
                        favourites={this.state.favourites}
                        deleteFavourite={this.deleteFavourite.bind(this)}
                    />
                    <FilmeList
                        data={this.props.data}
                        filter={this.state.filterText}
                        favourites={this.state.favourites}
                        addFavourite={this.addFavourite.bind(this)}
                    />
                    {
                        hasSearch &&
                        <button
                            onClick={this.filterUpdate.bind(this, '')}>Sterge cautare
                        </button>
                    }
                </main>

            </div>
        );
    }
}

export default App;
