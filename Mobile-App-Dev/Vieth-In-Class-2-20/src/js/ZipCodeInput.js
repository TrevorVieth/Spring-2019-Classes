class ZipCodeInput extends React.Component {

    //constructor
    constructor(props){
        super(props);
        this.state = {delivery_zipcode: ''}; 

        this.handleZipcodeChange = this.handleZipcodeChange.bind(this);

    }

    handleZipcodeChange(event){
        const delivery_zipcode = event.target.value;
        this.props.onZipChange( () => {
            // this.setState( () => {        
                return {
                    delivery_zipcode
                }
            }
        );

        const zip = this.props.delivery_zipcode;
        // const zip = this.state.delivery_zipcode;
    }

    render() {
        return (
            <div className="form-group">
                <p>{this.props.specialcode}</p>
                <input className="form-control" 
                       id="zipcodeInput" 
                       onChange={this.handleZipcodeChange}                       
                       placeholder="Delivery zip code" 
                       type="input"
                       value={this.props.delivery_zipcode}  />
                       {/* value={this.state.delivery_zipcode}  /> */}
            </div>
        );
    };
}



// =========================================================================================================



class EmailInput extends React.Component {

    //constructor
    constructor(props){
        super(props);
        this.state = {delivery_email: ''}; 

        this.handleEmailChange = this.handleEmailChange.bind(this);

    }

    handleEmailChange(event){
        const delivery_email = event.target.value;
        this.props.onEmailChange( () => {
        // this.setState( () => {
                return {
                    delivery_email
                }
            }
        );

        const zip = this.props.delivery_email;
        // const zip = this.state.delivery_email;
    }

    render() {
        return (
            <div className="form-group">
                <p>{this.props.specialcode}</p>
                <input className="form-control" 
                       id="emailInput" 
                       onChange={this.handleEmailChange}
                       placeholder="Your email address" 
                       type="input"
                       value={this.props.delivery_email}  />
                       {/* value={this.state.delivery_email}  /> */}

            </div>
        );
    };
}

class SubmitButton extends React.Component {

    //constructor
    constructor(props){
        super(props);
        this.state = {delivery_email: ''}; 

        this.handleEmailChange = this.handleEmailChange.bind(this);

    }

    handleButtonChange(event){
        const delivery_email = event.target.value;
        this.props.onEmailChange( () => {
        // this.setState( () => {
                return {
                    delivery_email
                }
            }
        );

        const zip = this.props.delivery_email;
        // const zip = this.state.delivery_email;
    }

    render() {
        return (
            <div className="form-group">
                <p>{this.props.specialcode}</p>
                <input className="form-control" 
                       id="emailInput" 
                       onChange={this.handleEmailChange}
                       placeholder="Your email address" 
                       type="input"
                       value={this.props.delivery_email}  />
                       {/* value={this.state.delivery_email}  /> */}

            </div>
        );
    };
}

