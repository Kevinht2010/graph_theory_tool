(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{205:function(e,t,n){},206:function(e,t,n){},372:function(e,t){},380:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(30),s=n.n(o),a=(n(205),n.p,n(206),n(31)),c=n(88),l=n(26);var u=n(10),d=n(6);function p(e){var t=Object(r.useState)(e.position),n=Object(u.a)(t,2),i=n[0],o=n[1],s=i[0],a=i[1];return Object(r.useEffect)((function(){o(e.position)}),[e.position]),Object(d.jsxs)("g",{style:{userSelect:"none"},onMouseDown:function(t){return e.dragStart(t,e.id,!0)},onMouseUp:function(t){return e.dragEnd(t)},children:[Object(d.jsx)("circle",{cx:s,cy:a,r:"40",stroke:"#2ab863","stroke-width":"4",fill:"#ccffcf"}),Object(d.jsx)("text",{pointerEvents:"none",textAnchor:"middle",transform:"translate(".concat(s,", ").concat(a+5,")"),fontSize:"20",children:e.id})]})}function h(e,t){return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2))}var j=function(e){var t,n,o=Object(r.useState)(e.node1),s=Object(u.a)(o,2),a=s[0],c=s[1],l=Object(r.useState)(e.node2),p=Object(u.a)(l,2),j=p[0],b=p[1],g=Object(r.useState)(e.bendPos),f=Object(u.a)(g,2),x=(f[0],f[1]);return e.bendPos&&a&&j&&(!1===e.bendPos.bent?(t=[(a.posX+j.posX)/2,(a.posY+j.posY)/2],n="M "+a.posX+" "+a.posY+" Q "+t[0]+" "+t[1]+" "+j.posX+" "+j.posY):(t=[e.bendPos.posX,e.bendPos.posY],n=function(e){var t=e[0],n=e[2],r=e[1],i=h(n,r),o=h(r,t),s=h(t,n),a=Math.acos((i*i+o*o-s*s)/(2*i*o)),c=.5*i*o*Math.sin(a),l=i*o*s/4/c;l=Math.round(1e3*l)/1e3;var u=+(Math.PI/2>a),d=+((n[0]-t[0])*(r[1]-t[1])-(n[1]-t[1])*(r[0]-t[0])<0);return["M",t,"A",l,l,0,u,d,n].join(" ")}([[j.posX,j.posY],t,[a.posX,a.posY]]))),Object(r.useEffect)((function(){c(e.node1),b(e.node2),x(e.bendPos)}),[e.node1,e.node2,e.bendPos]),Object(d.jsx)(i.a.Fragment,{children:function(){if(t&&n)return Object(d.jsxs)("svg",{children:[Object(d.jsx)("svg",{children:Object(d.jsx)("circle",{onMouseDown:function(t){e.dragStart(t,e.id,!1)},onMouseUp:function(t){return e.dragEnd(t)},cx:t[0],cy:t[1],r:6})}),Object(d.jsx)("svg",{children:Object(d.jsx)("path",{"pointer-events":"none",d:n,stroke:"black",fill:"transparent","stroke-width":"3","shape-rendering":"geometricPrecision"})})]})}()})};function b(e){var t=Object(r.useState)(!1),n=Object(u.a)(t,2),i=n[0],o=n[1],s=Object(r.useState)(),a=Object(u.a)(s,2),c=a[0],l=a[1],h=Object(r.useState)(!1),b=Object(u.a)(h,2),g=b[0],f=b[1],x=Object(r.useState)(!1),O=Object(u.a)(x,2),m=O[0],v=O[1],y=Object(r.useState)(0),w=Object(u.a)(y,2),S=w[0],C=w[1],k=Object(r.useState)(0),I=Object(u.a)(k,2),E=I[0],P=I[1],M=Object(r.useState)([]),X=Object(u.a)(M,2),Y=X[0],F=X[1],N=function(t,n,r){if(!0===i){if(e.deletingVertex&&"mousedown"==t.type)return void e.deleteVertex(n);if(l(n),C(t.clientX),P(t.clientY),r)f(!0),F([e.vertices[n].posX,e.vertices[n].posY]);else if(v(!0),!0===e.bendPositions.get(n).bent)F([e.bendPositions.get(n).posX,e.bendPositions.get(n).posY]);else{var o=e.vertices[e.edges.get(n).node1],s=e.vertices[e.edges.get(n).node2];F([(o.posX+s.posX)/2,(o.posY+s.posY)/2])}}},A=function(e){if(g&&i){var t=e.clientX-S,n=e.clientY-E;T({id:c,posX:Y[0]+t,posY:Y[1]+n})}else if(m&&i){var r=e.clientX-S,o=e.clientY-E;L({id:c,posX:Y[0]+r,posY:Y[1]+o,bent:!0})}},V=function(){f(!1),v(!1)},T=function(t){var n=e.vertices.slice(0);n[t.id]=t,e.setVertices(n)},L=function(t){var n=new Map(e.bendPositions.set(t.id,t));e.setBendPositions(n)};return Object(r.useEffect)((function(){}),[e.vertices,e.bendPositions,e.bendPositions,e.edges,e.vertices]),Object(d.jsxs)("svg",{style:{height:"600vh",width:"600vw",backgroundColor:"#dbedff"},onMouseOver:function(){o(!0)},onMouseLeave:function(e){A(e),o(!1),V()},onMouseMove:function(e){A(e)},onMouseUp:function(){return V()},children:[function(t){var n=[];return e.edges.forEach((function(t){n.push(Object(d.jsx)(j,{dragStart:N,dragEnd:V,id:t.id,node1:e.vertices[t.node1],node2:e.vertices[t.node2],bendPos:e.bendPositions.get(t.id)}))})),n}(),e.vertices.map((function(e){return Object(d.jsx)(p,{dragStart:N,dragEnd:V,id:e.id,position:[e.posX,e.posY]})}))]})}n(208);var g=n(124),f=n(28),x=n(44),O=function e(t,n){var r=this;Object(a.a)(this,e),this.addEdge=function(e,t){if(!/^\d+$/.test(e)||!/^\d+$/.test(t))return!1;if(e=Number(e),t=Number(t),!Number.isInteger(e)||e>r.vertices.length-1)return!1;if(!Number.isInteger(t)||t>r.vertices.length-1)return!1;if(e==t)return!1;var n;if(t>e){var i=e;e=t,t=i}return n=e+"."+t,r.edges.set(n,{id:n,node1:e,node2:t,bent:!1,posX:null,posY:null}),r.bendPositions.set(n,{id:n,bent:!1,posX:null,posY:null}),!0},this.vertices=[];for(var i=0;i<t;++i)this.vertices.push({id:i,posX:500,posY:500});this.edges=new Map,this.bendPositions=new Map,this.valid=!0,this.errors=[];for(var o=0;o<n.length;++o){this.errors.push("none");var s,c=Object(l.a)(n[o]);try{for(c.s();!(s=c.n()).done;){var u=s.value;if(!this.addEdge(o,u)){this.valid=!1,this.errors[o]="error";break}""===u&&(this.errors[o]="error")}}catch(d){c.e(d)}finally{c.f()}}},m=n(40),v=n(387),y=n(389),w=n(388),S=n(390),C=n(392),k=n(391);n(209);var I=Object(f.h)((function(e){var t=Object(r.useState)(),n=Object(u.a)(t,2),o=n[0],s=n[1],a=Object(r.useState)(!1),c=Object(u.a)(a,2),l=c[0],p=c[1],h=Object(r.useState)(!1),j=Object(u.a)(h,2),b=j[0],g=j[1],f=Object(r.useState)(!1),x=Object(u.a)(f,2),O=x[0],y=x[1],k=Object(r.useState)(!1),I=Object(u.a)(k,2),E=I[0],P=I[1],M=Object(r.useState)(!1),X=Object(u.a)(M,2),Y=X[0],F=X[1];Object(r.useEffect)((function(){}),[e.modal]);var N=function(e){!function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e)?p(!0):fetch("https://graphtt.herokuapp.com/login",{method:"POST",body:JSON.stringify({email:e,route:"https://kevinht2010.github.io/graphtool/#/"}),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return g(!0)}))},A=function(){e.setModal(!1),p(!1),g(!1),P(!1),y(!1),F(!1)},V=function(){return Object(d.jsx)(i.a.Fragment,{children:Object(d.jsx)("div",{style:{height:"40px",width:"100%",marginTop:"25px"},children:Object(d.jsx)(C.a,{message:"Graph successfully retrieved",type:"success",showIcon:!0})})})},T=function(){return Object(d.jsx)(i.a.Fragment,{children:Object(d.jsx)("div",{style:{height:"40px",width:"100%",marginTop:"25px"},children:Object(d.jsx)(C.a,{message:"Graph successfully saved",type:"success",showIcon:!0})})})},L=function(){return Object(d.jsx)(i.a.Fragment,{children:Object(d.jsx)("div",{style:{height:"40px",width:"100%",marginTop:"25px"},children:Object(d.jsx)(C.a,{message:"No graph to retrieve. Save a graph first!",type:"error",showIcon:!0})})})};return Object(d.jsx)(i.a.Fragment,{children:1==e.loggedIn?function(){var t=Object(d.jsxs)(i.a.Fragment,{children:[Object(d.jsx)(m.a,{onClick:function(){A()},children:"Return"},"back"),Object(d.jsx)(m.a,{type:"primary",onClick:function(){A(),e.logOut()},children:"Log out"},"back")]});return Object(d.jsxs)(S.a,{style:{top:"22%"},width:"550px",bodyStyle:{minHeight:"120px"},title:"Logged into "+localStorage.getItem("email"),visible:e.modal,onOk:function(){A()},onCancel:function(){A()},footer:t,children:[Object(d.jsxs)("div",{style:{display:"flex",width:"100%",justifyContent:"center",marginBottom:"5px",marginTop:"-15px",flexWrap:"wrap"},children:[Object(d.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",width:"220px"},children:[Object(d.jsx)("div",{style:{margin:"14px",fontSize:"18px",fontWeight:"480"},children:"Save current graph:"}),Object(d.jsx)(m.a,{type:"primary",onClick:function(){1==e.loggedIn&&fetch("https://graphtt.herokuapp.com/api/upload",{method:"POST",body:JSON.stringify({type:"upload",email:localStorage.getItem("email"),edges:JSON.stringify(Array.from(e.edges.entries())),vertices:JSON.stringify(e.vertices),bentpos:JSON.stringify(Array.from(e.bendPositions.entries()))}),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){y(!0)})),y(!1),P(!1),F(!1)},children:"Save Graph"})]}),Object(d.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",width:"220px"},children:[Object(d.jsx)("div",{style:{margin:"14px",fontSize:"18px",fontWeight:"480"},children:"Retrieve saved graph:"}),Object(d.jsx)(m.a,{type:"primary",onClick:function(){1==e.loggedIn&&fetch("https://graphtt.herokuapp.com/api/retrieve",{method:"POST",body:JSON.stringify({type:"retrieve",email:localStorage.getItem("email")}),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(t){console.log(t),P(!0);var n=new Map(JSON.parse(t.edges)),r=new Map(JSON.parse(t.bentpos));e.setGraph(n,JSON.parse(t.vertices),r)})),y(!1),P(!1),F(!1)},children:"Retrieve Graph"})]}),Object(d.jsx)("div",{style:{marginTop:"45px",marginBottom:"-15px"},children:"(Currently this feature is limited to 1 graph per user)"})]}),O?T():Object(d.jsx)(i.a.Fragment,{}),E?V():Object(d.jsx)(i.a.Fragment,{}),Y?L():Object(d.jsx)(i.a.Fragment,{})]})}():function(){var t=Object(d.jsxs)(i.a.Fragment,{children:[Object(d.jsx)(m.a,{onClick:function(){A()},style:{marginTop:"10px",marginBottom:"10px",marginRight:"46%"},children:"Return"},"back"),Object(d.jsx)(m.a,{type:"primary",onClick:function(){N(o)},children:"Send Confirmation Email"},"back")]});return Object(d.jsx)(S.a,{style:{top:"22%"},width:"550px",bodyStyle:{minHeight:"100px"},title:"Log In To Save Graphs",visible:e.modal,onOk:function(){A()},onCancel:function(){A()},footer:t,onClick:function(){return p(!1)},children:Object(d.jsxs)("div",{onClick:function(){p(!1)},children:[Object(d.jsx)(v.a,{name:"basic",style:{height:"30px"},children:Object(d.jsx)(v.a.Item,{label:"Email",name:"email",children:Object(d.jsx)(w.a,{onChange:function(e){s(e.target.value)}})})}),b?Object(d.jsx)(i.a.Fragment,{children:Object(d.jsx)("div",{style:{height:"40px",width:"100%",marginTop:"23px"},children:Object(d.jsx)(C.a,{message:"Email successfully sent to "+o,type:"success",showIcon:!0})})}):Object(d.jsx)(i.a.Fragment,{}),l?Object(d.jsx)(i.a.Fragment,{children:Object(d.jsx)("div",{style:{height:"40px",width:"100%",marginTop:"23px"},children:Object(d.jsx)(C.a,{message:"Invalid Email",type:"error",showIcon:!0})})}):Object(d.jsx)(i.a.Fragment,{})]})})}()})})),E=n(386),P=n(385),M=function(){function e(){var t=this;Object(a.a)(this,e),this.maxCycle=0,this.minCycle=Number.MAX_VALUE,this.determinant=function(e){return 1==e.length?e[0][0]:2==e.length?e[0][0]*e[1][1]-e[0][1]*e[1][0]:e[0].reduce((function(n,r,i){return n+Math.pow(-1,i+2)*r*t.determinant(e.slice(1).map((function(e){return e.filter((function(e,t){return i!=t}))})))}),0)}}return Object(c.a)(e,[{key:"BFS",value:function(e,t,n){var r=[t];for(n[t]=1;r.length>0;){var i,o=[],s=Object(l.a)(r);try{for(s.s();!(i=s.n()).done;)for(var a=i.value,c=0;c<e[a].length;++c)1!=n[e[a][c]]&&(++n[e[a][c]],o.push(e[a][c]))}catch(u){s.e(u)}finally{s.f()}r=o}}},{key:"longestPathFromVertex",value:function(e,t,n){var r=0;n[t]=1;var i,o=Object(l.a)(e[t]);try{for(o.s();!(i=o.n()).done;){var s=i.value;1!=n[s]&&(r=Math.max(r,1+this.longestPathFromVertex(e,s,n)))}}catch(a){o.e(a)}finally{o.f()}return r}},{key:"getComponents",value:function(e){for(var t=0,n=new Array(e.length).fill(0),r=0;r<e.length;++r)0==n[r]&&(++t,this.BFS(e,r,n));return t}},{key:"getLongestPath",value:function(e){for(var t=0,n=0;n<e.length;++n)t=Math.max(this.longestPathFromVertex(e,n,new Array(e.length).fill(0)),t);return t}},{key:"getCyclesFromVertex",value:function(e,t,n,r,i,o){var s=0;n[t]=1;var a,c=Object(l.a)(e[t]);try{for(c.s();!(a=c.n()).done;){var u=a.value;0==o[u]&&(u==r&&i>=2?(++s,i>this.maxCycle&&(this.maxCycle=i),i<this.minCycle&&(this.minCycle=i)):0==n[u]&&(s+=this.getCyclesFromVertex(e,u,n,r,i+1,o)))}}catch(d){c.e(d)}finally{c.f()}return n[t]=0,s}},{key:"generateAdjMatrix",value:function(e){for(var t=new Array(e.length),n=0;n<e.length;++n)t[n]=new Array(e.length).fill(0);for(var r=0;r<e.length;++r)for(var i=0;i<e[r].length;++i)t[r][e[r][i]]=1;return t}},{key:"getSpanningTrees",value:function(e){if(1!=this.getComponents(e))return 0;for(var t=this.generateAdjMatrix(e),n=new Array(e.length),r=0;r<e.length;++r)n[r]=new Array(e.length).fill(0);for(var i=0;i<e.length;++i)n[i][i]=e[i].length;var o=P.b(n,t);o.pop();for(var s=0;s<e.length-1;++s)o[s].pop();return console.log(o),console.log(this.determinant(o)),P.a(o)}},{key:"countCycles",value:function(e){for(var t=new Array(e.length).fill(0),n=0,r=0;r<e.length;++r)n+=this.getCyclesFromVertex(e,r,new Array(e.length).fill(0),r,0,t)/2,t[r]=1;return n}},{key:"getProperties",value:function(e){var t=this.countCycles(e),n=this.minCycle,r=this.maxCycle;return[{key:"1",property:"Longest Path",value:this.getLongestPath(e)},{key:"2",property:"Number of Components",value:this.getComponents(e)},{key:"3",property:"Spanning Trees",value:0},{key:"4",property:"Number of Cycles",value:t},{key:"5",property:"Shortest Cycle",value:n==Number.MAX_VALUE?"Null":n},{key:"6",property:"Longest Cycle",value:0==r?"Null":r}]}}]),e}();function X(e){var t=Object(r.useState)(0),n=Object(u.a)(t,2),i=(n[0],n[1],Object(r.useState)()),o=Object(u.a)(i,2),s=(o[0],o[1]),a=Object(r.useState)(),c=Object(u.a)(a,2),l=(c[0],c[1],Object(r.useState)()),p=Object(u.a)(l,2),h=p[0],j=p[1],b=new M;return Object(r.useEffect)((function(){var t=function(e,t){for(var n=new Array(e),r=0;r<e;++r)n[r]=new Array;return t.forEach((function(e,t){n[e.node1].push(e.node2),n[e.node2].push(e.node1)})),s(n),n}(e.vertices.length,e.edges);j(b.getProperties(t))}),[e.vertices,e.edges]),Object(d.jsx)(E.a,{dataSource:h,columns:[{title:"Property",dataIndex:"property",key:"name",width:250},{title:"Value",dataIndex:"value",key:"val",width:120}],pagination:{pageSize:3}})}function Y(e){var t=Object(r.useState)(!1),n=Object(u.a)(t,2),o=n[0],s=n[1],a=Object(r.useState)(!1),c=Object(u.a)(a,2),l=c[0],p=c[1],h=Object(r.useState)([{id:"cycles",value:"5"}]),j=Object(u.a)(h,2),b=(j[0],j[1],Object(r.useState)(!1)),g=Object(u.a)(b,2),f=g[0],E=g[1],P=Object(r.useState)(!1),M=Object(u.a)(P,2),Y=(M[0],M[1]),F=Object(r.useState)(!1),N=Object(u.a)(F,2),A=N[0],V=N[1],T=Object(r.useState)("none"),L=Object(u.a)(T,2),G=L[0],z=L[1],D=Object(r.useState)("none"),B=Object(u.a)(D,2),J=B[0],W=B[1],R=Object(r.useState)(""),_=Object(u.a)(R,2),U=_[0],H=_[1],$=Object(r.useState)(""),Z=Object(u.a)($,2),q=Z[0],Q=Z[1],K=Object(r.useState)(1),ee=Object(u.a)(K,2),te=ee[0],ne=ee[1],re=Object(r.useState)(0),ie=Object(u.a)(re,2),oe=ie[0],se=ie[1],ae=Object(r.useState)(),ce=Object(u.a)(ae,2),le=ce[0],ue=ce[1],de=Object(r.useState)(),pe=Object(u.a)(de,2),he=pe[0],je=pe[1],be=Object(r.useState)(),ge=Object(u.a)(be,2),fe=ge[0],xe=ge[1],Oe=Object(r.useState)(!1),me=Object(u.a)(Oe,2),ve=me[0],ye=me[1],we=function(){var t=new O(oe,he);!0===t.valid?(e.setGraph(t.edges,t.vertices,t.bendPositions,!0),Se()):xe(t.errors)},Se=function(){se(0),p(!1),ue("none"),je(),xe()},Ce=function(t){var n;if(""!==U&&""!==q)return n=t?e.addEdge(U,q):e.deleteEdge(U,q),z(n[0]),W(n[1]),n;var r=[];return""===U?r.push("error"):r.push("none"),""===q?r.push("error"):r.push("none"),z(r[0]),W(r[1]),r};return Object(d.jsxs)(i.a.Fragment,{children:[Object(d.jsxs)("div",{style:{position:"absolute",display:"flex",marginTop:"45px",marginLeft:"85px"},children:[Object(d.jsx)(m.a,{style:{margin:"8px",height:"35px",width:"150px",fontSize:"15px"},type:"primary",onClick:function(){return p(!0)},children:"Input Graph"}),Object(d.jsx)(m.a,{style:{margin:"8px",height:"35px",width:"150px",fontSize:"15px"},type:"primary",onClick:function(){e.straightenEdges()},children:"Straighten Edges"}),Object(d.jsx)(m.a,{style:{margin:"8px",height:"35px",width:"150px",fontSize:"15px"},type:"primary",onClick:function(){return s(!0)},children:"Graph Properties"}),Object(d.jsx)(m.a,{style:{margin:"8px",height:"35px",width:"150px",fontSize:"15px"},type:"primary",onClick:function(){return e.centerGraph()},children:"Center Graph"})]}),Object(d.jsx)("div",{style:{position:"absolute",marginLeft:"100px",bottom:"calc(6vh + 15px)"},children:Object(d.jsx)(m.a,{style:{width:"55px",height:"45px"},type:"primary",onClick:function(){return ye(!0)},children:Object(d.jsx)(k.a,{})})}),Object(d.jsx)(I,{modal:ve,setModal:ye,loggedIn:e.loggedIn,logIn:e.logIn,logOut:e.logOut,edges:e.edges,vertices:e.vertices,bendPositions:e.bendPositions,setGraph:e.setGraph}),function(){var e=Object(d.jsxs)(i.a.Fragment,{children:[Object(d.jsx)(m.a,{onClick:function(){Se()},children:"Cancel"},"back"),Object(d.jsx)(m.a,{type:"primary",onClick:function(){0===oe?function(){se(te);var e=Array(te);e.fill([]),je(e);var t=Array(te);t.fill("none"),xe(t)}():we()},children:0===oe?"Continue":"Input Graph"})]});return Object(d.jsx)(S.a,{style:{top:"10%"},title:"Input Graph",visible:l,onCancel:function(){Se()},footer:e,children:Object(d.jsx)("div",{style:{display:"flex",width:"100%",justifyContent:"center",marginTop:"10px",marginBottom:"-5px",marginLeft:"-10px"},children:Object(d.jsx)(v.a,{onMouseDown:function(){z("none")},children:function(){if(0===oe)return Object(d.jsx)(v.a.Item,{label:"Number of Vertices (Max 14)",name:"v1",validateStatus:G,help:"error"===le?"Invalid Input":null,children:Object(d.jsx)(y.a,{onPressEnter:function(e){se(te)},autoComplete:"off",onChange:function(e){return ne(e)},min:1,max:14,defaultValue:1})});for(var e=[],t=function(t){e.push(Object(d.jsx)(v.a.Item,{validateStatus:fe[t],help:"error"===fe[t]?"Invalid Input":null,label:JSON.stringify(t),children:Object(d.jsx)(w.a,{defaultValue:"",style:{width:"70px",margin:"2px"},onPressEnter:function(e){we()},autoComplete:"off",onChange:function(e){var n=Object(x.a)(he);n[t]=e.target.value.split(" ").join("").split(","),je(n)}})}))},n=0;n<oe;++n)t(n);return Object(d.jsxs)(i.a.Fragment,{children:[Object(d.jsx)("div",{style:{marginTop:"-15px",marginBottom:"35px"},children:"Edges (adjacency list, seperating neighbors of each vertex with commas)"}),Object(d.jsx)("div",{style:{display:"flex",width:"350px",marginLeft:"auto",marginRight:"auto",flexWrap:"wrap",justifyContent:"space-around"},children:e})]})}()})})})}(),function(){var t,n;return t=Object(d.jsxs)(i.a.Fragment,{children:[Object(d.jsx)(X,{vertices:e.vertices,edges:e.edges}),Object(d.jsx)(C.a,{message:"Some feature are still in progress (number of spanning forests, planarity, etc.) - please check back in a few days!",type:"warning",showIcon:!0})]}),n=Object(d.jsx)(i.a.Fragment,{children:Object(d.jsx)(m.a,{type:"primary",onClick:function(){s(!1)},children:"Return"},"submit")}),Object(d.jsx)(S.a,{style:{top:"15%"},width:"600px",bodyStyle:{minHeight:"200px"},title:"Graph Properties",visible:o,onOk:function(){s(!1)},onCancel:function(){s(!1)},footer:n,children:t})}(),function(){var e=Object(d.jsxs)(i.a.Fragment,{children:[Object(d.jsx)(m.a,{onClick:function(){E(!1),V(!1),Y(!1)},children:"Return"},"back"),Object(d.jsx)(m.a,{type:"primary",onClick:function(){Ce(!!A)},children:A?"Add Edge":"Delete Edge"})]});return Object(d.jsx)(S.a,{style:{top:"25%"},title:A?"Add Edge":"Delete Edge",visible:f,onCancel:function(){E(!1),V(!1),Y(!1),z("none"),W("none")},footer:e,children:Object(d.jsx)("div",{style:{display:"flex",width:"100%",justifyContent:"center",marginTop:"10px",marginBottom:"-5px",marginLeft:"-10px"},children:Object(d.jsxs)(v.a,{initialValues:{remember:!0},onMouseDown:function(){z("none"),W("none")},children:[Object(d.jsx)(v.a.Item,{label:"Vertex 1",name:"v1",validateStatus:G,help:"error"===G?"Invalid Input":null,children:Object(d.jsx)(w.a,{onPressEnter:function(e){Ce(!!A)},autoComplete:"off",onChange:function(e){return H(e.target.value)}})}),Object(d.jsx)(v.a.Item,{validateStatus:J,help:"error"===J?"Invalid Input":null,label:"Vertex 2",name:"v2",children:Object(d.jsx)(w.a,{onPressEnter:function(e){Ce(!!A)},autoComplete:"off",onChange:function(e){return Q(e.target.value)}})})]})})})}(),Object(d.jsxs)("div",{style:{position:"absolute",display:"flex",right:"3%",bottom:"6%",flexWrap:"wrap",width:"125px"},children:[function(){if(e.addingVertex||e.deletingVertex)return Object(d.jsx)(m.a,{style:{margin:"10px",height:"45px",width:"95px",fontSize:"15px",padding:"0px"},type:"primary",onClick:function(){e.setAddingVertex(!1),e.setDeletingVertex(!1)},children:"Cancel"})}(),Object(d.jsx)(m.a,{style:{margin:"10px",height:"45px",width:"95px",fontSize:"15px",padding:"0px"},type:"primary",onClick:function(){Y(!0),E(!0)},children:"Delete Edge"}),Object(d.jsx)(m.a,{style:{margin:"10px",height:"45px",width:"95px",fontSize:"15px",padding:"0px"},type:"primary",onClick:function(){e.setAddingVertex(!1),e.setDeletingVertex(!0)},children:"Delete Node"}),Object(d.jsx)(m.a,{style:{margin:"10px",height:"45px",width:"95px",fontSize:"15px",padding:"0px"},type:"primary",onClick:function(){V(!0),E(!0)},children:"Add Edge"}),Object(d.jsx)(m.a,{style:{margin:"10px",height:"45px",width:"95px",fontSize:"15px",padding:"0px"},type:"primary",onClick:function(){e.setDeletingVertex(!1),e.setAddingVertex(!0)},children:"Add Node"})]})]})}function F(){return Object(d.jsx)("div",{style:{width:"100%",height:"100%"},children:Object(d.jsx)(C.a,{message:"Mobile view is still under construction! Please check in later (for now, please use the app on pc view - apologies for any inconveniences)",type:"warning",showIcon:!0})})}function N(e){var t=Object(r.useState)(!1),n=Object(u.a)(t,2),o=n[0],s=n[1],a=Object(r.useState)(null),c=Object(u.a)(a,2),l=c[0],p=c[1],h=new Map,j=new Map;[{id:"0.1",node1:0,node2:1,bent:!1,posX:null,posY:null},{id:"1.2",node1:1,node2:2,bent:!1,posX:null,posY:null},{id:"1.3",node1:1,node2:3,bent:!1,posX:null,posY:null},{id:"0.2",node1:0,node2:2,bent:!1,posX:null,posY:null},{id:"0.3",node1:0,node2:3,bent:!1,posX:null,posY:null},{id:"2.3",node1:2,node2:3,bent:!1,posX:null,posY:null},{id:"0.4",node1:0,node2:4,bent:!1,posX:null,posY:null},{id:"1.4",node1:1,node2:4,bent:!1,posX:null,posY:null},{id:"2.4",node1:2,node2:4,bent:!1,posX:null,posY:null},{id:"3.4",node1:3,node2:4,bent:!1,posX:null,posY:null}].forEach((function(e){h.set(e.node1+"."+e.node2,e),j.set(e.node1+"."+e.node2,{id:e.id,bent:e.bent,posX:e.posX,posY:e.posY})}));var g=Object(r.useState)(null),f=Object(u.a)(g,2),x=f[0],O=f[1],m=Object(r.useState)(!1),v=Object(u.a)(m,2),y=v[0],w=v[1],S=Object(r.useState)(!1),k=Object(u.a)(S,2),I=k[0],E=k[1],P=Object(r.useState)(null),M=Object(u.a)(P,2),X=M[0],N=M[1],A=function(e,t,n){s(!0),p(t),O(e),N(n)};null===l&&A(h,[{id:0,posX:850,posY:200},{id:1,posX:1150,posY:400},{id:2,posX:550,posY:400},{id:3,posX:1050,posY:720},{id:4,posX:650,posY:720}],j);var V=function(e){"click"==e.type?(y&&l.length<=14&&T(e.clientX-55,e.clientY-13),w(!1)):w(!1)},T=function(e,t){l.push({id:l.length,posX:e,posY:t})},L=function(){x.forEach((function(e){j.set(e.node1+"."+e.node2,{id:e.id,bent:!1,posX:0,posY:0})})),N(j)},G=function(e){var t=new Map,n=new Map;x.forEach((function(r){var i=r.id,o=Number(i.substr(0,i.indexOf("."))),s=Number(i.substr(i.indexOf(".")+1,i.length-1));if(o!==e&&s!==e){o>e&&--o,s>e&&--s;var a=o+"."+s,c=r;c.id=a,c.node1=o,c.node2=s;var l=X.get(i);l.id=a,t.set(o+"."+s,c),n.set(o+"."+s,l)}})),O(t),N(n),E(!1),z(e)},z=function(e){var t=l;t.splice(e,1);for(var n=e;n<t.length;++n)--t[n].id;p(t)},D=function(e,t){var n,r=["none","none"];if((e=Number(e))>(t=Number(t))){var i=e;e=t,t=i}return(!Number.isInteger(e)||e>l.length-1)&&(r[0]="error"),(!Number.isInteger(t)||t>l.length-1)&&(r[1]="error"),e===t&&(r[0]="error",r[1]="error"),"error"===r[0]||"error"===r[1]?r:(n=e>t?t+"."+e:e+"."+t,x.has(n)?["error","error"]:(O(new Map(x.set(n,{id:n,node1:e,node2:t,bent:!1,posX:null,posY:null}))),N(new Map(X.set(n,{id:n,bent:!1,posX:null,posY:null}))),["success","success"]))},B=function(e,t){var n,r=["none","none"];return e=Number(e),t=Number(t),(!Number.isInteger(e)||e>l.length-1)&&(r[0]="error"),(!Number.isInteger(t)||t>l.length-1)&&(r[1]="error"),e===t&&(r[0]="error",r[1]="error"),"error"===r[0]||"error"===r[1]?r:(n=e>t?t+"."+e:e+"."+t,x.has(n)?(function(e){var t=new Map(x);t.delete(e);var n=new Map(X);n.delete(e),O(t),N(n)}(n),["success","success"]):["error","error"])},J=function(){var e=[],t=0,n=l.length;l.forEach((function(r){t>n/2?(r.posX=500+50*(t-n/2),r.posY=520):(r.posX=500+50*t,r.posY=320),++t,e.push(r)})),p(e),L()},W=Object(r.useState)(window.innerWidth),R=Object(u.a)(W,2),_=(R[0],R[1]);Object(r.useEffect)((function(){o&&s(!1);var e=function(){return _(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[x,X,window.innerWidth]);return Object(d.jsxs)(i.a.Fragment,{children:[window.innerWidth>"670"?Object(d.jsxs)("div",{style:{overflow:"auto"},children:[Object(d.jsx)(Y,{setAddingVertex:w,straightenEdges:L,addEdge:D,setDeletingVertex:E,deleteEdge:B,setGraph:A,edges:x,vertices:l,bendPositions:X,logIn:e.login,logOut:e.logout,loggedIn:e.loggedIn,centerGraph:J,addingVertex:y,deletingVertex:I}),Object(d.jsx)("div",{style:{display:"flex",height:"92vh",width:"94vw",marginLeft:"3vw",marginRight:"3vw",marginTop:"3vh",marginBottom:"2.75vh",overflow:"hidden"},onClick:function(e){V(e),w(!1)},children:o?Object(d.jsx)(i.a.Fragment,{}):Object(d.jsx)(b,{vertices:l,edges:x,bendPositions:X,setVertices:p,deletingVertex:I,setBendPositions:N,onMouseDown:function(e){V(e),w(!1)},deleteVertex:G})})]}):Object(d.jsx)(F,{}),function(){if(y)return Object(d.jsx)(C.a,{style:{position:"absolute",right:"9%",bottom:"7.1%",width:"250px"},message:"Click anywhere to add a vertex!",type:"success",showIcon:!0})}(),function(){if(I)return Object(d.jsx)(C.a,{style:{position:"absolute",right:"9%",bottom:"7.1%",width:"250px"},message:"Click a vertex to delete it!",type:"error",showIcon:!0})}()]})}var A=Object(f.h)((function(e){var t=Object(r.useState)(Object(f.g)().pathname.replace("/confirm_email/","")),n=Object(u.a)(t,2),i=n[0],o=(n[1],Object(r.useState)("Temp")),s=Object(u.a)(o,2),a=s[0],c=s[1],l=function(t){if(c(t),"Accepted"===t.status){e.login(t.email);var n=window.location.href,r=n.search("/confirm_email");window.location.replace(n.substr(0,r))}};return Object(r.useEffect)((function(){if(!0===e.loggedIn){var t=window.location.href,n=t.search("/confirm_email");window.location.replace(t.substr(0,n))}else fetch("https://graphtt.herokuapp.com/confirm_email/"+i,{method:"POST",body:JSON.stringify({token:i}),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return l(e)}))}),[]),Object(d.jsx)("h1",{children:a.status})}));function V(){var e=Object(r.useState)(localStorage.getItem("loggedIn")),t=Object(u.a)(e,2),n=t[0],i=t[1],o=Object(r.useState)(localStorage.getItem("email")),s=Object(u.a)(o,2),a=(s[0],s[1],function(e){localStorage.setItem("loggedIn",!0),localStorage.setItem("email",e),i(!0)});return Object(r.useEffect)((function(){"true"==localStorage.getItem("loggedIn")?i(!0):i(!1)}),[]),Object(d.jsx)(g.a,{children:Object(d.jsxs)(f.d,{children:[Object(d.jsx)(f.b,{exact:!0,path:"/",children:Object(d.jsx)(N,{loggedIn:n,login:a,logout:function(){localStorage.setItem("loggedIn",!1),localStorage.removeItem("email"),i(!1)}})}),Object(d.jsx)(f.b,{exact:!0,path:"/confirm_email/:token",component:function(){return Object(d.jsx)(A,{loggedIn:n,login:a})}}),Object(d.jsx)(f.b,{path:"/",children:Object(d.jsx)(f.a,{to:"/"})})]})})}var T=n(190);var L=function(){return Object(r.useEffect)((function(){})),Object(d.jsxs)(i.a.Fragment,{children:[Object(d.jsx)(T.a,{children:Object(d.jsx)("title",{children:"Graph Theory Tool"})}),Object(d.jsx)(V,{})]})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,393)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),i(e),o(e),s(e)}))};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(L,{})}),document.getElementById("root")),G()}},[[380,1,2]]]);
//# sourceMappingURL=main.3453ebd3.chunk.js.map