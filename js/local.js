class Local{
    
    constructor(){        
        let dados = localStorage.getItem("dados");
        if (dados==null)
        {
            var str =this.RepeteString('0',648);                
            localStorage.setItem("dados", str);
        }
    }

    Get(){
        return(localStorage.getItem("dados"));
    }

    Put(dados){
        localStorage.setItem("dados", dados);
    }
    
    RepeteString(caracter, quantidade){
        let ret = ''; 
        while (quantidade-- > 0) ret += caracter; 
        return ret; 
    }
}