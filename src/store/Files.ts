import { makeAutoObservable } from 'mobx';
import * as fetch from '../fetch';

export enum FileType {
    Image = 'image',
    Video = 'video',
    PDF = 'pdf'
}

export interface IFile {
    mime: string,
    size: number,
    created: string,
    name: string,
    height?: number,
    width?: number,
    length?: number,
    pages?: number
}

class Files {
    constructor() {
        makeAutoObservable(this);
    }

    files: IFile[] = [];
    selectedFile: IFile | null = null;

    setSelectedFile = (file: IFile | null) => {
        this.selectedFile = file;
    }

    setFiles = (files: IFile[]) => {
        this.files = [...files];
    }

    fetchFiles = () => {
        fetch.Get('files')
            .then(res => this.setFiles(res.files))
            .catch(err => console.error(err))
    }
}

export default new Files();