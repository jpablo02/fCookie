/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { MintNFT } from "./mint-nft";
import type { NextPage } from "next";
import { useAccount, useConnect, useDisconnect } from "wagmi";

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

const Home: NextPage = () => {
  const { address: connectedAddress, isConnected } = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  const [imageUrl, setImageUrl] = useState(
    "https://bafybeifcr5flcvjqptfoma4zaq2qtd4ca3upbwvtmyia6bhzk2lwxvmxbi.ipfs.dweb.link/galletaok.png",
  );
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleMintNFTClick = async () => {
    setImageUrl("https://bafybeifcr5flcvjqptfoma4zaq2qtd4ca3upbwvtmyia6bhzk2lwxvmxbi.ipfs.dweb.link/galletabreak.png");
    setIsButtonDisabled(true);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen w-full mt-8">
        <div className="text-center w-full max-w-4xl">
          <div className="card bg-base-100 w-full max-w-md shadow-xl mx-auto mb-4">
            <figure>
              <img src={imageUrl} alt="Fortune Cookies" className="w-full h-auto" />
            </figure>
            <div className="card-body">
              <MintNFT onClick={handleMintNFTClick} isButtonDisabled={isButtonDisabled} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
