import React, { memo } from "react";
import "./About.css";
import Banner from "../Banner/Banner";
function About() {
  const Data = [
    "Galaxy S24 Ultra",
    "Galaxy S24+",
    "Galaxy Book4 Ultra",
    "Galaxy Tab S9 Series",
    "Galaxy Watch6 Series",
  ];
  const Data1 = ["The Frame", "The Freestyle 2nd Gen", "Music Frame"];
  const Data2 = ["Bespoke AI", "Bespoke Refrigerator", "Bespoke Laundry"];
  const Data3 = ["Bespoke Laundry", "How to recycle"];
  return (
    <div className="container">
      <Banner
        data={Data}
        title={"Mobile & Computing"}
        bg={
          "https://images.samsung.com/is/image/samsung/assets/us/home/04152024/SDSAC-7185-S24U-HP-LOB-FullBleed-DT-1440x810.jpg?$1440_810_JPG$"
        }
        title2={"Galaxy S24 Ultra"}
        description={
          "Get up to $750 trade-in credit and $75 instant Samsung Credit with participating carriers. = Try it for 30 days or get a full refund."
        }
        btn={"Buy now"}
      />
      <Banner
        data={Data1}
        title={"TV & Audio"}
        bg={
          "https://images.samsung.com/is/image/samsung/assets/us/home/04112024-2/Homepage_LOB_LifestyleWK_TheFrame_Desktop_1440x810.jpg?$1440_810_JPG$"
        }
        title2={"Buy. Bezel. Beauty."}
        description={"Buy the Frame, get a Customizable Bezel on us."}
        btn={"Buy now"}
      />
      <Banner
        data={Data2}
        title={"Home Appliances"}
        bg={
          "https://images.samsung.com/is/image/samsung/assets/us/home/04022024/LOB_Bespoke-AI.png?$1440_810_JPG$"
        }
        title2={"New Bespoke AI Appliances"}
        description={
          "Pre-order and save up to $1,200 on our latest technology."
        }
        btn={"Pre-order"}
      />
      <Banner
        data={Data3}
        title={"Sustainability"}
        bg={
          "https://images.samsung.com/is/image/samsung/assets/us/home/03252024-2/sustainability-1-dt.jpg?$1440_810_JPG$"
        }
        title2={"New phone, less waste"}
        description={
          "Get a refurbished Certified Re-Newed smartphone with the features you love."
        }
        btn={"Learn more"}
        color={"#fff"}
        color2={"#000"}
      />
    </div>
  );
}

export default memo(About);
