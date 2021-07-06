import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import Store from '../store';
import { IFile } from '../store/Files';
import File from './file';
import ViewFile from './viewFile';

const Files = () => {
    const { files } = Store;

    useEffect(() => {
        files.fetchFiles();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const HandleSelectedFile = (file: IFile | null) => {
        files.setSelectedFile(file);
    }

    return (
        <div className='files'>
            {files.files.map((file, index) =>
                <File key={index} file={file} onClick={HandleSelectedFile} />)}
            <ViewFile file={files.selectedFile} onClose={() => files.setSelectedFile(null)} />
        </div>
    );
}

export default observer(Files);