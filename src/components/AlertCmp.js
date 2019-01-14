import React from 'react';



function AlertCmp(props) {


    return (
        <>
            <div className={'overlay ' + ((props.content)?"show-div":"hide-div")}>

                <div className="overlay_content row bg-info">
                    <div className="overlay_heading">
                        <h6>Message:</h6>
                    </div>
                    <div className="col-sm-12 overlay_body">

                        <div className="ctxt">
                            {props.content}
                        </div>

                        <div className="text-center">

                            <button className="btn btn-info btn-sm" onClick={props.setPopup.bind(null,'')}>OK</button>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}

export default AlertCmp;