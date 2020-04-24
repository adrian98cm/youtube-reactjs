import React, { useState } from 'react';
import classes from './App.module.css';
import SearchComponent from '../components/SearchComponent/SearchComponent';
import ResultsComponent from '../components/ResultsComponent/ResultsComponent';
import WatchComponent from '../components/WatchComponent/WatchComponent';
import axios from 'axios';


function App() {

  const [searchResults, setSearchResults] = useState(undefined);
  const [selectedMode, setSelectedMode] = useState(undefined);
  const [relatedVideos, setRelatedVideos] = useState(undefined);

  const youtubeKey = "AIzaSyDButXXf-iXzdBZmBYWcpALaVBQfC6mtc0";
  const youtubeURL = "https://www.googleapis.com/youtube/v3/";

  const searchHandler = (inputId) => {
    axios.get(`${youtubeURL}search?key=${youtubeKey}&q=${document.getElementById(inputId).value}&part=snippet&type=video&maxResults=20`).then(response => {
      setSearchResults(response.data.items);
    })
  };

  const selectVideoHandler = (videoId) => {
    axios.get(`${youtubeURL}videos?key=${youtubeKey}&id=${videoId}&part=player&maxResults=1`).then(response => {
      setSelectedMode(response.data.items[0].player.embedHtml);
    })
    
    axios.get(`${youtubeURL}search?key=${youtubeKey}&relatedToVideoId=${videoId}&part=snippet&maxResults=20&type=video`).then(response => {
      setRelatedVideos(response.data.items);
    })
  }

  const goBackHandler = () => {
    setSelectedMode(undefined);
  }

  const watchingMode = (
    <div className={classes.App}>
      <WatchComponent player={selectedMode} goBack={goBackHandler}/>
      <ResultsComponent results={relatedVideos} selectVideo={selectVideoHandler}/>
    </div>
  );

  const searchingMode = (
    <div className={classes.App}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"></img>
      <SearchComponent search={searchHandler}/>
      <ResultsComponent results={searchResults} selectVideo={selectVideoHandler}/>
    </div>
  );

  return (
    selectedMode ? watchingMode : searchingMode
    );

}

export default App;
