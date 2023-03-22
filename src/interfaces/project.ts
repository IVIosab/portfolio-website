export interface Project {
  projectId: string;
  projectHref: string;
  projectName: string;
  projectDescription: string[];
}

export const projects: Project[] = [
  {
    projectId: "erc777",
    projectHref: "https://github.com/IVIosab/ERC777",
    projectName: "ERC777",
    projectDescription: [
      "An ERC777 token with send and recieve hooks. bulk send, static sale and etherless transfer operators.",
      "Two of simple web-apps for the bulk send and static sale operators.",
      "Built with: Solidity, React, Web3.js, Truffle, Chai.js, Tailwindcss.",
    ],
  },
  {
    projectId: "postamat",
    projectHref: "https://github.com/IVIosab/ERC777",
    projectName: "Postamat",
    projectDescription: [
      "This project is done by 4 students while participating in the Leaders2022 Hackathon.",
      "A website to recommend the best places to install parcel boxes.",
      "Built with: React, Node.js, Express, MongoDB, MaterialUI.",
    ],
  },
  {
    projectId: "lec",
    projectHref: "https://github.com/IVIosab/lec-superfantasy-analyzer",
    projectName: "LEC Fantasy Statistics",
    projectDescription: [
      "A simple website to view LEC player statistics in a user friendly way.",
      "This project is not done yet and has some major errors.",
      "Built with: React, Node.js, Express, MongoDB, Bootstrap.",
    ],
  },
  {
    projectId: "carbonic-c",
    projectHref: "https://github.com/IVIosab/carbonic-c",
    projectName: "Carbonic-C",
    projectDescription: [
      "Toy language compiler for a Pascal-like imperative langauge.",
      "This project is still in development.",
      "Built with: C++, Flex, Yacc/Bison, LLVM.",
    ],
  },
];
