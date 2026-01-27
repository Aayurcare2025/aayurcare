import React, { useState } from "react";
import { User, Home, Wallet, FileText, HelpCircle } from "lucide-react";
import CorporateLoginClaims from "./CorporateLoginClaims";
export default function CorporateHome() {
  const [activeMenu, setActiveMenu] = useState("Home");

  const renderContent = () => {
    switch(activeMenu) {
      case "Home":
        return renderHome();
      case "Wallet":
        return renderWallet();
      case "My Profile":
        return renderProfile();
      // case "KYC":
      //   return <div style={styles.comingSoon}>KYC - Coming Soon</div>;
      // case "Claims":
      //   return <div style={styles.comingSoon}>Claims Management - Coming Soon</div>;
  //     case "Claims":
  // return <Claims />;
  case "Claims":
  return <CorporateLoginClaims/>

      case "Support":
      return renderSupport();
      default:
        return renderHome();
    }
  };


 const renderSupport=()=>
 {
  return(
  <div>
    <h2 style={styles.pageHeader}>Support & Helpdesk</h2>
    <div>
      <p style={{fontSize:"16px", color:"#475569"}}>For any assistance regarding your corporate health benefits, please reach out to our dedicated support team:</p>
      <p>support@aayurcare.com                    </p>
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
            <h2 style={styles.pageTitle}>My Profile</h2>
            <p style={styles.pageSubtitle}>Manage your personal information and settings</p>
          </div>
          <button style={styles.editBtn}>
            <User size={20} />
            <span>Edit Profile</span>
          </button>
        </div>




        <div style={styles.profileContainer}>
          {/* Profile Header Card */}
          <div style={styles.profileHeaderCard}>
            <div style={styles.profileImageSection}>
              <div style={styles.profileImageLarge}>K</div>
              {/* <button style={styles.changePhotoBtn}>Change Photo</button> */}
            </div>
            <div style={styles.profileBasicInfo}>
              <h2 style={styles.profileName}>Kirthana Nambiar</h2>
              <p style={styles.profileRole}>Corporate Admin • Full Stack Developer</p>
              <p style={styles.profileEmail}>kirthana.nambiar@aayurcare.com</p>
              <div style={styles.profileBadge}>✓ Verified Account</div>
            </div>
          </div>

          {/* Personal Information */}
          <div style={styles.infoSection}>
            <h3 style={styles.infoSectionTitle}>Personal Information</h3>
            <div style={styles.infoGrid}>
              <div style={styles.infoItem}>
                <p style={styles.infoLabel}>Full Name</p>
                <p style={styles.infoValue}>Kirthana Nambiar</p>
              </div>
              <div style={styles.infoItem}>
                <p style={styles.infoLabel}>Employee ID</p>
                <p style={styles.infoValue}>EMP2024001</p>
              </div>
              <div style={styles.infoItem}>
                <p style={styles.infoLabel}>Email Address</p>
                <p style={styles.infoValue}>kirthana.nambiar@aayurcare.com</p>
              </div>
              <div style={styles.infoItem}>
                <p style={styles.infoLabel}>Phone Number</p>
                <p style={styles.infoValue}>+91 7057530253</p>
              </div>
              <div style={styles.infoItem}>
                <p style={styles.infoLabel}>Date of Birth</p>
                <p style={styles.infoValue}>23 April 2000</p>
              </div>
              <div style={styles.infoItem}>
                <p style={styles.infoLabel}>Gender</p>
                <p style={styles.infoValue}>Female</p>
              </div>
            </div>
          </div>

          {/* Employment Details */}
          <div style={styles.infoSection}>
            <h3 style={styles.infoSectionTitle}>Employment Details</h3>
            <div style={styles.infoGrid}>
              <div style={styles.infoItem}>
                <p style={styles.infoLabel}>Department</p>
                <p style={styles.infoValue}>IT</p>
              </div>
              <div style={styles.infoItem}>
                <p style={styles.infoLabel}>Designation</p>
                <p style={styles.infoValue}>Full Stack Developer</p>
              </div>
              <div style={styles.infoItem}>
                <p style={styles.infoLabel}>Date of Joining</p>
                <p style={styles.infoValue}>08 September 2025</p>
              </div>
              <div style={styles.infoItem}>
                <p style={styles.infoLabel}>Office Location</p>
                <p style={styles.infoValue}>Bangalore, Karnataka</p>
              </div>
              <div style={styles.infoItem}>
                <p style={styles.infoLabel}>Employee Type</p>
                <p style={styles.infoValue}>Full Time - Permanent</p>
              </div>
            </div>
          </div>

          {/* Health Benefits Information */}
          <div style={styles.infoSection}>
            <h3 style={styles.infoSectionTitle}>Health Benefits Information</h3>
            <div style={styles.infoGrid}>
              <div style={styles.infoItem}>
                <p style={styles.infoLabel}>Membership Plan Number</p>
                <p style={styles.infoValue}>AAYURCARE-CORP-2026-001234</p>
              </div>
              {/* <div style={styles.infoItem}>
                <p style={styles.infoLabel}>Coverage Amount</p>
                <p style={styles.infoValue}>₹5,00,000</p>
              </div> */}
              <div style={styles.infoItem}>
                <p style={styles.infoLabel}>Policy Start Date</p>
                <p style={styles.infoValue}>01 April 2024</p>
              </div>
              <div style={styles.infoItem}>
                <p style={styles.infoLabel}>Policy End Date</p>
                <p style={styles.infoValue}>31 March 2025</p>
              </div>
              <div style={styles.infoItem}>
                <p style={styles.infoLabel}>Dependents Covered</p>
                <p style={styles.infoValue}>Self + Spouse + 1 Child</p>
              </div>
              <div style={styles.infoItem}>
                <p style={styles.infoLabel}>OPD Limit (Annual)</p>
                <p style={styles.infoValue}>₹15,000</p>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div style={styles.infoSection}>
            <h3 style={styles.infoSectionTitle}>Emergency Contact</h3>
            <div style={styles.infoGrid}>
              <div style={styles.infoItem}>
                <p style={styles.infoLabel}>Contact Name</p>
                <p style={styles.infoValue}>Shreejeet Nambiar</p>
              </div>
              <div style={styles.infoItem}>
                <p style={styles.infoLabel}>Relationship</p>
                <p style={styles.infoValue}>Brother</p>
              </div>
              <div style={styles.infoItem}>
                <p style={styles.infoLabel}>Phone Number</p>
                <p style={styles.infoValue}>+91 8308025459</p>
              </div>
              <div style={styles.infoItem}>
                <p style={styles.infoLabel}>Email Address</p>
                <p style={styles.infoValue}>nambiarshreejeet@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderWallet = () => {
    return (
      <div>
        <div style={styles.pageHeader}>
          <div>
            <h2 style={styles.pageTitle}>Wallet Management</h2>
            <p style={styles.pageSubtitle}>Manage your corporate health benefits wallet</p>
          </div>
          {/* <button style={styles.addFundsBtn}>
            <Wallet size={20} />
            <span>Add Funds</span>
          </button> */}
        </div>

        {/* Wallet Balance Card */}
        <div style={styles.walletBalanceCard}>
          <div style={styles.balanceHeader}>
            <div>
              <p style={styles.balanceLabel}>Available Balance</p>
              <h1 style={styles.balanceAmount}>₹40,000</h1>
              <p style={styles.balanceSubtext}>Last updated: Today</p>
            </div>
            <div style={styles.walletIconLarge}>
              <Wallet size={48} color="#fff" />
            </div>
          </div>
          
          <div style={styles.balanceStats}>
            <div style={styles.statItem}>
              <p style={styles.statLabel}>Total Reimbursement Credited</p>
              <p style={styles.statValue}>₹5000</p>
            </div>
            <div style={styles.statDivider}></div>
            <div style={styles.statItem}>
              <p style={styles.statLabel}>Plan Price</p>
              <p style={styles.statValue}>₹15,000</p>
            </div>
            <div style={styles.statDivider}></div>
            <div style={styles.statItem}>
              <p style={styles.statLabel}>Expiry Date</p>
              <p style={styles.statValue}>26 January 2027</p>
            </div>2
          </div>
        </div>

        {/* Transaction History */}
      
          
        

           

          
           

          
        
       
      </div>
    );
  };

 
    // return (
    //   <div>
    //     {/* Dashboard Cards */}
    //     <div style={styles.cardsContainer}>
    //       <div style={{...styles.card, ...styles.cardBlue}}>
    //         <div style={styles.cardIcon}>
    //           <User size={24} color="#3b82f6" />
    //         </div>
    //         <h3 style={styles.cardTitle}>Total Employees</h3>
    //         <p style={styles.cardValue}>120</p>
    //         <p style={styles.cardSubtext}>Active members</p>
    //       </div>

    //       <div style={{...styles.card, ...styles.cardGreen}}>
    //         <div style={styles.cardIcon}>
    //           <Wallet size={24} color="#10b981" />
    //         </div>
    //         <h3 style={styles.cardTitle}>Wallet Balance</h3>
    //         <p style={styles.cardValue}>₹45,000</p>
    //         <p style={styles.cardSubtext}>Available for reimbursements</p>
    //       </div>

    //       <div style={{...styles.card, ...styles.cardOrange}}>
    //         <div style={styles.cardIcon}>
    //           <Clock size={24} color="#f59e0b" />
    //         </div>
    //         <h3 style={styles.cardTitle}>Pending Claims</h3>
    //         <p style={styles.cardValue}>8</p>
    //         <p style={styles.cardSubtext}>Awaiting approval</p>
    //       </div>

    //       <div style={{...styles.card, ...styles.cardPurple}}>
    //         <div style={styles.cardIcon}>
    //           <TrendingUp size={24} color="#8b5cf6" />
    //         </div>
    //         <h3 style={styles.cardTitle}>This Month</h3>
    //         <p style={styles.cardValue}>₹12,450</p>
    //         <p style={styles.cardSubtext}>Total reimbursements</p>
    //       </div>
    //     </div>

    //     {/* Recent Activity Section */}
    //     <div style={styles.activitySection}>
    //       <h3 style={styles.sectionTitle}>Recent Claims Activity</h3>
          
    //       <div style={styles.activityList}>
    //         <div style={styles.activityItem}>
    //           <div style={{...styles.activityIcon, backgroundColor: "#dcfce7"}}>
    //             <CheckCircle size={20} color="#16a34a" />
    //           </div>
    //           <div style={styles.activityDetails}>
    //             <p style={styles.activityTitle}>OPD Claim - Rajesh Kumar</p>
    //             <p style={styles.activityDesc}>Consultation fee reimbursement approved</p>
    //           </div>
    //           <div style={styles.activityAmount}>
    //             <p style={styles.amountApproved}>₹850</p>
    //             <p style={styles.activityTime}>2 hours ago</p>
    //           </div>
    //         </div>

    //         <div style={styles.activityItem}>
    //           <div style={{...styles.activityIcon, backgroundColor: "#fef3c7"}}>
    //             <Clock size={20} color="#d97706" />
    //           </div>
    //           <div style={styles.activityDetails}>
    //             <p style={styles.activityTitle}>Pharmacy Claim - Priya Sharma</p>
    //             <p style={styles.activityDesc}>Medicine purchase pending review</p>
    //           </div>
    //           <div style={styles.activityAmount}>
    //             <p style={styles.amountPending}>₹1,200</p>
    //             <p style={styles.activityTime}>5 hours ago</p>
    //           </div>
    //         </div>

    //         <div style={styles.activityItem}>
    //           <div style={{...styles.activityIcon, backgroundColor: "#dcfce7"}}>
    //             <CheckCircle size={20} color="#16a34a" />
    //           </div>
    //           <div style={styles.activityDetails}>
    //             <p style={styles.activityTitle}>Diagnostic Test - Amit Patel</p>
    //             <p style={styles.activityDesc}>Blood test reimbursement processed</p>
    //           </div>
    //           <div style={styles.activityAmount}>
    //             <p style={styles.amountApproved}>₹650</p>
    //             <p style={styles.activityTime}>1 day ago</p>
    //           </div>
    //         </div>

    //         <div style={styles.activityItem}>
    //           <div style={{...styles.activityIcon, backgroundColor: "#fee2e2"}}>
    //             <XCircle size={20} color="#dc2626" />
    //           </div>
    //           <div style={styles.activityDetails}>
    //             <p style={styles.activityTitle}>OPD Claim - Sneha Reddy</p>
    //             <p style={styles.activityDesc}>Incomplete documentation</p>
    //           </div>
    //           <div style={styles.activityAmount}>
    //             <p style={styles.amountRejected}>₹900</p>
    //             <p style={styles.activityTime}>2 days ago</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Quick Actions */}
    //     <div style={styles.quickActions}>
    //       <h3 style={styles.sectionTitle}>Quick Actions</h3>
    //       <div style={styles.actionButtons}>
    //         <button style={styles.actionButton}>
    //           <FileText size={20} />
    //           <span>Review Claims</span>
    //         </button>
    //         <button style={styles.actionButton}>
    //           <Wallet size={20} />
    //           <span>Add Funds</span>
    //         </button>
    //         <button style={styles.actionButton}>
    //           <User size={20} />
    //           <span>Manage Employees</span>
    //         </button>
    //         <button style={styles.actionButton}>
    //           <TrendingUp size={20} />
    //           <span>View Reports</span>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // );
const renderHome = () => {
  return (
    <div>
      {/* Welcome Banner */}
      <div style={styles.homeBanner}>
        <h2 style={styles.bannerTitle}>Corporate Health Benefits.</h2>
        <p style={styles.bannerSubtitle}>
          Manage reimbursements, diagnostics and employee wellness seamlessly.
        </p>
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

        {/* <div style={styles.homeCard}>
          <div style={styles.homeIcon}>
            <TrendingUp size={28} color="#10b981" />
          </div>
          <h3>Diagnostics Booking</h3>
          <p>Book lab tests and health checkups for employees.</p>
        </div> */}


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
          {/* <div 
            style={{...styles.menuItem, ...(activeMenu === "KYC" ? styles.activeMenuItem : {})}}
            onClick={() => setActiveMenu("KYC")}
          >
            <Shield size={18}/> KYC
          </div> */}
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

  statDivider: {
    width: "1px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
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

  // Profile Page Styles
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

  profileImageSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
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
};