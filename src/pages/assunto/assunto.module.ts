import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssuntoPage } from './assunto';

@NgModule({
  declarations: [
    AssuntoPage,
  ],
  imports: [
    IonicPageModule.forChild(AssuntoPage),
  ],
})
export class AssuntoPageModule {}
