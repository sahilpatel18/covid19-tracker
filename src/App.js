import React from "react";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import styles from "./App.module.css";

import { fetchData } from './api/index';

class App extends React.Component{
  state = {
    data: {},
  }
  async componentDidMount(){
    const fetchedData = await fetchData()
    this.setState({data: fetchedData})
  }

 render(){
   const {data} = this.state
    return (
      <div>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}


// const App = () => {
// const [data, setData] = useState([])

//   const url = `https://covid19.mathdro.id/api`;
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(url);
//       setData(response.data)
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   console.log(data)

//   return (
//     <div>
//       <Cards />
//       <CountryPicker />
//       <Chart />
//     </div>
//   );
// };

export default App;