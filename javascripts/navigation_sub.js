$(function(){
  $('.sub_input a').click(function(e) {
      $('#sub_content').hide().load( $(this).attr('href') , function(){
         $('#sub_content').show()
      })
      return false
  })
})
