(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(5),r=a.n(c),s=a(6),i=a(2),u=a(15),o=Object(n.createContext)(),m=function(e){var t=JSON.parse(localStorage.getItem("tasks"))||[],a=Object(n.useState)(t),c=Object(i.a)(a,2),r=c[0],m=c[1];Object(n.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(r))}),[r]);var d=Object(n.useState)(null),f=Object(i.a)(d,2),E=f[0],b=f[1];return l.a.createElement(o.Provider,{value:{tasks:r,addTask:function(e){m([].concat(Object(s.a)(r),[{title:e,id:u.a.v4}]))},removeTask:function(e){m(r.filter((function(t){return t.id!==e})))},removeAllTask:function(){m([])},findItem:function(e){var t=r.find((function(t){return t.id===e}));b(t)},editTask:function(e,t){var a=r.map((function(a){return a.id===t?{title:e,id:t}:a}));m(a)},editItem:E}},e.children)},d=function(e){var t=e.task,a=Object(n.useContext)(o),c=a.removeTask,r=a.findItem;return l.a.createElement("li",{className:"list-item"},l.a.createElement("span",null,t.title," "),l.a.createElement("div",null,l.a.createElement("button",{className:"btn-delete task-btn",onClick:function(){return c(t.id)}},l.a.createElement("i",{className:"fas fa-trash-alt"})),l.a.createElement("button",{className:"btn-edit task-btn",onClick:function(){return r(t.id)}},l.a.createElement("i",{className:"fas fa-pen"}))))},f=function(){var e=Object(n.useContext)(o).tasks;return l.a.createElement("div",null,e.length?l.a.createElement("ul",{className:"list"},e.map((function(e){return l.a.createElement(d,{task:e,key:e.id})}))):l.a.createElement("div",{className:"no-tasks"}," No task At the Moment!"))},E=(a(12),function(){var e=Object(n.useContext)(o),t=e.addTask,a=e.removeAllTask,c=e.editItem,r=e.editTask,s=Object(n.useState)(""),u=Object(i.a)(s,2),m=u[0],d=u[1];return Object(n.useEffect)((function(){c?(d(c.title),console.log(c)):d("")}),[c]),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c?r(m,c.id):(t(m),d(""))},className:"form"},l.a.createElement("input",{type:"text",placeholder:"Add Task...",value:m,onChange:function(e){d(e.target.value)},required:!0,className:"task-input"}),l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{type:"submit",className:"btn add-task-btn"},c?"Edit Task":"Add Task"),l.a.createElement("button",{className:"btn clear-btn",onClick:a},"Clear")))}),b=function(){return l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"Task Manager"))},k=function(){return l.a.createElement(m,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"app-wrapper"},l.a.createElement(b,null),l.a.createElement("div",{className:"main"},l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(f,null))))))};r.a.render(l.a.createElement(k,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.8fdd64b5.chunk.js.map