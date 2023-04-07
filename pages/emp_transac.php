<?php
include'../includes/connection.php';
function p($x, $b = false) {
    echo '<pre>';
    print_r($x);
    echo '</pre>';
    if (!$b) {
        die();
    }
}

// display error of sql/ php
error_reporting(E_ALL);
ini_set('display_errors', 'On');
?>
  <?php
    $fname = $_POST['firstname'];
    $lname = $_POST['lastname'];
    $gen = $_POST['gender'];
    $email = $_POST['email'];
    $phone = $_POST['phonenumber'];
    $jobb = $_POST['jobs'];
    $hdate = $_POST['hireddate'];
    $prov = $_POST['province'];
    $cit = $_POST['city'];


    
    $query_run = mysqli_query($db,"INSERT INTO location
                    (PROVINCE, CITY)
                    VALUES ('$prov','$cit')");

    $lastid = mysqli_insert_id($db);

    $sql = "INSERT INTO employee (FIRST_NAME, LAST_NAME, GENDER, EMAIL, PHONE_NUMBER, JOB_ID, HIRED_DATE, LOCATION_ID)VALUES('$fname','$lname','$gen','$email', '$phone', $jobb,'$hdate', $lastid)";
    $query_run1 = mysqli_query($db, $sql);


    header('location:employee.php');
  ?>