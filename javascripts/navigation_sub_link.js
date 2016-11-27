$(function(){
  $('.sub_input_link a').click(function(e) {
      $('#sub_content_link').hide().load( $(this).attr('href') , function(){
         $('#sub_content_link').show()
      })
      return false
  })
})
