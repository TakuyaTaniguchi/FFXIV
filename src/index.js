import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      avatar:
        "https://img2.finalfantasyxiv.com/f/5c7b7befe505df29a820e5980d0948dd_72c48f093f2278ac3243962d3eb6a8d7fc0_96x96.jpg",
      server: "",
      itemName: "",
      itemIcon: "",
      itemId: ""
    };
  }
  render() {
    return (
      <div>
        {/* キャラクター検索 */}
        <form onSubmit={this.handlesubmit}>
          <input onChange={this.hadleChange} />
          <select onChange={this.selectChange}>
            <option>Adamantoise</option>
            <option>Aegis</option>
            <option>Alexander</option>
            <option>Anima</option>
            <option>Asura</option>
            <option>Atomos</option>
            <option>Bahamut</option>
            <option>Balmung</option>
            <option>Behemoth</option>
            <option>Belias</option>
            <option>Brynhildr</option>
            <option>Cactuar</option>
            <option>Carbuncle</option>
            <option>Cerberus</option>
            <option>Chocobo</option>
            <option>Coeurl</option>
            <option>Diabolos</option>
            <option>Durandal</option>
            <option>Excalibur</option>
            <option>Exodus</option>
            <option>Faerie</option>
            <option>Famfrit</option>
            <option>Fenrir</option>
            <option>Garuda</option>
            <option>Gilgamesh</option>
            <option>Goblin</option>
            <option>Gungnir</option>
            <option>Hades</option>
            <option>Hyperion</option>
            <option>Ifrit</option>
            <option>Ixion</option>
            <option>Jenova</option>
            <option>Kujata</option>
            <option>Lamia</option>
            <option>Leviathan</option>
            <option>Lich</option>
            <option>Louisoix</option>
            <option>Malboro</option>
            <option>Mandragora</option>
            <option>Masamune</option>
            <option>Mateus</option>
            <option>Midgardsormr</option>
            <option>Moogle</option>
            <option>Odin</option>
            <option>Omega</option>
            <option>Pandaemonium</option>
            <option>Phoenix</option>
            <option>Ragnarok</option>
            <option>Ramuh</option>
            <option>Ridill</option>
            <option>Sargatanas</option>
            <option>Shinryu</option>
            <option>Shiva</option>
            <option>Siren</option>
            <option>Tiamat</option>
            <option>Titan</option>
            <option>Tonberry</option>
            <option>Typhon</option>
            <option>Ultima</option>
            <option>Ultros</option>
            <option>Unicorn</option>
            <option>Valefor</option>
            <option>Yojimbo</option>
            <option>Zalera</option>
            <option>Zeromus</option>
            <option>Zodiark</option>
            <option>Spriggan</option>
            <option>Twintania</option>
          </select>
          <input type="submit" value="キャラクター検索" />
        </form>
        <p>{this.state.name}</p>
        <img src={this.state.avatar} alt="アバター" />
        {/* アイテム検索 */}
        <div>
          <h3>アイテム名検索</h3>
          <form onSubmit={this.handleItemsubmit}>
            <input type="submit" value="アイテム検索" />
            <input onChange={this.selectChangeItem} />
            <p>ID:{this.state.itemId}</p>
            <p>itemName:{this.state.itemName}</p>
            <img
              src={`https://xivapi.com/${this.state.itemIcon}`}
              alt="アイテムアイコン"
            />
          </form>
        </div>
      </div>
    );
  }
  hadleChange = event => {
    const name = event.target.value;
    this.setState({ name: name });
  };
  selectChange = event => {
    const server = event.target.value;
    this.setState({ server: server });
  };
  selectChangeItem = event => {
    const itemName = event.target.value;
    this.setState({ itemName: itemName });
  };
  handlesubmit = event => {
    event.preventDefault();
    this.getApi(this.state.name, this.state.server);
  };
  handleItemsubmit = event => {
    event.preventDefault();
    this.getApiItem(this.state.itemName);
  };
  getApiItem = itemName => {
    fetch(`https://xivapi.com/search?string=${itemName}&language=ja`, {
      mode: "cors"
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ itemId: data.Results[0].ID });
        this.setState({ itemIcon: data.Results[0].Icon });
        this.setState({ itemName: data.Results[0].Name });
      });
  };
  getApi = (name, server) => {
    fetch(`https://xivapi.com/character/search?name=${name}&server=${server}`, {
      mode: "cors"
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ name: data.Results[0].Name });
        this.setState({ avatar: data.Results[0].Avatar });
      });
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

/**
 * icon ID https://xivapi.com/i/065000/065002.png
 */
