import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function OrbitCosmos() {
  const tasks = [
    {
      text: "Design and Developed Smart contract in Solidity regarding ERC20 Token, Presale/ICO and Staking",
      keywords: ["Solidity", "ERC20 Token","Presale/ICO","Staking"],
    },
    {
      text: "Conducted testing tasks to ensure smart contract functionality and quality using hardhat, foundry, mocha/chai and TypeScript",
      keywords: ["hardhat", "foundry","mocha/chai","TypeScript"],
    },

    {
      text: "Collaborated closely with UI/UX, Frontend and Backend team in regular meetings and integration",
      keywords: ["integration","meetings"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Blockchain Developer
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Jan 2024 - Present</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.akru.co/", "_blank")}
          >
            https://www.orbitcosmos.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
