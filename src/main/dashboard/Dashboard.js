import './Dashboard.css';
// import './MainPage.css';
import Cards from '../../component/Cards';
import {useEffect, useState} from 'react';
import Logo from '../../asset/logo.png';

const Dashboard = () => {
   return(
      <>
         <div style={{padding:'20px',borderRadius:'5px',backgroundColor:'rgb(200,200,250)'}}>
            <h3 style={{fontWeight:'bold'}}>Dashboard Tasklist</h3>
         </div>
         <div style={{width:'inherit',height:'400px',display:'flex',justifyContent:'center',padding:'10px',flexWrap:'wrap',overflow:'auto'}}>
            <Cards judul={'Surat Tugas'} jumlah={'20'}/>
            <Cards judul={'Laporan Tugas'} jumlah={'20'}/>
            <Cards judul={'Approval Surat Tugas'} jumlah={'20'}/>
            <Cards judul={'Approval Laporan Tugas'} jumlah={'20'}/>
            <Cards judul={'Approval Perubahan Master Data'} jumlah={'20'}/>
            <Cards judul={'Jumlah User'} jumlah={'20'}/>
            <Cards judul={'Jumlah Pegawai'} jumlah={'20'}/>
         </div>
      </>
	)
};

export default Dashboard;