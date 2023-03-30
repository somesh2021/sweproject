<?php
//connect to MySQL database
$conn = mysqli_connect("localhost", "username", "password", "mydb");

//check if form is submitted
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    //get username and password from form submission
    $username = $_POST['username'];
    $password = $_POST['password'];

    //insert data into MySQL database
    $sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
    mysqli_query($conn, $sql);
}
?>
