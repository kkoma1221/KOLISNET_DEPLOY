<?

include_once('./kolisnet_header_wonjin.php');

$userId = $_POST['userId'];
$userPw = $_POST['userPw'];

$sql = "SELECT  *
        FROM    kolisnet_user_table 
        WHERE   userId='$userId' AND userPw='$userPw'";
$res = mysqli_query($conn, $sql);

if( mysqli_num_rows($res) > 0 ){
    $record = mysqli_fetch_array($res);
    echo '{"아이디": "'.$record['userId'].'",
           "이름": "'.$record['userName'].'",
           "휴대폰": "'.$record['userHp'].'",
           "주소":"'.$record['userAddress'].'",
           "이메일":"'.$record['userEmail'].'"}';
}
else{
    echo '';
}

?>