<?php
$mysqli = new mysqli("localhost:3306","root","","Item");//创建一个并打开数据库;
if ($mysqli->connect_errno){
    die($mysqli->connect_error);
}
$mysqli->query("set names utf8");
$sql = "SELECT * FROM venture WHERE mark = '创业'";
$result = $mysqli->query($sql);
$arr = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($arr);