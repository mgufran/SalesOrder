sap.ui.controller("salesorderservice.retriveOrder", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf salesorder.SalesOrder
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf salesorder.SalesOrder
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf salesorder.SalesOrder
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf salesorder.SalesOrder
*/
//	onExit: function() {
//
//	}

	searchAction: function(){   
		var OrderId = $("#txt_search").val();   
		alert('searchKey-->'+OrderId);    
		var salesResultPanel, oTitle, rModel;    
		var rTable = new sap.ui.table.DataTable();   
		rTable.addColumn(new sap.ui.table.Column({         label: new sap.ui.commons.Label({text: "OrderId"}),                template: new sap.ui.commons.TextView().bindProperty("text", "OrderId"),                sortProperty: "OrderId"    }));    
		rTable.addColumn(new sap.ui.table.Column({         label: new sap.ui.commons.Label({text: "Item"}),                template: new sap.ui.commons.TextField().bindProperty("value", "Item"),                sortProperty: "Item"    }));    
		 rTable.addColumn(new sap.ui.table.Column({      label: new sap.ui.commons.Label({text: "Description"}),      template: new sap.ui.commons.TextField().bindProperty("value", "Description"),      sortProperty: "Description"    })); 
		 rTable.addColumn(new sap.ui.table.Column({      label: new sap.ui.commons.Label({text: "Plant"}),      template: new sap.ui.commons.TextField().bindProperty("value", "Plant"),      sortProperty: "Plant"    }));   
		 rTable.addColumn(new sap.ui.table.Column({      label: new sap.ui.commons.Label({text: "Quantity"}),      template: new sap.ui.commons.TextField().bindProperty("value", "Quantity"),      sortProperty: "Quantity"    }));  
		 rTable.addColumn(new sap.ui.table.Column({      label: new sap.ui.commons.Label({text: "UoM"}),      template: new sap.ui.commons.TextField().bindProperty("value", "UoM"),      sortProperty: "UoM"    }));   
		 rTable.addColumn(new sap.ui.table.Column({      label: new sap.ui.commons.Label({text: "Value"}),      template: new sap.ui.commons.TextField().bindProperty("value", "Value"),      sortProperty: "Value"    }));   
		 rTable.setVisibleRowCount(10);    
		 salesResultPanel = new sap.ui.commons.Panel('salesResultPanel_'+OrderId);    
		 oTitle = new sap.ui.commons.Title('oTitle_'+OrderId);     
		 document.getElementById('rContent').innerHTML = "";   
		 var url = "http://sapsbe000.wde.woodside.com.au:8027/sap/opu/odata/sap/SALESORDERS/SOHeaders('"+OrderId+"')";   
		 alert(url);  
		 oTitle.setText('Sales Order Details - '+OrderId);     
		 salesResultPanel.setTitle(oTitle);     
		 rModel = new sap.ui.model.odata.ODataModel(url,false,"w35718","test123");   
		 rTable.setModel(rModel);    
		 rTable.bindRows("SOItems");   
		 salesResultPanel.addContent(rTable);   
		 salesResultPanel.placeAt('rContent');   
		 rModel = null;   
		 }   
});  