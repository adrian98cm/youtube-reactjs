import React from 'react';
import classes from './SearchComponent.module.css';

const searchComponent = (props) => {
    return (
        <div className= {classes.SearchComponent}>
            <input className={classes.SearchInput} id="SearchInput" type="text" />
            <div className={classes.SearchButton}
                onClick={() => props.search("SearchInput")}>
                Buscar
            </div>
        </div>
    );
}

export default searchComponent;