import { NgModule } from '@angular/core';
import { FormularioComponent } from './formulario/formulario';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../app/app.component';


@NgModule({
	declarations: [FormularioComponent],
	imports: [
		IonicModule.forRoot(MyApp),
	],
	exports: [FormularioComponent]
})
export class ComponentsModule { }
