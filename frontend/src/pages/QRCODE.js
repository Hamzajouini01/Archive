import html2canvas from "html2canvas";
import { QRCodeCanvas } from "qrcode.react";
import React, { useEffect, useState } from "react";
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import axios from "axios";
import { useParams } from "react-router-dom";
function QrCode() {
  const [qr, setqr] = useState("");
  const [url, seturl] = useState("");
  const QrCodeDownload = async () => {
    const canvas = await (
      await html2canvas(document.getElementById("canvas"))
    ).toDataURL();

    if (canvas) {
      setqr(canvas);
      const a = document.createElement("a");
      a.download = "QrCode.png";
      a.href = canvas;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const QrCodeCopy = () => {
    navigator.clipboard.writeText(qr);
  };

  const [users, setUsers] = useState([]);
  const {id} = useParams();



  
  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/Event/${id}`);
      const testeur = response.data.Nom
      setUsers(testeur);
      console.log("ttttttttt", testeur);
      return testeur;
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div >
      <div >
        <p className="text-2xl" style={{marginLeft: 50}}> ScanMe To Payment</p>
      </div>
      

      <div id="canvas" >
         
        <QRCodeCanvas
        
          value={users}
          size={300}
          bgColor={"#ffffff"}
          fgColor={"#22736F"}
          level={"H"}
          includeMargin={false}
          imageSettings={{
            src: "/youssef.png",
            x: undefined,
            y: undefined,
            height: 40,
            width: 40,
            excavate: true,
          }}
        />
      </div>
      <div className="flex w-[300px] mt-4 p-4 space-x-2 items-center justify-center">
        <button
          onClick={() => QrCodeDownload()}
          class="btnnnnn"
        >
          <SystemUpdateAltIcon/> 
                    Download
        </button>

        <button
          onClick={() => QrCodeCopy()}
          class="btnnnnn"
          style={{
            color: "white"
          }}
        >
          <Inventory2Icon />
          Copy
        </button>
      </div>
    </div>
  );
}

export default QrCode;
