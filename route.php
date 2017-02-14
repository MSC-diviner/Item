<?php
$type = $_POST["type"];
switch ($type){
    case 0:
        require_once "pHp/shouYe.php";
        break;
    case 1:
        require_once "pHp/View.php";
        break;
    case 2:
        require_once "pHp/chuangTou.php";
        break;
    case 3:
        require_once "pHp/shangye.php";
        break;
    case 4:
        require_once "pHp/zhiKe.php";
        break;
    case 5:
        require_once "pHp/kuaiBao.php";
        break;
    default:
        break;
}