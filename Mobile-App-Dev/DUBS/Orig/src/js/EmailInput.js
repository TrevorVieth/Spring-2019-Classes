class EmailInput extends React.Component {

    //constructor
    constructor(props){
        super(props);

        this.state = {
            email: ''
        }

        this.onEmailChange = this.onEmailChange.bind(this);
    }

    onEmailChange(event) {
        var email = event.target.value;

        //this is lifting the state value to the parent
        this.props.onEmailInputChange(email);

        this.setState( () => {
                return {
                    email
                }
            }
        );
    };

    render() {
        return (
            <div className="form-group">
                <p>Test message: {this.props.test}</p>
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input 
                    aria-describedby="emailHelp" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    onChange={this.onEmailChange}
                    placeholder="Enter email"
                    type="email"
                    value={this.state.email}  />
            </div>
        );
    };
}



