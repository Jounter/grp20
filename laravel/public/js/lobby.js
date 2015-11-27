(function() {
	'use strict';
	 document.getElementById("buttonCollapseSideBar").addEventListener("click", function () {
			var sideMenu = $('#sideMenu');
			var mainArea = $('#mainArea');
			if(sideMenu.hasClass("hiddenSidebar") === true){
				mainArea.toggleClass('col-md-7');
				mainArea.toggleClass('col-sm-7');
				sideMenu.toggleClass('hiddenSidebar');
				$('#buttonCollapseSideBar button img').attr( "src", "img/menuClose.png");
				sideMenu.toggle("slow");
			}else{
			 sideMenu.toggleClass( 'hiddenSidebar');
				$('#buttonCollapseSideBar button img').attr( "src", "img/menuOpen.png");
				sideMenu.toggle("slow");
				mainArea.toggleClass('col-md-7');
				mainArea.toggleClass('col-sm-7');
				
			}

		});


	 /*
	CHECK THIS:
	 https://jqueryui.com/tabs/#default */
	 $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });
})();
