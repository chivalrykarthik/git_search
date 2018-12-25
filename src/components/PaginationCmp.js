import React from 'react';


function handlePaginaiton(type,page,setPage){    
    if(type==='next'){
        page++;
    }else{
        page--;
    }
    setPage(page);
}


function PageingCmp(props){
    return(
        <button type="button" {...props} >{props.children}</button>
    );
}
function PaginationCmp(props) {
    const totalCnt = props.totalCount;
    
    const page = props.pageConf.page;
    const per_page = props.pageConf.per_page;

    return (
        <>
            <div className="row">
                <div className="col-sm-12 ">
                    <PageingCmp className={"btn btn-link float-left"+((page > 1) ? "":" disabled")} onClick={handlePaginaiton.bind(null,'prev',page,props.setPage)} >Prev</PageingCmp>
                    <PageingCmp className={"btn btn-link float-right"+(((per_page * page) < totalCnt) ?"":" disabled")} onClick={handlePaginaiton.bind(null,'next',page,props.setPage)} >Next</PageingCmp>
                </div>
            </div>
        </>
    );
}

export default PaginationCmp;