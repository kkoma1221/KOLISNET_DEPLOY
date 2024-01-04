<?
    include_once('./kolisnet_header.php');


    $sql = "SELECT  adminId FROM admin_kolisnet_table";
    $result = mysqli_query($conn,$sql);

   
    if(mysqli_num_rows($result)>0){
        $arr = array();
        while($row = mysqli_fetch_array($result)){
            array_push($arr,array(
                '아이디'     => $row['adminId']
            ));
        }
    }
    $json = json_encode($arr, JSON_UNESCAPED_UNICODE);
    echo $json;

?>