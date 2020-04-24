import React from 'react';
import classes from './ResultsComponent.module.css';
import ResultComponent from '../ResultComponent/ResultComponent';

const resultsComponent = (props) => {
    let result = null;

    if(props.results) {
        result = (
            <div className={classes.ResultsComponent}>
                {props.results.map((result, index) => {
                    return <ResultComponent 
                    key={result.id.videoId} 
                    id={result.id.videoId} 
                    title={result.snippet.title} 
                    description={result.snippet.description} 
                    image={result.snippet.thumbnails.default.url} 
                    selectVideo={props.selectVideo}
                    />;
                })}
            </div> 
         );
    }

    return result;
}

export default resultsComponent;