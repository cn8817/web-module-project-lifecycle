import logo from './logo.svg';
import './App.css';
import React from 'react'
import axios from 'axios'

class App extends React.Component {
    state ={
        username: '',
        avatar: '',
        followers: '',
        following: '',
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/cn8817')
            .then(res => {
                this.setState({
                    ...this.state,
                    username:res.data.login,
                    avatar:res.data.avatar_url,
                    followers:res.data.followers,
                    following:res.data.following,
                })
                console.log(this.state)
            })
    }
    render() {
        return(
            <div>
                <h1>Usercard</h1>
                <h3>username: {this.state.username}</h3>
                <img src ={this.state.avatar}/>
                <p>followers: {this.state.followers}</p>
                <p>following: {this.state.following}</p>
            </div>
        )
    }
}

export default App;
