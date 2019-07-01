import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';


/**
 * Generated class for the MostraAlunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mostra-aluno',
  templateUrl: 'mostra-aluno.html',
})
export class MostraAlunoPage {
  public carregaAluno = [];
  public idsel;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public http: Http) {
    
    this.idsel = this.navParams.get('id_selecionado');
   console.log( this.idsel);
    
  }

  ionViewDidLoad() {
    this.pegarMostrarAlunos();
    //console.log('ionViewDidLoad MostraAlunoPage');
    //console.log("o que tem no array: ", this.carregaAluno);
   
  }

  pegarMostrarAlunos() {
    this.http.get('https://apolo-19fee.firebaseio.com/alunos/' + this.idsel + '.json')
      .map(res => res.json())
      .subscribe(data => {
        //console.log(data);
        if (data !== null && data !== undefined) {
          this.trataDados(data);
        }
      })
  }

  trataDados(dadosfb) {
    this.carregaAluno = Object.keys(dadosfb).map(i => dadosfb[i]);
   
  }
}
