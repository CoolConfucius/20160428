jQuery.sap.require("sap.m.MessageBox"); 

sap.ui.jsview("demo.views.demo_main", {
  getControllerName: function() {
    return "demo.views.demo_main";
  }, 

  createContent: function(oController) {

    this.setHeight("100%"); 

    // var homeBtn = new sap.m.Button(this.createId("demo-homebutton"), {

    // })

    var oPage = new sap.m.Page({

    })

    return oPage; 
  }

})