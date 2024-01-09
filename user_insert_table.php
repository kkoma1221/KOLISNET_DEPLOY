<?
    include_once('./kolisnet_header_wonjin.php');

    $userType         = $_POST['userType'];          
    $userId         = $_POST['userId'];          
    $userPw       = $_POST['userPw'];        
    $userName      = $_POST['userName'];       
    $userBirth         = $_POST['userBirth'];   
    $userAddress         = $_POST['userAddress'];   
    $userGender         = $_POST['userGender'];   
    $userHp         = $_POST['userHp'];   
    $userEmail         = $_POST['userEmail'];   
    $SMSSelect         = $_POST['SMSSelect'];   
        
    
    $sql = "INSERT INTO kolisnet_user_table (userType,userId,userPw,userName,userBirth,userAddress,userGender,userHp,userEmail,SMSSelect) 
            VALUES ('$userType','$userId','$userPw','$userName','$userBirth','$userAddress','$userGender','$userHp','$userEmail','$SMSSelect')";
    $result = mysqli_query($conn,$sql);


    if($result===true){
        echo 1;
    }
    else{
        echo 0;
    }
?>