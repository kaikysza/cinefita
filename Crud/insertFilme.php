<?php
    include '../Classes/conexao.php';
    include '../Classes/usuario.php';
    session_start();

    header('content-type: application/json');

    $sql = "INSERT INTO filmes (titulo, genero, ano, duracao, quantidade, usuario_id) VALUES ('" . $_POST['titulo'] . "', '" . $_POST['genero'] . "', '" . $_POST['ano'] . "', '" . $_POST['duracao'] . "', '" . $_POST['quantidade'] . "', " .  $_SESSION['user']->codigo . ")";

    if($conn->query($sql) === true){
        $msg = "Filme cadastrado com sucesso!";
    }else{
        $msg = "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();

    echo json_encode(['msg'=>$msg]);
?>