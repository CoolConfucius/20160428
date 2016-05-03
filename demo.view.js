(function() {
  'use strict';

  sap.ui.jsview("demo.demo", {
    getControllerName: function() {
      return "demo.demo"; 
    }, 

    createContent: function(oController) {
      this.setDisplayBlock(true); 

      return new sap.m.App("demo", {}); 
    }
  })
})