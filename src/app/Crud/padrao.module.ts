export class PadraoModule { 
  carregar() {
    if(localStorage.getItem('pessoas') === null || localStorage.getItem('pessoas') == undefined) {
      console.log('Não há pessoas cadastradas!');
      let pessoas = [
        {
          id: 1,
          nome: "Lucas",
          cpf: '70213241110',
          dataNascimento : '18061996',
          sexo : 'Masculino',
          

        }, 
      ];

      localStorage.setItem('pessoas', JSON.stringify(pessoas));
      console.log(pessoas)
      return 
    } 
  }
}

