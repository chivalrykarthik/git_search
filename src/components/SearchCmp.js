import React from 'react';
import axios from '../axiosApi.js';


class SearchCmp extends React.Component {
    state = {};
    constructor(props) {
        super(props);
        this.state.query = '';
        this.state.language = '';
        this.state.searchQuery = '';
        this.state.searchLanguage = '';
        this.state.searchInProgress = false;
        this.state.newSearch = true;
        this.searchGitHub = this.searchGitHub.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        this.setState(state => {
            return state[name] = value;
        });
    }
    handleSearch() {
        if (this.state.searchInProgress) return;
        if (!this.state.query || !this.state.language) {
            this.setState({ "searchInProgress": false });
            return alert("Please enter valid data to search");
        }
        this.props.setPage(1);
        this.setState({ searchQuery: this.state.query, searchLanguage: this.state.language,newSearch:true }, () => {            
            this.searchGitHub(this.props.pageConf.page);
        })
    }
    searchGitHub(pageNo) {
        if (this.state.searchInProgress) return;
        this.setState({ "searchInProgress": true });
        if (!this.state.searchQuery || !this.state.searchLanguage) {
            this.setState({ "searchInProgress": false });
            return alert("Please enter valid data to search");
        }
        const searchUrl = `search/repositories?q=${this.state.searchQuery}+language:${this.state.searchLanguage}&sort=stars&order=desc&per_page=${this.props.pageConf.per_page}&page=${pageNo}`;
        axios.get(searchUrl)
            .then(res => {
                this.props.setRecords(res);
                this.setState({ "searchInProgress": false,newSearch:false });
            })
            .catch(e => {
                console.log(e.stack);
                this.setState({ "searchInProgress": false,newSearch:false });
                alert("We are not getting valid response from Github. Please try again later");
            });
    }

    componentDidUpdate(prevProps,prevState) {
        if(prevProps.pageConf.page !== this.props.pageConf.page && !this.state.newSearch){
            this.searchGitHub(this.props.pageConf.page);            
        }

    }
    render() {
        return (

            <div className="row">
                <div className="col-sm-12">
                    <form>
                        <div className="form-group row">
                            <div className="col-sm-3">
                                <input type="text" className="form-control" placeholder="Keyword" name='query' value={this.state.query} onChange={this.handleChange} />
                            </div>
                            <div className="col-sm-3">
                                <input type="text" className="form-control" placeholder="language" name="language" value={this.state.language} onChange={this.handleChange} />
                            </div>
                            <div className="col-sm-4 d-none">
                                <input type="text" className="form-control" placeholder="Or Repo URL" />
                            </div>
                            <div className="col-sm-2">
                                <button type="button" className={"btn btn-success float-left" + (this.state.searchInProgress ? " disabled" : "")} onClick={this.handleSearch}>Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchCmp;