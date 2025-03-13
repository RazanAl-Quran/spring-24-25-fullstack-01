<?php

include 'connect.php';

if(isset($_POST['add-project'])) {
    // collect the info from form/post 

    print_r($_POST);

    $projectName = $_POST['projectName'];
    $projectImg = $_POST['projectImg'];


    // insert to DB
    $sql = "INSERT INTO projects (project_name,project_image) VALUES ('$projectName', '$projectImg')";

    $result = mysqli_query($conn,query: $sql);



    // redirect
    if($result) {
        header("Location: Index.php");
    } else {
        mysqli_error($conn);
    }
}

?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form style="width: 30rem;" method="post">
        <div class="form-group">
            <label for="projectName">Project Name</label>
            <input type="text" class="form-control" placeholder="Enter Project Name" name="projectName">
        </div>
        <div class="form-group">
            <label for="projectImg">Project Image</label>
            <input type="text" class="form-control" placeholder="Enter Project Image URL" name="projectImg">
        </div>
        <button type="submit" name="add-project" class="btn btn-primary">Add Project</button>
    </form>
</body>

</html>