<?
    include_once('./kolisnet_header.php');


    $sql = "SELECT  * FROM admin_kolisnet_table";
    $result = mysqli_query($conn,$sql);

    if(mysqli_num_rows($result)>0){
        $arr = array();
        while($row = mysqli_fetch_array($result)){
            array_push($arr,array(
                '아이디'     => $row['adminId'],
                '비밀번호'     => $row['adminPw'],
                '이름'     => $row['adminName'],
                '이메일'     => $row['adminEmail'],
                '휴대폰'     => $row['adminHp'],
                '가입날짜'     => $row['adminGaib']
            ));
        }
    }
    $json = json_encode($arr, JSON_UNESCAPED_UNICODE);
    echo $json;

?>