import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AssuntoPage } from '../assunto/assunto';
import { HomePage } from '../home/home';




@IonicPage()
@Component({
  selector: 'page-mostra-resposta',
  templateUrl: 'mostra-resposta.html',
})
export class MostraRespostaPage {

  public mostraAcerto: boolean;
  public mostraPontuacao: number;
  public pontuacaoFeita: number;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    // public pontuacaoGlobal: GlobalProvider
    ) {
      this.mostraAcerto = this.navParams.get('mostrar');
      this.pontuacaoFeita = this.navParams.get('pontuacaoDica');

      //console.log("Mostra: ", this.mostraAcerto);
      // this.mostraPontuacao = this.pontuacaoGlobal.total;
  }

  ionViewDidLoad() {
 
  }

 mostraDesafios(){
  this.navCtrl.setRoot(HomePage);
    this.navCtrl.push(AssuntoPage, {
      //materiaSelecionada: materia
    });

    
  }
}
