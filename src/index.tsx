import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById('root');

const render = () => ReactDOM.render(<h1>Hello World! I didn't open by myself</h1>, rootElement);

render();

if (module.hot) {
    module.hot.accept(() => {
        console.log("I'm hot accepted!")
        render()
    })
}
