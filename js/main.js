$(document).ready(function() {
  $('#hide-button').on('click', function() {
    $('#image1').hide();
    $('#image2').addClass('center-image');
  });
  $('#show-button').on('click', function() {
    $('#image1').show();
    $('#image2').removeClass('center-image');
  });
});
