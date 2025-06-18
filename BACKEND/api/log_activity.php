<?php
include("../config/db.php");

$data = json_decode(file_get_contents("php://input"));

$user_id = $data->user_id;
$activity = $data->activity;

$query = "INSERT INTO activity_logs (user_id, activity) VALUES ('$user_id', '$activity')";
$conn->query($query);

echo json_encode(["success" => true]);
?>
