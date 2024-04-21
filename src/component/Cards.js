import './Cards.css';

const Cards = (props) => {
	return(
		<div className="bordernya" >
			<h5>Jumlah {props.judul}</h5>
			<h2>{props.jumlah}</h2>
			<button type="button" id="tombolview">Detail</button>
		</div>
	)
};

export default Cards;