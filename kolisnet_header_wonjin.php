<?

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');

    $DB_SERVER = 'localhost';
    $DB_USER_NAME = 'guon2999';
    $DB_USER_PW = 'wjdql2014864!#';
    $DB_NAME = 'guon2999';

    $conn = mysqli_connect($DB_SERVER,$DB_USER_NAME,$DB_USER_PW,$DB_NAME);
    mysqli_set_charset($conn,'utf8');

    // if($conn==false){
    //     echo "데이터베이스 접속 실패";
    // }
    // else{
    //     echo "데이터베이스 접속 성공";
    // }
    //http://guon2999.dothome.co.kr/kolisnet/user_signUp_create_table.php
    //http://guon299.co.kr/kolisnet/user_signUp_create_table.php
?>