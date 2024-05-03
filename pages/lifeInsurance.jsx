// import React from "react";

const lifeInsurance = () => {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          margin: "41px auto 0",
          width: "100%",
          backgroundColor: "#2f2f2f",
          height: "60px",
          position: "relative",
          boxShadow: "0 10px 10px -10px #00000029 inset",
          display: "table",
          display: "flex",
          justifyContent: "space-between",
          margin: "-8px",
          padding: "10px",
        }}
      >
        <div style={{ marginLeft: "120px" }}>
          <img
            src="https://meeting.policybazaar.com/images/logo.png"
            width="140px"
            height="50px"
          />
        </div>

        <div style={{ marginRight: "120px", marginTop: "11px" }}>
          <button
            style={{
              marginRight: "20px",
              color: "#00b0ff",
              textAlign: "center",
              width: "auto",
              border: "1px solid #00b0ff",
              padding: "0 14px 0 22px",
              height: "31px",
              fontSize: "14px",
              fontWeight: 400,
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            <img
              src="https://png.pngtree.com/png-clipart/20191123/original/pngtree-hand-protect-icon-png-image_5196460.jpg"
              width="15px"
              style={{ marginRight: "10px" }}
            />
            Claim Assistance
          </button>
          <button
            style={{
              marginRight: "20px",
              color: "#00b0ff",
              textAlign: "center",
              width: "auto",
              border: "1px solid #00b0ff",
              padding: "0 14px 0 22px",
              height: "31px",
              fontSize: "14px",
              fontWeight: 400,
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            <img
              src="https://www.svgrepo.com/show/5236/phone-call.svg"
              width="15px"
              style={{ marginRight: "10px" }}
            />
            Talk to Expert
          </button>
        </div>
      </div>

      <div
        style={{
          background: "#4b4949",
          width: "100%",
          height: "400px",
          //   margin: "-20px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 400,
              //   lineHeight: "32px",
              paddingTop: "20px",
              color: "#ffffffe3",
            }}
          >
            <span style={{ color: "#00B0FF" }}>₹1 Crore</span> life cover
            starting
            <span style={{ color: "#00B0FF" }}>from ₹473/month+</span>
          </div>
          <div
            style={{
              border: "1px dashed #50c667",
              //   width: "398px",
              display: "flex",
              justifyContent: "center",
              padding: "4px 35px 5px",
              borderRadius: "8px",
              fontSize: "18px",
              height: "auto",
              color: "#50c667",
              textAlign: "center",
            }}
          >
            Get an online discount of upto 10%
          </div>
        </div>
      </div>
    </div>
  );
};

export default lifeInsurance;
