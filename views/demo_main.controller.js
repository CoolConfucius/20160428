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

  numberOfAccount: 0,

  accCount: function() {
    // var that=this;
    alert("accCount");
  }

  accountsarray:[],
  accSettingsModel: new sap.ui.model.json.JSONModel(),
  carriers: [];

  openFilterPanel: function(oEvt){
    alert("openFilterPanel"); 
  }
})