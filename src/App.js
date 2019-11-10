import React from 'react';
import './App.css';
import GalaxyBook from './components/GalaxyBook';
import NavBar from './components/NavBar';
import GalleryPage from './components/GalleryPage';
import NotePage from './components/NotePage';
import AlbumPage from './components/AlbumPage';

// React router dependencies
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={GalaxyBook}></Route>
          <Route exact path="/showGallery" component={GalleryPage} />
          <Route path="/showGallery/:searchTermKey" component={AlbumPage} />
          <Route path="/createNote" component={NotePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
