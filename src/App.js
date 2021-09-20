import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
};

















/* function Countries(){
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response=> response.json())
    .then(data=>setCountries(data))
  },[]);
  return(
    <div>
      <h2> Travelling round the world</h2>
      <h4>Number of countries {countries.length}</h4>
     <div className='grid-display'>
     {
        countries.map(country => {
          const{name,capital}=country;
          return <DisplayCountry name={name} capital={capital}></DisplayCountry>
        })
      }
     </div>
    </div>
  )
};
function DisplayCountry(props){
  const {name,capital}=props;
  return(
    <div>
      <h3>Country Name : {name}</h3>
      <p>Capital : {capital}</p>
    </div>
  )
} */

export default App;
