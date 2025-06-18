<?php
include("../config/db.php");

$query = "SELECT users.username, activity_logs.activity, activity_logs.timestamp 
          FROM activity_logs 
          JOIN users ON activity_logs.user_id = users.id 
          ORDER BY activity_logs.timestamp DESC";

$result = $conn->query($query);

$logs = [];
while ($row = $result->fetch_assoc()) {
  $logs[] = $row;
}

echo json_encode($logs);
?>
