import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  imports: [CommonModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
],
  exports: [CommonModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
  ],
})
export class MaterialModule {
}