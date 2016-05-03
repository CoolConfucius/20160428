jQuery.sap.declare("demo.Component");
jQuery.sap.require("sap.m.routing.RouteMatchedHandler");

jQuery.sap.resgisterModulePath("demo", "./");
jQuery.sap.resgisterModulePath("demo.views", "./views");

sap.ui.core.UIComponent.extend("demo.Component", {
  metadata : {
    "name" : "Demo",
    "version" : "1.0", 
    "includes" : [],
    "dependencies" : {
      "libs" : ["sap.m", "sap.me", "sap.ushell", "sap.viz", "sap.ui.commmons", "sap.ui.ux3", "sap.ui.unified"],
      "components" : []
    }, 

    // config : {
    //   resourceBundle: "demo"
    // }

    routing: {
      config: {
        viewType : "JS",
        viewPath: "demo.views",
        targetAggregation: "pages",
        targetControl: "demo",
        clearTarget: false 
      }, 
      routes: [
        {
          pattern:"",
          name : "demo_main",
          view : "demo_main",
          viewType: "JS"
        }
      ]
    },

    init : function() {
      sap.ui.core.UIComponent.prototype.init.apply(this, arguments); 

      this._oRouteMatchedHandler = new sap.m.routing.RouteMatchedHandler(this.getRouter());
      this.getRouter().initialize(); 

    }, 

    createContent : function() {

      var mConfig = this.getMetadata().getConfig(); 

      var demoModel = new sap.ui.model.json.JSONModel({
        isTouch : sap.ui.Device.support.touch, 
        isNoTouch : !sap.ui.Device.support.touch, 
        isPhone : sap.ui.Device.is.phone, 
        isNoPhone : !sap.ui.Device.is.phone, 
        listMode : (jQuery.device.is.phone) ? "None" : "singleSelectMaster", 
          listItemType : (jQuery.device.is.phone) ? "Active" : "Inactive"
      });
      demoModel.setDefaultBindingMode("OneWay"); 

      this.oMainView = sap.ui.view({
        type: sap.ui.core.mvc.ViewType.JS,
        id: "demo.view",
        viewName: "demo.demo"
      });

      this.oMainView.setModel(demoModel, "demo");
      this.oMainView.setModel(i18nModel, "i18n");

      return this.oMainView;
    }

  }
})
