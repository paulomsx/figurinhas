var local = new Local(); 

$(document).ready(function() {

    
    carregar_html("principal.html","principal");
    $(".titulo").html("COPA 2018");
    
    let contador = 0;
    for (k = 0; k <= 6 ; k++) { 
        menu("menu_pag"+k,"pag"+k);
        $(carrega_conteudo(contador)).appendTo( "#contenudo"+k ).enhanceWithin();
        contador+=100;
    }

    /**********************************************************************/
    /* INI - LOCAL DADOS */
    /**********************************************************************/
    

    AtualizaFigurinhas();
    

    /**********************************************************************/
    /* FIM - LOCAL DADOS */
    /**********************************************************************/


     /**********************************************************************/
     $( "input[type='checkbox']" ).change(function() {
        let dados = local.Get();
        let pos = parseInt($(this).attr('id').replace("fig",""),10);
        local.Put(substituiCharPosicao(dados,pos,dados.substring(pos,pos+1)=="0" ? "1" : "0"));
     });                
    /**********************************************************************/

});

/**************************************************************************************************/
function menu(menu,opcao){
    return new Promise((resolve, reject) => {
        var _menu =`
        <ul>
            <li><a href="#inicio" ${opcaoMenu(opcao,'inicio')}>INÍCIO</a></li>
            <li><a href="#pag0"   ${opcaoMenu(opcao,'pag0')}>000-099</a></li>
            <li><a href="#pag1"   ${opcaoMenu(opcao,'pag1')}>100-199</a></li>
            <li><a href="#pag2"   ${opcaoMenu(opcao,'pag2')}>200-299</a></li>
            <li><a href="#pag3"   ${opcaoMenu(opcao,'pag3')}>300-399</a></li>
            <li><a href="#pag4"   ${opcaoMenu(opcao,'pag4')}>400-499</a></li>
            <li><a href="#pag5"   ${opcaoMenu(opcao,'pag5')}>500-599</a></li>
            <li><a href="#pag6"   ${opcaoMenu(opcao,'pag6')}>600-639</a></li>            
        </ul>`;

        //$("#"+menu).append(_menu);
        $( _menu ).appendTo( "#"+menu ).enhanceWithin();
        resolve();    
    });	
}   

function opcaoMenu(escolha,opcao){
    var retorno = "";
    if (escolha==opcao) retorno = 'class="ui-btn-active ui-state-persist"';
    return(retorno);
}
/**************************************************************************************************/

function Padder(len, pad) {

    if (len === undefined) {
        len = 1;
    } else if (pad === undefined) {
        pad = '0';
    }

    var pads = '';
    while (pads.length < len) {
        pads += pad;
    }

    this.pad = function (what) {
        var s = what.toString();
        return pads.substring(0, pads.length - s.length) + s;
    };
}

function carrega_conteudo(valor){
    let zero3 = new Padder(3);
    let conteudo = "";
    let inc = 100;

    if (valor==600) inc=40;

    for (i = valor; i < valor+inc; i++) { 
        let numero = zero3.pad(i);
        conteudo+=`
            <input type="checkbox" name="fig${numero}" id="fig${numero}">
            <label for="fig${numero}">${numero}</label>`;
    }
    return(conteudo); 
}    


/********************************************/

function AtualizaFigurinhas(){
    let numero = new Padder(3);
    let dados = local.Get()
    for (var i=0;i<dados.length;i++)
    {
        if (dados.substr(i,1)=="1") $('#fig'+numero.pad(i)).attr('checked',"1")
    }
}

function substituiCharPosicao(s,  pos, c) {
    return s.substring(0,pos) + c + s.substring(pos+1);
}

function carregar_html(pagina, div){
    $("#"+div).load(pagina, function() {
        $(this).trigger('create');
    });
}

