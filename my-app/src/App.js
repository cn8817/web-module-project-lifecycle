import logo from './logo.svg';
import './App.css';
import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledApp = styled.div`
  img{
    width:50%;
    height:50%;
    padding-top:5%;
  }

  .container{
    display:flex;
    border: 2px solid gray;
    border-radius:10px;
    padding:0;
    margin:0 20%;

  }

  .imgContainer{
    margin-top:3%;
    padding-left:10%;
  }
  
  .infoContainer{
    padding:0 10%;
  }

  .follow{
    display:flex;
    justify-content: space-between;
  }

  p{
    margin-right: 10%;
  }
`

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
          <StyledApp>
            <h1>Usercard</h1>
            <div class ='container'>
                <div class='imgContainer'>
                  <img src ={this.state.avatar}/>
                </div>
                <div class='infoContainer'>
                  <h4>username: {this.state.username}</h4>
                  <div class='follow'>
                    <p>followers: {this.state.followers} </p>
                    <p>following: {this.state.following} </p>
                  </div>
                </div>
            </div>
            </StyledApp>
        )
    }
}

export default App;
