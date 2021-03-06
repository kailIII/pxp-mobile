Ext.define('pxp.store.EstadoWf', {
    extend: 'Ext.data.Store',    
    requires: [
       'Ext.data.proxy.Memory',
       'Ext.util.Sorter',
       'pxp.model.EstadoWf'
    ],    
    config: {
	    autoLoad: false,
	    simpleSortMode: true,
	    remoteFilter: true,
	    pageSize: 20,
	    model: 'pxp.model.EstadoWf' ,
	    successProperty: 'success'	    
	 },
	 initialize: function(){
	   var me = this;
       me.setProxy({
	        type: 'ajax',
	        withCredentials: true,
	        useDefaultXhrHeader: false,
	        url: pxp.apiRest._url('workflow/TipoEstado/listarTipoEstado'),
	        reader : {
		        type : 'json',
		        rootProperty : 'datos',
		        totalProperty: 'total'
		    }
	    });
    } 

});

