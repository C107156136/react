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

if (isset($data->PId)
    && isset($data->PN)
    && isset($data->UP)
    && isset($data->Cost)
    && !empty(trim($data->PId))
    && !empty(trim($data->PN))
    && !empty(trim($data->UP))
    && !empty(trim($data->Cost))
) {
	$PId = mysqli_real_escape_string($db_connection, trim($data->PId));
    $PN = mysqli_real_escape_string($db_connection, trim($data->PN));
    $UP = mysqli_real_escape_string($db_connection, trim($data->UP));
    $Cost = mysqli_real_escape_string($db_connection, trim($data->Cost));
    $insertUser = mysqli_query($db_connection, "INSERT INTO `product`(`ProdName`,`ProdId`,`UnitPrice`,`Cost`) VALUES('$PN','$PId','$UP','$Cost')");
    if ($insertUser) {
        echo json_encode(["success" => 1, "msg" => "User Not Inserted!"]);
    } else {
        echo json_encode(["success" => 0, "msg" => "User Not Inserted!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}
?>