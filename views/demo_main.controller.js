sap.ui.controller("demo.views.demo_main", {
  
  //bus : sap.ui.getCore().getEventBus(),

  onInit: function() {
    console.log("on init main controller");
    this.app = sap.ui.getCore().byId("demo-app");
    this.accCount();
    this.fillTable();
    // this.deviceLinkedAccounts(); 
  },

  // _handleRouteMatched:function(evt){
  //   if ("demo_main") {};
  // }

  onAfterRendering: function() {

  }, 

  numberOfAccounts: 0,

  accCount: function() {
    var that=this;
    console.log("accCount");

    // $.ajax({
    //   url: '/sap/ocm/account_settings/ui/services/as.xsodata/account/',
    //   type: "GET",
    //   cache: false, 
    //   headers: {"X-Csrf-token" : sessionStorage.getItem("CSRF-Token")},
    //   dataType: "json",
    //   success: function(data) {
    //     that.numberOfAccounts = data.d.results.length; 
    //     that.acctitle.setText("Accounts ("+that.numberOfAccounts+")");
    //   },
    //   error: function(XMLHttpRequest, textStatus, errorThrown) {
    //     sap.m.MessageToast.show("Error: "+XMLHttpRequest.responseText);
    //   }
    // });
    console.log(that);
    that.acctitle.setText("Accounts (0)");
  },

  accountsarray:[],
  accSettingsModel: new sap.ui.model.json.JSONModel(),
  carriers: [],

  fillTable: function() {
    var that = this;
    that.carriers = []; 
    console.log("fillTable")
    // $.ajax
  },

  openFilterPanel: function(oEvt){
    alert("openFilterPanel"); 
  }
})