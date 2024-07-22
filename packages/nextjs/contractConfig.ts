const contracts = {
  fortuneCookies: {
    abi: [
      {
        address: "0xd39dfc2e3a3465E5AFE76a8fF819E8c1d7352411",
        abi: [
          {
            inputs: [],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address",
              },
              {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
              },
              {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
              },
            ],
            name: "ApprovalForAll",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: false,
                internalType: "uint256",
                name: "_fromTokenId",
                type: "uint256",
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "_toTokenId",
                type: "uint256",
              },
            ],
            name: "BatchMetadataUpdate",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: false,
                internalType: "uint256",
                name: "_tokenId",
                type: "uint256",
              },
            ],
            name: "MetadataUpdate",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "OwnershipTransferred",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "approve",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "owner",
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "getApproved",
            outputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "address",
                name: "operator",
                type: "address",
              },
            ],
            name: "isApprovedForAll",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "ownerOf",
            outputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "string",
                name: "uri",
                type: "string",
              },
            ],
            name: "safeMint",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "safeTransferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
            ],
            name: "safeTransferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "operator",
                type: "address",
              },
              {
                internalType: "bool",
                name: "approved",
                type: "bool",
              },
            ],
            name: "setApprovalForAll",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
              },
            ],
            name: "supportsInterface",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "tokenURI",
            outputs: [
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
            ],
            name: "transferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newOwner",
                type: "address",
              },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        transactionHash: "0x1bf4984dae784e8f2dbe60805b41bfe2174be3026f679c496e02ef20b3a21c1c",
        receipt: {
          to: null,
          from: "0x605DA8E9e5BF645e58b2D960cbAF2e1f7190FFF5",
          contractAddress: "0xd39dfc2e3a3465E5AFE76a8fF819E8c1d7352411",
          transactionIndex: 35,
          gasUsed: "1480350",
          logsBloom:
            "0x00000000000000000000000000000000000000000000000000800000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000020000000000000004000800000000000000008000000000000000400000000000000000000000000000000000000000010000000000000001000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000",
          blockHash: "0x16834eba4f973b0c479d32bf9fd702d3f972accd061f2022cb5349ab21b59420",
          transactionHash: "0x1bf4984dae784e8f2dbe60805b41bfe2174be3026f679c496e02ef20b3a21c1c",
          logs: [
            {
              transactionIndex: 35,
              blockNumber: 6272958,
              transactionHash: "0x1bf4984dae784e8f2dbe60805b41bfe2174be3026f679c496e02ef20b3a21c1c",
              address: "0xd39dfc2e3a3465E5AFE76a8fF819E8c1d7352411",
              topics: [
                "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
                "0x0000000000000000000000000000000000000000000000000000000000000000",
                "0x000000000000000000000000605da8e9e5bf645e58b2d960cbaf2e1f7190fff5",
              ],
              data: "0x",
              logIndex: 88,
              blockHash: "0x16834eba4f973b0c479d32bf9fd702d3f972accd061f2022cb5349ab21b59420",
            },
          ],
          blockNumber: 6272958,
          cumulativeGasUsed: "10397614",
          status: 1,
          byzantium: true,
        },
        args: [],
        numDeployments: 1,
        solcInputHash: "a918d2895c74b015400a4b52a322fbfa",
        metadata:
          '{"compiler":{"version":"0.8.20+commit.a1b79de6"},"language":"Solidity","output":{"abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_toTokenId","type":"uint256"}],"name":"BatchMetadataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"MetadataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"uri","type":"string"}],"name":"safeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"events":{"Approval(address,address,uint256)":{"details":"Emitted when `owner` enables `approved` to manage the `tokenId` token."},"ApprovalForAll(address,address,bool)":{"details":"Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets."},"BatchMetadataUpdate(uint256,uint256)":{"details":"This event emits when the metadata of a range of tokens is changed. So that the third-party platforms such as NFT market could timely update the images and related attributes of the NFTs."},"MetadataUpdate(uint256)":{"details":"This event emits when the metadata of a token is changed. So that the third-party platforms such as NFT market could timely update the images and related attributes of the NFT."},"Transfer(address,address,uint256)":{"details":"Emitted when `tokenId` token is transferred from `from` to `to`."}},"kind":"dev","methods":{"approve(address,uint256)":{"details":"See {IERC721-approve}."},"balanceOf(address)":{"details":"See {IERC721-balanceOf}."},"getApproved(uint256)":{"details":"See {IERC721-getApproved}."},"isApprovedForAll(address,address)":{"details":"See {IERC721-isApprovedForAll}."},"name()":{"details":"See {IERC721Metadata-name}."},"owner()":{"details":"Returns the address of the current owner."},"ownerOf(uint256)":{"details":"See {IERC721-ownerOf}."},"renounceOwnership()":{"details":"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."},"safeTransferFrom(address,address,uint256)":{"details":"See {IERC721-safeTransferFrom}."},"safeTransferFrom(address,address,uint256,bytes)":{"details":"See {IERC721-safeTransferFrom}."},"setApprovalForAll(address,bool)":{"details":"See {IERC721-setApprovalForAll}."},"symbol()":{"details":"See {IERC721Metadata-symbol}."},"transferFrom(address,address,uint256)":{"details":"See {IERC721-transferFrom}."},"transferOwnership(address)":{"details":"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."}},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"contracts/fortuneCookies.sol":"fortuneCookies"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs","useLiteralContent":true},"optimizer":{"enabled":true,"runs":200},"remappings":[]},"sources":{"@openzeppelin/contracts/access/Ownable.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.0) (access/Ownable.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"../utils/Context.sol\\";\\n\\n/**\\n * @dev Contract module which provides a basic access control mechanism, where\\n * there is an account (an owner) that can be granted exclusive access to\\n * specific functions.\\n *\\n * By default, the owner account will be the one that deploys the contract. This\\n * can later be changed with {transferOwnership}.\\n *\\n * This module is used through inheritance. It will make available the modifier\\n * `onlyOwner`, which can be applied to your functions to restrict their use to\\n * the owner.\\n */\\nabstract contract Ownable is Context {\\n    address private _owner;\\n\\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\\n\\n    /**\\n     * @dev Initializes the contract setting the deployer as the initial owner.\\n     */\\n    constructor() {\\n        _transferOwnership(_msgSender());\\n    }\\n\\n    /**\\n     * @dev Throws if called by any account other than the owner.\\n     */\\n    modifier onlyOwner() {\\n        _checkOwner();\\n        _;\\n    }\\n\\n    /**\\n     * @dev Returns the address of the current owner.\\n     */\\n    function owner() public view virtual returns (address) {\\n        return _owner;\\n    }\\n\\n    /**\\n     * @dev Throws if the sender is not the owner.\\n     */\\n    function _checkOwner() internal view virtual {\\n        require(owner() == _msgSender(), \\"Ownable: caller is not the owner\\");\\n    }\\n\\n    /**\\n     * @dev Leaves the contract without owner. It will not be possible to call\\n     * `onlyOwner` functions. Can only be called by the current owner.\\n     *\\n     * NOTE: Renouncing ownership will leave the contract without an owner,\\n     * thereby disabling any functionality that is only available to the owner.\\n     */\\n    function renounceOwnership() public virtual onlyOwner {\\n        _transferOwnership(address(0));\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Can only be called by the current owner.\\n     */\\n    function transferOwnership(address newOwner) public virtual onlyOwner {\\n        require(newOwner != address(0), \\"Ownable: new owner is the zero address\\");\\n        _transferOwnership(newOwner);\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Internal function without access restriction.\\n     */\\n    function _transferOwnership(address newOwner) internal virtual {\\n        address oldOwner = _owner;\\n        _owner = newOwner;\\n        emit OwnershipTransferred(oldOwner, newOwner);\\n    }\\n}\\n","keccak256":"0xba43b97fba0d32eb4254f6a5a297b39a19a247082a02d6e69349e071e2946218","license":"MIT"},"@openzeppelin/contracts/interfaces/IERC165.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (interfaces/IERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"../utils/introspection/IERC165.sol\\";\\n","keccak256":"0xd04b0f06e0666f29cf7cccc82894de541e19bb30a765b107b1e40bb7fe5f7d7a","license":"MIT"},"@openzeppelin/contracts/interfaces/IERC4906.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.0) (interfaces/IERC4906.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"./IERC165.sol\\";\\nimport \\"./IERC721.sol\\";\\n\\n/// @title EIP-721 Metadata Update Extension\\ninterface IERC4906 is IERC165, IERC721 {\\n    /// @dev This event emits when the metadata of a token is changed.\\n    /// So that the third-party platforms such as NFT market could\\n    /// timely update the images and related attributes of the NFT.\\n    event MetadataUpdate(uint256 _tokenId);\\n\\n    /// @dev This event emits when the metadata of a range of tokens is changed.\\n    /// So that the third-party platforms such as NFT market could\\n    /// timely update the images and related attributes of the NFTs.\\n    event BatchMetadataUpdate(uint256 _fromTokenId, uint256 _toTokenId);\\n}\\n","keccak256":"0x2a9dadb806be80dd451821f1f1190eb9aa6f6edae85b185db29d60767cc0c5f4","license":"MIT"},"@openzeppelin/contracts/interfaces/IERC721.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (interfaces/IERC721.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"../token/ERC721/IERC721.sol\\";\\n","keccak256":"0xaf297d12d8d4a57fe01a70f0ef38908f208e3faedc577056d0b728fa2f3ccf0c","license":"MIT"},"@openzeppelin/contracts/token/ERC721/ERC721.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC721/ERC721.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"./IERC721.sol\\";\\nimport \\"./IERC721Receiver.sol\\";\\nimport \\"./extensions/IERC721Metadata.sol\\";\\nimport \\"../../utils/Address.sol\\";\\nimport \\"../../utils/Context.sol\\";\\nimport \\"../../utils/Strings.sol\\";\\nimport \\"../../utils/introspection/ERC165.sol\\";\\n\\n/**\\n * @dev Implementation of https://eips.ethereum.org/EIPS/eip-721[ERC721] Non-Fungible Token Standard, including\\n * the Metadata extension, but not including the Enumerable extension, which is available separately as\\n * {ERC721Enumerable}.\\n */\\ncontract ERC721 is Context, ERC165, IERC721, IERC721Metadata {\\n    using Address for address;\\n    using Strings for uint256;\\n\\n    // Token name\\n    string private _name;\\n\\n    // Token symbol\\n    string private _symbol;\\n\\n    // Mapping from token ID to owner address\\n    mapping(uint256 => address) private _owners;\\n\\n    // Mapping owner address to token count\\n    mapping(address => uint256) private _balances;\\n\\n    // Mapping from token ID to approved address\\n    mapping(uint256 => address) private _tokenApprovals;\\n\\n    // Mapping from owner to operator approvals\\n    mapping(address => mapping(address => bool)) private _operatorApprovals;\\n\\n    /**\\n     * @dev Initializes the contract by setting a `name` and a `symbol` to the token collection.\\n     */\\n    constructor(string memory name_, string memory symbol_) {\\n        _name = name_;\\n        _symbol = symbol_;\\n    }\\n\\n    /**\\n     * @dev See {IERC165-supportsInterface}.\\n     */\\n    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {\\n        return\\n            interfaceId == type(IERC721).interfaceId ||\\n            interfaceId == type(IERC721Metadata).interfaceId ||\\n            super.supportsInterface(interfaceId);\\n    }\\n\\n    /**\\n     * @dev See {IERC721-balanceOf}.\\n     */\\n    function balanceOf(address owner) public view virtual override returns (uint256) {\\n        require(owner != address(0), \\"ERC721: address zero is not a valid owner\\");\\n        return _balances[owner];\\n    }\\n\\n    /**\\n     * @dev See {IERC721-ownerOf}.\\n     */\\n    function ownerOf(uint256 tokenId) public view virtual override returns (address) {\\n        address owner = _ownerOf(tokenId);\\n        require(owner != address(0), \\"ERC721: invalid token ID\\");\\n        return owner;\\n    }\\n\\n    /**\\n     * @dev See {IERC721Metadata-name}.\\n     */\\n    function name() public view virtual override returns (string memory) {\\n        return _name;\\n    }\\n\\n    /**\\n     * @dev See {IERC721Metadata-symbol}.\\n     */\\n    function symbol() public view virtual override returns (string memory) {\\n        return _symbol;\\n    }\\n\\n    /**\\n     * @dev See {IERC721Metadata-tokenURI}.\\n     */\\n    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {\\n        _requireMinted(tokenId);\\n\\n        string memory baseURI = _baseURI();\\n        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString())) : \\"\\";\\n    }\\n\\n    /**\\n     * @dev Base URI for computing {tokenURI}. If set, the resulting URI for each\\n     * token will be the concatenation of the `baseURI` and the `tokenId`. Empty\\n     * by default, can be overridden in child contracts.\\n     */\\n    function _baseURI() internal view virtual returns (string memory) {\\n        return \\"\\";\\n    }\\n\\n    /**\\n     * @dev See {IERC721-approve}.\\n     */\\n    function approve(address to, uint256 tokenId) public virtual override {\\n        address owner = ERC721.ownerOf(tokenId);\\n        require(to != owner, \\"ERC721: approval to current owner\\");\\n\\n        require(\\n            _msgSender() == owner || isApprovedForAll(owner, _msgSender()),\\n            \\"ERC721: approve caller is not token owner or approved for all\\"\\n        );\\n\\n        _approve(to, tokenId);\\n    }\\n\\n    /**\\n     * @dev See {IERC721-getApproved}.\\n     */\\n    function getApproved(uint256 tokenId) public view virtual override returns (address) {\\n        _requireMinted(tokenId);\\n\\n        return _tokenApprovals[tokenId];\\n    }\\n\\n    /**\\n     * @dev See {IERC721-setApprovalForAll}.\\n     */\\n    function setApprovalForAll(address operator, bool approved) public virtual override {\\n        _setApprovalForAll(_msgSender(), operator, approved);\\n    }\\n\\n    /**\\n     * @dev See {IERC721-isApprovedForAll}.\\n     */\\n    function isApprovedForAll(address owner, address operator) public view virtual override returns (bool) {\\n        return _operatorApprovals[owner][operator];\\n    }\\n\\n    /**\\n     * @dev See {IERC721-transferFrom}.\\n     */\\n    function transferFrom(address from, address to, uint256 tokenId) public virtual override {\\n        //solhint-disable-next-line max-line-length\\n        require(_isApprovedOrOwner(_msgSender(), tokenId), \\"ERC721: caller is not token owner or approved\\");\\n\\n        _transfer(from, to, tokenId);\\n    }\\n\\n    /**\\n     * @dev See {IERC721-safeTransferFrom}.\\n     */\\n    function safeTransferFrom(address from, address to, uint256 tokenId) public virtual override {\\n        safeTransferFrom(from, to, tokenId, \\"\\");\\n    }\\n\\n    /**\\n     * @dev See {IERC721-safeTransferFrom}.\\n     */\\n    function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory data) public virtual override {\\n        require(_isApprovedOrOwner(_msgSender(), tokenId), \\"ERC721: caller is not token owner or approved\\");\\n        _safeTransfer(from, to, tokenId, data);\\n    }\\n\\n    /**\\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\\n     *\\n     * `data` is additional data, it has no specified format and it is sent in call to `to`.\\n     *\\n     * This internal function is equivalent to {safeTransferFrom}, and can be used to e.g.\\n     * implement alternative mechanisms to perform token transfer, such as signature-based.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must exist and be owned by `from`.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function _safeTransfer(address from, address to, uint256 tokenId, bytes memory data) internal virtual {\\n        _transfer(from, to, tokenId);\\n        require(_checkOnERC721Received(from, to, tokenId, data), \\"ERC721: transfer to non ERC721Receiver implementer\\");\\n    }\\n\\n    /**\\n     * @dev Returns the owner of the `tokenId`. Does NOT revert if token doesn\'t exist\\n     */\\n    function _ownerOf(uint256 tokenId) internal view virtual returns (address) {\\n        return _owners[tokenId];\\n    }\\n\\n    /**\\n     * @dev Returns whether `tokenId` exists.\\n     *\\n     * Tokens can be managed by their owner or approved accounts via {approve} or {setApprovalForAll}.\\n     *\\n     * Tokens start existing when they are minted (`_mint`),\\n     * and stop existing when they are burned (`_burn`).\\n     */\\n    function _exists(uint256 tokenId) internal view virtual returns (bool) {\\n        return _ownerOf(tokenId) != address(0);\\n    }\\n\\n    /**\\n     * @dev Returns whether `spender` is allowed to manage `tokenId`.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function _isApprovedOrOwner(address spender, uint256 tokenId) internal view virtual returns (bool) {\\n        address owner = ERC721.ownerOf(tokenId);\\n        return (spender == owner || isApprovedForAll(owner, spender) || getApproved(tokenId) == spender);\\n    }\\n\\n    /**\\n     * @dev Safely mints `tokenId` and transfers it to `to`.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must not exist.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function _safeMint(address to, uint256 tokenId) internal virtual {\\n        _safeMint(to, tokenId, \\"\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-ERC721-_safeMint-address-uint256-}[`_safeMint`], with an additional `data` parameter which is\\n     * forwarded in {IERC721Receiver-onERC721Received} to contract recipients.\\n     */\\n    function _safeMint(address to, uint256 tokenId, bytes memory data) internal virtual {\\n        _mint(to, tokenId);\\n        require(\\n            _checkOnERC721Received(address(0), to, tokenId, data),\\n            \\"ERC721: transfer to non ERC721Receiver implementer\\"\\n        );\\n    }\\n\\n    /**\\n     * @dev Mints `tokenId` and transfers it to `to`.\\n     *\\n     * WARNING: Usage of this method is discouraged, use {_safeMint} whenever possible\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must not exist.\\n     * - `to` cannot be the zero address.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function _mint(address to, uint256 tokenId) internal virtual {\\n        require(to != address(0), \\"ERC721: mint to the zero address\\");\\n        require(!_exists(tokenId), \\"ERC721: token already minted\\");\\n\\n        _beforeTokenTransfer(address(0), to, tokenId, 1);\\n\\n        // Check that tokenId was not minted by `_beforeTokenTransfer` hook\\n        require(!_exists(tokenId), \\"ERC721: token already minted\\");\\n\\n        unchecked {\\n            // Will not overflow unless all 2**256 token ids are minted to the same owner.\\n            // Given that tokens are minted one by one, it is impossible in practice that\\n            // this ever happens. Might change if we allow batch minting.\\n            // The ERC fails to describe this case.\\n            _balances[to] += 1;\\n        }\\n\\n        _owners[tokenId] = to;\\n\\n        emit Transfer(address(0), to, tokenId);\\n\\n        _afterTokenTransfer(address(0), to, tokenId, 1);\\n    }\\n\\n    /**\\n     * @dev Destroys `tokenId`.\\n     * The approval is cleared when the token is burned.\\n     * This is an internal function that does not check if the sender is authorized to operate on the token.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function _burn(uint256 tokenId) internal virtual {\\n        address owner = ERC721.ownerOf(tokenId);\\n\\n        _beforeTokenTransfer(owner, address(0), tokenId, 1);\\n\\n        // Update ownership in case tokenId was transferred by `_beforeTokenTransfer` hook\\n        owner = ERC721.ownerOf(tokenId);\\n\\n        // Clear approvals\\n        delete _tokenApprovals[tokenId];\\n\\n        unchecked {\\n            // Cannot overflow, as that would require more tokens to be burned/transferred\\n            // out than the owner initially received through minting and transferring in.\\n            _balances[owner] -= 1;\\n        }\\n        delete _owners[tokenId];\\n\\n        emit Transfer(owner, address(0), tokenId);\\n\\n        _afterTokenTransfer(owner, address(0), tokenId, 1);\\n    }\\n\\n    /**\\n     * @dev Transfers `tokenId` from `from` to `to`.\\n     *  As opposed to {transferFrom}, this imposes no restrictions on msg.sender.\\n     *\\n     * Requirements:\\n     *\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must be owned by `from`.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function _transfer(address from, address to, uint256 tokenId) internal virtual {\\n        require(ERC721.ownerOf(tokenId) == from, \\"ERC721: transfer from incorrect owner\\");\\n        require(to != address(0), \\"ERC721: transfer to the zero address\\");\\n\\n        _beforeTokenTransfer(from, to, tokenId, 1);\\n\\n        // Check that tokenId was not transferred by `_beforeTokenTransfer` hook\\n        require(ERC721.ownerOf(tokenId) == from, \\"ERC721: transfer from incorrect owner\\");\\n\\n        // Clear approvals from the previous owner\\n        delete _tokenApprovals[tokenId];\\n\\n        unchecked {\\n            // `_balances[from]` cannot overflow for the same reason as described in `_burn`:\\n            // `from`\'s balance is the number of token held, which is at least one before the current\\n            // transfer.\\n            // `_balances[to]` could overflow in the conditions described in `_mint`. That would require\\n            // all 2**256 token ids to be minted, which in practice is impossible.\\n            _balances[from] -= 1;\\n            _balances[to] += 1;\\n        }\\n        _owners[tokenId] = to;\\n\\n        emit Transfer(from, to, tokenId);\\n\\n        _afterTokenTransfer(from, to, tokenId, 1);\\n    }\\n\\n    /**\\n     * @dev Approve `to` to operate on `tokenId`\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function _approve(address to, uint256 tokenId) internal virtual {\\n        _tokenApprovals[tokenId] = to;\\n        emit Approval(ERC721.ownerOf(tokenId), to, tokenId);\\n    }\\n\\n    /**\\n     * @dev Approve `operator` to operate on all of `owner` tokens\\n     *\\n     * Emits an {ApprovalForAll} event.\\n     */\\n    function _setApprovalForAll(address owner, address operator, bool approved) internal virtual {\\n        require(owner != operator, \\"ERC721: approve to caller\\");\\n        _operatorApprovals[owner][operator] = approved;\\n        emit ApprovalForAll(owner, operator, approved);\\n    }\\n\\n    /**\\n     * @dev Reverts if the `tokenId` has not been minted yet.\\n     */\\n    function _requireMinted(uint256 tokenId) internal view virtual {\\n        require(_exists(tokenId), \\"ERC721: invalid token ID\\");\\n    }\\n\\n    /**\\n     * @dev Internal function to invoke {IERC721Receiver-onERC721Received} on a target address.\\n     * The call is not executed if the target address is not a contract.\\n     *\\n     * @param from address representing the previous owner of the given token ID\\n     * @param to target address that will receive the tokens\\n     * @param tokenId uint256 ID of the token to be transferred\\n     * @param data bytes optional data to send along with the call\\n     * @return bool whether the call correctly returned the expected magic value\\n     */\\n    function _checkOnERC721Received(\\n        address from,\\n        address to,\\n        uint256 tokenId,\\n        bytes memory data\\n    ) private returns (bool) {\\n        if (to.isContract()) {\\n            try IERC721Receiver(to).onERC721Received(_msgSender(), from, tokenId, data) returns (bytes4 retval) {\\n                return retval == IERC721Receiver.onERC721Received.selector;\\n            } catch (bytes memory reason) {\\n                if (reason.length == 0) {\\n                    revert(\\"ERC721: transfer to non ERC721Receiver implementer\\");\\n                } else {\\n                    /// @solidity memory-safe-assembly\\n                    assembly {\\n                        revert(add(32, reason), mload(reason))\\n                    }\\n                }\\n            }\\n        } else {\\n            return true;\\n        }\\n    }\\n\\n    /**\\n     * @dev Hook that is called before any token transfer. This includes minting and burning. If {ERC721Consecutive} is\\n     * used, the hook may be called as part of a consecutive (batch) mint, as indicated by `batchSize` greater than 1.\\n     *\\n     * Calling conditions:\\n     *\\n     * - When `from` and `to` are both non-zero, ``from``\'s tokens will be transferred to `to`.\\n     * - When `from` is zero, the tokens will be minted for `to`.\\n     * - When `to` is zero, ``from``\'s tokens will be burned.\\n     * - `from` and `to` are never both zero.\\n     * - `batchSize` is non-zero.\\n     *\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\n     */\\n    function _beforeTokenTransfer(address from, address to, uint256 firstTokenId, uint256 batchSize) internal virtual {}\\n\\n    /**\\n     * @dev Hook that is called after any token transfer. This includes minting and burning. If {ERC721Consecutive} is\\n     * used, the hook may be called as part of a consecutive (batch) mint, as indicated by `batchSize` greater than 1.\\n     *\\n     * Calling conditions:\\n     *\\n     * - When `from` and `to` are both non-zero, ``from``\'s tokens were transferred to `to`.\\n     * - When `from` is zero, the tokens were minted for `to`.\\n     * - When `to` is zero, ``from``\'s tokens were burned.\\n     * - `from` and `to` are never both zero.\\n     * - `batchSize` is non-zero.\\n     *\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\n     */\\n    function _afterTokenTransfer(address from, address to, uint256 firstTokenId, uint256 batchSize) internal virtual {}\\n\\n    /**\\n     * @dev Unsafe write access to the balances, used by extensions that \\"mint\\" tokens using an {ownerOf} override.\\n     *\\n     * WARNING: Anyone calling this MUST ensure that the balances remain consistent with the ownership. The invariant\\n     * being that for any address `a` the value returned by `balanceOf(a)` must be equal to the number of tokens such\\n     * that `ownerOf(tokenId)` is `a`.\\n     */\\n    // solhint-disable-next-line func-name-mixedcase\\n    function __unsafe_increaseBalance(address account, uint256 amount) internal {\\n        _balances[account] += amount;\\n    }\\n}\\n","keccak256":"0x2c309e7df9e05e6ce15bedfe74f3c61b467fc37e0fae9eab496acf5ea0bbd7ff","license":"MIT"},"@openzeppelin/contracts/token/ERC721/IERC721.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC721/IERC721.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"../../utils/introspection/IERC165.sol\\";\\n\\n/**\\n * @dev Required interface of an ERC721 compliant contract.\\n */\\ninterface IERC721 is IERC165 {\\n    /**\\n     * @dev Emitted when `tokenId` token is transferred from `from` to `to`.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);\\n\\n    /**\\n     * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.\\n     */\\n    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);\\n\\n    /**\\n     * @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\\n     */\\n    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);\\n\\n    /**\\n     * @dev Returns the number of tokens in ``owner``\'s account.\\n     */\\n    function balanceOf(address owner) external view returns (uint256 balance);\\n\\n    /**\\n     * @dev Returns the owner of the `tokenId` token.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function ownerOf(uint256 tokenId) external view returns (address owner);\\n\\n    /**\\n     * @dev Safely transfers `tokenId` token from `from` to `to`.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must exist and be owned by `from`.\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external;\\n\\n    /**\\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must exist and be owned by `from`.\\n     * - If the caller is not `from`, it must have been allowed to move this token by either {approve} or {setApprovalForAll}.\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function safeTransferFrom(address from, address to, uint256 tokenId) external;\\n\\n    /**\\n     * @dev Transfers `tokenId` token from `from` to `to`.\\n     *\\n     * WARNING: Note that the caller is responsible to confirm that the recipient is capable of receiving ERC721\\n     * or else they may be permanently lost. Usage of {safeTransferFrom} prevents loss, though the caller must\\n     * understand this adds an external call which potentially creates a reentrancy vulnerability.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `tokenId` token must be owned by `from`.\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(address from, address to, uint256 tokenId) external;\\n\\n    /**\\n     * @dev Gives permission to `to` to transfer `tokenId` token to another account.\\n     * The approval is cleared when the token is transferred.\\n     *\\n     * Only a single account can be approved at a time, so approving the zero address clears previous approvals.\\n     *\\n     * Requirements:\\n     *\\n     * - The caller must own the token or be an approved operator.\\n     * - `tokenId` must exist.\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address to, uint256 tokenId) external;\\n\\n    /**\\n     * @dev Approve or remove `operator` as an operator for the caller.\\n     * Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.\\n     *\\n     * Requirements:\\n     *\\n     * - The `operator` cannot be the caller.\\n     *\\n     * Emits an {ApprovalForAll} event.\\n     */\\n    function setApprovalForAll(address operator, bool approved) external;\\n\\n    /**\\n     * @dev Returns the account approved for `tokenId` token.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function getApproved(uint256 tokenId) external view returns (address operator);\\n\\n    /**\\n     * @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.\\n     *\\n     * See {setApprovalForAll}\\n     */\\n    function isApprovedForAll(address owner, address operator) external view returns (bool);\\n}\\n","keccak256":"0x5bce51e11f7d194b79ea59fe00c9e8de9fa2c5530124960f29a24d4c740a3266","license":"MIT"},"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.6.0) (token/ERC721/IERC721Receiver.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @title ERC721 token receiver interface\\n * @dev Interface for any contract that wants to support safeTransfers\\n * from ERC721 asset contracts.\\n */\\ninterface IERC721Receiver {\\n    /**\\n     * @dev Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom}\\n     * by `operator` from `from`, this function is called.\\n     *\\n     * It must return its Solidity selector to confirm the token transfer.\\n     * If any other value is returned or the interface is not implemented by the recipient, the transfer will be reverted.\\n     *\\n     * The selector can be obtained in Solidity with `IERC721Receiver.onERC721Received.selector`.\\n     */\\n    function onERC721Received(\\n        address operator,\\n        address from,\\n        uint256 tokenId,\\n        bytes calldata data\\n    ) external returns (bytes4);\\n}\\n","keccak256":"0xa82b58eca1ee256be466e536706850163d2ec7821945abd6b4778cfb3bee37da","license":"MIT"},"@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC721/extensions/ERC721URIStorage.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"../ERC721.sol\\";\\nimport \\"../../../interfaces/IERC4906.sol\\";\\n\\n/**\\n * @dev ERC721 token with storage based token URI management.\\n */\\nabstract contract ERC721URIStorage is IERC4906, ERC721 {\\n    using Strings for uint256;\\n\\n    // Optional mapping for token URIs\\n    mapping(uint256 => string) private _tokenURIs;\\n\\n    /**\\n     * @dev See {IERC165-supportsInterface}\\n     */\\n    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, IERC165) returns (bool) {\\n        return interfaceId == bytes4(0x49064906) || super.supportsInterface(interfaceId);\\n    }\\n\\n    /**\\n     * @dev See {IERC721Metadata-tokenURI}.\\n     */\\n    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {\\n        _requireMinted(tokenId);\\n\\n        string memory _tokenURI = _tokenURIs[tokenId];\\n        string memory base = _baseURI();\\n\\n        // If there is no base URI, return the token URI.\\n        if (bytes(base).length == 0) {\\n            return _tokenURI;\\n        }\\n        // If both are set, concatenate the baseURI and tokenURI (via abi.encodePacked).\\n        if (bytes(_tokenURI).length > 0) {\\n            return string(abi.encodePacked(base, _tokenURI));\\n        }\\n\\n        return super.tokenURI(tokenId);\\n    }\\n\\n    /**\\n     * @dev Sets `_tokenURI` as the tokenURI of `tokenId`.\\n     *\\n     * Emits {MetadataUpdate}.\\n     *\\n     * Requirements:\\n     *\\n     * - `tokenId` must exist.\\n     */\\n    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual {\\n        require(_exists(tokenId), \\"ERC721URIStorage: URI set of nonexistent token\\");\\n        _tokenURIs[tokenId] = _tokenURI;\\n\\n        emit MetadataUpdate(tokenId);\\n    }\\n\\n    /**\\n     * @dev See {ERC721-_burn}. This override additionally checks to see if a\\n     * token-specific URI was set for the token, and if so, it deletes the token URI from\\n     * the storage mapping.\\n     */\\n    function _burn(uint256 tokenId) internal virtual override {\\n        super._burn(tokenId);\\n\\n        if (bytes(_tokenURIs[tokenId]).length != 0) {\\n            delete _tokenURIs[tokenId];\\n        }\\n    }\\n}\\n","keccak256":"0x7942989e3525aec1672469e4c65fb33fbd19c785c9cadbcb70fcbe1fe8bfdd37","license":"MIT"},"@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/extensions/IERC721Metadata.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"../IERC721.sol\\";\\n\\n/**\\n * @title ERC-721 Non-Fungible Token Standard, optional metadata extension\\n * @dev See https://eips.ethereum.org/EIPS/eip-721\\n */\\ninterface IERC721Metadata is IERC721 {\\n    /**\\n     * @dev Returns the token collection name.\\n     */\\n    function name() external view returns (string memory);\\n\\n    /**\\n     * @dev Returns the token collection symbol.\\n     */\\n    function symbol() external view returns (string memory);\\n\\n    /**\\n     * @dev Returns the Uniform Resource Identifier (URI) for `tokenId` token.\\n     */\\n    function tokenURI(uint256 tokenId) external view returns (string memory);\\n}\\n","keccak256":"0x75b829ff2f26c14355d1cba20e16fe7b29ca58eb5fef665ede48bc0f9c6c74b9","license":"MIT"},"@openzeppelin/contracts/utils/Address.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.0) (utils/Address.sol)\\n\\npragma solidity ^0.8.1;\\n\\n/**\\n * @dev Collection of functions related to the address type\\n */\\nlibrary Address {\\n    /**\\n     * @dev Returns true if `account` is a contract.\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * It is unsafe to assume that an address for which this function returns\\n     * false is an externally-owned account (EOA) and not a contract.\\n     *\\n     * Among others, `isContract` will return false for the following\\n     * types of addresses:\\n     *\\n     *  - an externally-owned account\\n     *  - a contract in construction\\n     *  - an address where a contract will be created\\n     *  - an address where a contract lived, but was destroyed\\n     *\\n     * Furthermore, `isContract` will also return true if the target contract within\\n     * the same transaction is already scheduled for destruction by `SELFDESTRUCT`,\\n     * which only has an effect at the end of a transaction.\\n     * ====\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * You shouldn\'t rely on `isContract` to protect against flash loan attacks!\\n     *\\n     * Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets\\n     * like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract\\n     * constructor.\\n     * ====\\n     */\\n    function isContract(address account) internal view returns (bool) {\\n        // This method relies on extcodesize/address.code.length, which returns 0\\n        // for contracts in construction, since the code is only stored at the end\\n        // of the constructor execution.\\n\\n        return account.code.length > 0;\\n    }\\n\\n    /**\\n     * @dev Replacement for Solidity\'s `transfer`: sends `amount` wei to\\n     * `recipient`, forwarding all available gas and reverting on errors.\\n     *\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\n     * imposed by `transfer`, making them unable to receive funds via\\n     * `transfer`. {sendValue} removes this limitation.\\n     *\\n     * https://consensys.net/diligence/blog/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\n     *\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\n     * taken to not create reentrancy vulnerabilities. Consider using\\n     * {ReentrancyGuard} or the\\n     * https://solidity.readthedocs.io/en/v0.8.0/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\n     */\\n    function sendValue(address payable recipient, uint256 amount) internal {\\n        require(address(this).balance >= amount, \\"Address: insufficient balance\\");\\n\\n        (bool success, ) = recipient.call{value: amount}(\\"\\");\\n        require(success, \\"Address: unable to send value, recipient may have reverted\\");\\n    }\\n\\n    /**\\n     * @dev Performs a Solidity function call using a low level `call`. A\\n     * plain `call` is an unsafe replacement for a function call: use this\\n     * function instead.\\n     *\\n     * If `target` reverts with a revert reason, it is bubbled up by this\\n     * function (like regular Solidity function calls).\\n     *\\n     * Returns the raw returned data. To convert to the expected return value,\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\n     *\\n     * Requirements:\\n     *\\n     * - `target` must be a contract.\\n     * - calling `target` with `data` must not revert.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0, \\"Address: low-level call failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\\n     * `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but also transferring `value` wei to `target`.\\n     *\\n     * Requirements:\\n     *\\n     * - the calling contract must have an ETH balance of at least `value`.\\n     * - the called Solidity function must be `payable`.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(address target, bytes memory data, uint256 value) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, value, \\"Address: low-level call with value failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        require(address(this).balance >= value, \\"Address: insufficient balance for call\\");\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\n        return verifyCallResultFromTarget(target, success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\n        return functionStaticCall(target, data, \\"Address: low-level static call failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal view returns (bytes memory) {\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\n        return verifyCallResultFromTarget(target, success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionDelegateCall(target, data, \\"Address: low-level delegate call failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\n        return verifyCallResultFromTarget(target, success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Tool to verify that a low level call to smart-contract was successful, and revert (either by bubbling\\n     * the revert reason or using the provided one) in case of unsuccessful call or if target was not a contract.\\n     *\\n     * _Available since v4.8._\\n     */\\n    function verifyCallResultFromTarget(\\n        address target,\\n        bool success,\\n        bytes memory returndata,\\n        string memory errorMessage\\n    ) internal view returns (bytes memory) {\\n        if (success) {\\n            if (returndata.length == 0) {\\n                // only check isContract if the call was successful and the return data is empty\\n                // otherwise we already know that it was a contract\\n                require(isContract(target), \\"Address: call to non-contract\\");\\n            }\\n            return returndata;\\n        } else {\\n            _revert(returndata, errorMessage);\\n        }\\n    }\\n\\n    /**\\n     * @dev Tool to verify that a low level call was successful, and revert if it wasn\'t, either by bubbling the\\n     * revert reason or using the provided one.\\n     *\\n     * _Available since v4.3._\\n     */\\n    function verifyCallResult(\\n        bool success,\\n        bytes memory returndata,\\n        string memory errorMessage\\n    ) internal pure returns (bytes memory) {\\n        if (success) {\\n            return returndata;\\n        } else {\\n            _revert(returndata, errorMessage);\\n        }\\n    }\\n\\n    function _revert(bytes memory returndata, string memory errorMessage) private pure {\\n        // Look for revert reason and bubble it up if present\\n        if (returndata.length > 0) {\\n            // The easiest way to bubble the revert reason is using memory via assembly\\n            /// @solidity memory-safe-assembly\\n            assembly {\\n                let returndata_size := mload(returndata)\\n                revert(add(32, returndata), returndata_size)\\n            }\\n        } else {\\n            revert(errorMessage);\\n        }\\n    }\\n}\\n","keccak256":"0x006dd67219697fe68d7fbfdea512e7c4cb64a43565ed86171d67e844982da6fa","license":"MIT"},"@openzeppelin/contracts/utils/Context.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Provides information about the current execution context, including the\\n * sender of the transaction and its data. While these are generally available\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\n * manner, since when dealing with meta-transactions the account sending and\\n * paying for execution may not be the actual sender (as far as an application\\n * is concerned).\\n *\\n * This contract is only required for intermediate, library-like contracts.\\n */\\nabstract contract Context {\\n    function _msgSender() internal view virtual returns (address) {\\n        return msg.sender;\\n    }\\n\\n    function _msgData() internal view virtual returns (bytes calldata) {\\n        return msg.data;\\n    }\\n}\\n","keccak256":"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7","license":"MIT"},"@openzeppelin/contracts/utils/Strings.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.0) (utils/Strings.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"./math/Math.sol\\";\\nimport \\"./math/SignedMath.sol\\";\\n\\n/**\\n * @dev String operations.\\n */\\nlibrary Strings {\\n    bytes16 private constant _SYMBOLS = \\"0123456789abcdef\\";\\n    uint8 private constant _ADDRESS_LENGTH = 20;\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` decimal representation.\\n     */\\n    function toString(uint256 value) internal pure returns (string memory) {\\n        unchecked {\\n            uint256 length = Math.log10(value) + 1;\\n            string memory buffer = new string(length);\\n            uint256 ptr;\\n            /// @solidity memory-safe-assembly\\n            assembly {\\n                ptr := add(buffer, add(32, length))\\n            }\\n            while (true) {\\n                ptr--;\\n                /// @solidity memory-safe-assembly\\n                assembly {\\n                    mstore8(ptr, byte(mod(value, 10), _SYMBOLS))\\n                }\\n                value /= 10;\\n                if (value == 0) break;\\n            }\\n            return buffer;\\n        }\\n    }\\n\\n    /**\\n     * @dev Converts a `int256` to its ASCII `string` decimal representation.\\n     */\\n    function toString(int256 value) internal pure returns (string memory) {\\n        return string(abi.encodePacked(value < 0 ? \\"-\\" : \\"\\", toString(SignedMath.abs(value))));\\n    }\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.\\n     */\\n    function toHexString(uint256 value) internal pure returns (string memory) {\\n        unchecked {\\n            return toHexString(value, Math.log256(value) + 1);\\n        }\\n    }\\n\\n    /**\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\\n     */\\n    function toHexString(uint256 value, uint256 length) internal pure returns (string memory) {\\n        bytes memory buffer = new bytes(2 * length + 2);\\n        buffer[0] = \\"0\\";\\n        buffer[1] = \\"x\\";\\n        for (uint256 i = 2 * length + 1; i > 1; --i) {\\n            buffer[i] = _SYMBOLS[value & 0xf];\\n            value >>= 4;\\n        }\\n        require(value == 0, \\"Strings: hex length insufficient\\");\\n        return string(buffer);\\n    }\\n\\n    /**\\n     * @dev Converts an `address` with fixed length of 20 bytes to its not checksummed ASCII `string` hexadecimal representation.\\n     */\\n    function toHexString(address addr) internal pure returns (string memory) {\\n        return toHexString(uint256(uint160(addr)), _ADDRESS_LENGTH);\\n    }\\n\\n    /**\\n     * @dev Returns true if the two strings are equal.\\n     */\\n    function equal(string memory a, string memory b) internal pure returns (bool) {\\n        return keccak256(bytes(a)) == keccak256(bytes(b));\\n    }\\n}\\n","keccak256":"0x3088eb2868e8d13d89d16670b5f8612c4ab9ff8956272837d8e90106c59c14a0","license":"MIT"},"@openzeppelin/contracts/utils/introspection/ERC165.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"./IERC165.sol\\";\\n\\n/**\\n * @dev Implementation of the {IERC165} interface.\\n *\\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\\n * for the additional interface id that will be supported. For example:\\n *\\n * ```solidity\\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\\n * }\\n * ```\\n *\\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\\n */\\nabstract contract ERC165 is IERC165 {\\n    /**\\n     * @dev See {IERC165-supportsInterface}.\\n     */\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n        return interfaceId == type(IERC165).interfaceId;\\n    }\\n}\\n","keccak256":"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b","license":"MIT"},"@openzeppelin/contracts/utils/introspection/IERC165.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC165 standard, as defined in the\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\n *\\n * Implementers can declare support of contract interfaces, which can then be\\n * queried by others ({ERC165Checker}).\\n *\\n * For an implementation, see {ERC165}.\\n */\\ninterface IERC165 {\\n    /**\\n     * @dev Returns true if this contract implements the interface defined by\\n     * `interfaceId`. See the corresponding\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\n     * to learn more about how these ids are created.\\n     *\\n     * This function call must use less than 30 000 gas.\\n     */\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\n}\\n","keccak256":"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1","license":"MIT"},"@openzeppelin/contracts/utils/math/Math.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.9.0) (utils/math/Math.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Standard math utilities missing in the Solidity language.\\n */\\nlibrary Math {\\n    enum Rounding {\\n        Down, // Toward negative infinity\\n        Up, // Toward infinity\\n        Zero // Toward zero\\n    }\\n\\n    /**\\n     * @dev Returns the largest of two numbers.\\n     */\\n    function max(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a > b ? a : b;\\n    }\\n\\n    /**\\n     * @dev Returns the smallest of two numbers.\\n     */\\n    function min(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a < b ? a : b;\\n    }\\n\\n    /**\\n     * @dev Returns the average of two numbers. The result is rounded towards\\n     * zero.\\n     */\\n    function average(uint256 a, uint256 b) internal pure returns (uint256) {\\n        // (a + b) / 2 can overflow.\\n        return (a & b) + (a ^ b) / 2;\\n    }\\n\\n    /**\\n     * @dev Returns the ceiling of the division of two numbers.\\n     *\\n     * This differs from standard division with `/` in that it rounds up instead\\n     * of rounding down.\\n     */\\n    function ceilDiv(uint256 a, uint256 b) internal pure returns (uint256) {\\n        // (a + b - 1) / b can overflow on addition, so we distribute.\\n        return a == 0 ? 0 : (a - 1) / b + 1;\\n    }\\n\\n    /**\\n     * @notice Calculates floor(x * y / denominator) with full precision. Throws if result overflows a uint256 or denominator == 0\\n     * @dev Original credit to Remco Bloemen under MIT license (https://xn--2-umb.com/21/muldiv)\\n     * with further edits by Uniswap Labs also under MIT license.\\n     */\\n    function mulDiv(uint256 x, uint256 y, uint256 denominator) internal pure returns (uint256 result) {\\n        unchecked {\\n            // 512-bit multiply [prod1 prod0] = x * y. Compute the product mod 2^256 and mod 2^256 - 1, then use\\n            // use the Chinese Remainder Theorem to reconstruct the 512 bit result. The result is stored in two 256\\n            // variables such that product = prod1 * 2^256 + prod0.\\n            uint256 prod0; // Least significant 256 bits of the product\\n            uint256 prod1; // Most significant 256 bits of the product\\n            assembly {\\n                let mm := mulmod(x, y, not(0))\\n                prod0 := mul(x, y)\\n                prod1 := sub(sub(mm, prod0), lt(mm, prod0))\\n            }\\n\\n            // Handle non-overflow cases, 256 by 256 division.\\n            if (prod1 == 0) {\\n                // Solidity will revert if denominator == 0, unlike the div opcode on its own.\\n                // The surrounding unchecked block does not change this fact.\\n                // See https://docs.soliditylang.org/en/latest/control-structures.html#checked-or-unchecked-arithmetic.\\n                return prod0 / denominator;\\n            }\\n\\n            // Make sure the result is less than 2^256. Also prevents denominator == 0.\\n            require(denominator > prod1, \\"Math: mulDiv overflow\\");\\n\\n            ///////////////////////////////////////////////\\n            // 512 by 256 division.\\n            ///////////////////////////////////////////////\\n\\n            // Make division exact by subtracting the remainder from [prod1 prod0].\\n            uint256 remainder;\\n            assembly {\\n                // Compute remainder using mulmod.\\n                remainder := mulmod(x, y, denominator)\\n\\n                // Subtract 256 bit number from 512 bit number.\\n                prod1 := sub(prod1, gt(remainder, prod0))\\n                prod0 := sub(prod0, remainder)\\n            }\\n\\n            // Factor powers of two out of denominator and compute largest power of two divisor of denominator. Always >= 1.\\n            // See https://cs.stackexchange.com/q/138556/92363.\\n\\n            // Does not overflow because the denominator cannot be zero at this stage in the function.\\n            uint256 twos = denominator & (~denominator + 1);\\n            assembly {\\n                // Divide denominator by twos.\\n                denominator := div(denominator, twos)\\n\\n                // Divide [prod1 prod0] by twos.\\n                prod0 := div(prod0, twos)\\n\\n                // Flip twos such that it is 2^256 / twos. If twos is zero, then it becomes one.\\n                twos := add(div(sub(0, twos), twos), 1)\\n            }\\n\\n            // Shift in bits from prod1 into prod0.\\n            prod0 |= prod1 * twos;\\n\\n            // Invert denominator mod 2^256. Now that denominator is an odd number, it has an inverse modulo 2^256 such\\n            // that denominator * inv = 1 mod 2^256. Compute the inverse by starting with a seed that is correct for\\n            // four bits. That is, denominator * inv = 1 mod 2^4.\\n            uint256 inverse = (3 * denominator) ^ 2;\\n\\n            // Use the Newton-Raphson iteration to improve the precision. Thanks to Hensel\'s lifting lemma, this also works\\n            // in modular arithmetic, doubling the correct bits in each step.\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^8\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^16\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^32\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^64\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^128\\n            inverse *= 2 - denominator * inverse; // inverse mod 2^256\\n\\n            // Because the division is now exact we can divide by multiplying with the modular inverse of denominator.\\n            // This will give us the correct result modulo 2^256. Since the preconditions guarantee that the outcome is\\n            // less than 2^256, this is the final result. We don\'t need to compute the high bits of the result and prod1\\n            // is no longer required.\\n            result = prod0 * inverse;\\n            return result;\\n        }\\n    }\\n\\n    /**\\n     * @notice Calculates x * y / denominator with full precision, following the selected rounding direction.\\n     */\\n    function mulDiv(uint256 x, uint256 y, uint256 denominator, Rounding rounding) internal pure returns (uint256) {\\n        uint256 result = mulDiv(x, y, denominator);\\n        if (rounding == Rounding.Up && mulmod(x, y, denominator) > 0) {\\n            result += 1;\\n        }\\n        return result;\\n    }\\n\\n    /**\\n     * @dev Returns the square root of a number. If the number is not a perfect square, the value is rounded down.\\n     *\\n     * Inspired by Henry S. Warren, Jr.\'s \\"Hacker\'s Delight\\" (Chapter 11).\\n     */\\n    function sqrt(uint256 a) internal pure returns (uint256) {\\n        if (a == 0) {\\n            return 0;\\n        }\\n\\n        // For our first guess, we get the biggest power of 2 which is smaller than the square root of the target.\\n        //\\n        // We know that the \\"msb\\" (most significant bit) of our target number `a` is a power of 2 such that we have\\n        // `msb(a) <= a < 2*msb(a)`. This value can be written `msb(a)=2**k` with `k=log2(a)`.\\n        //\\n        // This can be rewritten `2**log2(a) <= a < 2**(log2(a) + 1)`\\n        // \\u2192 `sqrt(2**k) <= sqrt(a) < sqrt(2**(k+1))`\\n        // \\u2192 `2**(k/2) <= sqrt(a) < 2**((k+1)/2) <= 2**(k/2 + 1)`\\n        //\\n        // Consequently, `2**(log2(a) / 2)` is a good first approximation of `sqrt(a)` with at least 1 correct bit.\\n        uint256 result = 1 << (log2(a) >> 1);\\n\\n        // At this point `result` is an estimation with one bit of precision. We know the true value is a uint128,\\n        // since it is the square root of a uint256. Newton\'s method converges quadratically (precision doubles at\\n        // every iteration). We thus need at most 7 iteration to turn our partial result with one bit of precision\\n        // into the expected uint128 result.\\n        unchecked {\\n            result = (result + a / result) >> 1;\\n            result = (result + a / result) >> 1;\\n            result = (result + a / result) >> 1;\\n            result = (result + a / result) >> 1;\\n            result = (result + a / result) >> 1;\\n            result = (result + a / result) >> 1;\\n            result = (result + a / result) >> 1;\\n            return min(result, a / result);\\n        }\\n    }\\n\\n    /**\\n     * @notice Calculates sqrt(a), following the selected rounding direction.\\n     */\\n    function sqrt(uint256 a, Rounding rounding) internal pure returns (uint256) {\\n        unchecked {\\n            uint256 result = sqrt(a);\\n            return result + (rounding == Rounding.Up && result * result < a ? 1 : 0);\\n        }\\n    }\\n\\n    /**\\n     * @dev Return the log in base 2, rounded down, of a positive value.\\n     * Returns 0 if given 0.\\n     */\\n    function log2(uint256 value) internal pure returns (uint256) {\\n        uint256 result = 0;\\n        unchecked {\\n            if (value >> 128 > 0) {\\n                value >>= 128;\\n                result += 128;\\n            }\\n            if (value >> 64 > 0) {\\n                value >>= 64;\\n                result += 64;\\n            }\\n            if (value >> 32 > 0) {\\n                value >>= 32;\\n                result += 32;\\n            }\\n            if (value >> 16 > 0) {\\n                value >>= 16;\\n                result += 16;\\n            }\\n            if (value >> 8 > 0) {\\n                value >>= 8;\\n                result += 8;\\n            }\\n            if (value >> 4 > 0) {\\n                value >>= 4;\\n                result += 4;\\n            }\\n            if (value >> 2 > 0) {\\n                value >>= 2;\\n                result += 2;\\n            }\\n            if (value >> 1 > 0) {\\n                result += 1;\\n            }\\n        }\\n        return result;\\n    }\\n\\n    /**\\n     * @dev Return the log in base 2, following the selected rounding direction, of a positive value.\\n     * Returns 0 if given 0.\\n     */\\n    function log2(uint256 value, Rounding rounding) internal pure returns (uint256) {\\n        unchecked {\\n            uint256 result = log2(value);\\n            return result + (rounding == Rounding.Up && 1 << result < value ? 1 : 0);\\n        }\\n    }\\n\\n    /**\\n     * @dev Return the log in base 10, rounded down, of a positive value.\\n     * Returns 0 if given 0.\\n     */\\n    function log10(uint256 value) internal pure returns (uint256) {\\n        uint256 result = 0;\\n        unchecked {\\n            if (value >= 10 ** 64) {\\n                value /= 10 ** 64;\\n                result += 64;\\n            }\\n            if (value >= 10 ** 32) {\\n                value /= 10 ** 32;\\n                result += 32;\\n            }\\n            if (value >= 10 ** 16) {\\n                value /= 10 ** 16;\\n                result += 16;\\n            }\\n            if (value >= 10 ** 8) {\\n                value /= 10 ** 8;\\n                result += 8;\\n            }\\n            if (value >= 10 ** 4) {\\n                value /= 10 ** 4;\\n                result += 4;\\n            }\\n            if (value >= 10 ** 2) {\\n                value /= 10 ** 2;\\n                result += 2;\\n            }\\n            if (value >= 10 ** 1) {\\n                result += 1;\\n            }\\n        }\\n        return result;\\n    }\\n\\n    /**\\n     * @dev Return the log in base 10, following the selected rounding direction, of a positive value.\\n     * Returns 0 if given 0.\\n     */\\n    function log10(uint256 value, Rounding rounding) internal pure returns (uint256) {\\n        unchecked {\\n            uint256 result = log10(value);\\n            return result + (rounding == Rounding.Up && 10 ** result < value ? 1 : 0);\\n        }\\n    }\\n\\n    /**\\n     * @dev Return the log in base 256, rounded down, of a positive value.\\n     * Returns 0 if given 0.\\n     *\\n     * Adding one to the result gives the number of pairs of hex symbols needed to represent `value` as a hex string.\\n     */\\n    function log256(uint256 value) internal pure returns (uint256) {\\n        uint256 result = 0;\\n        unchecked {\\n            if (value >> 128 > 0) {\\n                value >>= 128;\\n                result += 16;\\n            }\\n            if (value >> 64 > 0) {\\n                value >>= 64;\\n                result += 8;\\n            }\\n            if (value >> 32 > 0) {\\n                value >>= 32;\\n                result += 4;\\n            }\\n            if (value >> 16 > 0) {\\n                value >>= 16;\\n                result += 2;\\n            }\\n            if (value >> 8 > 0) {\\n                result += 1;\\n            }\\n        }\\n        return result;\\n    }\\n\\n    /**\\n     * @dev Return the log in base 256, following the selected rounding direction, of a positive value.\\n     * Returns 0 if given 0.\\n     */\\n    function log256(uint256 value, Rounding rounding) internal pure returns (uint256) {\\n        unchecked {\\n            uint256 result = log256(value);\\n            return result + (rounding == Rounding.Up && 1 << (result << 3) < value ? 1 : 0);\\n        }\\n    }\\n}\\n","keccak256":"0xe4455ac1eb7fc497bb7402579e7b4d64d928b846fce7d2b6fde06d366f21c2b3","license":"MIT"},"@openzeppelin/contracts/utils/math/SignedMath.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.8.0) (utils/math/SignedMath.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Standard signed math utilities missing in the Solidity language.\\n */\\nlibrary SignedMath {\\n    /**\\n     * @dev Returns the largest of two signed numbers.\\n     */\\n    function max(int256 a, int256 b) internal pure returns (int256) {\\n        return a > b ? a : b;\\n    }\\n\\n    /**\\n     * @dev Returns the smallest of two signed numbers.\\n     */\\n    function min(int256 a, int256 b) internal pure returns (int256) {\\n        return a < b ? a : b;\\n    }\\n\\n    /**\\n     * @dev Returns the average of two signed numbers without overflow.\\n     * The result is rounded towards zero.\\n     */\\n    function average(int256 a, int256 b) internal pure returns (int256) {\\n        // Formula from the book \\"Hacker\'s Delight\\"\\n        int256 x = (a & b) + ((a ^ b) >> 1);\\n        return x + (int256(uint256(x) >> 255) & (a ^ b));\\n    }\\n\\n    /**\\n     * @dev Returns the absolute unsigned value of a signed value.\\n     */\\n    function abs(int256 n) internal pure returns (uint256) {\\n        unchecked {\\n            // must be unchecked in order to support `n = type(int256).min`\\n            return uint256(n >= 0 ? n : -n);\\n        }\\n    }\\n}\\n","keccak256":"0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc","license":"MIT"},"contracts/fortuneCookies.sol":{"content":"// SPDX-License-Identifier: MIT\\r\\n// Compatible with OpenZeppelin Contracts ^5.0.0\\r\\n\\r\\nimport \\"@openzeppelin/contracts/token/ERC721/ERC721.sol\\";\\r\\nimport \\"@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol\\";\\r\\nimport \\"@openzeppelin/contracts/access/Ownable.sol\\";\\r\\n\\r\\npragma solidity ^0.8.20;\\r\\n\\r\\ncontract fortuneCookies is ERC721, ERC721URIStorage, Ownable {\\r\\n    uint256 private _nextTokenId;\\r\\n\\r\\n    constructor()\\r\\n        ERC721(\\"Fortune Cookie\\", \\"FCK\\")\\r\\n        Ownable()\\r\\n    {}\\r\\n\\r\\n    function safeMint(address to, string memory uri) public {\\r\\n        uint256 tokenId = _nextTokenId++;\\r\\n        _safeMint(to, tokenId);\\r\\n        _setTokenURI(tokenId, uri);\\r\\n    }\\r\\n\\r\\n    // Sobrescribir _burn\\r\\n    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {\\r\\n        super._burn(tokenId);\\r\\n    }\\r\\n\\r\\n    // Sobrescribir tokenURI\\r\\n    function tokenURI(uint256 tokenId)\\r\\n        public\\r\\n        view\\r\\n        override(ERC721, ERC721URIStorage)\\r\\n        returns (string memory)\\r\\n    {\\r\\n        return super.tokenURI(tokenId);\\r\\n    }\\r\\n\\r\\n    // Sobrescribir supportsInterface\\r\\n    function supportsInterface(bytes4 interfaceId)\\r\\n        public\\r\\n        view\\r\\n        override(ERC721, ERC721URIStorage)\\r\\n        returns (bool)\\r\\n    {\\r\\n        return super.supportsInterface(interfaceId);\\r\\n    }\\r\\n}\\r\\n","keccak256":"0x34d68314dd3e9fc4a5e4f987e8fcf4d6fee2823c8f08358da3c11dca37606fc3","license":"MIT"}},"version":1}',
        bytecode:
          "0x60806040523480156200001157600080fd5b506040518060400160405280600e81526020016d466f7274756e6520436f6f6b696560901b8152506040518060400160405280600381526020016246434b60e81b815250816000908162000066919062000193565b50600162000075828262000193565b505050620000926200008c6200009860201b60201c565b6200009c565b6200025f565b3390565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200011957607f821691505b6020821081036200013a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200018e57600081815260208120601f850160051c81016020861015620001695750805b601f850160051c820191505b818110156200018a5782815560010162000175565b5050505b505050565b81516001600160401b03811115620001af57620001af620000ee565b620001c781620001c0845462000104565b8462000140565b602080601f831160018114620001ff5760008415620001e65750858301515b600019600386901b1c1916600185901b1785556200018a565b600085815260208120601f198616915b8281101562000230578886015182559484019460019091019084016200020f565b50858210156200024f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b611866806200026f6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063715018a6116100a2578063b88d4fde11610071578063b88d4fde1461021b578063c87b56dd1461022e578063d204c45e14610241578063e985e9c514610254578063f2fde38b1461029057600080fd5b8063715018a6146101e75780638da5cb5b146101ef57806395d89b4114610200578063a22cb4651461020857600080fd5b806323b872dd116100de57806323b872dd1461018d57806342842e0e146101a05780636352211e146101b357806370a08231146101c657600080fd5b806301ffc9a71461011057806306fdde0314610138578063081812fc1461014d578063095ea7b314610178575b600080fd5b61012361011e366004611245565b6102a3565b60405190151581526020015b60405180910390f35b6101406102b4565b60405161012f91906112b2565b61016061015b3660046112c5565b610346565b6040516001600160a01b03909116815260200161012f565b61018b6101863660046112fa565b61036d565b005b61018b61019b366004611324565b610487565b61018b6101ae366004611324565b6104b8565b6101606101c13660046112c5565b6104d3565b6101d96101d4366004611360565b610533565b60405190815260200161012f565b61018b6105b9565b6007546001600160a01b0316610160565b6101406105cd565b61018b61021636600461137b565b6105dc565b61018b610229366004611443565b6105eb565b61014061023c3660046112c5565b610623565b61018b61024f3660046114bf565b61062e565b610123610262366004611521565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b61018b61029e366004611360565b610659565b60006102ae826106d2565b92915050565b6060600080546102c390611554565b80601f01602080910402602001604051908101604052809291908181526020018280546102ef90611554565b801561033c5780601f106103115761010080835404028352916020019161033c565b820191906000526020600020905b81548152906001019060200180831161031f57829003601f168201915b5050505050905090565b6000610351826106f7565b506000908152600460205260409020546001600160a01b031690565b6000610378826104d3565b9050806001600160a01b0316836001600160a01b0316036103ea5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061040657506104068133610262565b6104785760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c00000060648201526084016103e1565b6104828383610756565b505050565b61049133826107c4565b6104ad5760405162461bcd60e51b81526004016103e19061158e565b610482838383610843565b610482838383604051806020016040528060008152506105eb565b6000818152600260205260408120546001600160a01b0316806102ae5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016103e1565b60006001600160a01b03821661059d5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b60648201526084016103e1565b506001600160a01b031660009081526003602052604090205490565b6105c16109a7565b6105cb6000610a01565b565b6060600180546102c390611554565b6105e7338383610a53565b5050565b6105f533836107c4565b6106115760405162461bcd60e51b81526004016103e19061158e565b61061d84848484610b21565b50505050565b60606102ae82610b54565b600880546000918261063f836115db565b91905055905061064f8382610c5c565b6104828183610c76565b6106616109a7565b6001600160a01b0381166106c65760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103e1565b6106cf81610a01565b50565b60006001600160e01b03198216632483248360e11b14806102ae57506102ae82610d41565b6000818152600260205260409020546001600160a01b03166106cf5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016103e1565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061078b826104d3565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000806107d0836104d3565b9050806001600160a01b0316846001600160a01b0316148061081757506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b8061083b5750836001600160a01b031661083084610346565b6001600160a01b0316145b949350505050565b826001600160a01b0316610856826104d3565b6001600160a01b03161461087c5760405162461bcd60e51b81526004016103e190611602565b6001600160a01b0382166108de5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016103e1565b826001600160a01b03166108f1826104d3565b6001600160a01b0316146109175760405162461bcd60e51b81526004016103e190611602565b600081815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6007546001600160a01b031633146105cb5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103e1565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b031603610ab45760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016103e1565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610b2c848484610843565b610b3884848484610d91565b61061d5760405162461bcd60e51b81526004016103e190611647565b6060610b5f826106f7565b60008281526006602052604081208054610b7890611554565b80601f0160208091040260200160405190810160405280929190818152602001828054610ba490611554565b8015610bf15780601f10610bc657610100808354040283529160200191610bf1565b820191906000526020600020905b815481529060010190602001808311610bd457829003601f168201915b505050505090506000610c0f60408051602081019091526000815290565b90508051600003610c21575092915050565b815115610c53578082604051602001610c3b929190611699565b60405160208183030381529060405292505050919050565b61083b84610e92565b6105e7828260405180602001604052806000815250610f06565b6000828152600260205260409020546001600160a01b0316610cf15760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b60648201526084016103e1565b6000828152600660205260409020610d098282611716565b506040518281527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce79060200160405180910390a15050565b60006001600160e01b031982166380ac58cd60e01b1480610d7257506001600160e01b03198216635b5e139f60e01b145b806102ae57506301ffc9a760e01b6001600160e01b03198316146102ae565b60006001600160a01b0384163b15610e8757604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610dd59033908990889088906004016117d6565b6020604051808303816000875af1925050508015610e10575060408051601f3d908101601f19168201909252610e0d91810190611813565b60015b610e6d573d808015610e3e576040519150601f19603f3d011682016040523d82523d6000602084013e610e43565b606091505b508051600003610e655760405162461bcd60e51b81526004016103e190611647565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061083b565b506001949350505050565b6060610e9d826106f7565b6000610eb460408051602081019091526000815290565b90506000815111610ed45760405180602001604052806000815250610eff565b80610ede84610f39565b604051602001610eef929190611699565b6040516020818303038152906040525b9392505050565b610f108383610fcc565b610f1d6000848484610d91565b6104825760405162461bcd60e51b81526004016103e190611647565b60606000610f4683611157565b600101905060008167ffffffffffffffff811115610f6657610f666113b7565b6040519080825280601f01601f191660200182016040528015610f90576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610f9a57509392505050565b6001600160a01b0382166110225760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016103e1565b6000818152600260205260409020546001600160a01b0316156110875760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016103e1565b6000818152600260205260409020546001600160a01b0316156110ec5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016103e1565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106111965772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef810000000083106111c2576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106111e057662386f26fc10000830492506010015b6305f5e10083106111f8576305f5e100830492506008015b612710831061120c57612710830492506004015b6064831061121e576064830492506002015b600a83106102ae5760010192915050565b6001600160e01b0319811681146106cf57600080fd5b60006020828403121561125757600080fd5b8135610eff8161122f565b60005b8381101561127d578181015183820152602001611265565b50506000910152565b6000815180845261129e816020860160208601611262565b601f01601f19169290920160200192915050565b602081526000610eff6020830184611286565b6000602082840312156112d757600080fd5b5035919050565b80356001600160a01b03811681146112f557600080fd5b919050565b6000806040838503121561130d57600080fd5b611316836112de565b946020939093013593505050565b60008060006060848603121561133957600080fd5b611342846112de565b9250611350602085016112de565b9150604084013590509250925092565b60006020828403121561137257600080fd5b610eff826112de565b6000806040838503121561138e57600080fd5b611397836112de565b9150602083013580151581146113ac57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff808411156113e8576113e86113b7565b604051601f8501601f19908116603f01168101908282118183101715611410576114106113b7565b8160405280935085815286868601111561142957600080fd5b858560208301376000602087830101525050509392505050565b6000806000806080858703121561145957600080fd5b611462856112de565b9350611470602086016112de565b925060408501359150606085013567ffffffffffffffff81111561149357600080fd5b8501601f810187136114a457600080fd5b6114b3878235602084016113cd565b91505092959194509250565b600080604083850312156114d257600080fd5b6114db836112de565b9150602083013567ffffffffffffffff8111156114f757600080fd5b8301601f8101851361150857600080fd5b611517858235602084016113cd565b9150509250929050565b6000806040838503121561153457600080fd5b61153d836112de565b915061154b602084016112de565b90509250929050565b600181811c9082168061156857607f821691505b60208210810361158857634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b6000600182016115fb57634e487b7160e01b600052601160045260246000fd5b5060010190565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b600083516116ab818460208801611262565b8351908301906116bf818360208801611262565b01949350505050565b601f82111561048257600081815260208120601f850160051c810160208610156116ef5750805b601f850160051c820191505b8181101561170e578281556001016116fb565b505050505050565b815167ffffffffffffffff811115611730576117306113b7565b6117448161173e8454611554565b846116c8565b602080601f83116001811461177957600084156117615750858301515b600019600386901b1c1916600185901b17855561170e565b600085815260208120601f198616915b828110156117a857888601518255948401946001909101908401611789565b50858210156117c65787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061180990830184611286565b9695505050505050565b60006020828403121561182557600080fd5b8151610eff8161122f56fea2646970667358221220e704e95efccb4771648b6ad2ba12e27d89c8ed851c22569554ecb67f782d269c64736f6c63430008140033",
        deployedBytecode:
          "0x608060405234801561001057600080fd5b506004361061010b5760003560e01c8063715018a6116100a2578063b88d4fde11610071578063b88d4fde1461021b578063c87b56dd1461022e578063d204c45e14610241578063e985e9c514610254578063f2fde38b1461029057600080fd5b8063715018a6146101e75780638da5cb5b146101ef57806395d89b4114610200578063a22cb4651461020857600080fd5b806323b872dd116100de57806323b872dd1461018d57806342842e0e146101a05780636352211e146101b357806370a08231146101c657600080fd5b806301ffc9a71461011057806306fdde0314610138578063081812fc1461014d578063095ea7b314610178575b600080fd5b61012361011e366004611245565b6102a3565b60405190151581526020015b60405180910390f35b6101406102b4565b60405161012f91906112b2565b61016061015b3660046112c5565b610346565b6040516001600160a01b03909116815260200161012f565b61018b6101863660046112fa565b61036d565b005b61018b61019b366004611324565b610487565b61018b6101ae366004611324565b6104b8565b6101606101c13660046112c5565b6104d3565b6101d96101d4366004611360565b610533565b60405190815260200161012f565b61018b6105b9565b6007546001600160a01b0316610160565b6101406105cd565b61018b61021636600461137b565b6105dc565b61018b610229366004611443565b6105eb565b61014061023c3660046112c5565b610623565b61018b61024f3660046114bf565b61062e565b610123610262366004611521565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b61018b61029e366004611360565b610659565b60006102ae826106d2565b92915050565b6060600080546102c390611554565b80601f01602080910402602001604051908101604052809291908181526020018280546102ef90611554565b801561033c5780601f106103115761010080835404028352916020019161033c565b820191906000526020600020905b81548152906001019060200180831161031f57829003601f168201915b5050505050905090565b6000610351826106f7565b506000908152600460205260409020546001600160a01b031690565b6000610378826104d3565b9050806001600160a01b0316836001600160a01b0316036103ea5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061040657506104068133610262565b6104785760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c00000060648201526084016103e1565b6104828383610756565b505050565b61049133826107c4565b6104ad5760405162461bcd60e51b81526004016103e19061158e565b610482838383610843565b610482838383604051806020016040528060008152506105eb565b6000818152600260205260408120546001600160a01b0316806102ae5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016103e1565b60006001600160a01b03821661059d5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b60648201526084016103e1565b506001600160a01b031660009081526003602052604090205490565b6105c16109a7565b6105cb6000610a01565b565b6060600180546102c390611554565b6105e7338383610a53565b5050565b6105f533836107c4565b6106115760405162461bcd60e51b81526004016103e19061158e565b61061d84848484610b21565b50505050565b60606102ae82610b54565b600880546000918261063f836115db565b91905055905061064f8382610c5c565b6104828183610c76565b6106616109a7565b6001600160a01b0381166106c65760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103e1565b6106cf81610a01565b50565b60006001600160e01b03198216632483248360e11b14806102ae57506102ae82610d41565b6000818152600260205260409020546001600160a01b03166106cf5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016103e1565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061078b826104d3565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000806107d0836104d3565b9050806001600160a01b0316846001600160a01b0316148061081757506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b8061083b5750836001600160a01b031661083084610346565b6001600160a01b0316145b949350505050565b826001600160a01b0316610856826104d3565b6001600160a01b03161461087c5760405162461bcd60e51b81526004016103e190611602565b6001600160a01b0382166108de5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016103e1565b826001600160a01b03166108f1826104d3565b6001600160a01b0316146109175760405162461bcd60e51b81526004016103e190611602565b600081815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6007546001600160a01b031633146105cb5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103e1565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b031603610ab45760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016103e1565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610b2c848484610843565b610b3884848484610d91565b61061d5760405162461bcd60e51b81526004016103e190611647565b6060610b5f826106f7565b60008281526006602052604081208054610b7890611554565b80601f0160208091040260200160405190810160405280929190818152602001828054610ba490611554565b8015610bf15780601f10610bc657610100808354040283529160200191610bf1565b820191906000526020600020905b815481529060010190602001808311610bd457829003601f168201915b505050505090506000610c0f60408051602081019091526000815290565b90508051600003610c21575092915050565b815115610c53578082604051602001610c3b929190611699565b60405160208183030381529060405292505050919050565b61083b84610e92565b6105e7828260405180602001604052806000815250610f06565b6000828152600260205260409020546001600160a01b0316610cf15760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b60648201526084016103e1565b6000828152600660205260409020610d098282611716565b506040518281527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce79060200160405180910390a15050565b60006001600160e01b031982166380ac58cd60e01b1480610d7257506001600160e01b03198216635b5e139f60e01b145b806102ae57506301ffc9a760e01b6001600160e01b03198316146102ae565b60006001600160a01b0384163b15610e8757604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610dd59033908990889088906004016117d6565b6020604051808303816000875af1925050508015610e10575060408051601f3d908101601f19168201909252610e0d91810190611813565b60015b610e6d573d808015610e3e576040519150601f19603f3d011682016040523d82523d6000602084013e610e43565b606091505b508051600003610e655760405162461bcd60e51b81526004016103e190611647565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061083b565b506001949350505050565b6060610e9d826106f7565b6000610eb460408051602081019091526000815290565b90506000815111610ed45760405180602001604052806000815250610eff565b80610ede84610f39565b604051602001610eef929190611699565b6040516020818303038152906040525b9392505050565b610f108383610fcc565b610f1d6000848484610d91565b6104825760405162461bcd60e51b81526004016103e190611647565b60606000610f4683611157565b600101905060008167ffffffffffffffff811115610f6657610f666113b7565b6040519080825280601f01601f191660200182016040528015610f90576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610f9a57509392505050565b6001600160a01b0382166110225760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016103e1565b6000818152600260205260409020546001600160a01b0316156110875760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016103e1565b6000818152600260205260409020546001600160a01b0316156110ec5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016103e1565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106111965772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef810000000083106111c2576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106111e057662386f26fc10000830492506010015b6305f5e10083106111f8576305f5e100830492506008015b612710831061120c57612710830492506004015b6064831061121e576064830492506002015b600a83106102ae5760010192915050565b6001600160e01b0319811681146106cf57600080fd5b60006020828403121561125757600080fd5b8135610eff8161122f565b60005b8381101561127d578181015183820152602001611265565b50506000910152565b6000815180845261129e816020860160208601611262565b601f01601f19169290920160200192915050565b602081526000610eff6020830184611286565b6000602082840312156112d757600080fd5b5035919050565b80356001600160a01b03811681146112f557600080fd5b919050565b6000806040838503121561130d57600080fd5b611316836112de565b946020939093013593505050565b60008060006060848603121561133957600080fd5b611342846112de565b9250611350602085016112de565b9150604084013590509250925092565b60006020828403121561137257600080fd5b610eff826112de565b6000806040838503121561138e57600080fd5b611397836112de565b9150602083013580151581146113ac57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff808411156113e8576113e86113b7565b604051601f8501601f19908116603f01168101908282118183101715611410576114106113b7565b8160405280935085815286868601111561142957600080fd5b858560208301376000602087830101525050509392505050565b6000806000806080858703121561145957600080fd5b611462856112de565b9350611470602086016112de565b925060408501359150606085013567ffffffffffffffff81111561149357600080fd5b8501601f810187136114a457600080fd5b6114b3878235602084016113cd565b91505092959194509250565b600080604083850312156114d257600080fd5b6114db836112de565b9150602083013567ffffffffffffffff8111156114f757600080fd5b8301601f8101851361150857600080fd5b611517858235602084016113cd565b9150509250929050565b6000806040838503121561153457600080fd5b61153d836112de565b915061154b602084016112de565b90509250929050565b600181811c9082168061156857607f821691505b60208210810361158857634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b6000600182016115fb57634e487b7160e01b600052601160045260246000fd5b5060010190565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b600083516116ab818460208801611262565b8351908301906116bf818360208801611262565b01949350505050565b601f82111561048257600081815260208120601f850160051c810160208610156116ef5750805b601f850160051c820191505b8181101561170e578281556001016116fb565b505050505050565b815167ffffffffffffffff811115611730576117306113b7565b6117448161173e8454611554565b846116c8565b602080601f83116001811461177957600084156117615750858301515b600019600386901b1c1916600185901b17855561170e565b600085815260208120601f198616915b828110156117a857888601518255948401946001909101908401611789565b50858210156117c65787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061180990830184611286565b9695505050505050565b60006020828403121561182557600080fd5b8151610eff8161122f56fea2646970667358221220e704e95efccb4771648b6ad2ba12e27d89c8ed851c22569554ecb67f782d269c64736f6c63430008140033",
        devdoc: {
          events: {
            "Approval(address,address,uint256)": {
              details: "Emitted when `owner` enables `approved` to manage the `tokenId` token.",
            },
            "ApprovalForAll(address,address,bool)": {
              details: "Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.",
            },
            "BatchMetadataUpdate(uint256,uint256)": {
              details:
                "This event emits when the metadata of a range of tokens is changed. So that the third-party platforms such as NFT market could timely update the images and related attributes of the NFTs.",
            },
            "MetadataUpdate(uint256)": {
              details:
                "This event emits when the metadata of a token is changed. So that the third-party platforms such as NFT market could timely update the images and related attributes of the NFT.",
            },
            "Transfer(address,address,uint256)": {
              details: "Emitted when `tokenId` token is transferred from `from` to `to`.",
            },
          },
          kind: "dev",
          methods: {
            "approve(address,uint256)": {
              details: "See {IERC721-approve}.",
            },
            "balanceOf(address)": {
              details: "See {IERC721-balanceOf}.",
            },
            "getApproved(uint256)": {
              details: "See {IERC721-getApproved}.",
            },
            "isApprovedForAll(address,address)": {
              details: "See {IERC721-isApprovedForAll}.",
            },
            "name()": {
              details: "See {IERC721Metadata-name}.",
            },
            "owner()": {
              details: "Returns the address of the current owner.",
            },
            "ownerOf(uint256)": {
              details: "See {IERC721-ownerOf}.",
            },
            "renounceOwnership()": {
              details:
                "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.",
            },
            "safeTransferFrom(address,address,uint256)": {
              details: "See {IERC721-safeTransferFrom}.",
            },
            "safeTransferFrom(address,address,uint256,bytes)": {
              details: "See {IERC721-safeTransferFrom}.",
            },
            "setApprovalForAll(address,bool)": {
              details: "See {IERC721-setApprovalForAll}.",
            },
            "symbol()": {
              details: "See {IERC721Metadata-symbol}.",
            },
            "transferFrom(address,address,uint256)": {
              details: "See {IERC721-transferFrom}.",
            },
            "transferOwnership(address)": {
              details:
                "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.",
            },
          },
          version: 1,
        },
        userdoc: {
          kind: "user",
          methods: {},
          version: 1,
        },
        storageLayout: {
          storage: [
            {
              astId: 166,
              contract: "contracts/fortuneCookies.sol:fortuneCookies",
              label: "_name",
              offset: 0,
              slot: "0",
              type: "t_string_storage",
            },
            {
              astId: 168,
              contract: "contracts/fortuneCookies.sol:fortuneCookies",
              label: "_symbol",
              offset: 0,
              slot: "1",
              type: "t_string_storage",
            },
            {
              astId: 172,
              contract: "contracts/fortuneCookies.sol:fortuneCookies",
              label: "_owners",
              offset: 0,
              slot: "2",
              type: "t_mapping(t_uint256,t_address)",
            },
            {
              astId: 176,
              contract: "contracts/fortuneCookies.sol:fortuneCookies",
              label: "_balances",
              offset: 0,
              slot: "3",
              type: "t_mapping(t_address,t_uint256)",
            },
            {
              astId: 180,
              contract: "contracts/fortuneCookies.sol:fortuneCookies",
              label: "_tokenApprovals",
              offset: 0,
              slot: "4",
              type: "t_mapping(t_uint256,t_address)",
            },
            {
              astId: 186,
              contract: "contracts/fortuneCookies.sol:fortuneCookies",
              label: "_operatorApprovals",
              offset: 0,
              slot: "5",
              type: "t_mapping(t_address,t_mapping(t_address,t_bool))",
            },
            {
              astId: 1217,
              contract: "contracts/fortuneCookies.sol:fortuneCookies",
              label: "_tokenURIs",
              offset: 0,
              slot: "6",
              type: "t_mapping(t_uint256,t_string_storage)",
            },
            {
              astId: 7,
              contract: "contracts/fortuneCookies.sol:fortuneCookies",
              label: "_owner",
              offset: 0,
              slot: "7",
              type: "t_address",
            },
            {
              astId: 3125,
              contract: "contracts/fortuneCookies.sol:fortuneCookies",
              label: "_nextTokenId",
              offset: 0,
              slot: "8",
              type: "t_uint256",
            },
          ],
          types: {
            t_address: {
              encoding: "inplace",
              label: "address",
              numberOfBytes: "20",
            },
            t_bool: {
              encoding: "inplace",
              label: "bool",
              numberOfBytes: "1",
            },
            "t_mapping(t_address,t_bool)": {
              encoding: "mapping",
              key: "t_address",
              label: "mapping(address => bool)",
              numberOfBytes: "32",
              value: "t_bool",
            },
            "t_mapping(t_address,t_mapping(t_address,t_bool))": {
              encoding: "mapping",
              key: "t_address",
              label: "mapping(address => mapping(address => bool))",
              numberOfBytes: "32",
              value: "t_mapping(t_address,t_bool)",
            },
            "t_mapping(t_address,t_uint256)": {
              encoding: "mapping",
              key: "t_address",
              label: "mapping(address => uint256)",
              numberOfBytes: "32",
              value: "t_uint256",
            },
            "t_mapping(t_uint256,t_address)": {
              encoding: "mapping",
              key: "t_uint256",
              label: "mapping(uint256 => address)",
              numberOfBytes: "32",
              value: "t_address",
            },
            "t_mapping(t_uint256,t_string_storage)": {
              encoding: "mapping",
              key: "t_uint256",
              label: "mapping(uint256 => string)",
              numberOfBytes: "32",
              value: "t_string_storage",
            },
            t_string_storage: {
              encoding: "bytes",
              label: "string",
              numberOfBytes: "32",
            },
            t_uint256: {
              encoding: "inplace",
              label: "uint256",
              numberOfBytes: "32",
            },
          },
        },
      },
    ],
    address: "0xd39dfc2e3a3465E5AFE76a8fF819E8c1d7352411", // Dirección del contrato en la red desplegada
  },
  address: "0xd39dfc2e3a3465E5AFE76a8fF819E8c1d7352411",
};

export default contracts;