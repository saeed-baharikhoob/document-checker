import React, { useState, useRef } from 'react';
import uploadIcon from '../../../assets/upload.svg'
import pdfIcon from '../../../assets/pdf.svg'
import removeIcon from '../../../assets/yellow-close.svg'
import Button from "../../Button.tsx";
interface StepperUploadProps{
    handlePrevious:any
    handleNext:any
}

const StepperUpload = ({handlePrevious,handleNext}:StepperUploadProps) => {
    const [file, setFile] = useState<File | null>(null);
    const [progress, setProgress] = useState<number>(0);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            uploadFile(selectedFile);
        }
    };

    const uploadFile = (file: File) => {
        const totalSize = file.size;
        let uploadedSize = 0;

        const interval = setInterval(() => {
            uploadedSize += totalSize * 0.1;
            setProgress(Math.min((uploadedSize / totalSize) * 100, 100));
            if (uploadedSize >= totalSize) {
                clearInterval(interval);
            }
        }, 500);
    };

    return (
        <div className="flex flex-col items-center p-4 bg-gray-800 text-white rounded-lg">
            <div className="w-full max-w-xs">
                <div
                    className="flex flex-col space-y-5 justify-center items-center border-2 border-dashed border-gray-500 p-4 rounded-lg cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                >
                    <img src={uploadIcon} alt={'uploadIcon'} className={'w-12 h-12'} />
                    <div className={'flex flex-col items-center space-y-1'}>
                        <p className="text-center text-sm font-medium">Drag your file(s) or <span
                            className="text-yellow-300">browse</span></p>
                        <p className="text-center text-sm text-stepper-text-type">Max 10 MB files are allowed</p>
                    </div>
                </div>
                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                />
            </div>
            {file && (
                <div className={'flex flex-col w-full items-center justify-center mb-3'}>
                    <div className="w-full max-w-xs mt-4 flex items-center justify-center">
                        <div className="flex-grow border-t border-gray-500"></div>
                        <span className="mx-2 text-gray-400">Files</span>
                        <div className="flex-grow border-t border-gray-500"></div>
                    </div>
                    <div className="w-full max-w-xs mt-4 bg-gray-700 p-2 rounded-lg flex items-center">
                        <div className="ml-4 flex-grow">
                            <div className={'flex'}>
                                <img src={pdfIcon} alt="PDF Icon" className="w-12 h-12"/>
                                <div className={'flex flex-col'}>
                                    <p className="truncate">{file.name}</p>
                                    <p className="text-sm">{(file.size / 1024).toFixed(1)} KB</p>

                                </div>
                            </div>
                            <div className={'flex w-full items-center justify-center space-x-2'}>
                            <div className="relative w-full ">
                                    <div className="overflow-hidden h-2  text-xs flex rounded bg-yellow-200">
                                        <div
                                            style={{width: `${progress}%`}}
                                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
                                        ></div>
                                    </div>

                                </div>
                                <p className="text-xs text-gray-300">{progress.toFixed(0)}%</p>
                            </div>

                        </div>
                        <img
                            className={"ml-4 text-red-500 hover:text-red-700 cursor-pointer"}
                            onClick={()=>{
                                setFile(null);
                                setProgress(0);
                            }}
                          src={removeIcon}
                          alt={'remove'}
                        />
                    </div>
                </div>
            )}
            <div className="mt-4 flex space-x-4">
                        <Button type={'yellow'} onClick={handlePrevious}>
                            Previous
                        </Button>
                        <Button type={'yellow'} onClick={handleNext}>
                            Next
                        </Button>
                        <Button type={'border-only'} onClick={handleNext}>
                            Deactivate
                        </Button>

                    </div>
                </div>
    );
};


export default StepperUpload;
