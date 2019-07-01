import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AngularFireDatabase } from '@angular/fire/database';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'formulario',
  templateUrl: 'formulario.html'
})
export class FormularioComponent {

  formulario : FormGroup;
  
   
  constructor(public formbuilder: FormBuilder,
   
    public db: AngularFireDatabase,
    public navCtrl: NavController
   ) {
   this.formulario = this.formbuilder.group({
    assunto: [null, [Validators.required]],
    tema: [null, [Validators.required]],
    dica1: [null, [Validators.required]],
    dica2: [null, [Validators.required]],
    dica3: [null, [Validators.required]],
    dica4: [null, [Validators.required]],
    dica5: [null, [Validators.required]],
    dica6: [null, [Validators.required]],
    dica7: [null, [Validators.required]],
    dica8: [null, [Validators.required]],
    dica9: [null, [Validators.required]],
    dica10: [null, [Validators.required]],
    resposta_correta: [null, [Validators.required]]
   })

  
  }

  cadastrar(){
    console.log(this.formulario.value);
    this.db.database.ref('/formulario').push(this.formulario.value)
    .then(() => {
      console.log('salvou');
      this.formulario.reset();
    })
  }

  
}
