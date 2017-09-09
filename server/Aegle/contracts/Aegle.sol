// template: https://github.com/ConsenSys/Token-Factory

pragma solidity ^0.4.16;

import "./StandardToken.sol";

contract Aegle is StandardToken {

    function () {}


    string public name = "Aegle";
    uint8 public decimals = 0;
    string public symbol = "AEGL";
    string public version = 'A1';
    uint256 public totalSupply = 1000000;
    address public _faucetAddress;



    function Aegle() {
        balances[msg.sender] = totalSupply;
        _faucetAddress = msg.sender;
    }

    // Will pay out the 
    function rewardReceiver(address _receiver, uint256 _value, bool _completed) returns (bool success) {
        if(_completed) {
            if (balances[_faucetAddress] >= _value && _value > 0) {
                balances[_faucetAddress] -= _value;
                balances[_receiver] += _value;
                Transfer(_faucetAddress, _receiver, _value);
                return true;
            } else { return false; }
        }
    }
}