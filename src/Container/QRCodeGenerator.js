import React, { useState } from "react";
import QRCode from "qrcode.react";

function QRCodeGenerator() {
  const [qrValue, setQrValue] = useState("");

  const downloadQR = () => {
    const canvas = document.getElementById("123456");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "123456.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <input 
        style={{ margin: 10, marginLeft: 50 }} 
        type="text" 
        placeholder="Enter Text For QR Code"
        value={qrValue}
        onChange={(e) => { setQrValue(e.target.value) }}
      />
      <br />
      <QRCode
        id="123456"
        value={qrValue}
        size={290}
        level={"H"}
        includeMargin={true}
      />
      <br />
      <button onClick={downloadQR}> Download QR </button>
    </div>
  );
}

export default QRCodeGenerator;
