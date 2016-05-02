(function() {
sap.ui.jsview("sap.ui.demo.wt.view.App", {

  getControllerName: function() {
    return "sap.ui.demo.wt.controller.App";
  },

  createContent: function(oController) {
    var homeBtn = new sap.m.Button(this.createId(homebutton), {
      icon: "sap-icon://home",
      tooltip: "Home",
      press: function() {
        window.history.go(-1); 
      }
    });

    var headerLabel = sap.m.Label(this.createId("demoLabel"), {
      text: "Demo"
    }); 

    var appHeader = new sap.m.Bar(this.createId("demoheader"), {
      contentLeft: [homeBtn], 
      contentMiddle: [headerLabel]
    })

    var labelmonth = new sap.m.label({
      text: "Month-test", 
      for: "moid"
    })
    var SubHeader = new sap.m.Bar(this.createId("subheader"), {
      contentLeft: [labelmonth]
    }); 
    var verticalLayout = new sap.ui.layout.VerticalLayout({width: "94%"}); 

    var page = new sap.m.Page(this.createId("demopage"),{
      customHeader: appHeader, 
      content: [SubHeader, verticalLayout]
    })
    return page; 
  }

});

  
});
