import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import "./index.scss";
import bgImg from "../images/Ellipse.png";
import AvailableBets from "../components/AvailableBets";
import Categories from "../components/Categories";
import BetSlip from "../components/BetSlip";

const Exchange = () => {
  const [betData, setBetData] = useState([]);
  const [betSlipOpen, setBetSlipOpen] = useState();
  const [accArrStake, setAccArrStake] = useState([]);
  const [accArray, setAccArray] = useState([]);
  const oriOdds = betData[2];
  const oriStake = betData[3];
  const [changedOdds, setChangedOdds] = useState(oriOdds);
  const [changedStake, setChangedStake] = useState();
  const [walletAdd, setWalletAdd] = useState("");
  const [avaiOdds, setAvaiOdds] = useState([]);
  const [cat, setCat] = useState(false);
  const [catId, setCatId] = useState(0);
  const avaiBets = async () => {
    try {
      const res = await axios.get("https://script.google.com/macros/s/AKfycbxzvjIzPgO0A0rUYD1FHHD-lv5zRzXLVZLwOXiLMBCPAuHMbmHnsG5FFgn_E9yA4xj3UA/exec");
      console.log(res.data);
      setAvaiOdds(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    avaiBets();
  }, []);
  return (
    <div>
      <Nav setWalletAdd={setWalletAdd} />
      <img src={bgImg} className="bg-img"></img>
      <div className="ex-hero-text serif-800">
        No deposit or <br />
        payout hassle.
        <br />
        No limit or bans.
        <br />
        Purely betting.
        <br />
        <span>Purebet.</span>
      </div>
      <div className="betting-events-wrapper">
        <h3 className="serif-600 sect-title">Upcoming Events.</h3>
        <div className="bet-events">
          {avaiOdds.slice(0, 4).map((item, index) => {
            return (
              <AvailableBets
                setBetData={setBetData}
                setBetSlipOpen={setBetSlipOpen}
                setChangedOdds={setChangedOdds}
                setAccArrStake={setAccArrStake}
                setChangedStake={setChangedStake}
                setAccArray={setAccArray}
                item={item}
                index={index}
                avaiOdds={avaiOdds}
              />
            );
          })}
        </div>
      </div>
      <Categories setCat={setCat} setCatId={setCatId} />
      <BetSlip
        betData={betData}
        betSlipOpen={betSlipOpen}
        setBetSlipOpen={setBetSlipOpen}
        setChangedOdds={setChangedOdds}
        setChangedStake={setChangedStake}
        changedOdds={changedOdds}
        changedStake={changedStake}
        walletAdd={walletAdd}
        accArrStake={accArrStake}
        accArray={accArray}
      />
    </div>
  );
};

export default Exchange;
