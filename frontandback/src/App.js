import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      name: '',
      bio: '',
    }
  }

  componentDidMount = () => {
    axios.get('http://localhost:3000/api/users')
      .then(res => {
        this.setState({
          data: res.data.result
        })
      })
      .catch(err => console.log(err))
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  delete = (id) => {
    axios.delete(`http://localhost:3000/api/users/${id}`)
      .then(res => {
        return axios.get('http://localhost:3000/api/users')
          .then(res => {
            this.setState({
              data: res.data.result,
            });
          });
      })
      .catch(err => console.log(err))
  };

  update = (id) => {
    const newPerson = {
      "name": this.state.name,
      "bio": this.state.bio,
      "created_at": "2019-02-11 14:07:31",
      "updated_at": "2019-02-11 14:07:31",
    };

    axios.put(`http://localhost:3000/api/users/${id}`, newPerson)
      .then(res => {
        return axios.get('http://localhost:3000/api/users')
          .then(res => {
            this.setState({
              data: res.data.result,
            });
          });
      })
      .catch(err => console.log(err))

    this.setState({
      name: '',
      bio: '',
    });
  };

  post = () => {
    const newPerson = {
      "name": this.state.name,
      "bio": this.state.bio,
      "created_at": "2019-02-11 14:07:31",
      "updated_at": "2019-02-11 14:07:31",
    };

    axios.post('http://localhost:3000/api/users', newPerson)
      .then(res => {
        return axios.get('http://localhost:3000/api/users')
          .then(res => {
            this.setState({
              data: res.data.result,
            });
          });
      })
      .catch(err => console.log(err))

    this.setState({
      name: '',
      bio: '',
    });
  };

  render() {
    if (this.state.data) {
      return <div>
        {this.state.data.map(item => {
          return <div>
            <div>{item.name}</div>
            <div>{item.bio}</div>
            <button onClick={() => this.delete(item.id)}>X</button>
            <button onClick={() => this.update(item.id)}>update</button>
          </div>
        })}
        <input name="name" value={this.state.name} placeholder="name" onChange={this.changeHandler} />
        <input name="bio" value={this.state.bio} placeholder="bio" onChange={this.changeHandler} />
        <button onClick={this.post}>add</button>
      </div>
    }
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
