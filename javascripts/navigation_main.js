$(function(){
  // $('.dropdown-menu a').click(function(e) {
  // $('.active a').click(function(e) {
  $('.main_input a').click(function(e) {
    // alert('aaa')
      $('#main_content').hide().load( $(this).attr('href') , function(){
         $('#main_content').show()
      })
      return false
  })
})
