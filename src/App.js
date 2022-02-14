import { Features } from "./components/Features";
import tick from "../src/assets/tick.svg";
import wrong from "../src/assets/wrong.svg";

function App() {
  const data = [
    {
      mode: "FREE", price: "$0", first: { icon: tick, text: "Single User", bold: false, correct:true,alt:"image17" },
    second: { icon: tick, text: "5GB Storage",bold:false , correct:true,alt:"image18" },
    third: { icon: tick, text: "Unlimited Public Projects",bold:false,correct:true,alt:"image19" },
    fourth: { icon: tick, text: "Community Access",bold:false,correct:true,alt:"image20" },
    fifth: { icon: wrong, text: "Unlimited Private Projects",bold:false,correct:false,alt:"image21" },
    sixth: { icon: wrong, text: "Dedicated Phone Support",bold:false,correct:false,alt:"image22" },
    seventh: { icon: wrong, text: "Free Subdomain",bold:false,correct:false,  alt:"image23" },
    eighth: { icon: wrong, text: "Monthly Status Reports",bold:false,correct:false,alt:"image24" }
    },
    {
    mode: "PLUS", price: "$9", first: { icon: tick, text: "5 Users",bold:true,correct:true,alt:"image1" },
    second: { icon: tick, text: "50GB Storage",bold:false,correct:true,alt:"image2" },
      third: { icon: tick, text: "Unlimited Public Projects", bold: false, correct:true,alt:"image3" },
    fourth: { icon: tick, text: "Community Access",bold:false,correct:true,alt:"image4" },
    fifth: { icon: tick, text: "Unlimited Private Projects",bold:false,correct:true,alt:"image5" },
    sixth: { icon: tick, text: "Dedicated Phone Support",bold:false,correct:true,alt:"image6" },
    seventh: { icon: tick, text: "Free Subdomain",bold:false,correct:true,alt:"image7" },
    eighth: { icon: wrong, text: "Monthly Status Reports",bold:false,correct:false,alt:"image8" }
    },
    {
    mode: "PRO", price: "$49", first: { icon: tick, text: "Unlimited Users",bold:true,correct:true,alt:"image9" },
    second: { icon: tick, text: "150GB Storage",bold:false,correct:true,alt:"image10" },
    third: { icon: tick, text: "Unlimited Public Projects",bold:false,correct:true,alt:"image11" }, 
      fourth: { icon: tick, text: "Community Access", bold: false, correct:true,alt:"image12" },
    fifth: { icon: tick, text: "Unlimited Private Projects",bold:false,correct:true,alt:"image13" },
    sixth: { icon: tick, text: "Dedicated Phone Support",bold:false,correct:true,alt:"image14" },
    seventh: { icon: tick, text: "Unlimited Free Subdomain",bold:true,correct:true,alt:"image15" },
    eighth: { icon: tick, text: "Monthly Status Reports",bold:false,correct:true,alt:"image16" }
    }
   ]
  return (
    <div className = "App"
    style = {
      {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#208cea"
      }
    } >
      <Features content={data[0]} />
      <Features content={data[1]} />
      <Features content={data[2]} />
    </div>
  );
}

export default App;
