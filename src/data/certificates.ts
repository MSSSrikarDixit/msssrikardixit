export type Cert = {
  id: string;
  title: string;
  issuer: string;
  issued: string;
  score?: string;
  credentialId?: string;
  suggestedFilename?: string;
  driveLink?: string;
};

const DRIVE = 'https://drive.google.com/drive/folders/REPLACE_WITH_YOUR_FOLDER_ID';

export const certificates: Cert[] = [
  { id: 'c1', title: 'Introduction to R', issuer: 'DataCamp', issued: '2025-03-13', driveLink: DRIVE, credentialId: '39083056' },
  { id: 'c2', title: 'Introduction to TensorFlow for Artificial Intelligence', issuer: 'DataCamp', issued: '2025-03-15', driveLink: DRIVE },
  { id: 'c3', title: 'Hacking Biology for Nanotechnology', issuer: 'NPTEL / Institution', issued: '2024', driveLink: DRIVE },
  { id: 'c4', title: 'Rewriting the Code of Life with CRISPR', issuer: 'Institution / Online Course', issued: '2024', driveLink: DRIVE },
  { id: 'c5', title: 'A Practical Guide for SARS-CoV-2 Whole Genome Sequencing', issuer: 'Wellcome Connecting Science', issued: '2023', driveLink: DRIVE },
  { id: 'c6', title: 'Artificial Intelligence', issuer: 'Institution / Online Course', issued: '2024', driveLink: DRIVE },
  { id: 'c7', title: 'Bioinformatics for Biologists: Analysing and Interpreting Genomics Datasets', issuer: 'Wellcome Connecting Science', issued: '2024', driveLink: DRIVE },
  { id: 'c8', title: 'Interpreting Genomic Variation: Overcoming Challenges in Diverse Populations', issuer: 'Wellcome Connecting Science', issued: '2024', driveLink: DRIVE },
  { id: 'c9', title: 'Linux for Bioinformatics', issuer: 'Wellcome Connecting Science', issued: '2024', driveLink: DRIVE },
  { id: 'c10', title: 'Making Sense of Genomic Data (COVID-19) — Web-based Bioinformatics', issuer: 'Wellcome Connecting Science', issued: '2024', driveLink: DRIVE },
  { id: 'c11', title: 'Pathogen Genomics: A New Era in Global Health Surveillance and Strategy', issuer: 'Wellcome Connecting Science', issued: '2024', driveLink: DRIVE },
  { id: 'c12', title: 'Research Methods: A Practical Guide to Peer and Community Research', issuer: 'King’s College London', issued: '2024', driveLink: DRIVE },
  { id: 'c13', title: 'Forensic Psychology: Witness Investigation', issuer: 'Institution', issued: '2023', driveLink: DRIVE },
  { id: 'c14', title: 'Music Theory Fundamentals', issuer: 'Institution', issued: '2023', driveLink: DRIVE },
  { id: 'c15', title: 'User Interface Design Principles', issuer: 'Institution', issued: '2023', driveLink: DRIVE },
  { id: 'c16', title: 'Cosmology\'s Unsolved Problems', issuer: 'Institution', issued: '2023', driveLink: DRIVE },
  { id: 'c17', title: 'Beginner German', issuer: 'Institution', issued: '2023', driveLink: DRIVE },
  { id: 'c18', title: 'Grammar as a Meaning-Making Resource', issuer: 'Institution', issued: '2023', driveLink: DRIVE },
  { id: 'c19', title: 'The Nature of Imagination', issuer: 'Institution', issued: '2023', driveLink: DRIVE },
  { id: 'c20', title: 'Philosophy of Language and Meaning', issuer: 'Institution', issued: '2023', driveLink: DRIVE },
];

export default certificates;
