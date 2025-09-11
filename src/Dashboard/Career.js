import React, { useState } from "react";
import "../App.css"; // import CSS

function Career({ setPage }) {
    const [showPopup, setShowPopup] = useState(true);

    return (
        <div className="career-container">



            {/* Fake Jobs Disclaimer Popup */}
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-box">
                        <h3>Fake Jobs: Disclaimer and Notification</h3>
                        <p>
                            Aayur Care follows a merit-based employee selection process. During
                            the selection process or while inviting candidates for interviews,
                            we do not charge or accept any payment or security deposit from
                            applicants.
                        </p>
                        <p>
                            We have found that certain unauthorized individuals/fraudsters have
                            disseminated fake employment offers in the name of Aayur Care. Some
                            of these individuals/fraudsters are impersonating a recruiter or
                            hiring manager to mislead job seekers/applicants to wrongfully
                            obtain payments (including processing fees or deposits).
                        </p>
                        <p>
                            We suggest that you remain vigilant of such attempts and refrain
                            from responding to such emails, calls or other correspondence
                            containing false promises or fake offers in exchange for money.
                            Please be cautious when opening links or attachments from unknown
                            third parties.
                        </p>
                        <p>
                            Aayur Care will neither send you e-mails asking for your credit card
                            number or other personally identifiable information nor charge or
                            accept any amount or security deposit from any participant for any
                            competition, marketing promotion or campaign. Any communication
                            suggesting such payment is contrary to our policy and is likely to
                            be a phishing attack. We shall not accept any liability for the
                            representation made in any fraudulent communication or its
                            consequences, and such fraudulent communication shall not be treated
                            as any kind of offer or representation by Aayur Care.
                        </p>

                        {/* Close Button */}
                        <button
                            className="close-btn"
                            onClick={() => {
                                setShowPopup(false);
                                setPage("home"); // redirect back to Home
                            }}
                        >
                            Close
                        </button>

                    </div>
                </div>
            )}
        </div>
    );
}

export default Career;
