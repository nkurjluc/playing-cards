import { Component } from '@angular/core';
import { MatDialogActions, MatDialogTitle, MatDialogClose, MatDialogContent} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-delete-product-confirmation-dialog',
  imports: [MatDialogActions, 
    MatDialogClose, 
    MatDialogContent, 
    MatDialogTitle, 
    MatButtonModule],
  templateUrl: './delete-product-confirmation-dialog.component.html',
  styleUrl: './delete-product-confirmation-dialog.component.css'
})
export class DeleteProductConfirmationDialogComponent {

}
