//------------------------------------------------------------------------------
//Demonstrator evs/tco/tmg
//------------------------------------------------------------------------------
// rev. 0, 21.11.2018, Bm
//------------------------------------------------------------------------------
// hier zur Vereinfachung (!) die Klassen in einer Datei

'use strict'

//------------------------------------------------------------------------------
class DetailView_cl {
//------------------------------------------------------------------------------

   constructor (el_spl, template_spl, action) {
      this.el_s = el_spl;
      this.template_s = template_spl;
      this.action = action;
   }
   render_px (id_spl) {
      // Daten anfordern
      let path_s;
      if (id_spl == undefined){
         path_s = "/app/" + this.action +"/";
      }else{
         path_s = "/app/" + this.action + "/" + id_spl;
      }

      let requester_o = new APPUTIL.Requester_cl();
      requester_o.request_px(path_s,
         function (responseText_spl) {
            let data_o = JSON.parse(responseText_spl);
            this.doRender_p(data_o);
         }.bind(this),
         function (responseText_spl) {
            alert("Detail - render failed");
         }
      );
   }

   doRender_p (data_opl) {
      let markup_s = APPUTIL.tm_o.execute_px(this.template_s, data_opl);
      let el_o = document.querySelector(this.el_s);
      if (el_o != null) {
         el_o.innerHTML = markup_s;
         this.configHandleEvent_p();
      }
   }
   configHandleEvent_p () {
      let el_o = document.querySelector("form");
      if (el_o != null) {
         el_o.addEventListener("click", this.handleEvent_p);
      }

      
   }
   
   handleEvent_p (event_opl) {
      if (event_opl.target.id == "idBack") {
         APPUTIL.es_o.publish_px("app.cmd", ["idBack", null]);
         event_opl.stopPropagation();
         event_opl.preventDefault();
      }

      
      else if(event_opl.target.id == "idBack_halle"){
         APPUTIL.es_o.publish_px("app.cmd", ["listHalle", null]);
         event_opl.stopPropagation();
         event_opl.preventDefault();
      }

      

      else if(event_opl.target.id == "idSave_halle"){
        // alert("hallo");
         let data = {};
         var form = document.getElementsByTagName("form");
         var inputs = form[0].getElementsByTagName("input");
         for (var i = 0; i < inputs.length; i++){
            data[inputs[i].name] = inputs[i].value;
         }
         
         let json = JSON.stringify(data);
         alert(json);
         let path_s = "/app/halle/";
         if(data['id'] == 0){

            let requester_o = new APPUTIL.Requester_cl();
            requester_o.insertRequest_px(path_s,
               function (responseText_spl) {
                  let data_o = JSON.parse(responseText_spl);
                  let listHalle_o  = new ListView_cl("main", "halleList.tpl.html","halle");
                  listHalle_o.render_px();
         }.bind(this),
         function (responseText_spl) {
            alert("Detail - render failed");
         }, json);
         alert("Insert");
         event_opl.stopPropagation();
         event_opl.preventDefault();
         }
         else{
            let requester_o = new APPUTIL.Requester_cl();
            requester_o.updateRequest_px(path_s,
               function (responseText_spl) {
                  //let data_o = JSON.parse(responseText_spl);
                  let listHalle_o  = new ListView_cl("main", "halleList.tpl.html","halle");
                  listHalle_o.render_px();
         }.bind(this),
         function (responseText_spl) {
            alert("Detail - render failed");
         }, json);
         alert("Update");
         event_opl.stopPropagation();
         event_opl.preventDefault();
            }
         }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
         else if(event_opl.target.id == "idBack_ausstellung"){
         APPUTIL.es_o.publish_px("app.cmd", ["listAusstellung", null]);
         event_opl.stopPropagation();
         event_opl.preventDefault();
         }

      else if(event_opl.target.id == "idSave_ausstellung"){
        // alert("hallo");
         let data = {};
         var form = document.getElementsByTagName("form");
         var inputs = form[0].getElementsByTagName("input");
         for (var i = 0; i < inputs.length; i++){
            data[inputs[i].name] = inputs[i].value;
         }
         
         let json = JSON.stringify(data);
         alert(json);
         let path_s = "/app/ausstellung/";
         if(data['id'] == 0){

            let requester_o = new APPUTIL.Requester_cl();
            requester_o.insertRequest_px(path_s,
               function (responseText_spl) {
                  let data_o = JSON.parse(responseText_spl);
                  let listAusstellung_o  = new ListView_cl("main", "ausstellungList.tpl.html","ausstellung");
                  listAusstellung_o.render_px();
         }.bind(this),
         function (responseText_spl) {
            alert("Detail - render failed");
         }, json);
         alert("Insert");
         event_opl.stopPropagation();
         event_opl.preventDefault();
         }
         else{
            let requester_o = new APPUTIL.Requester_cl();
            requester_o.updateRequest_px(path_s,
               function (responseText_spl) {
                  //let data_o = JSON.parse(responseText_spl);
                  let listAusstellung_o  = new ListView_cl("main", "ausstellungList.tpl.html","ausstellung");
                  listAusstellung_o.render_px();
         }.bind(this),
         function (responseText_spl) {
            alert("Detail - render failed");
         }, json);
         alert("Update");
         event_opl.stopPropagation();
         event_opl.preventDefault();
            }
         }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   else if(event_opl.target.id == "idBack_einteillung"){
         APPUTIL.es_o.publish_px("app.cmd", ["listEinteilung", null]);
         event_opl.stopPropagation();
         event_opl.preventDefault();
         }

      else if(event_opl.target.id == "idSave_einteilung"){
        // alert("hallo");
         let data = {};
         var form = document.getElementsByTagName("form");
         var inputs = form[0].getElementsByTagName("input");
         for (var i = 0; i < inputs.length; i++){
            data[inputs[i].name] = inputs[i].value;
         }
         var selects = form[0].getElementsByTagName("select");
         for (var i = 0; i< selects.length; i++){
            data[selects[i].name] = selects[i].value;
         }
         let json = JSON.stringify(data);
         alert(json);
         let path_s = "/app/einteilen/";
         if(data['id'] == 0){

            let requester_o = new APPUTIL.Requester_cl();
            requester_o.insertRequest_px(path_s,
               function (responseText_spl) {
                  let data_o = JSON.parse(responseText_spl);
                  let listEinteilung_o  = new ListView_cl("main", "einteilungList.tpl.html","einteilen");
                  listEinteilung_o.render_px();
         }.bind(this),
         function (responseText_spl) {
            alert("Detail - render failed");
         }, json);
         alert("Insert");
         event_opl.stopPropagation();
         event_opl.preventDefault();
         }
         else{
            let requester_o = new APPUTIL.Requester_cl();
            requester_o.updateRequest_px(path_s,
               function (responseText_spl) {
                  //let data_o = JSON.parse(responseText_spl);
                  let listEinteilung_o  = new ListView_cl("main", "einteilungList.tpl.html","einteilen");
                  listEinteilung_o.render_px();
         }.bind(this),
         function (responseText_spl) {
            alert("Detail - render failed");
         }, json);
         alert("Update");
         event_opl.stopPropagation();
         event_opl.preventDefault();
            }
         }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
else if(event_opl.target.id == "idBack_buchung"){
         APPUTIL.es_o.publish_px("app.cmd", ["listBuchung", null]);
         event_opl.stopPropagation();
         event_opl.preventDefault();
         }

      else if(event_opl.target.id == "idSave_buchung"){
        // alert("hallo");
         let data = {};
         var form = document.getElementsByTagName("form");
         var inputs = form[0].getElementsByTagName("input");
         for (var i = 0; i < inputs.length; i++){
            data[inputs[i].name] = inputs[i].value;
         }

         var selects = form[0].getElementsByTagName("select");
         for (var i = 0; i< selects.length; i++){
            data[selects[i].name] = selects[i].value;
         }
         
         let json = JSON.stringify(data);
         alert(json);
         let path_s = "/app/buchung/";
         if(data['id'] == 0){

            let requester_o = new APPUTIL.Requester_cl();
            requester_o.insertRequest_px(path_s,
               function (responseText_spl) {
                  let data_o = JSON.parse(responseText_spl);
                  let listBuchung_o  = new ListView_cl("main", "buchungList.tpl.html","buchung");
                  listBuchung_o .render_px();
         }.bind(this),
         function (responseText_spl) {
            alert("Detail - render failed");
         }, json);
         alert("Insert");
         event_opl.stopPropagation();
         event_opl.preventDefault();
         }
         else{
            let requester_o = new APPUTIL.Requester_cl();
            requester_o.updateRequest_px(path_s,
               function (responseText_spl) {
                  //let data_o = JSON.parse(responseText_spl);
                  let listBuchung_o  = new ListView_cl("main", "buchungList.tpl.html","buchung");
                  listBuchung_o.render_px();
         }.bind(this),
         function (responseText_spl) {
            alert("Detail - render failed");
         }, json);
         alert("Update");
         event_opl.stopPropagation();
         event_opl.preventDefault();
            }
         }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
else if(event_opl.target.id == "idBack_aussteller"){
         APPUTIL.es_o.publish_px("app.cmd", ["listAussteller", null]);
         event_opl.stopPropagation();
         event_opl.preventDefault();
         }

      else if(event_opl.target.id == "idSave_aussteller"){
        // alert("hallo");
         let data = {};
         var form = document.getElementsByTagName("form");
         var inputs = form[0].getElementsByTagName("input");
         for (var i = 0; i < inputs.length; i++){
            data[inputs[i].name] = inputs[i].value;
         }

         var selects = form[0].getElementsByTagName("select");
         for (var i = 0; i< selects.length; i++){
            data[selects[i].name] = selects[i].value;
         }
         
         let json = JSON.stringify(data);
         alert(json);
         let path_s = "/app/aussteller/";
         if(data['id'] == 0){

            let requester_o = new APPUTIL.Requester_cl();
            requester_o.insertRequest_px(path_s,
               function (responseText_spl) {
                  let data_o = JSON.parse(responseText_spl);
                  let listAussteller_o  = new ListView_cl("main", "ausstellerList.tpl.html","aussteller");
                  listAussteller_o .render_px();
         }.bind(this),
         function (responseText_spl) {
            alert("Detail - render failed");
         }, json);
         alert("Insert");
         event_opl.stopPropagation();
         event_opl.preventDefault();
         }
         else{
            let requester_o = new APPUTIL.Requester_cl();
            requester_o.updateRequest_px(path_s,
               function (responseText_spl) {
                  //let data_o = JSON.parse(responseText_spl);
                  let listAussteller_o  = new ListView_cl("main", "ausstellerList.tpl.html","aussteller");
                  listAussteller_o.render_px();
         }.bind(this),
         function (responseText_spl) {
            alert("Detail - render failed");
         }, json);
         alert("Update");
         event_opl.stopPropagation();
         event_opl.preventDefault();
            }
         }
////////////////////////////////////////////////////////////////////////////////////
   }
}

//------------------------------------------------------------------------------
class ListView_cl {
//------------------------------------------------------------------------------

   constructor (el_spl, template_spl, action) {
      this.el_s = el_spl;
      this.template_s = template_spl;
      this.action = action;
      this.configHandleEvent_p();
      }

   render_px () {
      // Daten anfordern
      let path_s = "/app/" + this.action;
      let requester_o = new APPUTIL.Requester_cl();
      requester_o.request_px(path_s,
         function (responseText_spl) {
            let data_o = JSON.parse(responseText_spl);
            this.doRender_p(data_o);

         }.bind(this),
         function (responseText_spl) {
            alert("List - render failed");
         }
      );
   }

   
   render_px1 (id_spl) {
      // Daten anfordern
      let path_s;
      if (id_spl == undefined){
         path_s = "/app/" + this.action +"/";
      }else{
         path_s = "/app/" + this.action + "/" + id_spl;
      }

      let requester_o = new APPUTIL.Requester_cl();
      requester_o.request_px(path_s,
         function (responseText_spl) {
            let data_o = JSON.parse(responseText_spl);
            console.log(data_o);
            this.doRender_p(data_o);
         }.bind(this),
         function (responseText_spl) {
            alert("Detail - render failed");
         }
      );
   }


   
   doRender_p (data_opl) {
      let markup_s = APPUTIL.tm_o.execute_px(this.template_s, data_opl);
      let el_o = document.querySelector(this.el_s);
      if (el_o != null) {
         el_o.innerHTML = markup_s;
      }
   }
   configHandleEvent_p () {
      let el_o = document.querySelector(this.el_s);
      if (el_o != null) {
         el_o.addEventListener("click", this.handleEvent_p);
      }
   }

   handleEvent_p (event_opl) {
      if (event_opl.target.tagName.toUpperCase() == "TD") {
         let elx_o = document.querySelector(".clSelected");
         if (elx_o != null) {
            elx_o.classList.remove("clSelected");
         }
         event_opl.target.parentNode.classList.add("clSelected");
         event_opl.preventDefault();
      }

      
      else if(event_opl.target.id == "standBuchung"){
         APPUTIL.es_o.publish_px("app.cmd", ["stand", null]);
         event_opl.stopPropagation();
         event_opl.preventDefault();
      }

      else if(event_opl.target.id == "refresh"){
         APPUTIL.es_o.publish_px("app.cmd", ["ubersichtPlan", null]);
         event_opl.stopPropagation();
         event_opl.preventDefault();
      }
      
      else if(event_opl.target.id == "showBook"){
         APPUTIL.es_o.publish_px("app.cmd", ["listBuchung", null]);
         event_opl.stopPropagation();
         event_opl.preventDefault();
      }

      else if(event_opl.target.id == "showHalle"){
         APPUTIL.es_o.publish_px("app.cmd", ["listHalle", null]);
         event_opl.stopPropagation();
         event_opl.preventDefault();
      }

      else if(event_opl.target.id == "showAusstellungsfläche"){
         APPUTIL.es_o.publish_px("app.cmd", ["listAusstellung", null]);
         event_opl.stopPropagation();
         event_opl.preventDefault();
      }

      else if(event_opl.target.id == "showEinteilung"){
         APPUTIL.es_o.publish_px("app.cmd", ["listEinteilung", null]);
         event_opl.stopPropagation();
         event_opl.preventDefault();
      }

      else if(event_opl.target.id == "showMap"){
         APPUTIL.es_o.publish_px("app.cmd", ["ubersichtPlan", null]);
         event_opl.stopPropagation();
         event_opl.preventDefault();
      }

      else if(event_opl.target.id == "showAussteller"){
         APPUTIL.es_o.publish_px("app.cmd", ["listAussteller", null]);
         event_opl.stopPropagation();
         event_opl.preventDefault();
      }

      else if(event_opl.target.id == "backDashboard"){
         APPUTIL.es_o.publish_px("app.cmd", ["dashboard", null]);
         event_opl.stopPropagation();
         event_opl.preventDefault();
      }

      else if(event_opl.target.id == "abmelden"){
         APPUTIL.es_o.publish_px("app.cmd", ["anmeldenForm", null]);
         event_opl.stopPropagation();
         event_opl.preventDefault();
      }

      else if(event_opl.target.id == "idBack_buchung"){
         APPUTIL.es_o.publish_px("app.cmd", ["anmeldenForm", null]);
         event_opl.stopPropagation();
         event_opl.preventDefault();
      }

      else if(event_opl.target.id == "idSearch"){
         APPUTIL.es_o.publish_px("app.cmd", ["formSearch", null]);
         event_opl.stopPropagation();
         event_opl.preventDefault();
      }



      else if (event_opl.target.id == "idShowListEntry") {
         let elx_o = document.querySelector(".clSelected");
         if (elx_o == null) {
            alert("Bitte zuerst einen Eintrag auswählen!");
         } else {
            APPUTIL.es_o.publish_px("app.cmd", ["detail", elx_o.id] );
         }
         event_opl.preventDefault();
      }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      else if (event_opl.target.id == "idShowListEntry_halle") {
         let elx_o = document.querySelector(".clSelected");
         if (elx_o == null) {
            alert("Bitte zuerst einen Eintrag auswählen!");
         } else {
            //APPUTIL.es_o.publish_px("app.cmd", ["detail", elx_o.id] );
            APPUTIL.es_o.publish_px("app.cmd", ["formHalle", elx_o.id] );
         }
         event_opl.stopPropagation();
         event_opl.preventDefault();
      }


      else if(event_opl.target.id == "idDelete_halle"){
         let elx_o = document.querySelector(".clSelected");
         if (elx_o == null){
            alert("Bitte zuerst einen Eintrag auswählen !");
         }else{
            let id = elx_o.id;
            let path_s = "/app/halle/" + id;
            let requester_o = new APPUTIL.Requester_cl();
            requester_o.deleteRequest_px(path_s,
               function (responseText_spl) {
                  let data_o = JSON.parse(responseText_spl);
                  let listHalle_o  = new ListView_cl("main", "halleList.tpl.html","halle");
                  listHalle_o.render_px();
         }.bind(this),
         function (responseText_spl) {
            alert("List - render failed");
         });
         event_opl.stopPropagation();
         event_opl.preventDefault();
         }
      }

      else if(event_opl.target.id== "idAnlegen_halle"){
         APPUTIL.es_o.publish_px("app.cmd", ["formHalle", 0] );
         event_opl.stopPropagation();
         event_opl.preventDefault();
      }

       

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
      else if (event_opl.target.id == "idShowListEntry_ausstellung") {
         let elx_o = document.querySelector(".clSelected");
         if (elx_o == null) {
            alert("Bitte zuerst einen Eintrag auswählen!");
         } else {
            //APPUTIL.es_o.publish_px("app.cmd", ["detail", elx_o.id] );
            APPUTIL.es_o.publish_px("app.cmd", ["formAusstellung", elx_o.id] );
         }
         event_opl.stopPropagation();
         event_opl.preventDefault();
      }


      else if(event_opl.target.id == "idDelete_ausstellung"){
         let elx_o = document.querySelector(".clSelected");
         if (elx_o == null){
            alert("Bitte zuerst einen Eintrag auswählen !");
         }else{
            let id = elx_o.id;
            let path_s = "/app/ausstellung/" + id;
            let requester_o = new APPUTIL.Requester_cl();
            requester_o.deleteRequest_px(path_s,
               function (responseText_spl) {
                  let data_o = JSON.parse(responseText_spl);
                  let listAusstellung_o  = new ListView_cl("main", "ausstellungList.tpl.html","ausstellung");
                  listAusstellung_o.render_px();
         }.bind(this),
         function (responseText_spl) {
            alert("List - render failed");
         });
         event_opl.stopPropagation();
         event_opl.preventDefault();
         }
      }

      else if(event_opl.target.id== "idAnlegen_ausstellung"){
         APPUTIL.es_o.publish_px("app.cmd", ["formAusstellung", 0] );
         event_opl.stopPropagation();
         event_opl.preventDefault();
      }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
   else if (event_opl.target.id == "idShowListEntry_einteilung") {
         let elx_o = document.querySelector(".clSelected");
         if (elx_o == null) {
            alert("Bitte zuerst einen Eintrag auswählen!");
         } else {
            //APPUTIL.es_o.publish_px("app.cmd", ["detail", elx_o.id] );
            APPUTIL.es_o.publish_px("app.cmd", ["formEinteilung", elx_o.id] );
         }
         event_opl.stopPropagation();
         event_opl.preventDefault();
      }


      else if(event_opl.target.id == "idDelete_einteilung"){
         let elx_o = document.querySelector(".clSelected");
         if (elx_o == null){
            alert("Bitte zuerst einen Eintrag auswählen !");
         }else{
            let id = elx_o.id;
            let path_s = "/app/einteilen/" + id;
            let requester_o = new APPUTIL.Requester_cl();
            requester_o.deleteRequest_px(path_s,
               function (responseText_spl) {
                  let data_o = JSON.parse(responseText_spl);
                  let listEinteilung_o  = new ListView_cl("main", "einteilungList.tpl.html","einteilen");
                  listEinteilung_o.render_px();
         }.bind(this),
         function (responseText_spl) {
            alert("List - render failed");
         });
         event_opl.stopPropagation();
         event_opl.preventDefault();
         }
      }

      else if(event_opl.target.id== "idAnlegen_einteilung"){
         APPUTIL.es_o.publish_px("app.cmd", ["formEinteilung", 0] );
         event_opl.stopPropagation();
         event_opl.preventDefault();
      }



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
else if(event_opl.target.id== "idAnlegen_buchung"){
         APPUTIL.es_o.publish_px("app.cmd", ["formBuchung", 0] );
         event_opl.stopPropagation();
         event_opl.preventDefault();
      }

else if (event_opl.target.id == "idShowListEntry_buchung") {
         let elx_o = document.querySelector(".clSelected");
         if (elx_o == null) {
            alert("Bitte zuerst einen Eintrag auswählen!");
         } else {
            //APPUTIL.es_o.publish_px("app.cmd", ["detail", elx_o.id] );
            APPUTIL.es_o.publish_px("app.cmd", ["formBuchung", elx_o.id] );
         }
         event_opl.stopPropagation();
         event_opl.preventDefault();
      }


      else if(event_opl.target.id == "idDelete_einteilung"){
         let elx_o = document.querySelector(".clSelected");
         if (elx_o == null){
            alert("Bitte zuerst einen Eintrag auswählen !");
         }else{
            let id = elx_o.id;
            let path_s = "/app/buchung/" + id;
            let requester_o = new APPUTIL.Requester_cl();
            requester_o.deleteRequest_px(path_s,
               function (responseText_spl) {
                  let data_o = JSON.parse(responseText_spl);
                  let listBuchung_o  = new ListView_cl("main", "buchungList.tpl.html","buchung");
                  listBuchung_o.render_px();
         }.bind(this),
         function (responseText_spl) {
            alert("List - render failed");
         });
         event_opl.stopPropagation();
         event_opl.preventDefault();
         }
      }

      
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
else if (event_opl.target.id == "idShowListEntry_aussteller") {
         let elx_o = document.querySelector(".clSelected");
         if (elx_o == null) {
            alert("Bitte zuerst einen Eintrag auswählen!");
         } else {
            //APPUTIL.es_o.publish_px("app.cmd", ["detail", elx_o.id] );
            APPUTIL.es_o.publish_px("app.cmd", ["formAussteller", elx_o.id] );
         }
         event_opl.stopPropagation();
         event_opl.preventDefault();
      }


      else if(event_opl.target.id == "idDelete_aussteller"){
         let elx_o = document.querySelector(".clSelected");
         if (elx_o == null){
            alert("Bitte zuerst einen Eintrag auswählen !");
         }else{
            let id = elx_o.id;
            let path_s = "/app/aussteller/" + id;
            let requester_o = new APPUTIL.Requester_cl();
            requester_o.deleteRequest_px(path_s,
               function (responseText_spl) {
                  let data_o = JSON.parse(responseText_spl);
                  let listAussteller_o  = new ListView_cl("main", "ausstellerList.tpl.html","aussteller");
                  listAussteller_o.render_px();
         }.bind(this),
         function (responseText_spl) {
            alert("List - render failed");
         });
         event_opl.stopPropagation();
         event_opl.preventDefault();
         }
      }

      else if(event_opl.target.id== "idAnlegen_aussteller"){
         APPUTIL.es_o.publish_px("app.cmd", ["formAussteller", 0] );
         event_opl.stopPropagation();
         event_opl.preventDefault();
      }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   }
}

//------------------------------------------------------------------------------
class SideBar_cl {
//------------------------------------------------------------------------------

   constructor (el_spl, template_spl) {
      this.el_s = el_spl;
      this.template_s = template_spl;
      this.configHandleEvent_p();
   }
   render_px (data_opl) {
      let markup_s = APPUTIL.tm_o.execute_px(this.template_s, data_opl);
      let el_o = document.querySelector(this.el_s);
      if (el_o != null) {
         el_o.innerHTML = markup_s;
      }
   }
   configHandleEvent_p () {
      let el_o = document.querySelector(this.el_s);
      if (el_o != null) {
         el_o.addEventListener("click", this.handleEvent_p);
      }
   }
   handleEvent_p (event_opl) {
      let cmd_s = event_opl.target.dataset.action;
      APPUTIL.es_o.publish_px("app.cmd", [cmd_s, null]);
   }
}



class Application_cl {

   constructor () {
      // Registrieren zum Empfang von Nachrichten
      APPUTIL.es_o.subscribe_px(this, "templates.loaded");
      APPUTIL.es_o.subscribe_px(this, "templates.failed");
      APPUTIL.es_o.subscribe_px(this, "app.cmd");


      this.sideBar_o = new SideBar_cl("nav", "navbar.tpl.html");

      this.listView_o = new ListView_cl("main", "list.tpl.html");
      this.detailView_o = new DetailView_cl("main", "detail.tpl.html");

      this.listHalle_o = new ListView_cl("main", "halleList.tpl.html", "halle");
      this.formHalle_o = new DetailView_cl("main", "halleForm.tpl.html", "halle");

      this.listAusstellung_o = new ListView_cl("main", "ausstellungList.tpl.html", "ausstellung");
      this.formAusstellung_o = new DetailView_cl("main", "ausstellungForm.tpl.html", "ausstellung");

      this.listEinteilung_o = new ListView_cl("main", "einteilungList.tpl.html", "einteilen");
      this.formEinteilung_o = new DetailView_cl("main", "einteilungForm.tpl.html", "einteilen");

      this.ubersichtPlan_o = new ListView_cl("main", "map.tpl.html", "plan");

      this.anmeldungForm_o = new ListView_cl ("main", "anmelden.tpl.html", "anmelden");

      this.listBuchung_o = new ListView_cl("main", "buchungList.tpl.html", "buchung");
      this.formBuchung_o = new DetailView_cl("main", "buchungForm.tpl.html", "buchung");

      this.listAussteller_o = new ListView_cl("main", "ausstellerList.tpl.html", "aussteller");
      this.formAussteller_o = new DetailView_cl("main", "ausstellerForm.tpl.html", "aussteller");

      this.searchForm_o = new DetailView_cl("main", "searchForm.tpl.html", "search");

      this.dashboard_o = new ListView_cl("main", "dashboard.tpl.html", "dashboard");

      this.map_o = new DetailView_cl("main", "map.tpl.html", "map");

      this.standList_o = new ListView_cl("main", "standBuchung.tpl.html", "stand");


   }

   notify_px (self, message_spl, data_opl) {
      switch (message_spl) {
      case "templates.failed":
         alert("Vorlagen konnten nicht geladen werden.");
         break;
      case "templates.loaded":
         // Templates stehen zur Verfügung, Bereiche mit Inhalten füllen
         // hier zur Vereinfachung direkt
         let markup_s;
         let el_o;
         ///markup_s = APPUTIL.tm_o.execute_px("header.tpl.html", null);
         //el_o = document.querySelector("header");
         if (el_o != null) {
            el_o.innerHTML = markup_s;
         }
         let nav_a = [
            ["home", "Startseite"],
            ["anmeldenForm", "Anmelden"]   
         ];
         self.sideBar_o.render_px(nav_a);
         markup_s = APPUTIL.tm_o.execute_px("home.tpl.html", null);
         el_o = document.querySelector("main");
         if (el_o != null) {
            el_o.innerHTML = markup_s;
         }
         break;

      case "app.cmd":
         // hier müsste man überprüfen, ob der Inhalt gewechselt werden darf
         switch (data_opl[0]) {
         case "home":
            let markup_s = APPUTIL.tm_o.execute_px("home.tpl.html", null);
            let el_o = document.querySelector("main");
            if (el_o != null) {
               el_o.innerHTML = markup_s;
            }
            break;
         case "list":
            // Daten anfordern und darstellen
            this.listView_o.render_px();
            break;
         case "detail":
            this.detailView_o.render_px(data_opl[1]);
            break;
         case "idBack":
            APPUTIL.es_o.publish_px("app.cmd", ["list", null]);
            break;


         case "listHalle":
            this.listHalle_o.render_px();
            break;
         case "formHalle":
            this.formHalle_o.render_px(data_opl[1]);
            break;

         case "listAusstellung":
            this.listAusstellung_o.render_px();
            break;
         case "formAusstellung":
            this.formAusstellung_o.render_px(data_opl[1]);
            break;

         case "listEinteilung":
            this.listEinteilung_o.render_px();
            break;
         case "formEinteilung":
            this.formEinteilung_o.render_px(data_opl[1]);
            break;

         case "ubersichtPlan":
            this.ubersichtPlan_o.render_px();
            break;

         case "anmeldenForm":
            this.anmeldungForm_o.render_px();
            break;

         case "listBuchung":
            this.listBuchung_o.render_px();
            break;
         case "formBuchung":
            this.formBuchung_o.render_px(data_opl[1]);
            break;

         case "listAussteller":
            this.listAussteller_o.render_px();
            break;
         case "formAussteller":
            this.formAussteller_o.render_px(data_opl[1]);
            break;

         case "formSearch":
            this.searchForm_o.render_px(data_opl[1]);
            break;

         case "dashboard":
            this.dashboard_o.render_px();
            break;

         case "map":
            this.map_o.render_px();
            break;

         case "stand":
            this.standList_o.render_px()
            break;

         }
         break;
      }
   }
}

window.onload = function () {
   APPUTIL.es_o = new APPUTIL.EventService_cl();
   var app_o = new Application_cl();
   APPUTIL.createTemplateManager_px();
}