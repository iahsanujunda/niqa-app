$(document).ready(function() {
	$('#myFullpage').fullpage({
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    anchors: ['airport', 'eat', 'sightsee', 'sleep', 'souvenir', 'mnj'],
    css3: true,


    afterLoad: function(origin, destination, direction){
      var loadedSection = this;
  
      if(origin.index == 0){
        $('#airport-sidenav').removeClass('active');
      } else if (origin.index == 1) {
        $('#eat-sidenav').removeClass('active');
      } else if (origin.index == 2) {
        $('#sightsee-sidenav').removeClass('active');
      } else if (origin.index == 3) {
        $('#sleep-sidenav').removeClass('active');
      } else if (origin.index == 4) {
        $('#souvenir-sidenav').removeClass('active');
      }

      if(destination.index == 0){
        $('#airport-sidenav').addClass('active');
      } else if (destination.index == 1) {
        $('#eat-sidenav').addClass('active');
      } else if (destination.index == 2) {
        $('#sightsee-sidenav').addClass('active');
      } else if (destination.index == 3) {
        $('#sleep-sidenav').addClass('active');
      } else if (destination.index == 4) {
        $('#souvenir-sidenav').addClass('active');
      }
    }
	});
});