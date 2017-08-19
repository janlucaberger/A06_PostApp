import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import App from './components/app'
// import * as A from "./actions/post_actions"
document.addEventListener("DOMContentLoaded", () => {

  const store = configureStore()
  // window.store = store
  // window.dispatch = store.dispatch
  // window.fetchPost = A.fetchPost
  const root = document.getElementById("root")
  ReactDOM.render(<App store={store} />, root)
})
