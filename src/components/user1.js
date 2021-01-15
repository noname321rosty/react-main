import React from 'react';

export default class User extends React.Component {

    state = {
        user : null
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(response => response.json())
            .then(user => this.setState({user}))
    }

    render() {
        // console.log(this.props)
        const {user} = this.state
        return (
            <div>
                {
                    user && (<div>

                        <p>{user.name} - {user.username}</p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                        <p>address - {user.address.street}</p>
                        <p>city - {user.address.city}</p>
                        <button onClick={() => this.props.history.replace(`/users`)}>go back</button>
                        </div>)
                }
            </div>
        )
    }
}
