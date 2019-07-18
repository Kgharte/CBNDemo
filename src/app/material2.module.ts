import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatDividerModule, MatIconModule, 
	     MatSidenavModule, MatToolbarModule, MatListModule, MatTooltipModule, MatTabsModule, MatTableModule, 
	     MatFormFieldModule, MatInputModule, MatDialogModule, MatSelectModule } from '@angular/material';
import { MatCarouselModule } from '@ngmodule/material-carousel';

@NgModule({

  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatDividerModule, MatIconModule, 
            MatSidenavModule, MatToolbarModule, MatListModule, MatTooltipModule, MatTabsModule, 
            MatTableModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatSelectModule, 
            MatCarouselModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatDividerModule, MatIconModule, 
            MatSidenavModule, MatToolbarModule, MatListModule, MatTooltipModule, MatTabsModule, 
            MatTableModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatSelectModule,
            MatCarouselModule]
})
export class Material2Module { }
