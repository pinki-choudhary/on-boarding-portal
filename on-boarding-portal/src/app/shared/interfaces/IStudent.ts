import { DocumentList } from './DocumentList';

export interface IStudent {
    id?: number;
    name: string;
    type: string;
    documentList: DocumentList[];
    mother_name: string;
    father_name: string;
    last_class_score: number;
    dob: string;
}


