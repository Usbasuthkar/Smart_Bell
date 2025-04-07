import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Client({ goBack,email }) {
    const [clientData, setClientData] = useState({
        role: '',
        companyName: '',
        industry: '',
        experienceLevel: '',
        linkedinProfile: '',
        referralCode: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClientData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Client Data:', clientData);
        // Add logic to handle form submission, like making an API call
    };

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <button onClick={goBack} style={{ background: 'transparent', border: 'none', padding: 0 }}>
                    <FontAwesomeIcon icon={faArrowLeft} size="lg" color="black" />
                </button>
                <h1 style={{ marginRight: '16px', flex: 1, textAlign: 'center' }}>Create an account</h1>
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Role / Title</label>
                    <input
                        required
                        type="text"
                        name="role"
                        value={clientData.role}
                        onChange={handleChange}
                        placeholder="e.g., Founder, Student"
                    />
                </div>

                <div>
                    <label>Company / Startup Name</label>
                    <input
                        required
                        type="text"
                        name="companyName"
                        value={clientData.companyName}
                        onChange={handleChange}
                        placeholder="Optional, but helpful"
                    />
                </div>

                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                    <label>Industry / Field</label>
                    <select style={{fontSize:'0.7em'}} required name="industry" value={clientData.industry} onChange={handleChange}>
                        <option value="">Select an industry</option>
                        <option value="tech">Tech</option>
                        <option value="health">Health</option>
                        <option value="finance">Finance</option>
                        <option value="realEstate">Real Estate</option>
                        <option value="education">Education</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                    <label>Experience Level</label>
                    <select style={{fontSize:'0.7em'}} required name="experienceLevel" value={clientData.experienceLevel} onChange={handleChange}>
                        <option value="">Select experience level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="experienced">Experienced</option>
                    </select>
                </div>

                <div>
                    <label>LinkedIn Profile URL</label>
                    <input
                        required
                        type="url"
                        name="linkedinProfile"
                        value={clientData.linkedinProfile}
                        onChange={handleChange}
                        placeholder="LinkedIn Profile URL"
                    />
                </div>

                <div>
                    <label>Referral Code (Optional)</label>
                    <input
                        type="text"
                        name="referralCode"
                        value={clientData.referralCode}
                        onChange={handleChange}
                        placeholder="Enter referral code (if any)"
                    />
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}
