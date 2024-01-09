<?
    
    include_once('./kolisnet_header.php');

    $SQL ="CREATE TABLE admin_kolisnet_table (
        `adminId`        VARCHAR(16)     NOT NULL,    
        `adminPw`        VARCHAR(16)     NOT NULL,        
        `adminName`      VARCHAR(50)     NOT NULL,      
        `adminEmail`     VARCHAR(250)    NOT NULL,     
        `adminHp`        VARCHAR(13)     NOT NULL,        
        `adminGaib`      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY(`adminId`)
    )ENGINE=MyISAM DEFAULT CHARSET=utf8mb4";



$result = mysqli_query($conn,$SQL);
// if($result==false){
//     echo "테이블 접속 실패";
// }
// else{
//     echo "테이블 접속 성공";
// }
?>


   