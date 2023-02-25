// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste React";
// const root = document.getElementById("root");
// root.appendChild(heading);
const heading1 = React.createElement("h1", {id:"heading1"}, "Heading 1");
const heading2 = React.createElement("h2",{id:"heading2"}, "Heading 2");
const container = React.createElement("div",{}, [heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
