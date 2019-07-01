import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MostraAlunoPage } from './mostra-aluno';

@NgModule({
  declarations: [
    MostraAlunoPage,
  ],
  imports: [
    IonicPageModule.forChild(MostraAlunoPage),
  ],
})
export class MostraAlunoPageModule {}
