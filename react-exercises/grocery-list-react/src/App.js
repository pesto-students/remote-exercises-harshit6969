import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [],
      groceryToAdd: ''
    }
    this.addGrocery = this.addGrocery.bind(this);
  }
  addGrocery(e) {
    e.preventDefault();
    let groceries = this.state.groceries;
    let index = groceries.findIndex(grocery => grocery.name == this.state.groceryToAdd);
    if (index != -1) {
      groceries[index].quantity += 1;
    } else {
      groceries.push({ name: this.state.groceryToAdd, quantity: 1, isClicked: false });
    }
    this.setState({ groceries: groceries, groceryToAdd: "" });
    return false;
  }

  render() {
    return (<>
      <form onSubmit={this.addGrocery}>
        <input type="text" value={this.state.groceryToAdd} onChange={(e) => this.setState({ groceryToAdd: e.target.value })} required />
        <button type="submit">Add item</button>
        <button type="button" onClick={() => this.setState({ groceries: [] })}>Remove all</button>
      </form>
      {this.state.groceries.length > 0 ?
        <table>
          <caption>Groceries</caption>
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.groceries.map((grocery, index) => <tr style={{ color: grocery.isClicked ? "red" : "black" }}>
              <td>{index + 1}</td>
              <td onClick={() => {
                let groceries = this.state.groceries;
                groceries[index].isClicked = !groceries[index].isClicked;
                this.setState({ groceries: groceries });
              }}>{grocery.name}</td>
              <td>{grocery.quantity}</td>
              <td><button onClick={() => {
                let groceries = this.state.groceries;
                groceries[index].quantity += 1;
                this.setState({ groceries: groceries });
              }}>Add</button></td>
            </tr>)}
          </tbody>
        </table>
        : "No groceries found"}
    </>);
  }
}

export default App;
