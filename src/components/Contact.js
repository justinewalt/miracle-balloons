import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class Contact extends Component {
    default = { firstName: '', lastName: '', email: '', phone: '' };
    state = { ...this.default }; 

    debugger    
    setValue = (e) => {
        let { target: { id, value }} = e;
    }

    render() {
        let { firstName, lastName, email, phone } = this.state;
        return (
            <div>
                <h5>
                    What's your contact information?
                </h5>
                <Form 
                    onSubmit = { e => { 
                        e.preventDefault();
                        this.setState({...this.default});
                    }} 
                >
                    <Form.Field
                        id='firstName'
                        value={firstName}
                        onChange={this.setValue}
                        control='input'
                        placeholder='First Name'
                    />    
                    <Form.Field
                        id = 'lastName'
                        value = { lastName }
                        onChange = { this.setValue }
                        control = 'input'
                        placeholder = 'Last Name'
                    />
                    <Form.Field
                        id = 'email'
                        value = { email }
                        onChange = { this.setValue }
                        control = 'input'
                        type = 'email'
                        placeholder = 'Email'
                    />
                    <Form.Field
                        id = 'phone'
                        value = { phone }
                        onChange = { this.setValue }
                        control = 'input'
                        type = 'number'
                        placeholder = 'Phone Number'
                    />
                    <Form.Button>Save</Form.Button>
                </Form>
            </div>
        )       
    }
}

export default Contact;