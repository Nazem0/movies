<?php
require_once('config.php');
$data=[
    "name"=>"Mohamed",
    "age"=>23,
    "gender"=>"Male"
];
header('Content-Type: application/json; charset=utf-8');
return json_encode($data);
?>