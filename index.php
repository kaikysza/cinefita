<?php
    include_once './CLASSES/conexao.php';
    include_once './CLASSES/usuario.php';
    session_start();

    $classe = isset($_GET["classe"]) ? $_GET["classe"] : "";
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CineFita | Página Inicial</title>
    <link rel="stylesheet" type="text/css" href="./CSS/index.css">
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> 
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twbs-pagination/1.3.1/jquery.twbsPagination.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/1000hz-bootstrap-validator/0.11.5/validator.min.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>   
    <link href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" rel="stylesheet">        
    <script src="./JS/js<?php echo $classe; ?>.js"></script>
</head>

<body>
    <div class="hero">
        <nav class="nav">
            <h2 class="logo">Cine<span class="red">Fita</span></h2>
            <ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="index.php?classe=filme">Filmes</a></li>
                <li><a href="./Classes/logout.php">Sair</a></li>
            </ul>
        </nav>
    </div>

    <div class="text-center">
        <h5><strong>Usuário Logado:</strong> <?php echo $_SESSION['user']->nome; ?></h5>
    </div>

    <?php if (!empty($classe)) { ?>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 margin-tb">
                    <div class="pull-left">
                        <h2 class="titulo">Cadastro de <?php echo $classe; ?></h2>
                    </div>
                    <div class="pull-right">
                        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#create-item">
                            Cadastrar <?php echo $classe; ?>
                        </button>
                    </div>
                </div>
            </div>

            <table class="table table-bordered">
                <thead>
                </thead>
                <tbody>
                </tbody>
            </table>

            <ul id="pagination" class="pagination-sm"></ul>

            <div class="modal fade" id="create-item" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                            <h4 class="modal-title" id="myModalLabel">Cadastrar <?php echo $classe; ?></h4>
                        </div>
                        <div class="modal-body">
                            <form data-toggle="validator" action="./Crud/insert<?php echo $classe; ?>.php" method="POST">
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="edit-item" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                            <h4 class="modal-title" id="myModalLabel">Editar <?php echo $classe; ?></h4>
                        </div>
                        <div class="modal-body">
                            <form data-toggle="validator" action="./Crud/update<?php echo $classe; ?>.php" method="POST">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <?php } ?>
</body>
</html>