import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import axios from "axios";
import AvailableBets from "../components/AvailableBets";
import BetSlip from "../components/BetSlip";
import "./index.scss";
import Categories from "../components/Categories";
import soccer from "../images/Icons/soccer-ball.png";
import election from "../images/Icons/elections.png";
import basketball from "../images/Icons/ball-of-basketball.png";
import boxing from "../images/Icons/boxing-gloves.png";
import cricket from "../images/Icons/cricket.png";
import football from "../images/Icons/rugby-ball.png";

const SortByCategory = () => {
  const [walletAdd, setWalletAdd] = useState("");
  const [avaiOdds, setAvaiOdds] = useState([]);
  const [betData, setBetData] = useState([]);
  const [betSlipOpen, setBetSlipOpen] = useState();
  const [accArrStake, setAccArrStake] = useState([]);
  const [accArray, setAccArray] = useState([]);
  const oriOdds = betData[2];
  const oriStake = betData[3];
  const [changedOdds, setChangedOdds] = useState(oriOdds);
  const [changedStake, setChangedStake] = useState();
  const [cat, setCat] = useState(false);
  const [catId, setCatId] = useState();
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
    const interval = setInterval(() => {
      avaiBets();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const events = [
    { id: 0, eventName: "Politics", icon: election },
    { id: 1, eventName: "Baseball", icon: basketball },
    { id: 2, eventName: "Soccer", icon: soccer },
    { id: 3, eventName: "Combat Sports", icon: boxing },
    { id: 4, eventName: "Cricket", icon: cricket },
    { id: 5, eventName: "American Football", icon: football },
  ];

  if (cat == false) {
    return (
      <div>
        <Nav setWalletAdd={setWalletAdd} />
        <Categories setCat={setCat} setCatId={setCatId} />
        <div className="betting-events-wrapper">
          <h3 className="serif-600 sect-title">Explore All Events.</h3>
          <div className="bet-events all-events">
            {avaiOdds.map((item, index) => {
              return (
                <div>
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
                </div>
              );
            })}
          </div>
        </div>
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
  }
  return (
    <div>
      <Nav setWalletAdd={setWalletAdd} />
      <Categories setCat={setCat} setCatId={setCatId} />
      <div className="betting-events-wrapper">
        <h3 className="serif-600 sect-title">
          Explore {events[catId].eventName} Events.
        </h3>
        <div className="bet-events all-events">
          {avaiOdds.map((item, index) => {
            if (item.sport == events[catId].eventName)
              return (
                <div>
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
                </div>
              );
          })}
        </div>
      </div>
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
export default SortByCategory;
