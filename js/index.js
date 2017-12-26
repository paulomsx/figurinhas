var local = new Local(); 
var objTema = new Tema(); 
var tema;

$(document).ready(function() {
    
    
    tema=objTema.Get();
    
    carregar_html("principal.html","principal");

    AtualizaTela();

    /**********************************************************************/
     $( "input[type='checkbox']" ).change(function() {
        let dados = local.Get();
        let pos = parseInt($(this).attr('id').replace("fig",""),10);
        local.Put(substituiCharPosicao(dados,pos,dados.substring(pos,pos+1)=="0" ? "1" : "0"));
     });                
    /**********************************************************************/

});

function rodape(){
    $(".rodape").html(`
    <div data-role="footer">
        <small>&#169; ÁLBUM DA COPA 2008</spam></small>
    </div>`);
}

/**********************************************************************/

function AtualizaTela(){
        
    let contador = 0;
    for (k = 0; k <= 6 ; k++) { 
        menu("menu_pag"+k,"pag"+k);
        //$(carrega_conteudo(contador)).appendTo( "#contenudo"+k ).enhanceWithin();
        $(carrega_conteudo(contador)).html("");

        $(carrega_conteudo(contador)).appendTo( "#contenudo"+k );
        contador+=100;
    }

    rodape();

    /**********************************************************************/
    /* INI - LOCAL DADOS */
    /**********************************************************************/
    AtualizaFigurinhas();
    /**********************************************************************/
    /* FIM - LOCAL DADOS */
    /**********************************************************************/
}

/**************************************************************************************************/
function menu(menu,opcao){
    
    // return new Promise((resolve, reject) => {


        let _menu =`
        <div data-role="header" data-theme="${tema}">
        <h3>COPA 2018</h3>
        <div data-role="navbar">
        <ul>
            <li><a href="#inicio" data-transition="none">INÍCIO</a></li>
            <li><a href="#pag0"   ${opcaoMenu(opcao,'pag0')} data-transition="none">000-099</a></li>
            <li><a href="#pag1"   ${opcaoMenu(opcao,'pag1')} data-transition="none">100-199</a></li>
            <li><a href="#pag2"   ${opcaoMenu(opcao,'pag2')} data-transition="none">200-299</a></li>
            <li><a href="#pag3"   ${opcaoMenu(opcao,'pag3')} data-transition="none">300-399</a></li>
            <li><a href="#pag4"   ${opcaoMenu(opcao,'pag4')} data-transition="none">400-499</a></li>
            <li><a href="#pag5"   ${opcaoMenu(opcao,'pag5')} data-transition="none">500-599</a></li>
            <li><a href="#pag6"   ${opcaoMenu(opcao,'pag6')} data-transition="none">600-639</a></li>            
        </ul>
        </div>
        </div>
        `;

        $("#"+menu).html("");
        $( _menu ).appendTo( "#"+menu );
      
    //     resolve();    
    // });	
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

    conteudo+=`
    <div data-role="content">
    
    <fieldset data-role="controlgroup" data-type="horizontal" data-theme="${tema}">`;

    for (i = valor; i < valor+inc; i++) { 
        let numero = zero3.pad(i);

        conteudo+=`
        <input type="checkbox" name="fig${numero}" id="fig${numero}">
        <label for="fig${numero}">${numero}</label>`;
    }
    conteudo+=`
    </fieldset>
    </div>`;

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

$("#repetidas").click(function(){
    alert('clicked!');
});

		
     