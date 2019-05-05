(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){},23:function(e,t,n){e.exports=n(34)},34:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(18),i=n.n(r),l=n(12),c=n(5),s=n(6),d=n(8),u=n(7),p=n(9),m=n(37),f=n(36),h=n(19),b=n.n(h),g=n(11),y=n.n(g),v=n(35),E={app:{maxWidth:1e3,alignItems:"center",justifyContent:"center",flexDirection:"column"},headerStyle:{background:"#333",color:"#fff",textAlign:"center",padding:"10px"},linkStyle:{color:"#fff",textDecoration:"none"},btnStyle:{background:"#CC0000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},noborder:{borderStyle:"none"},textWhiteCenter:{color:"white",textAlign:"center"}};var k=function(){return a.a.createElement("header",{style:E.headerStyle},a.a.createElement("h1",null,"TodoList"),a.a.createElement(v.a,{style:E.linkStyle,to:"/"},"Home")," | ",a.a.createElement(v.a,{style:E.linkStyle,to:"/about"},"About"))},w=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).getStyle=function(){return{background:"#333",color:"white",padding:"10px",borderRadius:"100px",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,n=e.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",style:E.noborder,onChange:this.props.markComplete.bind(this,t)})," "," ",n,a.a.createElement("button",{onClick:this.props.delTodo.bind(this,t),style:E.btnStyle},a.a.createElement("b",null,"X"))))}}]),t}(o.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map(function(t){return a.a.createElement(w,{key:t.id,todo:t,markComplete:e.props.markComplete,delTodo:e.props.delTodo})})}}]),t}(o.Component),O=n(20),x=(n(17),function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={title:""},n.onSubmit=function(e){e.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n.onChange=function(e){return n.setState(Object(O.a)({},e.target.name,e.target.value))},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"},className:"container"},a.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px",borderRadius:"100px",borderStyle:"none"},placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn round",style:{flex:"1"}}))}}]),t}(o.Component));var S=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{style:E.textWhiteCenter},"About"),a.a.createElement("p",{style:E.textWhiteCenter},a.a.createElement("i",null,"A pwa to-do list developed in React. All of your data will be stored locally.")),a.a.createElement("p",{style:E.textWhiteCenter},a.a.createElement("a",{href:"http://dimitris.greasidis.com/",target:"_blank",rel:"noopener noreferrer",style:{color:"#0EDAE4"}},"Dgreasidis")))},C=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[]},n.initObj=[{id:1,title:"ToDo number 1",completed:!1},{id:2,title:"ToDo number 2",completed:!1},{id:3,title:"ToDo number 3",completed:!1}],n.markComplete=function(e){n.setState({todos:n.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})},function(){return n.saveToLocalForage()})},n.delTodo=function(e){n.setState({todos:Object(l.a)(n.state.todos.filter(function(t){return t.id!==e}))},function(){return n.saveToLocalForage()})},n.addTodo=function(e){var t={title:e,completed:!1,id:b()()};n.setState({todos:[].concat(Object(l.a)(n.state.todos),[t])},function(){return n.saveToLocalForage()})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"initLocalForage",value:function(){var e=this;y.a.getItem("todos").then(function(t){null!=t?e.setState({todos:t}):y.a.setItem("todos",e.initObj).then(function(t){e.setState({todos:t})})})}},{key:"saveToLocalForage",value:function(){y.a.setItem("todos",this.state.todos)}},{key:"componentDidMount",value:function(){this.initLocalForage()}},{key:"render",value:function(){var e=this;return a.a.createElement(m.a,null,a.a.createElement("div",{style:E.app},a.a.createElement("div",{className:"container"},a.a.createElement(k,null),a.a.createElement(f.a,{exact:!0,path:"/",render:function(t){return a.a.createElement(a.a.Fragment,null,a.a.createElement(x,{addTodo:e.addTodo}),a.a.createElement(j,{todos:e.state.todos,markComplete:e.markComplete,delTodo:e.delTodo}))}}),a.a.createElement(f.a,{path:"/about",component:S}))))}}]),t}(o.Component),T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?t&&t.onUpdate&&t.onUpdate(e):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(a.a.createElement(C,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");T?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):A(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){})):A(t,e)})}}()}},[[23,2,1]]]);
//# sourceMappingURL=main.6deadd97.chunk.js.map