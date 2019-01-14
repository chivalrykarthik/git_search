(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(50)},27:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(15),c=a.n(r),o=(a(23),a(25),a(27),a(3)),l=a(4),i=a(6),h=a(5),u=a(7),p=a(1);var m=function(e){return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light justify-content-between"},s.a.createElement("a",{className:"navbar-brand animate-logo",href:"/git_search/"},"GitSearch"),s.a.createElement("button",{className:"btn btn-info float-right d-none"},"Compare"))))},g=a(16),d=a.n(g).a.create({baseURL:"https://api.github.com/"});function b(e){return s.a.createElement("div",{className:e.className},s.a.createElement("input",{type:"text",className:"form-control",placeholder:e.placeholder,name:e.name,value:e.value,onChange:e.onChange}))}var f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).state={},a.state.query="",a.state.language="",a.state.topic="",a.state.searchQuery="",a.state.searchLanguage="",a.state.searchTopic="",a.state.searchInProgress=!1,a.state.newSearch=!0,a.searchGitHub=a.searchGitHub.bind(Object(p.a)(Object(p.a)(a))),a.handleChange=a.handleChange.bind(Object(p.a)(Object(p.a)(a))),a.handleSearch=a.handleSearch.bind(Object(p.a)(Object(p.a)(a))),a.prepareSearchURL=a.prepareSearchURL.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){var t=e.target.name,a=e.target.value;this.setState(function(e){return e[t]=a})}},{key:"handleSearch",value:function(){var e=this;if(!this.state.searchInProgress){if(!this.state.query&&!this.state.language&&!this.state.topic)return this.setState({searchInProgress:!1}),this.props.setPopup("Please enter valid data to search");this.props.setPage(1),this.setState({searchQuery:this.state.query,searchLanguage:this.state.language,searchTopic:this.state.topic,newSearch:!0},function(){e.searchGitHub(e.props.pageConf.page)})}}},{key:"prepareSearchURL",value:function(e){var t="search/repositories?q=";return this.state.searchQuery&&(t+=this.state.searchQuery),this.state.searchLanguage&&(t+="+language:".concat(this.state.searchLanguage)),this.state.searchTopic&&(t+="+topic:".concat(this.state.searchTopic)),t+="&sort=stars&order=desc&per_page=".concat(this.props.pageConf.per_page,"&page=").concat(e)}},{key:"searchGitHub",value:function(e){var t=this;if(!this.state.searchInProgress){if(this.setState({searchInProgress:!0}),!this.state.searchQuery&&!this.state.searchLanguage&&!this.state.searchTopic)return this.setState({searchInProgress:!1}),this.props.setPopup("Please enter valid data to search");var a=this.prepareSearchURL(e);d.get(a).then(function(e){t.props.setRecords(e),t.setState({searchInProgress:!1,newSearch:!1})}).catch(function(e){console.log(e.stack),t.setState({searchInProgress:!1,newSearch:!1}),t.props.setPopup("We are not getting valid response from Github. Please try again later")})}}},{key:"componentDidUpdate",value:function(e,t){e.pageConf.page===this.props.pageConf.page||this.state.newSearch||this.searchGitHub(this.props.pageConf.page)}},{key:"render",value:function(){return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement("form",null,s.a.createElement("div",{className:"form-group row"},s.a.createElement(b,{className:"col-sm-3",placeholder:"Keyword",name:"query",value:this.state.query,onChange:this.handleChange}),s.a.createElement(b,{className:"col-sm-3",placeholder:"Language",name:"language",value:this.state.language,onChange:this.handleChange}),s.a.createElement(b,{className:"col-sm-3",placeholder:"Topic",name:"topic",value:this.state.topic,onChange:this.handleChange}),s.a.createElement("div",{className:"col-sm-2"},s.a.createElement("button",{type:"button",className:"btn btn-success btn-md float-left curvey-btn"+(this.state.searchInProgress?" disabled":""),onClick:this.handleSearch},s.a.createElement("i",{className:this.state.searchInProgress?"spinner-border spinner-border-sm":"fa fa-md fa-search"}),"\xa0Search"))))))}}]),t}(s.a.Component);function v(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("thead",null,s.a.createElement("tr",{className:"d-flex"},s.a.createElement("th",{className:"col-3"},"Repo Name"),s.a.createElement("th",{className:"col-3"},"Owner"),s.a.createElement("th",{className:"col-2"},"Stars"),s.a.createElement("th",{className:"col-2"},"Fork"),s.a.createElement("th",{className:"col-2"},"Link"))))}function E(e){return e&&e.records&&e.records[0]?s.a.createElement(s.a.Fragment,null,s.a.createElement("tbody",null,s.a.createElement(N,e))):s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",{colSpan:"5",align:"center"},"No records found")))}function N(e){return e.records.map(function(e){return s.a.createElement("tr",{key:e.id,className:"d-flex"},s.a.createElement("td",{className:"col-3"},e.name||""),s.a.createElement("td",{className:"col-3"},e.owner&&e.owner.login?e.owner.login:""),s.a.createElement("td",{className:"col-2"},e.forks_count||"-"),s.a.createElement("td",{className:"col-2"},e.stargazers_count||"-"),s.a.createElement("td",{className:"col-2"},e.html_url?s.a.createElement("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer"},"Link to Repo"):"-"))})}var P=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-12 table-responsive-sm"},s.a.createElement("table",{className:"table table-hover"},s.a.createElement(v,null),s.a.createElement(E,this.props)))))}}]),t}(s.a.Component);function y(e,t,a,n){""===n&&("next"===e?t++:t--,a(t))}function C(e){return s.a.createElement("button",Object.assign({type:"button"},e),e.children)}var O=function(e){var t=e.totalCount,a=e.pageConf.page,n=a>1?"":" disabled",r=e.pageConf.per_page*a<t?"":" disabled";return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-12 "},s.a.createElement(C,{className:"curvey-btn btn btn-info float-left"+n,onClick:y.bind(null,"prev",a,e.setPage,n)},"Prev"),s.a.createElement(C,{className:"curvey-btn btn btn-info float-right"+r,onClick:y.bind(null,"next",a,e.setPage,r)},"Next"))))};var j=function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"overlay "+(e.content?"show-div":"hide-div")},s.a.createElement("div",{className:"overlay_content row bg-info"},s.a.createElement("div",{className:"overlay_heading"},s.a.createElement("h6",null,"Message:")),s.a.createElement("div",{className:"col-sm-12 overlay_body"},s.a.createElement("div",{className:"ctxt"},e.content),s.a.createElement("div",{className:"text-center"},s.a.createElement("button",{className:"btn btn-info btn-sm",onClick:e.setPopup.bind(null,"")},"OK"))))))},w=(a(48),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).state={},a.state.records=[],a.state.totalCount=0,a.state.page=1,a.state.per_page=10,a.state.popupcontent="",a.setRecords=a.setRecords.bind(Object(p.a)(Object(p.a)(a))),a.setPage=a.setPage.bind(Object(p.a)(Object(p.a)(a))),a.setPopup=a.setPopup.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"setPopup",value:function(e){var t=e||"";console.log(t),this.setState({popupcontent:t})}},{key:"setRecords",value:function(e){this.setState(function(t){return t.totalCount=e.data.total_count,t.records=e.data.items,t})}},{key:"setPage",value:function(e){this.setState(function(t){return t.page=e,t})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container"},s.a.createElement(m,null),s.a.createElement(f,{setRecords:this.setRecords,pageConf:{page:this.state.page,per_page:this.state.per_page},setPage:this.setPage,setPopup:this.setPopup}),s.a.createElement(O,{totalCount:this.state.totalCount,setPage:this.setPage,pageConf:{page:this.state.page,per_page:this.state.per_page},setPopup:this.setPopup}),s.a.createElement("br",null),s.a.createElement(P,{records:this.state.records,totalCount:this.state.totalCount,setPopup:this.setPopup}),s.a.createElement(O,{totalCount:this.state.totalCount,setPage:this.setPage,pageConf:{page:this.state.page,per_page:this.state.per_page},setPopup:this.setPopup}),s.a.createElement(j,{content:this.state.popupcontent,setPopup:this.setPopup})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.65bae982.chunk.js.map