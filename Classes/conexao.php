<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "cinefita";

    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Falha na conexão: " . $conn->connect_error);
    }
?>