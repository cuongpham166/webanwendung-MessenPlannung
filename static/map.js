function selectHalle(){
	var selectHalle = document.getElementById("selectHalle");
	var halleID = selectHalle.value;
	//alert(halleID);
	return halleID;
}

function showMap (){
	const buttonMap = document.getElementById("showMap1");
	const map = document.getElementById("Map");
	const container =document.querySelector(".container");
	var halleId = selectHalle()
	//alert("HalleID" + halleId);
	fetch('http://127.0.0.1:8080/app/plan',{
		method: "GET"
	}).then(function(response){
		return response.text();
	}).then(function(text){
		var obj = JSON.parse(text);
		//console.log(obj[parseInt(halleId)-1]["Ausstellung"][0]);
		console.log(obj[parseInt(halleId)-1]["Ausstellung"].length);

		obj[parseInt(halleId)-1]["Ausstellung"].forEach(function(element){
			console.log(element["Position"]);
			var newDiv = document.createElement("div");
			newDiv.setAttribute("class", "ausstellung1");
			newDiv.setAttribute("style", "grid-area:"+ element["Position"]);
			newDiv.innerHTML = "Fläche" + element["id"];
			container.appendChild(newDiv);

			var newButton = document.createElement("button");
			newButton.innerHTML ="More Info";
			newButton.setAttribute("onclick","moreInfo("+element["AusstellerID"]+")");
			newDiv.appendChild(newButton);

			var newInput = document.createElement("input");
			newInput.setAttribute("hidden",true);
			newInput.setAttribute("value",element["AusstellerID"]);
			newInput.setAttribute("class","ausstellerID");
			newInput.setAttribute("onchange","showAussteller("+element["AusstellerID"]+")");
			newDiv.appendChild(newInput);
		})
		//alert(obj[0]["HalleID"]);
		var div1 = document.createElement("div");
		div1.setAttribute("class","name");
		div1.setAttribute("style","grid-area: CA");
		div1.innerHTML = "Halle" +" "+ halleId;
		container.appendChild(div1);

		var div2 = document.createElement("div");
		div2.setAttribute("class","name");
		div2.setAttribute("style","grid-area: AC");
		div2.innerHTML = "Halle" +" "+ halleId;
		container.appendChild(div2);
	})
		
	
}

function moreInfo(value1){
	//var ausstellerId = showAussteller()
	//alert(value1);
	//console.log(typeof(value1));
	const infoList = document.getElementById("infoList");

	fetch('http://127.0.0.1:8080/app/aussteller',{
		method: "GET"
	}).then(function(response){
		return response.text();
	}).then(function(text){
		var object = JSON.parse(text);
		console.log(object);
		var object1 = object[(parseInt(value1)-1)];
		console.log(object1);
		
		var id_Aussteller = document.getElementById("id_Austeller");
		var name_Aussteller = document.getElementById("name_Aussteller");
		var firma_Aussteller = document.getElementById("firma_Aussteller");
		var email_Aussteller = document.getElementById("email_Aussteller");
		var ort_Aussteller = document.getElementById("ort_Aussteller");

		id_Austeller.innerHTML = object1["id"];
		name_Aussteller.innerHTML = object1["Name"];
		firma_Aussteller.innerHTML = object1["Firma"];
		email_Aussteller.innerHTML = object1["Email"];
		ort_Aussteller.innerHTML = object1["Ort"];
	});

}