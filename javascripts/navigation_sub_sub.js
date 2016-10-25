$(function(){
  $('.sub_sub_input a').click(function(e) {
      $('#sub_sub_content').hide().load( $(this).attr('href') , function(){
         $('#sub_sub_content').show()
      })
      return false
  })
})
