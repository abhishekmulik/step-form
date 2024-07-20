import React, { useState, useEffect } from 'react';
import FileUpload from '../../../ui/FileUpload';
import FormLayout from '../formWrapper/FormLayout';
import CoverLetter from './CoverLetter';
import UploadResume from './UploadResume';
import useGetStepConfigs from '../../../hooks/useGetStepConfigs';
import { useSelector } from 'react-redux';

const AdditionalInfoForm = () => {
    const { handleNext, handlePrev, activeStepId } = useGetStepConfigs();
    const data = useSelector((state: any) => state?.userInfo);

    const [pdfFiles, setPdfFiles] = useState<File[]>([]);
    const [coverLetter, setCoverLetter] = useState(data[activeStepId]?.coverLetter || '');

    useEffect(() => {
        const storedFiles = data[activeStepId]?.resume || [];
        const files = storedFiles.map((file: any) => new File([file.content], file.name, { type: file.type }));
        setPdfFiles(files);
    }, [data, activeStepId]);

    const prepareFileData = (files: File[]) => {
        return files.map(file => ({
            name: file.name,
            type: file.type,
            content: file,
        }));
    };

    return (
        <>
            <FormLayout label="Additional Information">
                <UploadResume pdfFiles={pdfFiles} setPdfFiles={setPdfFiles} />
                <div className='col-span-full'>
                    <CoverLetter coverLetter={coverLetter} setCoverLetter={setCoverLetter} />
                </div>
            </FormLayout>
            <div className="mt-6 flex items-center justify-end gap-x-6 w-full">
                <button
                    className="text-sm font-semibold leading-6 text-gray-900"
                    onClick={(e) => {
                        e.stopPropagation();
                        const preparedFiles = prepareFileData(pdfFiles);
                        handlePrev({ resume: preparedFiles, coverLetter });
                    }}
                >
                    Back
                </button>
                <button
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={(e) => {
                        e.stopPropagation();
                        const preparedFiles = prepareFileData(pdfFiles);
                        handleNext({ resume: preparedFiles, coverLetter });
                    }}
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default AdditionalInfoForm;
