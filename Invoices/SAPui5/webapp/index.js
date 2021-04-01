// @ts-nocheck
sap.ui.define([
    //   "sap/m/Text" /*No longer necesary*/
    // "sap/ui/core/mvc/XMLView"
    "sap/ui/core/ComponentContainer"

],
    /**
     * 
     * @param {typeof sap.m.Text} Text 
     * @param {typeof sap.ui.core.mvc.XMLView} XMLView
     * @param {typeof sap.ui.core.ComponentContainer} ComponentContainer
     */
 /*   function (Text) {
        alert("ui5 is ready");
        new Text({ text: "Hello world js" }).placeAt("content");
    });
*/

function (ComponentContainer){

new ComponentContainer({

    name:"logaligroup.SAPui5",
    settings: {
        id : "SAPui5"
    },
    async:  true
}).placeAt("content");

});

/*
function(XMLView){
    "use strict";
    XMLView.create({
        viewName:"logaligroup.SAPui5.view.App"    
    }).then (function(oView){
        oView.placeAt("content");    
    });
});
*/