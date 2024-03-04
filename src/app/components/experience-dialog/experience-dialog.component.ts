import { CommonModule, NgClass } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-experience-dialog',
  standalone: true,
  imports: [MatFormFieldModule, NgClass, MatInputModule, CommonModule, FormsModule ],
  templateUrl: './experience-dialog.component.html',
  styleUrl: './experience-dialog.component.css',
})
export class ExperienceDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ExperienceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

    // Access user object from the data passed to the dialog
    get user() {
      return this.data.user;
    }

    newExperience: any = {}; // Initialize newExperience object

    addExperience(): void {
      // Add the new experience to the professionalExperience array
      this.user.professionalExperience.push({
        title: this.newExperience.title.trim(),
        company: this.newExperience.company.trim(),
        date: this.newExperience.date.trim(),
        description: this.newExperience.description.trim(),
      });
      const experiencenData = this.data.newExperience;
      // Clear the input fields
      this.newExperience = {};
      this.dialogRef.close(); // Close the dialog
    }

      // onCancel method to handle cancel action
  onCancel(): void {
    this.dialogRef.close(); // Close the dialog without saving changes
  }
}
