import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Storage } from '@ionic/storage';


@Injectable()
export class DadosAlunosProvider {

  public dados_alunos = [];
  public dados_desafios = [];
  public id_aluno;
  public pontTotalRealtime;
  // public pontDesafio: [];

  // private PATH = 'desafio/'

  constructor(public http: Http,
    public db: AngularFireDatabase,
    public storage: Storage
  ) {



    this.pegarDadosAlunos();
    this.pegarDadosDesafios();
    // this.existePontDesafio();
    //console.log("O que tem agora DADOS", this.id_aluno);


    if (this.id_aluno == undefined) {
      this.storage.get('id_alunoStorage')
        .then((resolve) => {
          this.id_aluno = resolve;
          //console.log("O que tá no ID ALUNO STORAGE do DADOS ALUNOS PROVEDER: ", this.id_aluno);
          // this.pegarPontuacaoTotal(this.id_aluno);
        })
    }

  }




  carregarRelatorio() {
    for (let i = 0; i < this.dados_alunos.length; i++) {
      this.dados_alunos[i]['aluno'];
      this.dados_alunos[i]['pontuacaoTotal'];


    }
  }


  // public pegarChave(){
  //  this.db.object(this.PATH).snapshotChanges()
  //   .map(c => {
  //     console.log("Que diaxo é isso: ", { key: c.key, ...c.payload.val()});
  //    return { key: c.key, ...c.payload.val()};
  //   });
  // }


  public pegarDadosAlunos() {
    this.http.get('https://apolo-19fee.firebaseio.com/alunos.json')
      .map(res => res.json())
      .subscribe(data => {
        //console.log(data, 'Dados Alunos');
        //console.log(data);
        if (data !== null && data !== undefined) {
          this.trataDados(data);
        }

      })

  }

  trataDados(ddalunos) {
    this.dados_alunos = Object.keys(ddalunos).map(i => {
      ddalunos[i]._id = i;
      // console.log('Array alunos: ', ddalunos[i]);
      return ddalunos[i];
    });

  }


  public pegarDadosDesafios() {

    this.http.get('https://apolo-19fee.firebaseio.com/desafio.json')
      .map(res => res.json())
      .subscribe(data => {
        //console.log(data, 'Dados Desafios');
        //console.log(data);
        if (data !== null && data !== undefined) {
          this.trataDadosDesafio(data);
        }

      })
  }


  trataDadosDesafio(dadosfb) {
    this.dados_desafios = Object.keys(dadosfb).map(i => dadosfb[i]);
    // console.log('Array Desafios: ', this.dados_desafios);
  }

  // public pegarPontuacaoTotal(chave: any){
  //   console.log("O que tá na chave do pegar pontuação: ", chave);
  //   this.db.database.ref('/alunos').child(chave).once('value').then(function(snapshot){
  //     this.pontTotalRealtime = snapshot.val().pontuacaoTotal;
  //     console.log("Mostrou a pontuação: ", snapshot.val().pontuacaoTotal);
  //        });
  // }


  // existePontDesafio() {
  //   this.storage.get('pontDesafio')
  //     .then(res => {
  //       if (res) {

  //         //this.stSessao = true;
  //         this.pontDesafio = res;

  //       } else {
  //         this.storage.set('pontDesafio', this.pontDesafio);
  //       }
  //     })

  // }
}
