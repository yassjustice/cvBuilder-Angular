import { CommonModule, NgClass } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
@Component({
  selector: 'app-education-dialog',
  standalone: true,
  imports: [MatFormFieldModule, NgClass, MatInputModule, CommonModule, FormsModule],
  templateUrl: './education-dialog.component.html',
  styleUrl: './education-dialog.component.css',
})
export class EducationDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EducationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

    // Access user object from the data passed to the dialog
    get user() {
      return this.data.user;
    }

    newEducation: any = {}; // Initialize newEducation object

    addEducation(): void {
      // Add the new education to the educationBackground array
      this.user.educationBackground.push({
        degree: this.newEducation.degree.trim(),
        school: this.newEducation.school.trim(),
        date: this.newEducation.date.trim(),
        description: this.newEducation.description.trim(),
      });
      const educationData = this.data.user.educationBackground;
      console.log(educationData);
      // Clear the input fields
      this.newEducation = {};
      this.dialogRef.close(); // Close the dialog
    }

      // onCancel method to handle cancel action
  onCancel(): void {
    this.dialogRef.close(); // Close the dialog without saving changes
  }
}
