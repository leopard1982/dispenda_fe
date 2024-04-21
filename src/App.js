import logo from './asset/logo.png';
import './App.css';
import Login from './main/login/Login';
// import Dashboard from './main/dashboard/Dashboard';
import MainDashboard from './main/dashboard/MainDashboard';
import {useState, useEffect} from 'react';
import {jwtDecode} from 'jwt-decode';

function App() {
  const [logged,setLogged]=useState(false);
  //const [counter,setCounter]=useState(0); //untuk penanda apakah baru count atau sudah lama
  //sehingga tidak ditampilkan notif lebih dari 1x

//   useEffect(()=>{
// 
//   },logged);
  useEffect(()=>{
    try{
      const x = localStorage.getItem('myinfo');
        console.log(x);
        const jwt_encoded = JSON.parse(x).token;
        const jwt_decoded = jwtDecode(jwt_encoded);
        const mytime = jwt_decoded.exp*1000;
        const mytime_ok = new Date(mytime);
        const time_now = new Date();

        if (mytime_ok>time_now) {
          console.log('valid');
          setLogged(true);
        } else {
          console.log('invalid');
          setLogged(false);
        }
    } catch {
      setLogged(false);
    }
        

  },[logged]);
  

  return (
    <div className="App" style={{height:'100vh'}}>
      {!logged? (<Login setLogged={setLogged} logged={logged}/>) : (<MainDashboard setLogged={setLogged} logged={logged}/>)}
      <div style={{position:'relative',bottom:'20px'}}>
        <p>&copy; 2024 - Dispenda Semarang</p>
      </div>
    </div>
  );
}

export default App;
