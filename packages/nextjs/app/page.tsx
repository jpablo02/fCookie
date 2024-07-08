/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

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
  const { address: connectedAddress } = useAccount();
  const [imageUrl, setImageUrl] = useState(
    "https://bafybeifcr5flcvjqptfoma4zaq2qtd4ca3upbwvtmyia6bhzk2lwxvmxbi.ipfs.dweb.link/galletaok.png",
  );
  const [buttonText, setButtonText] = useState("Break a Cookie");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleBuyNowClick = () => {
    setImageUrl("https://bafybeifcr5flcvjqptfoma4zaq2qtd4ca3upbwvtmyia6bhzk2lwxvmxbi.ipfs.dweb.link/galletabreak.png");
    setButtonText("Have a Nice Day!");
    setIsButtonDisabled(true);
  };

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="flex justify-center items-center p-4">
            <img src={imageUrl} alt="Fortune Cookie" className="max-w-full h-auto" />
          </figure>
          <div className="card-body flex flex-col items-center text-center">
            <h2 className="card-title">Daily Fortune Cookie!</h2>

            <div className="card-actions justify-center w-full">
              <button className="btn btn-primary" onClick={handleBuyNowClick} disabled={isButtonDisabled}>
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
