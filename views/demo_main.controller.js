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
    // console.log(that);
    that.acctitle.setText("Accounts (0)");
  },

  accountsarray:[],
  accSettingsModel: new sap.ui.model.json.JSONModel(),
  carriers: [],

  fillTable: function() {
    var that = this;
    that.carriers = []; 
    console.log("fillTable")
    // $.ajax({
    //   url: '/sap/ocm/account_settings/ui/services/as.xsodata/account/',
    //   type: "GET",
    //   cache: false, 
    //   headers: {"X-Csrf-token" : sessionStorage.getItem("CSRF-Token")},
    //   dataType: "json",
    //   success: function(data) {
    //     that.accountsarray = data.d.results;
    //     that.accSettingsModel.setData(that.accountsarray); 
    //     for (var i=0;i<that.accountsarray.length;i++) {
    //       that.pushTouniqueArray(that.carriers, accountsarray[i].CARRIER_NAME);
    //     }
    //     that.Addcarrier.addItem(new sap.ui.core.Item({text: "Select a Carrier",key:"default"}));
    //     for (var j=0;j<that.carriers.length;j++) {
    //       that.Addcarrier.addItem(new sap.ui.core.Item({text: that.carriers[j],key:that.carriers[j]}));
    //     }
    //   },
    //   error: function(XMLHttpRequest, textStatus, errorThrown) {
    //     sap.m.MessageToast.show("Error: "+XMLHttpRequest.responseText);
    //   }
    // });
    sap.m.MessageToast.show("fillTable");
  },

  deviceLinkedAccountsArray: [],

  deviceLinkedAccounts: function() {
    var that=this;
    $.ajax({
      url: '/sap/ocm/account_settings/ui/services/as-analyticview.xsodata/AV/?$select=ACCOUNTID,DEVICE_ID',
      type: "GET",
      cache: false, 
      headers: {"X-Csrf-token" : sessionStorage.getItem("CSRF-Token")},
      dataType: "json",
      success: function(data,response) {
        for (i=0; i<data.d.results.length; i++) {
          that.deviceLinkedAccountsArray.push(data.d.results[i].ACCOUNTID); 
        }
      }
    });
  },

  accountHovered:"",
  carrierHovered:"",
  contactHovered:"",

  onCarrierHover: function() {
    var that=this;
    $.ajax({
      url: '/sap/ocm/account_settings/ui/services/as.xsodata/deviceaccess?$filter=ACCOUNTID eq '+"'"+that.accoundtHovered+"'"+' and CARRIERNAME eq '+"'"+that.carrierHovered+"'",
      type: "GET",
      cache: false,
      headers: {"X-Csrf-token" : sessionStorage.getItem("CSRF-Token")},
      dataType: "json",
      success: function(data) {
        
      }
    })
  }

  onSort: function(value) {
    // var that = this; 
    // var oSorter = new sap.ui.model.Sorter(value, false);

    // var binding = that.accSettingsTable.getBinding("items");
    // binding.sort(oSorter);
    console.log(value);
  },


  pushTouniqueArray: function(array, item) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].indexOf(item) !== -1) {
        return; 
      }
      array.push(item); 
    };
  },

  accIDvale: "All",
  accNamevalue: "All",
  controlvalue: "All",




  openFilterPanel: function(oEvt){
    alert("openFilterPanel"); 
  }
})