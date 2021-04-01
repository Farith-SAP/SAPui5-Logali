// @ts-nocheck
sap.ui.define([

    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */

    function (Controller) {
        "use strict";

        return Controller.extend("logaligroup.SAPui5.controller.App", {

            onInit: function () {
            },
            onOpenDialog: function () {
                this.getOwnerComponent().openHelloDialog();
            }
        });
    });