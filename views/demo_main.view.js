jQuery.sap.require("sap.m.MessageBox"); 

sap.ui.jsview("demo.views.demo_main", {
  getControllerName: function() {
    return "demo.views.demo_main";
  }, 

  createContent: function(oController) {

    this.setHeight("100%"); 

    // var homeBtn = new sap.m.Button(this.createId("demo-homebutton"), {

    // })

    var headerLabel = new sap.m.Label(this.createId("demo-label"), {
      text: "Demo"
    }); 

    var appHeader = new sap.m.Bar(this.createId("demo-headerBar"), {
      contentMiddle: [headerLabel]
    })

    var HorizontalLayout = new sap.ui.layout.HorizontalLayout({
      content: [
        new sap.m.Panel({
          content: [
            new sap.ui.layout.Grid({
              content: [
                new sap.m.Label({
                  text: "Account ID"
                })
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