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
  
  // Fake data
  const fakeCVData: CVData = {
    name: 'John Doe',
    position: 'Software Developer',
    company: 'ABC Technologies',
    professionalExperience: [
      {
        title: 'Senior Developer',
        company: 'XYZ Corp',
        date: 'January 2018 - Present',
        description: 'Responsible for developing and maintaining web applications using Angular and Node.js.'
      },
      {
        title: 'Junior Developer',
        company: '123 Inc',
        date: 'June 2016 - December 2017',
        description: 'Assisted in the development of front-end components and implemented new features.'
      }
    ],
    educationBackground: [
      {
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of Example',
        date: '2012 - 2016',
        description: 'Studied various computer science topics including algorithms, data structures, and software engineering.'
      }
    ],
    skills: ['JavaScript', 'TypeScript', 'Angular', 'React', 'Node.js'],
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    github: 'https://github.com/johndoe',
    linkedin: 'https://www.linkedin.com/in/johndoe'
  };
  
  export default fakeCVData;
  