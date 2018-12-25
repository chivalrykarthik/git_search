import React from 'react';

function Header(props) {

    return (
        <div className="row">
        <div className="col-sm-12">
            <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
                <a className="navbar-brand" href="/git_search/">GitSearch</a>
                <button className="btn btn-info pull-left">Compare</button>
            </nav>
            </div>
        </div>);
}

export default Header;