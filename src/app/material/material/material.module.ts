import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule],
  exports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class MaterialModule {}
