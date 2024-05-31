<?php
$server_name="localhost";
$username="root";
$password="";
$database_name="db_connect";

$mysqli = new mysqli($server_name,$username,$password,$database_name);

if(isset($_POST['signup']) && $_POST['Name']!=""){
	$Name = $_POST['Name'];
	$Email = $_POST['Email'];
	$Password = $_POST['Password'];
	$status = 0;

	$sql_query = "SELECT `Password` FROM user_data WHERE Email='$Email'";

	if ($mysqli -> connect_errno) {
		echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
		exit();
	}
	  
	if ($result = $mysqli -> query($sql_query)) {
		if($result -> num_rows){
			echo '<script>alert("Account already exists")</script>';
			header("location: ./login-main.html");
			exit;
		}else{
			$sql_query = "INSERT INTO `user_data` (`Id`, `Name`, `Email`, `Password`, `status`) 
			VALUES ('', '$Name', '$Email', '$Password', '$status');";

			if ($mysqli -> query($sql_query))
			{
				echo '<script>alert("New Details Entry inserted successfully !")</script>';
				header("location: ../home.html");
				exit;
			} 

			$mysqli -> close();
		}
	}
}

if(isset($_POST['login'])){
	$Email = $_POST['Email'];
	$Password = $_POST['Password'];

	$sql_query = "SELECT `Id`, `Password`, `Name` FROM user_data WHERE Email='$Email'";

	if ($mysqli -> connect_errno) {
		echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
		exit();
	}
	  
	if ($result = $mysqli -> query($sql_query)) {
		if($result -> num_rows){
			$row = $result->fetch_assoc();
			if($row["Password"] == $Password){
				echo "You have successfully logged in";
				$name = $row["Name"];
				$id = $row["Id"];
				header("location: ../home.html?name=".$name."&id=".$id);
				exit;
			}else{
				echo "<script> alert(hi); </script>";
				echo "Incorrect Password";
				header("location: ./login-main.html");
				exit;
			}
		}else{
			echo '<script>alert("Account does not exist")</script>';
		}
	}
}
?>