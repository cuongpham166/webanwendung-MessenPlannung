function clickFunction(event){
	//alert("clicked");
	const button = document.getElementById("moreInfo");
	const infoList = document.getElementById("infoList");
	const findInfo = async () =>{
		const res = await fetch('http://127.0.0.1:8080/app/aussteller');
		const states = await res.json();
		console.log(states[0]);
		
		const html = states.map(match => `
			<table>
			   	<tr>
			      	<th>ID</th>
			      	<th>Name</th>
			      	<th>Email</th>
			   	</tr>

			    <tr>
			         <td>${match.id}</td>
			         <td> ${match.Name}</td>
			         <td> ${match.Email}</td>
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

