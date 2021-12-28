# Price Discovery Contract (PriceDiscovery.sol)

View Source: [contracts/core/discovery/PriceDiscovery.sol](../contracts/core/discovery/PriceDiscovery.sol)

**↗ Extends: [IPriceDiscovery](IPriceDiscovery.md), [Recoverable](Recoverable.md)**

**PriceDiscovery**

Provides features to discover price of a given token, uses UniswapV2 and compatible forks

## Functions

- [constructor(IStore store)](#)
- [getTokenPriceInStableCoin(address token, uint256 multiplier)](#gettokenpriceinstablecoin)
- [getTokenPriceInLiquidityToken(address token, address liquidityToken, uint256 multiplier)](#gettokenpriceinliquiditytoken)
- [version()](#version)
- [getName()](#getname)

### 

Constructs this contract

```solidity
function (IStore store) public nonpayable Recoverable 
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| store | IStore | Provide an implmentation of IStore | 

<details>
	<summary><strong>Source Code</strong></summary>

```javascript
constructor(IStore store) Recoverable(store) {
    this;
  }
```
</details>

### getTokenPriceInStableCoin

Gets the price of the given token against the platform's stablecoin.
 Warning: if the supplied token address (and the stablecoin pair) is not found on the UniswapV2-like decentralized exchange,
 the result will be incorrect.

```solidity
function getTokenPriceInStableCoin(address token, uint256 multiplier) external view
returns(uint256)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| token | address | Provide the token address to get the price of | 
| multiplier | uint256 | Enter the token price multiplier | 

<details>
	<summary><strong>Source Code</strong></summary>

```javascript
function getTokenPriceInStableCoin(address token, uint256 multiplier) external view override returns (uint256) {
    address stablecoin = s.getLiquidityToken();
    return this.getTokenPriceInLiquidityToken(token, stablecoin, multiplier);
  }
```
</details>

### getTokenPriceInLiquidityToken

Gets the price of the given token against the given liquidity token.
 Warning: if both of the supplied token address aren't to be found on the UniswapV2-like decentralized exchange,
 the result will be incorrect.

```solidity
function getTokenPriceInLiquidityToken(address token, address liquidityToken, uint256 multiplier) external view
returns(uint256)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| token | address | Provide the token address to get the price of | 
| liquidityToken | address | Provide the liquidity token address to get the price in | 
| multiplier | uint256 | Enter the token price multiplier | 

<details>
	<summary><strong>Source Code</strong></summary>

```javascript
function getTokenPriceInLiquidityToken(
    address token,
    address liquidityToken,
    uint256 multiplier
  ) external view override returns (uint256) {
    if (token == liquidityToken) {
      return multiplier;
    }

    address[] memory pair = new address[](2);

    pair[0] = token;
    pair[1] = liquidityToken;

    IUniswapV2RouterLike router = IUniswapV2RouterLike(s.getUniswapV2Router());

    uint256[] memory amounts = router.getAmountsOut(multiplier, pair);
    return amounts[amounts.length - 1];
  }
```
</details>

### version

Version number of this contract

```solidity
function version() external pure
returns(bytes32)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

<details>
	<summary><strong>Source Code</strong></summary>

```javascript
function version() external pure override returns (bytes32) {
    return "v0.1";
  }
```
</details>

### getName

Name of this contract

```solidity
function getName() public pure
returns(bytes32)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

<details>
	<summary><strong>Source Code</strong></summary>

```javascript
function getName() public pure override returns (bytes32) {
    return ProtoUtilV1.CNAME_PRICE_DISCOVERY;
  }
```
</details>

## Contracts

* [AccessControl](AccessControl.md)
* [AccessControlLibV1](AccessControlLibV1.md)
* [Address](Address.md)
* [BaseLibV1](BaseLibV1.md)
* [BokkyPooBahsDateTimeLibrary](BokkyPooBahsDateTimeLibrary.md)
* [Commission](Commission.md)
* [Context](Context.md)
* [Controller](Controller.md)
* [Cover](Cover.md)
* [CoverBase](CoverBase.md)
* [CoverProvision](CoverProvision.md)
* [CoverReassurance](CoverReassurance.md)
* [CoverStake](CoverStake.md)
* [CoverUtilV1](CoverUtilV1.md)
* [cxToken](cxToken.md)
* [cxTokenFactory](cxTokenFactory.md)
* [cxTokenFactoryLibV1](cxTokenFactoryLibV1.md)
* [Destroyable](Destroyable.md)
* [ERC165](ERC165.md)
* [ERC20](ERC20.md)
* [FakeRecoverable](FakeRecoverable.md)
* [FakeStore](FakeStore.md)
* [FakeToken](FakeToken.md)
* [FakeUniswapV2RouterLike](FakeUniswapV2RouterLike.md)
* [Finalization](Finalization.md)
* [Governance](Governance.md)
* [GovernanceUtilV1](GovernanceUtilV1.md)
* [IAccessControl](IAccessControl.md)
* [IClaimsProcessor](IClaimsProcessor.md)
* [ICommission](ICommission.md)
* [ICover](ICover.md)
* [ICoverProvision](ICoverProvision.md)
* [ICoverReassurance](ICoverReassurance.md)
* [ICoverStake](ICoverStake.md)
* [ICxToken](ICxToken.md)
* [ICxTokenFactory](ICxTokenFactory.md)
* [IERC165](IERC165.md)
* [IERC20](IERC20.md)
* [IERC20Metadata](IERC20Metadata.md)
* [IFinalization](IFinalization.md)
* [IGovernance](IGovernance.md)
* [IMember](IMember.md)
* [IPausable](IPausable.md)
* [IPolicy](IPolicy.md)
* [IPolicyAdmin](IPolicyAdmin.md)
* [IPriceDiscovery](IPriceDiscovery.md)
* [IProtocol](IProtocol.md)
* [IReporter](IReporter.md)
* [IResolution](IResolution.md)
* [IResolvable](IResolvable.md)
* [IStore](IStore.md)
* [IUniswapV2PairLike](IUniswapV2PairLike.md)
* [IUniswapV2RouterLike](IUniswapV2RouterLike.md)
* [IUnstakable](IUnstakable.md)
* [IVault](IVault.md)
* [IVaultFactory](IVaultFactory.md)
* [IWitness](IWitness.md)
* [MaliciousToken](MaliciousToken.md)
* [Migrations](Migrations.md)
* [NTransferUtilV2](NTransferUtilV2.md)
* [NTransferUtilV2Intermediate](NTransferUtilV2Intermediate.md)
* [Ownable](Ownable.md)
* [Pausable](Pausable.md)
* [Policy](Policy.md)
* [PolicyAdmin](PolicyAdmin.md)
* [PolicyManager](PolicyManager.md)
* [PriceDiscovery](PriceDiscovery.md)
* [Processor](Processor.md)
* [ProtoBase](ProtoBase.md)
* [Protocol](Protocol.md)
* [ProtoUtilV1](ProtoUtilV1.md)
* [Recoverable](Recoverable.md)
* [ReentrancyGuard](ReentrancyGuard.md)
* [RegistryLibV1](RegistryLibV1.md)
* [Reporter](Reporter.md)
* [Resolution](Resolution.md)
* [Resolvable](Resolvable.md)
* [SafeERC20](SafeERC20.md)
* [SafeMath](SafeMath.md)
* [Store](Store.md)
* [StoreBase](StoreBase.md)
* [StoreKeyUtil](StoreKeyUtil.md)
* [Strings](Strings.md)
* [Unstakable](Unstakable.md)
* [ValidationLibV1](ValidationLibV1.md)
* [Vault](Vault.md)
* [VaultBase](VaultBase.md)
* [VaultFactory](VaultFactory.md)
* [VaultFactoryLibV1](VaultFactoryLibV1.md)
* [VaultLibV1](VaultLibV1.md)
* [Witness](Witness.md)