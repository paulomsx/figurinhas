class Local{
    
    constructor(){        
        let dados = localStorage.getItem("faltantes");
        if (dados==null)
        {
            var str =this.RepeteString('0',648);                
            localStorage.setItem("faltantes", str);
        }

        let repetidas = localStorage.getItem("repetidas");
        if (repetidas==null)
        {
            var str =this.RepeteString('0',648);                
            localStorage.setItem("repetidas", str);
        }

        // let usuario = localStorage.getItem("usuario");
        // if (usuario==null)
        // {
        //     localStorage.setItem("usuario", "");
        // }           
    }

    Get(){
        return(localStorage.getItem(tema=="a" ? "faltantes" : "repetidas"));
    }

    Put(dados){
        localStorage.setItem(tema=="a" ? "faltantes" : "repetidas", dados);
    }


    /*******************************************************/
    // USADO NO LOGIN    
    /*******************************************************/
    PutFaltantes(dados){
        localStorage.setItem( "faltantes", dados);
    }
    GetFaltantes(){
        return(localStorage.getItem("faltantes"));
    }
    PutRepetidas(dados){
        localStorage.setItem( "repetidas", dados);
    }
    GetRepetidas(){
        return(localStorage.getItem("repetidas"));
    }
    /*******************************************************/

    GetUsuario(){
        return(localStorage.getItem("usuario"));
    }

    PutUsuario(usuario){
        localStorage.setItem("usuario", usuario);
    }

    RepeteString(caracter, quantidade){
        let ret = ''; 
        while (quantidade-- > 0) ret += caracter; 
        return ret; 
    }
}

class Tema{
    
    constructor(){        
        let dados = localStorage.getItem("tema");
        if (dados==null)
        {
            
            localStorage.setItem("tema", "a");
        }
    }

    Get(){
        return(localStorage.getItem("tema"));
    }

    Put(tema){
        localStorage.setItem("tema", tema);
    }
}