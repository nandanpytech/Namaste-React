//Nested element:
const a=React.createElement("div",{},            //Here it created its object not div tag...
React.createElement("h1",{},"hello Nandan")
)
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(a)