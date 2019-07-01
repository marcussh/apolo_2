import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { DadosAlunosProvider } from '../../providers/dados-alunos/dados-alunos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 
  public aluno;
  public id_aluno_provider;

  constructor(public navCtrl: NavController,
    public storage: Storage,
    public dbAlunos: DadosAlunosProvider
    
    ) {

      this.aluno = this.storage.get('alunoStorage');
      //console.log('O que tá no storage', this.aluno);
      this.storage.get('alunoStorage')
      .then((resolve) => {
        this.aluno = resolve;
      })

      // this.dbAlunos.pegarDadosAlunos();
      // this.dbAlunos.pegarDadosDesafios();
    
  }
  ionViewDidLoad(){
   
      
  }

}

