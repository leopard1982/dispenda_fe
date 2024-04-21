import './MembuatSuratTugas.css';
import Select from 'react-select';
import {useState,useEffect} from 'react';

const MasterPegawai = () => {
	function myFunction() {
	  var x = document.getElementById("myTopnav");
	  if (x.className === "topnav") {
	    x.className += " responsive";
	  } else {
	    x.className = "topnav";
	  }
	}

	const [data,setData] = useState([])
	let realdata=[];

	useEffect(()=>{
		realdata=data;
		console.log(realdata);
	},[data]);

	const mydata = [
		{value:'satu',label:'Peraturan Pemerintah nomorPeraturan Pemerintah nomorPeraturan Pemerintah nomorPeraturan Pemerintah nomor 1234'},
		{value:'dua',label:'Peraturan Pemerintah nomor 45646Peraturan Pemerintah nomorPeraturan Pemerintah nomorPeraturan Pemerintah nomor'},
		{value:'tiga',label:'Peraturan Pemerintah nomor 634535Peraturan Pemerintah nomorPeraturan Pemerintah nomorPeraturan Pemerintah nomor'},
		{value:'empat',label:'Peraturan Pemerintah nomor 99279234994Peraturan Pemerintah nomorPeraturan Pemerintah nomorPeraturan Pemerintah nomor'},
		]
	
	return (
		<>
			<div class="topnav" id="myTopnav">
			  <a href="#home" className="active">Membuat Surat Tugas</a>
			  <a href="#news">News</a>
			  <a href="#contact">Contact</a>
			  <a href="#about">About</a>
			  <a href="javascript:void(0);" className="icon" onClick={myFunction}>
			    <i class="fa fa-bars"></i>
			  </a>
			</div>

			<div style={{overflow:'auto',flexWrap:'wrap',width:'100%',height:'80vh'}}>
				<div style={{padding:'10px',backgroundColor:'lightgrey'}}><span className="badge" style={{backgroundColor:'blue'}}>step 1</span> - Mengisi Detail Surat Tugas</div>
				<table>
					<tr>
						<td>Nomor Surat:</td>
						<td><input type="text" style={{backgrondColor:'whitesmoke',border:'1px solid grey',borderRadius:'5px'}}></input></td>
					</tr>
					<tr>
						<td style={{minWidth:'100px',height:'50px'}}>Dasar Surat Tugas:</td>
						<td style={{height:'50px'}}><Select onChange={(e)=>setData(e)}  id="myselect" options={mydata} isMulti closeMenuOnSelect={false} style={{borderRadius:''}}/></td>
					</tr>
				</table>				
			</div>
		</>
	)
};

export default MasterPegawai;
