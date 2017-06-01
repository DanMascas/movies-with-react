/**
 * Created by dell on 6/1/17.
 */
/* ##### Un film ##### */
import React, {Component} from 'react';
export default class Name extends Component {
    render() {
        const {id, info, handleFavourite}=this.props;
        return (
            <div className={info.name + ' favorit'} onClick={() => handleFavourite(id)}>
                <ul>
                    <li><img src={info.sursa} alt={info.name}/></li>
                    <li><strong>{info.name}</strong></li>
                    <li><b>An:</b> {info.an}</li>
                    <li><b>Gen:</b> {info.gen}</li>
                </ul>
            </div>
        )
    }
}