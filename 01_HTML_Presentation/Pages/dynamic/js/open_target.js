$(function(){
  // $('.dropdown-menu a').click(function(e) {
  // $('.active a').click(function(e) {
  $('.input a').click(function(e) {
      $('#content').hide().load( $(this).attr('href') , function(){
         $('#content').show()
      })
      return false
  })
})
