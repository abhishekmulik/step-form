import React from 'react';
import { useSelector } from 'react-redux';

const Review = () => {
    const data = useSelector(state => state?.userInfo);
    const [personalInfo, education, experience, additionalInfo, documents] = data;
    console.log(additionalInfo)
    const organizations = additionalInfo?.certification?.map(item => item.organization);
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Application Preview</h2>

            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
                <div className='ml-6'>
                    <p><strong>First Name:</strong> {personalInfo.firstName}</p>
                    <p><strong>Last Name:</strong> {personalInfo.lastName}</p>
                    <p><strong>Email:</strong> {personalInfo.email}</p>
                    <p><strong>Phone:</strong> {personalInfo.phone}</p>
                    <p><strong>Address:</strong> {personalInfo.streetAddress}, {personalInfo.city}, {personalInfo.state}, {personalInfo.pinCode}</p>
                </div>
            </section>

            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <div className='ml-6'>
                    {education.education.map((edu) => (
                        <div key={edu.id} className="mb-4">
                            <p><strong>School Name:</strong> {edu.schoolName}</p>
                            <p><strong>University Name:</strong> {edu.univeristyName}</p>
                            <p><strong>CGPA:</strong> {edu.CGPA}</p>
                            <p><strong>Passing Year:</strong> {edu.passingYear}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <div className='ml-6'>
                    {experience.experience.map((exp) => (
                        <div key={exp.id} className="mb-4">
                            <p><strong>Company:</strong> {exp.company}</p>
                            <p><strong>Job Title:</strong> {exp.jobTitle}</p>
                            <p><strong>Duration:</strong> {exp.duration}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Skills and Certifications</h3>
                <div className='ml-6'>
                    <p><strong>Skills:</strong> {additionalInfo.skills.length > 0 ? additionalInfo.skills.join(', ') : 'N/A'}</p>
                    <p><strong>Certifications:</strong> {organizations.length > 0 ? organizations.join(', ') : 'N/A'}</p>
                </div>

            </section>

            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Documents</h3>
                <div className='ml-6'>
                    <p><strong>Resume:</strong> {documents.resume.map(doc => doc.name).join(', ')}</p>
                    <p><strong>Cover Letter:</strong> {documents.coverLetter}</p>
                </div>
            </section>
        </div>
    );
};

export default Review;
