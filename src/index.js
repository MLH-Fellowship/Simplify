import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams
} from 'react-router-dom'
// import reportWebVitals from './reportWebVitals';


function BlogPost() {
  // We can call useParams() here to get the params,
  // or in any child element as well!
  let { slug } = useParams()
  console.log(slug);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Router>
    <div>
      <Switch>
        {/* No weird props here, just use
            regular `children` elements! */}
        <Route path="/:slug">
          <BlogPost />
        </Route>
      </Switch>
    </div>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
