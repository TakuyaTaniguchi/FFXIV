import React from 'react'

export default class App extends React.Component {
  render() {
    return <div>
        <span>{this.props.fuga}</span>
      <button onClick={ () => this.props.handleClick() }>増加</button>
    </div>
  }
}
// export default class App extends React.Component {
//     render() {
//         <p>render</p>
//       // <Provider store={store}>
//       //   <div>
//       //     {/* キャラクター検索 */}
//       //     <form onSubmit={this.handlesubmit}>
//       //       <input onChange={this.hadleChange} />
//       //       <select onChange={this.selectChange}>
//       //         <option>Adamantoise</option>
//       //         <option>Aegis</option>
//       //         <option>Alexander</option>
//       //         <option>Anima</option>
//       //         <option>Asura</option>
//       //         <option>Atomos</option>
//       //         <option>Bahamut</option>
//       //         <option>Balmung</option>
//       //         <option>Behemoth</option>
//       //         <option>Belias</option>
//       //         <option>Brynhildr</option>
//       //         <option>Cactuar</option>
//       //         <option>Carbuncle</option>
//       //         <option>Cerberus</option>
//       //         <option>Chocobo</option>
//       //         <option>Coeurl</option>
//       //         <option>Diabolos</option>
//       //         <option>Durandal</option>
//       //         <option>Excalibur</option>
//       //         <option>Exodus</option>
//       //         <option>Faerie</option>
//       //         <option>Famfrit</option>
//       //         <option>Fenrir</option>
//       //         <option>Garuda</option>
//       //         <option>Gilgamesh</option>
//       //         <option>Goblin</option>
//       //         <option>Gungnir</option>
//       //         <option>Hades</option>
//       //         <option>Hyperion</option>
//       //         <option>Ifrit</option>
//       //         <option>Ixion</option>
//       //         <option>Jenova</option>
//       //         <option>Kujata</option>
//       //         <option>Lamia</option>
//       //         <option>Leviathan</option>
//       //         <option>Lich</option>
//       //         <option>Louisoix</option>
//       //         <option>Malboro</option>
//       //         <option>Mandragora</option>
//       //         <option>Masamune</option>
//       //         <option>Mateus</option>
//       //         <option>Midgardsormr</option>
//       //         <option>Moogle</option>
//       //         <option>Odin</option>
//       //         <option>Omega</option>
//       //         <option>Pandaemonium</option>
//       //         <option>Phoenix</option>
//       //         <option>Ragnarok</option>
//       //         <option>Ramuh</option>
//       //         <option>Ridill</option>
//       //         <option>Sargatanas</option>
//       //         <option>Shinryu</option>
//       //         <option>Shiva</option>
//       //         <option>Siren</option>
//       //         <option>Tiamat</option>
//       //         <option>Titan</option>
//       //         <option>Tonberry</option>
//       //         <option>Typhon</option>
//       //         <option>Ultima</option>
//       //         <option>Ultros</option>
//       //         <option>Unicorn</option>
//       //         <option>Valefor</option>
//       //         <option>Yojimbo</option>
//       //         <option>Zalera</option>
//       //         <option>Zeromus</option>
//       //         <option>Zodiark</option>
//       //         <option>Spriggan</option>
//       //         <option>Twintania</option>
//       //       </select>
//       //       <input type="submit" value="キャラクター検索" />
//       //     </form>
//       //     <p>{this.state.name}</p>
//       //     <img src={this.state.avatar} alt="アバター" />
//       //     {/* アイテム検索 */}
//       //     <div>
//       //       <h3>アイテム名検索</h3>
//       //       <form onSubmit={this.handleItemsubmit}>
//       //         <input type="submit" value="アイテム検索" />
//       //         <input onChange={this.selectChangeItem} />
//       //         <p>ID:{this.state.itemId}</p>
//       //         <p>itemName:{this.state.itemName}</p>
//       //         <img
//       //           src={`https://xivapi.com/${this.state.itemIcon}`}
//       //           alt="アイテムアイコン"
//       //         />
//       //       </form>
//       //     </div>
//       //   </div>
//       // </Provider>
//     }
//   }