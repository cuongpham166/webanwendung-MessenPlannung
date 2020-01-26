//------------------------------------------------------------------------------
// Einfache Anforderungen per Fetch-API
//------------------------------------------------------------------------------
// rev. 1, 21.11.2018, Bm
//------------------------------------------------------------------------------

'use strict'

if (APPUTIL == undefined) {
   var APPUTIL = {};
}

APPUTIL.Requester_cl = class {


   constructor () {
   }


   request_px (path_spl, success_ppl, fail_ppl) {
      fetch(path_spl)
      .then(function (response_opl) {
         let retVal_o = null;
         if(response_opl.ok) { // 200er-Status-Code
            retVal_o = response_opl.text().then(function (text_spl) {
               success_ppl(text_spl);
            });
         } else {
            retVal_o = response_opl.text().then(function (text_spl) {
               fail_ppl(text_spl);
            });
         }
         return retVal_o;
      })
      .catch(function (error_opl) {
         console.log('[Requester] fetch-Problem: ', error_opl.message);
      });
   }

   insertRequest_px(path_spl, success_ppl, fail_ppl, data){
      
      fetch(path_spl, {
         method:'POST',
         body: data,
         headers: {
            'Content-Type': "application/json; charset=utf-8"
         }
      })
      .then(function (response_opl) {
         let retVal_o = null;
         if(response_opl.ok) { // 200er-Status-Code
            retVal_o = response_opl.text().then(function (text_spl) {
               success_ppl(text_spl);
            });
         } else {
            retVal_o = response_opl.text().then(function (text_spl) {
               fail_ppl(text_spl);
            });
         }
         return retVal_o;
      })
      .catch(function (error_opl) {
         console.log('[Requester] fetch-Problem: ', error_opl.message);
      });
   }


   updateRequest_px(path_spl,success_ppl,fail_ppl,data){
      fetch(path_spl, {
         method: 'PUT',
         body: JSON.stringify(data),
         headers: {
            'Content-Type':"application/json; charset=utf-8"
         }
      })
      .then(function (response_opl) {
         let retVal_o = null;
         if(response_opl.ok) { // 200er-Status-Code
            retVal_o = response_opl.text().then(function (text_spl) {
               success_ppl(text_spl);
            });
         } else {
            retVal_o = response_opl.text().then(function (text_spl) {
               fail_ppl(text_spl);
            });
         }
         return retVal_o;
      })
      .catch(function (error_opl) {
         console.log('[Requester] fetch-Problem: ', error_opl.message);
      });
   }


   deleteRequest_px(path_spl, success_ppl, fail_ppl){
      fetch(path_spl,{
         method: 'DELETE'
      })
      .then(function (response_opl) {
         let retVal_o = null;
         if(response_opl.ok) { // 200er-Status-Code
            retVal_o = response_opl.text().then(function (text_spl) {
               success_ppl(text_spl);
            });
         } else {
            retVal_o = response_opl.text().then(function (text_spl) {
               fail_ppl(text_spl);
            });
         }
         return retVal_o;
      })
      .catch(function (error_opl) {
         console.log('[Requester] fetch-Problem: ', error_opl.message);
      });
   }
}
// EOF