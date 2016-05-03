sap.ui.controller("demo.views.demo_main", {
  
  //bus : sap.ui.getCore().getEventBus(),

  onInit: function() {
    console.log("on init main controller");
    this.app = sap.ui.getCore().byId("demo-app");
    // this.accCount();
    // this.fillTable();
    // this.deviceLinkedAccounts(); 
  },

  // _handleRouteMatched:function(evt){
  //   if ("demo_main") {};
  // }

  onAfterRendering: function() {

  }, 

  openFilterPanel: function(oEvt){
    alert("openFilterPanel"); 
  }
})