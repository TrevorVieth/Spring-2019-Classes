        


        // var root = document.getElementById('root');

        // // var Car = 
        // // {
        // //     Make: "Ford",
        // //     Motor: 
        //         {
        // //         cylinders: "4 cylinder",
        // //         displacment: "38-liter",
        // //         horsepower: 350
        //         }

        // // }

        // const ToDoList = (Props) =>  
        // {
        //     React.createElement('ul', {}, 
        //         [
        //             React.createElement('li', {}, "First thing"),
        //             React.createElement('li', {}, "Second thing")
        //         ]
        //     );
        // };

        // var jsxcontent = (
        //     <ul>
        //         <li className="text-danger">First thing</li>
        //         <li className="text-warning">Second thing</li>
        //     </ul>
        // );
        // ReactDOM.createElement(
        //     1. What html element do you want to make?)
        //     2. Are there any attribute/properties you need to pass so that I can configure this new element?
        //     3. What content shall I place into this element? OR
        //     4. Children

        // ReactDOM.render(jsxcontent, root);

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// class ToDoList extends React.Component{
//     render(){
//         React.createElement('ul', {}, 
//             [
//                 React.createElement('li', {}, "First thing"),
//                 React.createElement('li', {}, "Second thing")
//             ]
//         );
//     }
// }

// export default ToDoList;

        // const ToDoList = (Props) =>  
        // {
        //     React.createElement('ul', {}, 
        //         [
        //             React.createElement('li', {}, "First thing"),
        //             React.createElement('li', {}, "Second thing")
        //         ]
        //     );
        // };

        const ToDoList = (props) => {
            return React.createElement('ul', {}, [
                    React.createElement('li', 
                                        {
                                            className: "text-danger"
                                        }, 
                                        props.itemone),
                    React.createElement('li', 
                                        {
                                            className: "text-warning"
                                        }, 
                                        props.itemtwo),
                    React.createElement('li', 
                                        {
                                            className: "text-primary"
                                        }, 
                                        props.itemthree)
                ]
            );
        };