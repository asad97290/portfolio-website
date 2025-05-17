import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function StackVerse() {
  const tasks = [
    {
      text: "Architect and implement full-stack applications.",
      keywords: ["Solidity", "ERC20 Token","Presale/ICO","Staking","NFT"],
    },
    {
      text: "Develop and audit smart contracts for blockchain-based products.",
      keywords: ["hardhat", "foundry","mocha/chai","TypeScript","Solidity"],
    },

    {
      text: "Manage cloud infrastructure, CI/CD pipelines, and production deployments.",
      keywords: ["integration","meetings","UI/UX","Frontend","Backend"],
    },
      {
      text: "Integrate third-party APIs and payment systems (Web2 & Web3).",
      keywords: ["integration","meetings","UI/UX","Frontend","Backend"],
    },
      {
      text: "Collaborate closely with design, marketing, and business teams to shape product direction.",
      keywords: ["integration","meetings","UI/UX","Frontend","Backend"],
    },
       {
      text: "Deliver maintainable code with performance, security, and scalability in mind.",
      keywords: ["integration","meetings","UI/UX","Frontend","Backend"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Senior Software Engineer
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Jan 2025 - Present</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://stackverse.dev/", "_blank")}
          >
            https://stackverse.dev/
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
