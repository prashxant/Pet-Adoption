import React, { useState } from "react";

function App() {
  const headers = ["Name", "Email", "Phone", "Pet Name", "Type", "Breed"];

  const [formData, setFormData] = useState({});
  const [tableData, setTableData] = useState([]);

  const handleChange = (e, header) => {
    setFormData({
      ...formData,
      [header]: e.target.value,
    });
  };

  const submit = () => {
    setTableData([...tableData, formData]);
    setFormData({}); 
  };

  return (
    <>
     
      <div>
        {headers.map((header, index) => (
          <div key={index}>
            <h5>{header}</h5>
            <input
              type="text"
              value={formData[header] || ""}
              onChange={(e) => handleChange(e, header)}
            />
          </div>
        ))}
      </div>

      
      <div style={{ paddingLeft: "5vw", marginTop: "2vh" }}>
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            borderRadius: "5px",
            height: "30px",
            width: "100px",
          }}
          onClick={submit}
        >
          Submit
        </button>
      </div>

   
      <table border="1" style={{ marginTop: "20px", width: "80%" }}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, index) => (
                <td key={index}>{row[header] || "-"}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
