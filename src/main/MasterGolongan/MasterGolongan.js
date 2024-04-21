import './MasterGolongan.css';

const MasterPegawai = () => {
	function myFunction() {
	  var x = document.getElementById("myTopnav");
	  if (x.className === "topnav") {
	    x.className += " responsive";
	  } else {
	    x.className = "topnav";
	  }
	}
	return (
		<>
			<div class="topnav" style={{display:'flex',justifyContent:'space-between'}} id="myTopnav">
			  <a href="#home" className="active">Master Golongan</a>
			  <a href="#news">Melihat Daftar</a>
			  <a href="#contact">Menambahkan</a>
			  <input type="text" style={{borderRadius:'10px',width:'50%',height:'30px',marginRight:'20px',fontStyle:'italic',backgroundColor:'whitesmoke'}} placeholder="search golongan"/>
			  <a href="javascript:void(0);" className="icon" onClick={myFunction}>
			    <i class="fa fa-bars"></i>
			  </a>
			</div>

			<div style={{paddingLeft:'16px'}}>
			  <h2>Responsive Topnav Example</h2>
			  <p>Resize the browser window to see how it works.</p>
			</div>
		</>
	)
};

export default MasterPegawai;
