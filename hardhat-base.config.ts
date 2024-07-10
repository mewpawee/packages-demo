import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import 'hardhat-preprocessor';

function parseRemappings(remappings: string[]) {
  return remappings.map((mapping: string) => mapping.split("="))

}

const baseHardhatUserConfig = (remappings: string[]): HardhatUserConfig => {
  return {
    preprocess: {
      eachLine: (hre: any) => ({
        transform: (line: string) => {
          if (line.match(/^\s*import /i)) {
            parseRemappings(remappings).forEach(([find, replace]) => {
              if (line.match('"' + find)) {
                line = line.replace('"' + find, '"' + replace); // handle double quote
              } else if (line.match('\'' + find)) {
                line = line.replace('\'' + find, '\'' + replace); // handle single quote
              }
            });
          }
          return line;
        }
      })
    },

  }
};

export { baseHardhatUserConfig };


