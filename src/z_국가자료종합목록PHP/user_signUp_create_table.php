<?
    include_once('./kolisnet_header_wonjin.php');

    $SQL = "CREATE TABLE kolisnet_user_table(
        userType VARCHAR(20) NOT NULL,
        userId VARCHAR(30) NOT NULL,
        userPw VARCHAR(30) NOT NULL,
        userName VARCHAR(20) NOT NULL,
        userBirth VARCHAR(20) NULL,
        userAddress VARCHAR(250) NOT NULL,
        userGender VARCHAR(20) NULL,
        userHp VARCHAR(20) NOT NULL,
        userEmail VARCHAR(50) NOT NULL,
        SMSSelect VARCHAR(20)  NULL,
        userGaib TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY(userId)
    )ENGINE=MyISAM DEFAULT CHARSET=utf8mb4";

    $result = mysqli_query($conn, $SQL);
    // if($result==false){
    //     echo "테이블 만들기 실패!!!";
    // }
    // else{
    //     echo "테이블 만들기 성공!!!";
    // }
?>