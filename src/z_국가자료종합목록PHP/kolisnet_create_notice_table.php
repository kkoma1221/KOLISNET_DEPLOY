<?
    
    include_once('./kolisnet_header.php');

    $SQL ="CREATE TABLE kolisnet_notice_table (
            idx         INT             NOT NULL    AUTO_INCREMENT,
            nSubject    VARCHAR(250)    NOT NULL,
            nContent    TEXT            NOT NULL,
            nName       VARCHAR(30)     NULL,
            nId         VARCHAR(16)     NULL,
            nHit        INT             NULL,
            nDate       timeStamp       DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY(idx)
        )ENGINE=MyISAM DEFAULT CHARSET=utf8mb4";



$result = mysqli_query($conn,$SQL);
if($result==false){
    echo "테이블 접속 실패";
}
else{
    echo "테이블 접속 성공";
}
?>


   