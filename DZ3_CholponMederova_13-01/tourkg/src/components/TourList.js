import TourItem from './TourItem';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function TourList() {
	
	const [tours, setTours] = useState([])

	function getData() {
			
			axios.get("https://jsonplaceholder.typicode.com/todos/")
					.then(response => setTours(response.data))
	}

	useEffect(getData, [])

	function items(element, index) {
			return <TourItem key={index} tourName={element.title}/>
	}
	
	return (
			<div className='menu'>
							{tours.map(items)}
			</div>
	)
}