import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className="main">
            <div className="section">
                <div className="section-head">
                  <Link to="/mouse-action">Mouse Action</Link>
                </div>
                <div className="section-body">
This library has React hooks for listening to mouse events and click events on an element or JSX element.
                </div>
            </div>
            <div className="section">
                <div className="section-head">
                  <Link to="/use-idb">Use Idb</Link>
                </div>
                <div className="section-body">
This hook uses the IndexedDB Storage area in our browser to store and retrieve data.
                </div>
            </div>
            <div className="section">
                <div className="section-head">
                  <Link to="/use-clippy">Use Clippy</Link>
                </div>
                <div className="section-body">
This hook provides us with functionality to copy our data to the clipboard and to retrieve it.                
                </div>
            </div>
            <div className="section">
                <div className="section-head">
                  <Link to="/use-document-title">Use Document Title</Link>
                </div>
                <div className="section-body">
Using the routing in React app doesn't update the title of the browser when a route is navigated to.
                </div>
            </div>
            <div className="section">
                <div className="section-head">
                  <Link to="/use-localstorage">Use Local Storage</Link>
                </div>
                <div className="section-body">
This hook simplifies the storage and retrieval of data from the localStorage.
                </div>
            </div>
            <div className="section">
                <div className="section-head">
                  <Link to="/use-networkstatus">Use Network Status</Link>
                </div>
                <div className="section-body">
This hook exposes the navigator.connection object properties to us. The navigator.connection contains properties that give us info about our network status.
                </div>
            </div>
            <div className="section">
                <div className="section-head">
                  <Link to="/use-onlinestatus">Use Online Status</Link>
                </div>
                <div className="section-body">
This hook tells us if we are online or offline. It checks for our network to determine if we are connected to the internet or not. It uses the navigator.onLine property to read the network status.
                </div>
            </div>
            <div className="section">
                <div className="section-head">
                  <Link to="/use-scripthook">Use Script Hook</Link>
                </div>
                <div className="section-body">
useScript is a hook that loads external script and tells us when it has loaded.
                </div>
            </div>
            <div className="section">
                <div className="section-head">
                  <Link to="/use-speechsynthesis">Use Speech Synthesis</Link>
                </div>
                <div className="section-body">
This hook uses the Web Speech API to make text-to-sound synthesis easy to use in our React app.
                </div>
            </div>
            <div className="section">
                <div className="section-head">
                  <Link to="/use-speechrecognition">Use Speech Recognition</Link>
                </div>
                <div className="section-body">
This is used for sound-to-text translation. This hook provides the functionality via the Web Speech API to convert sound to text in our React app.
                </div>
            </div>
          </div>
    );
  }
}

