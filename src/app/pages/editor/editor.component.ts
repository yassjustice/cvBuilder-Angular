import { CommonModule, NgClass } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import fakeCVData from '../../utils/fake-data';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EducationDialogComponent } from '../../components/education-dialog/education-dialog.component';
import { ExperienceDialogComponent } from '../../components/experience-dialog/experience-dialog.component';
// import { PdfService } from '../../utils/pdf-generator';
// import { PdfService } from '../../utils/pdf-generatorpupp';
// import { PdfService } from '../../utils/pdf-generatorhtml';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

interface ProfessionalExperience {
  title: string;
  company: string;
  date: string;
  description: string;
}

interface EducationBackground {
  degree: string;
  school: string;
  date: string;
  description: string;
}

interface CVData {
  name: string;
  position: string;
  company: string;
  professionalExperience: ProfessionalExperience[];
  educationBackground: EducationBackground[];
  skills: string[];
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    NgClass,
    MatChipsModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    
  ],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css',
})
export class EditorComponent {

  styleString: string = '';
  htmlString: string = '';

  constructor(
    public dialog: MatDialog,
    // private pdfService: PdfService,
    private sanitizer: DomSanitizer,
    private http: HttpClient,
   
  ) {}

ngOnInit(): void {


  this.http.get('../../../assets/cv1/cv1.html', { responseType: 'text' }).subscribe(
    (htmlContent) => {
      // console.log('HTML Content:', htmlContent);
      // Use the fetched HTML content as needed (e.g., parse, manipulate, etc.)
      this.htmlString = htmlContent;
    },
    (error) => {
      console.error('Error fetching HTML:', error);
      // Handle errors gracefully, e.g., display an error message to the user
    }
  );

  // Fetch and log the CSS content
  this.http.get('../../../assets/cv1/cv1.css', { responseType: 'text' }).subscribe(
    (styleSheet) => {
      // console.log('CSS Content:', styleSheet);
      this.styleString = styleSheet; // Assign to styleString if needed
    },
    (error) => {
      console.error('Error fetching CSS:', error);
    }
  );



}

user: any = {
  name: '',
  position: '',
  company: '',
  professionalExperience: [],
  educationBackground: [],
  skills: [],
  email: '',
  phone: '',
  github: '',
  linkedin: '',
};


PrintToPdf(cvData: CVData) {
  
 
  
  

  const filledHtml = this.htmlString
    // .replace('{{name}}', cvData.name)
    // .replace('{{position}}', cvData.position)
    // .replace('{{email}}', cvData.email)
    // .replace('{{phone}}', cvData.phone);
    .replace(/{{name}}/g, cvData.name) // Use global flag `g` for all instances
    .replace(/{{position}}/g, cvData.position)
    .replace(/{{email}}/g, cvData.email)
    .replace(/{{phone}}/g, cvData.phone);
  
    console.log('filled',filledHtml);
  
  const printWindow = window.open('', 'PRINT')!;
  printWindow.document.write(`<html><head><style>${this.styleString}</style></head>${this.htmlString}</html>`);
  printWindow.document.close();
  printWindow.print();
}


  openExperienceDialog(): void {
    const dialogRef = this.dialog.open(ExperienceDialogComponent, {
      width: '400px',
      data: { user: this.user }, // Pass the user object
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        // Add the returned experiences data to the user object
        this.user.professionalExperience.push(result);
      }
    });
  }

  openEducationDialog(): void {
    const dialogRef = this.dialog.open(EducationDialogComponent, {
      width: '400px',
      // data: { type: 'education' }
      data: { user: this.user }, // Pass the user object
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        // Add the returned education data to the user object
        console.log('dialogafterclose',result);
        this.user.educationBackground.push(result);
      }
    });
  }

 
  onSubmit() {
    console.log('on submit this user',this.user);
    // this.generatePdf(); 
    this.PrintToPdf(this.user);
  }

  async generatePdf() {
    try {
      // await this.pdfService.generatePdf(this.user); 
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  }

  newSkill: string = '';
  // newExperience: string = '';
  // newEducation: string = '';

  // addExperience(experience: string): void {
  //   if (experience.trim()) {
  //     // Add the new experience to the professionalExperience array
  //     this.user.professionalExperience.push({
  //       title: experience.trim(),
  //       company: '',
  //       date: '',
  //       description: ''
  //     });
  //     // Clear the input field
  //     this.newExperience = '';
  //   }
  // }

  // addEducation(education: string): void {
  //   if (education.trim()) {
  //     // Add the new education to the educationBackground array
  //     this.user.educationBackground.push({
  //       degree: education.trim(),
  //       school: '',
  //       date: '',
  //       description: ''
  //     });
  //     // Clear the input field
  //     this.newEducation = '';
  //   }
  // }

  addSkill(skill: string): void {
    if (skill.trim()) {
      // Add the new skill to the skills array
      this.user.skills.push(skill.trim());
      // Clear the input field
      this.newSkill = '';
    }
  }

  // Function to remove a skill
  removeSkill(skill: string): void {
    const index = this.user.skills.indexOf(skill);
    if (index !== -1) {
      this.user.skills.splice(index, 1);
    }
  }
  // removeExperience(experience: string): void {
  //   const index = this.user.professionalExperience.indexOf(experience);
  //   if (index !== -1) {
  //     this.user.professionalExperience.splice(index, 1);
  //   }
  // }
  // removeEducation(education: string): void {
  //   const index = this.user.educationBackground.indexOf(education);
  //   if (index !== -1) {
  //     this.user.educationBackground.splice(index, 1);
  //   }
  // }
}
