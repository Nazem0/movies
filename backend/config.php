<?php
session_start();
define("dsn","mysql:host=localhost;dbname=moviesapp");
$db=new PDO(dsn,'root','');
?>