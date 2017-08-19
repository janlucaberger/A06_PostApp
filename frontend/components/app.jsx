import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import PostApp from './post_app';

const App = ({store}) => {
  return(
    <Provider store={store} >
      <HashRouter>
        <PostApp />
      </HashRouter>
    </Provider>
  )
}



export default App;
