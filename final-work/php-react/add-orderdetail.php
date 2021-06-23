<?php
// add-user.php is for inserting new users into the database.
// Method: POST - http://localhost/php-react/add-user.php
// Required Fields – user_name --> EmpName, user_email --> JobTitle

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// DB connection: $db_connection from db_connection.php
require 'db_connection.php';

// POST DATA
$data = json_decode(file_get_contents("php://input"));

if (isset($data->OId)
    && isset($data->PId)
    && isset($data->Qty)
    && isset($data->Counts)
    && !empty(trim($data->OId))
    && !empty(trim($data->PId))
    && !empty(trim($data->Qty))
    && !empty(trim($data->Counts))
) {
	$OId = mysqli_real_escape_string($db_connection, trim($data->OId));
    $PId = mysqli_real_escape_string($db_connection, trim($data->PId));
    $Qty = mysqli_real_escape_string($db_connection, trim($data->Qty));
    $Counts = mysqli_real_escape_string($db_connection, trim($data->Counts));
    $insertUser = mysqli_query($db_connection, "INSERT INTO `orderdetail`(`OrderId`,`ProdId`,`Qty`,`Discount`) VALUES('$OId','$PId','$Qty','$Counts')");
    if ($insertUser) {
        echo json_encode(["success" => 1, "msg" => "User Not Inserted!"]);
    } else {
        echo json_encode(["success" => 0, "msg" => "User Not Inserted!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}
?>