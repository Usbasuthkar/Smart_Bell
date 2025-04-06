import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Investor({ goBack }) {
    const [investorData, setInvestorData] = useState({
        investorType: '',
        investmentRange: '',
        industries: [],
        location: '',
        linkedinProfile: '',
        accreditation: null,
        termsAccepted: false,
        investmentExperience: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setInvestorData(prevState => ({
                ...prevState,
                [name]: checked,
            }));
        } else if (name === 'industries') {
            const updatedIndustries = value.split(','); // assuming industries are comma-separated
            setInvestorData(prevState => ({
                ...prevState,
                industries: updatedIndustries,
            }));
        } else {
            setInvestorData(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleFileChange = (e) => {
        setInvestorData(prevState => ({
            ...prevState,
            accreditation: e.target.files[0],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Investor Data:', investorData);
        // Add logic to handle form submission
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
                <div style={{display:'flex',gap:'10px',marginBottom:'10px'}}>
                    <label>Investor Type</label>
                    <select name="investorType" value={investorData.investorType} onChange={handleChange}>
                        <option value="angel">Angel Investor</option>
                        <option value="vc">VC</option>
                        <option value="privateEquity">Private Equity</option>
                        <option value="corporate">Corporate</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <label>Preferred Investment Range</label>
                    <input 
                        type="text" 
                        name="investmentRange" 
                        value={investorData.investmentRange} 
                        onChange={handleChange} 
                        placeholder="e.g., <$10K, $10K–$100K, $100K+" 
                    />
                </div>

                <div>
                    <label>Industries of Interest</label>
                    <input 
                        type="text" 
                        name="industries" 
                        value={investorData.industries.join(',')} 
                        onChange={handleChange} 
                        placeholder="Tech, Health, Finance, Real Estate, etc." 
                    />
                </div>

                <div>
                    <label>Location</label>
                    <input 
                        type="text" 
                        name="location" 
                        value={investorData.location} 
                        onChange={handleChange} 
                        placeholder="City and Country" 
                    />
                </div>

                <div>
                    <label>LinkedIn Profile URL</label>
                    <input 
                        type="url" 
                        name="linkedinProfile" 
                        value={investorData.linkedinProfile} 
                        onChange={handleChange} 
                        placeholder="LinkedIn Profile URL" 
                    />
                </div>

                <div>
                    <label>Accreditation or Verification Document Upload</label>
                    <input 
                        type="file" 
                        name="accreditation" 
                        onChange={handleFileChange} 
                    />
                </div>

                <div>
                    <label>Investment Experience</label>
                    <input
                        name="investmentExperience" 
                        value={investorData.investmentExperience} 
                        onChange={handleChange} 
                        placeholder="Number of deals, years of investing, notable startups backed" 
                    />
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}
