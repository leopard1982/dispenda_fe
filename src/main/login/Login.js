import './Login.css';
import axios from 'axios';

const Login = (props) => {
    const submitkan= (e)=> {
        e.preventDefault();
        props.setLogged(true);
        const username= e.target.username.value;
        const password= e.target.password.value;
        axios.post(
                'http://192.168.1.50/get/jwt/',
                {
                    'username':username,
                    'password':password
                }
            )
            .then(
                (response) => {
                    localStorage.setItem('myinfo',JSON.stringify(response.data));
                    props.setLogged(true);
                    console.log("oke");
                }
            )
            .catch(
                (error) => {
                    localStorage.removeItem('myinfo');
                    props.setLogged(false);
                    alert('error connection');
                }
            )
        
    };

    return(
        <>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>

            <form onSubmit={submitkan} >
                <img alt="" src={require('../../asset/logo.png')} style={{width:'50px'}}></img>
                <h4 style={{fontSize:'30px'}}>DISPENDA SEMARANG</h4>

                <label htmlFor="username">Username:</label>
                <input type="text" placeholder="Username" id="username" autoComplete="off"/>

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" autoComplete="off"/>

                <button type="submit">Log In</button>
               
                <p style={{marginTop:'10px'}}>&copy; 2024 - Dispenda Semarang</p>
               
            </form>
        </>
    )
}

export default Login;