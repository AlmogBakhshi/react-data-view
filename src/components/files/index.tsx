import React, { useEffect } from 'react';
import File from './file';
import Store from '../../store';
import FileDialog from './fileDialog';
import { observer } from 'mobx-react';
import { IFile } from '../../store/Files';

const Files = () => {
    const { files } = Store;

    useEffect(() => {
        files.fetchFiles();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const HandleSelectedFile = (file: IFile | null) => {
        files.setSelectedFile(file);
    }

    const HandleCloseDialog = () => {
        files.setSelectedFile(null);
    }

    return (
        <div className='files'>
            {files.files.map((file, index) =>
                <File key={index} file={file} onClick={HandleSelectedFile} />)}
            <FileDialog file={files.selectedFile} onClose={HandleCloseDialog} />
        </div>
    );
}

export default observer(Files);