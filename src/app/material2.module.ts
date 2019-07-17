import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatDividerModule, MatIconModule, 
	     MatSidenavModule, MatToolbarModule, MatListModule, MatTooltipModule, MatTabsModule, MatTableModule, 
	     MatFormFieldModule, MatInputModule, MatDialogModule, MatSelectModule } from '@angular/material';

@NgModule({

  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatDividerModule, MatIconModule, 
            MatSidenavModule, MatToolbarModule, MatListModule, MatTooltipModule, MatTabsModule, 
            MatTableModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatSelectModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatDividerModule, MatIconModule, 
            MatSidenavModule, MatToolbarModule, MatListModule, MatTooltipModule, MatTabsModule, 
            MatTableModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatSelectModule]
})
export class Material2Module { }
