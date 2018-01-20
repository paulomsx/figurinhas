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
                beforeSend: () => {
                    
                    
                    $.mobile.loading( 'show', {
                      text: "aguarde",
                      textVisible: true,
                      theme: "b",
                      textonly: "false",
                      html: "aguarde..."
                      });
                },

                complete: () => {
                    $.mobile.loading( "hide" );
                },

                success: dados => {
                    debugger
                    resolve(dados); 
                },//successs
                error: XMLHttpRequest => {
                    debugger
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