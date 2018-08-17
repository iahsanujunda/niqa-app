$(document).ready(function() {
	$('#myFullpage').fullpage({
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    anchors: ['airport', 'eat', 'sightsee', 'sleep', 'souvenir', 'mnj'],
    css3: true,


    afterLoad: function(origin, destination, direction){
      var loadedSection = this;
  
      if(origin.index == 0){
        $('#airport-sidenav').removeClass('active');
        $('#airport-icon').attr('src', 'images/icon-kno.png');
      } else if (origin.index == 1) {
        $('#eat-sidenav').removeClass('active');
        $('#eat-icon').attr('src', 'images/icon-eat.png');
      } else if (origin.index == 2) {
        $('#sightsee-sidenav').removeClass('active');
        $('#sightsee-icon').attr('src', 'images/icon-sightsee.png');
      } else if (origin.index == 3) {
        $('#sleep-sidenav').removeClass('active');
        $('#sleep-icon').attr('src', 'images/icon-sleep.png');
      } else if (origin.index == 4) {
        $('#souvenir-sidenav').removeClass('active');
        $('#souvenir-icon').attr('src', 'images/icon-gift.png');
      }

      if(destination.index == 0){
        $('#airport-sidenav').addClass('active');
        $('#airport-icon').attr('src', 'images/icon-kno-active.png');
      } else if (destination.index == 1) {
        $('#eat-sidenav').addClass('active');
        $('#eat-icon').attr('src', 'images/icon-eat-active.png');
      } else if (destination.index == 2) {
        $('#sightsee-sidenav').addClass('active');
        $('#sightsee-icon').attr('src', 'images/icon-sightsee-active.png');
      } else if (destination.index == 3) {
        $('#sleep-sidenav').addClass('active');
        $('#sleep-icon').attr('src', 'images/icon-sleep-active.png');
      } else if (destination.index == 4) {
        $('#souvenir-sidenav').addClass('active');
        $('#souvenir-icon').attr('src', 'images/icon-gift-active.png');
      }
    }
	});
});