import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrmClienteComponent } from './Cliente/frm-cliente/frm-cliente.component';
import { LstClienteComponent } from './Cliente/lst-cliente/lst-cliente.component';
import { FrmLivroComponent } from './Livro/frm-livro/frm-livro.component';
import { LstLivroComponent } from './Livro/lst-livro/lst-livro.component';
import { LstEmprestimoComponent } from './Emprestimo/lst-emprestimo/lst-emprestimo.component';
import { FrmEmprestimoComponent } from './Emprestimo/frm-emprestimo/frm-emprestimo.component';
import { FrmAutorComponent } from './Autor/frm-autor/frm-autor.component';
import { LstAutorComponent } from './Autor/lst-autor/lst-autor.component';

@NgModule({
  declarations: [
    AppComponent,
    FrmClienteComponent,
    LstClienteComponent,
    FrmLivroComponent,
    LstLivroComponent,
    LstEmprestimoComponent,
    FrmEmprestimoComponent,
    FrmAutorComponent,
    LstAutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
