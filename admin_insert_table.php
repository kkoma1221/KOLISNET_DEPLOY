<?
    include_once('./kolisnet_header.php');

    $adminId         = $_POST['adminId'];          
    $adminPw         = $_POST['adminPw'];          
    $adminName       = $_POST['adminName'];        
    $adminEmail      = $_POST['adminEmail'];       
    $adminHp         = $_POST['adminHp'];                 
    
    $sql = "INSERT INTO admin_kolisnet_table (adminId,adminPw,adminName,adminEmail,adminHp) 
            VALUES ('$adminId','$adminPw','$adminName','$adminEmail','$adminHp')";
    $result = mysqli_query($conn,$sql);


    if($result===true){
        echo 1;
    }
    else{
        echo 0;
    }
?>