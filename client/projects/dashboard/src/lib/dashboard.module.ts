import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardComponent } from './board/board.component';
import { ColumnComponent } from './column/column.component';



@NgModule({
  declarations: [
    DashboardComponent,
    BoardComponent,
    ColumnComponent
  ],
  imports: [
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
