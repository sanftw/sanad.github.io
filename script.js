$(document).on('click', 'a', function(event) {
    event.preventDefault(); // Prevent default navigation behavior
    var url = $(this).attr('href'); // Get the target URL
    $('body').fadeOut(500, function() { // Apply the transition effect
      window.location.href = url; // Navigate to the new page
    });
  });