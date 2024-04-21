import {useState,useEffect} from 'react';
import './MainDashboard.css';
import {jwtDecode} from 'jwt-decode';
import MasterPegawai from '../MasterPegawai/MasterPegawai';
import MasterDasarTugas from '../MasterDasarTugas/MasterDasarTugas';
import MasterJabatan from '../MasterJabatan/MasterJabatan';
import MasterGolongan from '../MasterGolongan/MasterGolongan';
import ApproveLaporanTugas from '../ApproveLaporanTugas/ApproveLaporanTugas';
import ApproveMasterData from '../ApproveMasterData/ApproveMasterData';
import ApproveSuratTugas from '../ApproveSuratTugas/ApproveSuratTugas';
import BuatLaporanTugas from '../BuatLaporanTugas/BuatLaporanTugas';
import BuatSuratTugas from '../BuatSuratTugas/MembuatSuratTugas';
import UserManagement from '../UserManagement/UserManagement';
import Dashboard from './Dashboard';
import Logo from '../../asset/logo.png';

const MainDashboard = (props) => {

// 	useEffect(()=> {
// 		  
// 	});
	const [count,setCount] = useState(0);
	const [username,setUsername] = useState('');
	const [isSuperuser,setIsSuperuser] = useState(false);
	const [desc,setDesc] = useState('');
	const [lastlogin,setLastlogin] =useState('');
	const [menu,setMenu] = useState('dashboard');

	useEffect(()=>{
		setTimeout(()=>{
			  const x = localStorage.getItem('myinfo');
			  
			  try {
				  if(x!=null) {
				  	  setCount(count+1);
	 				  // console.log(x);
				      const jwt_encoded = JSON.parse(x).token;
				      const jwt_decoded = jwtDecode(jwt_encoded);
				      const mytime = jwt_decoded.exp*1000;
				      const mytime_ok = new Date(mytime);
				      const issued = new Date(jwt_decoded.iat*1000);
				      const day = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];

				      // console.log(jwt_decoded);
				      // console.log(issued);

				      setUsername(jwt_decoded.token[0].username);
				      setIsSuperuser(jwt_decoded.token[0].is_superuser);
				      setDesc(jwt_decoded.token[0].desc);
				      setLastlogin(day[issued.getDay()] + ", " + issued.getDate().toString() + "/" + issued.getMonth().toString() + "/" + issued.getFullYear().toString() + " " + issued.getHours().toString() + ":" + issued.getMinutes().toString() + ":" + issued.getSeconds().toString());
				      

				      if (mytime_ok>new Date()) {
				        // console.log('valid');
				        props.setLogged(true);
				      } else {
				        // console.log('invalid');
				        props.setLogged(false);

				      }
				  }			  	
				} catch {
					props.setLogged(false);
				}

		},10);


	},[count]);

	const logoutme = () => {
		props.setLogged(false);
		localStorage.removeItem('myinfo')
	};



	return (
	<>
		<div id="nav-bar">
		  <input id="nav-toggle"  type="checkbox"/>
		  <div id="nav-header" style={{display:'flex',justifyContent:'center'}}><a id="nav-title" onClick={()=>setMenu('dashboard')} target="_blank"><img src={Logo} style={{height:'40px',width:'35px'}}/> DISPENDA SEMARANG</a>
		    <label htmlFor="nav-toggle"  data-bs-toggle="collapse"><span id="nav-toggle-burger"></span></label>
		    <hr/>
		  </div>
		  <div id="nav-content">
		    <div className="nav-button"  onClick={()=>setMenu('master_golongan')}><i className="fas fa-thumbtack"></i><span>Master Golongan</span></div>
		    <div className="nav-button" onClick={()=>setMenu('master_jabatan')}><i className="fas fa-palette" ></i><span>Master Jabatan</span></div>
		    <div className="nav-button" onClick={()=>setMenu('master_pegawai')}><i className="fas fa-images" ></i><span>Master Pegawai</span></div>
		    <div className="nav-button" onClick={()=>setMenu('master_dasar_st')}><i className="fas fa-images"></i><span>Master Dasar Surat Tugas</span></div>
		    
		    <hr/>
		    <div className="nav-button"  onClick={()=>setMenu('buat_st')}><i className="fas fa-heart" ></i><span>Surat Tugas</span></div>
		    <div className="nav-button" onClick={()=>setMenu('buat_lap')}><i className="fas fa-fire" ></i><span>Laporan Tugas</span></div>
		    <hr/>
   		    <div className="nav-button"  onClick={()=>setMenu('create_user')}><i className="fas fa-magic" ></i><span>Pengaturan User</span></div>
			<div className="nav-button"  onClick={logoutme}><i className="fas fa-magic" ></i><span>Logout</span></div>		    
		    <div id="nav-content-highlight"></div>
		  </div>
		  <input id="nav-footer-toggle" type="checkbox"/>
		  <div id="nav-footer">
		    <div id="nav-footer-heading">
		      <div id="nav-footer-avatar"><img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547"/></div>
		      <div id="nav-footer-titlebox">
		      	<a id="nav-footer-title" href="" target="_blank">{username.toUpperCase()}</a>
		      	<span id="nav-footer-subtitle">{isSuperuser?(<span style={{fontSize:'10px'}}>Administrator</span>):(<span style={{fontSize:'10px'}}>User</span>)}</span>
		      	
		      </div>
		      <label htmlFor="nav-footer-toggle"><i className="fas fa-caret-up"></i></label>
		    </div>
		    <div id="nav-footer-content">
		      
		      <p style={{fontStyle:'italic',fontSize:'15px'}}>"{desc}"</p>
		      <p style={{fontSize:'10px',fontWeight:'bold'}}>Last Login: {lastlogin}</p>

		    </div>
		  </div>
		</div>
		<div style={{marginLeft:'110px',marginRight:'20px',marginTop:'20px',height:'94vh',backgroundColor:'whitesmoke',borderRadius:'5px'}}>
			{menu==="master_pegawai" && <MasterPegawai/>}
			{menu==="master_golongan" && <MasterGolongan/>}
			{menu==="master_jabatan" && <MasterJabatan/>}
			{menu==="master_dasar_st" && <MasterDasarTugas/>}
			{menu==="buat_st" && <BuatSuratTugas/>}
			{menu==="buat_lap" && <BuatLaporanTugas/>}
			{menu==="create_user" && <UserManagement/>}
			{menu==="dashboard" && <Dashboard/>}
			
		</div>

	</>
	)
};

export default MainDashboard;