<script type="text/javascript" src="end.js"></script>
<script type="text/javascript" src="AWSend.js"></script>

<?php
$servername = "database-quiz-highscores.ci7tkowpkuqv.us-east-2.rds.amazonaws.com";
$username = "admin";
$password = "h1ghsc0res";
$database = "highscores_tech";

$conn = new mysqli($servername, $username, $password, $database);




$username = $_POST['username'];
$score = $_POST['score'];

$sql = "INSERT INTO highscores_tech (Person, score) VALUES (username, highScores)";

if ($conn->query($sql) === TRUE) {
    echo "Entry Added";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

//close Connection
mysqli_close($conn);

?>