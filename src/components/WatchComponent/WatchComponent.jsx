import React from 'react';
import classes from './WatchComponent.module.css';

const watchComponent = (props) => {
    let result = null;

    if(props.player){
        result = (
            <div className={classes.WatchComponent}>
                <img className={classes.GoBack} 
                src="https://i.ibb.co/TgB7TCL/arrowmodified.png"  //Imagen creada por mí ;)
                alt="arrowmodified" 
                border="0"
                onClick={() => props.goBack()}
                />
                <div dangerouslySetInnerHTML={ {__html:  props.player ? props.player : ""}}/>
            </div>
        );
    }

    return result;
};

export default watchComponent;