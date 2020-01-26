function mySelect(val){
  const select = document.getElementById("select");
  const auswahl = select.value;
  var url;
  if (auswahl == "Halle"){
    url = 'http://127.0.0.1:8080/app/halle';
  }else if (auswahl == "Ausstellung"){
    url = 'http://127.0.0.1:8080/app/ausstellung';
  }else if (auswahl == "Aussteller"){
    url = 'http://127.0.0.1:8080/app/aussteller';
  }
  return url;
};

function search(){
const search = document.getElementById("search");
const matchList = document.getElementById("match-list");
var url = mySelect();
const searchStates = async searchText =>{
  //const res = await fetch('http://127.0.0.1:8080/app/ausstellung');
  const res = await fetch(url);
  const states = await res.json();
  //console.log(states);
  let matches = states.filter(state => {
    const regex = new RegExp (`^${searchText}`, 'gi');
    return state.Name.match(regex);
  });
  if (searchText.length === 0 ){
    matches = [];
    matchList.innerHTML = '';
  }

  outputHtml(matches);
};

const outputHtml = matches =>{
  if(matches.length > 0 ){

    if (url == 'http://127.0.0.1:8080/app/halle' || url == 'http://127.0.0.1:8080/app/ausstellung'){
      const html = matches.map(match => `
      <div>  
        <h4> ${match.id}:  ${match.Name} </h4>
      </div>
      `).join('');
    //console.log(html);
      matchList.innerHTML = html;
    }else if (url =='http://127.0.0.1:8080/app/aussteller'){
      const html1 = matches.map(match => `
      <div>  
        <h4> ID: ${match.id}</h4>
        <h4> Name: ${match.Name}</h4>
        <h4> Email: ${match.Email}</h4>
        <h4> Firma: ${match.Firma}</h4>
        <h4> Ort: ${match.Ort}</h4>
      </div>
      `).join('');
    //console.log(html);
      matchList.innerHTML = html1;
    }
    

  }
}

  search.addEventListener('input', () => searchStates(search.value))

}


