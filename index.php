
<?php
$firstname=$_POST["Firstnamereg"];
$lastname=$_POST["lastnamereg"];
$email=$_POST["emailreg"];
$password=$_POST["passwordreg"];
$conn=new mysqli("localhost","root","","tpdw");
$stmt=$conn->prepare("insert into users(firstname,lastname,email,password) values(?,?,?,?);");
$stmt->bind_param("ssss",$firstname,$lastname,$email,$password);
$stmt->execute();

?>