import React from "react";
import ReactDOM from "react-dom";
import { render } from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import rootreducer from "./reducers/index.js";
// import "./styles.css";


import App from './container/app.js';


const store = createStore(rootreducer);

render(
  <Provider store={store}>
   <App />
  </Provider>,
  document.getElementById('root')
);


// class App extends React.Component {
//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     name: "",
//   //     avatar:
//   //       "https://img2.finalfantasyxiv.com/f/5c7b7befe505df29a820e5980d0948dd_72c48f093f2278ac3243962d3eb6a8d7fc0_96x96.jpg",
//   //     server: "",
//   //     itemName: "",
//   //     itemIcon: "",
//   //     itemId: ""
//   //   };
//   // }
//   // actionClick = event =>{
//   //     console.log('clikc');
//   //     dispatch(plus(num));
//   // }
//   // hadleChange = event => {
//   //   const name = event.target.value;
//   //   this.setState({ name: name });
//   // };
//   // selectChange = event => {
//   //   const server = event.target.value;
//   //   this.setState({ server: server });
//   // };
//   // selectChangeItem = event => {
//   //   const itemName = event.target.value;
//   //   this.setState({ itemName: itemName });
//   // };
//   // handlesubmit = event => {
//   //   event.preventDefault();
//   //   this.getApi(this.state.name, this.state.server);
//   // };
//   // handleItemsubmit = event => {
//   //   event.preventDefault();
//   //   this.getApiItem(this.state.itemName);
//   // };
//   // getApiItem = itemName => {
//   //   fetch(`https://xivapi.com/search?string=${itemName}&language=ja`, {
//   //     mode: "cors"
//   //   })
//   //     .then(response => response.json())
//   //     .then(data => {
//   //       this.setState({ itemId: data.Results[0].ID });
//   //       this.setState({ itemIcon: data.Results[0].Icon });
//   //       this.setState({ itemName: data.Results[0].Name });
//   //     });
//   // };
//   // getApi = (name, server) => {
//   //   fetch(`https://xivapi.com/character/search?name=${name}&server=${server}`, {
//   //     mode: "cors"
//   //   })
//   //     .then(response => response.json())
//   //     .then(data => {
//   //       this.setState({ name: data.Results[0].Name });
//   //       this.setState({ avatar: data.Results[0].Avatar });
//   //     });
//   // };
// }

/**
 * icon ID https://xivapi.com/i/065000/065002.png
 */
