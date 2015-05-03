	$(window).load(function() {
    SocialPluginService = {
        Class : function()
        {
            Service.Class.apply(this);
            
            this.findTop15 = function()
            {
                url = RouteHost + "index.php?mvc=json/socialplugin"; 
                this.getJsonData(true, url, "SocialPluginService.Class().findResult");
            };
			
			this.findResult = function(data)
            {
                socials = null;
                items = null;

                if(data.items)
                {
                    items = new Array();

                    j = 0;
                    $.each(data.items, function(i,Soc){
                        social  = new SocialPlugin.Class();
                        social.id = util.getInt(Soc.spl_id);
                        social.nome = Soc.spl_nome;
                        social.url = Soc.spl_link;
                        social.thumb = Soc.spl_thumb;

                        items[j] = social;
                        j++;
                    });
                    
                    socials = new Object();
                    socials.items = items;
                }

                eval("new SocialPluginController.Class().process(socials)");
            };
        }
    };
});