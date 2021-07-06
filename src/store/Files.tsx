import { makeAutoObservable } from 'mobx';

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
        // const files = [
        //     { mime: 'video/mp4', size: 1920619, created: '2021-06-29T14:45:50.5382', name: 'balloons.mp4', length: 19.522 },
        //     { mime: 'image/jpeg', size: 781963, created: '2021-06-15T14:45:50.5382', name: 'cat.jpg', height: 2720, width: 4106 },
        //     { mime: 'application/pdf', size: 3028, created: '2021-06-29T14:45:50.5382', name: 'sample.pdf', pages: 2 },
        // ];

        // this.setFiles(files);

        fetch(`https://mighty-sierra-05836.herokuapp.com/files`)
            .then(res => res.json())
            .then(res => this.setFiles(res.files))
            .catch(err => console.error(err))
    }
}

export default new Files();