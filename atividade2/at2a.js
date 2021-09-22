function veiculo (modelos){
    if(modelos == "hatch"){
      return "Compra efetuada com sucesso";
    }
    else if(modelos== "sedans" || modelos == "motocicletas" || modelos == "caminhonetes"){
      return "Tem certeza que não prefere este modelo?"
    }
    else {
       return "Não trabalhamos com este tipo de automóvel aqui"
    }
  }
  console.log(veiculo("hatch"))
  
  
















