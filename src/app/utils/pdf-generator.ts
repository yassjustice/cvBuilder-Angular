

import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { jsPDF } from 'jspdf'; // Assuming you're using jsPDF

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

@Injectable({
  providedIn: 'any',
})
export class PdfService {
  htmlContent: string | undefined; // Initialize with an empty string
  cssContent: string | undefined; // Initialize with an empty string

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  async generatePdf(cvData: CVData): Promise<void> {
    const doc = new jsPDF();
    doc.setFontSize(12);

    // Load HTML and CSS content securely
    await this.loadContent(); // Refactored into a separate method

    // Replace placeholders with actual data in HTML template
    const filledHtml = this.htmlContent?.toString()
    .replace('{{name}}', cvData.name)
    .replace('{{position}}', cvData.position)
    .replace('{{email}}', cvData.email)
    .replace('{{phone}}', cvData.phone);
  
    // Add filled HTML content to PDF with inline CSS
    if (filledHtml) {
      doc.html(filledHtml, {
        callback: (pdf: any) => {
          pdf.save('CV_Yassir_Hakimi.pdf');
        },
      });
    } else {
      console.error('HTML content is undefined.');
    }
    


  }




  private async loadContent(): Promise<void> {
    try {
      // Fetch HTML content as text
      const htmlResponse = await this.http.get('assets/cv1/cv1.html', { responseType: 'text' }).toPromise();
  
      // Set HTML content directly
      this.htmlContent = htmlResponse;
  

    } catch (error) {
      console.error('Error loading content:', error);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  }
  
  


}

