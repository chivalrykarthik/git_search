import React from 'react';
import axios from '../axiosApi.js';


function InputComponent(props) {
    return (
        <div className={props.className} >
            <input type="text" className="form-control" placeholder={props.placeholder} name={props.name} value={props.value} onChange={props.onChange} />
        </div>);
}

class SearchCmp extends React.Component {
    state = {};
    constructor(props) {
        super(props);
        this.state.query = '';
        this.state.language = '';
        this.state.topic = '';
        this.state.searchQuery = '';
        this.state.searchLanguage = '';
        this.state.searchTopic = '';
        this.state.searchInProgress = false;
        this.state.newSearch = true;
        this.searchGitHub = this.searchGitHub.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.prepareSearchURL = this.prepareSearchURL.bind(this);
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
        if (!this.state.query && !this.state.language  && !this.state.topic) {
            this.setState({ "searchInProgress": false });
            return alert("Please enter valid data to search");
        }
        this.props.setPage(1);
        this.setState({ "searchQuery": this.state.query, "searchLanguage": this.state.language,"searchTopic": this.state.topic, "newSearch": true }, () => {
            this.searchGitHub(this.props.pageConf.page);
        });
    }

    prepareSearchURL(pageNo) {
        let searchURL = `search/repositories?q=`;
        if (this.state.searchQuery) {
            searchURL += this.state.searchQuery;
        }
        if (this.state.searchLanguage) {
            searchURL += `+language:${this.state.searchLanguage}`;
        }
        if (this.state.searchTopic) {
            searchURL += `+topic:${this.state.searchTopic}`;
        }
        searchURL += `&sort=stars&order=desc&per_page=${this.props.pageConf.per_page}&page=${pageNo}`;
        return searchURL;
    }
    searchGitHub(pageNo) {
        if (this.state.searchInProgress) return;
        this.setState({ "searchInProgress": true });
        if (!this.state.searchQuery && !this.state.searchLanguage && !this.state.searchTopic) {
            this.setState({ "searchInProgress": false });
            return alert("Please enter valid data to search");
        }
        const searchURL = this.prepareSearchURL(pageNo);

        axios.get(searchURL)
            .then(res => {
                this.props.setRecords(res);
                this.setState({ "searchInProgress": false, newSearch: false });
            })
            .catch(e => {
                console.log(e.stack);
                this.setState({ "searchInProgress": false, newSearch: false });
                alert("We are not getting valid response from Github. Please try again later");
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.pageConf.page !== this.props.pageConf.page && !this.state.newSearch) {
            this.searchGitHub(this.props.pageConf.page);
        }

    }
    render() {
        return (

            <div className="row">
                <div className="col-sm-12">
                    <form>
                        <div className="form-group row">
                            <InputComponent className="col-sm-3" placeholder="Keyword" name='query' value={this.state.query} onChange={this.handleChange} />

                            <InputComponent className="col-sm-3" placeholder="Language" name="language" value={this.state.language} onChange={this.handleChange} />

                            <InputComponent className="col-sm-3" placeholder="Topic" name="topic" value={this.state.topic} onChange={this.handleChange} />

                            <div className="col-sm-2">
                                <button type="button" className={"btn btn-success btn-md float-left" + (this.state.searchInProgress ? " disabled" : "")} onClick={this.handleSearch}>
                                
                                <i className={this.state.searchInProgress?"spinner-border spinner-border-sm":"fa fa-md fa-search"}></i>&nbsp;Search
                                
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchCmp;