import React, { Component } from 'react';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import Education from './components/education'
import Experience from './components/experience'
import Leadership from './components/leadership'
import Skills from './components/skills'
import Project from './components/project'
import Honors from './components/honor'
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Introduction></Introduction>
            <Education></Education>
            <Experience></Experience>
            <Leadership></Leadership>
            <Skills></Skills>
            <Project></Project>
            <Honors></Honors>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
