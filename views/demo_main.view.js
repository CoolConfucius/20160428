jQuery.sap.require("sap.m.MessageBox"); 

sap.ui.jsview("demo.views.demo_main", {
  getControllerName: function() {
    return "demo.views.demo_main";
  }, 

  createContent: function(oController) {

    this.setHeight("100%"); 

// HEADER BAR 

    var homeBtn = new sap.m.Button(this.createId("demo-homebutton"), {
      icon: "sap-icon://home",
      tooltip: "Home",
      press: function() {
        alert("Home sweet home");
      }
    });
    oController.homeBtn = homeBtn; 

    var headerLabel = new sap.m.Label(this.createId("demo-label"), {
      text: "Demo"
    }); 

    var filterBtn = new sap.m.Button(this.createId("demo-filterBtnnbutton"),{
      icon: "sap-icon://add-filter",
      tooltip: "Filter",
      press: function(e) {
        oController.openFilterPanel();
      }
    });
    oController.filterBtn = filterBtn; 


    var appHeader = new sap.m.Bar(this.createId("demo-headerBar"), {      
      contentLeft: [homeBtn],
      contentMiddle: [headerLabel],
      contentRight: [filterBtn]
    }).addStyleClass("as-app-header");


    // SUB HEADER BAR 

    var acctitle = new sap.m.Label({
      For:"accid"
    }).addStyleClass('acctitle'); 
    oController.acctitle = acctitle; 

    var ocreatebtn = new sap.m.Button({
      icon: "sap-icon://add",
      tooltip: "Create", 
      press: function() {
        oController.AddDialog.setTitle("New Account"); 
        oController.Addaccid.setEnabled(true); 
        oController.Addcarrier.setEnabled(true); 
        oController.AddDialog.open();
        oController.clearFields(); 
      }
    }).addStyleClass("ocreatebtn");
    oController.ocreatebtn=ocreatebtn; 

    var deletebtn = new sap.m.Button({
      icon: "sap-icon://delete",
      tooltip: "Delete", 
      press: function(e) {
        if (oController.accSettingsTable.getSelectedItems().length > 0) {
          oController.DeleteDialog.open(); 
        }
        else {
          sap.m.MessageBox.alert("Please select accounts first."); 
        }
      }
    })
    oController.deletebtn=deletebtn; 

    var osort = new sap.m.Select({
      enabled: true, 
      width:"200px", 
      change: function(e) {
        var value1 = this.getSelectedItem().getText();
        if (value1 == "Account Name") {
          var value = "NAME"; 
        }
        if (value1 == "Account ID") {
          var value = "ACCOUNTID"; 
        }
        else if (value1 == "Control Center") {
          var value = "CONTROL_CENTER"; 
        }
        oController.onSort(value); 
      }
    }).addStyleClass('osort');
    oController.osort=osort; 

    osort.addItem(new sap.ui.core.Item({text: "Account Name"}));
    osort.addItem(new sap.ui.core.Item({text: "Account ID"}));
    osort.addItem(new sap.ui.core.Item({text: "Control Center"}));

    var labelosort = new sap.m.Label({
      text:"Sort By"
    }).addStyleClass('labelosort'); 
    oController.labelosort = labelosort;

    var ogroupbtn = new sap.m.Button({
      icon: "sap-icon://group-2",
      tooltip: "Group",
      enabled:false,
    }).addStyleClass('ogroupbtn');
    oController.ogroupbtn=ogroupbtn;

    var sortBtn = new sap.m.Button({
      icon: "sap-icon://sort",
      tooltip: "Sort",
      press: function() {
        oController.SortbuttonClicked();
      }
    })    
    oController.sortBtn = sortBtn; 

    var SubHeader = new sap.m.Bar(this.createId("ASsubheaderBar"), {
      contentLeft: [acctitle,ocreatebtn,deletebtn],
      contentRight: [sortBtn,labelosort,osort,ogroupbtn]
    }).addStyleClass('as_SubheaderBar');
    oController.SubHeader = SubHeader;

// TOKEN

    var oInfoToolbar = new sap.ui.layout.HorizontalLayout( {
      visible: false,
      allowWrapping: true, 
      content: [ new sap.m.Label( {
        text: "Sorted By: "
      } ) ]
    } );
    oController.oInfoToolbar = oInfoToolbar;
    oInfoToolbar.addStyleClass( "filterTokenizer" );

    var oToken = new sap.m.Token({
      'delete': [ oController.deleteSort, oController ]
    });
    oController.oToken = oToken;

// TABLE

var accSettingsTable = new sap.m.Table({
  mode: sap.m.ListMode.MultiSelect,
  width:"92%",
  columns: [
    new sap.m.Column({
      hAlign : "Left",
      header: new sap.m.Label({
        text : "Account ID"
      })
    }),
    new sap.m.Column({
      hAlign : "Left",
      header: new sap.m.Label({
        text: "Account Name"
      })
    }),

  ]
})



    var oaccIDSelect = new sap.m.Select({
      enabled: true, 
      width: "100%",
      items: [],
      layoutData: new sap.ui.layout.GridData({
        span: "L12 M12 S12"
      }),
      change: function(e) {
        var value = this.getSelectedItem().getText(); 
        oController.onaccIDSelectChange(value); 
      }
    });
    oController.oaccIDSelect=oaccIDSelect; 

    var HorizontalLayout = new sap.ui.layout.HorizontalLayout({
      content: [
        new sap.m.Panel({
          content: [
            new sap.ui.layout.Grid({
              content: [
                new sap.m.Label({
                  text: "Account ID",
                  layoutData: new sap.ui.layout.GridData({
                    linebreak: true, 
                    span: "L12 M12 S12"
                  })
                }),
                oaccIDSelect
              ]
            })
          ]
        })
      ]
    })

    var Subpanel = new sap.m.Panel({
      content: [HorizontalLayout]
    })

    var oPage = new sap.m.Page({
      customHeader: appHeader, 
      content: [Subpanel,SubHeader]
    })

    return oPage; 
  }

})