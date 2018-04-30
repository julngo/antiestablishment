<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$name = $_POST['name'];
$visitor_email = $_POST['email'];
//Validate first
if(empty($name)||empty($visitor_email))
{
    echo "Empty name and email, please try again.";
    exit;
}
if(IsInjected($visitor_email))
{
    echo "Invalid email, submission failed.";
    exit;
}
//--------
if (isset($_POST["submit"])) {
  $to = 'imdae2018@gmail.com';
  $headers .= "From: $visitor_email \r\n";
  $headers .= "Reply-To: $visitor_email \r\n";
  $email_subject = "$subject \r\n";
  $email_body = "Investigator name: $name\n
  		Email: $visitor_email \r\n";
  mail($to,$email_subject,$email_body,$headers);
}
//------
// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
?>
