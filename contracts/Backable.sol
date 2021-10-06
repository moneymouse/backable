// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


import "./BCUSD.sol";
import "./IERC20.sol";

/**
 * 
 *   This smart constract is just for example in order to make the frontend preview to work.
 *   Backable is in the research step for a safe and efficient stablecoin model.
 * 
*/

contract Backable {
    uint256 public currentSupply; // Stablecoin current supply
    uint256 public totalMinted;   // Stablecoin total minted
    uint256 public totalBurned;   // Stablecoin total burned or redeemed
    
    IERC20 public  stablecoin;
    
    struct UserInfo  {
        uint256 deposited;  // CKB|ETH deposited
        uint256 supply;     // total stablecoin minted
    }
    
    // User Info
    mapping(address => UserInfo) public userInfo;
    
    constructor() {
        stablecoin = new BCUSD();
    }
    
    event  Mint(address indexed user, uint256 amount);
     event Burn(address indexed user, uint256 amount);
    
    function deposit(uint256 amount) payable public {
        UserInfo storage user = userInfo[msg.sender];
        
        user.deposited += msg.value;
        user.supply    += amount;
        
        currentSupply += amount;
        totalMinted   += amount;
        
        stablecoin.mint(address(msg.sender), amount);
        
        emit Mint(msg.sender, amount);
    }
    
}