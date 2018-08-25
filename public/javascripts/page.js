$(document).ready(function() {  

	$('#myFullpage').fullpage({
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    anchors: ['airport', 'eat', 'sightsee', 'souvenir', 'mnj'],
    css3: true,
    controlArrows: true,
    loopHorizontal: false,
    scrollOverflow: true,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    parallaxKey: 'c2xlZXB5LXRhaWdhLTM2ODUyLmhlcm9rdWFwcC5jb21fajZBY0dGeVlXeHNZWGc9cDFT',
    parallax: true,
    parallaxOptions: { type: 'reveal', percentage: 30, property: 'translate'},


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
        $('#souvenir-sidenav').removeClass('active');
        $('#souvenir-icon').attr('src', 'images/icon-gift.png');
      } else if (origin.index == 4) {
        $('#text-bg').hover(function() {
          $('#main-hidden').show();
        }, function() {
          $('#main-hidden').hide();
        });

        $('#main-hidden').hide();
        $('#text-bg').attr('src', 'images/mirajunda.png')
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
        $('#souvenir-sidenav').addClass('active');
        $('#souvenir-icon').attr('src', 'images/icon-gift-active.png');
      } else if (destination.index == 4) {
        $('#text-bg').hover(function() {
          $('#main-hidden').show();
        }, function() {
          $('#main-hidden').show();
        });
        $('#main-hidden').show();
        $('#text-bg').attr('src', 'images/mirajunda-aktif.png')
      }
    }
  });


});