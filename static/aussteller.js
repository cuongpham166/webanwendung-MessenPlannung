function clickFunction1(event){
	//alert("clicked");
	const button = document.getElementById("idShow_einteilung_aussteller");
	const infoList = document.getElementById("Panel2");
	const findInfo = async () =>{
		const res = await fetch('http://127.0.0.1:8080/app/einteilen');

		const states = await res.json();
		console.log(states[0]);
		
		const html = states.map(match => `
			<table>
				<tr>
		            <th>Halle-ID</th>
		            <th>Ausstellung-ID</th>
		            <th>Position</th>
		            <th>Status</th>
		        </tr>
				<tr>
					<td>${match.HalleID}</td>
		        	<td>${match.AusstellungID}</td>
					<td>${match.Position}</td>
					<td>${match.Status}</td>
				</tr>	
			</table>
				   
    	`).join('');

    	infoList.innerHTML = html;
    	if (infoList.style.display == "none"){
    		infoList.style.display = "block";
    	}else{
    		infoList.style.display = "none";
    	}
	}
	button.addEventListener('click', () => findInfo())
	event.stopPropagation();
    event.preventDefault();	
}