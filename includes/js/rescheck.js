  $('input[name^="rescheck"]').click(function() 
  { var index = $(this).parent().index(); console.log(index); 
  $('.resource:eq(' + index + ')').toggle() });