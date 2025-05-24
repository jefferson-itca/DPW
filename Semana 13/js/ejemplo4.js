$(document).ready(function(){
    let cont = 0;
    $(document).on("click","#crear",function(){
        cont ++;
        let formulario = "<div class='col-4 mt-2'><label for='texto"+cont+"'>Texto "+cont+
        ":</label><input type='text' id='texto"+cont+"' class='form-control texto'></div>";

        $("#resultado").append(formulario);
    });

    $(document).on("click", "#btnEnviar", function(){
        let arreglo = new Array();

        $(".texto").each(function(){
            arreglo.push($(this).val());
        });

        console.log(arreglo);
        
    });
});