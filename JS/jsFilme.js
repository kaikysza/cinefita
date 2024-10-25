$(document).ready(function () {
    var page = 1;
    var current_page = 1;
    var total_page = 0;
    var is_ajax_fire = 0;
    var types = new Map();
    var dataCon;
    createHeadTable();
    createForm();
    createEditForm();
    manageData();

    function manageData() {

        $.ajax({
            dataType: 'json',
            url: './Get/getFilme.php',
            data: { page: page }
        }).done(function (data) {
            total_page = Math.ceil(data.total / 10);
            current_page = page;
            $('#pagination').twbsPagination({
                totalPages: total_page,
                visiblePages: current_page,
                onPageClick: function (event, pageL) {
                    page = pageL;
                    if (is_ajax_fire != 0) {
                        getPageData();
                    }
                }
            });

            manageRow(data.data);
            is_ajax_fire = 1;
        });
    }

    function getPageData() {
        $.ajax({
            dataType: 'json',
            url: './Get/getFilme.php',

            data: { page: page }
        }).done(function (data) {
            manageRow(data.data);
        });
    }

    function manageRow(data) {

        dataCon = data;
        var rows = '';
        var i = 0;
        $.each(data, function (key, value) {
            rows = rows + '<tr>';
            rows = rows + '<td>' + value.filme_id + '</td>';
            rows = rows + '<td>' + value.titulo + '</td>';
            rows = rows + '<td>' + value.genero + '</td>';
            rows = rows + '<td>' + value.ano + '</td>';
            rows = rows + '<td>' + value.duracao + '</td>';
            rows = rows + '<td>' + value.quantidade + '</td>';
            rows = rows + '<td>' + value.usuario_id + '</td>';
            rows = rows + '<td data-id="' + i++ + '">';
            rows = rows + '<button data-toggle="modal" data-target="#edit-item" class="btn btn-primary edit-item">Editar</button> ';
            rows = rows + '<button class="btn btn-danger remove-item"  data-id="' + value.filme_id + '">Deletar</button>';
            rows = rows + '</td>';
            rows = rows + '</tr>';
        });

        $("tbody").html(rows);
    }
    function createHeadTable() {

        var rows = '<tr>';
        rows = rows + '<th> Código </th>';
        rows = rows + '<th> Título </th>';
        rows = rows + '<th> Gênero </th>';
        rows = rows + '<th> Ano </th>';
        rows = rows + '<th> Duração </th>';
        rows = rows + '<th> Quantidade </th>';
        rows = rows + '<th> Usuário </th>';
        rows = rows + '<th width="200px">Ação</th>'
        rows = rows + '</tr>'
        $("thead").html(rows);
    }
    function createForm() {
        var html = '';
        html = html + '<div class="form-group">';
        html = html + '<label class="control-label" for="titulo">Título</label>';
        html = html + '<input type="text" name="titulo" class="form-control" data-error="Insira o titulo do filme" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<label class="control-label" for="genero">Gênero</label>';
        html = html + '<input type="text" name="genero" class="form-control" data-error="Insira o gênero do filme" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<label class="control-label" for="ano">Ano</label>';
        html = html + '<input type="text" name="ano" class="form-control" data-error="Insira o ano do filme" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<label class="control-label" for="duracao">Duração</label>';
        html = html + '<input type="text" name="duracao" class="form-control" data-error="Insira a duração do filme" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<label class="control-label" for="quantidade">Quantidade</label>';
        html = html + '<input type="text" name="quantidade" class="form-control" data-error="Insira a quantidade disponível" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<button type="submit" class="btn crud-submit btn-success">Salvar</button>';
        html = html + '</div>';
        $("#create-item").find("form").html(html);
    }
    function createEditForm() {

        var html = '<input type="hidden" name="cod" class="edit-id">';
        html = html + '<div class="form-group">';
        html = html + '<label class="control-label" for="filme_id">Código</label>';
        html = html + '<input type="text" name="filme_id" class="form-control" data-error="Insira o código do filme" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<label class="control-label" for="titulo">Título</label>';
        html = html + '<input type="text" name="titulo" class="form-control" data-error="Insira o título do filme" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<label class="control-label" for="genero">Gênero</label>';
        html = html + '<input type="text" name="genero" class="form-control" data-error="Insira o gênero do filme" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<label class="control-label" for="ano">Ano</label>';
        html = html + '<input type="text" name="ano" class="form-control" data-error="Insira o ano do filme" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<label class="control-label" for="duracao">Duração</label>';
        html = html + '<input type="text" name="duracao" class="form-control" data-error="Insira a duração do filme" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<label class="control-label" for="quantidade">Quantidade</label>';
        html = html + '<input type="text" name="quantidade" class="form-control" data-error="Insira a quantidade do filme" required />';
        html = html + '<div class="help-block with-errors"></div>';
        html = html + '</div>';
        html = html + '<div class="form-group">';
        html = html + '<button type="submit" class="btn crud-submit-edit btn-success">Salvar</button>';
        html = html + '</div>';
        $("#edit-item").find("form").html(html);
    }


    $(".crud-submit").click(function (e) {
        e.preventDefault();
        var form_action = $("#create-item").find("form").attr("action");
        var filme_id = $("#create-item").find("input[name='filme_id']").val();
        var titulo = $("#create-item").find("input[name='titulo']").val();
        var genero = $("#create-item").find("input[name='genero']").val();
        var ano = $("#create-item").find("input[name='ano']").val();
        var duracao = $("#create-item").find("input[name='duracao']").val();
        var quantidade = $("#create-item").find("input[name='quantidade']").val();

        $.ajax({
            dataType: 'json',
            type: 'POST',
            url: form_action,
            data: { filme_id: filme_id, titulo: titulo, genero: genero, ano: ano, duracao: duracao, quantidade: quantidade }
        }).done(function (data) {
            $("#create-item").find("input[name='filme_id']").val('');
            $("#create-item").find("input[name='titulo']").val('');
            $("#create-item").find("input[name='genero']").val('');
            $("#create-item").find("input[name='ano']").val('');
            $("#create-item").find("input[name='duracao']").val('');
            $("#create-item").find("input[name='quantidade']").val('');
            getPageData();
            $(".modal").modal('hide');
            toastr.success(data.msg, 'Alerta de Sucesso', { timeOut: 5000 });

        });

    });
    $("body").on("click", ".edit-item", function () {
        var index = $(this).parent("td").data('id');

        var filme_id = dataCon[index].filme_id;
        var titulo = dataCon[index].titulo;
        var genero = dataCon[index].genero;
        var ano = dataCon[index].ano;
        var duracao = dataCon[index].duracao;
        var quantidade = dataCon[index].quantidade;

        $("#edit-item").find("input[name='filme_id']").val(filme_id);
        $("#edit-item").find("input[name='titulo']").val(titulo);
        $("#edit-item").find("input[name='genero']").val(genero);
        $("#edit-item").find("input[name='ano']").val(ano);
        $("#edit-item").find("input[name='duracao']").val(duracao);
        $("#edit-item").find("input[name='quantidade']").val(quantidade);
    });

    $(".crud-submit-edit").click(function (e) {

        e.preventDefault();
        var form_action = $("#edit-item").find("form").attr("action");
        var filme_id = $("#edit-item").find("input[name='filme_id']").val();
        var titulo = $("#edit-item").find("input[name='titulo']").val();
        var genero = $("#edit-item").find("input[name='genero']").val();
        var ano = $("#edit-item").find("input[name='ano']").val();
        var duracao = $("#edit-item").find("input[name='duracao']").val();
        var quantidade = $("#edit-item").find("input[name='quantidade']").val();

        $.ajax({
            dataType: 'json',
            type: 'POST',
            url: form_action,
            data: { filme_id: filme_id, titulo: titulo, genero: genero, ano: ano, duracao: duracao, quantidade: quantidade }

        }).done(function (data) {

            getPageData();
            $(".modal").modal('hide');
            toastr.success(data.msg, 'Alerta de Sucesso', { timeOut: 5000 });
        });


    });

    function getDataSelect(type, select) {

        $.ajax({
            dataType: 'json', url: 'Acesso' + type,
            data: { page: page }
        }).done(function (data) {
            manageSelectOption(data.data, select, type);
        });
    }

    $("body").on("click", ".remove-item", function () {
        var filme_id = $(this).data('id');
        if (confirm("Você tem certeza que deseja deletar este filme?")) {
            $.ajax({
                type: "POST",
                url: "./Crud/deleteFilme.php",
                data: { filme_id: filme_id },
                success: function (response) {
                    getPageData();
                    toastr.success("Filme deletado com sucesso!", 'Alerta de Sucesso', { timeOut: 5000 });
                },
                error: function () {
                    toastr.error("Erro ao deletar o filme.", 'Alerta de Erro', { timeOut: 5000 });
                }
            });
        }
    });
});