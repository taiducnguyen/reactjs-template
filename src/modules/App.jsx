import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/** Import Modules here */
import HeaderViewContainer from '../components/header/Header';
import HomeViewContainer from './home/HomeViewContainer';
import AboutView from './about/AboutView';
import PostPageViewContainer from './postPage/PostPageViewContainer';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <HeaderViewContainer />
          <Navigation />
          <main className='main-content'>
            <Switch>
              <Route exact path="/" component={HomeViewContainer} />
              <Route exact path="/about" component={AboutView} />
              <Route exact path="/postpage" component={PostPageViewContainer} />
            </Switch>
          </main>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

