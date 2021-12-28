# ProtoBase.sol

View Source: [contracts/core/ProtoBase.sol](../contracts/core/ProtoBase.sol)

**↗ Extends: [AccessControl](AccessControl.md), [Pausable](Pausable.md), [Recoverable](Recoverable.md)**
**↘ Derived Contracts: [Protocol](Protocol.md)**

**ProtoBase**

## Functions

- [constructor(IStore store)](#)
- [_setAccessPolicy()](#_setaccesspolicy)
- [setupRole(bytes32 role, bytes32 adminRole, address account)](#setuprole)
- [pause()](#pause)
- [unpause()](#unpause)

### 

```solidity
function (IStore store) internal nonpayable Recoverable 
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| store | IStore |  | 

<details>
	<summary><strong>Source Code</strong></summary>

```javascript
constructor(IStore store) Recoverable(store) {
    _setAccessPolicy();
  }
```
</details>

### _setAccessPolicy

```solidity
function _setAccessPolicy() private nonpayable
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

<details>
	<summary><strong>Source Code</strong></summary>

```javascript
function _setAccessPolicy() private {
    _setRoleAdmin(AccessControlLibV1.NS_ROLES_ADMIN, AccessControlLibV1.NS_ROLES_ADMIN);
    _setRoleAdmin(AccessControlLibV1.NS_ROLES_COVER_MANAGER, AccessControlLibV1.NS_ROLES_ADMIN);
    _setRoleAdmin(AccessControlLibV1.NS_ROLES_LIQUIDITY_MANAGER, AccessControlLibV1.NS_ROLES_ADMIN);
    _setRoleAdmin(AccessControlLibV1.NS_ROLES_GOVERNANCE_ADMIN, AccessControlLibV1.NS_ROLES_ADMIN);
    _setRoleAdmin(AccessControlLibV1.NS_ROLES_GOVERNANCE_AGENT, AccessControlLibV1.NS_ROLES_GOVERNANCE_ADMIN);
    _setRoleAdmin(AccessControlLibV1.NS_ROLES_UPGRADE_AGENT, AccessControlLibV1.NS_ROLES_ADMIN);
    _setRoleAdmin(AccessControlLibV1.NS_ROLES_RECOVERY_AGENT, AccessControlLibV1.NS_ROLES_ADMIN);
    _setRoleAdmin(AccessControlLibV1.NS_ROLES_PAUSE_AGENT, AccessControlLibV1.NS_ROLES_ADMIN);
    _setRoleAdmin(AccessControlLibV1.NS_ROLES_UNPAUSE_AGENT, AccessControlLibV1.NS_ROLES_ADMIN);

    _setupRole(AccessControlLibV1.NS_ROLES_ADMIN, msg.sender);
  }
```
</details>

### setupRole

```solidity
function setupRole(bytes32 role, bytes32 adminRole, address account) external nonpayable nonReentrant 
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| role | bytes32 |  | 
| adminRole | bytes32 |  | 
| account | address |  | 

<details>
	<summary><strong>Source Code</strong></summary>

```javascript
function setupRole(
    bytes32 role,
    bytes32 adminRole,
    address account
  ) external nonReentrant {
    s.mustNotBePaused();
    AccessControlLibV1.mustBeAdmin(s);

    _setRoleAdmin(role, adminRole);

    if (account != address(0)) {
      _setupRole(role, account);
    }
  }
```
</details>

### pause

Pauses this contract.
 Can only be called by "Pause Agents".

```solidity
function pause() external nonpayable nonReentrant 
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

<details>
	<summary><strong>Source Code</strong></summary>

```javascript
function pause() external nonReentrant {
    AccessControlLibV1.mustBePauseAgent(s);
    super._pause();
  }
```
</details>

### unpause

Unpauses this contract.
 Can only be called by "Unpause Agents".

```solidity
function unpause() external nonpayable whenPaused nonReentrant 
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

<details>
	<summary><strong>Source Code</strong></summary>

```javascript
function unpause() external whenPaused nonReentrant {
    AccessControlLibV1.mustBeUnpauseAgent(s);
    super._unpause();
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