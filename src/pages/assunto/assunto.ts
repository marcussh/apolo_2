import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { TelaDicaPage } from '../tela-dica/tela-dica';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthPage } from '../auth/auth';
import { DadosFirebaseProvider } from '../../providers/dados-firebase/dados-firebase';
import { DadosAlunosProvider } from '../../providers/dados-alunos/dados-alunos';
import { Aluno } from '../../app/models/aluno';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';


@IonicPage({
  name: 'assunto-page'
})
@Component({
  selector: 'page-assunto',
  templateUrl: 'assunto.html',
})
export class AssuntoPage {

  public aluno;
  public dadosDesafios = [];
  public pontDica: Observable<any>;
  public aluno_model: Aluno;
  public teste: String;
  public id_aluno;
  public teste2;
  public pont;
  public inicio = moment().format('LT');
  public fim;
 

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public storage: Storage,
    public db: AngularFireDatabase,
    public dbFirebase: DadosFirebaseProvider,
    public dbAlunos: DadosAlunosProvider
    
  ) {
    this.storage.get('pontuacaoTotal')
    .then((resolve) => {
      this.pont = resolve;
    })

    
    // this.teste2 = Observable.interval(2000)
    // .map(valor => console.log("Observable deu certo", this.teste));
      // if (this.id_aluno == undefined) {
      //   this.storage.get('id_alunoStorage')
      //   .then((resolve) => {
      //     this.id_aluno = resolve;
      //     console.log("O que tá no ID ALUNO STORAGE do ASSUNTO: ", this.id_aluno);
      //   })
      // } else {
      //   console.log("quem carrega primeiro: ASSUNTO", this.id_aluno);
      // }
  
     
      // this.dbAlunos.pegarPontuacaoTotal(this.id_aluno);
      
  }



  ionViewDidLoad() {
    // this.pegarDadosFirebase();
    //this.pegarDadosDesafios();
    //console.log("Array DADOS DB: ",this.dbFirebase.dadosDb);
    //console.log("quem carrega primeiro: ionViewDIdLoad de ASSUNTO");
    this.storage.get('alunoStorage')
    .then((resolve) => {
      this.aluno = resolve
    })
   
    //console.log("O que tem agora ASSUNTO", this.id_aluno);
  }
  finalizar(){
    
  return this.fim = moment().format('LT');
    
    

  // console.log(this.fim - this.inicio);

  }


  carregarPontuacao(chave: any){
    return this.db.list('alunos/', ref => ref.child(chave))
    .snapshotChanges()
    .map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
    })
  }

  // public updateNoFirebase(chave: any) {
  //   console.log("Update: ", this.db.database.ref('/desafio').child(chave).update(
  //     { 'aluno': "Deu certo o update 22222" }
  //   ));
  // }

  selecionaAssunto(selassunto: String, indice: number) {
    //console.log(selassunto);
    this.inicio;
    
    this.navCtrl.push(TelaDicaPage.name, {
     
        assuntoSelecionado: selassunto,
        indiceAssunto: indice
       
     
     
    });
    this.storage.set('assunto', selassunto);


  }

 
  remove() {
    this.storage.remove('stAberto');
    this.storage.remove('alunoStorage');
    this.storage.remove('stDesafio');
    this.storage.remove('id_alunoStorage');
    this.storage.remove('assunto');
    this.storage.remove('pontuacaoTotal');
    this.navCtrl.setRoot(AuthPage);
    this.navCtrl.push(AuthPage, {
      
    });
  }

  

  // trataDadosDesafios(dadosfb) {
  //   this.dadosDesafios = Object.keys(dadosfb).map(i => dadosfb[i]);
  //   for (let i = 0; i < this.dadosDesafios.length; i++) {
  //     for (let j = 0; j <= i; j++) {
  //       console.log("Aluno: ", this.dadosDesafios[i]['aluno']);
  //       this.teste = this.dadosDesafios[i]['aluno']
  //       // if (this.selassunto == this.dadosDb[i]['assunto']) {
  //       //   // this.dica1 = this.dadosDb[i]['dica1'];


  //       //   // if (this.dica1 == undefined) {
  //       //   //   this.ocultar[0] = true;

  //       //   // }
  //       //   // else {
  //       //   //   this.ocultar[0] = false;

  //       //   // }

  //       // }

  //     }
  //   }

  // }



// pegarDadosFirebase() {
  //   this.http.get('https://apolo-19fee.firebaseio.com/formulario.json')
  //     .map(res => res.json())
  //     .subscribe(data => {
  //       console.log(data, 'Dados do firebase');
  //       console.log(data);
  //       if (data !== null && data !== undefined) {
  //         this.trataDados(data);

  //       }

  //     })
  // }

  // trataDados(dadosfb) {
  //   this.dadosDb = Object.keys(dadosfb).map(i => {
  //     this.storage.set('dadosStorage', this.dadosDb)
  //     console.log(i);
  //     dadosfb[i]._id = i;
  //     return dadosfb[i];
  //   });
  // }


}
