$(window).load(function() {
    SocialPluginController = {
        Class : function()
        {
            Controller.Class.apply(this);
			
            this.showSocial = function()
            {
                this.retrieve();
            };
            
            this.retrieve = function()
            {
                spService = new SocialPluginService.Class();
                spView = new SocialPluginView.Class();
                
                spView.bindLoading();
                              
                spService.findTop15();
            };
            
            this.process = function(data)
            {
                spView = new SocialPluginView.Class();
                
                //spView.turnOffLoading();
                
                if(!data.items)
                {
                    spView.bindError("Não há sociais a exibir.");  
                }
                else
                {
                    spView.bindList(data);
                }
            };
        }
    };
});