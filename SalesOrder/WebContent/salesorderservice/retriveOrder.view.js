sap.ui.jsview("salesorderservice.retriveOrder", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf salesorder.SalesOrder
	*/ 
	getControllerName : function() {
		return "salesorderservice.retriveOrder";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf salesorder.SalesOrder
	*/ 
	createContent : function(oController) {
		
		
		
		
		   var layout = new sap.ui.commons.layout.MatrixLayout('layout');  
		   layout.setWidth('80%');   
		   // Search Box starts here    
		   var searchPannel = new sap.ui.commons.Panel('searchPannel');   
		   var sTitle = new sap.ui.commons.Title('sTitle');   
		   sTitle.setText('Search Order ID');   
		   searchPannel.setTitle(sTitle);   
		   var sLayout = new sap.ui.commons.layout.MatrixLayout('sLayout');   
		   sLayout.setWidth('50%');    
		   var lb_search = new sap.ui.commons.Label('lb_search');   
		   lb_search.setText("Order ID:");  
		   var txt_search = new sap.ui.commons.TextField('txt_search');    
		   txt_search.setTooltip('Please provide Order id!..');    
		   var btn_search = new sap.ui.commons.Button("btn_search");    
		   btn_search.setText("Search");    
		   btn_search.attachPress(oController.searchAction);    
		   sLayout.createRow(lb_search, txt_search, btn_search);   
		   searchPannel.addContent(sLayout);   
		   layout.createRow(searchPannel);   
		   // Search Box starts here     
		   // Result Box starts here     
		   var resultPannel = new sap.ui.commons.Panel('resultPannel');   
		   var rTitle = new sap.ui.commons.Title('rTitle');    
		   rTitle.setText('All - Sales Order');    
		   resultPannel.setTitle(rTitle);    
		   var oTable = new sap.ui.table.DataTable();   
		   oTable.addColumn(new sap.ui.table.Column({         label: new sap.ui.commons.Label({text: "OrderId"}),                template: new sap.ui.commons.TextView().bindProperty("text", "OrderId"),                sortProperty: "OrderId"    }));  
		     oTable.addColumn(new sap.ui.table.Column({      label: new sap.ui.commons.Label({text: "Description"}),      template: new sap.ui.commons.TextField().bindProperty("value", "Description"),      sortProperty: "Description"    }));   
		      oTable.addColumn(new sap.ui.table.Column({      label: new sap.ui.commons.Label({text: "Quantity"}),      template: new sap.ui.commons.TextField().bindProperty("value", "Quantity"),      sortProperty: "Quantity"    }));   
		      oTable.addColumn(new sap.ui.table.Column({      label: new sap.ui.commons.Label({text: "Value"}),      template: new sap.ui.commons.TextField().bindProperty("value", "Value"),      sortProperty: "Value"    })); 
		      var oModel = new sap.ui.model.odata.ODataModel("http://sapsbe000.wde.woodside.com.au:8027/sap/opu/odata/sap/SALESORDERS",false,"w35718","test123");   
		      oTable.setModel(oModel); 
		      oTable.bindRows("SOItems"); 
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
		            salesResultPanel = new sap.ui.commons.Panel('salesResultPanel');    
		            oTitle = new sap.ui.commons.Title('oTitle');     
		            oTable.attachRowSelect(function(oEvent)   
		            		{     document.getElementById('rContent').innerHTML = "";   
		            		var currentRowContext = oEvent.getParameter("rowContext");   
		            		var OrderId = oModel.getProperty("OrderId", currentRowContext);   
		            		var url = "http://sapsbe000.wde.woodside.com.au:8027/sap/opu/odata/sap/SALESORDERS/SOHeaders('"+OrderId+"')";   
		            		oTitle.setText('Sales Order Details - '+OrderId);     
		            		salesResultPanel.setTitle(oTitle);     
		            		rModel = new sap.ui.model.odata.ODataModel(url,false,"w35718","test123");   
		            		rTable.setModel(rModel);    
		            		rTable.bindRows("SOItems");   
		            		salesResultPanel.addContent(rTable);   
		            		salesResultPanel.placeAt('rContent');   
		            		rModel = null;   
		            		});   
		            resultPannel.addContent(oTable);   
		            layout.createRow(resultPannel);   
		            // Result Box ends here    
		            layout.placeAt('content');   
		   

	}

});
