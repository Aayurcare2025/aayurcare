import React, { useState } from "react";
import { User, Home, Wallet, FileText, HelpCircle } from "lucide-react";
// import CorporateLoginClaims from "./CorporateLoginClaims";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";



export default function CorporateHome() {
  const [activeMenu, setActiveMenu] = useState("Home");
const [selectedDocs, setSelectedDocs] = useState([]);
const [uploadedFiles, setUploadedFiles] = useState({});
const handleDocChange = (type) => {
  setSelectedDocs((prev) =>
    prev.includes(type)
      ? prev.filter((item) => item !== type)
      : [...prev, type]
  );
};




const handleFileUpload = (e, type) => {
  const files = Array.from(e.target.files);
  setUploadedFiles((prev) => ({
    ...prev,
    [type]: files,
  }));
};



const data = [
  { name: " Reimbursement", value: 1000 },
  { name: "Usuage", value: 500 },
  { name: "Pending", value: 100 },
  
];

// Colors for each slice
const COLORS = ["#0088FE", "#00FF00", "#Ff0000"];

const data2=[{ name: "Total Wallet", value: 2000 }];
const COLORS2=["#0088FE"]

  
const renderContent = () => {
  switch (activeMenu) {
    case "Home":
      return renderHome();
    case "Wallet":
      return renderWallet();
    case "My Profile":
      return renderProfile();
    case "Claims":
      return renderClaims();
    case "Support":
      return renderSupport();
    default:
      return renderHome();
  }
};



const renderClaims = () => {
  const docTypes = [
    "Bank Document",
    "Medicine Prescription",
    "Radiology",
    "Pathology",
    "Consultation",
    "Ambulance Service"
  ];

  return (
    <div>
      <h2 style={styles.pageTitle}>Claims Management</h2>

      {/* Top Row - Current Balance */}
      <div style={styles.claimBalanceCard}>
        <h3 style={styles.claimCardTitle}>Current Bill</h3>
        <p style={styles.claimBalanceAmount}>₹2,000</p>
      </div>

      {/* Main Grid - 2x2 Layout */}
      <div style={styles.claimsGrid}>
        {/* Claim Documents Card */}
        <div style={styles.claimCardLarge}>
          <h3 style={styles.claimCardTitle}>Claim Documents</h3>
          <div style={styles.documentList}>
            {docTypes.map((doc) => (
              <div key={doc} style={styles.documentItem}>
                <label style={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={selectedDocs.includes(doc)}
                    onChange={() => handleDocChange(doc)}
                    style={styles.checkbox}
                  />
                  <span>{doc}</span>
                </label>

                {selectedDocs.includes(doc) && (
                  <div style={styles.uploadSection}>
                    <input
                      type="file"
                      multiple
                      onChange={(e) => handleFileUpload(e, doc)}
                      style={styles.fileInput}
                      id={`file-${doc}`}
                    />
                    <label htmlFor={`file-${doc}`} style={styles.uploadButton}>
                      Choose Files
                    </label>

                    {uploadedFiles[doc] && (
                      <div style={styles.fileList}>
                        {uploadedFiles[doc].map((file, index) => (
                          <div key={index} style={styles.fileName}>
                            📄 {file.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          <button style={styles.submitButton}>Submit Claim</button>
        </div>

        {/* Claim Status Card */}
        <div style={styles.claimCardSmall}>
          <h3 style={styles.claimCardTitle}>Claim Status</h3>
          <div style={styles.statusContent}>
            <div style={styles.statusBadge}>In Progress</div>
            <p style={styles.statusText}>Your claim is being processed</p>
          </div>
        </div>

        {/* Topup Balance Card */}
        <div style={styles.claimCardSmall}>
          <h3 style={styles.claimCardTitle}>Topup Balance</h3>
          <div style={styles.topupContent}>
            <p style={styles.topupAmount}>₹1000</p>
            {/* <p style={styles.topupText}>Available for use</p> */}
          </div>
        </div>

        {/* Plan Upgrade Option Card */}
        {/* <div style={styles.claimCardSmall}>
          <h3 style={styles.claimCardTitle}>Plan Upgrade Option</h3>
          <div style={styles.planButtons}>
            <button style={styles.planBtnActive}>Current Plan</button>
            <button style={styles.planBtnInactive}>Premium Plan</button>
          </div>
        </div> */}
      </div>
    </div>
  );
};



 const renderSupport=()=>
 {

  //doing changes here:--

  return(

  <div>
    <h2 style={styles.pageHeader}>Support & Helpdesk</h2>
    <div>
      <p style={{fontSize:"16px", color:"#475569"}}>For any assistance regarding your corporate health benefits, please reach out to our dedicated support team:</p>
      <p>support@aayurcare.com</p>
      <p>7338146712</p>
    </div>
  </div>

  
  );
 };


 const renderProfile = () => {
  return (
    <div>
      <div style={styles.pageHeader}>
        <div>
          <h2>My Profile</h2>
          <p style={styles.pageSubtitle}>Manage your personal information</p>
        </div>
     
      </div>


    

      <div style={styles.profileContainer}>
        {/* Quick Actions Section */}
        <div style={styles.quickActionsCard}>
          <h3 style={styles.quickActionsTitle}>Quick Actions</h3>
          {/* <div style={styles.quickActionsGrid}>
            <button style={styles.actionBtn}>
              <User size={20} />
              <span>Update Profile</span>
            </button>
          
  
          </div> */}
        </div>

        {/* Main Profile Grid - 2 columns */}
        <div style={styles.profileMainGrid}>
          {/* Left Column - Employee Profile */}
          <div style={styles.profileCard}>
            <h3 style={styles.profileCardTitle}>Employee Profile</h3>
            <div style={styles.profileFieldsContainer}>
              <div style={styles.profileField}>
                <p style={styles.fieldLabel}>Employee Name</p>
                <input 
                  type="text" 
                  value="Kirthana Nambiar" 
                  style={styles.fieldInput}
                  readOnly
                />
              </div>

              <div style={styles.profileField}>
                <p style={styles.fieldLabel}>Employee ID</p>
                <input 
                  type="text" 
                  value="EMP2024001" 
                  style={styles.fieldInput}
                  readOnly
                />
              </div>

              <div style={styles.profileField}>
                <p style={styles.fieldLabel}>Corporate Mail</p>
                <input 
                  type="email" 
                  value="kirthana.nambiar@aayurcare.com" 
                  style={styles.fieldInput}
                  readOnly
                />
              </div>

              <div style={styles.profileField}>
                <p style={styles.fieldLabel}>Corporate Name</p>
                <input 
                  type="text" 
                  value="Aayurcare" 
                  style={styles.fieldInput}
                  readOnly
                />
              </div>

              <div style={styles.profileField}>
                <p style={styles.fieldLabel}>Department</p>
                <input 
                  type="text" 
                  value="Information Technology" 
                  style={styles.fieldInput}
                  readOnly
                />
              </div>

              <div style={styles.profileField}>
                <p style={styles.fieldLabel}>Blood Group</p>
                <input 
                  type="text" 
                  value="A+" 
                  style={styles.fieldInput}
                  readOnly
                />
              </div>

              <div style={styles.profileField}>
                <p style={styles.fieldLabel}>Date of Birth</p>
                <input 
                  type="text" 
                  value="23 April 2000" 
                  style={styles.fieldInput}
                  readOnly
                />
              </div>

              <div style={styles.profileField}>
                <p style={styles.fieldLabel}>Gender</p>
                <input 
                  type="text" 
                  value="Female" 
                  style={styles.fieldInput}
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* Right Column - Plan & Membership Details */}
          <div style={styles.profileCard}>
            <h3 style={styles.profileCardTitle}>Plan & Membership Details</h3>
            <div style={styles.profileFieldsContainer}>
              <div style={styles.profileField}>
                <p style={styles.fieldLabel}>Plan Name</p>
                <input 
                  type="text" 
                  value="Corporate Radiant Premium Plan" 
                  style={styles.fieldInput}
                  readOnly
                />
              </div>

              <div style={styles.profileField}>
                <p style={styles.fieldLabel}>Reimbursement Amount</p>
                <input 
                  type="text" 
                  value="₹1,000" 
                  style={styles.fieldInput}
                  readOnly
                />
              </div>

              <div style={styles.profileField}>
                <p style={styles.fieldLabel}>Plan Amount</p>
                <input 
                  type="text" 
                  value="₹7,250" 
                  style={styles.fieldInput}
                  readOnly
                />
              </div>

              <div style={styles.profileField}>
                <p style={styles.fieldLabel}>Start Date</p>
                <input 
                  type="text" 
                  value="01 Jan 2026" 
                  style={styles.fieldInput}
                  readOnly
                />
              </div>

              <div style={styles.profileField}>
                <p style={styles.fieldLabel}>End Date</p>
                <input 
                  type="text" 
                  value="01 Jan 2027" 
                  style={styles.fieldInput}
                  readOnly
                />
              </div>

              <div style={styles.profileField}>
                <p style={styles.fieldLabel}>Membership ID</p>
                <input 
                  type="text" 
                  value="AAYURCARE-CORP-2026-001234" 
                  style={styles.fieldInput}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




  // const renderWallet = () => {
  //   return (
  //     <div style={{ width: "100%", height: 400 }}>
  //     <h2 style={{ textAlign: "center" }}>Wallet Management</h2>
  //     <ResponsiveContainer>
  //       <PieChart>
  //         {/* Pie component */}
  //         <Pie
  //           data={data}
  //           cx="80%" // X position
  //           cy="50%" // Y position
  //           labelLine={false}
  //           label={({ name, percent }) =>
  //             `${name} ${(percent * 100).toFixed(0)}%`
  //           }
  //           outerRadius={150}
  //           fill="#8884d8"
  //           dataKey="value"
  //         >
  //           {data.map((entry, index) => (
  //             <Cell
  //               key={`cell-${index}`}
  //               fill={COLORS[index % COLORS.length]}
  //             />
  //           ))}
  //         </Pie>
  //         {/* Tooltip on hover */}
  //         <Tooltip />
  //         {/* Legend */}
  //         <Legend />
  //       </PieChart>
  //     </ResponsiveContainer>




  //     <ResponsiveContainer>
  //       <PieChart>
  //         {/* Pie component */}
  //         <Pie
  //           data={data2}
  //           cx="30%" // X position
  //           cy="50%" // Y position
  //           labelLine={false}
  //           label={({ name, percent }) =>
  //             `${name} ${(percent * 100).toFixed(0)}%`
  //           }
  //           outerRadius={150}
  //           fill="#8884d8"
  //           dataKey="value"
  //         >
  //           {data2.map((entry, index) => (
  //             <Cell
  //               key={`cell-${index}`}
  //               fill={COLORS2[index % COLORS2.length]}
  //             />
  //           ))}
  //         </Pie>
  //         {/* Tooltip on hover */}
  //         <Tooltip />
  //         {/* Legend */}
  //         <Legend />
  //       </PieChart>
  //     </ResponsiveContainer>
  //   </div>
  //   );
  // };

 


   

  
  const renderWallet = () => {
    return (
      <div>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Wallet Management</h2>
        <div style={{ display: "flex", gap: "20px", width: "100%" }}>
          {/* Left Pie Chart */}
          <div style={{ flex: 1, height: 400 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data2}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data2.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS2[index % COLORS2.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Right Pie Chart */}
          <div style={{ flex: 1, height: 400 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  };



const renderHome = () => {

  //do chnages
  return (
    <div>
      {/* Welcome Banner */}
      <div style={styles.homeBanner}>
        <h2 style={styles.bannerTitle}>Corporate Health Benefits.</h2>
        {/* <p style={styles.bannerSubtitle}>
          Manage reimbursements, diagnostics and employee wellness seamlessly.
        </p> */}
      </div>

      {/* Feature Cards */}
      <div style={styles.homeCards}>
        <div style={styles.homeCard}>
          <div style={styles.homeIcon}>
            <FileText size={28} color="#3b82f6" />
          </div>
          <h3>Reimbursements</h3>
          <p>Submit and track employee medical claims easily.</p>
        </div>

      


        <div style={styles.homeCard}>
          <div style={styles.homeIcon}>
            <HelpCircle size={28} color="#f59e0b" />
          </div>
          
          <h3>24/7 Assistance</h3>
          <p>Round-the-clock support for claims and emergencies.</p>
        </div>
      </div>
    </div>
  );
};

  return (
    <div style={styles.container}>
      {/* LEFT SIDEBAR */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>Aayurcare</h2>

        <div style={styles.menu}>
          <div 
            style={{...styles.menuItem, ...(activeMenu === "Home" ? styles.activeMenuItem : {})}}
            onClick={() => setActiveMenu("Home")}
          >
            <Home size={18}/> Home
          </div>
          <div 
            style={{...styles.menuItem, ...(activeMenu === "My Profile" ? styles.activeMenuItem : {})}}
            onClick={() => setActiveMenu("My Profile")}
          >
            <User size={18}/> My Profile
          </div>
        
          <div 
            style={{...styles.menuItem, ...(activeMenu === "Wallet" ? styles.activeMenuItem : {})}}
            onClick={() => setActiveMenu("Wallet")}
          >
            <Wallet size={18}/> Wallet
          </div>
          <div 
            style={{...styles.menuItem, ...(activeMenu === "Claims" ? styles.activeMenuItem : {})}}
            onClick={() => setActiveMenu("Claims")}
          >
            <FileText size={18}/> Claims
          </div>
          <div 
            style={{...styles.menuItem, ...(activeMenu === "Support" ? styles.activeMenuItem : {})}}
            onClick={() => setActiveMenu("Support")}
          >
            <HelpCircle size={18}/> Support & Helpdesk
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div style={styles.mainContent}>
        {/* Top Header */}
        <div style={styles.header}>
          <div>
            <h2 style={styles.welcomeText}>Welcome back, Kirthana 👋</h2>
            {/* <p style={styles.subText}>Here's what's happening with your corporate health benefits today</p> */}
          </div>
          <div style={styles.profileCircle}>K</div>
        </div>

        {/* Dynamic Content Based on Menu Selection */}
        {renderContent()}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    backgroundColor: "#f8fafc",
  },

  sidebar: {
    width: "260px",
    backgroundColor: "#1e293b",
    color: "#fff",
    padding: "30px 20px",
    boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
  },

  logo: {
    marginBottom: "50px",
    fontSize: "24px",
    fontWeight: "700",
    background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  menuItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    cursor: "pointer",
    padding: "12px 16px",
    borderRadius: "8px",
    transition: "all 0.2s",
    fontSize: "14px",
    fontWeight: "500",
  },

  activeMenuItem: {
    backgroundColor: "#3b82f6",
    color: "#fff",
  },

  mainContent: {
    flex: 1,
    padding: "40px",
    overflowY: "auto",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "0px",
  },

  welcomeText: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#0000FF", 
    marginBottom: "4px",
  },

  subText: {
    fontSize: "14px",
    color: "#64748b",
  },

  profileCircle: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: "#3b82f6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: "600",
    fontSize: "18px",
    boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
  },

  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
    marginBottom: "40px",
  },

  card: {
    backgroundColor: "#fff",
    padding: "28px",
    borderRadius: "16px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
    border: "1px solid #e2e8f0",
    transition: "all 0.3s",
    cursor: "pointer",
  },

  cardBlue: {
    borderLeft: "4px solid #3b82f6",
  },

  cardGreen: {
    borderLeft: "4px solid #10b981",
  },

  cardOrange: {
    borderLeft: "4px solid #f59e0b",
  },

  cardPurple: {
    borderLeft: "4px solid #8b5cf6",
  },

  cardIcon: {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    backgroundColor: "#f1f5f9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px",
  },

  cardTitle: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#64748b",
    marginBottom: "8px",
  },

  cardValue: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "4px",
  },

  cardSubtext: {
    fontSize: "13px",
    color: "#94a3b8",
  },

  activitySection: {
    backgroundColor: "#fff",
    padding: "28px",
    borderRadius: "16px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
    border: "1px solid #e2e8f0",
    marginBottom: "30px",
  },

  sectionTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#1e293b",
    marginBottom: "24px",
  },

  activityList: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  activityItem: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    padding: "16px",
    backgroundColor: "#f8fafc",
    borderRadius: "12px",
    transition: "all 0.2s",
  },

  activityIcon: {
    width: "44px",
    height: "44px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  activityDetails: {
    flex: 1,
  },

  activityTitle: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#1e293b",
    marginBottom: "4px",
  },

  activityDesc: {
    fontSize: "13px",
    color: "#64748b",
  },

  activityAmount: {
    textAlign: "right",
  },

  amountApproved: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#16a34a",
    marginBottom: "4px",
  },

  amountPending: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#d97706",
    marginBottom: "4px",
  },

  amountRejected: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#dc2626",
    marginBottom: "4px",
  },

  activityTime: {
    fontSize: "12px",
    color: "#94a3b8",
  },

  quickActions: {
    backgroundColor: "#fff",
    padding: "28px",
    borderRadius: "16px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
    border: "1px solid #e2e8f0",
  },

  actionButtons: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "16px",
  },

  actionButton: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 20px",
    backgroundColor: "#f8fafc",
    border: "2px solid #e2e8f0",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    color: "#1e293b",
    transition: "all 0.2s",
  },

  // Wallet Page Styles
  pageHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },

  pageTitle: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "4px",
    alignItems:"center",
  },

  pageSubtitle: {
    fontSize: "14px",
    color: "#64748b",
  },

  addFundsBtn: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px 24px",
    backgroundColor: "#3b82f6",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s",
  },

  walletBalanceCard: {
    backgroundColor: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
    background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
    padding: "32px",
    borderRadius: "20px",
    marginBottom: "30px",
    boxShadow: "0 10px 40px rgba(59, 130, 246, 0.3)",
  },

  balanceHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "32px",
  },

  balanceLabel: {
    fontSize: "14px",
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: "8px",
    fontWeight: "500",
  },

  balanceAmount: {
    fontSize: "48px",
    fontWeight: "700",
    color: "#fff",
    marginBottom: "8px",
    margin: "0",
  },

  balanceSubtext: {
    fontSize: "13px",
    color: "rgba(255, 255, 255, 0.8)",
  },

  walletIconLarge: {
    width: "80px",
    height: "80px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },


  balanceStats: {
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr auto 1fr",
    gap: "24px",
    paddingTop: "24px",
    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
  },



  statItem: {
    textAlign: "center",
  },

  statLabel: {
    fontSize: "13px",
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: "8px",
    fontWeight: "500",
  },

  statValue: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#fff",
    margin: "0",
  },


  transactionSection: {
    backgroundColor: "#fff",
    padding: "28px",
    borderRadius: "16px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
    border: "1px solid #e2e8f0",
  },

  transactionList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  
  transactionItem: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    padding: "16px",
    backgroundColor: "#f8fafc",
    borderRadius: "12px",
    transition: "all 0.2s",
  },

  transactionIcon: {
    width: "44px",
    height: "44px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },



  transactionDetails: {
    flex: 1,
  },



  transactionTitle: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#1e293b",
    marginBottom: "4px",
  },

  transactionDesc: {
    fontSize: "13px",
    color: "#64748b",
    marginBottom: "4px",
  },

  transactionDate: {
    fontSize: "12px",
    color: "#94a3b8",
  },

  transactionAmount: {
    textAlign: "right",
  },


  creditAmount: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#16a34a",
    margin: "0",
  },

  debitAmount: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#dc2626",
    margin: "0",
  },


  comingSoon: {
    backgroundColor: "#fff",
    padding: "60px",
    borderRadius: "16px",
    textAlign: "center",
    fontSize: "18px",
    color: "#64748b",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
    border: "1px solid #e2e8f0",
  },

  claimGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "20px",
  marginTop: "30px",
},

claimCard: {
  backgroundColor: "#fff",
  padding: "24px",
  borderRadius: "16px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  border: "1px solid #e2e8f0",
},

planBtn: {
  padding: "10px 18px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#3b82f6",
  color: "#fff",
  fontWeight: "600",
  cursor: "pointer",
},

  // Profile Page Styles
 

  profileContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },


  profileHeaderCard: {
    backgroundColor: "#fff",
    padding: "32px",
    borderRadius: "16px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
    border: "1px solid #e2e8f0",
    display: "flex",
    gap: "32px",
    alignItems: "center",
  },


  //dat ahwihc ib n

  profileImageSection: { 
    display: "flex",
    flexDirection: "column",
    alignItems:"center",
    gap:"16px",
  },

  profileImageLarge: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    backgroundColor: "#3b82f6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: "48px",
    fontWeight: "700",
    boxShadow: "0 8px 24px rgba(59, 130, 246, 0.3)",
  },


  

  changePhotoBtn: {
    padding: "8px 16px",
    backgroundColor: "#f1f5f9",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: "500",
    color: "#475569",
    cursor: "pointer",
    transition: "all 0.2s",
  },

  profileBasicInfo: {
    flex: 1,
  },

  profileName: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "8px",
  },

  profileRole: {
    fontSize: "16px",
    color: "#64748b",
    marginBottom: "4px",
  },

  profileEmail: {
    fontSize: "14px",
    color: "#64748b",
    marginBottom: "16px",
  },

  profileBadge: {
    display: "inline-block",
    padding: "6px 12px",
    backgroundColor: "#dcfce7",
    color: "#16a34a",
    borderRadius: "6px",
    fontSize: "13px",
    fontWeight: "600",
  },

  infoSection: {
    backgroundColor: "#fff",
    padding: "28px",
    borderRadius: "16px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
    border: "1px solid #e2e8f0",
  },

  infoSectionTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#1e293b",
    marginBottom: "24px",
    paddingBottom: "12px",
    borderBottom: "2px solid #f1f5f9",
  },

  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  },

  infoItem: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  infoLabel: {
    fontSize: "13px",
    fontWeight: "500",
    color: "#64748b",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },

  
  infoValue: {
    fontSize: "15px",
    fontWeight: "600",
    color: "#1e293b",
  },
// Add these to your existing styles object:

claimBalanceCard: {
  backgroundColor: "#fff",
  padding: "24px",
  borderRadius: "16px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  border: "1px solid #e2e8f0",
  marginBottom: "24px",
  textAlign: "center",
},

claimBalanceAmount: {
  fontSize: "42px",
  fontWeight: "700",
  color: "#3b82f6",
  margin: "8px 0 0 0",
},

claimsGrid: {
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: "20px",
  gridTemplateRows: "auto auto",
},

claimCardLarge: {
  backgroundColor: "#fff",
  padding: "28px",
  borderRadius: "16px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  border: "1px solid #e2e8f0",
  gridRow: "span 2",
},

claimCardSmall: {
  backgroundColor: "#fff",
  padding: "24px",
  borderRadius: "16px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  border: "1px solid #e2e8f0",
},

claimCardTitle: {
  fontSize: "18px",
  fontWeight: "600",
  color: "#1e293b",
  marginBottom: "20px",
  paddingBottom: "12px",
  borderBottom: "2px solid #f1f5f9",
},

documentList: {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  marginBottom: "24px",
},

documentItem: {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
},

checkboxLabel: {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontSize: "14px",
  fontWeight: "500",
  color: "#1e293b",
  cursor: "pointer",
},

checkbox: {
  width: "18px",
  height: "18px",
  cursor: "pointer",
},

uploadSection: {
  marginLeft: "28px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
},

fileInput: {
  display: "none",
},

uploadButton: {
  display: "inline-block",
  padding: "8px 16px",
  backgroundColor: "#f1f5f9",
  border: "1px solid #e2e8f0",
  borderRadius: "8px",
  fontSize: "13px",
  fontWeight: "500",
  color: "#475569",
  cursor: "pointer",
  transition: "all 0.2s",
  textAlign: "center",
  width: "fit-content",
},

fileList: {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
},

fileName: {
  fontSize: "13px",
  color: "#64748b",
  padding: "6px 10px",
  backgroundColor: "#f8fafc",
  borderRadius: "6px",
},

submitButton: {
  width: "100%",
  padding: "14px",
  backgroundColor: "#3b82f6",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  fontSize: "15px",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.2s",
},

statusContent: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
  paddingTop: "10px",
},

statusBadge: {
  padding: "8px 16px",
  backgroundColor: "#fef3c7",
  color: "#d97706",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: "600",
},

statusText: {
  fontSize: "13px",
  color: "#64748b",
  textAlign: "center",
},

topupContent: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "10px",
},

topupAmount: {
  fontSize: "32px",
  fontWeight: "700",
  color: "#16a34a",
  margin: "0 0 8px 0",
},

topupText: {
  fontSize: "13px",
  color: "#64748b",
},

planButtons: {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  paddingTop: "10px",
},

planBtnActive: {
  padding: "12px 18px",
  borderRadius: "8px",
  border: "2px solid #3b82f6",
  backgroundColor: "#3b82f6",
  color: "#fff",
  fontWeight: "600",
  fontSize: "14px",
  cursor: "pointer",
  transition: "all 0.2s",
},

planBtnInactive: {
  padding: "12px 18px",
  borderRadius: "8px",
  border: "2px solid #e2e8f0",
  backgroundColor: "#fff",
  color: "#64748b",
  fontWeight: "600",
  fontSize: "14px",
  cursor: "pointer",
  transition: "all 0.2s",
},
// Replace profile-related styles with these:

quickActionsCard: {
  backgroundColor: "#fff",
  padding: "24px",
  borderRadius: "16px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  border: "1px solid #e2e8f0",
  marginBottom: "24px",
},

quickActionsTitle: {
  fontSize: "18px",
  fontWeight: "600",
  color: "#1e293b",
  marginBottom: "20px",
},

quickActionsGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
},

actionBtn: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  padding: "14px 20px",
  backgroundColor: "#f8fafc",
  border: "2px solid #e2e8f0",
  borderRadius: "10px",
  fontSize: "14px",
  fontWeight: "500",
  color: "#1e293b",
  cursor: "pointer",
  transition: "all 0.2s",
},



profileMainGrid: {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "24px",
},

profileCard: {
  backgroundColor: "#fff",
  padding: "28px",
  borderRadius: "16px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  border: "1px solid #e2e8f0",
},

profileCardTitle: {
  fontSize: "18px",
  fontWeight: "600",
  color: "#1e293b",
  marginBottom: "24px",
  paddingBottom: "12px",
  borderBottom: "2px solid #f1f5f9",
},

profileFieldsContainer: {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  marginBottom: "24px",
},

profileField: {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
},

fieldLabel: {
  fontSize: "13px",
  fontWeight: "600",
  color: "#64748b",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  margin: "0",
},

fieldInput: {
  padding: "12px 16px",
  fontSize: "15px",
  fontWeight: "500",
  color: "#1e293b",
  backgroundColor: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "8px",
  outline: "none",
},

secureLoginBtn: {
  width: "100%",
  padding: "14px",
  backgroundColor: "#10b981",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  fontSize: "15px",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.2s",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
},
editBtn: {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "12px 24px",
  backgroundColor: "#3b82f6",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  fontSize: "14px",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.2s",
},

// Keep the editBtn style (used in pageHeader)



};