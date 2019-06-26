import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';


const routes: Routes = [{
  path: 'books',
  component: BookComponent
}, {
  path: 'books/:id',
  component: BookDetailComponent
}, {
  path: 'books/:id/edit',
  component: BookEditComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
