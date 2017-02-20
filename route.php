<?php
$type = $_POST["type"];
switch ($type){
    case 0:
        require_once "pHp/aView.php";
        break;
    case 1:
        require_once "pHp/bView.php";
        break;
    case 2:
        require_once "pHp/chuanmei.php";
        break;
    case 3:
        require_once "pHp/cView.php";
        break;
    case 4:
        require_once "pHp/dView.php";
        break;
    case 5:
        require_once "pHp/jinrong.php";
        break;
    case 6:
        require_once "pHp/jxdd.php";
        break;
    case 7:
        require_once "pHp/kjkb.php";
        break;
    case 8:
        require_once "pHp/kuaiBao.php";
        break;
    case 9:
        require_once "pHp/rmtj.php";
        break;
    case 10:
        require_once "pHp/shangye.php";
        break;
    case 11:
        require_once "pHp/todayNews.php";
        break;
    case 5:
        require_once "pHp/touzi.php";
        break;
    case 5:
        require_once "pHp/View.php";
        break;
    default:
        break;
}