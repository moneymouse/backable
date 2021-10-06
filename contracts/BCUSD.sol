// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./IERC20.sol";
import "./Ownable.sol";

contract BCUSD is IERC20, Ownable {
    
    string  constant public  name     = "Backable Stablecoin";
    string  constant public  symbol   = "BCUSD";
    uint8   constant public  decimals = 18;
    uint256          public override  totalSupply;
    
    mapping(address => uint256)                     public override balanceOf;
    mapping(address => mapping(address => uint256)) public override allowance;

 
    constructor() {
        totalSupply = 0;
    }

  
    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {
        _transfer(msg.sender, recipient, amount);
        return true;
    }

 
    function approve(address spender, uint256 amount) public virtual override returns (bool) {
        _approve(msg.sender, spender, amount);
        return true;
    }


    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) public virtual override returns (bool) {
        _transfer(sender, recipient, amount);

        uint256 currentAllowance = allowance[sender][msg.sender];
        require(currentAllowance >= amount, "ERC20: transfer amount exceeds allowance");
        unchecked {
            _approve(sender, msg.sender, currentAllowance - amount);
        }

        return true;
    }

    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {
        _approve(msg.sender, spender, allowance[msg.sender][spender] + addedValue);
        return true;
    }

  
    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {
        uint256 currentAllowance = allowance[msg.sender][spender];
        require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");
        unchecked {
            _approve(msg.sender, spender, currentAllowance - subtractedValue);
        }

        return true;
    }

    function _transfer(
        address sender,
        address recipient,
        uint256 amount
    ) internal virtual {
        require(sender != address(0), "ERC20: transfer from the zero address");
        require(recipient != address(0), "ERC20: transfer to the zero address");

        uint256 senderBalance = balanceOf[sender];
        require(senderBalance >= amount, "ERC20: transfer amount exceeds balance");
        unchecked {
            balanceOf[sender] = senderBalance - amount;
        }
        balanceOf[recipient] += amount;

        emit Transfer(sender, recipient, amount);

    }

    function mint(address account, uint256 amount) public virtual override onlyOwner {
        require(account != address(0), "ERC20: mint to the zero address");

        totalSupply += amount;
        balanceOf[account] += amount;
        emit Transfer(address(0), account, amount);

    }


    function burn(address account, uint256 amount) public virtual {
        require(account != address(0), "ERC20: burn from the zero address");

        uint256 accountBalance = balanceOf[account];
        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
        unchecked {
            balanceOf[account] = accountBalance - amount;
        }
        totalSupply -= amount;

        emit Transfer(account, address(0), amount);

    }

    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        allowance[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }
}