import { IDocumentList } from './IDocumentList';

// Interface for student.
export interface IStudent {
    id?: number;
    name: string;
    category: string;
    documentList: IDocumentList[];
    motherName: string;
    fatherName: string;
    lastScore: number;
    dob: Date;
}


