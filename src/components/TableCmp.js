import React from 'react';


function HeadingCmp(props) {

    return (
        <>
            <thead >
                <tr className="d-flex">
                    <th className="col-3">Repo Name</th>
                    <th className="col-3">Owner</th>
                    <th className="col-2">Stars</th>
                    <th className="col-2">Fork</th>
                    <th className="col-2">Link</th>
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
            <tr key={value.id} className="d-flex">
                <td className="col-3">{value.name || ""}</td>
                <td className="col-3">{(value.owner && value.owner.login) ? value.owner.login : ''}</td>
                <td className="col-2">{value.forks_count || '-'}</td>
                <td className="col-2">{value.stargazers_count || '-'}</td>
                <td className="col-2">{value.html_url ? <a href={value.html_url} target="_blank" rel="noopener noreferrer">Link</a> : '-'}</td>
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
                    <div className="col-sm-12 table-responsive-sm">
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