$(function(){
  $('.main_input a').click(function(e) {
      $('#main_content').hide().load( $(this).attr('href') , function(){
         $('#main_content').show()
      })
      return false
  })
})
