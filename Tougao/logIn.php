<?php
/**
 * Created by PhpStorm.
 * User: msc
 * Date: 16/12/6
 * Time: 上午9:04
 */

$type = $_POST["type"];

if ($type == 0){
    //注册模块
    $userName = $_POST["username"];
    $passWord = $_POST["password1"];
    $passWord1 = $_POST["password2"];
    $mysqli = new mysqli("localhost:3306","root","","Item");
    if ($mysqli->connect_errno){
        die($mysqli->connect_error);
    }
    $mysqli->query("set names stf8");
    $sql = "SELECT userName FROM logIn";
    $result = $mysqli->query($sql);
    $arr = $result->fetch_all(MYSQLI_ASSOC);
    if (count($arr) == 0){
        $sql2 = "INSERT INTO logIn VALUES(NULL,'{$userName}','{$passWord}','{$passWord1}')";
        $result = $mysqli->query($sql2);
        $mysqli->close();
        if ($result){
            $resultArr = ["name" => $userName,"state" =>1];
            echo json_encode($resultArr);
        }else{
            $resultArr = ["error" => "注册失败","state" =>2];
            echo json_encode($resultArr);
        }
    }else{
        for ($i = 0;$i < count($arr); $i++){
            if ($arr[$i]["userName"] == $userName){
                $resultArr = ["error" => "用户名重复","state"=>0];
                echo json_encode($resultArr);
                die();
            }else{
                $sql2 = "INSERT INTO logIn VALUES(NULL,'{$userName}','{$passWord}','{$passWord1}')";
                $result = $mysqli->query($sql2);
                $mysqli->close();
                if ($result){
                    $resultArr = ["name" => $userName,"state" =>1];
                    echo json_encode($resultArr);
                }else{
                    $resultArr = ["error" => "注册失败","state" =>2];
                    echo json_encode($resultArr);
                }
            }
        }
    }
}else {
    //登录信息
    $userName = $_POST["username"];
    $passWord = $_POST["password"];
    $mysqli = new mysqli("localhost:3306", "root", "", "Item");
    if ($mysqli->connect_errno) {
        die($mysqli->connect_error);
    }
    $mysqli->query("set names utf8");
    $sql = "SELECT * FROM logIn WHERE username = '{$userName}' AND password = '{$passWord}'";
    $result = $mysqli->query($sql);
    $arr = $result->fetch_all(MYSQLI_ASSOC);
    if (count($arr) != 0) {
        $resultArr = ["name" => $userName, "state" => 3];
        echo json_encode($resultArr);
    } else {
        $resultArr = ["error" => "登录失败", "state" => 4];
        echo json_encode($resultArr);
    }
}
