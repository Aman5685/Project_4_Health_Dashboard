//import React from 'react';
import leftpanelsearch from "../../public/images/leftpanel_searchbar.svg";
import patient1 from "../../public/images/patient1.png";
import patient2 from "../../public/images/patient2.png";
import patient3 from "../../public/images/patient3.png";
import patient4 from "../../public/images/patient4.png";
import patient5 from "../../public/images/patient5.png";
import patient6 from "../../public/images/patient6.png";
import patient7 from "../../public/images/patient7.png";
import patient8 from "../../public/images/patient8.png";
import patient9 from "../../public/images/patient9.png";
import patient10 from "../../public/images/patient10.png";
import patient11 from "../../public/images/patient11.png";
import patient12 from "../../public/images/patient12.png";
import leftpanelmenu from "../../public/images/leftpanelmenu.svg";
import dropicon from "../../public/images/middle-panel-drop-icon.svg";
import arrowup from "../../public/images/ArrowUp.svg";
import arrowdown from "../../public/images/ArrowDown.svg";
import heartbp from "../../public/images/HeartBP.svg";
import respiratory from "../../public/images/respiratory rate.svg";
import temperature from "../../public/images/temperature.svg";
import rightimage from "../../public/images/Right-top-pcs.png";
import birthicon from "../../public/images/BirthIcon.svg";
import insurance from "../../public/images/InsuranceIcon.svg";
import phoneicon from "../../public/images/PhoneIcon.svg";
import femaleicon from "../../public/images/FemaleIcon.svg";
import downloadicon from "../../public/images/download_icon.svg";
import { GoDotFill } from "react-icons/go";
// import {S} from "react-custom-scrollbars"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  { month: "Oct, 2023", Systolic: 120, Diastolic: 100 },
  { month: "Nov, 2023", Systolic: 150, Diastolic: 60 },
  { month: "Dec, 2023", Systolic: 170, Diastolic: 80 },
  { month: "Jan, 2024", Systolic: 110, Diastolic: 70 },
  { month: "Feb, 2024", Systolic: 140, Diastolic: 90 },
  { month: "Mar, 2024", Systolic: 160, Diastolic: 100 },
];

function Mainpanel() {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="dflex">
          
            <div className="leftpanel">
            <div className="leftpanel-heading">Patients
              <img src={leftpanelsearch} alt="" />
            </div>
            {/* first-patient */}
            <div className="leftpanel-patients"><img src={patient1} alt="" />
              <h3 className="leftpanel-heading-h3">Emily Williams</h3>
              <h6 className="leftpanel-heading-6">Female, 18</h6>
              <img className="leftpanel-hover" src={leftpanelmenu} alt="" />
            </div>
            {/* second-patient */}
            <div className="leftpanel-patients"><img src={patient2} alt="" />
              <h3 className="leftpanel-heading-h3">Ryan Johnson</h3>
              <h6 className="leftpanel-heading-6">Male, 45</h6>
              <img src={leftpanelmenu} alt="" />
            </div>
            {/* third-patient */}
            <div className="leftpanel-patients"><img src={patient3} alt="" />
              <h3 className="leftpanel-heading-h3">Brandon Mitchell</h3>
              <h6 className="leftpanel-heading-6">Male, 36</h6>
              <img src={leftpanelmenu} alt="" />
            </div>
            {/* fourth-patient */}
            <div className="leftpanel-patients"><img src={patient4} alt="" />
              <h3 className="leftpanel-heading-h3">Jessica Taylor</h3>
              <h6 className="leftpanel-heading-6-female">Female, 28</h6>
              <img src={leftpanelmenu} alt="" />
            </div>
            {/* fifth-patient */}
            <div className="leftpanel-patients"><img src={patient5} alt="" />
              <h3 className="leftpanel-heading-h3-samantha">Samantha Johnson</h3>
              <h6 className="leftpanel-heading-6">Female, 56</h6>
              <img src={leftpanelmenu} alt="" />
            </div>
            {/* sixth-patient */}
            <div className="leftpanel-patients"><img src={patient6} alt="" />
              <h3 className="leftpanel-heading-h3-Ashley">Ashley Martinez</h3>
              <h6 className="leftpanel-heading-6">Female, 54</h6>
              <img src={leftpanelmenu} alt="" />
            </div>
            {/* seventh-patient */}
            <div className="leftpanel-patients"><img src={patient7} alt="" />
              <h3 className="leftpanel-heading-h3">Olivia Brown</h3>
              <h6 className="leftpanel-heading-6-female">Female, 32</h6>
              <img src={leftpanelmenu} alt="" />
            </div>
            {/* eighth-patient */}
            <div className="leftpanel-patients"><img src={patient8} alt="" />
              <h3 className="leftpanel-heading-h3">Tyler Davis</h3>
              <h6 className="leftpanel-heading-6-female">Male, 19</h6>
              <img src={leftpanelmenu} alt="" />
            </div>
            {/* Nine-patient */}
            <div className="leftpanel-patients"><img src={patient9} alt="" />
              <h3 className="leftpanel-heading-h3">Kevin Anderson</h3>
              <h6 className="leftpanel-heading-6">Male, 30</h6>
              <img src={leftpanelmenu} alt="" />
            </div>
            {/* tenth-patient */}
            <div className="leftpanel-patients"><img src={patient10} alt="" />
              <h3 className="leftpanel-heading-h3">Dylan Thompson</h3>
              <h6 className="leftpanel-heading-6">Male, 36</h6>
              <img src={leftpanelmenu} alt="" />
            </div>
            {/* Eleveth-patient */}
            <div className="leftpanel-patients"><img src={patient11} alt="" />
              <h3 className="leftpanel-heading-h3">Nathan Evans</h3>
              <h6 className="leftpanel-heading-6">Male, 58</h6>
              <img src={leftpanelmenu} alt="" />
            </div>
            {/* tweleve-patient */}
            <div className="leftpanel-patients"><img src={patient12} alt="" />
              <h3 className="leftpanel-heading-h3">Mike Nolan</h3>
              <h6 className="leftpanel-heading-6-female">Male, 31</h6>
              <img src={leftpanelmenu} alt="" />
            </div>
          </div>
        {/* middle-panel */}
          <div className="middle-panel">
          <h2>Diagnosis History</h2>
          <div className="main-blood-div">
            <div className="blood-left">
              <div className="blood-h3-p">
                <h3>Blood Pressure</h3>
                <p className="blood-p">Last 6 months</p>
                <div>
                  <img className="blood-drop-icon" src={dropicon} alt="" />
                </div>
              </div>
              <div>
                {/* line-Grap */}
      <ResponsiveContainer className="grap-container" max-width="100%" height={400}>
      <LineChart data={data} margin={{ top: 20, right: 10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#666" }} />
        <YAxis tick={{ fontSize: 12, fill: "#666" }} />
        <Tooltip />
        <Legend verticalAlign="top" height={25} />
        <Line
          type="monotone"
           dataKey="Systolic"
          stroke="#d685d7"
          strokeWidth={3}
          dot={{ r: 5, strokeWidth: 2 }}
        />
        <Line
          type="monotone"
           dataKey="Diastolic"
          stroke="#9177c8"
          strokeWidth={3}
          dot={{ r: 5, strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
              </div>
            </div>
            <div className="blood-right">
              <div className="blood-right-upper">
                <h3 className="blood-right-upper-h3">
                  <GoDotFill size={30} color="#E66FD2" />Systolic</h3>
                <h1>160</h1>
                <p className="right-blood-upper-p">
                  <img src={arrowup} alt="" />
                  Higher than Average</p>
              </div>
              <div>
                <h3 className="blood-right-upper-h3"> <GoDotFill size={30} color="#8C6FE6" /> Diastolic</h3>
                <h1>78</h1>
                <p className="right-blood-upper-p"><img src={arrowdown} alt="" /> Low than Average</p>
              </div>
            </div>
          </div>
          <div className="diagnosis-down-main">
            <div className="Diagnosis-down-1">
              <img className="Diagnosis-down-img" src={respiratory} alt="" />
              <p className="Diagnosis-down-p">Respiratory Rate</p>
              <h1 className="Diagnosis-down-h1">20 bpm</h1>
              <p className="Diagnosis-down-p">Normal</p>
            </div>
            <div className="Diagnosis-down-2">
              <img className="Diagnosis-down-img" src={temperature} alt="" />
              <p className="Diagnosis-down-p">Temperature</p>
              <h1 className="Diagnosis-down-h1">98.6<sup>o</sup>F</h1>
              <p className="Diagnosis-down-p">Normal</p>
            </div>
            <div className="Diagnosis-down-3">
              <img className="Diagnosis-down-img" src={heartbp} alt="" />
              <p className="Diagnosis-down-p">Heart Rate</p>
              <h1 className="Diagnosis-down-h1" >78 bpm</h1>
              <p className="Diagnosis-down-arrowdown"> <img src={arrowdown} alt="" /> Lower than Average</p>
            </div>
          </div>
          <div className="Diagnostic-main">
            <h2>Diagnostic List</h2>
            {/* Diagnostic List */}
            <div>
              <ul className="Diagnostice-list-ul-navbar">
                <li>Problem/Diagnosis</li>
                <li>Description</li>
                <li>Status</li>
              </ul>
            </div>
            <div className="Diagnostice-list-border">
              <div className="Diagnostice-border-down">
                <ul className="Diagnostice-list-ul-1">
                  <li>Hypertension</li>
                  <li>Chronic high blood pressure</li>
                  <li>Under Observation</li>
                </ul>
              </div>
              <div className="Diagnostice-border-down">
                <ul className="Diagnostice-list-ul-1">
                  <li>Type 2 Diabetes</li>
                  <li>Insulin resistance and elevated blood sugar</li>
                  <li>Curved</li>
                </ul>
              </div>
              <div className="Diagnostice-border-down">
                <ul className="Diagnostice-list-ul-1">
                  <li>Asthama</li>
                  <li>Reccurrent esposides of bronchial construction</li>
                  <li>Inactive</li>
                </ul>
              </div>
              <div className="Diagnostice-border-down">
                <ul className="Diagnostice-list-ul-1">
                  <li>Osteoarthritis</li>
                  <li>Degenerative joint disease</li>
                  <li>Untreated</li>
                </ul>
              </div>
              <div className="Diagnostice-border-down">
                <ul className="Diagnostice-list-ul-1">
                  <li>Allergic Rhinitis</li>
                  <li>Seasonal allergies causing nasal congestion</li>
                  <li>Active</li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
        {/* right-panel */}
        <div className="right-panel">
          <img className="right-panel-image-1" src={rightimage} alt="" />
          <h2 className="right-panel-h2">Jessica Taylor</h2>
          <div>
            <div className="right-panel-Birth"> <img src={birthicon} alt="" /> Date of Birth <h3 className="birth-h3">August 23,1996</h3> </div>
            <div className="right-panel-Birth"> <img className="right-panel-female-icon" src={femaleicon} alt="" /> <h5 className="famale-icons-h5">Gender</h5> <h3 className="female-icon-h3">Female</h3></div>
            <div className="right-panel-Birth"> <img src={phoneicon} alt="" /> Contact Info. <h3 className="phone-icon-h3">(415) 555-1234</h3></div>
            <div className="right-panel-Birth"> <img src={phoneicon} alt="" /> <h5 className="new-phone-icons-h5">Emergency Contact</h5> <h3 className="phone-icon-h3">(415) 555-5678</h3></div>
            <div className="right-insurance-main"> <img src={insurance} alt="" /> <h5 className="insurance-h5">Insurance Provider</h5>  <span className="insurance-span">Sunrise Health Assurance</span></div>
            <button className="right-button-last">Show all Information</button>
          </div>
             <div className="lab-result-down-main">
            <h1>Lab result</h1>
            <div className="Lab-result">
              <h6>Blood Tests</h6>
              <img src={downloadicon} alt="" />
          </div>
          <div className="Lab-result">
            <h6>CT Scans</h6>
            <img src={downloadicon} alt="" />
          </div>
          <div className="Lab-result">
            <h6>Radiology Reports</h6>
            <img src={downloadicon} alt="" />
          </div>
          <div className="Lab-result">
            <h6>X-Rays</h6>
            <img src={downloadicon} alt="" />
          </div>
          <div className="Lab-result">
            <h6>Urine Test</h6>
            <img src={downloadicon} alt="" />
          </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mainpanel;