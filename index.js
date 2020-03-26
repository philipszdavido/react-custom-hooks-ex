import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home';

import MouseAction from "./hooks/mouse-action"
import UseIdb from "./hooks/use-idb"
import UseClippy from "./hooks/use-clippy"
import UseDocumentTitle from "./hooks/document-title"
import UseLocalStorage from "./hooks/localstorage"
import UseNetworkStatus from "./hooks/network-status"
import UseOnlineStatus from "./hooks/online-status"
import UseScriptHook from "./hooks/script-hook"
import UseSpeechSynthesis from "./hooks/speech-synthesis"
import UseSpeechRecognition from "./hooks/speech-recog"

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/mouse-action" component={MouseAction} />
        <Route exact path="/use-idb" component={UseIdb} />
        <Route exact path="/use-clippy" component={UseClippy} />
        <Route exact path="/use-document-title" component={UseDocumentTitle} />
        <Route exact path="/use-localstorage" component={UseLocalStorage} />
        <Route exact path="/use-networkstatus" component={UseNetworkStatus} />
        <Route exact path="/use-onlinestatus" component={UseOnlineStatus} />
        <Route exact path="/use-scripthook" component={UseScriptHook} />
        <Route exact path="/use-speechsynthesis" component={UseSpeechSynthesis} />
        <Route exact path="/use-speechrecognition" component={UseSpeechRecognition} />
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
