<?php
    include '../Classes/conexao.php';

    header('content-type: application/json');

    $sql = "DELETE FROM filmes WHERE filme_id = " . $_POST['filme_id'];

    if($conn->query($sql) === true){
        $msg = "Filme deletado com sucesso!";
    }else{
    $msg = "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();

    echo json_encode(['msg'=>$msg]);
?>