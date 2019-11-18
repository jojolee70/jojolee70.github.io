		jQuery(function(){
			// Target
			var $target = $('body');
            
// important code section
            
            //end of important code section for taking the user to a specific section horizontally on click
            
            $('#one-button').click(function() {
            $target.scrollTo($('#color-palette') , 800);
			});
            
            $('#two-button').click(function() {
            $target.scrollTo($('#mix') , 800);
			});
            
            $('.home-button').click(function() {
            $target.scrollTo($('#start-options') , 800);
			});
          
           
            
		});
