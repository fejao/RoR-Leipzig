$(function(){
  $('.main_input a').click(function(e) {
    alert('navigation_main')
      $('#main_content').hide().load( $(this).attr('href') , function(){
         $('#main_content').show()
      })
      return false
  })
})
