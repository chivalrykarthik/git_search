import React from 'react';


function HeadingCmp(props) {

    return (
        <>
            <thead >
                <tr>
                    <th>Repo Name</th>
                    <th>Owner</th>
                    <th>Stars</th>
                    <th>Fork</th>
                    <th>Link</th>
                </tr>
            </thead>
        </>

    )
}

function BodyCmp(props) {

    if (!props || !props.records || !props.records[0]) {
        return (
            <tbody>
                <tr >
                    <td colSpan="5" align="center">No records found</td>
                </tr>
            </tbody>
        )
    } else {
        return (
            <>
                <tbody>
                    <ProcessCmp {...props} />
                </tbody>
            </>

        );
    }
}

function ProcessCmp(props) {
    let element = props.records.map(value => {

        return (
            <tr key={value.id}>
                <td>{value.name || ""}</td>
                <td>{(value.owner && value.owner.login) ? value.owner.login : ''}</td>
                <td>{value.forks_count || '-'}</td>
                <td>{value.stargazers_count || '-'}</td>
                <td>{value.html_url ? <a href={value.html_url} target="_blank" rel="noopener noreferrer">Link to Repo</a> : '-'}</td>
            </tr>
        )
    });
    return element;
}

class TableCmp extends React.Component {    
    render() {
        return (
            <>                
                <div className="row">
                    <div className="col-sm-12">
                        <table className="table table-hover">
                            <HeadingCmp />
                            <BodyCmp {...this.props} />

                        </table>
                    </div>
                </div>                
            </>
        )
    }
}


export default TableCmp;