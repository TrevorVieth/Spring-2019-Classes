// // import React from "react";

// var root = document.getElementById('root');

// var thingy = React.createElement('div', null, React.createElement('ToDoList',{}, ));



// ReactDOM.render(thingy, root);

var root = document.getElementById('root');

const App = () => {
    return React.createElement('div', {}, [
        // React.createElement('h1', null, "To Do List"),
        // React.createElement(ToDoList, {
        //     itemone: "brush up on React",
        //     itemtwo: "practice more git commands",
        //     itemthree: "learn more JavaScript"
        // }),
        React.createElement(FormInput, {}),
    ]);
};

ReactDOM.render(React.createElement(App), root);