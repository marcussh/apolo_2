import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DadosAlunosProvider } from '../../providers/dados-alunos/dados-alunos';
import { MostraAlunoPage } from '../mostra-aluno/mostra-aluno';
import { Storage } from '@ionic/storage';


@IonicPage({
  name: 'relatorio-page'
})
@Component({
  selector: 'page-relatorio',
  templateUrl: 'relatorio.html',
})
export class RelatorioPage {
  public id_aluno;
  public ocultarId = true;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public dbAlunos: DadosAlunosProvider,
    public storage: Storage) {

    this.storage.get('id_alunoStorage')
    .then((resolve) => {
      this.id_aluno = resolve;
    })

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad RelatorioPage');
  }

  mostrarAluno(id: String){
    this.navCtrl.push(MostraAlunoPage.name, {
      id_selecionado: id
    });
  }
}
