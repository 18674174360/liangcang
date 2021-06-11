<?php
include "./datas.php";
//获取传入的参数
$n=$_POST['username'];
$p=$_POST['password'];

//编写SQL语句
$sql="insert into user(name,pass)values('$n',$p)";
//执行SQL语句
$result=mysqli_query($link,$sql);
//判断当前数据是否添加成功
if($result){
    header("location:../HTML/login.html");
    // echo "注册成功";
}else{
    echo "<script>alert('注册失败');location.href='../HTML/zc.html'</script>";
    // echo "注册失败";
}
//关闭数据库连接
mysqli_close($link);


?>