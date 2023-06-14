<?php
$servername='localhost';
$username='root';
$password='';
$dbname='company';
$conn=mysqli_connect($servername,$username,$password,$dbname);

if($conn){
    die("connection error"),mysqli_connect_error();

}
else{
    echo"db connected";
}

?>