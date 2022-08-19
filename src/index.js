import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//!!!
//Using SVG as a component

// SVGs can be imported and used directly as a React component in your React code. The image is not loaded as a separate file, instead, it’s rendered along the HTML. A sample use-case would look like this:

// import React from 'react';
// import {ReactComponent as ReactLogo} from './logo.svg';

// const App = () => {
//   return (
//     <div className="App">
//       <ReactLogo />
//     </div>
//   );
// }
// export default App;
// Note this approach only works with create-react-app, If you are not using create-react-app, I would recommend using other approaches. Create-react-app uses SVGR under the hood to make it possible to transform and import SVG as a React component.