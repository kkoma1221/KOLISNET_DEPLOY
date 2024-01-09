<?
    include_once('./kolisnet_header_wonjin.php');

    $userType         = "일반회원";          
    $userId         = "testuser1";          
    $userPw       = "1q2w3e4r!@";        
    $userName      = "아무개";       
    $userBirth         = "19920506";   
    $userAddress         = "서울시 어딘가";   
    $userGender         = "남";   
    $userHp         = "010-1234-5678";   
    $userEmail         = "guon299@naver.com";   
    $SMSSelect         = "문자받음";   
        
    
    $sql = "INSERT INTO kolisnet_user_table (userType,userId,userPw,userName,userBirth,userAddress,userGender,userHp,userEmail,SMSSelect) 
            VALUES ('$userType','$userId','$userPw','$userName','$userBirth','$userAddress','$userGender','$userHp','$userEmail','$SMSSelect')";
    $result = mysqli_query($conn,$sql);


    // if($result===true){
    //     echo 1;
    // }
    // else{
    //     echo 0;
    // }
?>