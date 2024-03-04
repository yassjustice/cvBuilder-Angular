import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { jsPDF } from 'jspdf'; // Assuming you're using jsPDF
import { saveAs } from 'file-saver';
import puppeteer from 'puppeteer';


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

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Load HTML and CSS content securely
    await this.loadContent();

    // Replace placeholders with actual data in HTML template
    const filledHtml = this.htmlContent
      ?.replace(/{{name}}/g, cvData.name)
      .replace(
        /{{professionalExperience}}/g,
        JSON.stringify(cvData.professionalExperience)
      ); // ...and so on for other properties
      if (filledHtml) {
        await page.goto('about:blank', { waitUntil: 'networkidle0' }); // Wait for page to load
      } else {
        console.error('Error: HTML content is not loaded. Unable to generate PDF.');
        // Handle the error appropriately, e.g., display an error message to the user
      }
    // Optionally include CSS if needed
    if (this.cssContent) {
      await page.addStyleTag({ content: this.cssContent });
    }

    // Wait for page to load and render completely
    await page.waitForSelector('body');

    const pdfBuffer = await page.pdf({ format: 'A4' }); // Generate PDF buffer

    const blob = new Blob([pdfBuffer], { type: 'application/pdf' });
    const fileName = `CV_${cvData.name}.pdf`;
    this.saveAs(blob, fileName); // Save PDF using a library like FileSaver.js

    await browser.close();
  }

  private saveAs(blob: Blob, fileName: string): void {
    // Removed unnecessary code checking for outdated method
  }

  private async loadContent(): Promise<void> {
    try {
      // Fetch HTML content as text
      const htmlResponse = await this.http
        .get('assets/cv1/cv1.html', { responseType: 'text' })
        .toPromise();

      // Set HTML content directly
      this.htmlContent = htmlResponse;

      // Fetch CSS content directly
      const cssResponse = await this.http
        .get('assets/cv1/cv1.css', { responseType: 'text' })
        .toPromise();
      this.cssContent = cssResponse;
    } catch (error) {
      console.error('Error loading content:', error);
      // Handle errors appropriately, e.g., display an error message to the user
    }
  }
}
