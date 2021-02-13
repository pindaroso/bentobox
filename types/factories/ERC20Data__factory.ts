/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC20Data } from "../ERC20Data";

export class ERC20Data__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ERC20Data> {
    return super.deploy(overrides || {}) as Promise<ERC20Data>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20Data {
    return super.attach(address) as ERC20Data;
  }
  connect(signer: Signer): ERC20Data__factory {
    return super.connect(signer) as ERC20Data__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Data {
    return new Contract(address, _abi, signerOrProvider) as ERC20Data;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610120806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806370a08231146100465780637ecebe001461007e578063dd62ed3e146100a4575b600080fd5b61006c6004803603602081101561005c57600080fd5b50356001600160a01b03166100d2565b60408051918252519081900360200190f35b61006c6004803603602081101561009457600080fd5b50356001600160a01b03166100e4565b61006c600480360360408110156100ba57600080fd5b506001600160a01b03813581169160200135166100f6565b60006020819052908152604090205481565b60026020526000908152604090205481565b60016020908152600092835260408084209091529082529020548156fea164736f6c634300060c000a";
