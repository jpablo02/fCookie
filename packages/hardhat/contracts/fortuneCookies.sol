// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0

//0xd39dfc2e3a3465E5AFE76a8fF819E8c1d7352411 sepolia

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

pragma solidity ^0.8.20;

contract fortuneCookies is ERC721, ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;

    constructor()
        ERC721("Fortune Cookie", "FCK")
        Ownable()
    {}

    function safeMint(address to, string memory uri) public {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // Sobrescribir _burn
    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    // Sobrescribir tokenURI
    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    // Sobrescribir supportsInterface
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
