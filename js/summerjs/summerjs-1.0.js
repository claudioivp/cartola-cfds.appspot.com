$(window).load(function() {
    Util = {
        Class : function()
        {
			this.getVal = function(element)
            {
                return $(element).val();
            };

			this.setVal = function(element,val)
            {
                $(element).val(val);
            };
			
			this.getValInt = function(element)
            {
                return this.getInt($(element).val());
            };
            
            this.getInt = function(val)
            {
                return parseInt(val);
            };
        }
    };
    
    Paginator = {
        Class : function()
        {
            this.pag_atual = null;
            this.total_paginas = null;
            this.items = new Array();
            this.Rodada = new Rodada.Class();
        }
    };

    Model = {
        Class : function()
        {
            
        }
    };
    
    Service = {
        Class : function()
        {
            this.getJsonData = function(sync, url, callback)
            {	
                toreturn = null;
                
                $.ajaxSetup({
                    async: sync
                });
                
				$.getJSON(url, function(data)
                {
                    if(sync)
                    {
                        eval("new "+callback+"(data)");
                    }
                    else
                    {
                        toreturn = data;
                    }
				})
                .done(function() { console.log( /*"second success"*/ ); })
                .fail(function() { console.log( /*"error"*/ ); })
                .always(function() { console.log( /*"complete"*/ ); });  
                
                return toreturn;
            };
            
            this.postJson = function(url, postdata, callback)
            {
                $.ajaxSetup({
                    async: true
                });
                
                $.post(url, postdata, function(data)
                {
                    eval("new "+callback+"(data)");
				})
                .done(function() { console.log( /*"second success"*/ ); })
                .fail(function() { console.log( /*"error"*/ ); })
                .always(function() { console.log( /*"complete"*/ ); }); 
            };
        }
    };    
    
    Validation = {
        Class : function()
        {
            errors = new Object();
            
            this.addError = function(index,msg)
            {
                errors[index] = msg;
            };
            
            this.getErrors = function()
            {
                return errors;
            };
        }
    };
    
    Controller = {
        Class : function()
        {
            
        }
    }; 
    
    View = {
        Class : function()
        {
            this.centerElement = function(container, element)
            {
                containerH = $(container).height();
                containerW = $(container).width();
                elementH = $(element).height();
                elementW = $(element).width();        

                $(element).css("top", (containerH - elementH) / 2);
                $(element).css("left", (containerW - elementW) / 2);
            };

            this.turnOnElement = function(element)
            {
                $(element).fadeIn(500);
            };

            this.turnOffElement = function(element)
            {
                $(element).fadeOut(500);
            };

            this.enableElement = function(element)
            {
                $(element).prop("disabled", false);
            };

            this.disableElement = function(element)
            {
                $(element).prop("disabled", true);
            };
            
            this.virtualDisable = function(element)
            {
                $(element).unbind('click');
                $(element).addClass("disabled");
            };
            
            this.virtualEnable = function(element)
            {
                $(element).removeClass("disabled");
            };
            
            this.FancyMessage = function(msg)
			{
				$("#msgmodal").html(msg);
				
				$(".msgtrigger").fancybox({
					helpers : {
						overlay : {
							closeClick: false,
							css : {
								'background' : 'rgba(0, 0, 0, 0.8)'
							}
						},
						title : null 
					}
				});		
				
				$(".msgtrigger").trigger('click');				
			};
            
            this.FancyWindow = function()
			{
				$(".windowtrigger").fancybox({
					autoResize : false,
					fitToView : false,
					helpers : {
						overlay : {
							closeClick: false,
							css : {
								'background' : 'rgba(0, 0, 0, 0.8)'
							}
						},
						title : null 
					}
				});		
				
				$(".windowtrigger").trigger('click');				
			};
            
            this.getColorClass = function(value)
            {
                if(value < 0)
                {
                    return "tcpanelnegative";
                }
                
                return "tcpanelpositive";
            };
        }
    };
});