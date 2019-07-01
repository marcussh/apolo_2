import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelaDicaPage } from './tela-dica';

@NgModule({
  declarations: [
    TelaDicaPage,
  ],
  imports: [
    IonicPageModule.forChild(TelaDicaPage),
  ],
})
export class TelaDicaPageModule {}
