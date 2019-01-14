import React from 'react';

function Header(props) {

    return (
        <div className="row">
            <div className="col-sm-12">
                <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
                    <a className="navbar-brand animate-logo" href="/git_search/">GitSearch</a>
                    <button className="btn btn-info float-right d-none">Compare</button>
                </nav>
            </div>
        </div>);
}

export default Header;