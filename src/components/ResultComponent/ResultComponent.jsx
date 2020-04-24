import React from 'react';
import classes from './ResultComponent.module.css';

const resultComponent = (props) => {
    return (

        <div className={classes.ResultComponent} onClick={() => props.selectVideo(props.id)}>
            <img className={classes.ResultImage} src={props.image} alt={props.title} />
            <div className={classes.ResultInfo}>
                <div className={classes.ResultTitle}>
                    {props.title}
                </div>
                <div className={classes.ResultDescription}>
                    {props.description}
                </div>
            </div>
        </div>
    );
}
export default resultComponent;