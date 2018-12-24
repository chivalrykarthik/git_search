import React from 'react';
import axios from '../axiosApi.js';


class SearchCmp extends React.Component {
    state = {};
    constructor(props) {
        super(props);
        this.state.query = '';
        this.state.language = '';
        this.state.searchInProgress = false;
        this.searchGitHub = this.searchGitHub.bind(this);
        this.handleChange = this.handleChange.bind(this);        
    }

    handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        this.setState(state => {
            return state[name] = value;
        });
    }
    searchGitHub() {
        if(this.state.searchInProgress) return;

        this.setState({"searchInProgress":true});
        if (!this.state.query || !this.state.language) {
            this.setState({"searchInProgress":false});
            return alert("Please enter valid data to search");
        }
        axios.get(`search/repositories?q=${this.state.query}+language:${this.state.language}&sort=stars&order=desc`)
            .then(res => {
                this.props.setRecords(res);
                this.setState({"searchInProgress":false});
            })
            .catch(e => {
                console.log(e.stack);
                this.setState({"searchInProgress":false});
                alert("We are not getting valid response from Github. Please try again later");
            });
    }
    render() {
        return (


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
                            <button type="button" className={"btn btn-success float-left" + (this.state.searchInProgress?" disabled":"")} onClick={this.searchGitHub}>Search</button>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

export default SearchCmp;