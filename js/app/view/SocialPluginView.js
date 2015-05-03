$(window).load(function() {
    SocialPluginView = {
        Class : function()
        {
            View.Class.apply(this);
            
            this.bindLoading = function()
            {
				//this.cleanPanel();
                //this.turnOffErrors();
                //this.turnOnLoading();
            };
            
            this.bindError = function(error)
            {
                $(".tcsearcherror>strong").html(error);
                this.centerElement("#tccontent", ".tcsearcherror");
                this.turnOnElement(".tcsearcherror");
            }; 
            
            this.turnOffErrors = function()
            {
                this.turnOffElement(".tcsearcherror");
            };
            
            this.cleanPanel = function()
			{   
				$(".socialplugin_content>.thumbs").html('');			
			}; 
            
            this.turnOnLoading = function()
            {
                this.centerElement("#tccontent", ".tcloading");
                this.turnOnElement(".tcloading");
            };
            
            this.turnOffLoading = function()
            {
                this.turnOffElement(".tcloading");
            };
            
            this.bindList = function(list)
            {                
                $(".socialplugin_content>.thumbs").stop().animate({ opacity: 0 }, 800,function(){
                    bind = '';
                    for(j=0;j<list.items.length;j++)
                    {                    
                        classe = j>0 ? '' : 'mrglftnone';
                        social = list.items[j];

                        html = '<a class="item '+ classe +'" href="'+social.url+'" title="'+social.nome+'" target="_blank"><img width="50" height="50" src="'+social.thumb+'" /></a>';

                        bind += html;
                    }
                    $(".socialplugin_content>.thumbs").html(bind);
                    $(".socialplugin_content>.thumbs").stop().animate({ opacity: 1.0 }, 800);
                });

            };
        }
    };
});