<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="home.css">
</head>

<body>
    <h1 class="heading">
        <span class="d">D</span><span class="r">R</span><span class="a1">A</span><span class="g">G</span><span
            class="o">O</span><span class="n">N</span><span class="b">B</span><span class="a2">A</span><span
            class="l1">L</span><span class="l2">L</span><span class="z">Z</span><span class="game"> GAME</span>
    </h1><br><br>
    <video autoplay="true" loop="true" src="bckvideo.mp4"></video>
    <main>
        <div class="msg">
            <h3 class="msg1">ARE YOU A SAIYAN OF OUR WORLD </h3>
            <br>
            <h3 class="msg2"> "IF NOT JOIN NOW ,Unleash your potential by logging in or signing up and become a legend
                in our Saiyan community!"</h3>
        </div>

        <div class="button">
            <button class="btn login">Login</button> 
            <button class="btn signup">Sign Up</button>
        </div> 

        <div id="login" class="modal hidden"> 
            <form id="window"  method="POST">
                <h2 class="head">LOGIN</h2>
                <h3 class="nickname">Nickname</h3>
                <input type="text" name="nicknamelog"placeholder="Enter Nickname">
                <h3 class="password" >Password</h3>
                <input type="password" name="passwordlog" placeholder="Enter Password" required><br>
                <div class="button">
                    <button class="inbutton" type="submit" name="submitlogin" value="Sign In">Sign In</button>
                    <button id="loginbackbtn" class=" close">Go Back</button>
                </div>
            </form>
        </div>

        <div class="overlay hidden"></div>

        <div id="signup" class="modal hidden">
            <form id="window"  method="POST">
                <h2 class="head">SIGN UP</h2>
                <h3 class="username">Username</h3>
                <input type="text" name="username" placeholder="Enter Username">
                <h3 class="nickname">Nickname</h3>
                <input type="text" name="nicknamesub"placeholder="Enter Nickname">
                <h3 class="birth">Date of Birth</h3>
                <input type="date" name="dob" placeholder="Enter Date of Birth">
                <h3 class="password">Password</h3>
                <input type="password" name="passwordsub"placeholder="Enter Password" required>
                <div class="button" id="signupbtn">
                    <button class="inbutton" type="submit" name="submitsign" value="Sign In">Sign In</button>
                    <button id="signupbackbtn" class=" close">Go Back</button>
                </div>
            </form>
        </div>

        <div class="overlay hidden"></div>
    </main>
    <script src="home.js"></script>

    
</body>

</html>
<?php


// Create a connection to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dbz";

// Create a connection
$db = mysqli_connect($servername, $username, $password, $dbname);

// Check if the connection was successful
if ($db === false) {
  die("Error connecting to the database: " . mysqli_connect_error());
}
// create the dbtable table if it doesn't already exist
$sql = "CREATE TABLE if not exists dbtable (
  username VARCHAR(20),
  nickname VARCHAR(20),
  dob DATE,   
  password VARCHAR(50)  
)"; 

$db->query($sql);


// Check if the form was submitted
if (isset($_POST['submitsign'])) {

  // Get the form data
  $username = $_POST['username'];
  $nickname = $_POST['nicknamesub'];
  $dob = $_POST['dob'];
  $password = $_POST['passwordsub'];

  // Check if the username already exists
  $sql = "SELECT * FROM dbtable WHERE username = '$username'";
  $result = $db->query($sql);

  if ($result->num_rows>0) {
    // Username already exists
    echo "The username already exists. Please choose a different username.";
  } else {

    // Insert the data into the database
    $sql = "INSERT INTO dbtable (username, nickname, dob, password) VALUES ('$username', '$nickname', '$dob', '$password')";
    $db->query($sql);
}
}

// Check if the login form was submitted
if (isset($_POST['submitlogin'])) {

  // Get the form data
  $nickname = $_POST['nicknamelog'];
  $password = $_POST['passwordlog'];

  // Check if the user exists in the database
  $sql = "SELECT * FROM dbtable WHERE nickname = '$nickname' AND password = '$password'";
  $result = $db->query($sql);

  if ($result->num_rows>0) {

    // User exists, login the user
    session_start();
    $_SESSION['username'] = $username;
    $_SESSION['nickname'] = $nickname;

    // Redirect the user to the home page
// Get the current directory




// Set the header to go to the file
header("Location: ../Game/dbz.html");

  } else {

    // User does not exist, show an error message
    // echo "<p>The username or password is incorrect. Please try again.</p>";
  }
}
?>   
