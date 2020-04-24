import React from 'react';
import classes from './WatchComponent.module.css';

const watchComponent = (props) => {
    let result = null;

    if(props.player){
        result = (
            <div className={classes.WatchComponent}>
                <img className={classes.GoBack} 
                src="https://i7.pngguru.com/preview/573/389/121/organization-human-back-building-back.jpg" 
                alt="Go back" 
                onClick={() => props.goBack()}
                />
                <div dangerouslySetInnerHTML={ {__html:  props.player ? props.player : ""}}/>
            </div>
        );
    }

    return result;
};

export default watchComponent;