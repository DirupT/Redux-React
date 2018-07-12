import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions';

class AddUserForm extends React.Component {
    constructor() {
        super();

        this.state = {
            title: '',
            body: ''
        }
    }

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    addUser = () => {
        const user = { userId: 1, id: 0, title: this.state.title, body: this.state.body }

        if(this.state.title === '' || this.state.body === '') {
            return;
        }

        this.props.addUser(user);
        this.setState({title: '', body: ''});
    }

    render() {
        return (
            <form onSubmit={event => event.preventDefault()}>
                <input onChange={this.handleInput} value={this.state.title} type='text' name='title' placeholder='title' />
                <input onChange={this.handleInput} value={this.state.body} type='text' name='body' placeholder='body' />
                <button onClick={this.addUser}>Add</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, { addUser })(AddUserForm);