import { NgModule } from '@angular/core';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: RoomsListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
