[redux-data-service](../README.md) > [IPostActionHandlers](../interfaces/ipostactionhandlers.md)

# Interface: IPostActionHandlers

## Hierarchy

**IPostActionHandlers**

## Index

### Properties

* [onError](ipostactionhandlers.md#onerror)
* [onSuccess](ipostactionhandlers.md#onsuccess)

---

## Properties

<a id="onerror"></a>

### `<Optional>` onError

**● onError**: *`function`*

*Defined in [Services/DataService.ts:50](https://github.com/Rediker-Software/redux-data-service/blob/6ea6c09/src/Services/DataService.ts#L50)*

#### Type declaration
▸(errors: *`any`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| errors | `any` |

**Returns:** `void`

___
<a id="onsuccess"></a>

### `<Optional>` onSuccess

**● onSuccess**: *`function`*

*Defined in [Services/DataService.ts:49](https://github.com/Rediker-Software/redux-data-service/blob/6ea6c09/src/Services/DataService.ts#L49)*

#### Type declaration
▸(data: *`any`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| data | `any` |

**Returns:** `void`

___

