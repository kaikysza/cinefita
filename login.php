<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CineFita | Login</title>
    <link rel="stylesheet" href="./CSS/login.css">
</head>

<body>
    <div class="wrapper">
        <div class="form-box login">
            <img src="./Imagens/logo.png" alt="Logo" class="logo">
            <h2>Realize seu Acesso</h2>
            <form action="./Classes/verifica.php" method="POST">
                <div class="input-box">
                    <span class="icon"><ion-icon name="person"></ion-icon></span>
                    <input type="text" name="usuario" required>
                    <label>Usuário</label>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                    <input type="password" name="senha" required>
                    <label>Senha</label>
                </div>

                <?php if (isset($_SESSION['msg'])): ?>
                    <label style="color: red; font-weight: bold; text-align: center; display: block;"><?php echo $_SESSION['msg']; ?></label>
                    <?php unset($_SESSION['msg']); ?>
                <?php endif; ?>

                <button type="submit" class="btn">Acessar</button>
            </form>
        </div>
    </div>

    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</body>
</html>