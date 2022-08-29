import React from "react";
import Nav from "../components/Nav";

const About = () => {
  return (
    <div className="about-container">
      <Nav />
      <h3 className="serif-600 sect-title a-sect-title">About Purebet.</h3>
      <p className="sans about-body">
        Purebet is a decentralized, non-custodial sports betting exchange and
        prediction market based on the Solana blockchain, custom built from the
        ground up to give the optimal betting experience. The current build is
        an alpha version to demonstrate the power of building custom built smart
        contracts on the Solana blockchain designed specifically for sports
        betting. Purebet allows anyone to express their opinion on any sporting
        event, political race, financial market, or any other prediction outcome
        without the worry of having to trust a 3rd party with their funds.
        Purebet connects people with opposing views automatically and
        anonymously.
      </p>
      <h3 className="serif-600 sect-title a-sect-title">
        To use this devnet demo.
      </h3>
      <p className="sans about-body">
        Switch your Phantom wallet to devent by clicking the cog in the bottom
        right, and selecting Change Network then Devnet. Go to{" "}
        <a href="http://solfaucet.com" target = "_blank"> Sol Faucet </a> to get up to 2 devnet
        SOL. Go to devnet{" "}
        <a href="https://spl-token-faucet.com/?token-name=USDC" target = "_blank" >USDC faucet</a>{" "}
        to obtain up to 1000 devnet USDC. Go to our exchange to bet on an
        upcoming sporting event or our casino to test your classic Crash
        strategies before we go to mainnet. Contact us in{" "}
        <a href="https://discord.gg/22tr2FYAh9" target = "_blank" >Discord</a> if you have any
        issues or questions.
      </p>
      <h3 className="serif-600 sect-title a-sect-title">
        Sports betting exchanges 101.
      </h3>
      <p className="sans about-body">
        A sports betting exchange is similar to a cryptocurrency trading
        exchange. Every bet on an outcome must be matched by another bet on the
        opposing outcome. Users can place maker orders, by requesting higher
        odds or higher stakes than is currently on offer, or they can place
        taker orders which match instantly at the current odds on offer. Any
        unmatched orders can be canceled and any matched bets are locked in the
        smart contract until the event is over. Once the event has been
        resolved, winning users get their initial stake plus their profit (minus
        any fees that the exchange takes). Since our exchange is on the Solana
        blockchain, some orders are required to put up a small amount of SOL for
        "rent exemption". Once the market is resolved, this is returned to
        users.
      </p>
      <h3 className="serif-600 sect-title a-sect-title">Crash 101.</h3>
      <p className="sans about-body">
        The aim of the game is to let the multiplier get as high as possible.
        This determines your return on your initial stake. However, you must
        stop the game before the multiplier crashes. If it crashes, the game is
        over and you lose your initial stake. Our game is provably fair. Each
        game has a hash which can be translated into a multiplier. This hash is
        determined before you play, so we cannot swap it depending on your stake
        size or winning history. We generated 2 million hashes using the sha-256
        algorithm (the same one used in bitcoin). Each hash relied on the one
        before. We then play these hashes in reverse order. We started with a
        hash of
        91c981d61c10d60112e4b724d5d9421b4bea1da388fea9a62a40ad788cf5f422. Using
        this, you can prove each subsequent result was determined long before
        you began playing, but because of the cryptography of the sha-256
        algorithm, you can never find the next one until it is revealed to you.
        It is explained well in this video:
        <a href = "https://www.youtube.com/watch?v=F1HA7e3acSI" target = "_blank"> https://www.youtube.com/watch?v=F1HA7e3acSI </a>
      </p>
    </div>
  );
};

export default About;
