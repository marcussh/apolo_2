import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AngularFireDatabase } from '@angular/fire/database';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { DadosAlunosProvider } from '../../providers/dados-alunos/dados-alunos';



@IonicPage({
  name: 'auth-page'
})
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {

  alunos: FormGroup;
  desaf
  io: FormGroup;
  public stSessao: boolean = true;
  public aluno;
  public now = moment().format('MMMM Do YYYY, h:mm:ss a');
  public id_aluno;
  public pontuacaoTotal;


  constructor(public navCtrl: NavController,
    public formbuilder: FormBuilder,
    public formbuilder2: FormBuilder,
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public storage: Storage,
    public dbAlunos: DadosAlunosProvider
   


  ) {

    this.existe();

    this.alunos = this.formbuilder.group({
      aluno: [null, [Validators.required,Validators.maxLength(25)]],
      matricula: [null, [Validators.required]],
      pontuacaoTotal: 0,
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      dataAcesso: this.now

    })

    // this.desafio = this.formbuilder2.group({
    //   numero: 0,
    //   aluno: "",
    //   status: false,
    //   pontuacaoDesafio: 0

    // })

    
  }

  m
  entrar() {
    //console.log("Valores", this.alunos.value);
    
    this.storage.set('alunoStorage', this.alunos.value.aluno);
    this.db.database.ref('/alunos').push(this.alunos.value)
      .then((res) => {
       
        //console.log('salvou');
        //console.log(res.key);
        this.pontuacaoTotal = this.alunos.value.pontuacaoTotal;
        this.storage.set('pontuacaoTotal', this.pontuacaoTotal);
        this.id_aluno = res.key;
        this.storage.set('id_alunoStorage', this.id_aluno);
        // console.log("ID ALUNO: ", this.id_aluno);
        //this.relatorio.reset();
        this.navCtrl.setRoot(HomePage, {});
        //this.navCtrl.push(HomePage, {});
        //this.storage.set('aluno', );
      })
      
    // this.criar();
  }



  // criar() {
  //   this.db.database.ref('/desafio').push(this.desafio.value)
  //     .then((res2) => {
  //       console.log('salvou');
  //       console.log(res2);
  //     })


  // }

 



  existe() {
    this.storage.get('alunoStorage')
      .then(res => {
        if (res) {
          this.navCtrl.setRoot(HomePage, {});
          //this.stSessao = true;
          this.aluno = res;
         
        } else {
          this.stSessao = false;
        }
      })

  }





}
