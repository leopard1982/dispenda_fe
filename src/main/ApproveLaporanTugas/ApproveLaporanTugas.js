import './ApproveLaporanTugas.css';

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
			<div class="topnav" id="myTopnav">
			  <a href="#home" className="active">Persetujuan Laporan Tugas</a>
			  <a href="#news">News</a>
			  <a href="#contact">Contact</a>
			  <a href="#about">About</a>
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
