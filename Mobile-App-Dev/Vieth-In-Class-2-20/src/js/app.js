import Button from "./Button";

class AppComponent extends React.Component {

    //constructor
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="container">
                {/* <ZipCodeInput specialcode="okay" /> */}
                <ZipCodeInput />
                <EmailInput />
                <Button  />
            </div>
        );
    };
}



var root = document.getElementById('root');
// ReactDOM.render(React.createElement(AppComponent), root);
ReactDOM.render(<AppComponent />, root);