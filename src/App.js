import React, { Component } from 'react';

import Header from './components/Header.js';
import SearchCmp from './components/SearchCmp.js';
import TableCmp from './components/TableCmp.js';
import PaginationCmp from './components/PaginationCmp';
import Alert from './components/AlertCmp';

import './App.css';

class App extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state.records = [];
    this.state.totalCount = 0;
    this.state.page = 1
    this.state.per_page = 5;
    this.state.popupcontent = '';
    this.setRecords = this.setRecords.bind(this);
    this.setPage = this.setPage.bind(this);
    this.setPopup = this.setPopup.bind(this);
    
  }
  setPopup(content){
    let tmpContent = content || '';
    console.log(tmpContent);
    this.setState({popupcontent:tmpContent});
  }
  setRecords(res) {
    this.setState(state => {
      state.totalCount = res.data.total_count;
      state.records = res.data.items;
      return state;
    });
  }
  setPage(pageNo) {
    this.setState(state => {
      state.page = pageNo;

      return state;
    });
  }
  render() {
    return (
      <>
        <div className="container">
          <Header />

          <SearchCmp setRecords={this.setRecords} pageConf={{ page: this.state.page, per_page: this.state.per_page }} setPage={this.setPage}  setPopup={this.setPopup} />

          <PaginationCmp totalCount={this.state.totalCount} setPage={this.setPage} pageConf={{ page: this.state.page, per_page: this.state.per_page }} setPopup={this.setPopup} />
          <br />

          <TableCmp records={this.state.records} totalCount={this.state.totalCount} setPopup={this.setPopup} />

          <PaginationCmp totalCount={this.state.totalCount} setPage={this.setPage} pageConf={{ page: this.state.page, per_page: this.state.per_page }} setPopup={this.setPopup} />

          <Alert content={this.state.popupcontent} setPopup={this.setPopup} />
          
        </div>

      </>
    );
  }
}

export default App;

