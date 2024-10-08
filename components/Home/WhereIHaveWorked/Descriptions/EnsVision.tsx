import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function EnsVision() {
  const tasks = [
    {
      text: "Build Crypto Wallet Solution using React.js, Solidity, Web3.js, Node.js, Infura, MongoDb, AWS",
      keywords: ["React.js", "Solidity","Infura", "Web3.js", "Node.js", "MongoDb","AWS"],
    },
    {
      text: "Conducted testing tasks to ensure smart contract functionality and quality using hardhat, mocha/chai",
      keywords: ["hardhat", "mocha/chai"],
    },

    {
      text: "Collaborated closely with the team in regular for interaction of smart contracts and gained expertise in Tokenization and Security Token Offering (STO)",
      keywords: ["smart contracts","Security Token Offering","Tokenization"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Blockchain & Backend Developer
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Dec 2021 - Jan 2024</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.akru.co/", "_blank")}
          >
            https://akru.co
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
