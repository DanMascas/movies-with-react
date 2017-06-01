/**
 * Created by dell on 6/1/17.
 */
/* ##### Bara de cautare ##### */
import React, {Component} from 'react';
export default class Search extends Component {
    render() {
        const {filterVal, filterUpdate}=this.props;
        return (
            <div>
                <div>
                    <p>Movies with React</p>
                    <br/>
                    <p>List of movies</p>
                </div>
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
            </div>
        )
    }
}