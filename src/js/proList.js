$('.model').hide()
$('.payBtn').on('touchend', () => {
  $('.model').fadeIn(222)
});

$('.model').on('touchend', () => {
  $('.model').fadeOut(222)
});

$('.loginBtn').on('touchend', () => {
  //alert(123)
});
$('.proLink,.proImg').on('touchend', () => {
  $('.modelPro').fadeIn(222)
});
$('#closeBtn').on('touchend', () => {
  $('.modelPro').fadeOut(222)
})
