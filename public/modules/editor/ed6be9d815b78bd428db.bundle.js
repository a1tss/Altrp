(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{534:function(e,t,r){(e.exports=r(59)(!1)).push([e.i,"",""])},600:function(e,t,r){var n=r(534);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=r(60)(n,a);n.locals&&(e.exports=n.locals),e.hot.accept(534,(function(){var t=r(534);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},647:function(e,t,r){"use strict";r.r(t);var n=r(169),a=r.n(n),o=r(8),c=r.n(o),l=r(11),i=r.n(l),s=r(17),u=r.n(s),p=r(71),d=r.n(p),f=r(0),m=r.n(f),b=r(598),h=r(601),g=(r(600),r(75)),v=r(15),y=r(98),O=r(4),w=r.n(O),j=r(5),E=r.n(j),S=r(3),P=r.n(S),k=r(6),N=r.n(k),C=r(7),D=r.n(C),x=r(2),M=r.n(x),R=r(31);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function H(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=M()(e);if(t){var a=M()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return D()(this,r)}}var K=function(e){N()(o,e);var t,r,n=H(o);function o(e){var t;return w()(this,o),(t=n.call(this,e)).resource=new R.a({route:t.props.route}),t.state={value:t.props.value||"",disabled:!t.props.value},t.changeValue=t.changeValue.bind(P()(t)),t.onChange=t.onChange.bind(P()(t)),t.onKeyDown=t.onKeyDown.bind(P()(t)),t}return E()(o,[{key:"componentDidMount",value:(r=u()(i.a.mark((function e(){var t,r=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===this.props.value){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.resource.get(this.props.resourceid);case 4:t=e.sent,this.setState((function(e){return I(I({},e),{},{value:t[r.props.resourceid]||"",disabled:!1})}));case 6:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"onKeyDown",value:function(e){13===e.keyCode&&this.changeValue(e)}},{key:"onChange",value:function(e){var t=e.target.value;this.setState((function(e){return I(I({},e),{},{value:t})})),_.isFunction(this.props.changevalue)&&this.props.changevalue(t)}},{key:"changeValue",value:(t=u()(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.target.value,this.setState((function(e){return I(I({},e),{},{disabled:!0})})),e.next=4,this.resource.put(this.props.resourceid,{value:r,column_value:r});case 4:e.sent,this.setState((function(e){return I(I({},e),{},{disabled:!1})}));case 6:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this.props.className;this.state.disabled&&(e+=" pointer-event-none");var t=I({},this.props);return delete t.changevalue,m.a.createElement("input",a()({},t,{className:e,onBlur:this.changeValue,onKeyDown:this.onKeyDown,onChange:this.onChange,value:this.state.value}))}}]),o}(f.Component);function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e){var t=e.settings,r=e.query,n=e.data;e.currentModel;if(!t.tables_columns||!t.tables_columns.length)return m.a.createElement("div",{children:"Please Add Column"});var o,c,l,s=[],p=Object(f.useState)(1),O=d()(p,2),w=O[0],j=O[1],E=Object(f.useState)({}),S=d()(E,2),P=S[0],k=S[1],N=Object(f.useState)({}),C=d()(N,2),D=C[0],x=C[1],M=Object(f.useState)({}),R=d()(M,2),A=R[0],I=R[1],H=Object(f.useState)({}),V=d()(H,2),J=V[0],T=V[1],Q=JSON.stringify(A),z=Object(f.useCallback)(function(){var e=u()(i.a.mark((function e(t){var n,a,o,c,l,s=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:1,a=s.length>2?s[2]:void 0,o=s.length>3?s[3]:void 0,c={page:n},l=JSON.stringify(o),a&&(c=_.assign(a,c)),l.length>2&&(c.filters=l),e.abrupt("return",r.getQueried(c));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());if(r.pageSize){var B=Object(h.b)([r.dataSourceName,w,D,A,r.getParams()],z,{forceFetchOnMount:!0}),G=B.status,q=B.resolvedData,L=B.latestData,U=B.error;s=q||s,o=G,c=U,l=L,Object(f.useEffect)((function(){(null==L?void 0:L.hasMore)&&h.a.prefetchQuery([r.dataSourceName,w+1],z)}),[L,z,w,D,A])}else{var W=Object(h.c)([r.dataSourceName,r.getParams()],(function(){return r.getResource().getQueried(F(F({},D),{},{filters:Q}))}),{forceFetchOnMount:!0}),X=W.status,Y=W.data,Z=W.error;s=Y,o=X,c=Z}var $;$=function(e){var t=[],r=e.tables_columns;return(r=r||[]).forEach((function(e){e.column_name&&e.accessor&&(e._accessor=e.accessor,t.push(e))})),t}(t),s.length||(s=n),_.isArray(s)||(s=[s]),s=s.map((function(e){return e.id===P.rowId?(e[P.column]=P.value,F({},e)):e}));var ee=Object(b.useTable)({columns:m.a.useMemo((function(){return $||[]}),[t.tables_columns]),data:m.a.useMemo((function(){return s||[]}),[s])}),te=ee.getTableProps,re=ee.getTableBodyProps,ne=ee.headerGroups,ae=ee.rows,oe=ee.prepareRow,ce=function(e){x({order_by:e,order:D&&D.order_by===e?"DESC"===D.order?"ASC":"DESC":"ASC"})},le=function(e,t){j(1);var r=F({},A);t?r[e]=t:delete r[e],I(r)};return console.log(o),m.a.createElement(m.a.Fragment,null,m.a.createElement("table",a()({className:"altrp-table"},te()),m.a.createElement("thead",{className:"altrp-table-head"},function(e){var t=e.additional_rows;if(!_.isArray(t))return"";return t.map((function(e){return e.additional_cells=e.additional_cells||[],m.a.createElement("tr",{key:"additional-row-".concat(e.id)},e.additional_cells.map((function(t){return t.rowspan=t.rowspan||1,t.colspan=t.colspan||1,m.a.createElement("th",{key:"additional-cell-".concat(e.id,"-").concat(t.id),role:"columnheader",className:"altrp-table-th",colSpan:t.colspan,rowSpan:t.rowspan},t.title)})))}))}(t),ne.map((function(e){return m.a.createElement("tr",a()({},e.getHeaderGroupProps(),{className:"altrp-table-tr"}),e.headers.map((function(e){return function(e){var t=e.column,r=e.sortSetting,n=e.sortingHandler,o=e.filterSetting,c=e.filterHandler,l=t.column_width,i=t.column_header_alignment,s=F({},t.getHeaderProps()),u={};l&&(u.width=l);i&&(u.textAlign=i);s.className="altrp-table-th",t.column_is_sorted&&(s.onClick=function(){return n(t._accessor)},s.className+=" clickable");t.column_width&&(s.width=t.column_width+"%");var p=t.render("column_name");return m.a.createElement("th",a()({},s,{style:u}),p,r&&r.order_by===t._accessor&&("DESC"===r.order?Object(y.a)().renderIcon("chevron",{className:"rotate-180"}):Object(y.a)().renderIcon("chevron")),t.column_is_filtered&&m.a.createElement("label",{className:"altrp-label"},m.a.createElement("input",{type:"text",onClick:function(e){e.stopPropagation()},onChange:function(e){e.stopPropagation();var r=e.target.value;c(t._accessor,r)},value:o[t._accessor]||"",className:"altrp-field"})))}({column:e,sortSetting:D,sortingHandler:ce,filterSetting:A,filterHandler:le})})))}))),m.a.createElement("tbody",a()({},re(),{className:"altrp-table-tbody ".concat(t.table_style_table_striple_style?" altrp-table-tbody--striped":"")}),"error"===o?m.a.createElement("tr",null,m.a.createElement("td",null,c.message)):"loading"===o?m.a.createElement("tr",null,m.a.createElement("td",null,"Loading")):ae.map((function(e,r){return oe(e),m.a.createElement("tr",a()({},e.getRowProps(),{className:"altrp-table-tr ".concat(t.table_hover_row?"altrp-table-background":"")}),e.cells.map((function(r,n){var o=r.render("Cell"),c=Object(v.c)()?"a":g.b,l=r.column.column_body_alignment?{textAlign:r.column.column_body_alignment}:{},i=F({},r.getCellProps()),s=r.value,u="";if($[n].column_is_editable&&$[n].column_edit_url){var p=Object(v.f)($[n].column_edit_url,e.original);u=m.a.createElement(K,{className:"altrp-inherit altrp-table-td__double-click-content",route:p,resourceid:"",changevalue:function(t){k({value:t,rowId:e.original.id,column:$[n]._accessor})},value:s}),i.onDoubleClick=function(){J.column===$[n]._accessor&&J.rowId===e.original.id?T({}):T({column:$[n]._accessor,rowId:e.original.id})}}var d="altrp-table-td";return J.column===$[n]._accessor&&e.original.id===J.rowId&&(d+=" altrp-table-td_double-clicked"),t.table_hover_row||(d+=" altrp-table-background"),_.isObject(r.value)&&(o=""),o=$[n].column_link&&e.original.id?m.a.createElement(c,{to:Object(v.f)($[n].column_link,e.original),className:"altrp-inherit altrp-table-td__default-content"},o):m.a.createElement("span",{className:"altrp-inherit altrp-table-td__default-content"},o),m.a.createElement("td",a()({},i,{className:d,style:l}),o,u)})))})))),"prev-next"===r.paginationType&&r.pageSize?m.a.createElement("div",{className:"altrp-pagination"},m.a.createElement("button",{className:"altrp-pagination__previous",onClick:function(){j((function(e){return Math.max(e-1,0)})),T({}),k({})},disabled:1===w},t.prev_text||"Previous Page"),m.a.createElement("div",{className:"altrp-pagination__count"},t.current_page_text||"Current Page:",w),m.a.createElement("button",{className:"altrp-pagination__next",onClick:function(){k({}),T({}),j((function(e){return l&&l.hasMore?e+1:e}))},disabled:!l||!l.hasMore},t.next_text||"Next Page")):"")}}}]);
//# sourceMappingURL=ed6be9d815b78bd428db.bundle.js.map