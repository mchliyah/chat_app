import './App.css';
import axios from 'axios'
import React from 'react';


class App extends React.Component {
  state = {details:[],}

  componentDidMount(){
    let data;
    axios.get('http://localhost:8000/test')
      .then(res => {
        data = res.data;
        this.setState({
          details:data
        });
      })
      .catch(err => { })
  }
  render () {
    return(
      <div>
        <header>data geted from django </header>
        <hr></hr>
        {this.state.details.map((outtput, id) => (
          <div key={id}>
            <div>
            <h1>{outtput.name}</h1>
            <h2>{outtput.email}</h2>
          </div>
          </div>
        ))}
      </div>
    );
  }
}

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch('http://localhost:8000')
//       .then(res => res.json())
//       .then(data => setData(data.data));
//   })

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>An Awesome Blog </h1>
//         <h3>this is just a test i will show data from </h3>

//         <p>{data}</p>
//       </header>
//     </div>
//   );
// }

export default App;