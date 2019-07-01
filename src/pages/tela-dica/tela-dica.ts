import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Content, AlertController } from 'ionic-angular';

import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { MostraRespostaPage } from '../mostra-resposta/mostra-resposta';
import { DadosFirebaseProvider } from '../../providers/dados-firebase/dados-firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { DadosAlunosProvider } from '../../providers/dados-alunos/dados-alunos';




@IonicPage()
@Component({
  selector: 'page-tela-dica',
  templateUrl: 'tela-dica.html',
})
export class TelaDicaPage {
  public currentIndex = 0;
  public pontuacao: number = 0;
  public dadosDb = [];
  public selassunto: String;
  public assunto;
  public dica1;
  public dica2;
  public dica3;
  public dica4;
  public dica5;
  public dica6;
  public dica7;
  public dica8;
  public dica9;
  public dica10;
  public resposta;
  public ocultar: boolean[] = [];
  public valor2: string;
  public mostraResultado: boolean = false;
  public indice: number;
  public statusSlide: any[] = [false];
  public teste: any[][] = [[0,0]];
  public id_aluno;
  public pont;
  public abriu = [];
  public abriu1;
  public abriu2;
  public abriu3;
  public abriu4;
  public abriu5;
  public abriu6;
  public abriu7;
  public abriu8;
  @ViewChild(Slides) slides: Slides;
  @ViewChild(Content) content: Content;

  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public storage: Storage,
    private alertCtrl: AlertController,
    public dbFirebase: DadosFirebaseProvider,
    public db: AngularFireDatabase,
    public dbAlunos: DadosAlunosProvider
  ) {
  
    
    this.selassunto = this.navParams.get('assuntoSelecionado');
    this.indice = this.navParams.get('indiceAssunto');
    
    if (this.indice == 0){
      //this.abriu1 = true;
     this.dbFirebase.aberto[this.indice] = true;
     this.storage.set('stAberto', this.dbFirebase.aberto);
      //console.log("Abriu 1", this.abriu1);
      console.log(this.dbFirebase.aberto);
    }

    if (this.indice == 1){
      this.abriu1 = true;
     this.dbFirebase.aberto[this.indice] = true;
     this.storage.set('stAberto', this.dbFirebase.aberto);
      console.log("Abriu 1", this.abriu1);
      console.log(this.dbFirebase.aberto);
    }

    if (this.indice == 2){
      this.abriu2 = true;
      this.dbFirebase.aberto[this.indice] = true;
      this.storage.set('stAberto', this.dbFirebase.aberto);
      console.log("Abriu 2", this.abriu2);
      console.log(this.dbFirebase.aberto);
    }

    if (this.indice == 3){
      this.abriu3 = true;
      this.dbFirebase.aberto[this.indice] = true;
      this.storage.set('stAberto', this.dbFirebase.aberto);
      console.log("Abriu 3", this.abriu3);
      console.log(this.dbFirebase.aberto);
    }

    if (this.indice == 4){
      this.abriu4 = true;
      this.dbFirebase.aberto[this.indice] = true;
      this.storage.set('stAberto', this.dbFirebase.aberto);
      console.log("Abriu 4", this.abriu4);
      console.log(this.dbFirebase.aberto);
    }

    if (this.indice == 5){
      this.abriu5 = true;
      this.dbFirebase.aberto[this.indice] = true;
      this.storage.set('stAberto', this.dbFirebase.aberto);
      console.log("Abriu 5", this.abriu5);
      console.log(this.dbFirebase.aberto);
    }
    if (this.indice == 6){
      this.abriu5 = true;
      this.dbFirebase.aberto[this.indice] = true;
      this.storage.set('stAberto', this.dbFirebase.aberto);
      console.log("Abriu 5", this.abriu5);
      console.log(this.dbFirebase.aberto);
    }

    console.log("Indice: ", this.indice);
  

    this.storage.set('stAbriu1', this.abriu1);
    
        this.storage.get('stDesafio')
      .then((resolve) => {
        this.dbFirebase.statusDesafio = resolve;
      })

      this.storage.get('stAberto')
      .then((resolve) => {
        this.dbFirebase.aberto = resolve;
      })

    // this.storage.get('pontDesafio')
    // .then((resolve) => {
    //   this.dbAlunos.pontDesafio = resolve;
    // })

    this.storage.get('id_alunoStorage')
      .then((resolve) => {
        this.id_aluno = resolve;
        //console.log("O que tá no ID ALUNO STORAGE: ", this.id_aluno);
      })

    this.storage.get('pontuacaoTotal')
      .then((resolve) => {
        this.pont = resolve;
      })
  }

  abrirAlert() {
    let alert = this.alertCtrl.create({
      title: 'Resposta',
      inputs: [
        {
          name: 'resposta_alert',
          placeholder: 'Digite a resposta'
        }],
      buttons: [
        {
          text: 'Verificar',
          handler: data => {
            //console.log(data.resposta_alert);
            this.onVerificarResposta(data.resposta_alert);

          }
        }


      ]
    });
    alert.present();
  }


  chamarMostraResposta(mostraResultado: boolean, pontuacao: number) {
    if (mostraResultado == false) {
      pontuacao = 0;
    }
    this.navCtrl.push(MostraRespostaPage.name, {

      mostrar: mostraResultado,
      pontuacaoDica: pontuacao


    });
  }

  onVerificarResposta(valor: string) {

    this.valor2 = valor.toUpperCase();
    this.valor2 = this.valor2.trim();
    // this.pontuacaoGlobal.realizado[this.indice] = true;
    this.dbFirebase.statusDesafio[this.indice] = true;
    this.storage.set('stDesafio', this.dbFirebase.statusDesafio);
    // console.log("Array dos status desafio: ", this.dbFirebase.statusDesafio);
    // this.storage.set('dado', true);
    // this.pontuacaoGlobal.testarStorage('dado', this.indice);

    switch (this.currentIndex) {

      case 2:
      if (this.dbFirebase.aberto[2] == true){
        console.log("deu bom");
      } else if (this.resposta == this.valor2) {
          this.pontuacao = 100;
          // this.dbAlunos.pontDesafio[this.indice] = this.pontuacao;
          this.updateNoFirebase(this.id_aluno, this.pontuacao, this.indice);
          this.chamarMostraResposta(true, this.pontuacao);
          // this.pontuacaoGlobal.total += this.pontuacao;
        } else {

          this.chamarMostraResposta(false, this.pontuacao);

        }
        break;

      case 3:
        if (this.dbFirebase.aberto[3] == true){
          console.log("deu bom");
        } else
        if (this.resposta == this.valor2) {
          this.pontuacao = 90;
          // this.dbAlunos.pontDesafio[this.indice] = this.pontuacao;
          this.updateNoFirebase(this.id_aluno, this.pontuacao, this.indice);
          // this.statusDesafio = true;
          this.chamarMostraResposta(true, this.pontuacao);
          // this.pontuacaoGlobal.total += this.pontuacao;

        } else {

          this.chamarMostraResposta(false, this.pontuacao);
        }
        break;

      case 4: 
      if (this.dbFirebase.aberto[4] == true){
        console.log("deu bom");
      } else
     
        if (this.resposta == this.valor2) {
          this.pontuacao = 80;
          this.updateNoFirebase(this.id_aluno, this.pontuacao, this.indice);
          this.chamarMostraResposta(true, this.pontuacao);
          // this.pontuacaoGlobal.total += this.pontuacao;

        } else {
          this.chamarMostraResposta(false, this.pontuacao);
        }
        break;

      case 5: 
      if (this.dbFirebase.aberto[5] == true){
        console.log("deu bom");
      } else
        if (this.resposta == this.valor2) {
          this.pontuacao = 70;
          this.updateNoFirebase(this.id_aluno, this.pontuacao, this.indice);
          this.chamarMostraResposta(true, this.pontuacao);
          // this.pontuacaoGlobal.total += this.pontuacao;

        } else {
          this.chamarMostraResposta(false, this.pontuacao);
        }

        break;

      case 6:
        if (this.resposta == this.valor2) {
          this.pontuacao = 60;
          this.updateNoFirebase(this.id_aluno, this.pontuacao, this.indice);
          this.chamarMostraResposta(true, this.pontuacao);
          // this.pontuacaoGlobal.total += this.pontuacao;

        } else {
          this.chamarMostraResposta(false, this.pontuacao);
        }
        break;

      case 7: 
        if (this.resposta == this.valor2) {
          this.pontuacao = 50;
          this.updateNoFirebase(this.id_aluno, this.pontuacao, this.indice);
          this.chamarMostraResposta(true, this.pontuacao);
          // this.pontuacaoGlobal.total += this.pontuacao;

        } else {
          this.chamarMostraResposta(false, this.pontuacao);
        }
        break;
      case 8: 
        if (this.resposta == this.valor2) {
          this.pontuacao = 40;
          this.updateNoFirebase(this.id_aluno, this.pontuacao, this.indice);
          this.chamarMostraResposta(true, this.pontuacao);
          // this.pontuacaoGlobal.total += this.pontuacao;

        } else {
          this.chamarMostraResposta(false, this.pontuacao);
        }
        break;
      case 9: 
        if (this.resposta == this.valor2) {
          this.pontuacao = 30;
          this.updateNoFirebase(this.id_aluno, this.pontuacao, this.indice);
          this.chamarMostraResposta(true, this.pontuacao);
          // this.pontuacaoGlobal.total += this.pontuacao;

        } else {
          this.chamarMostraResposta(false, this.pontuacao);
        }
        break;
    }


  }

  ionViewDidLoad() {
    
    console.log(this.abriu);
    this.pegarDadosFirebase();
    this.assunto = this.storage.get('assunto');
    this.storage.get('assunto')
      .then((resolve) => {
        this.assunto = resolve;
      })
    //console.log("Varíavel assunto 2: ", this.assunto);

    for (let i = 0; i < 9; i++) {
      this.statusSlide[i] = false;
     
    }

  }

  public mostrarPontuacao(chave: any) {

    this.db.database.ref('/alunos').child(chave).once('value').then(function (snapshot) {
      console.log(snapshot.val().pontuacaoTotal);
    });



  }

  public updateNoFirebase(chave: any, pontuacao: number, indice: number) {

    switch (indice) {
      case 0: this.pont += pontuacao;
        console.log("Update: ", this.db.database.ref('/alunos').child(chave).update(
          {
            'pontuacaoTotal': this.pont,
            '0': pontuacao
          }

        ));

        this.storage.set('pontuacaoTotal', this.pont);
        break;
      case 1: this.pont += pontuacao;
        console.log("Update: ", this.db.database.ref('/alunos').child(chave).update(
          {
            'pontuacaoTotal': this.pont,
            '1': pontuacao
          }
        ));

        this.storage.set('pontuacaoTotal', this.pont);
        break;

        case 2: this.pont += pontuacao;
        console.log("Update: ", this.db.database.ref('/alunos').child(chave).update(
          {
            'pontuacaoTotal': this.pont,
            '2': pontuacao
          }
        ));

        this.storage.set('pontuacaoTotal', this.pont);
        break;

        case 3: this.pont += pontuacao;
        console.log("Update: ", this.db.database.ref('/alunos').child(chave).update(
          {
            'pontuacaoTotal': this.pont,
            '3': pontuacao
          }
        ));

        this.storage.set('pontuacaoTotal', this.pont);
        break;

        case 4: this.pont += pontuacao;
        console.log("Update: ", this.db.database.ref('/alunos').child(chave).update(
          {
            'pontuacaoTotal': this.pont,
            '4': pontuacao
          }
        ));

        this.storage.set('pontuacaoTotal', this.pont);
        break;

        case 5: this.pont += pontuacao;
        console.log("Update: ", this.db.database.ref('/alunos').child(chave).update(
          {
            'pontuacaoTotal': this.pont,
            '5': pontuacao
          }
        ));

        this.storage.set('pontuacaoTotal', this.pont);
        break;

        case 6: this.pont += pontuacao;
        console.log("Update: ", this.db.database.ref('/alunos').child(chave).update(
          {
            'pontuacaoTotal': this.pont,
            '6': pontuacao
          }
        ));

        this.storage.set('pontuacaoTotal', this.pont);
        break;

        case 7: this.pont += pontuacao;
        console.log("Update: ", this.db.database.ref('/alunos').child(chave).update(
          {
            'pontuacaoTotal': this.pont,
            '7': pontuacao
          }
        ));

        this.storage.set('pontuacaoTotal', this.pont);
        break;

        case 8: this.pont += pontuacao;
        console.log("Update: ", this.db.database.ref('/alunos').child(chave).update(
          {
            'pontuacaoTotal': this.pont,
            '8': pontuacao
          }
        ));

        this.storage.set('pontuacaoTotal', this.pont);
        break;

        case 9: this.pont += pontuacao;
        console.log("Update: ", this.db.database.ref('/alunos').child(chave).update(
          {
            'pontuacaoTotal': this.pont,
            '9': pontuacao
          }
        ));

        this.storage.set('pontuacaoTotal', this.pont);
        break;
    }



    //   this.pont += pontuacao;
    //    this.pont += pontuacao;
    //    console.log("E aqui:", this.pont);
    //   //  this.pontTotal += pontuacao;
    //   console.log("TOTAL: ", this.pont);
    // console.log("O que tá na chave: ", chave);
    // console.log("Update: ", this.db.database.ref('/alunos').child(chave).update(
    //   { 'pontuacaoTotal': this.pont,
    //      '1': pontuacao}
    // ));

    // this.storage.set('pontuacaoTotal', this.pont);


    // this.db.database.ref('/alunos').child(chave).once('value').then(function(snapshot){
    //   console.log("Mostrou a pontuação: ", snapshot.val().pontuacaoTotal);
    //  });
  }



  slideChanged() {
    
    this.currentIndex = this.slides.getActiveIndex();

   
        this.statusSlide[this.currentIndex - 1] = true;
        this.statusSlide.push(this.selassunto);
        //console.log(this.statusSlide);
        this.storage.set('stSlides', this.statusSlide);
            // this.teste = [this.selassunto];
            // this.teste.push(true);
            this.storage.get('stSlides')
            .then((resolve) => {
              this.dbFirebase.stSlide = resolve;
            
            })
           
            // console.log(this.teste);
                     
       
        
            
             
       
    
    
    // console.log("Index do Slide", this.currentIndex);
    // console.log("Booleano do sliede",this.statusSlide[this.currentIndex] );
  }

  pegarDadosFirebase() {
    this.http.get('https://apolo-19fee.firebaseio.com/formulario.json')
      .map(res => res.json())
      .subscribe(data => {

        if (data !== null && data !== undefined) {
          this.trataDados(data);
        }

      })
  }

  trataDados(dadosfb) {
    this.dadosDb = Object.keys(dadosfb).map(i => dadosfb[i]);
    //console.log("Array: ", this.dadosDb);
    for (let i = 0; i < this.dadosDb.length; i++) {
      for (let j = 0; j <= i; j++) {
        if (this.selassunto == this.dadosDb[i]['assunto']) {
          this.dica1 = this.dadosDb[i]['dica1'];
          if (this.dica1 == undefined) {
            this.ocultar[0] = true;
          }
          else {
            this.ocultar[0] = false;
          }
          this.dica2 = this.dadosDb[i]['dica2'];
          if (this.dica2 == undefined) {
            this.ocultar[1] = true;
          }
          else {
            this.ocultar[1] = false;
          }
          this.dica3 = this.dadosDb[i]['dica3'];
          if (this.dica3 == undefined) {
            this.ocultar[2] = true;
          } else {
            this.ocultar[2] = false;
          }
          this.dica4 = this.dadosDb[i]['dica4'];
          if (this.dica4 == undefined) {
            this.ocultar[3] = true;
          }
          this.dica5 = this.dadosDb[i]['dica5'];
          if (this.dica5 == undefined) {
            this.ocultar[4] = true;
          }
          this.dica6 = this.dadosDb[i]['dica6'];
          if (this.dica6 == undefined) {
            this.ocultar[5] = true;
          }
          this.dica7 = this.dadosDb[i]['dica7'];
          if (this.dica7 == undefined) {
            this.ocultar[6] = true;
          }
          this.dica8 = this.dadosDb[i]['dica8'];
          if (this.dica8 == undefined) {
            this.ocultar[7] = true;
          }
          this.dica9 = this.dadosDb[i]['dica9'];
          if (this.dica9 == undefined) {
            this.ocultar[8] = true;
          }

          this.dica10 = this.dadosDb[i]['dica10'];
          if (this.dica10 == undefined) {
            this.ocultar[9] = true;
            //console.log(i, "Tamanho da array: ", this.dadosDb[i]);
          }

          this.resposta = this.dadosDb[i]['resposta_correta'];
          this.resposta = this.resposta.toUpperCase();
        }

      }
    }

  }
}
