function limpar(){
    localStorage.removeItem("dados");
    var str =stringFill2('0',648);
    
    localStorage.setItem("dados", str);
}

function verificar(){
    var dados = localStorage.getItem("dados");
    alert(dados);
}

class dao{
    constructor(controle,parametros){
        this.api_endereco = "http://localhost:53389/api/"+controle;
        this.parametros   = parametros;
    }

    http(metodo){
        return new Promise((resolve, reject) => {
            $.ajax({
                type:        metodo,
                url:         this.api_endereco,
                contentType: "application/json; charset=utf-8",
                dataType:    "JSON",
                data:        this.parametros,
                success: dados => {
                    resolve(dados); 
                },//successs
                error: XMLHttpRequest => {
                    let erro="";
                    switch(XMLHttpRequest.status) {
                        case 0:
                            erro='Sem rede...';
                            break;
                        case 401:
                            erro='Não autorizado...';
                            break;
                        case 404:
                            erro='URL não encontrada...';
                            break;
                        case 409:
                            erro = XMLHttpRequest.responseText;
                            break;                        
                        case 500:
                            erro='Erro interno...';
                            break;                        
                        default:
                            erro='Erro desconhecido: ' + XMLHttpRequest.responseText;
                    }//switch
                    reject(erro);
                }//error
            });//ajax
        });//promisse		
    }//http
}//DAO

// $(document).ready(function () {
    
//     var dados = localStorage.getItem("dados");
//     if (dados==null)
//     {
//         var str =stringFill2('0',648);                
//         localStorage.setItem("dados", str);
//     }
//     else{
//         IniciaTela(dados);
//     }
    
//     /**********************************************************************/
//     $( "input[type='checkbox']" ).change(function() {
//        // alert("");    
//         var name = $(this);
//         var check = $(this).attr('checked');

//         var valor = $(this).attr('id');
//         var idnro = parseInt(valor.replace("fig",""),10);
       
//         var valorChecked;
//         var dados = localStorage.getItem("dados");
   
//         var t = Right(Left(dados,idnro+1),1);
//         if (t=="0")
//             valorChecked="1";
//         else
//             valorChecked="0";

//         dados = substituiCharPosicao(dados,idnro,valorChecked);         
//         localStorage.setItem("dados", dados);
//     });                
// });

// function stringFill2(x, n) { 
//     var s = ''; 
//     while (n-- > 0) s += x; 
//     return s; 
// } 

// function substituiCharPosicao(s,  pos, c) {
//    return s.substring(0,pos) + c + s.substring(pos+1);
// }


// function IniciaTela(dados){
//     for (var i=0;i<dados.length;i++)
//     {
//         var res = dados.substr(i,1);
        
//         if (res=="1"){
            
            
//             var objsetar = '#fig'+Right("00"+i,3);
          

//             $(objsetar).attr('checked',"1")
//             //$(objsetar).checkboxradio("refresh");
               
//         }
//     }
    
// }

// function Right(str, n){
//     if (n <= 0)
//        return "";
//     else if (n > String(str).length)
//        return str;
//     else {
//        var iLen = String(str).length;
//        return String(str).substring(iLen, iLen - n);
//     }
// }

// function Left(str, n){
//     if (n <= 0)
//     return "";
//     else if (n > String(str).length)
//     return str;
//     else
//     return String(str).substring(0,n);
// }   

