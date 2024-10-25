<?php
    include '../Classes/conexao.php';
    include '../Classes/usuario.php';
    session_start();

    header('content-type: application/json');

    $sql = "UPDATE filmes SET titulo = '" .$_POST['titulo']. "', genero = '" .$_POST['genero']. "', ano = '" .$_POST['ano']. "', duracao = '" .$_POST['duracao']. "', quantidade = '" .$_POST['quantidade']. "', usuario_id = ".$_SESSION['user']->codigo. " WHERE filme_id = " .$_POST['filme_id']. "";

    if($conn->query($sql)===true){
        $msg = "Filme atualizado com sucesso";
    }else{
        $msg = "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();

    echo json_encode(['msg'=>$msg]);
?>