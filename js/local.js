class Local{
    
        constructor(){        
            // this.api = "ListaArtigo";
            // this._ArtigoView  = new ArtigoView($("#ListaAtigos"));       

            var dados = localStorage.getItem("dados");
            if (dados==null)
            {
                var str =stringFill2('0',648);                
                localStorage.setItem("dados", str);
            }
        }
    
        Get(){
            return(localStorage.getItem("dados"));
        }

        Put(dados){
            localStorage.setItem("dados", dados);
        }
        

        // CarregaArtigos(artigo_codigo, book){
        //     if (artigo_codigo==""){
        //         return;
        //     }
            
        //     trava='N';
        //     count=2;
        //     let mythis      = this;
        //     let service = new ServicesDAO(
        //         mythis.api,
        //         {"senha": senha,"id": artigo_codigo}
        //     );
    
            
        //     service.http("POST")
        //     .then(dados => {
        //         mythis._ArtigoView.update(dados, book)
        //     })
        //     .catch(err => {
        //         TratamentoDeErros(err,"Lista Artigos");
        //     });
        // }
    }