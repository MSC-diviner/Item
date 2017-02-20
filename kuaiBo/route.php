<?php
$type = $_POST["type"];
$index = $_POST["index"];
switch ($type){
    case "业界":
        require_once "industry/view.php";
        break;
    case "手机":
        require_once "phone/view.php";
        break;
    default:
        break;
}