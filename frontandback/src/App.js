import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: '',
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

  delete = (id) => {
    axios.delete(`http://localhost:3000/api/users/${id}`)
    .then(res => {
      debugger
      this.setState({
        data: res.data.result,
      })
    })
    .catch(err => console.log(err))
  };

  update = (id) => {
    axios.put(`http://localhost:3000/api/users/${id}`)
    .then(res => {
      this.setState({
        data: res.data.result,
      })
    })
    .catch(err => console.log(err))
  };

  post = () => {
// const new = {
// }

    axios.post('http://localhost:3000/api/users')
    .then(res => {
      this.setState({
        data: res.data.result,
      })
    })
    .catch(err => console.log(err))
  };
  
  render() { 
    if(this.state.data){
      return <div> 
      {this.state.data.map(item => {
        return <div>
          <div>{item.name}</div>
        <div>{item.bio}</div>
        <button onClick={() => this.delete(item.id)}>X</button>
        <button onClick={() => this.update(item.id)}>update</button>
        </div>
      })}
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
