jQuery.sap.require("sap.m.MessageBox"); 

sap.ui.jsview("demo.views.demo_main", {
  getControllerName: function() {
    return "demo.views.demo_main";
  }, 

  createContent: function(oController) {

    this.setHeight("100%"); 

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
      content: [Subpanel]
    })

    return oPage; 
  }

})