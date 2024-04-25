// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Mariage is ERC721 {
    struct Mariage {
        string name1;
        string surname1;
        uint256 dateNaissance1;
        string lieuNaissance1;
        string name2;
        string surname2;
        uint256 dateNaissance2;
        string lieuNaissance2;
        bool divorce;
    }

    mapping(uint256 => Mariage) public mariages;
    uint256 public nextTokenId;

    constructor() ERC721("MariageNFT", "MFT") {}

    function createMariage(
        string memory _name1,
        string memory _surname1,
        uint256 _dateNaissance1,
        string memory _lieuNaissance1,
        string memory _name2,
        string memory _surname2,
        uint256 _dateNaissance2,
        string memory _lieuNaissance2
    ) external returns (uint256) {
        uint256 tokenId = nextTokenId++;
        mariages[tokenId] = Mariage({
            name1: _name1,
            surname1: _surname1,
            dateNaissance1: _dateNaissance1,
            lieuNaissance1: _lieuNaissance1,
            name2: _name2,
            surname2: _surname2,
            dateNaissance2: _dateNaissance2,
            lieuNaissance2: _lieuNaissance2,
            divorce: false
        });
        _safeMint(msg.sender, tokenId);
        return tokenId;
    }
}
