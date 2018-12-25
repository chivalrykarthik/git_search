import React, { Component } from 'react';

import Header from './components/Header.js';
import SearchCmp from './components/SearchCmp.js';
import TableCmp from './components/TableCmp.js';
import PaginationCmp from './components/PaginationCmp';

import './App.css';

class App extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state.records = [];
    this.state.totalCount = 0;
    this.state.page=1
    this.state.per_page=10;
    this.setRecords = this.setRecords.bind(this);
    this.setPage = this.setPage.bind(this);
  }

  setRecords(res) {
    this.setState(state => {
      state.totalCount = res.data.total_count;
      state.records = res.data.items;
      return state;
    });
  }
  setPage(pageNo){
    this.setState(state => {
      state.page = pageNo;
      
      return state;
    });
    //this.setState({pageConf:{page:pageNo}});
  }
  render() {
    return (
      <>
        <div className="container">
          <Header />
          <SearchCmp setRecords={this.setRecords} pageConf={{page:this.state.page,per_page:this.state.per_page}} setPage={this.setPage} />
          <PaginationCmp totalCount={this.state.totalCount} setPage={this.setPage} pageConf={{page:this.state.page,per_page:this.state.per_page}} />
          <TableCmp records={this.state.records} totalCount={this.state.totalCount} />
          <PaginationCmp totalCount={this.state.totalCount} setPage={this.setPage} pageConf={{page:this.state.page,per_page:this.state.per_page}} />
        </div>
      </>
    );
  }
}

export default App;
