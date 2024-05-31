<?php
$server_name="localhost";
$username="root";
$password="";
$database_name="db_connect";

$mysqli = new mysqli($server_name,$username,$password,$database_name);

if(isset($_POST['id'])){

    $id = $_POST['id'];
    
    $sql_query = "SELECT `Imdb_id` FROM watch_later WHERE Id=$id";

	if ($mysqli -> connect_errno) {
		echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
		exit();
	}
	  
	if ($result = $mysqli -> query($sql_query)) {
        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
                echo "<br> IMDb_id: ". $row["Imdb_id"]. "<br>";
            }
        } else {
            echo "0 results";
        }
	}
}