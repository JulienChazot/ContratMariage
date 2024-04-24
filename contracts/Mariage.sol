// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Mariage {
    string public name;
    string public symbol;
    string public name1;
    string public name2;
    string public surname1;
    string public surname2;
    uint256 public dateNaissance1;
    uint256 public dateNaissance2;
    string public lieuNaissance1;
    string public lieuNaissance2;
    bool public divorce;

    address public owner;

    constructor(
        string memory _name1,
        string memory _surname1,
        uint256 _dateNaissance1,
        string memory _lieuNaissance1,
        string memory _name2,
        string memory _surname2,
        uint256 _dateNaissance2,
        string memory _lieuNaissance2
    ) {
        name = "Mariage";
        symbol = "MAR";
        name1 = _name1;
        surname1 = _surname1;
        dateNaissance1 = _dateNaissance1;
        lieuNaissance1 = _lieuNaissance1;
        name2 = _name2;
        surname2 = _surname2;
        dateNaissance2 = _dateNaissance2;
        lieuNaissance2 = _lieuNaissance2;
        owner = msg.sender;
    }

    function getInfo() public view returns (
        string memory _name1,
        string memory _surname1,
        uint256 _dateNaissance1,
        string memory _lieuNaissance1,
        string memory _name2,
        string memory _surname2,
        uint256 _dateNaissance2,
        string memory _lieuNaissance2
    ) {
        return (name1, surname1, dateNaissance1, lieuNaissance1, name2, surname2, dateNaissance2, lieuNaissance2);
    }
}
