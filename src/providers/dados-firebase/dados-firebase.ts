import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class DadosFirebaseProvider {

  public dadosDb = [];
  public statusDesafio: boolean[] = [false];
  public stSlide: any[] = [false];
  public aberto: boolean[] = [false, false, false, false, false, false, false, false];

  constructor(public http: Http,
    public storage: Storage
    ) {
      this.pegarDadosFirebase();
      this.existeStatusDesafio();
     
   

    console.log("Status desafio: ", this.statusDesafio);
    
  }

  



  pegarDadosFirebase() {
    this.http.get('https://apolo-19fee.firebaseio.com/formulario.json')
      .map(res => res.json())
      .subscribe(data => {
        //console.log(data, 'Dados do firebase');
        //console.log(data);
        if (data !== null && data !== undefined) {
          this.trataDados(data);

        }

      })
  }

  trataDados(dadosfb) {
    this.dadosDb = Object.keys(dadosfb).map(i => {
      //  this.storage.set('dadosStorage', this.dadosDb)
      //console.log(i);
      dadosfb[i]._id = i;
      // console.log("Array Temas: ",dadosfb[i]);
     
      return dadosfb[i];
      
    });
  }


  existeStatusDesafio() {
    this.storage.get('stDesafio')
      .then(res => {
        if (res) {
    
          //this.stSessao = true;
          this.statusDesafio = res;
         
        } else {
          this.storage.set('stDesafio', this.statusDesafio);
        }
      })

      this.storage.get('stAberto')
      .then(res => {
        if (res) {
    
          //this.stSessao = true;
          this.aberto = res;
         
        } else {
          this.storage.set('stAberto', this.aberto);
        }
      })

  }
  
  // carregarStorage(){
  //   this.storage.get('dadosStorage')
  //   .then((resolve) => {
  //     this.dadosStorage = resolve;
  //     console.log("o que deu: ", this.dadosStorage);
  //     // if (resolve !== null && resolve !== undefined){
  //     //   //this.dadosStorage = JSON.parse(resolve);
  //     //   console.log("dados do carrega: ", this.dadosStorage);

  //     //  }

  //   })
  // }
}
