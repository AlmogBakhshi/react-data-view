import React from 'react';

interface Props {
    bytes: number,
    className?: string
}

const BytesToSize: React.FC<Props> = ({ className, bytes }) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const sizeIndex = parseInt(`${Math.floor(Math.log(bytes) / Math.log(1024))}`);

    return (
        <div className={className}>
            {bytes === 0 ? '0 Byte' :
                `${(bytes / Math.pow(1024, sizeIndex)).toFixed(2)} ${sizes[sizeIndex]}`}
        </div>
    );
}

export default BytesToSize;