// Wait for the DOM to be ready
$( document ).ready(function() {

$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='editz']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      new_name: "required",
      new_email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      new_mobileno: {
        required: true,
        number:true,
        minlength: 10,
        maxlength:12
      }
    },
    // Specify validation error messages
    messages: {
      new_name: "Please enter your Name",
      new_mobileno: {
        required: "Please provide a mobileno",
        number:"mobileno must be in digits only ",
        minlength: "Your mobileno must be at least 10 characters long",
        maxlength: "Your mobileno maximum 12 characters long"

      },
      new_email: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});

});
