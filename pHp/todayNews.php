<?php
$mysqli = new mysqli("localhost:3306","root","","Item");
if ($mysqli->connect_errno){
    die($mysqli->connect_error);
}
$mysqli->query("set names utf8");
$sql = "SELECT * FROM tNews";
$result = $mysqli->query($sql);
$mysqli->close();
$arr = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($arr);