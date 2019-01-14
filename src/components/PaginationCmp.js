import React from 'react';


function handlePaginaiton(type, page, setPage,isDisabled) {
    if(isDisabled!==""){
        return;
    }
    if (type === 'next') {
        page++;
    } else {
        page--;
    }
    setPage(page);
}


function PageingCmp(props) {
    return (
        <button type="button" {...props} >{props.children}</button>
    );
}
function PaginationCmp(props) {
    const totalCnt = props.totalCount;

    const page = props.pageConf.page;
    const per_page = props.pageConf.per_page;
    const enablePrev = ((page > 1) ? "" : " disabled");
    const enableNext = (((per_page * page) < totalCnt) ? "" : " disabled")
    return (
        <>
            <div className="row">
                <div className="col-sm-12 ">
                    <PageingCmp className={"curvey-btn btn btn-info float-left" + enablePrev} onClick={handlePaginaiton.bind(null, 'prev', page, props.setPage,enablePrev)} >Prev</PageingCmp>
                    <PageingCmp className={"curvey-btn btn btn-info float-right" + enableNext} onClick={handlePaginaiton.bind(null, 'next', page, props.setPage,enableNext)} >Next</PageingCmp>
                </div>
            </div>
        </>
    );
}

export default PaginationCmp;