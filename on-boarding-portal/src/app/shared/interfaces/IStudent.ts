import { IDocumentList } from './IDocumentList';

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


