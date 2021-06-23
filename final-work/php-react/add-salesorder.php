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
    && isset($data->EId)
    && isset($data->CId)
    && isset($data->ODate)
	&& isset($data->Des)
    && !empty(trim($data->OId))
    && !empty(trim($data->EId))
    && !empty(trim($data->CId))
    && !empty(trim($data->ODate))
	&& !empty(trim($data->Des))
) {
	$OId = mysqli_real_escape_string($db_connection, trim($data->OId));
    $EId = mysqli_real_escape_string($db_connection, trim($data->EId));
    $CId = mysqli_real_escape_string($db_connection, trim($data->CId));
    $ODate = mysqli_real_escape_string($db_connection, trim($data->ODate));
	$Des = mysqli_real_escape_string($db_connection, trim($data->Des));
    $insertUser = mysqli_query($db_connection, "INSERT INTO `salesorder`(`OrderId`,`EmpId`,`CustId`,`OrderDate`,`Descript`) VALUES('$OId','$EId','$CId','$ODate','$Des')");
    if ($insertUser) {
        echo json_encode(["success" => 1, "msg" => "User Not Inserted!"]);
    } else {
        echo json_encode(["success" => 0, "msg" => "User Not Inserted!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}
?>