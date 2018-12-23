import React, { Component } from 'react';

import Header from './components/Header.js';
import SearchCmp from './components/SearchCmp.js';
import TableCmp from './components/TableCmp.js';

import './App.css';

class App extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state.records = [];
    this.state.totalCount = 0;
    this.setRecords = this.setRecords.bind(this);
  }

  setRecords(res) {
    this.setState(state => {
      state.totalCount = res.data.total_count
      state.records = res.data.items;
      return state;
    })
  }
  render() {
    return (
      <>

        <div className="container">

          <div className="row">
            <Header />
          </div>
          <div className="row">
            <SearchCmp setRecords={this.setRecords} />
          </div>
          <div className="row">

            <TableCmp records={this.state.records} totalCount={this.state.totalCount} />

          </div>

        </div>
      </>
    );
  }
}

export default App;
