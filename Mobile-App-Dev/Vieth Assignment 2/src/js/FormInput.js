/*
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
  </div>
*/
const divStyle = {
    color: 'blue',
    // backgroundImage: 'url(' + imgUrl + ')',
  };
const FormInput = (props) => {
    return React.createElement('div', {className: "form-group"}, 
        [
            React.createElement('label', 
                                {
                                    htmlFor: "exampleInputEmail1",
                                    class: "font-weight-bold",
                                    // class: "text-right"
                                    // class: "mx-auto"
                                }, 
                                "Email address"
            ),
            React.createElement('input', 
                                {
                                    className: "form-control",
                                    type: "email",
                                    id: "exampleInputEmail1",
                                    placeholder: "Enter email",
                                    // style: "textAlign: 'center'"
                                },
            ),
            React.createElement("br"),                        
            // ------------------------------------------------------------------------------
            React.createElement('label', 
                                {
                                    htmlFor: "exampleInputZip-Code1",
                                    class: "font-weight-bold",
                                    // class: "mx-auto"
                                }, 
                                "Zip-Code"
            ),
            React.createElement('input', 
                                {
                                    className: "form-control",
                                    type: "Zip-Code",
                                    id: "exampleInputZip-Code1",
                                    placeholder: "Enter Zip-Code"
                                    
                                },
            ),

            React.createElement("br"),

            // React.createElement(
            //     "button", null, "Click Me")
            React.createElement("button",
                                {
                                    id:"Button1",
                                    class: "btn btn-success btn-lg btn-block"
                                
                                }, 
                                "Submit")
        ]
        
    );
};
