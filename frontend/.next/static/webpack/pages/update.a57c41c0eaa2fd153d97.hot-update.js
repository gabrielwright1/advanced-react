self["webpackHotUpdate_N_E"]("pages/update",{

/***/ "./node_modules/@apollo/client/cache/core/cache.js":
/*!*********************************************************!*\
  !*** ./node_modules/@apollo/client/cache/core/cache.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApolloCache": function() { return /* binding */ ApolloCache; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! optimism */ "./node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");



var ApolloCache = (function () {
    function ApolloCache() {
        this.getFragmentDoc = (0,optimism__WEBPACK_IMPORTED_MODULE_0__.wrap)(_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.getFragmentQueryDocument);
    }
    ApolloCache.prototype.batch = function (options) {
        var optimisticId = typeof options.optimistic === "string" ? options.optimistic :
            options.optimistic === false ? null : void 0;
        this.performTransaction(options.update, optimisticId);
    };
    ApolloCache.prototype.recordOptimisticTransaction = function (transaction, optimisticId) {
        this.performTransaction(transaction, optimisticId);
    };
    ApolloCache.prototype.transformDocument = function (document) {
        return document;
    };
    ApolloCache.prototype.identify = function (object) {
        return;
    };
    ApolloCache.prototype.gc = function () {
        return [];
    };
    ApolloCache.prototype.modify = function (options) {
        return false;
    };
    ApolloCache.prototype.transformForLink = function (document) {
        return document;
    };
    ApolloCache.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = !!options.optimistic; }
        return this.read((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, options), { rootId: options.id || 'ROOT_QUERY', optimistic: optimistic }));
    };
    ApolloCache.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = !!options.optimistic; }
        return this.read((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, options), { query: this.getFragmentDoc(options.fragment, options.fragmentName), rootId: options.id, optimistic: optimistic }));
    };
    ApolloCache.prototype.writeQuery = function (_a) {
        var id = _a.id, data = _a.data, options = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__rest)(_a, ["id", "data"]);
        return this.write(Object.assign(options, {
            dataId: id || 'ROOT_QUERY',
            result: data,
        }));
    };
    ApolloCache.prototype.writeFragment = function (_a) {
        var id = _a.id, data = _a.data, fragment = _a.fragment, fragmentName = _a.fragmentName, options = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__rest)(_a, ["id", "data", "fragment", "fragmentName"]);
        return this.write(Object.assign(options, {
            query: this.getFragmentDoc(fragment, fragmentName),
            dataId: id,
            result: data,
        }));
    };
    return ApolloCache;
}());

//# sourceMappingURL=cache.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/core/types/Cache.js":
/*!***************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/core/types/Cache.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cache": function() { return /* binding */ Cache; }
/* harmony export */ });
var Cache;
(function (Cache) {
})(Cache || (Cache = {}));
//# sourceMappingURL=Cache.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/core/types/common.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/core/types/common.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MissingFieldError": function() { return /* binding */ MissingFieldError; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var MissingFieldError = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MissingFieldError, _super);
    function MissingFieldError(message, path, query, variables) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.path = path;
        _this.query = query;
        _this.variables = variables;
        _this.__proto__ = MissingFieldError.prototype;
        return _this;
    }
    return MissingFieldError;
}(Error));

//# sourceMappingURL=common.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@apollo/client/cache/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApolloCache": function() { return /* reexport safe */ _core_cache_js__WEBPACK_IMPORTED_MODULE_2__.ApolloCache; },
/* harmony export */   "Cache": function() { return /* reexport safe */ _core_types_Cache_js__WEBPACK_IMPORTED_MODULE_3__.Cache; },
/* harmony export */   "MissingFieldError": function() { return /* reexport safe */ _core_types_common_js__WEBPACK_IMPORTED_MODULE_4__.MissingFieldError; },
/* harmony export */   "isReference": function() { return /* reexport safe */ _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.isReference; },
/* harmony export */   "makeReference": function() { return /* reexport safe */ _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.makeReference; },
/* harmony export */   "EntityStore": function() { return /* reexport safe */ _inmemory_entityStore_js__WEBPACK_IMPORTED_MODULE_5__.EntityStore; },
/* harmony export */   "fieldNameFromStoreName": function() { return /* reexport safe */ _inmemory_helpers_js__WEBPACK_IMPORTED_MODULE_6__.fieldNameFromStoreName; },
/* harmony export */   "InMemoryCache": function() { return /* reexport safe */ _inmemory_inMemoryCache_js__WEBPACK_IMPORTED_MODULE_7__.InMemoryCache; },
/* harmony export */   "makeVar": function() { return /* reexport safe */ _inmemory_reactiveVars_js__WEBPACK_IMPORTED_MODULE_8__.makeVar; },
/* harmony export */   "cacheSlot": function() { return /* reexport safe */ _inmemory_reactiveVars_js__WEBPACK_IMPORTED_MODULE_8__.cacheSlot; },
/* harmony export */   "defaultDataIdFromObject": function() { return /* reexport safe */ _inmemory_policies_js__WEBPACK_IMPORTED_MODULE_9__.defaultDataIdFromObject; },
/* harmony export */   "Policies": function() { return /* reexport safe */ _inmemory_policies_js__WEBPACK_IMPORTED_MODULE_9__.Policies; },
/* harmony export */   "canonicalStringify": function() { return /* reexport safe */ _inmemory_object_canon_js__WEBPACK_IMPORTED_MODULE_10__.canonicalStringify; }
/* harmony export */ });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _core_cache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/cache.js */ "./node_modules/@apollo/client/cache/core/cache.js");
/* harmony import */ var _core_types_Cache_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/types/Cache.js */ "./node_modules/@apollo/client/cache/core/types/Cache.js");
/* harmony import */ var _core_types_common_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/types/common.js */ "./node_modules/@apollo/client/cache/core/types/common.js");
/* harmony import */ var _inmemory_entityStore_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inmemory/entityStore.js */ "./node_modules/@apollo/client/cache/inmemory/entityStore.js");
/* harmony import */ var _inmemory_helpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inmemory/helpers.js */ "./node_modules/@apollo/client/cache/inmemory/helpers.js");
/* harmony import */ var _inmemory_inMemoryCache_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inmemory/inMemoryCache.js */ "./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js");
/* harmony import */ var _inmemory_reactiveVars_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inmemory/reactiveVars.js */ "./node_modules/@apollo/client/cache/inmemory/reactiveVars.js");
/* harmony import */ var _inmemory_policies_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inmemory/policies.js */ "./node_modules/@apollo/client/cache/inmemory/policies.js");
/* harmony import */ var _inmemory_object_canon_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inmemory/object-canon.js */ "./node_modules/@apollo/client/cache/inmemory/object-canon.js");
/* harmony import */ var _inmemory_types_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inmemory/types.js */ "./node_modules/@apollo/client/cache/inmemory/types.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _inmemory_types_js__WEBPACK_IMPORTED_MODULE_11__) if(["default","ApolloCache","Cache","MissingFieldError","isReference","makeReference","EntityStore","fieldNameFromStoreName","InMemoryCache","makeVar","cacheSlot","defaultDataIdFromObject","Policies","canonicalStringify"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _inmemory_types_js__WEBPACK_IMPORTED_MODULE_11__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


__DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)("boolean" === typeof _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.DEV, _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.DEV) : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)("boolean" === typeof _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.DEV, 1);











//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/entityStore.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/entityStore.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityStore": function() { return /* binding */ EntityStore; },
/* harmony export */   "maybeDependOnExistenceOfEntity": function() { return /* binding */ maybeDependOnExistenceOfEntity; },
/* harmony export */   "supportsResultCaching": function() { return /* binding */ supportsResultCaching; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! optimism */ "./node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _wry_trie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wry/trie */ "./node_modules/@wry/trie/lib/trie.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/cache/inmemory/helpers.js");







var DELETE = Object.create(null);
var delModifier = function () { return DELETE; };
var INVALIDATE = Object.create(null);
var EntityStore = (function () {
    function EntityStore(policies, group) {
        var _this = this;
        this.policies = policies;
        this.group = group;
        this.data = Object.create(null);
        this.rootIds = Object.create(null);
        this.refs = Object.create(null);
        this.getFieldValue = function (objectOrReference, storeFieldName) { return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.maybeDeepFreeze)((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.isReference)(objectOrReference)
            ? _this.get(objectOrReference.__ref, storeFieldName)
            : objectOrReference && objectOrReference[storeFieldName]); };
        this.canRead = function (objOrRef) {
            return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.isReference)(objOrRef)
                ? _this.has(objOrRef.__ref)
                : typeof objOrRef === "object";
        };
        this.toReference = function (objOrIdOrRef, mergeIntoStore) {
            if (typeof objOrIdOrRef === "string") {
                return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.makeReference)(objOrIdOrRef);
            }
            if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.isReference)(objOrIdOrRef)) {
                return objOrIdOrRef;
            }
            var id = _this.policies.identify(objOrIdOrRef)[0];
            if (id) {
                var ref = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.makeReference)(id);
                if (mergeIntoStore) {
                    _this.merge(id, objOrIdOrRef);
                }
                return ref;
            }
        };
    }
    EntityStore.prototype.toObject = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, this.data);
    };
    EntityStore.prototype.has = function (dataId) {
        return this.lookup(dataId, true) !== void 0;
    };
    EntityStore.prototype.get = function (dataId, fieldName) {
        this.group.depend(dataId, fieldName);
        if (_helpers_js__WEBPACK_IMPORTED_MODULE_6__.hasOwn.call(this.data, dataId)) {
            var storeObject = this.data[dataId];
            if (storeObject && _helpers_js__WEBPACK_IMPORTED_MODULE_6__.hasOwn.call(storeObject, fieldName)) {
                return storeObject[fieldName];
            }
        }
        if (fieldName === "__typename" &&
            _helpers_js__WEBPACK_IMPORTED_MODULE_6__.hasOwn.call(this.policies.rootTypenamesById, dataId)) {
            return this.policies.rootTypenamesById[dataId];
        }
        if (this instanceof Layer) {
            return this.parent.get(dataId, fieldName);
        }
    };
    EntityStore.prototype.lookup = function (dataId, dependOnExistence) {
        if (dependOnExistence)
            this.group.depend(dataId, "__exists");
        if (_helpers_js__WEBPACK_IMPORTED_MODULE_6__.hasOwn.call(this.data, dataId)) {
            return this.data[dataId];
        }
        if (this instanceof Layer) {
            return this.parent.lookup(dataId, dependOnExistence);
        }
        if (this.policies.rootTypenamesById[dataId]) {
            return Object.create(null);
        }
    };
    EntityStore.prototype.merge = function (older, newer) {
        var _this = this;
        var dataId;
        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.isReference)(older))
            older = older.__ref;
        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.isReference)(newer))
            newer = newer.__ref;
        var existing = typeof older === "string"
            ? this.lookup(dataId = older)
            : older;
        var incoming = typeof newer === "string"
            ? this.lookup(dataId = newer)
            : newer;
        if (!incoming)
            return;
        __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(typeof dataId === "string", "store.merge expects a string ID") : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(typeof dataId === "string", 2);
        var merged = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.DeepMerger(storeObjectReconciler).merge(existing, incoming);
        this.data[dataId] = merged;
        if (merged !== existing) {
            delete this.refs[dataId];
            if (this.group.caching) {
                var fieldsToDirty_1 = Object.create(null);
                if (!existing)
                    fieldsToDirty_1.__exists = 1;
                Object.keys(incoming).forEach(function (storeFieldName) {
                    if (!existing || existing[storeFieldName] !== merged[storeFieldName]) {
                        fieldsToDirty_1[storeFieldName] = 1;
                        var fieldName = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_6__.fieldNameFromStoreName)(storeFieldName);
                        if (fieldName !== storeFieldName &&
                            !_this.policies.hasKeyArgs(merged.__typename, fieldName)) {
                            fieldsToDirty_1[fieldName] = 1;
                        }
                        if (merged[storeFieldName] === void 0 && !(_this instanceof Layer)) {
                            delete merged[storeFieldName];
                        }
                    }
                });
                if (fieldsToDirty_1.__typename &&
                    !(existing && existing.__typename) &&
                    this.policies.rootTypenamesById[dataId] === merged.__typename) {
                    delete fieldsToDirty_1.__typename;
                }
                Object.keys(fieldsToDirty_1).forEach(function (fieldName) { return _this.group.dirty(dataId, fieldName); });
            }
        }
    };
    EntityStore.prototype.modify = function (dataId, fields) {
        var _this = this;
        var storeObject = this.lookup(dataId);
        if (storeObject) {
            var changedFields_1 = Object.create(null);
            var needToMerge_1 = false;
            var allDeleted_1 = true;
            var sharedDetails_1 = {
                DELETE: DELETE,
                INVALIDATE: INVALIDATE,
                isReference: _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.isReference,
                toReference: this.toReference,
                canRead: this.canRead,
                readField: function (fieldNameOrOptions, from) { return _this.policies.readField(typeof fieldNameOrOptions === "string" ? {
                    fieldName: fieldNameOrOptions,
                    from: from || (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.makeReference)(dataId),
                } : fieldNameOrOptions, { store: _this }); },
            };
            Object.keys(storeObject).forEach(function (storeFieldName) {
                var fieldName = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_6__.fieldNameFromStoreName)(storeFieldName);
                var fieldValue = storeObject[storeFieldName];
                if (fieldValue === void 0)
                    return;
                var modify = typeof fields === "function"
                    ? fields
                    : fields[storeFieldName] || fields[fieldName];
                if (modify) {
                    var newValue = modify === delModifier ? DELETE :
                        modify((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.maybeDeepFreeze)(fieldValue), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, sharedDetails_1), { fieldName: fieldName, storeFieldName: storeFieldName, storage: _this.getStorage(dataId, storeFieldName) }));
                    if (newValue === INVALIDATE) {
                        _this.group.dirty(dataId, storeFieldName);
                    }
                    else {
                        if (newValue === DELETE)
                            newValue = void 0;
                        if (newValue !== fieldValue) {
                            changedFields_1[storeFieldName] = newValue;
                            needToMerge_1 = true;
                            fieldValue = newValue;
                        }
                    }
                }
                if (fieldValue !== void 0) {
                    allDeleted_1 = false;
                }
            });
            if (needToMerge_1) {
                this.merge(dataId, changedFields_1);
                if (allDeleted_1) {
                    if (this instanceof Layer) {
                        this.data[dataId] = void 0;
                    }
                    else {
                        delete this.data[dataId];
                    }
                    this.group.dirty(dataId, "__exists");
                }
                return true;
            }
        }
        return false;
    };
    EntityStore.prototype.delete = function (dataId, fieldName, args) {
        var _a;
        var storeObject = this.lookup(dataId);
        if (storeObject) {
            var typename = this.getFieldValue(storeObject, "__typename");
            var storeFieldName = fieldName && args
                ? this.policies.getStoreFieldName({ typename: typename, fieldName: fieldName, args: args })
                : fieldName;
            return this.modify(dataId, storeFieldName ? (_a = {},
                _a[storeFieldName] = delModifier,
                _a) : delModifier);
        }
        return false;
    };
    EntityStore.prototype.evict = function (options) {
        var evicted = false;
        if (options.id) {
            if (_helpers_js__WEBPACK_IMPORTED_MODULE_6__.hasOwn.call(this.data, options.id)) {
                evicted = this.delete(options.id, options.fieldName, options.args);
            }
            if (this instanceof Layer) {
                evicted = this.parent.evict(options) || evicted;
            }
            if (options.fieldName || evicted) {
                this.group.dirty(options.id, options.fieldName || "__exists");
            }
        }
        return evicted;
    };
    EntityStore.prototype.clear = function () {
        this.replace(null);
    };
    EntityStore.prototype.extract = function () {
        var _this = this;
        var obj = this.toObject();
        var extraRootIds = [];
        this.getRootIdSet().forEach(function (id) {
            if (!_helpers_js__WEBPACK_IMPORTED_MODULE_6__.hasOwn.call(_this.policies.rootTypenamesById, id)) {
                extraRootIds.push(id);
            }
        });
        if (extraRootIds.length) {
            obj.__META = { extraRootIds: extraRootIds.sort() };
        }
        return obj;
    };
    EntityStore.prototype.replace = function (newData) {
        var _this = this;
        Object.keys(this.data).forEach(function (dataId) {
            if (!(newData && _helpers_js__WEBPACK_IMPORTED_MODULE_6__.hasOwn.call(newData, dataId))) {
                _this.delete(dataId);
            }
        });
        if (newData) {
            var __META = newData.__META, rest_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__rest)(newData, ["__META"]);
            Object.keys(rest_1).forEach(function (dataId) {
                _this.merge(dataId, rest_1[dataId]);
            });
            if (__META) {
                __META.extraRootIds.forEach(this.retain, this);
            }
        }
    };
    EntityStore.prototype.retain = function (rootId) {
        return this.rootIds[rootId] = (this.rootIds[rootId] || 0) + 1;
    };
    EntityStore.prototype.release = function (rootId) {
        if (this.rootIds[rootId] > 0) {
            var count = --this.rootIds[rootId];
            if (!count)
                delete this.rootIds[rootId];
            return count;
        }
        return 0;
    };
    EntityStore.prototype.getRootIdSet = function (ids) {
        if (ids === void 0) { ids = new Set(); }
        Object.keys(this.rootIds).forEach(ids.add, ids);
        if (this instanceof Layer) {
            this.parent.getRootIdSet(ids);
        }
        else {
            Object.keys(this.policies.rootTypenamesById).forEach(ids.add, ids);
        }
        return ids;
    };
    EntityStore.prototype.gc = function () {
        var _this = this;
        var ids = this.getRootIdSet();
        var snapshot = this.toObject();
        ids.forEach(function (id) {
            if (_helpers_js__WEBPACK_IMPORTED_MODULE_6__.hasOwn.call(snapshot, id)) {
                Object.keys(_this.findChildRefIds(id)).forEach(ids.add, ids);
                delete snapshot[id];
            }
        });
        var idsToRemove = Object.keys(snapshot);
        if (idsToRemove.length) {
            var root_1 = this;
            while (root_1 instanceof Layer)
                root_1 = root_1.parent;
            idsToRemove.forEach(function (id) { return root_1.delete(id); });
        }
        return idsToRemove;
    };
    EntityStore.prototype.findChildRefIds = function (dataId) {
        if (!_helpers_js__WEBPACK_IMPORTED_MODULE_6__.hasOwn.call(this.refs, dataId)) {
            var found_1 = this.refs[dataId] = Object.create(null);
            var root = this.data[dataId];
            if (!root)
                return found_1;
            var workSet_1 = new Set([root]);
            workSet_1.forEach(function (obj) {
                if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.isReference)(obj)) {
                    found_1[obj.__ref] = true;
                }
                if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.isNonNullObject)(obj)) {
                    Object.keys(obj).forEach(function (key) {
                        var child = obj[key];
                        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.isNonNullObject)(child)) {
                            workSet_1.add(child);
                        }
                    });
                }
            });
        }
        return this.refs[dataId];
    };
    EntityStore.prototype.makeCacheKey = function () {
        return this.group.keyMaker.lookupArray(arguments);
    };
    return EntityStore;
}());

var CacheGroup = (function () {
    function CacheGroup(caching, parent) {
        if (parent === void 0) { parent = null; }
        this.caching = caching;
        this.parent = parent;
        this.d = null;
        this.resetCaching();
    }
    CacheGroup.prototype.resetCaching = function () {
        this.d = this.caching ? (0,optimism__WEBPACK_IMPORTED_MODULE_0__.dep)() : null;
        this.keyMaker = new _wry_trie__WEBPACK_IMPORTED_MODULE_3__.Trie(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.canUseWeakMap);
    };
    CacheGroup.prototype.depend = function (dataId, storeFieldName) {
        if (this.d) {
            this.d(makeDepKey(dataId, storeFieldName));
            var fieldName = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_6__.fieldNameFromStoreName)(storeFieldName);
            if (fieldName !== storeFieldName) {
                this.d(makeDepKey(dataId, fieldName));
            }
            if (this.parent) {
                this.parent.depend(dataId, storeFieldName);
            }
        }
    };
    CacheGroup.prototype.dirty = function (dataId, storeFieldName) {
        if (this.d) {
            this.d.dirty(makeDepKey(dataId, storeFieldName), storeFieldName === "__exists" ? "forget" : "setDirty");
        }
    };
    return CacheGroup;
}());
function makeDepKey(dataId, storeFieldName) {
    return storeFieldName + '#' + dataId;
}
function maybeDependOnExistenceOfEntity(store, entityId) {
    if (supportsResultCaching(store)) {
        store.group.depend(entityId, "__exists");
    }
}
(function (EntityStore) {
    var Root = (function (_super) {
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(Root, _super);
        function Root(_a) {
            var policies = _a.policies, _b = _a.resultCaching, resultCaching = _b === void 0 ? true : _b, seed = _a.seed;
            var _this = _super.call(this, policies, new CacheGroup(resultCaching)) || this;
            _this.stump = new Stump(_this);
            _this.storageTrie = new _wry_trie__WEBPACK_IMPORTED_MODULE_3__.Trie(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__.canUseWeakMap);
            if (seed)
                _this.replace(seed);
            return _this;
        }
        Root.prototype.addLayer = function (layerId, replay) {
            return this.stump.addLayer(layerId, replay);
        };
        Root.prototype.removeLayer = function () {
            return this;
        };
        Root.prototype.getStorage = function () {
            return this.storageTrie.lookupArray(arguments);
        };
        return Root;
    }(EntityStore));
    EntityStore.Root = Root;
})(EntityStore || (EntityStore = {}));
var Layer = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(Layer, _super);
    function Layer(id, parent, replay, group) {
        var _this = _super.call(this, parent.policies, group) || this;
        _this.id = id;
        _this.parent = parent;
        _this.replay = replay;
        _this.group = group;
        replay(_this);
        return _this;
    }
    Layer.prototype.addLayer = function (layerId, replay) {
        return new Layer(layerId, this, replay, this.group);
    };
    Layer.prototype.removeLayer = function (layerId) {
        var _this = this;
        var parent = this.parent.removeLayer(layerId);
        if (layerId === this.id) {
            if (this.group.caching) {
                Object.keys(this.data).forEach(function (dataId) {
                    var ownStoreObject = _this.data[dataId];
                    var parentStoreObject = parent["lookup"](dataId);
                    if (!parentStoreObject) {
                        _this.delete(dataId);
                    }
                    else if (!ownStoreObject) {
                        _this.group.dirty(dataId, "__exists");
                        Object.keys(parentStoreObject).forEach(function (storeFieldName) {
                            _this.group.dirty(dataId, storeFieldName);
                        });
                    }
                    else if (ownStoreObject !== parentStoreObject) {
                        Object.keys(ownStoreObject).forEach(function (storeFieldName) {
                            if (!(0,_wry_equality__WEBPACK_IMPORTED_MODULE_2__.equal)(ownStoreObject[storeFieldName], parentStoreObject[storeFieldName])) {
                                _this.group.dirty(dataId, storeFieldName);
                            }
                        });
                    }
                });
            }
            return parent;
        }
        if (parent === this.parent)
            return this;
        return parent.addLayer(this.id, this.replay);
    };
    Layer.prototype.toObject = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, this.parent.toObject()), this.data);
    };
    Layer.prototype.findChildRefIds = function (dataId) {
        var fromParent = this.parent.findChildRefIds(dataId);
        return _helpers_js__WEBPACK_IMPORTED_MODULE_6__.hasOwn.call(this.data, dataId) ? (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, fromParent), _super.prototype.findChildRefIds.call(this, dataId)) : fromParent;
    };
    Layer.prototype.getStorage = function () {
        var p = this.parent;
        while (p.parent)
            p = p.parent;
        return p.getStorage.apply(p, arguments);
    };
    return Layer;
}(EntityStore));
var Stump = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(Stump, _super);
    function Stump(root) {
        return _super.call(this, "EntityStore.Stump", root, function () { }, new CacheGroup(root.group.caching, root.group)) || this;
    }
    Stump.prototype.removeLayer = function () {
        return this;
    };
    Stump.prototype.merge = function () {
        return this.parent.merge.apply(this.parent, arguments);
    };
    return Stump;
}(Layer));
function storeObjectReconciler(existingObject, incomingObject, property) {
    var existingValue = existingObject[property];
    var incomingValue = incomingObject[property];
    return (0,_wry_equality__WEBPACK_IMPORTED_MODULE_2__.equal)(existingValue, incomingValue) ? existingValue : incomingValue;
}
function supportsResultCaching(store) {
    return !!(store instanceof EntityStore && store.group.caching);
}
//# sourceMappingURL=entityStore.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/helpers.js":
/*!***************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/helpers.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasOwn": function() { return /* binding */ hasOwn; },
/* harmony export */   "getTypenameFromStoreObject": function() { return /* binding */ getTypenameFromStoreObject; },
/* harmony export */   "TypeOrFieldNameRegExp": function() { return /* binding */ TypeOrFieldNameRegExp; },
/* harmony export */   "fieldNameFromStoreName": function() { return /* binding */ fieldNameFromStoreName; },
/* harmony export */   "selectionSetMatchesResult": function() { return /* binding */ selectionSetMatchesResult; },
/* harmony export */   "storeValueIsStoreObject": function() { return /* binding */ storeValueIsStoreObject; },
/* harmony export */   "makeProcessedFieldsMerger": function() { return /* binding */ makeProcessedFieldsMerger; }
/* harmony export */ });
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");

var hasOwn = Object.prototype.hasOwnProperty;
function getTypenameFromStoreObject(store, objectOrReference) {
    return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__.isReference)(objectOrReference)
        ? store.get(objectOrReference.__ref, "__typename")
        : objectOrReference && objectOrReference.__typename;
}
var TypeOrFieldNameRegExp = /^[_a-z][_0-9a-z]*/i;
function fieldNameFromStoreName(storeFieldName) {
    var match = storeFieldName.match(TypeOrFieldNameRegExp);
    return match ? match[0] : storeFieldName;
}
function selectionSetMatchesResult(selectionSet, result, variables) {
    if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__.isNonNullObject)(result)) {
        return Array.isArray(result)
            ? result.every(function (item) { return selectionSetMatchesResult(selectionSet, item, variables); })
            : selectionSet.selections.every(function (field) {
                if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__.isField)(field) && (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__.shouldInclude)(field, variables)) {
                    var key = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__.resultKeyNameFromField)(field);
                    return hasOwn.call(result, key) &&
                        (!field.selectionSet ||
                            selectionSetMatchesResult(field.selectionSet, result[key], variables));
                }
                return true;
            });
    }
    return false;
}
function storeValueIsStoreObject(value) {
    return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__.isNonNullObject)(value) &&
        !(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__.isReference)(value) &&
        !Array.isArray(value);
}
function makeProcessedFieldsMerger() {
    return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__.DeepMerger;
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InMemoryCache": function() { return /* binding */ InMemoryCache; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! optimism */ "./node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _core_cache_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/cache.js */ "./node_modules/@apollo/client/cache/core/cache.js");
/* harmony import */ var _core_types_common_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/types/common.js */ "./node_modules/@apollo/client/cache/core/types/common.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _readFromStore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./readFromStore.js */ "./node_modules/@apollo/client/cache/inmemory/readFromStore.js");
/* harmony import */ var _writeToStore_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./writeToStore.js */ "./node_modules/@apollo/client/cache/inmemory/writeToStore.js");
/* harmony import */ var _entityStore_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entityStore.js */ "./node_modules/@apollo/client/cache/inmemory/entityStore.js");
/* harmony import */ var _reactiveVars_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reactiveVars.js */ "./node_modules/@apollo/client/cache/inmemory/reactiveVars.js");
/* harmony import */ var _policies_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./policies.js */ "./node_modules/@apollo/client/cache/inmemory/policies.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/cache/inmemory/helpers.js");
/* harmony import */ var _object_canon_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./object-canon.js */ "./node_modules/@apollo/client/cache/inmemory/object-canon.js");














var defaultConfig = {
    dataIdFromObject: _policies_js__WEBPACK_IMPORTED_MODULE_2__.defaultDataIdFromObject,
    addTypename: true,
    resultCaching: true,
    typePolicies: {},
};
var InMemoryCache = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(InMemoryCache, _super);
    function InMemoryCache(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this) || this;
        _this.watches = new Set();
        _this.typenameDocumentCache = new Map();
        _this.makeVar = _reactiveVars_js__WEBPACK_IMPORTED_MODULE_4__.makeVar;
        _this.txCount = 0;
        _this.config = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, defaultConfig), config);
        _this.addTypename = !!_this.config.addTypename;
        _this.policies = new _policies_js__WEBPACK_IMPORTED_MODULE_2__.Policies({
            cache: _this,
            dataIdFromObject: _this.config.dataIdFromObject,
            possibleTypes: _this.config.possibleTypes,
            typePolicies: _this.config.typePolicies,
        });
        _this.init();
        return _this;
    }
    InMemoryCache.prototype.init = function () {
        var rootStore = this.data = new _entityStore_js__WEBPACK_IMPORTED_MODULE_5__.EntityStore.Root({
            policies: this.policies,
            resultCaching: this.config.resultCaching,
        });
        this.optimisticData = rootStore.stump;
        this.resetResultCache();
    };
    InMemoryCache.prototype.resetResultCache = function (resetResultIdentities) {
        var _this = this;
        var previousReader = this.storeReader;
        this.storeWriter = new _writeToStore_js__WEBPACK_IMPORTED_MODULE_6__.StoreWriter(this, this.storeReader = new _readFromStore_js__WEBPACK_IMPORTED_MODULE_7__.StoreReader({
            cache: this,
            addTypename: this.addTypename,
            resultCacheMaxSize: this.config.resultCacheMaxSize,
            canon: resetResultIdentities
                ? void 0
                : previousReader && previousReader.canon,
        }));
        this.maybeBroadcastWatch = (0,optimism__WEBPACK_IMPORTED_MODULE_0__.wrap)(function (c, options) {
            return _this.broadcastWatch(c, options);
        }, {
            max: this.config.resultCacheMaxSize,
            makeCacheKey: function (c) {
                var store = c.optimistic ? _this.optimisticData : _this.data;
                if ((0,_entityStore_js__WEBPACK_IMPORTED_MODULE_5__.supportsResultCaching)(store)) {
                    var optimistic = c.optimistic, rootId = c.rootId, variables = c.variables;
                    return store.makeCacheKey(c.query, c.callback, (0,_object_canon_js__WEBPACK_IMPORTED_MODULE_8__.canonicalStringify)({ optimistic: optimistic, rootId: rootId, variables: variables }));
                }
            }
        });
        new Set([
            this.data.group,
            this.optimisticData.group,
        ]).forEach(function (group) { return group.resetCaching(); });
    };
    InMemoryCache.prototype.restore = function (data) {
        this.init();
        if (data)
            this.data.replace(data);
        return this;
    };
    InMemoryCache.prototype.extract = function (optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return (optimistic ? this.optimisticData : this.data).extract();
    };
    InMemoryCache.prototype.read = function (options) {
        var _a = options.returnPartialData, returnPartialData = _a === void 0 ? false : _a;
        try {
            return this.storeReader.diffQueryAgainstStore((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, options), { store: options.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: returnPartialData })).result || null;
        }
        catch (e) {
            if (e instanceof _core_types_common_js__WEBPACK_IMPORTED_MODULE_9__.MissingFieldError) {
                return null;
            }
            throw e;
        }
    };
    InMemoryCache.prototype.write = function (options) {
        try {
            ++this.txCount;
            return this.storeWriter.writeToStore(this.data, options);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.modify = function (options) {
        if (_helpers_js__WEBPACK_IMPORTED_MODULE_10__.hasOwn.call(options, "id") && !options.id) {
            return false;
        }
        var store = options.optimistic
            ? this.optimisticData
            : this.data;
        try {
            ++this.txCount;
            return store.modify(options.id || "ROOT_QUERY", options.fields);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.diff = function (options) {
        return this.storeReader.diffQueryAgainstStore((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, options), { store: options.optimistic ? this.optimisticData : this.data, rootId: options.id || "ROOT_QUERY", config: this.config }));
    };
    InMemoryCache.prototype.watch = function (watch) {
        var _this = this;
        if (!this.watches.size) {
            (0,_reactiveVars_js__WEBPACK_IMPORTED_MODULE_4__.recallCache)(this);
        }
        this.watches.add(watch);
        if (watch.immediate) {
            this.maybeBroadcastWatch(watch);
        }
        return function () {
            if (_this.watches.delete(watch) && !_this.watches.size) {
                (0,_reactiveVars_js__WEBPACK_IMPORTED_MODULE_4__.forgetCache)(_this);
            }
            _this.maybeBroadcastWatch.forget(watch);
        };
    };
    InMemoryCache.prototype.gc = function (options) {
        _object_canon_js__WEBPACK_IMPORTED_MODULE_8__.canonicalStringify.reset();
        var ids = this.optimisticData.gc();
        if (options && !this.txCount) {
            if (options.resetResultCache) {
                this.resetResultCache(options.resetResultIdentities);
            }
            else if (options.resetResultIdentities) {
                this.storeReader.resetCanon();
            }
        }
        return ids;
    };
    InMemoryCache.prototype.retain = function (rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).retain(rootId);
    };
    InMemoryCache.prototype.release = function (rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).release(rootId);
    };
    InMemoryCache.prototype.identify = function (object) {
        return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_11__.isReference)(object) ? object.__ref :
            this.policies.identify(object)[0];
    };
    InMemoryCache.prototype.evict = function (options) {
        if (!options.id) {
            if (_helpers_js__WEBPACK_IMPORTED_MODULE_10__.hasOwn.call(options, "id")) {
                return false;
            }
            options = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, options), { id: "ROOT_QUERY" });
        }
        try {
            ++this.txCount;
            return this.optimisticData.evict(options);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.reset = function () {
        this.init();
        this.broadcastWatches();
        _object_canon_js__WEBPACK_IMPORTED_MODULE_8__.canonicalStringify.reset();
        return Promise.resolve();
    };
    InMemoryCache.prototype.removeOptimistic = function (idToRemove) {
        var newOptimisticData = this.optimisticData.removeLayer(idToRemove);
        if (newOptimisticData !== this.optimisticData) {
            this.optimisticData = newOptimisticData;
            this.broadcastWatches();
        }
    };
    InMemoryCache.prototype.batch = function (options) {
        var _this = this;
        var update = options.update, _a = options.optimistic, optimistic = _a === void 0 ? true : _a, removeOptimistic = options.removeOptimistic, onWatchUpdated = options.onWatchUpdated;
        var perform = function (layer) {
            var _a = _this, data = _a.data, optimisticData = _a.optimisticData;
            ++_this.txCount;
            if (layer) {
                _this.data = _this.optimisticData = layer;
            }
            try {
                update(_this);
            }
            finally {
                --_this.txCount;
                _this.data = data;
                _this.optimisticData = optimisticData;
            }
        };
        var alreadyDirty = new Set();
        if (onWatchUpdated && !this.txCount) {
            this.broadcastWatches((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, options), { onWatchUpdated: function (watch) {
                    alreadyDirty.add(watch);
                    return false;
                } }));
        }
        if (typeof optimistic === 'string') {
            this.optimisticData = this.optimisticData.addLayer(optimistic, perform);
        }
        else if (optimistic === false) {
            perform(this.data);
        }
        else {
            perform();
        }
        if (typeof removeOptimistic === "string") {
            this.optimisticData = this.optimisticData.removeLayer(removeOptimistic);
        }
        if (onWatchUpdated && alreadyDirty.size) {
            this.broadcastWatches((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, options), { onWatchUpdated: function (watch, diff) {
                    var result = onWatchUpdated.call(this, watch, diff);
                    if (result !== false) {
                        alreadyDirty.delete(watch);
                    }
                    return result;
                } }));
            if (alreadyDirty.size) {
                alreadyDirty.forEach(function (watch) { return _this.maybeBroadcastWatch.dirty(watch); });
            }
        }
        else {
            this.broadcastWatches(options);
        }
    };
    InMemoryCache.prototype.performTransaction = function (update, optimisticId) {
        return this.batch({
            update: update,
            optimistic: optimisticId || (optimisticId !== null),
        });
    };
    InMemoryCache.prototype.transformDocument = function (document) {
        if (this.addTypename) {
            var result = this.typenameDocumentCache.get(document);
            if (!result) {
                result = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_11__.addTypenameToDocument)(document);
                this.typenameDocumentCache.set(document, result);
                this.typenameDocumentCache.set(result, result);
            }
            return result;
        }
        return document;
    };
    InMemoryCache.prototype.broadcastWatches = function (options) {
        var _this = this;
        if (!this.txCount) {
            this.watches.forEach(function (c) { return _this.maybeBroadcastWatch(c, options); });
        }
    };
    InMemoryCache.prototype.broadcastWatch = function (c, options) {
        var lastDiff = c.lastDiff;
        var diff = this.diff({
            query: c.query,
            variables: c.variables,
            optimistic: c.optimistic,
        });
        if (options) {
            if (c.optimistic &&
                typeof options.optimistic === "string") {
                diff.fromOptimisticTransaction = true;
            }
            if (options.onWatchUpdated &&
                options.onWatchUpdated.call(this, c, diff, lastDiff) === false) {
                return;
            }
        }
        if (!lastDiff || !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__.equal)(lastDiff.result, diff.result)) {
            c.callback(c.lastDiff = diff, lastDiff);
        }
    };
    return InMemoryCache;
}(_core_cache_js__WEBPACK_IMPORTED_MODULE_12__.ApolloCache));

//# sourceMappingURL=inMemoryCache.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/object-canon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/object-canon.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectCanon": function() { return /* binding */ ObjectCanon; },
/* harmony export */   "canonicalStringify": function() { return /* binding */ canonicalStringify; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _wry_trie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wry/trie */ "./node_modules/@wry/trie/lib/trie.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");



function shallowCopy(value) {
    if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.isNonNullObject)(value)) {
        return Array.isArray(value)
            ? value.slice(0)
            : (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ __proto__: Object.getPrototypeOf(value) }, value);
    }
    return value;
}
var ObjectCanon = (function () {
    function ObjectCanon() {
        this.known = new (_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.canUseWeakSet ? WeakSet : Set)();
        this.pool = new _wry_trie__WEBPACK_IMPORTED_MODULE_0__.Trie(_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.canUseWeakMap);
        this.passes = new WeakMap();
        this.keysByJSON = new Map();
        this.empty = this.admit({});
    }
    ObjectCanon.prototype.isKnown = function (value) {
        return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.isNonNullObject)(value) && this.known.has(value);
    };
    ObjectCanon.prototype.pass = function (value) {
        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.isNonNullObject)(value)) {
            var copy = shallowCopy(value);
            this.passes.set(copy, value);
            return copy;
        }
        return value;
    };
    ObjectCanon.prototype.admit = function (value) {
        var _this = this;
        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.isNonNullObject)(value)) {
            var original = this.passes.get(value);
            if (original)
                return original;
            var proto = Object.getPrototypeOf(value);
            switch (proto) {
                case Array.prototype: {
                    if (this.known.has(value))
                        return value;
                    var array = value.map(this.admit, this);
                    var node = this.pool.lookupArray(array);
                    if (!node.array) {
                        this.known.add(node.array = array);
                        if (__DEV__) {
                            Object.freeze(array);
                        }
                    }
                    return node.array;
                }
                case null:
                case Object.prototype: {
                    if (this.known.has(value))
                        return value;
                    var proto_1 = Object.getPrototypeOf(value);
                    var array_1 = [proto_1];
                    var keys = this.sortedKeys(value);
                    array_1.push(keys.json);
                    var firstValueIndex_1 = array_1.length;
                    keys.sorted.forEach(function (key) {
                        array_1.push(_this.admit(value[key]));
                    });
                    var node = this.pool.lookupArray(array_1);
                    if (!node.object) {
                        var obj_1 = node.object = Object.create(proto_1);
                        this.known.add(obj_1);
                        keys.sorted.forEach(function (key, i) {
                            obj_1[key] = array_1[firstValueIndex_1 + i];
                        });
                        if (__DEV__) {
                            Object.freeze(obj_1);
                        }
                    }
                    return node.object;
                }
            }
        }
        return value;
    };
    ObjectCanon.prototype.sortedKeys = function (obj) {
        var keys = Object.keys(obj);
        var node = this.pool.lookupArray(keys);
        if (!node.keys) {
            keys.sort();
            var json = JSON.stringify(keys);
            if (!(node.keys = this.keysByJSON.get(json))) {
                this.keysByJSON.set(json, node.keys = { sorted: keys, json: json });
            }
        }
        return node.keys;
    };
    return ObjectCanon;
}());

var canonicalStringify = Object.assign(function (value) {
    if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.isNonNullObject)(value)) {
        var canonical = stringifyCanon.admit(value);
        var json = stringifyCache.get(canonical);
        if (json === void 0) {
            stringifyCache.set(canonical, json = JSON.stringify(canonical));
        }
        return json;
    }
    return JSON.stringify(value);
}, {
    reset: function () {
        stringifyCanon = new ObjectCanon;
    },
});
var stringifyCanon = new ObjectCanon;
var stringifyCache = new WeakMap();
//# sourceMappingURL=object-canon.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/policies.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/policies.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultDataIdFromObject": function() { return /* binding */ defaultDataIdFromObject; },
/* harmony export */   "Policies": function() { return /* binding */ Policies; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _wry_trie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wry/trie */ "./node_modules/@wry/trie/lib/trie.esm.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/cache/inmemory/helpers.js");
/* harmony import */ var _reactiveVars_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reactiveVars.js */ "./node_modules/@apollo/client/cache/inmemory/reactiveVars.js");
/* harmony import */ var _object_canon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object-canon.js */ "./node_modules/@apollo/client/cache/inmemory/object-canon.js");







_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.getStoreKeyName.setStringify(_object_canon_js__WEBPACK_IMPORTED_MODULE_3__.canonicalStringify);
function argsFromFieldSpecifier(spec) {
    return spec.args !== void 0 ? spec.args :
        spec.field ? (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.argumentsObjectFromField)(spec.field, spec.variables) : null;
}
var defaultDataIdFromObject = function (_a, context) {
    var __typename = _a.__typename, id = _a.id, _id = _a._id;
    if (typeof __typename === "string") {
        if (context) {
            context.keyObject =
                id !== void 0 ? { id: id } :
                    _id !== void 0 ? { _id: _id } :
                        void 0;
        }
        if (id === void 0)
            id = _id;
        if (id !== void 0) {
            return __typename + ":" + ((typeof id === "number" ||
                typeof id === "string") ? id : JSON.stringify(id));
        }
    }
};
var nullKeyFieldsFn = function () { return void 0; };
var simpleKeyArgsFn = function (_args, context) { return context.fieldName; };
var mergeTrueFn = function (existing, incoming, _a) {
    var mergeObjects = _a.mergeObjects;
    return mergeObjects(existing, incoming);
};
var mergeFalseFn = function (_, incoming) { return incoming; };
var Policies = (function () {
    function Policies(config) {
        this.config = config;
        this.typePolicies = Object.create(null);
        this.toBeAdded = Object.create(null);
        this.supertypeMap = new Map();
        this.fuzzySubtypes = new Map();
        this.rootIdsByTypename = Object.create(null);
        this.rootTypenamesById = Object.create(null);
        this.usingPossibleTypes = false;
        this.config = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({ dataIdFromObject: defaultDataIdFromObject }, config);
        this.cache = this.config.cache;
        this.setRootTypename("Query");
        this.setRootTypename("Mutation");
        this.setRootTypename("Subscription");
        if (config.possibleTypes) {
            this.addPossibleTypes(config.possibleTypes);
        }
        if (config.typePolicies) {
            this.addTypePolicies(config.typePolicies);
        }
    }
    Policies.prototype.identify = function (object, selectionSet, fragmentMap) {
        var typename = selectionSet && fragmentMap
            ? (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.getTypenameFromResult)(object, selectionSet, fragmentMap)
            : object.__typename;
        if (typename === this.rootTypenamesById.ROOT_QUERY) {
            return ["ROOT_QUERY"];
        }
        var context = {
            typename: typename,
            selectionSet: selectionSet,
            fragmentMap: fragmentMap,
        };
        var id;
        var policy = typename && this.getTypePolicy(typename);
        var keyFn = policy && policy.keyFn || this.config.dataIdFromObject;
        while (keyFn) {
            var specifierOrId = keyFn(object, context);
            if (Array.isArray(specifierOrId)) {
                keyFn = keyFieldsFnFromSpecifier(specifierOrId);
            }
            else {
                id = specifierOrId;
                break;
            }
        }
        id = id ? String(id) : void 0;
        return context.keyObject ? [id, context.keyObject] : [id];
    };
    Policies.prototype.addTypePolicies = function (typePolicies) {
        var _this = this;
        Object.keys(typePolicies).forEach(function (typename) {
            var _a = typePolicies[typename], queryType = _a.queryType, mutationType = _a.mutationType, subscriptionType = _a.subscriptionType, incoming = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__rest)(_a, ["queryType", "mutationType", "subscriptionType"]);
            if (queryType)
                _this.setRootTypename("Query", typename);
            if (mutationType)
                _this.setRootTypename("Mutation", typename);
            if (subscriptionType)
                _this.setRootTypename("Subscription", typename);
            if (_helpers_js__WEBPACK_IMPORTED_MODULE_5__.hasOwn.call(_this.toBeAdded, typename)) {
                _this.toBeAdded[typename].push(incoming);
            }
            else {
                _this.toBeAdded[typename] = [incoming];
            }
        });
    };
    Policies.prototype.updateTypePolicy = function (typename, incoming) {
        var _this = this;
        var existing = this.getTypePolicy(typename);
        var keyFields = incoming.keyFields, fields = incoming.fields;
        function setMerge(existing, merge) {
            existing.merge =
                typeof merge === "function" ? merge :
                    merge === true ? mergeTrueFn :
                        merge === false ? mergeFalseFn :
                            existing.merge;
        }
        setMerge(existing, incoming.merge);
        existing.keyFn =
            keyFields === false ? nullKeyFieldsFn :
                Array.isArray(keyFields) ? keyFieldsFnFromSpecifier(keyFields) :
                    typeof keyFields === "function" ? keyFields :
                        existing.keyFn;
        if (fields) {
            Object.keys(fields).forEach(function (fieldName) {
                var existing = _this.getFieldPolicy(typename, fieldName, true);
                var incoming = fields[fieldName];
                if (typeof incoming === "function") {
                    existing.read = incoming;
                }
                else {
                    var keyArgs = incoming.keyArgs, read = incoming.read, merge = incoming.merge;
                    existing.keyFn =
                        keyArgs === false ? simpleKeyArgsFn :
                            Array.isArray(keyArgs) ? keyArgsFnFromSpecifier(keyArgs) :
                                typeof keyArgs === "function" ? keyArgs :
                                    existing.keyFn;
                    if (typeof read === "function") {
                        existing.read = read;
                    }
                    setMerge(existing, merge);
                }
                if (existing.read && existing.merge) {
                    existing.keyFn = existing.keyFn || simpleKeyArgsFn;
                }
            });
        }
    };
    Policies.prototype.setRootTypename = function (which, typename) {
        if (typename === void 0) { typename = which; }
        var rootId = "ROOT_" + which.toUpperCase();
        var old = this.rootTypenamesById[rootId];
        if (typename !== old) {
            __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(!old || old === which, "Cannot change root " + which + " __typename more than once") : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(!old || old === which, 3);
            if (old)
                delete this.rootIdsByTypename[old];
            this.rootIdsByTypename[typename] = rootId;
            this.rootTypenamesById[rootId] = typename;
        }
    };
    Policies.prototype.addPossibleTypes = function (possibleTypes) {
        var _this = this;
        this.usingPossibleTypes = true;
        Object.keys(possibleTypes).forEach(function (supertype) {
            _this.getSupertypeSet(supertype, true);
            possibleTypes[supertype].forEach(function (subtype) {
                _this.getSupertypeSet(subtype, true).add(supertype);
                var match = subtype.match(_helpers_js__WEBPACK_IMPORTED_MODULE_5__.TypeOrFieldNameRegExp);
                if (!match || match[0] !== subtype) {
                    _this.fuzzySubtypes.set(subtype, new RegExp(subtype));
                }
            });
        });
    };
    Policies.prototype.getTypePolicy = function (typename) {
        var _this = this;
        if (!_helpers_js__WEBPACK_IMPORTED_MODULE_5__.hasOwn.call(this.typePolicies, typename)) {
            var policy_1 = this.typePolicies[typename] = Object.create(null);
            policy_1.fields = Object.create(null);
            var supertypes = this.supertypeMap.get(typename);
            if (supertypes && supertypes.size) {
                supertypes.forEach(function (supertype) {
                    var _a = _this.getTypePolicy(supertype), fields = _a.fields, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__rest)(_a, ["fields"]);
                    Object.assign(policy_1, rest);
                    Object.assign(policy_1.fields, fields);
                });
            }
        }
        var inbox = this.toBeAdded[typename];
        if (inbox && inbox.length) {
            inbox.splice(0).forEach(function (policy) {
                _this.updateTypePolicy(typename, policy);
            });
        }
        return this.typePolicies[typename];
    };
    Policies.prototype.getFieldPolicy = function (typename, fieldName, createIfMissing) {
        if (typename) {
            var fieldPolicies = this.getTypePolicy(typename).fields;
            return fieldPolicies[fieldName] || (createIfMissing && (fieldPolicies[fieldName] = Object.create(null)));
        }
    };
    Policies.prototype.getSupertypeSet = function (subtype, createIfMissing) {
        var supertypeSet = this.supertypeMap.get(subtype);
        if (!supertypeSet && createIfMissing) {
            this.supertypeMap.set(subtype, supertypeSet = new Set());
        }
        return supertypeSet;
    };
    Policies.prototype.fragmentMatches = function (fragment, typename, result, variables) {
        var _this = this;
        if (!fragment.typeCondition)
            return true;
        if (!typename)
            return false;
        var supertype = fragment.typeCondition.name.value;
        if (typename === supertype)
            return true;
        if (this.usingPossibleTypes &&
            this.supertypeMap.has(supertype)) {
            var typenameSupertypeSet = this.getSupertypeSet(typename, true);
            var workQueue_1 = [typenameSupertypeSet];
            var maybeEnqueue_1 = function (subtype) {
                var supertypeSet = _this.getSupertypeSet(subtype, false);
                if (supertypeSet &&
                    supertypeSet.size &&
                    workQueue_1.indexOf(supertypeSet) < 0) {
                    workQueue_1.push(supertypeSet);
                }
            };
            var needToCheckFuzzySubtypes = !!(result && this.fuzzySubtypes.size);
            var checkingFuzzySubtypes = false;
            for (var i = 0; i < workQueue_1.length; ++i) {
                var supertypeSet = workQueue_1[i];
                if (supertypeSet.has(supertype)) {
                    if (!typenameSupertypeSet.has(supertype)) {
                        if (checkingFuzzySubtypes) {
                            __DEV__ && ts_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant.warn("Inferring subtype " + typename + " of supertype " + supertype);
                        }
                        typenameSupertypeSet.add(supertype);
                    }
                    return true;
                }
                supertypeSet.forEach(maybeEnqueue_1);
                if (needToCheckFuzzySubtypes &&
                    i === workQueue_1.length - 1 &&
                    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.selectionSetMatchesResult)(fragment.selectionSet, result, variables)) {
                    needToCheckFuzzySubtypes = false;
                    checkingFuzzySubtypes = true;
                    this.fuzzySubtypes.forEach(function (regExp, fuzzyString) {
                        var match = typename.match(regExp);
                        if (match && match[0] === typename) {
                            maybeEnqueue_1(fuzzyString);
                        }
                    });
                }
            }
        }
        return false;
    };
    Policies.prototype.hasKeyArgs = function (typename, fieldName) {
        var policy = this.getFieldPolicy(typename, fieldName, false);
        return !!(policy && policy.keyFn);
    };
    Policies.prototype.getStoreFieldName = function (fieldSpec) {
        var typename = fieldSpec.typename, fieldName = fieldSpec.fieldName;
        var policy = this.getFieldPolicy(typename, fieldName, false);
        var storeFieldName;
        var keyFn = policy && policy.keyFn;
        if (keyFn && typename) {
            var context = {
                typename: typename,
                fieldName: fieldName,
                field: fieldSpec.field || null,
                variables: fieldSpec.variables,
            };
            var args = argsFromFieldSpecifier(fieldSpec);
            while (keyFn) {
                var specifierOrString = keyFn(args, context);
                if (Array.isArray(specifierOrString)) {
                    keyFn = keyArgsFnFromSpecifier(specifierOrString);
                }
                else {
                    storeFieldName = specifierOrString || fieldName;
                    break;
                }
            }
        }
        if (storeFieldName === void 0) {
            storeFieldName = fieldSpec.field
                ? (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.storeKeyNameFromField)(fieldSpec.field, fieldSpec.variables)
                : (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.getStoreKeyName)(fieldName, argsFromFieldSpecifier(fieldSpec));
        }
        if (storeFieldName === false) {
            return fieldName;
        }
        return fieldName === (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.fieldNameFromStoreName)(storeFieldName)
            ? storeFieldName
            : fieldName + ":" + storeFieldName;
    };
    Policies.prototype.readField = function (options, context) {
        var objectOrReference = options.from;
        if (!objectOrReference)
            return;
        var nameOrField = options.field || options.fieldName;
        if (!nameOrField)
            return;
        if (options.typename === void 0) {
            var typename = context.store.getFieldValue(objectOrReference, "__typename");
            if (typename)
                options.typename = typename;
        }
        var storeFieldName = this.getStoreFieldName(options);
        var fieldName = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.fieldNameFromStoreName)(storeFieldName);
        var existing = context.store.getFieldValue(objectOrReference, storeFieldName);
        var policy = this.getFieldPolicy(options.typename, fieldName, false);
        var read = policy && policy.read;
        if (read) {
            var readOptions = makeFieldFunctionOptions(this, objectOrReference, options, context, context.store.getStorage((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isReference)(objectOrReference)
                ? objectOrReference.__ref
                : objectOrReference, storeFieldName));
            return _reactiveVars_js__WEBPACK_IMPORTED_MODULE_6__.cacheSlot.withValue(this.cache, read, [existing, readOptions]);
        }
        return existing;
    };
    Policies.prototype.getMergeFunction = function (parentTypename, fieldName, childTypename) {
        var policy = this.getFieldPolicy(parentTypename, fieldName, false);
        var merge = policy && policy.merge;
        if (!merge && childTypename) {
            policy = this.getTypePolicy(childTypename);
            merge = policy && policy.merge;
        }
        return merge;
    };
    Policies.prototype.runMergeFunction = function (existing, incoming, _a, context, storage) {
        var field = _a.field, typename = _a.typename, merge = _a.merge;
        if (merge === mergeTrueFn) {
            return makeMergeObjectsFunction(context.store)(existing, incoming);
        }
        if (merge === mergeFalseFn) {
            return incoming;
        }
        if (context.overwrite) {
            existing = void 0;
        }
        return merge(existing, incoming, makeFieldFunctionOptions(this, void 0, { typename: typename, fieldName: field.name.value, field: field, variables: context.variables }, context, storage || Object.create(null)));
    };
    return Policies;
}());

function makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage) {
    var storeFieldName = policies.getStoreFieldName(fieldSpec);
    var fieldName = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.fieldNameFromStoreName)(storeFieldName);
    var variables = fieldSpec.variables || context.variables;
    var _a = context.store, toReference = _a.toReference, canRead = _a.canRead;
    return {
        args: argsFromFieldSpecifier(fieldSpec),
        field: fieldSpec.field || null,
        fieldName: fieldName,
        storeFieldName: storeFieldName,
        variables: variables,
        isReference: _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isReference,
        toReference: toReference,
        storage: storage,
        cache: policies.cache,
        canRead: canRead,
        readField: function (fieldNameOrOptions, from) {
            var options;
            if (typeof fieldNameOrOptions === "string") {
                options = {
                    fieldName: fieldNameOrOptions,
                    from: arguments.length > 1 ? from : objectOrReference,
                };
            }
            else if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isNonNullObject)(fieldNameOrOptions)) {
                options = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, fieldNameOrOptions);
                if (!_helpers_js__WEBPACK_IMPORTED_MODULE_5__.hasOwn.call(fieldNameOrOptions, "from")) {
                    options.from = objectOrReference;
                }
            }
            else {
                __DEV__ && ts_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant.warn("Unexpected readField arguments: " + (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.stringifyForDisplay)(Array.from(arguments)));
                return;
            }
            if (__DEV__ && options.from === void 0) {
                __DEV__ && ts_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant.warn("Undefined 'from' passed to readField with arguments " + (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.stringifyForDisplay)(Array.from(arguments)));
            }
            if (void 0 === options.variables) {
                options.variables = variables;
            }
            return policies.readField(options, context);
        },
        mergeObjects: makeMergeObjectsFunction(context.store),
    };
}
function makeMergeObjectsFunction(store) {
    return function mergeObjects(existing, incoming) {
        if (Array.isArray(existing) || Array.isArray(incoming)) {
            throw __DEV__ ? new ts_invariant__WEBPACK_IMPORTED_MODULE_1__.InvariantError("Cannot automatically merge arrays") : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__.InvariantError(4);
        }
        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isNonNullObject)(existing) &&
            (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isNonNullObject)(incoming)) {
            var eType = store.getFieldValue(existing, "__typename");
            var iType = store.getFieldValue(incoming, "__typename");
            var typesDiffer = eType && iType && eType !== iType;
            if (typesDiffer) {
                return incoming;
            }
            if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isReference)(existing) &&
                (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.storeValueIsStoreObject)(incoming)) {
                store.merge(existing.__ref, incoming);
                return existing;
            }
            if ((0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.storeValueIsStoreObject)(existing) &&
                (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isReference)(incoming)) {
                store.merge(existing, incoming.__ref);
                return incoming;
            }
            if ((0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.storeValueIsStoreObject)(existing) &&
                (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.storeValueIsStoreObject)(incoming)) {
                return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, existing), incoming);
            }
        }
        return incoming;
    };
}
function keyArgsFnFromSpecifier(specifier) {
    return function (args, context) {
        return args ? context.fieldName + ":" + JSON.stringify(computeKeyObject(args, specifier, false)) : context.fieldName;
    };
}
function keyFieldsFnFromSpecifier(specifier) {
    var trie = new _wry_trie__WEBPACK_IMPORTED_MODULE_0__.Trie(_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.canUseWeakMap);
    return function (object, context) {
        var aliasMap;
        if (context.selectionSet && context.fragmentMap) {
            var info = trie.lookupArray([
                context.selectionSet,
                context.fragmentMap,
            ]);
            aliasMap = info.aliasMap || (info.aliasMap = makeAliasMap(context.selectionSet, context.fragmentMap));
        }
        var keyObject = context.keyObject =
            computeKeyObject(object, specifier, true, aliasMap);
        return context.typename + ":" + JSON.stringify(keyObject);
    };
}
function makeAliasMap(selectionSet, fragmentMap) {
    var map = Object.create(null);
    var workQueue = new Set([selectionSet]);
    workQueue.forEach(function (selectionSet) {
        selectionSet.selections.forEach(function (selection) {
            if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isField)(selection)) {
                if (selection.alias) {
                    var responseKey = selection.alias.value;
                    var storeKey = selection.name.value;
                    if (storeKey !== responseKey) {
                        var aliases = map.aliases || (map.aliases = Object.create(null));
                        aliases[storeKey] = responseKey;
                    }
                }
                if (selection.selectionSet) {
                    var subsets = map.subsets || (map.subsets = Object.create(null));
                    subsets[selection.name.value] =
                        makeAliasMap(selection.selectionSet, fragmentMap);
                }
            }
            else {
                var fragment = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.getFragmentFromSelection)(selection, fragmentMap);
                if (fragment) {
                    workQueue.add(fragment.selectionSet);
                }
            }
        });
    });
    return map;
}
function computeKeyObject(response, specifier, strict, aliasMap) {
    var keyObj = Object.create(null);
    var prevKey;
    specifier.forEach(function (s) {
        if (Array.isArray(s)) {
            if (typeof prevKey === "string") {
                var subsets = aliasMap && aliasMap.subsets;
                var subset = subsets && subsets[prevKey];
                keyObj[prevKey] = computeKeyObject(response[prevKey], s, strict, subset);
            }
        }
        else {
            var aliases = aliasMap && aliasMap.aliases;
            var responseName = aliases && aliases[s] || s;
            if (_helpers_js__WEBPACK_IMPORTED_MODULE_5__.hasOwn.call(response, responseName)) {
                keyObj[prevKey = s] = response[responseName];
            }
            else {
                __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(!strict, "Missing field '" + responseName + "' while computing key fields") : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(!strict, 5);
                prevKey = void 0;
            }
        }
    });
    return keyObj;
}
//# sourceMappingURL=policies.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/reactiveVars.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/reactiveVars.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheSlot": function() { return /* binding */ cacheSlot; },
/* harmony export */   "forgetCache": function() { return /* binding */ forgetCache; },
/* harmony export */   "recallCache": function() { return /* binding */ recallCache; },
/* harmony export */   "makeVar": function() { return /* binding */ makeVar; }
/* harmony export */ });
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! optimism */ "./node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var _wry_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/context */ "./node_modules/@wry/context/lib/context.esm.js");


var cacheSlot = new _wry_context__WEBPACK_IMPORTED_MODULE_1__.Slot();
var cacheInfoMap = new WeakMap();
function getCacheInfo(cache) {
    var info = cacheInfoMap.get(cache);
    if (!info) {
        cacheInfoMap.set(cache, info = {
            vars: new Set,
            dep: (0,optimism__WEBPACK_IMPORTED_MODULE_0__.dep)(),
        });
    }
    return info;
}
function forgetCache(cache) {
    getCacheInfo(cache).vars.forEach(function (rv) { return rv.forgetCache(cache); });
}
function recallCache(cache) {
    getCacheInfo(cache).vars.forEach(function (rv) { return rv.attachCache(cache); });
}
function makeVar(value) {
    var caches = new Set();
    var listeners = new Set();
    var rv = function (newValue) {
        if (arguments.length > 0) {
            if (value !== newValue) {
                value = newValue;
                caches.forEach(function (cache) {
                    getCacheInfo(cache).dep.dirty(rv);
                    broadcast(cache);
                });
                var oldListeners = Array.from(listeners);
                listeners.clear();
                oldListeners.forEach(function (listener) { return listener(value); });
            }
        }
        else {
            var cache = cacheSlot.getValue();
            if (cache) {
                attach(cache);
                getCacheInfo(cache).dep(rv);
            }
        }
        return value;
    };
    rv.onNextChange = function (listener) {
        listeners.add(listener);
        return function () {
            listeners.delete(listener);
        };
    };
    var attach = rv.attachCache = function (cache) {
        caches.add(cache);
        getCacheInfo(cache).vars.add(rv);
        return rv;
    };
    rv.forgetCache = function (cache) { return caches.delete(cache); };
    return rv;
}
function broadcast(cache) {
    if (cache.broadcastWatches) {
        cache.broadcastWatches();
    }
}
//# sourceMappingURL=reactiveVars.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/readFromStore.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/readFromStore.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreReader": function() { return /* binding */ StoreReader; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! optimism */ "./node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _entityStore_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entityStore.js */ "./node_modules/@apollo/client/cache/inmemory/entityStore.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/cache/inmemory/helpers.js");
/* harmony import */ var _core_types_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/types/common.js */ "./node_modules/@apollo/client/cache/core/types/common.js");
/* harmony import */ var _object_canon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object-canon.js */ "./node_modules/@apollo/client/cache/inmemory/object-canon.js");








;
function missingFromInvariant(err, context) {
    return new _core_types_common_js__WEBPACK_IMPORTED_MODULE_2__.MissingFieldError(err.message, context.path.slice(), context.query, context.variables);
}
function execSelectionSetKeyArgs(options) {
    return [
        options.selectionSet,
        options.objectOrReference,
        options.context,
        options.context.canonizeResults,
    ];
}
var StoreReader = (function () {
    function StoreReader(config) {
        var _this = this;
        this.knownResults = new (_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.canUseWeakMap ? WeakMap : Map)();
        this.config = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, config), { addTypename: config.addTypename !== false });
        this.canon = config.canon || new _object_canon_js__WEBPACK_IMPORTED_MODULE_5__.ObjectCanon;
        this.executeSelectionSet = (0,optimism__WEBPACK_IMPORTED_MODULE_0__.wrap)(function (options) {
            var _a;
            var canonizeResults = options.context.canonizeResults;
            var peekArgs = execSelectionSetKeyArgs(options);
            peekArgs[3] = !canonizeResults;
            var other = (_a = _this.executeSelectionSet).peek.apply(_a, peekArgs);
            if (other) {
                if (canonizeResults) {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, other), { result: _this.canon.admit(other.result) });
                }
                return other;
            }
            (0,_entityStore_js__WEBPACK_IMPORTED_MODULE_6__.maybeDependOnExistenceOfEntity)(options.context.store, options.enclosingRef.__ref);
            return _this.execSelectionSetImpl(options);
        }, {
            max: this.config.resultCacheMaxSize,
            keyArgs: execSelectionSetKeyArgs,
            makeCacheKey: function (selectionSet, parent, context, canonizeResults) {
                if ((0,_entityStore_js__WEBPACK_IMPORTED_MODULE_6__.supportsResultCaching)(context.store)) {
                    return context.store.makeCacheKey(selectionSet, (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.isReference)(parent) ? parent.__ref : parent, context.varString, canonizeResults);
                }
            }
        });
        this.executeSubSelectedArray = (0,optimism__WEBPACK_IMPORTED_MODULE_0__.wrap)(function (options) {
            (0,_entityStore_js__WEBPACK_IMPORTED_MODULE_6__.maybeDependOnExistenceOfEntity)(options.context.store, options.enclosingRef.__ref);
            return _this.execSubSelectedArrayImpl(options);
        }, {
            max: this.config.resultCacheMaxSize,
            makeCacheKey: function (_a) {
                var field = _a.field, array = _a.array, context = _a.context;
                if ((0,_entityStore_js__WEBPACK_IMPORTED_MODULE_6__.supportsResultCaching)(context.store)) {
                    return context.store.makeCacheKey(field, array, context.varString);
                }
            }
        });
    }
    StoreReader.prototype.resetCanon = function () {
        this.canon = new _object_canon_js__WEBPACK_IMPORTED_MODULE_5__.ObjectCanon;
    };
    StoreReader.prototype.diffQueryAgainstStore = function (_a) {
        var store = _a.store, query = _a.query, _b = _a.rootId, rootId = _b === void 0 ? 'ROOT_QUERY' : _b, variables = _a.variables, _c = _a.returnPartialData, returnPartialData = _c === void 0 ? true : _c, _d = _a.canonizeResults, canonizeResults = _d === void 0 ? true : _d;
        var policies = this.config.cache.policies;
        variables = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.getDefaultValues)((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.getQueryDefinition)(query))), variables);
        var rootRef = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.makeReference)(rootId);
        var execResult = this.executeSelectionSet({
            selectionSet: (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.getMainDefinition)(query).selectionSet,
            objectOrReference: rootRef,
            enclosingRef: rootRef,
            context: {
                store: store,
                query: query,
                policies: policies,
                variables: variables,
                varString: (0,_object_canon_js__WEBPACK_IMPORTED_MODULE_5__.canonicalStringify)(variables),
                canonizeResults: canonizeResults,
                fragmentMap: (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.createFragmentMap)((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.getFragmentDefinitions)(query)),
                path: [],
            },
        });
        var hasMissingFields = execResult.missing && execResult.missing.length > 0;
        if (hasMissingFields && !returnPartialData) {
            throw execResult.missing[0];
        }
        return {
            result: execResult.result,
            missing: execResult.missing,
            complete: !hasMissingFields,
        };
    };
    StoreReader.prototype.isFresh = function (result, parent, selectionSet, context) {
        if ((0,_entityStore_js__WEBPACK_IMPORTED_MODULE_6__.supportsResultCaching)(context.store) &&
            this.knownResults.get(result) === selectionSet) {
            var latest = this.executeSelectionSet.peek(selectionSet, parent, context, this.canon.isKnown(result));
            if (latest && result === latest.result) {
                return true;
            }
        }
        return false;
    };
    StoreReader.prototype.execSelectionSetImpl = function (_a) {
        var _this = this;
        var selectionSet = _a.selectionSet, objectOrReference = _a.objectOrReference, enclosingRef = _a.enclosingRef, context = _a.context;
        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.isReference)(objectOrReference) &&
            !context.policies.rootTypenamesById[objectOrReference.__ref] &&
            !context.store.has(objectOrReference.__ref)) {
            return {
                result: this.canon.empty,
                missing: [missingFromInvariant(__DEV__ ? new ts_invariant__WEBPACK_IMPORTED_MODULE_1__.InvariantError("Dangling reference to missing " + objectOrReference.__ref + " object") : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__.InvariantError(6), context)],
            };
        }
        var variables = context.variables, policies = context.policies, store = context.store;
        var objectsToMerge = [];
        var finalResult = { result: null };
        var typename = store.getFieldValue(objectOrReference, "__typename");
        if (this.config.addTypename &&
            typeof typename === "string" &&
            !policies.rootIdsByTypename[typename]) {
            objectsToMerge.push({ __typename: typename });
        }
        function getMissing() {
            return finalResult.missing || (finalResult.missing = []);
        }
        function handleMissing(result) {
            var _a;
            if (result.missing)
                (_a = getMissing()).push.apply(_a, result.missing);
            return result.result;
        }
        var workSet = new Set(selectionSet.selections);
        workSet.forEach(function (selection) {
            var _a;
            if (!(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.shouldInclude)(selection, variables))
                return;
            if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.isField)(selection)) {
                var fieldValue = policies.readField({
                    fieldName: selection.name.value,
                    field: selection,
                    variables: context.variables,
                    from: objectOrReference,
                }, context);
                var resultName = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.resultKeyNameFromField)(selection);
                context.path.push(resultName);
                if (fieldValue === void 0) {
                    if (!_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.addTypenameToDocument.added(selection)) {
                        getMissing().push(missingFromInvariant(__DEV__ ? new ts_invariant__WEBPACK_IMPORTED_MODULE_1__.InvariantError("Can't find field '" + selection.name.value + "' on " + ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.isReference)(objectOrReference)
                            ? objectOrReference.__ref + " object"
                            : "object " + JSON.stringify(objectOrReference, null, 2))) : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__.InvariantError(7), context));
                    }
                }
                else if (Array.isArray(fieldValue)) {
                    fieldValue = handleMissing(_this.executeSubSelectedArray({
                        field: selection,
                        array: fieldValue,
                        enclosingRef: enclosingRef,
                        context: context,
                    }));
                }
                else if (!selection.selectionSet) {
                    if (context.canonizeResults) {
                        fieldValue = _this.canon.pass(fieldValue);
                    }
                }
                else if (fieldValue != null) {
                    fieldValue = handleMissing(_this.executeSelectionSet({
                        selectionSet: selection.selectionSet,
                        objectOrReference: fieldValue,
                        enclosingRef: (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.isReference)(fieldValue) ? fieldValue : enclosingRef,
                        context: context,
                    }));
                }
                if (fieldValue !== void 0) {
                    objectsToMerge.push((_a = {}, _a[resultName] = fieldValue, _a));
                }
                (0,ts_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(context.path.pop() === resultName);
            }
            else {
                var fragment = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.getFragmentFromSelection)(selection, context.fragmentMap);
                if (fragment && policies.fragmentMatches(fragment, typename)) {
                    fragment.selectionSet.selections.forEach(workSet.add, workSet);
                }
            }
        });
        var merged = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.mergeDeepArray)(objectsToMerge);
        finalResult.result = context.canonizeResults
            ? this.canon.admit(merged)
            : (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.maybeDeepFreeze)(merged);
        this.knownResults.set(finalResult.result, selectionSet);
        return finalResult;
    };
    StoreReader.prototype.execSubSelectedArrayImpl = function (_a) {
        var _this = this;
        var field = _a.field, array = _a.array, enclosingRef = _a.enclosingRef, context = _a.context;
        var missing;
        function handleMissing(childResult, i) {
            if (childResult.missing) {
                missing = missing || [];
                missing.push.apply(missing, childResult.missing);
            }
            (0,ts_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(context.path.pop() === i);
            return childResult.result;
        }
        if (field.selectionSet) {
            array = array.filter(context.store.canRead);
        }
        array = array.map(function (item, i) {
            if (item === null) {
                return null;
            }
            context.path.push(i);
            if (Array.isArray(item)) {
                return handleMissing(_this.executeSubSelectedArray({
                    field: field,
                    array: item,
                    enclosingRef: enclosingRef,
                    context: context,
                }), i);
            }
            if (field.selectionSet) {
                return handleMissing(_this.executeSelectionSet({
                    selectionSet: field.selectionSet,
                    objectOrReference: item,
                    enclosingRef: (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.isReference)(item) ? item : enclosingRef,
                    context: context,
                }), i);
            }
            if (__DEV__) {
                assertSelectionSetForIdValue(context.store, field, item);
            }
            (0,ts_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(context.path.pop() === i);
            return item;
        });
        return {
            result: context.canonizeResults ? this.canon.admit(array) : array,
            missing: missing,
        };
    };
    return StoreReader;
}());

function assertSelectionSetForIdValue(store, field, fieldValue) {
    if (!field.selectionSet) {
        var workSet_1 = new Set([fieldValue]);
        workSet_1.forEach(function (value) {
            if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.isNonNullObject)(value)) {
                __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(!(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.isReference)(value), "Missing selection set for object of type " + (0,_helpers_js__WEBPACK_IMPORTED_MODULE_7__.getTypenameFromStoreObject)(store, value) + " returned for query field " + field.name.value) : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(!(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.isReference)(value), 8);
                Object.values(value).forEach(workSet_1.add, workSet_1);
            }
        });
    }
}
//# sourceMappingURL=readFromStore.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/types.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/types.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
;
;

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/writeToStore.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/writeToStore.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreWriter": function() { return /* binding */ StoreWriter; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/cache/inmemory/helpers.js");
/* harmony import */ var _object_canon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object-canon.js */ "./node_modules/@apollo/client/cache/inmemory/object-canon.js");






;
var StoreWriter = (function () {
    function StoreWriter(cache, reader) {
        this.cache = cache;
        this.reader = reader;
    }
    StoreWriter.prototype.writeToStore = function (store, _a) {
        var _this = this;
        var query = _a.query, result = _a.result, dataId = _a.dataId, variables = _a.variables, overwrite = _a.overwrite;
        var operationDefinition = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.getOperationDefinition)(query);
        var merger = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_3__.makeProcessedFieldsMerger)();
        variables = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultValues)(operationDefinition)), variables);
        var context = {
            store: store,
            written: Object.create(null),
            merge: function (existing, incoming) {
                return merger.merge(existing, incoming);
            },
            variables: variables,
            varString: (0,_object_canon_js__WEBPACK_IMPORTED_MODULE_5__.canonicalStringify)(variables),
            fragmentMap: (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.createFragmentMap)((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.getFragmentDefinitions)(query)),
            overwrite: !!overwrite,
            incomingById: new Map,
            clientOnly: false,
        };
        var ref = this.processSelectionSet({
            result: result || Object.create(null),
            dataId: dataId,
            selectionSet: operationDefinition.selectionSet,
            mergeTree: { map: new Map },
            context: context,
        });
        if (!(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isReference)(ref)) {
            throw __DEV__ ? new ts_invariant__WEBPACK_IMPORTED_MODULE_0__.InvariantError("Could not identify object " + JSON.stringify(result)) : new ts_invariant__WEBPACK_IMPORTED_MODULE_0__.InvariantError(9);
        }
        context.incomingById.forEach(function (_a, dataId) {
            var fields = _a.fields, mergeTree = _a.mergeTree, selections = _a.selections;
            var entityRef = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.makeReference)(dataId);
            if (mergeTree.map.size) {
                var applied = _this.applyMerges(mergeTree, entityRef, fields, context);
                if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isReference)(applied)) {
                    return;
                }
                fields = applied;
            }
            if (__DEV__ && !context.overwrite) {
                var hasSelectionSet_1 = function (storeFieldName) {
                    return fieldsWithSelectionSets_1.has((0,_helpers_js__WEBPACK_IMPORTED_MODULE_3__.fieldNameFromStoreName)(storeFieldName));
                };
                var fieldsWithSelectionSets_1 = new Set();
                selections.forEach(function (selection) {
                    if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isField)(selection) && selection.selectionSet) {
                        fieldsWithSelectionSets_1.add(selection.name.value);
                    }
                });
                var hasMergeFunction_1 = function (storeFieldName) {
                    var childTree = mergeTree.map.get(storeFieldName);
                    return Boolean(childTree && childTree.info && childTree.info.merge);
                };
                Object.keys(fields).forEach(function (storeFieldName) {
                    if (hasSelectionSet_1(storeFieldName) &&
                        !hasMergeFunction_1(storeFieldName)) {
                        warnAboutDataLoss(entityRef, fields, storeFieldName, context.store);
                    }
                });
            }
            store.merge(dataId, fields);
        });
        store.retain(ref.__ref);
        return ref;
    };
    StoreWriter.prototype.processSelectionSet = function (_a) {
        var _this = this;
        var dataId = _a.dataId, result = _a.result, selectionSet = _a.selectionSet, context = _a.context, mergeTree = _a.mergeTree;
        var policies = this.cache.policies;
        var _b = policies.identify(result, selectionSet, context.fragmentMap), id = _b[0], keyObject = _b[1];
        dataId = dataId || id;
        if ("string" === typeof dataId) {
            var sets = context.written[dataId] || (context.written[dataId] = []);
            var ref = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.makeReference)(dataId);
            if (sets.indexOf(selectionSet) >= 0)
                return ref;
            sets.push(selectionSet);
            if (this.reader && this.reader.isFresh(result, ref, selectionSet, context)) {
                return ref;
            }
        }
        var incomingFields = Object.create(null);
        if (keyObject) {
            incomingFields = context.merge(incomingFields, keyObject);
        }
        var typename = (dataId && policies.rootTypenamesById[dataId]) ||
            (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.getTypenameFromResult)(result, selectionSet, context.fragmentMap) ||
            (dataId && context.store.get(dataId, "__typename"));
        if ("string" === typeof typename) {
            incomingFields.__typename = typename;
        }
        var selections = new Set(selectionSet.selections);
        selections.forEach(function (selection) {
            var _a;
            if (!(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.shouldInclude)(selection, context.variables))
                return;
            if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isField)(selection)) {
                var resultFieldKey = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.resultKeyNameFromField)(selection);
                var value = result[resultFieldKey];
                var wasClientOnly = context.clientOnly;
                context.clientOnly = wasClientOnly || !!(selection.directives &&
                    selection.directives.some(function (d) { return d.name.value === "client"; }));
                if (value !== void 0) {
                    var storeFieldName = policies.getStoreFieldName({
                        typename: typename,
                        fieldName: selection.name.value,
                        field: selection,
                        variables: context.variables,
                    });
                    var childTree = getChildMergeTree(mergeTree, storeFieldName);
                    var incomingValue = _this.processFieldValue(value, selection, context, childTree);
                    var childTypename = void 0;
                    if (selection.selectionSet) {
                        childTypename = context.store.getFieldValue(incomingValue, "__typename");
                        if (!childTypename && (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isReference)(incomingValue)) {
                            var info = context.incomingById.get(incomingValue.__ref);
                            childTypename = info && info.fields.__typename;
                        }
                    }
                    var merge = policies.getMergeFunction(typename, selection.name.value, childTypename);
                    if (merge) {
                        childTree.info = {
                            field: selection,
                            typename: typename,
                            merge: merge,
                        };
                    }
                    else {
                        maybeRecycleChildMergeTree(mergeTree, storeFieldName);
                    }
                    incomingFields = context.merge(incomingFields, (_a = {},
                        _a[storeFieldName] = incomingValue,
                        _a));
                }
                else if (!context.clientOnly &&
                    !_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.addTypenameToDocument.added(selection)) {
                    __DEV__ && ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant.error(("Missing field '" + (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.resultKeyNameFromField)(selection) + "' while writing result " + JSON.stringify(result, null, 2)).substring(0, 1000));
                }
                context.clientOnly = wasClientOnly;
            }
            else {
                var fragment = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.getFragmentFromSelection)(selection, context.fragmentMap);
                if (fragment &&
                    policies.fragmentMatches(fragment, typename, result, context.variables)) {
                    fragment.selectionSet.selections.forEach(selections.add, selections);
                }
            }
        });
        if ("string" === typeof dataId) {
            var previous = context.incomingById.get(dataId);
            if (previous) {
                previous.fields = context.merge(previous.fields, incomingFields);
                previous.mergeTree = mergeMergeTrees(previous.mergeTree, mergeTree);
                previous.selections.forEach(selections.add, selections);
                previous.selections = selections;
            }
            else {
                context.incomingById.set(dataId, {
                    fields: incomingFields,
                    mergeTree: mergeTree,
                    selections: selections,
                });
            }
            return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.makeReference)(dataId);
        }
        return incomingFields;
    };
    StoreWriter.prototype.processFieldValue = function (value, field, context, mergeTree) {
        var _this = this;
        if (!field.selectionSet || value === null) {
            return __DEV__ ? (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(value) : value;
        }
        if (Array.isArray(value)) {
            return value.map(function (item, i) {
                var value = _this.processFieldValue(item, field, context, getChildMergeTree(mergeTree, i));
                maybeRecycleChildMergeTree(mergeTree, i);
                return value;
            });
        }
        return this.processSelectionSet({
            result: value,
            selectionSet: field.selectionSet,
            context: context,
            mergeTree: mergeTree,
        });
    };
    StoreWriter.prototype.applyMerges = function (mergeTree, existing, incoming, context, getStorageArgs) {
        var _a;
        var _this = this;
        if (mergeTree.map.size && !(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isReference)(incoming)) {
            var e_1 = (!Array.isArray(incoming) &&
                ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isReference)(existing) || (0,_helpers_js__WEBPACK_IMPORTED_MODULE_3__.storeValueIsStoreObject)(existing))) ? existing : void 0;
            var i_1 = incoming;
            if (e_1 && !getStorageArgs) {
                getStorageArgs = [(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isReference)(e_1) ? e_1.__ref : e_1];
            }
            var changedFields_1;
            var getValue_1 = function (from, name) {
                return Array.isArray(from)
                    ? (typeof name === "number" ? from[name] : void 0)
                    : context.store.getFieldValue(from, String(name));
            };
            mergeTree.map.forEach(function (childTree, storeFieldName) {
                var eVal = getValue_1(e_1, storeFieldName);
                var iVal = getValue_1(i_1, storeFieldName);
                if (void 0 === iVal)
                    return;
                if (getStorageArgs) {
                    getStorageArgs.push(storeFieldName);
                }
                var aVal = _this.applyMerges(childTree, eVal, iVal, context, getStorageArgs);
                if (aVal !== iVal) {
                    changedFields_1 = changedFields_1 || new Map;
                    changedFields_1.set(storeFieldName, aVal);
                }
                if (getStorageArgs) {
                    (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(getStorageArgs.pop() === storeFieldName);
                }
            });
            if (changedFields_1) {
                incoming = (Array.isArray(i_1) ? i_1.slice(0) : (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, i_1));
                changedFields_1.forEach(function (value, name) {
                    incoming[name] = value;
                });
            }
        }
        if (mergeTree.info) {
            return this.cache.policies.runMergeFunction(existing, incoming, mergeTree.info, context, getStorageArgs && (_a = context.store).getStorage.apply(_a, getStorageArgs));
        }
        return incoming;
    };
    return StoreWriter;
}());

var emptyMergeTreePool = [];
function getChildMergeTree(_a, name) {
    var map = _a.map;
    if (!map.has(name)) {
        map.set(name, emptyMergeTreePool.pop() || { map: new Map });
    }
    return map.get(name);
}
function mergeMergeTrees(left, right) {
    if (left === right || !right || mergeTreeIsEmpty(right))
        return left;
    if (!left || mergeTreeIsEmpty(left))
        return right;
    var info = left.info && right.info ? (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, left.info), right.info) : left.info || right.info;
    var needToMergeMaps = left.map.size && right.map.size;
    var map = needToMergeMaps ? new Map :
        left.map.size ? left.map : right.map;
    var merged = { info: info, map: map };
    if (needToMergeMaps) {
        var remainingRightKeys_1 = new Set(right.map.keys());
        left.map.forEach(function (leftTree, key) {
            merged.map.set(key, mergeMergeTrees(leftTree, right.map.get(key)));
            remainingRightKeys_1.delete(key);
        });
        remainingRightKeys_1.forEach(function (key) {
            merged.map.set(key, mergeMergeTrees(right.map.get(key), left.map.get(key)));
        });
    }
    return merged;
}
function mergeTreeIsEmpty(tree) {
    return !tree || !(tree.info || tree.map.size);
}
function maybeRecycleChildMergeTree(_a, name) {
    var map = _a.map;
    var childTree = map.get(name);
    if (childTree && mergeTreeIsEmpty(childTree)) {
        emptyMergeTreePool.push(childTree);
        map.delete(name);
    }
}
var warnings = new Set();
function warnAboutDataLoss(existingRef, incomingObj, storeFieldName, store) {
    var getChild = function (objOrRef) {
        var child = store.getFieldValue(objOrRef, storeFieldName);
        return typeof child === "object" && child;
    };
    var existing = getChild(existingRef);
    if (!existing)
        return;
    var incoming = getChild(incomingObj);
    if (!incoming)
        return;
    if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isReference)(existing))
        return;
    if ((0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__.equal)(existing, incoming))
        return;
    if (Object.keys(existing).every(function (key) { return store.getFieldValue(incoming, key) !== void 0; })) {
        return;
    }
    var parentType = store.getFieldValue(existingRef, "__typename") ||
        store.getFieldValue(incomingObj, "__typename");
    var fieldName = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_3__.fieldNameFromStoreName)(storeFieldName);
    var typeDotName = parentType + "." + fieldName;
    if (warnings.has(typeDotName))
        return;
    warnings.add(typeDotName);
    var childTypenames = [];
    if (!Array.isArray(existing) &&
        !Array.isArray(incoming)) {
        [existing, incoming].forEach(function (child) {
            var typename = store.getFieldValue(child, "__typename");
            if (typeof typename === "string" &&
                !childTypenames.includes(typename)) {
                childTypenames.push(typename);
            }
        });
    }
    __DEV__ && ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant.warn("Cache data may be lost when replacing the " + fieldName + " field of a " + parentType + " object.\n\nTo address this problem (which is not a bug in Apollo Client), " + (childTypenames.length
        ? "either ensure all objects of type " +
            childTypenames.join(" and ") + " have an ID or a custom merge function, or "
        : "") + "define a custom merge function for the " + typeDotName + " field, so InMemoryCache can safely merge these objects:\n\n  existing: " + JSON.stringify(existing).slice(0, 1000) + "\n  incoming: " + JSON.stringify(incoming).slice(0, 1000) + "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n");
}
//# sourceMappingURL=writeToStore.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/core/ApolloClient.js":
/*!**********************************************************!*\
  !*** ./node_modules/@apollo/client/core/ApolloClient.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeOptions": function() { return /* binding */ mergeOptions; },
/* harmony export */   "ApolloClient": function() { return /* binding */ ApolloClient; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _link_core_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../link/core/index.js */ "./node_modules/@apollo/client/link/core/index.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../version.js */ "./node_modules/@apollo/client/version.js");
/* harmony import */ var _link_http_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../link/http/index.js */ "./node_modules/@apollo/client/link/http/index.js");
/* harmony import */ var _QueryManager_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./QueryManager.js */ "./node_modules/@apollo/client/core/QueryManager.js");
/* harmony import */ var _LocalState_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LocalState.js */ "./node_modules/@apollo/client/core/LocalState.js");








var hasSuggestedDevtools = false;
function mergeOptions(defaults, options) {
    return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.compact)(defaults, options, options.variables && {
        variables: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, defaults.variables), options.variables),
    });
}
var ApolloClient = (function () {
    function ApolloClient(options) {
        var _this = this;
        this.defaultOptions = {};
        this.resetStoreCallbacks = [];
        this.clearStoreCallbacks = [];
        var uri = options.uri, credentials = options.credentials, headers = options.headers, cache = options.cache, _a = options.ssrMode, ssrMode = _a === void 0 ? false : _a, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, _c = options.connectToDevTools, connectToDevTools = _c === void 0 ? typeof window === 'object' &&
            !window.__APOLLO_CLIENT__ &&
            __DEV__ : _c, _d = options.queryDeduplication, queryDeduplication = _d === void 0 ? true : _d, defaultOptions = options.defaultOptions, _e = options.assumeImmutableResults, assumeImmutableResults = _e === void 0 ? false : _e, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwarenessName = options.name, clientAwarenessVersion = options.version;
        var link = options.link;
        if (!link) {
            link = uri
                ? new _link_http_index_js__WEBPACK_IMPORTED_MODULE_3__.HttpLink({ uri: uri, credentials: credentials, headers: headers })
                : _link_core_index_js__WEBPACK_IMPORTED_MODULE_4__.ApolloLink.empty();
        }
        if (!cache) {
            throw __DEV__ ? new ts_invariant__WEBPACK_IMPORTED_MODULE_0__.InvariantError("To initialize Apollo Client, you must specify a 'cache' property " +
                "in the options object. \n" +
                "For more information, please visit: https://go.apollo.dev/c/docs") : new ts_invariant__WEBPACK_IMPORTED_MODULE_0__.InvariantError(10);
        }
        this.link = link;
        this.cache = cache;
        this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
        this.queryDeduplication = queryDeduplication;
        this.defaultOptions = defaultOptions || {};
        this.typeDefs = typeDefs;
        if (ssrForceFetchDelay) {
            setTimeout(function () { return (_this.disableNetworkFetches = false); }, ssrForceFetchDelay);
        }
        this.watchQuery = this.watchQuery.bind(this);
        this.query = this.query.bind(this);
        this.mutate = this.mutate.bind(this);
        this.resetStore = this.resetStore.bind(this);
        this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
        if (connectToDevTools && typeof window === 'object') {
            window.__APOLLO_CLIENT__ = this;
        }
        if (!hasSuggestedDevtools && __DEV__) {
            hasSuggestedDevtools = true;
            if (typeof window !== 'undefined' &&
                window.document &&
                window.top === window.self &&
                !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
                var nav = window.navigator;
                var ua = nav && nav.userAgent;
                var url = void 0;
                if (typeof ua === "string") {
                    if (ua.indexOf("Chrome/") > -1) {
                        url = "https://chrome.google.com/webstore/detail/" +
                            "apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm";
                    }
                    else if (ua.indexOf("Firefox/") > -1) {
                        url = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/";
                    }
                }
                if (url) {
                    __DEV__ && ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant.log("Download the Apollo DevTools for a better development " +
                        "experience: " + url);
                }
            }
        }
        this.version = _version_js__WEBPACK_IMPORTED_MODULE_5__.version;
        this.localState = new _LocalState_js__WEBPACK_IMPORTED_MODULE_6__.LocalState({
            cache: cache,
            client: this,
            resolvers: resolvers,
            fragmentMatcher: fragmentMatcher,
        });
        this.queryManager = new _QueryManager_js__WEBPACK_IMPORTED_MODULE_7__.QueryManager({
            cache: this.cache,
            link: this.link,
            queryDeduplication: queryDeduplication,
            ssrMode: ssrMode,
            clientAwareness: {
                name: clientAwarenessName,
                version: clientAwarenessVersion,
            },
            localState: this.localState,
            assumeImmutableResults: assumeImmutableResults,
            onBroadcast: connectToDevTools ? function () {
                if (_this.devToolsHookCb) {
                    _this.devToolsHookCb({
                        action: {},
                        state: {
                            queries: _this.queryManager.getQueryStore(),
                            mutations: _this.queryManager.mutationStore || {},
                        },
                        dataWithOptimisticResults: _this.cache.extract(true),
                    });
                }
            } : void 0,
        });
    }
    ApolloClient.prototype.stop = function () {
        this.queryManager.stop();
    };
    ApolloClient.prototype.watchQuery = function (options) {
        if (this.defaultOptions.watchQuery) {
            options = mergeOptions(this.defaultOptions.watchQuery, options);
        }
        if (this.disableNetworkFetches &&
            (options.fetchPolicy === 'network-only' ||
                options.fetchPolicy === 'cache-and-network')) {
            options = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, options), { fetchPolicy: 'cache-first' });
        }
        return this.queryManager.watchQuery(options);
    };
    ApolloClient.prototype.query = function (options) {
        if (this.defaultOptions.query) {
            options = mergeOptions(this.defaultOptions.query, options);
        }
        __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(options.fetchPolicy !== 'cache-and-network', 'The cache-and-network fetchPolicy does not work with client.query, because ' +
            'client.query can only return a single result. Please use client.watchQuery ' +
            'to receive multiple results from the cache and the network, or consider ' +
            'using a different fetchPolicy, such as cache-first or network-only.') : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(options.fetchPolicy !== 'cache-and-network', 11);
        if (this.disableNetworkFetches && options.fetchPolicy === 'network-only') {
            options = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, options), { fetchPolicy: 'cache-first' });
        }
        return this.queryManager.query(options);
    };
    ApolloClient.prototype.mutate = function (options) {
        if (this.defaultOptions.mutate) {
            options = mergeOptions(this.defaultOptions.mutate, options);
        }
        return this.queryManager.mutate(options);
    };
    ApolloClient.prototype.subscribe = function (options) {
        return this.queryManager.startGraphQLSubscription(options);
    };
    ApolloClient.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.cache.readQuery(options, optimistic);
    };
    ApolloClient.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.cache.readFragment(options, optimistic);
    };
    ApolloClient.prototype.writeQuery = function (options) {
        this.cache.writeQuery(options);
        this.queryManager.broadcastQueries();
    };
    ApolloClient.prototype.writeFragment = function (options) {
        this.cache.writeFragment(options);
        this.queryManager.broadcastQueries();
    };
    ApolloClient.prototype.__actionHookForDevTools = function (cb) {
        this.devToolsHookCb = cb;
    };
    ApolloClient.prototype.__requestRaw = function (payload) {
        return (0,_link_core_index_js__WEBPACK_IMPORTED_MODULE_4__.execute)(this.link, payload);
    };
    ApolloClient.prototype.resetStore = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.queryManager.clearStore(); })
            .then(function () { return Promise.all(_this.resetStoreCallbacks.map(function (fn) { return fn(); })); })
            .then(function () { return _this.reFetchObservableQueries(); });
    };
    ApolloClient.prototype.clearStore = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.queryManager.clearStore(); })
            .then(function () { return Promise.all(_this.clearStoreCallbacks.map(function (fn) { return fn(); })); });
    };
    ApolloClient.prototype.onResetStore = function (cb) {
        var _this = this;
        this.resetStoreCallbacks.push(cb);
        return function () {
            _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    ApolloClient.prototype.onClearStore = function (cb) {
        var _this = this;
        this.clearStoreCallbacks.push(cb);
        return function () {
            _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    ApolloClient.prototype.reFetchObservableQueries = function (includeStandby) {
        return this.queryManager.reFetchObservableQueries(includeStandby);
    };
    ApolloClient.prototype.refetchQueries = function (options) {
        var map = this.queryManager.refetchQueries(options);
        var queries = [];
        var results = [];
        map.forEach(function (result, obsQuery) {
            queries.push(obsQuery);
            results.push(result);
        });
        var result = Promise.all(results);
        result.queries = queries;
        result.results = results;
        result.catch(function (error) {
            __DEV__ && ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant.debug("In client.refetchQueries, Promise.all promise rejected with error " + error);
        });
        return result;
    };
    ApolloClient.prototype.getObservableQueries = function (include) {
        if (include === void 0) { include = "active"; }
        return this.queryManager.getObservableQueries(include);
    };
    ApolloClient.prototype.extract = function (optimistic) {
        return this.cache.extract(optimistic);
    };
    ApolloClient.prototype.restore = function (serializedState) {
        return this.cache.restore(serializedState);
    };
    ApolloClient.prototype.addResolvers = function (resolvers) {
        this.localState.addResolvers(resolvers);
    };
    ApolloClient.prototype.setResolvers = function (resolvers) {
        this.localState.setResolvers(resolvers);
    };
    ApolloClient.prototype.getResolvers = function () {
        return this.localState.getResolvers();
    };
    ApolloClient.prototype.setLocalStateFragmentMatcher = function (fragmentMatcher) {
        this.localState.setFragmentMatcher(fragmentMatcher);
    };
    ApolloClient.prototype.setLink = function (newLink) {
        this.link = this.queryManager.link = newLink;
    };
    return ApolloClient;
}());

//# sourceMappingURL=ApolloClient.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/core/LocalState.js":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/core/LocalState.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalState": function() { return /* binding */ LocalState; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _cache_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cache/index.js */ "./node_modules/@apollo/client/cache/index.js");





var LocalState = (function () {
    function LocalState(_a) {
        var cache = _a.cache, client = _a.client, resolvers = _a.resolvers, fragmentMatcher = _a.fragmentMatcher;
        this.cache = cache;
        if (client) {
            this.client = client;
        }
        if (resolvers) {
            this.addResolvers(resolvers);
        }
        if (fragmentMatcher) {
            this.setFragmentMatcher(fragmentMatcher);
        }
    }
    LocalState.prototype.addResolvers = function (resolvers) {
        var _this = this;
        this.resolvers = this.resolvers || {};
        if (Array.isArray(resolvers)) {
            resolvers.forEach(function (resolverGroup) {
                _this.resolvers = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.mergeDeep)(_this.resolvers, resolverGroup);
            });
        }
        else {
            this.resolvers = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.mergeDeep)(this.resolvers, resolvers);
        }
    };
    LocalState.prototype.setResolvers = function (resolvers) {
        this.resolvers = {};
        this.addResolvers(resolvers);
    };
    LocalState.prototype.getResolvers = function () {
        return this.resolvers || {};
    };
    LocalState.prototype.runResolvers = function (_a) {
        var document = _a.document, remoteResult = _a.remoteResult, context = _a.context, variables = _a.variables, _b = _a.onlyRunForcedResolvers, onlyRunForcedResolvers = _b === void 0 ? false : _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_c) {
                if (document) {
                    return [2, this.resolveDocument(document, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function (localResult) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, remoteResult), { data: localResult.result })); })];
                }
                return [2, remoteResult];
            });
        });
    };
    LocalState.prototype.setFragmentMatcher = function (fragmentMatcher) {
        this.fragmentMatcher = fragmentMatcher;
    };
    LocalState.prototype.getFragmentMatcher = function () {
        return this.fragmentMatcher;
    };
    LocalState.prototype.clientQuery = function (document) {
        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.hasDirectives)(['client'], document)) {
            if (this.resolvers) {
                return document;
            }
        }
        return null;
    };
    LocalState.prototype.serverQuery = function (document) {
        return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.removeClientSetsFromDocument)(document);
    };
    LocalState.prototype.prepareContext = function (context) {
        var cache = this.cache;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, context), { cache: cache, getCacheKey: function (obj) {
                return cache.identify(obj);
            } });
    };
    LocalState.prototype.addExportedVariables = function (document, variables, context) {
        if (variables === void 0) { variables = {}; }
        if (context === void 0) { context = {}; }
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                if (document) {
                    return [2, this.resolveDocument(document, this.buildRootValueFromCache(document, variables) || {}, this.prepareContext(context), variables).then(function (data) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, variables), data.exportedVariables)); })];
                }
                return [2, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, variables)];
            });
        });
    };
    LocalState.prototype.shouldForceResolvers = function (document) {
        var forceResolvers = false;
        (0,graphql__WEBPACK_IMPORTED_MODULE_3__.visit)(document, {
            Directive: {
                enter: function (node) {
                    if (node.name.value === 'client' && node.arguments) {
                        forceResolvers = node.arguments.some(function (arg) {
                            return arg.name.value === 'always' &&
                                arg.value.kind === 'BooleanValue' &&
                                arg.value.value === true;
                        });
                        if (forceResolvers) {
                            return graphql__WEBPACK_IMPORTED_MODULE_3__.BREAK;
                        }
                    }
                },
            },
        });
        return forceResolvers;
    };
    LocalState.prototype.buildRootValueFromCache = function (document, variables) {
        return this.cache.diff({
            query: (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.buildQueryFromSelectionSet)(document),
            variables: variables,
            returnPartialData: true,
            optimistic: false,
        }).result;
    };
    LocalState.prototype.resolveDocument = function (document, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
        if (context === void 0) { context = {}; }
        if (variables === void 0) { variables = {}; }
        if (fragmentMatcher === void 0) { fragmentMatcher = function () { return true; }; }
        if (onlyRunForcedResolvers === void 0) { onlyRunForcedResolvers = false; }
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var mainDefinition, fragments, fragmentMap, definitionOperation, defaultOperationType, _a, cache, client, execContext;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_b) {
                mainDefinition = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.getMainDefinition)(document);
                fragments = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.getFragmentDefinitions)(document);
                fragmentMap = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.createFragmentMap)(fragments);
                definitionOperation = mainDefinition
                    .operation;
                defaultOperationType = definitionOperation
                    ? definitionOperation.charAt(0).toUpperCase() +
                        definitionOperation.slice(1)
                    : 'Query';
                _a = this, cache = _a.cache, client = _a.client;
                execContext = {
                    fragmentMap: fragmentMap,
                    context: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, context), { cache: cache, client: client }),
                    variables: variables,
                    fragmentMatcher: fragmentMatcher,
                    defaultOperationType: defaultOperationType,
                    exportedVariables: {},
                    onlyRunForcedResolvers: onlyRunForcedResolvers,
                };
                return [2, this.resolveSelectionSet(mainDefinition.selectionSet, rootValue, execContext).then(function (result) { return ({
                        result: result,
                        exportedVariables: execContext.exportedVariables,
                    }); })];
            });
        });
    };
    LocalState.prototype.resolveSelectionSet = function (selectionSet, rootValue, execContext) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var fragmentMap, context, variables, resultsToMerge, execute;
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
                resultsToMerge = [rootValue];
                execute = function (selection) { return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(_this, void 0, void 0, function () {
                    var fragment, typeCondition;
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                        if (!(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.shouldInclude)(selection, variables)) {
                            return [2];
                        }
                        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.isField)(selection)) {
                            return [2, this.resolveField(selection, rootValue, execContext).then(function (fieldResult) {
                                    var _a;
                                    if (typeof fieldResult !== 'undefined') {
                                        resultsToMerge.push((_a = {},
                                            _a[(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.resultKeyNameFromField)(selection)] = fieldResult,
                                            _a));
                                    }
                                })];
                        }
                        if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.isInlineFragment)(selection)) {
                            fragment = selection;
                        }
                        else {
                            fragment = fragmentMap[selection.name.value];
                            __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(fragment, "No fragment named " + selection.name.value) : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(fragment, 12);
                        }
                        if (fragment && fragment.typeCondition) {
                            typeCondition = fragment.typeCondition.name.value;
                            if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                                return [2, this.resolveSelectionSet(fragment.selectionSet, rootValue, execContext).then(function (fragmentResult) {
                                        resultsToMerge.push(fragmentResult);
                                    })];
                            }
                        }
                        return [2];
                    });
                }); };
                return [2, Promise.all(selectionSet.selections.map(execute)).then(function () {
                        return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.mergeDeepArray)(resultsToMerge);
                    })];
            });
        });
    };
    LocalState.prototype.resolveField = function (field, rootValue, execContext) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                variables = execContext.variables;
                fieldName = field.name.value;
                aliasedFieldName = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.resultKeyNameFromField)(field);
                aliasUsed = fieldName !== aliasedFieldName;
                defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
                resultPromise = Promise.resolve(defaultResult);
                if (!execContext.onlyRunForcedResolvers ||
                    this.shouldForceResolvers(field)) {
                    resolverType = rootValue.__typename || execContext.defaultOperationType;
                    resolverMap = this.resolvers && this.resolvers[resolverType];
                    if (resolverMap) {
                        resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
                        if (resolve) {
                            resultPromise = Promise.resolve(_cache_index_js__WEBPACK_IMPORTED_MODULE_4__.cacheSlot.withValue(this.cache, resolve, [
                                rootValue,
                                (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.argumentsObjectFromField)(field, variables),
                                execContext.context,
                                { field: field, fragmentMap: execContext.fragmentMap },
                            ]));
                        }
                    }
                }
                return [2, resultPromise.then(function (result) {
                        if (result === void 0) { result = defaultResult; }
                        if (field.directives) {
                            field.directives.forEach(function (directive) {
                                if (directive.name.value === 'export' && directive.arguments) {
                                    directive.arguments.forEach(function (arg) {
                                        if (arg.name.value === 'as' && arg.value.kind === 'StringValue') {
                                            execContext.exportedVariables[arg.value.value] = result;
                                        }
                                    });
                                }
                            });
                        }
                        if (!field.selectionSet) {
                            return result;
                        }
                        if (result == null) {
                            return result;
                        }
                        if (Array.isArray(result)) {
                            return _this.resolveSubSelectedArray(field, result, execContext);
                        }
                        if (field.selectionSet) {
                            return _this.resolveSelectionSet(field.selectionSet, result, execContext);
                        }
                    })];
            });
        });
    };
    LocalState.prototype.resolveSubSelectedArray = function (field, result, execContext) {
        var _this = this;
        return Promise.all(result.map(function (item) {
            if (item === null) {
                return null;
            }
            if (Array.isArray(item)) {
                return _this.resolveSubSelectedArray(field, item, execContext);
            }
            if (field.selectionSet) {
                return _this.resolveSelectionSet(field.selectionSet, item, execContext);
            }
        }));
    };
    return LocalState;
}());

//# sourceMappingURL=LocalState.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/core/ObservableQuery.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/core/ObservableQuery.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObservableQuery": function() { return /* binding */ ObservableQuery; },
/* harmony export */   "applyNextFetchPolicy": function() { return /* binding */ applyNextFetchPolicy; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./networkStatus.js */ "./node_modules/@apollo/client/core/networkStatus.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../errors/index.js */ "./node_modules/@apollo/client/errors/index.js");






var warnedAboutUpdateQuery = false;
var ObservableQuery = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ObservableQuery, _super);
    function ObservableQuery(_a) {
        var queryManager = _a.queryManager, queryInfo = _a.queryInfo, options = _a.options;
        var _this = _super.call(this, function (observer) {
            try {
                var subObserver = observer._subscription._observer;
                if (subObserver && !subObserver.error) {
                    subObserver.error = defaultSubscriptionObserverErrorCallback;
                }
            }
            catch (_a) { }
            var first = !_this.observers.size;
            _this.observers.add(observer);
            if (_this.lastError) {
                observer.error && observer.error(_this.lastError);
            }
            else if (_this.lastResult) {
                observer.next && observer.next(_this.lastResult);
            }
            if (first) {
                _this.reobserve().catch(function () { });
            }
            return function () {
                if (_this.observers.delete(observer) && !_this.observers.size) {
                    _this.tearDownQuery();
                }
            };
        }) || this;
        _this.observers = new Set();
        _this.subscriptions = new Set();
        _this.observer = {
            next: function (result) {
                if (_this.lastError || _this.isDifferentFromLastResult(result)) {
                    _this.updateLastResult(result);
                    (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.iterateObserversSafely)(_this.observers, 'next', result);
                }
            },
            error: function (error) {
                _this.updateLastResult((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, _this.lastResult), { error: error, errors: error.graphQLErrors, networkStatus: _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.error, loading: false }));
                (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.iterateObserversSafely)(_this.observers, 'error', _this.lastError = error);
            },
        };
        _this.isTornDown = false;
        _this.options = options;
        _this.queryId = queryManager.generateQueryId();
        var opDef = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.getOperationDefinition)(options.query);
        _this.queryName = opDef && opDef.name && opDef.name.value;
        _this.initialFetchPolicy = options.fetchPolicy || "cache-first";
        _this.queryManager = queryManager;
        _this.queryInfo = queryInfo;
        return _this;
    }
    Object.defineProperty(ObservableQuery.prototype, "variables", {
        get: function () {
            return this.options.variables;
        },
        enumerable: false,
        configurable: true
    });
    ObservableQuery.prototype.result = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var observer = {
                next: function (result) {
                    resolve(result);
                    _this.observers.delete(observer);
                    if (!_this.observers.size) {
                        _this.queryManager.removeQuery(_this.queryId);
                    }
                    setTimeout(function () {
                        subscription.unsubscribe();
                    }, 0);
                },
                error: reject,
            };
            var subscription = _this.subscribe(observer);
        });
    };
    ObservableQuery.prototype.getCurrentResult = function (saveAsLastResult) {
        if (saveAsLastResult === void 0) { saveAsLastResult = true; }
        var _a = this, lastResult = _a.lastResult, _b = _a.options.fetchPolicy, fetchPolicy = _b === void 0 ? "cache-first" : _b;
        var networkStatus = this.queryInfo.networkStatus ||
            (lastResult && lastResult.networkStatus) ||
            _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.ready;
        var result = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, lastResult), { loading: (0,_networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.isNetworkRequestInFlight)(networkStatus), networkStatus: networkStatus });
        if (!this.queryManager.transform(this.options.query).hasForcedResolvers) {
            var diff = this.queryInfo.getDiff();
            result.data = (diff.complete ||
                this.options.returnPartialData) ? diff.result : void 0;
            if (diff.complete) {
                if (result.networkStatus === _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.loading &&
                    (fetchPolicy === 'cache-first' ||
                        fetchPolicy === 'cache-only')) {
                    result.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.ready;
                    result.loading = false;
                }
                delete result.partial;
            }
            else if (fetchPolicy !== "no-cache") {
                result.partial = true;
            }
            if (!diff.complete &&
                !this.options.partialRefetch &&
                !result.loading &&
                !result.data &&
                !result.error) {
                result.error = new _errors_index_js__WEBPACK_IMPORTED_MODULE_5__.ApolloError({ clientErrors: diff.missing });
            }
        }
        if (saveAsLastResult) {
            this.updateLastResult(result);
        }
        return result;
    };
    ObservableQuery.prototype.isDifferentFromLastResult = function (newResult) {
        return !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__.equal)(this.lastResultSnapshot, newResult);
    };
    ObservableQuery.prototype.getLastResult = function () {
        return this.lastResult;
    };
    ObservableQuery.prototype.getLastError = function () {
        return this.lastError;
    };
    ObservableQuery.prototype.resetLastResults = function () {
        delete this.lastResult;
        delete this.lastResultSnapshot;
        delete this.lastError;
        this.isTornDown = false;
    };
    ObservableQuery.prototype.resetQueryStoreErrors = function () {
        this.queryManager.resetErrors(this.queryId);
    };
    ObservableQuery.prototype.refetch = function (variables) {
        var reobserveOptions = {
            pollInterval: 0,
        };
        var fetchPolicy = this.options.fetchPolicy;
        if (fetchPolicy === 'no-cache') {
            reobserveOptions.fetchPolicy = 'no-cache';
        }
        else if (fetchPolicy !== 'cache-and-network') {
            reobserveOptions.fetchPolicy = 'network-only';
        }
        if (variables && !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__.equal)(this.options.variables, variables)) {
            reobserveOptions.variables = this.options.variables = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, this.options.variables), variables);
        }
        this.queryInfo.resetLastWrite();
        return this.reobserve(reobserveOptions, _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.refetch);
    };
    ObservableQuery.prototype.fetchMore = function (fetchMoreOptions) {
        var _this = this;
        var combinedOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, (fetchMoreOptions.query ? fetchMoreOptions : (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, this.options), fetchMoreOptions), { variables: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, this.options.variables), fetchMoreOptions.variables) }))), { fetchPolicy: "no-cache" });
        var qid = this.queryManager.generateQueryId();
        if (combinedOptions.notifyOnNetworkStatusChange) {
            this.queryInfo.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.fetchMore;
            this.observe();
        }
        return this.queryManager.fetchQuery(qid, combinedOptions, _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.fetchMore).then(function (fetchMoreResult) {
            var data = fetchMoreResult.data;
            var updateQuery = fetchMoreOptions.updateQuery;
            if (updateQuery) {
                if (__DEV__ &&
                    !warnedAboutUpdateQuery) {
                    __DEV__ && ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant.warn("The updateQuery callback for fetchMore is deprecated, and will be removed\nin the next major version of Apollo Client.\n\nPlease convert updateQuery functions to field policies with appropriate\nread and merge functions, or use/adapt a helper function (such as\nconcatPagination, offsetLimitPagination, or relayStylePagination) from\n@apollo/client/utilities.\n\nThe field policy system handles pagination more effectively than a\nhand-written updateQuery function, and you only need to define the policy\nonce, rather than every time you call fetchMore.");
                    warnedAboutUpdateQuery = true;
                }
                _this.updateQuery(function (previous) { return updateQuery(previous, {
                    fetchMoreResult: data,
                    variables: combinedOptions.variables,
                }); });
            }
            else {
                _this.queryManager.cache.writeQuery({
                    query: combinedOptions.query,
                    variables: combinedOptions.variables,
                    data: data,
                });
            }
            return fetchMoreResult;
        }).finally(function () {
            _this.queryManager.stopQuery(qid);
            _this.reobserve();
        });
    };
    ObservableQuery.prototype.subscribeToMore = function (options) {
        var _this = this;
        var subscription = this.queryManager
            .startGraphQLSubscription({
            query: options.document,
            variables: options.variables,
            context: options.context,
        })
            .subscribe({
            next: function (subscriptionData) {
                var updateQuery = options.updateQuery;
                if (updateQuery) {
                    _this.updateQuery(function (previous, _a) {
                        var variables = _a.variables;
                        return updateQuery(previous, {
                            subscriptionData: subscriptionData,
                            variables: variables,
                        });
                    });
                }
            },
            error: function (err) {
                if (options.onError) {
                    options.onError(err);
                    return;
                }
                __DEV__ && ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant.error('Unhandled GraphQL subscription error', err);
            },
        });
        this.subscriptions.add(subscription);
        return function () {
            if (_this.subscriptions.delete(subscription)) {
                subscription.unsubscribe();
            }
        };
    };
    ObservableQuery.prototype.setOptions = function (newOptions) {
        return this.reobserve(newOptions);
    };
    ObservableQuery.prototype.setVariables = function (variables) {
        if ((0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__.equal)(this.variables, variables)) {
            return this.observers.size
                ? this.result()
                : Promise.resolve();
        }
        this.options.variables = variables;
        if (!this.observers.size) {
            return Promise.resolve();
        }
        return this.reobserve({
            fetchPolicy: this.initialFetchPolicy,
            variables: variables,
        }, _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.setVariables);
    };
    ObservableQuery.prototype.updateQuery = function (mapFn) {
        var _a;
        var queryManager = this.queryManager;
        var result = queryManager.cache.diff({
            query: this.options.query,
            variables: this.variables,
            previousResult: (_a = this.lastResult) === null || _a === void 0 ? void 0 : _a.data,
            returnPartialData: true,
            optimistic: false,
        }).result;
        var newResult = mapFn(result, {
            variables: this.variables,
        });
        if (newResult) {
            queryManager.cache.writeQuery({
                query: this.options.query,
                data: newResult,
                variables: this.variables,
            });
            queryManager.broadcastQueries();
        }
    };
    ObservableQuery.prototype.startPolling = function (pollInterval) {
        this.options.pollInterval = pollInterval;
        this.updatePolling();
    };
    ObservableQuery.prototype.stopPolling = function () {
        this.options.pollInterval = 0;
        this.updatePolling();
    };
    ObservableQuery.prototype.fetch = function (options, newNetworkStatus) {
        this.queryManager.setObservableQuery(this);
        return this.queryManager.fetchQueryObservable(this.queryId, options, newNetworkStatus);
    };
    ObservableQuery.prototype.updatePolling = function () {
        var _this = this;
        if (this.queryManager.ssrMode) {
            return;
        }
        var _a = this, pollingInfo = _a.pollingInfo, pollInterval = _a.options.pollInterval;
        if (!pollInterval) {
            if (pollingInfo) {
                clearTimeout(pollingInfo.timeout);
                delete this.pollingInfo;
            }
            return;
        }
        if (pollingInfo &&
            pollingInfo.interval === pollInterval) {
            return;
        }
        __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(pollInterval, 'Attempted to start a polling query without a polling interval.') : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(pollInterval, 13);
        var info = pollingInfo || (this.pollingInfo = {});
        info.interval = pollInterval;
        var maybeFetch = function () {
            if (_this.pollingInfo) {
                if (!(0,_networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.isNetworkRequestInFlight)(_this.queryInfo.networkStatus)) {
                    _this.reobserve({
                        fetchPolicy: "network-only",
                    }, _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.poll).then(poll, poll);
                }
                else {
                    poll();
                }
            }
            ;
        };
        var poll = function () {
            var info = _this.pollingInfo;
            if (info) {
                clearTimeout(info.timeout);
                info.timeout = setTimeout(maybeFetch, info.interval);
            }
        };
        poll();
    };
    ObservableQuery.prototype.updateLastResult = function (newResult) {
        var previousResult = this.lastResult;
        this.lastResult = newResult;
        this.lastResultSnapshot = this.queryManager.assumeImmutableResults
            ? newResult
            : (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.cloneDeep)(newResult);
        if (!(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.isNonEmptyArray)(newResult.errors)) {
            delete this.lastError;
        }
        return previousResult;
    };
    ObservableQuery.prototype.reobserve = function (newOptions, newNetworkStatus) {
        this.isTornDown = false;
        var useDisposableConcast = newNetworkStatus === _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.refetch ||
            newNetworkStatus === _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.fetchMore ||
            newNetworkStatus === _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.poll;
        var oldVariables = this.options.variables;
        var options = useDisposableConcast
            ? (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.compact)(this.options, newOptions)
            : Object.assign(this.options, (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.compact)(newOptions));
        if (!useDisposableConcast) {
            this.updatePolling();
            if (newOptions &&
                newOptions.variables &&
                !newOptions.fetchPolicy &&
                !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__.equal)(newOptions.variables, oldVariables)) {
                options.fetchPolicy = this.initialFetchPolicy;
                if (newNetworkStatus === void 0) {
                    newNetworkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_4__.NetworkStatus.setVariables;
                }
            }
        }
        var concast = this.fetch(options, newNetworkStatus);
        if (!useDisposableConcast) {
            if (this.concast) {
                this.concast.removeObserver(this.observer, true);
            }
            this.concast = concast;
        }
        concast.addObserver(this.observer);
        return concast.promise;
    };
    ObservableQuery.prototype.observe = function () {
        this.observer.next(this.getCurrentResult(false));
    };
    ObservableQuery.prototype.hasObservers = function () {
        return this.observers.size > 0;
    };
    ObservableQuery.prototype.tearDownQuery = function () {
        if (this.isTornDown)
            return;
        if (this.concast) {
            this.concast.removeObserver(this.observer);
            delete this.concast;
        }
        this.stopPolling();
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
        this.subscriptions.clear();
        this.queryManager.stopQuery(this.queryId);
        this.observers.clear();
        this.isTornDown = true;
    };
    return ObservableQuery;
}(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.Observable));

(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__.fixObservableSubclass)(ObservableQuery);
function defaultSubscriptionObserverErrorCallback(error) {
    __DEV__ && ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant.error('Unhandled error', error.message, error.stack);
}
function applyNextFetchPolicy(options) {
    var _a = options.fetchPolicy, fetchPolicy = _a === void 0 ? "cache-first" : _a, nextFetchPolicy = options.nextFetchPolicy;
    if (nextFetchPolicy) {
        options.fetchPolicy = typeof nextFetchPolicy === "function"
            ? nextFetchPolicy.call(options, fetchPolicy)
            : nextFetchPolicy;
    }
}
//# sourceMappingURL=ObservableQuery.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/core/QueryInfo.js":
/*!*******************************************************!*\
  !*** ./node_modules/@apollo/client/core/QueryInfo.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryInfo": function() { return /* binding */ QueryInfo; },
/* harmony export */   "shouldWriteResult": function() { return /* binding */ shouldWriteResult; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _networkStatus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./networkStatus.js */ "./node_modules/@apollo/client/core/networkStatus.js");




;
var destructiveMethodCounts = new (_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.canUseWeakMap ? WeakMap : Map)();
function wrapDestructiveCacheMethod(cache, methodName) {
    var original = cache[methodName];
    if (typeof original === "function") {
        cache[methodName] = function () {
            destructiveMethodCounts.set(cache, (destructiveMethodCounts.get(cache) + 1) % 1e15);
            return original.apply(this, arguments);
        };
    }
}
function cancelNotifyTimeout(info) {
    if (info["notifyTimeout"]) {
        clearTimeout(info["notifyTimeout"]);
        info["notifyTimeout"] = void 0;
    }
}
var QueryInfo = (function () {
    function QueryInfo(cache) {
        this.cache = cache;
        this.listeners = new Set();
        this.document = null;
        this.lastRequestId = 1;
        this.subscriptions = new Set();
        this.stopped = false;
        this.dirty = false;
        this.observableQuery = null;
        if (!destructiveMethodCounts.has(cache)) {
            destructiveMethodCounts.set(cache, 0);
            wrapDestructiveCacheMethod(cache, "evict");
            wrapDestructiveCacheMethod(cache, "modify");
            wrapDestructiveCacheMethod(cache, "reset");
        }
    }
    QueryInfo.prototype.init = function (query) {
        var networkStatus = query.networkStatus || _networkStatus_js__WEBPACK_IMPORTED_MODULE_2__.NetworkStatus.loading;
        if (this.variables &&
            this.networkStatus !== _networkStatus_js__WEBPACK_IMPORTED_MODULE_2__.NetworkStatus.loading &&
            !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__.equal)(this.variables, query.variables)) {
            networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_2__.NetworkStatus.setVariables;
        }
        if (!(0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__.equal)(query.variables, this.variables)) {
            this.lastDiff = void 0;
        }
        Object.assign(this, {
            document: query.document,
            variables: query.variables,
            networkError: null,
            graphQLErrors: this.graphQLErrors || [],
            networkStatus: networkStatus,
        });
        if (query.observableQuery) {
            this.setObservableQuery(query.observableQuery);
        }
        if (query.lastRequestId) {
            this.lastRequestId = query.lastRequestId;
        }
        return this;
    };
    QueryInfo.prototype.reset = function () {
        cancelNotifyTimeout(this);
        this.lastDiff = void 0;
        this.dirty = false;
    };
    QueryInfo.prototype.getDiff = function (variables) {
        if (variables === void 0) { variables = this.variables; }
        var options = this.getDiffOptions(variables);
        if (this.lastDiff && (0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__.equal)(options, this.lastDiff.options)) {
            return this.lastDiff.diff;
        }
        this.updateWatch(this.variables = variables);
        var oq = this.observableQuery;
        if (oq && oq.options.fetchPolicy === "no-cache") {
            return { complete: false };
        }
        var diff = this.cache.diff(options);
        this.updateLastDiff(diff, options);
        return diff;
    };
    QueryInfo.prototype.updateLastDiff = function (diff, options) {
        this.lastDiff = diff ? {
            diff: diff,
            options: options || this.getDiffOptions(),
        } : void 0;
    };
    QueryInfo.prototype.getDiffOptions = function (variables) {
        if (variables === void 0) { variables = this.variables; }
        var oq = this.observableQuery;
        return {
            query: this.document,
            variables: variables,
            returnPartialData: true,
            optimistic: true,
            canonizeResults: !oq || oq.options.canonizeResults !== false,
        };
    };
    QueryInfo.prototype.setDiff = function (diff) {
        var _this = this;
        var oldDiff = this.lastDiff && this.lastDiff.diff;
        this.updateLastDiff(diff);
        if (!this.dirty &&
            !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__.equal)(oldDiff && oldDiff.result, diff && diff.result)) {
            this.dirty = true;
            if (!this.notifyTimeout) {
                this.notifyTimeout = setTimeout(function () { return _this.notify(); }, 0);
            }
        }
    };
    QueryInfo.prototype.setObservableQuery = function (oq) {
        var _this = this;
        if (oq === this.observableQuery)
            return;
        if (this.oqListener) {
            this.listeners.delete(this.oqListener);
        }
        this.observableQuery = oq;
        if (oq) {
            oq["queryInfo"] = this;
            this.listeners.add(this.oqListener = function () {
                if (_this.getDiff().fromOptimisticTransaction) {
                    oq["observe"]();
                }
                else {
                    oq.reobserve();
                }
            });
        }
        else {
            delete this.oqListener;
        }
    };
    QueryInfo.prototype.notify = function () {
        var _this = this;
        cancelNotifyTimeout(this);
        if (this.shouldNotify()) {
            this.listeners.forEach(function (listener) { return listener(_this); });
        }
        this.dirty = false;
    };
    QueryInfo.prototype.shouldNotify = function () {
        if (!this.dirty || !this.listeners.size) {
            return false;
        }
        if ((0,_networkStatus_js__WEBPACK_IMPORTED_MODULE_2__.isNetworkRequestInFlight)(this.networkStatus) &&
            this.observableQuery) {
            var fetchPolicy = this.observableQuery.options.fetchPolicy;
            if (fetchPolicy !== "cache-only" &&
                fetchPolicy !== "cache-and-network") {
                return false;
            }
        }
        return true;
    };
    QueryInfo.prototype.stop = function () {
        if (!this.stopped) {
            this.stopped = true;
            this.reset();
            this.cancel();
            this.cancel = QueryInfo.prototype.cancel;
            this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
            var oq = this.observableQuery;
            if (oq)
                oq.stopPolling();
        }
    };
    QueryInfo.prototype.cancel = function () { };
    QueryInfo.prototype.updateWatch = function (variables) {
        var _this = this;
        if (variables === void 0) { variables = this.variables; }
        var oq = this.observableQuery;
        if (oq && oq.options.fetchPolicy === "no-cache") {
            return;
        }
        var watchOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, this.getDiffOptions(variables)), { watcher: this, callback: function (diff) { return _this.setDiff(diff); } });
        if (!this.lastWatch ||
            !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__.equal)(watchOptions, this.lastWatch)) {
            this.cancel();
            this.cancel = this.cache.watch(this.lastWatch = watchOptions);
        }
    };
    QueryInfo.prototype.resetLastWrite = function () {
        this.lastWrite = void 0;
    };
    QueryInfo.prototype.shouldWrite = function (result, variables) {
        var lastWrite = this.lastWrite;
        return !(lastWrite &&
            lastWrite.dmCount === destructiveMethodCounts.get(this.cache) &&
            (0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__.equal)(variables, lastWrite.variables) &&
            (0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__.equal)(result.data, lastWrite.result.data));
    };
    QueryInfo.prototype.markResult = function (result, options, cacheWriteBehavior) {
        var _this = this;
        this.graphQLErrors = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.isNonEmptyArray)(result.errors) ? result.errors : [];
        this.reset();
        if (options.fetchPolicy === 'no-cache') {
            this.updateLastDiff({ result: result.data, complete: true }, this.getDiffOptions(options.variables));
        }
        else if (cacheWriteBehavior !== 0) {
            if (shouldWriteResult(result, options.errorPolicy)) {
                this.cache.performTransaction(function (cache) {
                    if (_this.shouldWrite(result, options.variables)) {
                        cache.writeQuery({
                            query: _this.document,
                            data: result.data,
                            variables: options.variables,
                            overwrite: cacheWriteBehavior === 1,
                        });
                        _this.lastWrite = {
                            result: result,
                            variables: options.variables,
                            dmCount: destructiveMethodCounts.get(_this.cache),
                        };
                    }
                    else {
                        if (_this.lastDiff &&
                            _this.lastDiff.diff.complete) {
                            result.data = _this.lastDiff.diff.result;
                            return;
                        }
                    }
                    var diffOptions = _this.getDiffOptions(options.variables);
                    var diff = cache.diff(diffOptions);
                    if (!_this.stopped) {
                        _this.updateWatch(options.variables);
                    }
                    _this.updateLastDiff(diff, diffOptions);
                    if (diff.complete) {
                        result.data = diff.result;
                    }
                });
            }
            else {
                this.lastWrite = void 0;
            }
        }
    };
    QueryInfo.prototype.markReady = function () {
        this.networkError = null;
        return this.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_2__.NetworkStatus.ready;
    };
    QueryInfo.prototype.markError = function (error) {
        this.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_2__.NetworkStatus.error;
        this.lastWrite = void 0;
        this.reset();
        if (error.graphQLErrors) {
            this.graphQLErrors = error.graphQLErrors;
        }
        if (error.networkError) {
            this.networkError = error.networkError;
        }
        return error;
    };
    return QueryInfo;
}());

function shouldWriteResult(result, errorPolicy) {
    if (errorPolicy === void 0) { errorPolicy = "none"; }
    var ignoreErrors = errorPolicy === "ignore" ||
        errorPolicy === "all";
    var writeWithErrors = !(0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.graphQLResultHasError)(result);
    if (!writeWithErrors && ignoreErrors && result.data) {
        writeWithErrors = true;
    }
    return writeWithErrors;
}
//# sourceMappingURL=QueryInfo.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/core/QueryManager.js":
/*!**********************************************************!*\
  !*** ./node_modules/@apollo/client/core/QueryManager.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryManager": function() { return /* binding */ QueryManager; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _link_core_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../link/core/index.js */ "./node_modules/@apollo/client/link/core/index.js");
/* harmony import */ var _cache_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cache/index.js */ "./node_modules/@apollo/client/cache/index.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../errors/index.js */ "./node_modules/@apollo/client/errors/index.js");
/* harmony import */ var _ObservableQuery_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ObservableQuery.js */ "./node_modules/@apollo/client/core/ObservableQuery.js");
/* harmony import */ var _networkStatus_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./networkStatus.js */ "./node_modules/@apollo/client/core/networkStatus.js");
/* harmony import */ var _LocalState_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LocalState.js */ "./node_modules/@apollo/client/core/LocalState.js");
/* harmony import */ var _QueryInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./QueryInfo.js */ "./node_modules/@apollo/client/core/QueryInfo.js");











var hasOwnProperty = Object.prototype.hasOwnProperty;
var QueryManager = (function () {
    function QueryManager(_a) {
        var cache = _a.cache, link = _a.link, _b = _a.queryDeduplication, queryDeduplication = _b === void 0 ? false : _b, onBroadcast = _a.onBroadcast, _c = _a.ssrMode, ssrMode = _c === void 0 ? false : _c, _d = _a.clientAwareness, clientAwareness = _d === void 0 ? {} : _d, localState = _a.localState, assumeImmutableResults = _a.assumeImmutableResults;
        this.clientAwareness = {};
        this.queries = new Map();
        this.fetchCancelFns = new Map();
        this.transformCache = new (_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.canUseWeakMap ? WeakMap : Map)();
        this.queryIdCounter = 1;
        this.requestIdCounter = 1;
        this.mutationIdCounter = 1;
        this.inFlightLinkObservables = new Map();
        this.cache = cache;
        this.link = link;
        this.queryDeduplication = queryDeduplication;
        this.clientAwareness = clientAwareness;
        this.localState = localState || new _LocalState_js__WEBPACK_IMPORTED_MODULE_3__.LocalState({ cache: cache });
        this.ssrMode = ssrMode;
        this.assumeImmutableResults = !!assumeImmutableResults;
        if ((this.onBroadcast = onBroadcast)) {
            this.mutationStore = Object.create(null);
        }
    }
    QueryManager.prototype.stop = function () {
        var _this = this;
        this.queries.forEach(function (_info, queryId) {
            _this.stopQueryNoBroadcast(queryId);
        });
        this.cancelPendingFetches(__DEV__ ? new ts_invariant__WEBPACK_IMPORTED_MODULE_0__.InvariantError('QueryManager stopped while query was in flight') : new ts_invariant__WEBPACK_IMPORTED_MODULE_0__.InvariantError(14));
    };
    QueryManager.prototype.cancelPendingFetches = function (error) {
        this.fetchCancelFns.forEach(function (cancel) { return cancel(error); });
        this.fetchCancelFns.clear();
    };
    QueryManager.prototype.mutate = function (_a) {
        var mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, updateQueries = _a.updateQueries, _b = _a.refetchQueries, refetchQueries = _b === void 0 ? [] : _b, _c = _a.awaitRefetchQueries, awaitRefetchQueries = _c === void 0 ? false : _c, updateWithProxyFn = _a.update, onQueryUpdated = _a.onQueryUpdated, _d = _a.errorPolicy, errorPolicy = _d === void 0 ? 'none' : _d, fetchPolicy = _a.fetchPolicy, keepRootFields = _a.keepRootFields, context = _a.context;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            var mutationId, mutationStoreValue, self;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(mutation, 'mutation option is required. You must specify your GraphQL document in the mutation option.') : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(mutation, 15);
                        __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(!fetchPolicy || fetchPolicy === 'no-cache', "Mutations only support a 'no-cache' fetchPolicy. If you don't want to disable the cache, remove your fetchPolicy setting to proceed with the default mutation behavior.") : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(!fetchPolicy || fetchPolicy === 'no-cache', 16);
                        mutationId = this.generateMutationId();
                        mutation = this.transform(mutation).document;
                        variables = this.getVariables(mutation, variables);
                        if (!this.transform(mutation).hasClientExports) return [3, 2];
                        return [4, this.localState.addExportedVariables(mutation, variables, context)];
                    case 1:
                        variables = (_e.sent());
                        _e.label = 2;
                    case 2:
                        mutationStoreValue = this.mutationStore &&
                            (this.mutationStore[mutationId] = {
                                mutation: mutation,
                                variables: variables,
                                loading: true,
                                error: null,
                            });
                        if (optimisticResponse) {
                            this.markMutationOptimistic(optimisticResponse, {
                                mutationId: mutationId,
                                document: mutation,
                                variables: variables,
                                fetchPolicy: fetchPolicy,
                                errorPolicy: errorPolicy,
                                context: context,
                                updateQueries: updateQueries,
                                update: updateWithProxyFn,
                                keepRootFields: keepRootFields,
                            });
                        }
                        this.broadcastQueries();
                        self = this;
                        return [2, new Promise(function (resolve, reject) {
                                return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.asyncMap)(self.getObservableFromLink(mutation, (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, context), { optimisticResponse: optimisticResponse }), variables, false), function (result) {
                                    if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.graphQLResultHasError)(result) && errorPolicy === 'none') {
                                        throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_5__.ApolloError({
                                            graphQLErrors: result.errors,
                                        });
                                    }
                                    if (mutationStoreValue) {
                                        mutationStoreValue.loading = false;
                                        mutationStoreValue.error = null;
                                    }
                                    var storeResult = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, result);
                                    if (typeof refetchQueries === "function") {
                                        refetchQueries = refetchQueries(storeResult);
                                    }
                                    if (errorPolicy === 'ignore' &&
                                        (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.graphQLResultHasError)(storeResult)) {
                                        delete storeResult.errors;
                                    }
                                    return self.markMutationResult({
                                        mutationId: mutationId,
                                        result: storeResult,
                                        document: mutation,
                                        variables: variables,
                                        fetchPolicy: fetchPolicy,
                                        errorPolicy: errorPolicy,
                                        context: context,
                                        update: updateWithProxyFn,
                                        updateQueries: updateQueries,
                                        awaitRefetchQueries: awaitRefetchQueries,
                                        refetchQueries: refetchQueries,
                                        removeOptimistic: optimisticResponse ? mutationId : void 0,
                                        onQueryUpdated: onQueryUpdated,
                                        keepRootFields: keepRootFields,
                                    });
                                }).subscribe({
                                    next: function (storeResult) {
                                        self.broadcastQueries();
                                        resolve(storeResult);
                                    },
                                    error: function (err) {
                                        if (mutationStoreValue) {
                                            mutationStoreValue.loading = false;
                                            mutationStoreValue.error = err;
                                        }
                                        if (optimisticResponse) {
                                            self.cache.removeOptimistic(mutationId);
                                        }
                                        self.broadcastQueries();
                                        reject(err instanceof _errors_index_js__WEBPACK_IMPORTED_MODULE_5__.ApolloError ? err : new _errors_index_js__WEBPACK_IMPORTED_MODULE_5__.ApolloError({
                                            networkError: err,
                                        }));
                                    },
                                });
                            })];
                }
            });
        });
    };
    QueryManager.prototype.markMutationResult = function (mutation, cache) {
        var _this = this;
        if (cache === void 0) { cache = this.cache; }
        var result = mutation.result;
        var cacheWrites = [];
        var skipCache = mutation.fetchPolicy === "no-cache";
        if (!skipCache && (0,_QueryInfo_js__WEBPACK_IMPORTED_MODULE_6__.shouldWriteResult)(result, mutation.errorPolicy)) {
            cacheWrites.push({
                result: result.data,
                dataId: 'ROOT_MUTATION',
                query: mutation.document,
                variables: mutation.variables,
            });
            var updateQueries_1 = mutation.updateQueries;
            if (updateQueries_1) {
                this.queries.forEach(function (_a, queryId) {
                    var observableQuery = _a.observableQuery;
                    var queryName = observableQuery && observableQuery.queryName;
                    if (!queryName || !hasOwnProperty.call(updateQueries_1, queryName)) {
                        return;
                    }
                    var updater = updateQueries_1[queryName];
                    var _b = _this.queries.get(queryId), document = _b.document, variables = _b.variables;
                    var _c = cache.diff({
                        query: document,
                        variables: variables,
                        returnPartialData: true,
                        optimistic: false,
                    }), currentQueryResult = _c.result, complete = _c.complete;
                    if (complete && currentQueryResult) {
                        var nextQueryResult = updater(currentQueryResult, {
                            mutationResult: result,
                            queryName: document && (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.getOperationName)(document) || void 0,
                            queryVariables: variables,
                        });
                        if (nextQueryResult) {
                            cacheWrites.push({
                                result: nextQueryResult,
                                dataId: 'ROOT_QUERY',
                                query: document,
                                variables: variables,
                            });
                        }
                    }
                });
            }
        }
        if (cacheWrites.length > 0 ||
            mutation.refetchQueries ||
            mutation.update ||
            mutation.onQueryUpdated ||
            mutation.removeOptimistic) {
            var results_1 = [];
            this.refetchQueries({
                updateCache: function (cache) {
                    if (!skipCache) {
                        cacheWrites.forEach(function (write) { return cache.write(write); });
                    }
                    var update = mutation.update;
                    if (update) {
                        if (!skipCache) {
                            var diff = cache.diff({
                                id: "ROOT_MUTATION",
                                query: _this.transform(mutation.document).asQuery,
                                variables: mutation.variables,
                                optimistic: false,
                                returnPartialData: true,
                            });
                            if (diff.complete) {
                                result = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, result), { data: diff.result });
                            }
                        }
                        update(cache, result, {
                            context: mutation.context,
                            variables: mutation.variables,
                        });
                    }
                    if (!skipCache && !mutation.keepRootFields) {
                        cache.modify({
                            id: 'ROOT_MUTATION',
                            fields: function (value, _a) {
                                var fieldName = _a.fieldName, DELETE = _a.DELETE;
                                return fieldName === "__typename" ? value : DELETE;
                            },
                        });
                    }
                },
                include: mutation.refetchQueries,
                optimistic: false,
                removeOptimistic: mutation.removeOptimistic,
                onQueryUpdated: mutation.onQueryUpdated || null,
            }).forEach(function (result) { return results_1.push(result); });
            if (mutation.awaitRefetchQueries || mutation.onQueryUpdated) {
                return Promise.all(results_1).then(function () { return result; });
            }
        }
        return Promise.resolve(result);
    };
    QueryManager.prototype.markMutationOptimistic = function (optimisticResponse, mutation) {
        var _this = this;
        var data = typeof optimisticResponse === "function"
            ? optimisticResponse(mutation.variables)
            : optimisticResponse;
        return this.cache.recordOptimisticTransaction(function (cache) {
            try {
                _this.markMutationResult((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, mutation), { result: { data: data } }), cache);
            }
            catch (error) {
                __DEV__ && ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant.error(error);
            }
        }, mutation.mutationId);
    };
    QueryManager.prototype.fetchQuery = function (queryId, options, networkStatus) {
        return this.fetchQueryObservable(queryId, options, networkStatus).promise;
    };
    QueryManager.prototype.getQueryStore = function () {
        var store = Object.create(null);
        this.queries.forEach(function (info, queryId) {
            store[queryId] = {
                variables: info.variables,
                networkStatus: info.networkStatus,
                networkError: info.networkError,
                graphQLErrors: info.graphQLErrors,
            };
        });
        return store;
    };
    QueryManager.prototype.resetErrors = function (queryId) {
        var queryInfo = this.queries.get(queryId);
        if (queryInfo) {
            queryInfo.networkError = undefined;
            queryInfo.graphQLErrors = [];
        }
    };
    QueryManager.prototype.transform = function (document) {
        var transformCache = this.transformCache;
        if (!transformCache.has(document)) {
            var transformed = this.cache.transformDocument(document);
            var forLink = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.removeConnectionDirectiveFromDocument)(this.cache.transformForLink(transformed));
            var clientQuery = this.localState.clientQuery(transformed);
            var serverQuery = forLink && this.localState.serverQuery(forLink);
            var cacheEntry_1 = {
                document: transformed,
                hasClientExports: (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.hasClientExports)(transformed),
                hasForcedResolvers: this.localState.shouldForceResolvers(transformed),
                clientQuery: clientQuery,
                serverQuery: serverQuery,
                defaultVars: (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultValues)((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.getOperationDefinition)(transformed)),
                asQuery: (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, transformed), { definitions: transformed.definitions.map(function (def) {
                        if (def.kind === "OperationDefinition" &&
                            def.operation !== "query") {
                            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, def), { operation: "query" });
                        }
                        return def;
                    }) })
            };
            var add = function (doc) {
                if (doc && !transformCache.has(doc)) {
                    transformCache.set(doc, cacheEntry_1);
                }
            };
            add(document);
            add(transformed);
            add(clientQuery);
            add(serverQuery);
        }
        return transformCache.get(document);
    };
    QueryManager.prototype.getVariables = function (document, variables) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, this.transform(document).defaultVars), variables);
    };
    QueryManager.prototype.watchQuery = function (options) {
        options = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, options), { variables: this.getVariables(options.query, options.variables) });
        if (typeof options.notifyOnNetworkStatusChange === 'undefined') {
            options.notifyOnNetworkStatusChange = false;
        }
        var queryInfo = new _QueryInfo_js__WEBPACK_IMPORTED_MODULE_6__.QueryInfo(this.cache);
        var observable = new _ObservableQuery_js__WEBPACK_IMPORTED_MODULE_7__.ObservableQuery({
            queryManager: this,
            queryInfo: queryInfo,
            options: options,
        });
        this.queries.set(observable.queryId, queryInfo);
        queryInfo.init({
            document: options.query,
            observableQuery: observable,
            variables: options.variables,
        });
        return observable;
    };
    QueryManager.prototype.query = function (options, queryId) {
        var _this = this;
        if (queryId === void 0) { queryId = this.generateQueryId(); }
        __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(options.query, 'query option is required. You must specify your GraphQL document ' +
            'in the query option.') : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(options.query, 17);
        __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(options.query.kind === 'Document', 'You must wrap the query string in a "gql" tag.') : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(options.query.kind === 'Document', 18);
        __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(!options.returnPartialData, 'returnPartialData option only supported on watchQuery.') : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(!options.returnPartialData, 19);
        __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(!options.pollInterval, 'pollInterval option only supported on watchQuery.') : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(!options.pollInterval, 20);
        return this.fetchQuery(queryId, options).finally(function () { return _this.stopQuery(queryId); });
    };
    QueryManager.prototype.generateQueryId = function () {
        return String(this.queryIdCounter++);
    };
    QueryManager.prototype.generateRequestId = function () {
        return this.requestIdCounter++;
    };
    QueryManager.prototype.generateMutationId = function () {
        return String(this.mutationIdCounter++);
    };
    QueryManager.prototype.stopQueryInStore = function (queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.stopQueryInStoreNoBroadcast = function (queryId) {
        var queryInfo = this.queries.get(queryId);
        if (queryInfo)
            queryInfo.stop();
    };
    QueryManager.prototype.clearStore = function () {
        this.cancelPendingFetches(__DEV__ ? new ts_invariant__WEBPACK_IMPORTED_MODULE_0__.InvariantError('Store reset while query was in flight (not completed in link chain)') : new ts_invariant__WEBPACK_IMPORTED_MODULE_0__.InvariantError(21));
        this.queries.forEach(function (queryInfo) {
            if (queryInfo.observableQuery) {
                queryInfo.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_8__.NetworkStatus.loading;
            }
            else {
                queryInfo.stop();
            }
        });
        if (this.mutationStore) {
            this.mutationStore = Object.create(null);
        }
        return this.cache.reset();
    };
    QueryManager.prototype.resetStore = function () {
        var _this = this;
        return this.clearStore().then(function () {
            return _this.reFetchObservableQueries();
        });
    };
    QueryManager.prototype.getObservableQueries = function (include) {
        var _this = this;
        if (include === void 0) { include = "active"; }
        var queries = new Map();
        var queryNamesAndDocs = new Map();
        var legacyQueryOptions = new Set();
        if (Array.isArray(include)) {
            include.forEach(function (desc) {
                if (typeof desc === "string") {
                    queryNamesAndDocs.set(desc, false);
                }
                else if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isDocumentNode)(desc)) {
                    queryNamesAndDocs.set(_this.transform(desc).document, false);
                }
                else if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isNonNullObject)(desc) && desc.query) {
                    legacyQueryOptions.add(desc);
                }
            });
        }
        this.queries.forEach(function (_a, queryId) {
            var oq = _a.observableQuery, document = _a.document;
            if (oq) {
                if (include === "all") {
                    queries.set(queryId, oq);
                    return;
                }
                var queryName = oq.queryName, fetchPolicy = oq.options.fetchPolicy;
                if (fetchPolicy === "standby" || !oq.hasObservers()) {
                    return;
                }
                if (include === "active" ||
                    (queryName && queryNamesAndDocs.has(queryName)) ||
                    (document && queryNamesAndDocs.has(document))) {
                    queries.set(queryId, oq);
                    if (queryName)
                        queryNamesAndDocs.set(queryName, true);
                    if (document)
                        queryNamesAndDocs.set(document, true);
                }
            }
        });
        if (legacyQueryOptions.size) {
            legacyQueryOptions.forEach(function (options) {
                var queryId = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.makeUniqueId)("legacyOneTimeQuery");
                var queryInfo = _this.getQuery(queryId).init({
                    document: options.query,
                    variables: options.variables,
                });
                var oq = new _ObservableQuery_js__WEBPACK_IMPORTED_MODULE_7__.ObservableQuery({
                    queryManager: _this,
                    queryInfo: queryInfo,
                    options: (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, options), { fetchPolicy: "network-only" }),
                });
                queryInfo.setObservableQuery(oq);
                queries.set(queryId, oq);
            });
        }
        if (__DEV__ && queryNamesAndDocs.size) {
            queryNamesAndDocs.forEach(function (included, nameOrDoc) {
                if (!included) {
                    __DEV__ && ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant.warn("Unknown query " + (typeof nameOrDoc === "string" ? "named " : "") + JSON.stringify(nameOrDoc, null, 2) + " requested in refetchQueries options.include array");
                }
            });
        }
        return queries;
    };
    QueryManager.prototype.reFetchObservableQueries = function (includeStandby) {
        var _this = this;
        if (includeStandby === void 0) { includeStandby = false; }
        var observableQueryPromises = [];
        this.getObservableQueries(includeStandby ? "all" : "active").forEach(function (observableQuery, queryId) {
            var fetchPolicy = observableQuery.options.fetchPolicy;
            observableQuery.resetLastResults();
            if (includeStandby ||
                (fetchPolicy !== "standby" &&
                    fetchPolicy !== "cache-only")) {
                observableQueryPromises.push(observableQuery.refetch());
            }
            _this.getQuery(queryId).setDiff(null);
        });
        this.broadcastQueries();
        return Promise.all(observableQueryPromises);
    };
    QueryManager.prototype.setObservableQuery = function (observableQuery) {
        this.getQuery(observableQuery.queryId).setObservableQuery(observableQuery);
    };
    QueryManager.prototype.startGraphQLSubscription = function (_a) {
        var _this = this;
        var query = _a.query, fetchPolicy = _a.fetchPolicy, errorPolicy = _a.errorPolicy, variables = _a.variables, _b = _a.context, context = _b === void 0 ? {} : _b;
        query = this.transform(query).document;
        variables = this.getVariables(query, variables);
        var makeObservable = function (variables) {
            return _this.getObservableFromLink(query, context, variables).map(function (result) {
                if (fetchPolicy !== 'no-cache') {
                    if ((0,_QueryInfo_js__WEBPACK_IMPORTED_MODULE_6__.shouldWriteResult)(result, errorPolicy)) {
                        _this.cache.write({
                            query: query,
                            result: result.data,
                            dataId: 'ROOT_SUBSCRIPTION',
                            variables: variables,
                        });
                    }
                    _this.broadcastQueries();
                }
                if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.graphQLResultHasError)(result)) {
                    throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_5__.ApolloError({
                        graphQLErrors: result.errors,
                    });
                }
                return result;
            });
        };
        if (this.transform(query).hasClientExports) {
            var observablePromise_1 = this.localState.addExportedVariables(query, variables, context).then(makeObservable);
            return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.Observable(function (observer) {
                var sub = null;
                observablePromise_1.then(function (observable) { return sub = observable.subscribe(observer); }, observer.error);
                return function () { return sub && sub.unsubscribe(); };
            });
        }
        return makeObservable(variables);
    };
    QueryManager.prototype.stopQuery = function (queryId) {
        this.stopQueryNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.stopQueryNoBroadcast = function (queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.removeQuery(queryId);
    };
    QueryManager.prototype.removeQuery = function (queryId) {
        this.fetchCancelFns.delete(queryId);
        this.getQuery(queryId).stop();
        this.queries.delete(queryId);
    };
    QueryManager.prototype.broadcastQueries = function () {
        if (this.onBroadcast)
            this.onBroadcast();
        this.queries.forEach(function (info) { return info.notify(); });
    };
    QueryManager.prototype.getLocalState = function () {
        return this.localState;
    };
    QueryManager.prototype.getObservableFromLink = function (query, context, variables, deduplication) {
        var _this = this;
        var _a;
        if (deduplication === void 0) { deduplication = (_a = context === null || context === void 0 ? void 0 : context.queryDeduplication) !== null && _a !== void 0 ? _a : this.queryDeduplication; }
        var observable;
        var serverQuery = this.transform(query).serverQuery;
        if (serverQuery) {
            var _b = this, inFlightLinkObservables_1 = _b.inFlightLinkObservables, link = _b.link;
            var operation = {
                query: serverQuery,
                variables: variables,
                operationName: (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.getOperationName)(serverQuery) || void 0,
                context: this.prepareContext((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, context), { forceFetch: !deduplication })),
            };
            context = operation.context;
            if (deduplication) {
                var byVariables_1 = inFlightLinkObservables_1.get(serverQuery) || new Map();
                inFlightLinkObservables_1.set(serverQuery, byVariables_1);
                var varJson_1 = (0,_cache_index_js__WEBPACK_IMPORTED_MODULE_9__.canonicalStringify)(variables);
                observable = byVariables_1.get(varJson_1);
                if (!observable) {
                    var concast = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.Concast([
                        (0,_link_core_index_js__WEBPACK_IMPORTED_MODULE_10__.execute)(link, operation)
                    ]);
                    byVariables_1.set(varJson_1, observable = concast);
                    concast.cleanup(function () {
                        if (byVariables_1.delete(varJson_1) &&
                            byVariables_1.size < 1) {
                            inFlightLinkObservables_1.delete(serverQuery);
                        }
                    });
                }
            }
            else {
                observable = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.Concast([
                    (0,_link_core_index_js__WEBPACK_IMPORTED_MODULE_10__.execute)(link, operation)
                ]);
            }
        }
        else {
            observable = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.Concast([
                _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.Observable.of({ data: {} })
            ]);
            context = this.prepareContext(context);
        }
        var clientQuery = this.transform(query).clientQuery;
        if (clientQuery) {
            observable = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.asyncMap)(observable, function (result) {
                return _this.localState.runResolvers({
                    document: clientQuery,
                    remoteResult: result,
                    context: context,
                    variables: variables,
                });
            });
        }
        return observable;
    };
    QueryManager.prototype.getResultsFromLink = function (queryInfo, cacheWriteBehavior, options) {
        var requestId = queryInfo.lastRequestId = this.generateRequestId();
        return (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.asyncMap)(this.getObservableFromLink(queryInfo.document, options.context, options.variables), function (result) {
            var hasErrors = (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isNonEmptyArray)(result.errors);
            if (requestId >= queryInfo.lastRequestId) {
                if (hasErrors && options.errorPolicy === "none") {
                    throw queryInfo.markError(new _errors_index_js__WEBPACK_IMPORTED_MODULE_5__.ApolloError({
                        graphQLErrors: result.errors,
                    }));
                }
                queryInfo.markResult(result, options, cacheWriteBehavior);
                queryInfo.markReady();
            }
            var aqr = {
                data: result.data,
                loading: false,
                networkStatus: queryInfo.networkStatus || _networkStatus_js__WEBPACK_IMPORTED_MODULE_8__.NetworkStatus.ready,
            };
            if (hasErrors && options.errorPolicy !== "ignore") {
                aqr.errors = result.errors;
            }
            return aqr;
        }, function (networkError) {
            var error = (0,_errors_index_js__WEBPACK_IMPORTED_MODULE_5__.isApolloError)(networkError)
                ? networkError
                : new _errors_index_js__WEBPACK_IMPORTED_MODULE_5__.ApolloError({ networkError: networkError });
            if (requestId >= queryInfo.lastRequestId) {
                queryInfo.markError(error);
            }
            throw error;
        });
    };
    QueryManager.prototype.fetchQueryObservable = function (queryId, options, networkStatus) {
        var _this = this;
        if (networkStatus === void 0) { networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_8__.NetworkStatus.loading; }
        var query = this.transform(options.query).document;
        var variables = this.getVariables(query, options.variables);
        var queryInfo = this.getQuery(queryId);
        var _a = options.fetchPolicy, fetchPolicy = _a === void 0 ? "cache-first" : _a, _b = options.errorPolicy, errorPolicy = _b === void 0 ? "none" : _b, _c = options.returnPartialData, returnPartialData = _c === void 0 ? false : _c, _d = options.notifyOnNetworkStatusChange, notifyOnNetworkStatusChange = _d === void 0 ? false : _d, _e = options.context, context = _e === void 0 ? {} : _e;
        var normalized = Object.assign({}, options, {
            query: query,
            variables: variables,
            fetchPolicy: fetchPolicy,
            errorPolicy: errorPolicy,
            returnPartialData: returnPartialData,
            notifyOnNetworkStatusChange: notifyOnNetworkStatusChange,
            context: context,
        });
        var fromVariables = function (variables) {
            normalized.variables = variables;
            return _this.fetchQueryByPolicy(queryInfo, normalized, networkStatus);
        };
        this.fetchCancelFns.set(queryId, function (reason) {
            Promise.resolve().then(function () { return concast.cancel(reason); });
        });
        var concast = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.Concast(this.transform(normalized.query).hasClientExports
            ? this.localState.addExportedVariables(normalized.query, normalized.variables, normalized.context).then(fromVariables)
            : fromVariables(normalized.variables));
        concast.cleanup(function () {
            _this.fetchCancelFns.delete(queryId);
            (0,_ObservableQuery_js__WEBPACK_IMPORTED_MODULE_7__.applyNextFetchPolicy)(options);
        });
        return concast;
    };
    QueryManager.prototype.refetchQueries = function (_a) {
        var _this = this;
        var updateCache = _a.updateCache, include = _a.include, _b = _a.optimistic, optimistic = _b === void 0 ? false : _b, _c = _a.removeOptimistic, removeOptimistic = _c === void 0 ? optimistic ? (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.makeUniqueId)("refetchQueries") : void 0 : _c, onQueryUpdated = _a.onQueryUpdated;
        var includedQueriesById = new Map();
        if (include) {
            this.getObservableQueries(include).forEach(function (oq, queryId) {
                includedQueriesById.set(queryId, {
                    oq: oq,
                    lastDiff: _this.getQuery(queryId).getDiff(),
                });
            });
        }
        var results = new Map;
        if (updateCache) {
            this.cache.batch({
                update: updateCache,
                optimistic: optimistic && removeOptimistic || false,
                removeOptimistic: removeOptimistic,
                onWatchUpdated: function (watch, diff, lastDiff) {
                    var oq = watch.watcher instanceof _QueryInfo_js__WEBPACK_IMPORTED_MODULE_6__.QueryInfo &&
                        watch.watcher.observableQuery;
                    if (oq) {
                        if (onQueryUpdated) {
                            includedQueriesById.delete(oq.queryId);
                            var result = onQueryUpdated(oq, diff, lastDiff);
                            if (result === true) {
                                result = oq.refetch();
                            }
                            if (result !== false) {
                                results.set(oq, result);
                            }
                            return false;
                        }
                        if (onQueryUpdated !== null) {
                            includedQueriesById.set(oq.queryId, { oq: oq, lastDiff: lastDiff, diff: diff });
                        }
                    }
                },
            });
        }
        if (includedQueriesById.size) {
            includedQueriesById.forEach(function (_a, queryId) {
                var oq = _a.oq, lastDiff = _a.lastDiff, diff = _a.diff;
                var result;
                if (onQueryUpdated) {
                    if (!diff) {
                        var info = oq["queryInfo"];
                        info.reset();
                        diff = info.getDiff();
                    }
                    result = onQueryUpdated(oq, diff, lastDiff);
                }
                if (!onQueryUpdated || result === true) {
                    result = oq.refetch();
                }
                if (result !== false) {
                    results.set(oq, result);
                }
                if (queryId.indexOf("legacyOneTimeQuery") >= 0) {
                    _this.stopQueryNoBroadcast(queryId);
                }
            });
        }
        if (removeOptimistic) {
            this.cache.removeOptimistic(removeOptimistic);
        }
        return results;
    };
    QueryManager.prototype.fetchQueryByPolicy = function (queryInfo, _a, networkStatus) {
        var _this = this;
        var query = _a.query, variables = _a.variables, fetchPolicy = _a.fetchPolicy, refetchWritePolicy = _a.refetchWritePolicy, errorPolicy = _a.errorPolicy, returnPartialData = _a.returnPartialData, context = _a.context, notifyOnNetworkStatusChange = _a.notifyOnNetworkStatusChange;
        var oldNetworkStatus = queryInfo.networkStatus;
        queryInfo.init({
            document: query,
            variables: variables,
            networkStatus: networkStatus,
        });
        var readCache = function () { return queryInfo.getDiff(variables); };
        var resultsFromCache = function (diff, networkStatus) {
            if (networkStatus === void 0) { networkStatus = queryInfo.networkStatus || _networkStatus_js__WEBPACK_IMPORTED_MODULE_8__.NetworkStatus.loading; }
            var data = diff.result;
            if (__DEV__ &&
                (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.isNonEmptyArray)(diff.missing) &&
                !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__.equal)(data, {}) &&
                !returnPartialData) {
                __DEV__ && ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant.debug("Missing cache result fields: " + diff.missing.map(function (m) { return m.path.join('.'); }).join(', '), diff.missing);
            }
            var fromData = function (data) { return _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__.Observable.of((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({ data: data, loading: (0,_networkStatus_js__WEBPACK_IMPORTED_MODULE_8__.isNetworkRequestInFlight)(networkStatus), networkStatus: networkStatus }, (diff.complete ? null : { partial: true }))); };
            if (data && _this.transform(query).hasForcedResolvers) {
                return _this.localState.runResolvers({
                    document: query,
                    remoteResult: { data: data },
                    context: context,
                    variables: variables,
                    onlyRunForcedResolvers: true,
                }).then(function (resolved) { return fromData(resolved.data || void 0); });
            }
            return fromData(data);
        };
        var cacheWriteBehavior = fetchPolicy === "no-cache" ? 0 :
            (networkStatus === _networkStatus_js__WEBPACK_IMPORTED_MODULE_8__.NetworkStatus.refetch &&
                refetchWritePolicy !== "merge") ? 1
                : 2;
        var resultsFromLink = function () {
            return _this.getResultsFromLink(queryInfo, cacheWriteBehavior, {
                variables: variables,
                context: context,
                fetchPolicy: fetchPolicy,
                errorPolicy: errorPolicy,
            });
        };
        var shouldNotify = notifyOnNetworkStatusChange &&
            typeof oldNetworkStatus === "number" &&
            oldNetworkStatus !== networkStatus &&
            (0,_networkStatus_js__WEBPACK_IMPORTED_MODULE_8__.isNetworkRequestInFlight)(networkStatus);
        switch (fetchPolicy) {
            default:
            case "cache-first": {
                var diff = readCache();
                if (diff.complete) {
                    return [
                        resultsFromCache(diff, queryInfo.markReady()),
                    ];
                }
                if (returnPartialData || shouldNotify) {
                    return [
                        resultsFromCache(diff),
                        resultsFromLink(),
                    ];
                }
                return [
                    resultsFromLink(),
                ];
            }
            case "cache-and-network": {
                var diff = readCache();
                if (diff.complete || returnPartialData || shouldNotify) {
                    return [
                        resultsFromCache(diff),
                        resultsFromLink(),
                    ];
                }
                return [
                    resultsFromLink(),
                ];
            }
            case "cache-only":
                return [
                    resultsFromCache(readCache(), queryInfo.markReady()),
                ];
            case "network-only":
                if (shouldNotify) {
                    return [
                        resultsFromCache(readCache()),
                        resultsFromLink(),
                    ];
                }
                return [resultsFromLink()];
            case "no-cache":
                if (shouldNotify) {
                    return [
                        resultsFromCache(queryInfo.getDiff()),
                        resultsFromLink(),
                    ];
                }
                return [resultsFromLink()];
            case "standby":
                return [];
        }
    };
    QueryManager.prototype.getQuery = function (queryId) {
        if (queryId && !this.queries.has(queryId)) {
            this.queries.set(queryId, new _QueryInfo_js__WEBPACK_IMPORTED_MODULE_6__.QueryInfo(this.cache));
        }
        return this.queries.get(queryId);
    };
    QueryManager.prototype.prepareContext = function (context) {
        if (context === void 0) { context = {}; }
        var newContext = this.localState.prepareContext(context);
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, newContext), { clientAwareness: this.clientAwareness });
    };
    return QueryManager;
}());

//# sourceMappingURL=QueryManager.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/core/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@apollo/client/core/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApolloClient": function() { return /* reexport safe */ _ApolloClient_js__WEBPACK_IMPORTED_MODULE_0__.ApolloClient; },
/* harmony export */   "mergeOptions": function() { return /* reexport safe */ _ApolloClient_js__WEBPACK_IMPORTED_MODULE_0__.mergeOptions; },
/* harmony export */   "ObservableQuery": function() { return /* reexport safe */ _ObservableQuery_js__WEBPACK_IMPORTED_MODULE_1__.ObservableQuery; },
/* harmony export */   "applyNextFetchPolicy": function() { return /* reexport safe */ _ObservableQuery_js__WEBPACK_IMPORTED_MODULE_1__.applyNextFetchPolicy; },
/* harmony export */   "NetworkStatus": function() { return /* reexport safe */ _networkStatus_js__WEBPACK_IMPORTED_MODULE_2__.NetworkStatus; },
/* harmony export */   "isApolloError": function() { return /* reexport safe */ _errors_index_js__WEBPACK_IMPORTED_MODULE_4__.isApolloError; },
/* harmony export */   "ApolloError": function() { return /* reexport safe */ _errors_index_js__WEBPACK_IMPORTED_MODULE_4__.ApolloError; },
/* harmony export */   "Cache": function() { return /* reexport safe */ _cache_index_js__WEBPACK_IMPORTED_MODULE_5__.Cache; },
/* harmony export */   "ApolloCache": function() { return /* reexport safe */ _cache_index_js__WEBPACK_IMPORTED_MODULE_5__.ApolloCache; },
/* harmony export */   "InMemoryCache": function() { return /* reexport safe */ _cache_index_js__WEBPACK_IMPORTED_MODULE_5__.InMemoryCache; },
/* harmony export */   "MissingFieldError": function() { return /* reexport safe */ _cache_index_js__WEBPACK_IMPORTED_MODULE_5__.MissingFieldError; },
/* harmony export */   "defaultDataIdFromObject": function() { return /* reexport safe */ _cache_index_js__WEBPACK_IMPORTED_MODULE_5__.defaultDataIdFromObject; },
/* harmony export */   "makeVar": function() { return /* reexport safe */ _cache_index_js__WEBPACK_IMPORTED_MODULE_5__.makeVar; },
/* harmony export */   "fromError": function() { return /* reexport safe */ _link_utils_index_js__WEBPACK_IMPORTED_MODULE_9__.fromError; },
/* harmony export */   "toPromise": function() { return /* reexport safe */ _link_utils_index_js__WEBPACK_IMPORTED_MODULE_9__.toPromise; },
/* harmony export */   "fromPromise": function() { return /* reexport safe */ _link_utils_index_js__WEBPACK_IMPORTED_MODULE_9__.fromPromise; },
/* harmony export */   "throwServerError": function() { return /* reexport safe */ _link_utils_index_js__WEBPACK_IMPORTED_MODULE_9__.throwServerError; },
/* harmony export */   "Observable": function() { return /* reexport safe */ _utilities_index_js__WEBPACK_IMPORTED_MODULE_10__.Observable; },
/* harmony export */   "isReference": function() { return /* reexport safe */ _utilities_index_js__WEBPACK_IMPORTED_MODULE_10__.isReference; },
/* harmony export */   "makeReference": function() { return /* reexport safe */ _utilities_index_js__WEBPACK_IMPORTED_MODULE_10__.makeReference; },
/* harmony export */   "setLogVerbosity": function() { return /* reexport safe */ ts_invariant__WEBPACK_IMPORTED_MODULE_11__.setVerbosity; },
/* harmony export */   "gql": function() { return /* reexport safe */ graphql_tag__WEBPACK_IMPORTED_MODULE_12__.gql; },
/* harmony export */   "resetCaches": function() { return /* reexport safe */ graphql_tag__WEBPACK_IMPORTED_MODULE_12__.resetCaches; },
/* harmony export */   "disableFragmentWarnings": function() { return /* reexport safe */ graphql_tag__WEBPACK_IMPORTED_MODULE_12__.disableFragmentWarnings; },
/* harmony export */   "enableExperimentalFragmentVariables": function() { return /* reexport safe */ graphql_tag__WEBPACK_IMPORTED_MODULE_12__.enableExperimentalFragmentVariables; },
/* harmony export */   "disableExperimentalFragmentVariables": function() { return /* reexport safe */ graphql_tag__WEBPACK_IMPORTED_MODULE_12__.disableExperimentalFragmentVariables; }
/* harmony export */ });
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _ApolloClient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApolloClient.js */ "./node_modules/@apollo/client/core/ApolloClient.js");
/* harmony import */ var _ObservableQuery_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ObservableQuery.js */ "./node_modules/@apollo/client/core/ObservableQuery.js");
/* harmony import */ var _networkStatus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./networkStatus.js */ "./node_modules/@apollo/client/core/networkStatus.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ "./node_modules/@apollo/client/core/types.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types_js__WEBPACK_IMPORTED_MODULE_3__) if(["default","ApolloClient","mergeOptions","ObservableQuery","applyNextFetchPolicy","NetworkStatus","isApolloError","ApolloError","Cache","ApolloCache","InMemoryCache","MissingFieldError","defaultDataIdFromObject","makeVar","fromError","toPromise","fromPromise","throwServerError","Observable","isReference","makeReference","setLogVerbosity","gql","resetCaches","disableFragmentWarnings","enableExperimentalFragmentVariables","disableExperimentalFragmentVariables"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _types_js__WEBPACK_IMPORTED_MODULE_3__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../errors/index.js */ "./node_modules/@apollo/client/errors/index.js");
/* harmony import */ var _cache_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cache/index.js */ "./node_modules/@apollo/client/cache/index.js");
/* harmony import */ var _cache_inmemory_types_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cache/inmemory/types.js */ "./node_modules/@apollo/client/cache/inmemory/types.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _cache_inmemory_types_js__WEBPACK_IMPORTED_MODULE_6__) if(["default","ApolloClient","mergeOptions","ObservableQuery","applyNextFetchPolicy","NetworkStatus","isApolloError","ApolloError","Cache","ApolloCache","InMemoryCache","MissingFieldError","defaultDataIdFromObject","makeVar","fromError","toPromise","fromPromise","throwServerError","Observable","isReference","makeReference","setLogVerbosity","gql","resetCaches","disableFragmentWarnings","enableExperimentalFragmentVariables","disableExperimentalFragmentVariables"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _cache_inmemory_types_js__WEBPACK_IMPORTED_MODULE_6__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _link_core_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../link/core/index.js */ "./node_modules/@apollo/client/link/core/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _link_core_index_js__WEBPACK_IMPORTED_MODULE_7__) if(["default","ApolloClient","mergeOptions","ObservableQuery","applyNextFetchPolicy","NetworkStatus","isApolloError","ApolloError","Cache","ApolloCache","InMemoryCache","MissingFieldError","defaultDataIdFromObject","makeVar","fromError","toPromise","fromPromise","throwServerError","Observable","isReference","makeReference","setLogVerbosity","gql","resetCaches","disableFragmentWarnings","enableExperimentalFragmentVariables","disableExperimentalFragmentVariables"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _link_core_index_js__WEBPACK_IMPORTED_MODULE_7__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _link_http_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../link/http/index.js */ "./node_modules/@apollo/client/link/http/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _link_http_index_js__WEBPACK_IMPORTED_MODULE_8__) if(["default","ApolloClient","mergeOptions","ObservableQuery","applyNextFetchPolicy","NetworkStatus","isApolloError","ApolloError","Cache","ApolloCache","InMemoryCache","MissingFieldError","defaultDataIdFromObject","makeVar","fromError","toPromise","fromPromise","throwServerError","Observable","isReference","makeReference","setLogVerbosity","gql","resetCaches","disableFragmentWarnings","enableExperimentalFragmentVariables","disableExperimentalFragmentVariables"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _link_http_index_js__WEBPACK_IMPORTED_MODULE_8__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _link_utils_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../link/utils/index.js */ "./node_modules/@apollo/client/link/utils/index.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");














(0,ts_invariant__WEBPACK_IMPORTED_MODULE_11__.setVerbosity)(_utilities_index_js__WEBPACK_IMPORTED_MODULE_10__.DEV ? "log" : "silent");

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/core/networkStatus.js":
/*!***********************************************************!*\
  !*** ./node_modules/@apollo/client/core/networkStatus.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkStatus": function() { return /* binding */ NetworkStatus; },
/* harmony export */   "isNetworkRequestInFlight": function() { return /* binding */ isNetworkRequestInFlight; }
/* harmony export */ });
var NetworkStatus;
(function (NetworkStatus) {
    NetworkStatus[NetworkStatus["loading"] = 1] = "loading";
    NetworkStatus[NetworkStatus["setVariables"] = 2] = "setVariables";
    NetworkStatus[NetworkStatus["fetchMore"] = 3] = "fetchMore";
    NetworkStatus[NetworkStatus["refetch"] = 4] = "refetch";
    NetworkStatus[NetworkStatus["poll"] = 6] = "poll";
    NetworkStatus[NetworkStatus["ready"] = 7] = "ready";
    NetworkStatus[NetworkStatus["error"] = 8] = "error";
})(NetworkStatus || (NetworkStatus = {}));
function isNetworkRequestInFlight(networkStatus) {
    return networkStatus ? networkStatus < 7 : false;
}
//# sourceMappingURL=networkStatus.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/core/types.js":
/*!***************************************************!*\
  !*** ./node_modules/@apollo/client/core/types.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/errors/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@apollo/client/errors/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isApolloError": function() { return /* binding */ isApolloError; },
/* harmony export */   "ApolloError": function() { return /* binding */ ApolloError; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");



__DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)("boolean" === typeof _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.DEV, _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.DEV) : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)("boolean" === typeof _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.DEV, 22);

function isApolloError(err) {
    return err.hasOwnProperty('graphQLErrors');
}
var generateErrorMessage = function (err) {
    var message = '';
    if ((0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.isNonEmptyArray)(err.graphQLErrors) || (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.isNonEmptyArray)(err.clientErrors)) {
        var errors = (err.graphQLErrors || [])
            .concat(err.clientErrors || []);
        errors.forEach(function (error) {
            var errorMessage = error
                ? error.message
                : 'Error message not found.';
            message += errorMessage + "\n";
        });
    }
    if (err.networkError) {
        message += err.networkError.message + "\n";
    }
    message = message.replace(/\n$/, '');
    return message;
};
var ApolloError = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ApolloError, _super);
    function ApolloError(_a) {
        var graphQLErrors = _a.graphQLErrors, clientErrors = _a.clientErrors, networkError = _a.networkError, errorMessage = _a.errorMessage, extraInfo = _a.extraInfo;
        var _this = _super.call(this, errorMessage) || this;
        _this.graphQLErrors = graphQLErrors || [];
        _this.clientErrors = clientErrors || [];
        _this.networkError = networkError || null;
        _this.message = errorMessage || generateErrorMessage(_this);
        _this.extraInfo = extraInfo;
        _this.__proto__ = ApolloError.prototype;
        return _this;
    }
    return ApolloError;
}(Error));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/index.js":
/*!**********************************************!*\
  !*** ./node_modules/@apollo/client/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/index.js */ "./node_modules/@apollo/client/core/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _core_index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _react_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react/index.js */ "./node_modules/@apollo/client/react/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _react_index_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _react_index_js__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/core/ApolloLink.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/ApolloLink.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApolloLink": function() { return /* binding */ ApolloLink; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/@apollo/client/link/utils/index.js");




function passthrough(op, forward) {
    return (forward ? forward(op) : _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of());
}
function toLink(handler) {
    return typeof handler === 'function' ? new ApolloLink(handler) : handler;
}
function isTerminating(link) {
    return link.request.length <= 1;
}
var LinkError = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(LinkError, _super);
    function LinkError(message, link) {
        var _this = _super.call(this, message) || this;
        _this.link = link;
        return _this;
    }
    return LinkError;
}(Error));
var ApolloLink = (function () {
    function ApolloLink(request) {
        if (request)
            this.request = request;
    }
    ApolloLink.empty = function () {
        return new ApolloLink(function () { return _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of(); });
    };
    ApolloLink.from = function (links) {
        if (links.length === 0)
            return ApolloLink.empty();
        return links.map(toLink).reduce(function (x, y) { return x.concat(y); });
    };
    ApolloLink.split = function (test, left, right) {
        var leftLink = toLink(left);
        var rightLink = toLink(right || new ApolloLink(passthrough));
        if (isTerminating(leftLink) && isTerminating(rightLink)) {
            return new ApolloLink(function (operation) {
                return test(operation)
                    ? leftLink.request(operation) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of()
                    : rightLink.request(operation) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of();
            });
        }
        else {
            return new ApolloLink(function (operation, forward) {
                return test(operation)
                    ? leftLink.request(operation, forward) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of()
                    : rightLink.request(operation, forward) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of();
            });
        }
    };
    ApolloLink.execute = function (link, operation) {
        return (link.request((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__.createOperation)(operation.context, (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__.transformOperation)((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__.validateOperation)(operation)))) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of());
    };
    ApolloLink.concat = function (first, second) {
        var firstLink = toLink(first);
        if (isTerminating(firstLink)) {
            __DEV__ && ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant.warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
            return firstLink;
        }
        var nextLink = toLink(second);
        if (isTerminating(nextLink)) {
            return new ApolloLink(function (operation) {
                return firstLink.request(operation, function (op) { return nextLink.request(op) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of(); }) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of();
            });
        }
        else {
            return new ApolloLink(function (operation, forward) {
                return (firstLink.request(operation, function (op) {
                    return nextLink.request(op, forward) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of();
                }) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.Observable.of());
            });
        }
    };
    ApolloLink.prototype.split = function (test, left, right) {
        return this.concat(ApolloLink.split(test, left, right || new ApolloLink(passthrough)));
    };
    ApolloLink.prototype.concat = function (next) {
        return ApolloLink.concat(this, next);
    };
    ApolloLink.prototype.request = function (operation, forward) {
        throw __DEV__ ? new ts_invariant__WEBPACK_IMPORTED_MODULE_0__.InvariantError('request is not implemented') : new ts_invariant__WEBPACK_IMPORTED_MODULE_0__.InvariantError(23);
    };
    ApolloLink.prototype.onError = function (error, observer) {
        if (observer && observer.error) {
            observer.error(error);
            return false;
        }
        throw error;
    };
    ApolloLink.prototype.setOnError = function (fn) {
        this.onError = fn;
        return this;
    };
    return ApolloLink;
}());

//# sourceMappingURL=ApolloLink.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/core/concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/concat.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "concat": function() { return /* binding */ concat; }
/* harmony export */ });
/* harmony import */ var _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApolloLink.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");

var concat = _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__.ApolloLink.concat;
//# sourceMappingURL=concat.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/core/empty.js":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/empty.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "empty": function() { return /* binding */ empty; }
/* harmony export */ });
/* harmony import */ var _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApolloLink.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");

var empty = _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__.ApolloLink.empty;
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/core/execute.js":
/*!**********************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/execute.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "execute": function() { return /* binding */ execute; }
/* harmony export */ });
/* harmony import */ var _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApolloLink.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");

var execute = _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__.ApolloLink.execute;
//# sourceMappingURL=execute.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/core/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/from.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "from": function() { return /* binding */ from; }
/* harmony export */ });
/* harmony import */ var _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApolloLink.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");

var from = _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__.ApolloLink.from;
//# sourceMappingURL=from.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/core/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "empty": function() { return /* reexport safe */ _empty_js__WEBPACK_IMPORTED_MODULE_2__.empty; },
/* harmony export */   "from": function() { return /* reexport safe */ _from_js__WEBPACK_IMPORTED_MODULE_3__.from; },
/* harmony export */   "split": function() { return /* reexport safe */ _split_js__WEBPACK_IMPORTED_MODULE_4__.split; },
/* harmony export */   "concat": function() { return /* reexport safe */ _concat_js__WEBPACK_IMPORTED_MODULE_5__.concat; },
/* harmony export */   "execute": function() { return /* reexport safe */ _execute_js__WEBPACK_IMPORTED_MODULE_6__.execute; },
/* harmony export */   "ApolloLink": function() { return /* reexport safe */ _ApolloLink_js__WEBPACK_IMPORTED_MODULE_7__.ApolloLink; }
/* harmony export */ });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _empty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empty.js */ "./node_modules/@apollo/client/link/core/empty.js");
/* harmony import */ var _from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./from.js */ "./node_modules/@apollo/client/link/core/from.js");
/* harmony import */ var _split_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./split.js */ "./node_modules/@apollo/client/link/core/split.js");
/* harmony import */ var _concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./concat.js */ "./node_modules/@apollo/client/link/core/concat.js");
/* harmony import */ var _execute_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./execute.js */ "./node_modules/@apollo/client/link/core/execute.js");
/* harmony import */ var _ApolloLink_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ApolloLink.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types.js */ "./node_modules/@apollo/client/link/core/types.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types_js__WEBPACK_IMPORTED_MODULE_8__) if(["default","empty","from","split","concat","execute","ApolloLink"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _types_js__WEBPACK_IMPORTED_MODULE_8__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


__DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)("boolean" === typeof _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.DEV, _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.DEV) : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)("boolean" === typeof _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.DEV, 24);







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/core/split.js":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/split.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "split": function() { return /* binding */ split; }
/* harmony export */ });
/* harmony import */ var _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApolloLink.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");

var split = _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__.ApolloLink.split;
//# sourceMappingURL=split.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/core/types.js":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/types.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
;

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/HttpLink.js":
/*!***********************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/HttpLink.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLink": function() { return /* binding */ HttpLink; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/index.js */ "./node_modules/@apollo/client/link/core/index.js");
/* harmony import */ var _createHttpLink_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createHttpLink.js */ "./node_modules/@apollo/client/link/http/createHttpLink.js");



var HttpLink = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(HttpLink, _super);
    function HttpLink(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, (0,_createHttpLink_js__WEBPACK_IMPORTED_MODULE_1__.createHttpLink)(options).request) || this;
        _this.options = options;
        return _this;
    }
    return HttpLink;
}(_core_index_js__WEBPACK_IMPORTED_MODULE_2__.ApolloLink));

//# sourceMappingURL=HttpLink.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/checkFetcher.js":
/*!***************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/checkFetcher.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkFetcher": function() { return /* binding */ checkFetcher; }
/* harmony export */ });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");

var checkFetcher = function (fetcher) {
    if (!fetcher && typeof fetch === 'undefined') {
        throw __DEV__ ? new ts_invariant__WEBPACK_IMPORTED_MODULE_0__.InvariantError("\n\"fetch\" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:\n\nimport fetch from 'cross-fetch';\nimport { ApolloClient, HttpLink } from '@apollo/client';\nconst client = new ApolloClient({\n  link: new HttpLink({ uri: '/graphql', fetch })\n});\n    ") : new ts_invariant__WEBPACK_IMPORTED_MODULE_0__.InvariantError(25);
    }
};
//# sourceMappingURL=checkFetcher.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/createHttpLink.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/createHttpLink.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHttpLink": function() { return /* binding */ createHttpLink; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/index.js */ "./node_modules/@apollo/client/link/core/index.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./serializeFetchParameter.js */ "./node_modules/@apollo/client/link/http/serializeFetchParameter.js");
/* harmony import */ var _selectURI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectURI.js */ "./node_modules/@apollo/client/link/http/selectURI.js");
/* harmony import */ var _parseAndCheckHttpResponse_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parseAndCheckHttpResponse.js */ "./node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js");
/* harmony import */ var _checkFetcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkFetcher.js */ "./node_modules/@apollo/client/link/http/checkFetcher.js");
/* harmony import */ var _selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectHttpOptionsAndBody.js */ "./node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js");
/* harmony import */ var _createSignalIfSupported_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createSignalIfSupported.js */ "./node_modules/@apollo/client/link/http/createSignalIfSupported.js");
/* harmony import */ var _rewriteURIForGET_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rewriteURIForGET.js */ "./node_modules/@apollo/client/link/http/rewriteURIForGET.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/@apollo/client/link/utils/index.js");












var createHttpLink = function (linkOptions) {
    if (linkOptions === void 0) { linkOptions = {}; }
    var _a = linkOptions.uri, uri = _a === void 0 ? '/graphql' : _a, fetcher = linkOptions.fetch, includeExtensions = linkOptions.includeExtensions, useGETForQueries = linkOptions.useGETForQueries, _b = linkOptions.includeUnusedVariables, includeUnusedVariables = _b === void 0 ? false : _b, requestOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(linkOptions, ["uri", "fetch", "includeExtensions", "useGETForQueries", "includeUnusedVariables"]);
    (0,_checkFetcher_js__WEBPACK_IMPORTED_MODULE_1__.checkFetcher)(fetcher);
    if (!fetcher) {
        fetcher = fetch;
    }
    var linkConfig = {
        http: { includeExtensions: includeExtensions },
        options: requestOptions.fetchOptions,
        credentials: requestOptions.credentials,
        headers: requestOptions.headers,
    };
    return new _core_index_js__WEBPACK_IMPORTED_MODULE_2__.ApolloLink(function (operation) {
        var chosenURI = (0,_selectURI_js__WEBPACK_IMPORTED_MODULE_3__.selectURI)(operation, uri);
        var context = operation.getContext();
        var clientAwarenessHeaders = {};
        if (context.clientAwareness) {
            var _a = context.clientAwareness, name_1 = _a.name, version = _a.version;
            if (name_1) {
                clientAwarenessHeaders['apollographql-client-name'] = name_1;
            }
            if (version) {
                clientAwarenessHeaders['apollographql-client-version'] = version;
            }
        }
        var contextHeaders = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, clientAwarenessHeaders), context.headers);
        var contextConfig = {
            http: context.http,
            options: context.fetchOptions,
            credentials: context.credentials,
            headers: contextHeaders,
        };
        var _b = (0,_selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_4__.selectHttpOptionsAndBody)(operation, _selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_4__.fallbackHttpConfig, linkConfig, contextConfig), options = _b.options, body = _b.body;
        if (body.variables && !includeUnusedVariables) {
            var unusedNames_1 = new Set(Object.keys(body.variables));
            (0,graphql__WEBPACK_IMPORTED_MODULE_5__.visit)(operation.query, {
                Variable: function (node, _key, parent) {
                    if (parent && parent.kind !== 'VariableDefinition') {
                        unusedNames_1.delete(node.name.value);
                    }
                },
            });
            if (unusedNames_1.size) {
                body.variables = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, body.variables);
                unusedNames_1.forEach(function (name) {
                    delete body.variables[name];
                });
            }
        }
        var controller;
        if (!options.signal) {
            var _c = (0,_createSignalIfSupported_js__WEBPACK_IMPORTED_MODULE_6__.createSignalIfSupported)(), _controller = _c.controller, signal = _c.signal;
            controller = _controller;
            if (controller)
                options.signal = signal;
        }
        var definitionIsMutation = function (d) {
            return d.kind === 'OperationDefinition' && d.operation === 'mutation';
        };
        if (useGETForQueries &&
            !operation.query.definitions.some(definitionIsMutation)) {
            options.method = 'GET';
        }
        if (options.method === 'GET') {
            var _d = (0,_rewriteURIForGET_js__WEBPACK_IMPORTED_MODULE_7__.rewriteURIForGET)(chosenURI, body), newURI = _d.newURI, parseError = _d.parseError;
            if (parseError) {
                return (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_8__.fromError)(parseError);
            }
            chosenURI = newURI;
        }
        else {
            try {
                options.body = (0,_serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_9__.serializeFetchParameter)(body, 'Payload');
            }
            catch (parseError) {
                return (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_8__.fromError)(parseError);
            }
        }
        return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_10__.Observable(function (observer) {
            fetcher(chosenURI, options)
                .then(function (response) {
                operation.setContext({ response: response });
                return response;
            })
                .then((0,_parseAndCheckHttpResponse_js__WEBPACK_IMPORTED_MODULE_11__.parseAndCheckHttpResponse)(operation))
                .then(function (result) {
                observer.next(result);
                observer.complete();
                return result;
            })
                .catch(function (err) {
                if (err.name === 'AbortError')
                    return;
                if (err.result && err.result.errors && err.result.data) {
                    observer.next(err.result);
                }
                observer.error(err);
            });
            return function () {
                if (controller)
                    controller.abort();
            };
        });
    });
};
//# sourceMappingURL=createHttpLink.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/createSignalIfSupported.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/createSignalIfSupported.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSignalIfSupported": function() { return /* binding */ createSignalIfSupported; }
/* harmony export */ });
var createSignalIfSupported = function () {
    if (typeof AbortController === 'undefined')
        return { controller: false, signal: false };
    var controller = new AbortController();
    var signal = controller.signal;
    return { controller: controller, signal: signal };
};
//# sourceMappingURL=createSignalIfSupported.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseAndCheckHttpResponse": function() { return /* reexport safe */ _parseAndCheckHttpResponse_js__WEBPACK_IMPORTED_MODULE_0__.parseAndCheckHttpResponse; },
/* harmony export */   "serializeFetchParameter": function() { return /* reexport safe */ _serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_1__.serializeFetchParameter; },
/* harmony export */   "fallbackHttpConfig": function() { return /* reexport safe */ _selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_2__.fallbackHttpConfig; },
/* harmony export */   "selectHttpOptionsAndBody": function() { return /* reexport safe */ _selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_2__.selectHttpOptionsAndBody; },
/* harmony export */   "checkFetcher": function() { return /* reexport safe */ _checkFetcher_js__WEBPACK_IMPORTED_MODULE_3__.checkFetcher; },
/* harmony export */   "createSignalIfSupported": function() { return /* reexport safe */ _createSignalIfSupported_js__WEBPACK_IMPORTED_MODULE_4__.createSignalIfSupported; },
/* harmony export */   "selectURI": function() { return /* reexport safe */ _selectURI_js__WEBPACK_IMPORTED_MODULE_5__.selectURI; },
/* harmony export */   "createHttpLink": function() { return /* reexport safe */ _createHttpLink_js__WEBPACK_IMPORTED_MODULE_6__.createHttpLink; },
/* harmony export */   "HttpLink": function() { return /* reexport safe */ _HttpLink_js__WEBPACK_IMPORTED_MODULE_7__.HttpLink; },
/* harmony export */   "rewriteURIForGET": function() { return /* reexport safe */ _rewriteURIForGET_js__WEBPACK_IMPORTED_MODULE_8__.rewriteURIForGET; }
/* harmony export */ });
/* harmony import */ var _parseAndCheckHttpResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseAndCheckHttpResponse.js */ "./node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js");
/* harmony import */ var _serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serializeFetchParameter.js */ "./node_modules/@apollo/client/link/http/serializeFetchParameter.js");
/* harmony import */ var _selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectHttpOptionsAndBody.js */ "./node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js");
/* harmony import */ var _checkFetcher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkFetcher.js */ "./node_modules/@apollo/client/link/http/checkFetcher.js");
/* harmony import */ var _createSignalIfSupported_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createSignalIfSupported.js */ "./node_modules/@apollo/client/link/http/createSignalIfSupported.js");
/* harmony import */ var _selectURI_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectURI.js */ "./node_modules/@apollo/client/link/http/selectURI.js");
/* harmony import */ var _createHttpLink_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createHttpLink.js */ "./node_modules/@apollo/client/link/http/createHttpLink.js");
/* harmony import */ var _HttpLink_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HttpLink.js */ "./node_modules/@apollo/client/link/http/HttpLink.js");
/* harmony import */ var _rewriteURIForGET_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rewriteURIForGET.js */ "./node_modules/@apollo/client/link/http/rewriteURIForGET.js");









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseAndCheckHttpResponse": function() { return /* binding */ parseAndCheckHttpResponse; }
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/@apollo/client/link/utils/index.js");

var hasOwnProperty = Object.prototype.hasOwnProperty;
function parseAndCheckHttpResponse(operations) {
    return function (response) { return response
        .text()
        .then(function (bodyText) {
        try {
            return JSON.parse(bodyText);
        }
        catch (err) {
            var parseError = err;
            parseError.name = 'ServerParseError';
            parseError.response = response;
            parseError.statusCode = response.status;
            parseError.bodyText = bodyText;
            throw parseError;
        }
    })
        .then(function (result) {
        if (response.status >= 300) {
            (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.throwServerError)(response, result, "Response not successful: Received status code " + response.status);
        }
        if (!Array.isArray(result) &&
            !hasOwnProperty.call(result, 'data') &&
            !hasOwnProperty.call(result, 'errors')) {
            (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.throwServerError)(response, result, "Server response was missing for query '" + (Array.isArray(operations)
                ? operations.map(function (op) { return op.operationName; })
                : operations.operationName) + "'.");
        }
        return result;
    }); };
}
//# sourceMappingURL=parseAndCheckHttpResponse.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/rewriteURIForGET.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/rewriteURIForGET.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rewriteURIForGET": function() { return /* binding */ rewriteURIForGET; }
/* harmony export */ });
/* harmony import */ var _serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serializeFetchParameter.js */ "./node_modules/@apollo/client/link/http/serializeFetchParameter.js");

function rewriteURIForGET(chosenURI, body) {
    var queryParams = [];
    var addQueryParam = function (key, value) {
        queryParams.push(key + "=" + encodeURIComponent(value));
    };
    if ('query' in body) {
        addQueryParam('query', body.query);
    }
    if (body.operationName) {
        addQueryParam('operationName', body.operationName);
    }
    if (body.variables) {
        var serializedVariables = void 0;
        try {
            serializedVariables = (0,_serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_0__.serializeFetchParameter)(body.variables, 'Variables map');
        }
        catch (parseError) {
            return { parseError: parseError };
        }
        addQueryParam('variables', serializedVariables);
    }
    if (body.extensions) {
        var serializedExtensions = void 0;
        try {
            serializedExtensions = (0,_serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_0__.serializeFetchParameter)(body.extensions, 'Extensions map');
        }
        catch (parseError) {
            return { parseError: parseError };
        }
        addQueryParam('extensions', serializedExtensions);
    }
    var fragment = '', preFragment = chosenURI;
    var fragmentStart = chosenURI.indexOf('#');
    if (fragmentStart !== -1) {
        fragment = chosenURI.substr(fragmentStart);
        preFragment = chosenURI.substr(0, fragmentStart);
    }
    var queryParamsPrefix = preFragment.indexOf('?') === -1 ? '?' : '&';
    var newURI = preFragment + queryParamsPrefix + queryParams.join('&') + fragment;
    return { newURI: newURI };
}
//# sourceMappingURL=rewriteURIForGET.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fallbackHttpConfig": function() { return /* binding */ fallbackHttpConfig; },
/* harmony export */   "selectHttpOptionsAndBody": function() { return /* binding */ selectHttpOptionsAndBody; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");


var defaultHttpOptions = {
    includeQuery: true,
    includeExtensions: false,
};
var defaultHeaders = {
    accept: '*/*',
    'content-type': 'application/json',
};
var defaultOptions = {
    method: 'POST',
};
var fallbackHttpConfig = {
    http: defaultHttpOptions,
    headers: defaultHeaders,
    options: defaultOptions,
};
var selectHttpOptionsAndBody = function (operation, fallbackConfig) {
    var configs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        configs[_i - 2] = arguments[_i];
    }
    var options = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, fallbackConfig.options), { headers: fallbackConfig.headers, credentials: fallbackConfig.credentials });
    var http = fallbackConfig.http || {};
    configs.forEach(function (config) {
        options = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, options), config.options), { headers: (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, options.headers), headersToLowerCase(config.headers)) });
        if (config.credentials)
            options.credentials = config.credentials;
        http = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, http), config.http);
    });
    var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
    var body = { operationName: operationName, variables: variables };
    if (http.includeExtensions)
        body.extensions = extensions;
    if (http.includeQuery)
        body.query = (0,graphql__WEBPACK_IMPORTED_MODULE_1__.print)(query);
    return {
        options: options,
        body: body,
    };
};
function headersToLowerCase(headers) {
    if (headers) {
        var normalized_1 = Object.create(null);
        Object.keys(Object(headers)).forEach(function (name) {
            normalized_1[name.toLowerCase()] = headers[name];
        });
        return normalized_1;
    }
    return headers;
}
//# sourceMappingURL=selectHttpOptionsAndBody.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/selectURI.js":
/*!************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/selectURI.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectURI": function() { return /* binding */ selectURI; }
/* harmony export */ });
var selectURI = function (operation, fallbackURI) {
    var context = operation.getContext();
    var contextURI = context.uri;
    if (contextURI) {
        return contextURI;
    }
    else if (typeof fallbackURI === 'function') {
        return fallbackURI(operation);
    }
    else {
        return fallbackURI || '/graphql';
    }
};
//# sourceMappingURL=selectURI.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/serializeFetchParameter.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/serializeFetchParameter.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serializeFetchParameter": function() { return /* binding */ serializeFetchParameter; }
/* harmony export */ });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");

var serializeFetchParameter = function (p, label) {
    var serialized;
    try {
        serialized = JSON.stringify(p);
    }
    catch (e) {
        var parseError = __DEV__ ? new ts_invariant__WEBPACK_IMPORTED_MODULE_0__.InvariantError("Network request failed. " + label + " is not serializable: " + e.message) : new ts_invariant__WEBPACK_IMPORTED_MODULE_0__.InvariantError(26);
        parseError.parseError = e;
        throw parseError;
    }
    return serialized;
};
//# sourceMappingURL=serializeFetchParameter.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/createOperation.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/createOperation.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOperation": function() { return /* binding */ createOperation; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function createOperation(starting, operation) {
    var context = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, starting);
    var setContext = function (next) {
        if (typeof next === 'function') {
            context = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, context), next(context));
        }
        else {
            context = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, context), next);
        }
    };
    var getContext = function () { return ((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, context)); };
    Object.defineProperty(operation, 'setContext', {
        enumerable: false,
        value: setContext,
    });
    Object.defineProperty(operation, 'getContext', {
        enumerable: false,
        value: getContext,
    });
    return operation;
}
//# sourceMappingURL=createOperation.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/fromError.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/fromError.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromError": function() { return /* binding */ fromError; }
/* harmony export */ });
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");

function fromError(errorValue) {
    return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
        observer.error(errorValue);
    });
}
//# sourceMappingURL=fromError.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/fromPromise.js":
/*!***************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/fromPromise.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromPromise": function() { return /* binding */ fromPromise; }
/* harmony export */ });
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");

function fromPromise(promise) {
    return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
        promise
            .then(function (value) {
            observer.next(value);
            observer.complete();
        })
            .catch(observer.error.bind(observer));
    });
}
//# sourceMappingURL=fromPromise.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromError": function() { return /* reexport safe */ _fromError_js__WEBPACK_IMPORTED_MODULE_0__.fromError; },
/* harmony export */   "toPromise": function() { return /* reexport safe */ _toPromise_js__WEBPACK_IMPORTED_MODULE_1__.toPromise; },
/* harmony export */   "fromPromise": function() { return /* reexport safe */ _fromPromise_js__WEBPACK_IMPORTED_MODULE_2__.fromPromise; },
/* harmony export */   "throwServerError": function() { return /* reexport safe */ _throwServerError_js__WEBPACK_IMPORTED_MODULE_3__.throwServerError; },
/* harmony export */   "validateOperation": function() { return /* reexport safe */ _validateOperation_js__WEBPACK_IMPORTED_MODULE_4__.validateOperation; },
/* harmony export */   "createOperation": function() { return /* reexport safe */ _createOperation_js__WEBPACK_IMPORTED_MODULE_5__.createOperation; },
/* harmony export */   "transformOperation": function() { return /* reexport safe */ _transformOperation_js__WEBPACK_IMPORTED_MODULE_6__.transformOperation; }
/* harmony export */ });
/* harmony import */ var _fromError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromError.js */ "./node_modules/@apollo/client/link/utils/fromError.js");
/* harmony import */ var _toPromise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPromise.js */ "./node_modules/@apollo/client/link/utils/toPromise.js");
/* harmony import */ var _fromPromise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fromPromise.js */ "./node_modules/@apollo/client/link/utils/fromPromise.js");
/* harmony import */ var _throwServerError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./throwServerError.js */ "./node_modules/@apollo/client/link/utils/throwServerError.js");
/* harmony import */ var _validateOperation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validateOperation.js */ "./node_modules/@apollo/client/link/utils/validateOperation.js");
/* harmony import */ var _createOperation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createOperation.js */ "./node_modules/@apollo/client/link/utils/createOperation.js");
/* harmony import */ var _transformOperation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transformOperation.js */ "./node_modules/@apollo/client/link/utils/transformOperation.js");







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/throwServerError.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/throwServerError.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throwServerError": function() { return /* binding */ throwServerError; }
/* harmony export */ });
var throwServerError = function (response, result, message) {
    var error = new Error(message);
    error.name = 'ServerError';
    error.response = response;
    error.statusCode = response.status;
    error.result = result;
    throw error;
};
//# sourceMappingURL=throwServerError.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/toPromise.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/toPromise.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toPromise": function() { return /* binding */ toPromise; }
/* harmony export */ });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");

function toPromise(observable) {
    var completed = false;
    return new Promise(function (resolve, reject) {
        observable.subscribe({
            next: function (data) {
                if (completed) {
                    __DEV__ && ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant.warn("Promise Wrapper does not support multiple results from Observable");
                }
                else {
                    completed = true;
                    resolve(data);
                }
            },
            error: reject,
        });
    });
}
//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/transformOperation.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/transformOperation.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transformOperation": function() { return /* binding */ transformOperation; }
/* harmony export */ });
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");

function transformOperation(operation) {
    var transformedOperation = {
        variables: operation.variables || {},
        extensions: operation.extensions || {},
        operationName: operation.operationName,
        query: operation.query,
    };
    if (!transformedOperation.operationName) {
        transformedOperation.operationName =
            typeof transformedOperation.query !== 'string'
                ? (0,_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__.getOperationName)(transformedOperation.query) || undefined
                : '';
    }
    return transformedOperation;
}
//# sourceMappingURL=transformOperation.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/validateOperation.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/validateOperation.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateOperation": function() { return /* binding */ validateOperation; }
/* harmony export */ });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");

function validateOperation(operation) {
    var OPERATION_FIELDS = [
        'query',
        'operationName',
        'variables',
        'extensions',
        'context',
    ];
    for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
        var key = _a[_i];
        if (OPERATION_FIELDS.indexOf(key) < 0) {
            throw __DEV__ ? new ts_invariant__WEBPACK_IMPORTED_MODULE_0__.InvariantError("illegal argument: " + key) : new ts_invariant__WEBPACK_IMPORTED_MODULE_0__.InvariantError(29);
        }
    }
    return operation;
}
//# sourceMappingURL=validateOperation.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/context/ApolloConsumer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/context/ApolloConsumer.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApolloConsumer": function() { return /* binding */ ApolloConsumer; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _ApolloContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApolloContext.js */ "./node_modules/@apollo/client/react/context/ApolloContext.js");



var ApolloConsumer = function (props) {
    var ApolloContext = (0,_ApolloContext_js__WEBPACK_IMPORTED_MODULE_2__.getApolloContext)();
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ApolloContext.Consumer, null, function (context) {
        __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(context && context.client, 'Could not find "client" in the context of ApolloConsumer. ' +
            'Wrap the root component in an <ApolloProvider>.') : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(context && context.client, 30);
        return props.children(context.client);
    });
};
//# sourceMappingURL=ApolloConsumer.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/context/ApolloContext.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/context/ApolloContext.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getApolloContext": function() { return /* binding */ getApolloContext; },
/* harmony export */   "resetApolloContext": function() { return /* binding */ getApolloContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");


var cache = new (_utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.canUseWeakMap ? WeakMap : Map)();
function getApolloContext() {
    var context = cache.get(react__WEBPACK_IMPORTED_MODULE_0__.createContext);
    if (!context) {
        context = react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
        context.displayName = 'ApolloContext';
        cache.set(react__WEBPACK_IMPORTED_MODULE_0__.createContext, context);
    }
    return context;
}

//# sourceMappingURL=ApolloContext.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/context/ApolloProvider.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/context/ApolloProvider.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApolloProvider": function() { return /* binding */ ApolloProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _ApolloContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApolloContext.js */ "./node_modules/@apollo/client/react/context/ApolloContext.js");



var ApolloProvider = function (_a) {
    var client = _a.client, children = _a.children;
    var ApolloContext = (0,_ApolloContext_js__WEBPACK_IMPORTED_MODULE_2__.getApolloContext)();
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ApolloContext.Consumer, null, function (context) {
        if (context === void 0) { context = {}; }
        if (client && context.client !== client) {
            context = Object.assign({}, context, { client: client });
        }
        __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(context.client, 'ApolloProvider was not passed a client instance. Make ' +
            'sure you pass in your client via the "client" prop.') : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(context.client, 31);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(ApolloContext.Provider, { value: context }, children));
    });
};
//# sourceMappingURL=ApolloProvider.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/context/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@apollo/client/react/context/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ApolloConsumer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApolloConsumer.js */ "./node_modules/@apollo/client/react/context/ApolloConsumer.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ApolloConsumer_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _ApolloConsumer_js__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _ApolloContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApolloContext.js */ "./node_modules/@apollo/client/react/context/ApolloContext.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ApolloContext_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _ApolloContext_js__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _ApolloProvider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApolloProvider.js */ "./node_modules/@apollo/client/react/context/ApolloProvider.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ApolloProvider_js__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _ApolloProvider_js__WEBPACK_IMPORTED_MODULE_2__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/data/MutationData.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/react/data/MutationData.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MutationData": function() { return /* binding */ MutationData; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _parser_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parser/index.js */ "./node_modules/@apollo/client/react/parser/index.js");
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../errors/index.js */ "./node_modules/@apollo/client/errors/index.js");
/* harmony import */ var _OperationData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OperationData.js */ "./node_modules/@apollo/client/react/data/OperationData.js");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/index.js */ "./node_modules/@apollo/client/core/index.js");






var MutationData = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(MutationData, _super);
    function MutationData(_a) {
        var options = _a.options, context = _a.context, result = _a.result, setResult = _a.setResult;
        var _this = _super.call(this, options, context) || this;
        _this.runMutation = function (mutationFunctionOptions) {
            if (mutationFunctionOptions === void 0) { mutationFunctionOptions = {}; }
            _this.onMutationStart();
            var mutationId = _this.generateNewMutationId();
            return _this.mutate(mutationFunctionOptions)
                .then(function (response) {
                _this.onMutationCompleted(response, mutationId);
                return response;
            })
                .catch(function (error) {
                var onError = _this.getOptions().onError;
                _this.onMutationError(error, mutationId);
                if (onError) {
                    onError(error);
                    return {
                        data: undefined,
                        errors: error,
                    };
                }
                else {
                    throw error;
                }
            });
        };
        _this.verifyDocumentType(options.mutation, _parser_index_js__WEBPACK_IMPORTED_MODULE_2__.DocumentType.Mutation);
        _this.result = result;
        _this.setResult = setResult;
        _this.mostRecentMutationId = 0;
        return _this;
    }
    MutationData.prototype.execute = function (result) {
        this.isMounted = true;
        this.verifyDocumentType(this.getOptions().mutation, _parser_index_js__WEBPACK_IMPORTED_MODULE_2__.DocumentType.Mutation);
        return [
            this.runMutation,
            (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, result), { client: this.refreshClient().client })
        ];
    };
    MutationData.prototype.afterExecute = function () {
        this.isMounted = true;
        return this.unmount.bind(this);
    };
    MutationData.prototype.cleanup = function () {
    };
    MutationData.prototype.mutate = function (options) {
        return this.refreshClient().client.mutate((0,_core_index_js__WEBPACK_IMPORTED_MODULE_3__.mergeOptions)(this.getOptions(), options));
    };
    MutationData.prototype.onMutationStart = function () {
        if (!this.result.loading && !this.getOptions().ignoreResults) {
            this.updateResult({
                loading: true,
                error: undefined,
                data: undefined,
                called: true
            });
        }
    };
    MutationData.prototype.onMutationCompleted = function (response, mutationId) {
        var _a = this.getOptions(), onCompleted = _a.onCompleted, ignoreResults = _a.ignoreResults;
        var data = response.data, errors = response.errors;
        var error = errors && errors.length > 0
            ? new _errors_index_js__WEBPACK_IMPORTED_MODULE_4__.ApolloError({ graphQLErrors: errors })
            : undefined;
        var callOncomplete = function () {
            return onCompleted ? onCompleted(data) : null;
        };
        if (this.isMostRecentMutation(mutationId) && !ignoreResults) {
            this.updateResult({
                called: true,
                loading: false,
                data: data,
                error: error
            });
        }
        callOncomplete();
    };
    MutationData.prototype.onMutationError = function (error, mutationId) {
        if (this.isMostRecentMutation(mutationId)) {
            this.updateResult({
                loading: false,
                error: error,
                data: undefined,
                called: true
            });
        }
    };
    MutationData.prototype.generateNewMutationId = function () {
        return ++this.mostRecentMutationId;
    };
    MutationData.prototype.isMostRecentMutation = function (mutationId) {
        return this.mostRecentMutationId === mutationId;
    };
    MutationData.prototype.updateResult = function (result) {
        if (this.isMounted &&
            (!this.previousResult || !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__.equal)(this.previousResult, result))) {
            this.setResult(result);
            this.previousResult = result;
            return result;
        }
    };
    return MutationData;
}(_OperationData_js__WEBPACK_IMPORTED_MODULE_5__.OperationData));

//# sourceMappingURL=MutationData.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/data/OperationData.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/react/data/OperationData.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperationData": function() { return /* binding */ OperationData; }
/* harmony export */ });
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _parser_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parser/index.js */ "./node_modules/@apollo/client/react/parser/index.js");



var OperationData = (function () {
    function OperationData(options, context) {
        this.isMounted = false;
        this.previousOptions = {};
        this.context = {};
        this.options = {};
        this.options = options || {};
        this.context = context || {};
    }
    OperationData.prototype.getOptions = function () {
        return this.options;
    };
    OperationData.prototype.setOptions = function (newOptions, storePrevious) {
        if (storePrevious === void 0) { storePrevious = false; }
        if (storePrevious && !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__.equal)(this.options, newOptions)) {
            this.previousOptions = this.options;
        }
        this.options = newOptions;
    };
    OperationData.prototype.unmount = function () {
        this.isMounted = false;
    };
    OperationData.prototype.refreshClient = function () {
        var client = (this.options && this.options.client) ||
            (this.context && this.context.client);
        __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(!!client, 'Could not find "client" in the context or passed in as an option. ' +
            'Wrap the root component in an <ApolloProvider>, or pass an ' +
            'ApolloClient instance in via options.') : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(!!client, 32);
        var isNew = false;
        if (client !== this.client) {
            isNew = true;
            this.client = client;
            this.cleanup();
        }
        return {
            client: this.client,
            isNew: isNew
        };
    };
    OperationData.prototype.verifyDocumentType = function (document, type) {
        var operation = (0,_parser_index_js__WEBPACK_IMPORTED_MODULE_2__.parser)(document);
        var requiredOperationName = (0,_parser_index_js__WEBPACK_IMPORTED_MODULE_2__.operationName)(type);
        var usedOperationName = (0,_parser_index_js__WEBPACK_IMPORTED_MODULE_2__.operationName)(operation.type);
        __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(operation.type === type, "Running a " + requiredOperationName + " requires a graphql " +
            (requiredOperationName + ", but a " + usedOperationName + " was used instead.")) : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(operation.type === type, 33);
    };
    return OperationData;
}());

//# sourceMappingURL=OperationData.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/data/QueryData.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/react/data/QueryData.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryData": function() { return /* binding */ QueryData; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../errors/index.js */ "./node_modules/@apollo/client/errors/index.js");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/index.js */ "./node_modules/@apollo/client/core/index.js");
/* harmony import */ var _parser_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parser/index.js */ "./node_modules/@apollo/client/react/parser/index.js");
/* harmony import */ var _OperationData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OperationData.js */ "./node_modules/@apollo/client/react/data/OperationData.js");






var QueryData = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(QueryData, _super);
    function QueryData(_a) {
        var options = _a.options, context = _a.context, onNewData = _a.onNewData;
        var _this = _super.call(this, options, context) || this;
        _this.runLazy = false;
        _this.previous = Object.create(null);
        _this.runLazyQuery = function (options) {
            _this.cleanup();
            _this.runLazy = true;
            _this.lazyOptions = options;
            _this.onNewData();
        };
        _this.obsRefetch = function (variables) { var _a; return (_a = _this.currentObservable) === null || _a === void 0 ? void 0 : _a.refetch(variables); };
        _this.obsFetchMore = function (fetchMoreOptions) { var _a; return (_a = _this.currentObservable) === null || _a === void 0 ? void 0 : _a.fetchMore(fetchMoreOptions); };
        _this.obsUpdateQuery = function (mapFn) { var _a; return (_a = _this.currentObservable) === null || _a === void 0 ? void 0 : _a.updateQuery(mapFn); };
        _this.obsStartPolling = function (pollInterval) {
            var _a;
            (_a = _this.currentObservable) === null || _a === void 0 ? void 0 : _a.startPolling(pollInterval);
        };
        _this.obsStopPolling = function () {
            var _a;
            (_a = _this.currentObservable) === null || _a === void 0 ? void 0 : _a.stopPolling();
        };
        _this.obsSubscribeToMore = function (options) { var _a; return (_a = _this.currentObservable) === null || _a === void 0 ? void 0 : _a.subscribeToMore(options); };
        _this.onNewData = onNewData;
        return _this;
    }
    QueryData.prototype.execute = function () {
        this.refreshClient();
        var _a = this.getOptions(), skip = _a.skip, query = _a.query;
        if (skip || query !== this.previous.query) {
            this.removeQuerySubscription();
            this.removeObservable(!skip);
            this.previous.query = query;
        }
        this.updateObservableQuery();
        return this.getExecuteSsrResult() || this.getExecuteResult();
    };
    QueryData.prototype.executeLazy = function () {
        return !this.runLazy
            ? [
                this.runLazyQuery,
                {
                    loading: false,
                    networkStatus: _core_index_js__WEBPACK_IMPORTED_MODULE_2__.NetworkStatus.ready,
                    called: false,
                    data: undefined
                }
            ]
            : [this.runLazyQuery, this.execute()];
    };
    QueryData.prototype.fetchData = function () {
        var _this = this;
        var options = this.getOptions();
        if (options.skip || options.ssr === false)
            return false;
        return new Promise(function (resolve) { return _this.startQuerySubscription(resolve); });
    };
    QueryData.prototype.afterExecute = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.lazy, lazy = _c === void 0 ? false : _c;
        this.isMounted = true;
        var options = this.getOptions();
        var ssrDisabled = options.ssr === false;
        if (this.currentObservable &&
            !ssrDisabled &&
            !this.ssrInitiated()) {
            this.startQuerySubscription();
        }
        if (!lazy || this.runLazy) {
            this.handleErrorOrCompleted();
        }
        this.previousOptions = options;
        return this.unmount.bind(this);
    };
    QueryData.prototype.cleanup = function () {
        this.removeQuerySubscription();
        this.removeObservable(true);
        delete this.previous.result;
    };
    QueryData.prototype.getOptions = function () {
        var options = _super.prototype.getOptions.call(this);
        if (this.lazyOptions) {
            options.variables = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, options.variables), this.lazyOptions.variables);
            options.context = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, options.context), this.lazyOptions.context);
        }
        if (this.runLazy) {
            delete options.skip;
        }
        return options;
    };
    QueryData.prototype.ssrInitiated = function () {
        return this.context && this.context.renderPromises;
    };
    QueryData.prototype.getExecuteSsrResult = function () {
        var _a = this.getOptions(), ssr = _a.ssr, skip = _a.skip;
        var ssrDisabled = ssr === false;
        var fetchDisabled = this.refreshClient().client.disableNetworkFetches;
        var ssrLoading = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ loading: true, networkStatus: _core_index_js__WEBPACK_IMPORTED_MODULE_2__.NetworkStatus.loading, called: true, data: undefined, stale: false, client: this.client }, this.observableQueryFields());
        if (ssrDisabled && (this.ssrInitiated() || fetchDisabled)) {
            this.previous.result = ssrLoading;
            return ssrLoading;
        }
        if (this.ssrInitiated()) {
            var result = this.getExecuteResult() || ssrLoading;
            if (result.loading && !skip) {
                this.context.renderPromises.addQueryPromise(this, function () { return null; });
            }
            return result;
        }
    };
    QueryData.prototype.prepareObservableQueryOptions = function () {
        var options = this.getOptions();
        this.verifyDocumentType(options.query, _parser_index_js__WEBPACK_IMPORTED_MODULE_3__.DocumentType.Query);
        var displayName = options.displayName || 'Query';
        if (this.ssrInitiated() &&
            (options.fetchPolicy === 'network-only' ||
                options.fetchPolicy === 'cache-and-network')) {
            options.fetchPolicy = 'cache-first';
        }
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, options), { displayName: displayName, context: options.context });
    };
    QueryData.prototype.initializeObservableQuery = function () {
        if (this.ssrInitiated()) {
            this.currentObservable = this.context.renderPromises.getSSRObservable(this.getOptions());
        }
        if (!this.currentObservable) {
            var observableQueryOptions = this.prepareObservableQueryOptions();
            this.previous.observableQueryOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, observableQueryOptions), { children: void 0 });
            this.currentObservable = this.refreshClient().client.watchQuery((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, observableQueryOptions));
            if (this.ssrInitiated()) {
                this.context.renderPromises.registerSSRObservable(this.currentObservable, observableQueryOptions);
            }
        }
    };
    QueryData.prototype.updateObservableQuery = function () {
        if (!this.currentObservable) {
            this.initializeObservableQuery();
            return;
        }
        var newObservableQueryOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, this.prepareObservableQueryOptions()), { children: void 0 });
        if (this.getOptions().skip) {
            this.previous.observableQueryOptions = newObservableQueryOptions;
            return;
        }
        if (!(0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__.equal)(newObservableQueryOptions, this.previous.observableQueryOptions)) {
            this.previous.observableQueryOptions = newObservableQueryOptions;
            this.currentObservable
                .setOptions(newObservableQueryOptions)
                .catch(function () { });
        }
    };
    QueryData.prototype.startQuerySubscription = function (onNewData) {
        var _this = this;
        if (onNewData === void 0) { onNewData = this.onNewData; }
        if (this.currentSubscription || this.getOptions().skip)
            return;
        this.currentSubscription = this.currentObservable.subscribe({
            next: function (_a) {
                var loading = _a.loading, networkStatus = _a.networkStatus, data = _a.data;
                var previousResult = _this.previous.result;
                if (previousResult &&
                    previousResult.loading === loading &&
                    previousResult.networkStatus === networkStatus &&
                    (0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__.equal)(previousResult.data, data)) {
                    return;
                }
                onNewData();
            },
            error: function (error) {
                _this.resubscribeToQuery();
                if (!error.hasOwnProperty('graphQLErrors'))
                    throw error;
                var previousResult = _this.previous.result;
                if ((previousResult && previousResult.loading) ||
                    !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__.equal)(error, _this.previous.error)) {
                    _this.previous.error = error;
                    onNewData();
                }
            }
        });
    };
    QueryData.prototype.resubscribeToQuery = function () {
        this.removeQuerySubscription();
        var currentObservable = this.currentObservable;
        if (currentObservable) {
            var lastError = currentObservable.getLastError();
            var lastResult = currentObservable.getLastResult();
            currentObservable.resetLastResults();
            this.startQuerySubscription();
            Object.assign(currentObservable, {
                lastError: lastError,
                lastResult: lastResult
            });
        }
    };
    QueryData.prototype.getExecuteResult = function () {
        var result = this.observableQueryFields();
        var options = this.getOptions();
        if (options.skip) {
            result = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, result), { data: undefined, error: undefined, loading: false, networkStatus: _core_index_js__WEBPACK_IMPORTED_MODULE_2__.NetworkStatus.ready, called: true });
        }
        else if (this.currentObservable) {
            var currentResult = this.currentObservable.getCurrentResult();
            var data = currentResult.data, loading = currentResult.loading, partial = currentResult.partial, networkStatus = currentResult.networkStatus, errors = currentResult.errors;
            var error = currentResult.error;
            if (errors && errors.length > 0) {
                error = new _errors_index_js__WEBPACK_IMPORTED_MODULE_4__.ApolloError({ graphQLErrors: errors });
            }
            result = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, result), { data: data, loading: loading, networkStatus: networkStatus, error: error, called: true });
            if (loading) {
            }
            else if (error) {
                Object.assign(result, {
                    data: (this.currentObservable.getLastResult() || {})
                        .data
                });
            }
            else {
                var fetchPolicy = this.currentObservable.options.fetchPolicy;
                var partialRefetch = options.partialRefetch;
                if (partialRefetch &&
                    partial &&
                    (!data || Object.keys(data).length === 0) &&
                    fetchPolicy !== 'cache-only') {
                    Object.assign(result, {
                        loading: true,
                        networkStatus: _core_index_js__WEBPACK_IMPORTED_MODULE_2__.NetworkStatus.loading
                    });
                    result.refetch();
                    return result;
                }
            }
        }
        result.client = this.client;
        this.setOptions(options, true);
        var previousResult = this.previous.result;
        this.previous.loading =
            previousResult && previousResult.loading || false;
        result.previousData = previousResult &&
            (previousResult.data || previousResult.previousData);
        this.previous.result = result;
        this.currentObservable && this.currentObservable.resetQueryStoreErrors();
        return result;
    };
    QueryData.prototype.handleErrorOrCompleted = function () {
        if (!this.currentObservable || !this.previous.result)
            return;
        var _a = this.previous.result, data = _a.data, loading = _a.loading, error = _a.error;
        if (!loading) {
            var _b = this.getOptions(), query = _b.query, variables = _b.variables, onCompleted = _b.onCompleted, onError = _b.onError, skip = _b.skip;
            if (this.previousOptions &&
                !this.previous.loading &&
                (0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__.equal)(this.previousOptions.query, query) &&
                (0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__.equal)(this.previousOptions.variables, variables)) {
                return;
            }
            if (onCompleted && !error && !skip) {
                onCompleted(data);
            }
            else if (onError && error) {
                onError(error);
            }
        }
    };
    QueryData.prototype.removeQuerySubscription = function () {
        if (this.currentSubscription) {
            this.currentSubscription.unsubscribe();
            delete this.currentSubscription;
        }
    };
    QueryData.prototype.removeObservable = function (andDelete) {
        if (this.currentObservable) {
            this.currentObservable["tearDownQuery"]();
            if (andDelete) {
                delete this.currentObservable;
            }
        }
    };
    QueryData.prototype.observableQueryFields = function () {
        var _a;
        return {
            variables: (_a = this.currentObservable) === null || _a === void 0 ? void 0 : _a.variables,
            refetch: this.obsRefetch,
            fetchMore: this.obsFetchMore,
            updateQuery: this.obsUpdateQuery,
            startPolling: this.obsStartPolling,
            stopPolling: this.obsStopPolling,
            subscribeToMore: this.obsSubscribeToMore
        };
    };
    return QueryData;
}(_OperationData_js__WEBPACK_IMPORTED_MODULE_5__.OperationData));

//# sourceMappingURL=QueryData.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/data/SubscriptionData.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/data/SubscriptionData.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriptionData": function() { return /* binding */ SubscriptionData; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _OperationData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperationData.js */ "./node_modules/@apollo/client/react/data/OperationData.js");



var SubscriptionData = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(SubscriptionData, _super);
    function SubscriptionData(_a) {
        var options = _a.options, context = _a.context, setResult = _a.setResult;
        var _this = _super.call(this, options, context) || this;
        _this.currentObservable = {};
        _this.setResult = setResult;
        _this.initialize(options);
        return _this;
    }
    SubscriptionData.prototype.execute = function (result) {
        if (this.getOptions().skip === true) {
            this.cleanup();
            return {
                loading: false,
                error: undefined,
                data: undefined,
                variables: this.getOptions().variables
            };
        }
        var currentResult = result;
        if (this.refreshClient().isNew) {
            currentResult = this.getLoadingResult();
        }
        var shouldResubscribe = this.getOptions().shouldResubscribe;
        if (typeof shouldResubscribe === 'function') {
            shouldResubscribe = !!shouldResubscribe(this.getOptions());
        }
        if (shouldResubscribe !== false &&
            this.previousOptions &&
            Object.keys(this.previousOptions).length > 0 &&
            (this.previousOptions.subscription !== this.getOptions().subscription ||
                !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_0__.equal)(this.previousOptions.variables, this.getOptions().variables) ||
                this.previousOptions.skip !== this.getOptions().skip)) {
            this.cleanup();
            currentResult = this.getLoadingResult();
        }
        this.initialize(this.getOptions());
        this.startSubscription();
        this.previousOptions = this.getOptions();
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, currentResult), { variables: this.getOptions().variables });
    };
    SubscriptionData.prototype.afterExecute = function () {
        this.isMounted = true;
    };
    SubscriptionData.prototype.cleanup = function () {
        this.endSubscription();
        delete this.currentObservable.query;
    };
    SubscriptionData.prototype.initialize = function (options) {
        if (this.currentObservable.query || this.getOptions().skip === true)
            return;
        this.currentObservable.query = this.refreshClient().client.subscribe({
            query: options.subscription,
            variables: options.variables,
            fetchPolicy: options.fetchPolicy,
            context: options.context,
        });
    };
    SubscriptionData.prototype.startSubscription = function () {
        if (this.currentObservable.subscription)
            return;
        this.currentObservable.subscription = this.currentObservable.query.subscribe({
            next: this.updateCurrentData.bind(this),
            error: this.updateError.bind(this),
            complete: this.completeSubscription.bind(this)
        });
    };
    SubscriptionData.prototype.getLoadingResult = function () {
        return {
            loading: true,
            error: undefined,
            data: undefined
        };
    };
    SubscriptionData.prototype.updateResult = function (result) {
        if (this.isMounted) {
            this.setResult(result);
        }
    };
    SubscriptionData.prototype.updateCurrentData = function (result) {
        var onSubscriptionData = this.getOptions().onSubscriptionData;
        this.updateResult({
            data: result.data,
            loading: false,
            error: undefined
        });
        if (onSubscriptionData) {
            onSubscriptionData({
                client: this.refreshClient().client,
                subscriptionData: result
            });
        }
    };
    SubscriptionData.prototype.updateError = function (error) {
        this.updateResult({
            error: error,
            loading: false
        });
    };
    SubscriptionData.prototype.completeSubscription = function () {
        var _this = this;
        Promise.resolve().then(function () {
            var onSubscriptionComplete = _this.getOptions().onSubscriptionComplete;
            if (onSubscriptionComplete)
                onSubscriptionComplete();
            _this.endSubscription();
        });
    };
    SubscriptionData.prototype.endSubscription = function () {
        if (this.currentObservable.subscription) {
            this.currentObservable.subscription.unsubscribe();
            delete this.currentObservable.subscription;
        }
    };
    return SubscriptionData;
}(_OperationData_js__WEBPACK_IMPORTED_MODULE_2__.OperationData));

//# sourceMappingURL=SubscriptionData.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/data/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@apollo/client/react/data/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriptionData": function() { return /* reexport safe */ _SubscriptionData_js__WEBPACK_IMPORTED_MODULE_0__.SubscriptionData; },
/* harmony export */   "OperationData": function() { return /* reexport safe */ _OperationData_js__WEBPACK_IMPORTED_MODULE_1__.OperationData; },
/* harmony export */   "MutationData": function() { return /* reexport safe */ _MutationData_js__WEBPACK_IMPORTED_MODULE_2__.MutationData; },
/* harmony export */   "QueryData": function() { return /* reexport safe */ _QueryData_js__WEBPACK_IMPORTED_MODULE_3__.QueryData; }
/* harmony export */ });
/* harmony import */ var _SubscriptionData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubscriptionData.js */ "./node_modules/@apollo/client/react/data/SubscriptionData.js");
/* harmony import */ var _OperationData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperationData.js */ "./node_modules/@apollo/client/react/data/OperationData.js");
/* harmony import */ var _MutationData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MutationData.js */ "./node_modules/@apollo/client/react/data/MutationData.js");
/* harmony import */ var _QueryData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueryData.js */ "./node_modules/@apollo/client/react/data/QueryData.js");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useApolloClient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApolloClient.js */ "./node_modules/@apollo/client/react/hooks/useApolloClient.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _useApolloClient_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _useApolloClient_js__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _useLazyQuery_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useLazyQuery.js */ "./node_modules/@apollo/client/react/hooks/useLazyQuery.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _useLazyQuery_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _useLazyQuery_js__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _useMutation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useMutation.js */ "./node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _useMutation_js__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _useMutation_js__WEBPACK_IMPORTED_MODULE_2__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _useQuery_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useQuery.js */ "./node_modules/@apollo/client/react/hooks/useQuery.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _useQuery_js__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _useQuery_js__WEBPACK_IMPORTED_MODULE_3__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _useSubscription_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useSubscription.js */ "./node_modules/@apollo/client/react/hooks/useSubscription.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _useSubscription_js__WEBPACK_IMPORTED_MODULE_4__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _useSubscription_js__WEBPACK_IMPORTED_MODULE_4__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _useReactiveVar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useReactiveVar.js */ "./node_modules/@apollo/client/react/hooks/useReactiveVar.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _useReactiveVar_js__WEBPACK_IMPORTED_MODULE_5__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _useReactiveVar_js__WEBPACK_IMPORTED_MODULE_5__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/useApolloClient.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/useApolloClient.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useApolloClient": function() { return /* binding */ useApolloClient; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/index.js */ "./node_modules/@apollo/client/react/context/index.js");



function useApolloClient() {
    var client = react__WEBPACK_IMPORTED_MODULE_0__.useContext((0,_context_index_js__WEBPACK_IMPORTED_MODULE_2__.getApolloContext)()).client;
    __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(client, 'No Apollo Client instance can be found. Please ensure that you ' +
        'have called `ApolloProvider` higher up in your tree.') : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(client, 36);
    return client;
}
//# sourceMappingURL=useApolloClient.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/useLazyQuery.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/useLazyQuery.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useLazyQuery": function() { return /* binding */ useLazyQuery; }
/* harmony export */ });
/* harmony import */ var _utils_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/useBaseQuery.js */ "./node_modules/@apollo/client/react/hooks/utils/useBaseQuery.js");

function useLazyQuery(query, options) {
    return (0,_utils_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__.useBaseQuery)(query, options, true);
}
//# sourceMappingURL=useLazyQuery.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/useMutation.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/useMutation.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMutation": function() { return /* binding */ useMutation; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/index.js */ "./node_modules/@apollo/client/react/data/index.js");
/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/index.js */ "./node_modules/@apollo/client/react/context/index.js");




function useMutation(mutation, options) {
    var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)((0,_context_index_js__WEBPACK_IMPORTED_MODULE_1__.getApolloContext)());
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({ called: false, loading: false }), result = _a[0], setResult = _a[1];
    var updatedOptions = options ? (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, options), { mutation: mutation }) : { mutation: mutation };
    var mutationDataRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    function getMutationDataRef() {
        if (!mutationDataRef.current) {
            mutationDataRef.current = new _data_index_js__WEBPACK_IMPORTED_MODULE_3__.MutationData({
                options: updatedOptions,
                context: context,
                result: result,
                setResult: setResult
            });
        }
        return mutationDataRef.current;
    }
    var mutationData = getMutationDataRef();
    mutationData.setOptions(updatedOptions);
    mutationData.context = context;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { return mutationData.afterExecute(); });
    return mutationData.execute(result);
}
//# sourceMappingURL=useMutation.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/useQuery.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/useQuery.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useQuery": function() { return /* binding */ useQuery; }
/* harmony export */ });
/* harmony import */ var _utils_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/useBaseQuery.js */ "./node_modules/@apollo/client/react/hooks/utils/useBaseQuery.js");

function useQuery(query, options) {
    return (0,_utils_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__.useBaseQuery)(query, options, false);
}
//# sourceMappingURL=useQuery.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/useReactiveVar.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/useReactiveVar.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useReactiveVar": function() { return /* binding */ useReactiveVar; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useReactiveVar(rv) {
    var value = rv();
    var setValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value)[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var probablySameValue = rv();
        if (value !== probablySameValue) {
            setValue(probablySameValue);
        }
        else {
            return rv.onNextChange(setValue);
        }
    }, [value]);
    return value;
}
//# sourceMappingURL=useReactiveVar.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/useSubscription.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/useSubscription.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSubscription": function() { return /* binding */ useSubscription; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/index.js */ "./node_modules/@apollo/client/react/data/index.js");
/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/index.js */ "./node_modules/@apollo/client/react/context/index.js");
/* harmony import */ var _utils_useAfterFastRefresh_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/useAfterFastRefresh.js */ "./node_modules/@apollo/client/react/hooks/utils/useAfterFastRefresh.js");





function useSubscription(subscription, options) {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(function (x) { return x + 1; }, 0), forceUpdate = _a[1];
    var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)((0,_context_index_js__WEBPACK_IMPORTED_MODULE_1__.getApolloContext)());
    var updatedOptions = options
        ? (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, options), { subscription: subscription }) : { subscription: subscription };
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        loading: !updatedOptions.skip,
        error: void 0,
        data: void 0,
    }), result = _b[0], setResult = _b[1];
    var subscriptionDataRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    function getSubscriptionDataRef() {
        if (!subscriptionDataRef.current) {
            subscriptionDataRef.current = new _data_index_js__WEBPACK_IMPORTED_MODULE_3__.SubscriptionData({
                options: updatedOptions,
                context: context,
                setResult: setResult
            });
        }
        return subscriptionDataRef.current;
    }
    var subscriptionData = getSubscriptionDataRef();
    subscriptionData.setOptions(updatedOptions, true);
    subscriptionData.context = context;
    if (__DEV__) {
        (0,_utils_useAfterFastRefresh_js__WEBPACK_IMPORTED_MODULE_4__.useAfterFastRefresh)(forceUpdate);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { return subscriptionData.afterExecute(); });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        return function () {
            subscriptionData.cleanup();
            subscriptionDataRef.current = void 0;
        };
    }, []);
    return subscriptionData.execute(result);
}
//# sourceMappingURL=useSubscription.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/utils/useAfterFastRefresh.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/utils/useAfterFastRefresh.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAfterFastRefresh": function() { return /* binding */ useAfterFastRefresh; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useAfterFastRefresh(effectFn) {
    if (__DEV__) {
        var didRefresh_1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            return function () {
                didRefresh_1.current = true;
            };
        }, []);
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            if (didRefresh_1.current === true) {
                didRefresh_1.current = false;
                effectFn();
            }
        }, []);
    }
}
//# sourceMappingURL=useAfterFastRefresh.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/utils/useBaseQuery.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/utils/useBaseQuery.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useBaseQuery": function() { return /* binding */ useBaseQuery; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/index.js */ "./node_modules/@apollo/client/react/data/index.js");
/* harmony import */ var _useDeepMemo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useDeepMemo.js */ "./node_modules/@apollo/client/react/hooks/utils/useDeepMemo.js");
/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/index.js */ "./node_modules/@apollo/client/react/context/index.js");
/* harmony import */ var _useAfterFastRefresh_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useAfterFastRefresh.js */ "./node_modules/@apollo/client/react/hooks/utils/useAfterFastRefresh.js");






function useBaseQuery(query, options, lazy) {
    if (lazy === void 0) { lazy = false; }
    var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)((0,_context_index_js__WEBPACK_IMPORTED_MODULE_1__.getApolloContext)());
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(function (x) { return x + 1; }, 0), tick = _a[0], forceUpdate = _a[1];
    var updatedOptions = options ? (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, options), { query: query }) : { query: query };
    var queryDataRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    var queryData = queryDataRef.current || (queryDataRef.current = new _data_index_js__WEBPACK_IMPORTED_MODULE_3__.QueryData({
        options: updatedOptions,
        context: context,
        onNewData: function () {
            if (!queryData.ssrInitiated()) {
                Promise.resolve().then(function () { return queryDataRef.current && queryDataRef.current.isMounted && forceUpdate(); });
            }
            else {
                forceUpdate();
            }
        }
    }));
    queryData.setOptions(updatedOptions);
    queryData.context = context;
    var memo = {
        options: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, updatedOptions), { onError: void 0, onCompleted: void 0 }),
        context: context,
        tick: tick
    };
    var result = (0,_useDeepMemo_js__WEBPACK_IMPORTED_MODULE_4__.useDeepMemo)(function () { return (lazy ? queryData.executeLazy() : queryData.execute()); }, memo);
    var queryResult = lazy
        ? result[1]
        : result;
    if (__DEV__) {
        (0,_useAfterFastRefresh_js__WEBPACK_IMPORTED_MODULE_5__.useAfterFastRefresh)(forceUpdate);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        return function () {
            queryData.cleanup();
            queryDataRef.current = void 0;
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { return queryData.afterExecute({ lazy: lazy }); }, [
        queryResult.loading,
        queryResult.networkStatus,
        queryResult.error,
        queryResult.data,
    ]);
    return result;
}
//# sourceMappingURL=useBaseQuery.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/utils/useDeepMemo.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/utils/useDeepMemo.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDeepMemo": function() { return /* binding */ useDeepMemo; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");


function useDeepMemo(memoFn, key) {
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    if (!ref.current || !(0,_wry_equality__WEBPACK_IMPORTED_MODULE_1__.equal)(key, ref.current.key)) {
        ref.current = { key: key, value: memoFn() };
    }
    return ref.current.value;
}
//# sourceMappingURL=useDeepMemo.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@apollo/client/react/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApolloProvider": function() { return /* reexport safe */ _context_index_js__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider; },
/* harmony export */   "ApolloConsumer": function() { return /* reexport safe */ _context_index_js__WEBPACK_IMPORTED_MODULE_2__.ApolloConsumer; },
/* harmony export */   "getApolloContext": function() { return /* reexport safe */ _context_index_js__WEBPACK_IMPORTED_MODULE_2__.getApolloContext; },
/* harmony export */   "resetApolloContext": function() { return /* reexport safe */ _context_index_js__WEBPACK_IMPORTED_MODULE_2__.resetApolloContext; },
/* harmony export */   "DocumentType": function() { return /* reexport safe */ _parser_index_js__WEBPACK_IMPORTED_MODULE_4__.DocumentType; },
/* harmony export */   "operationName": function() { return /* reexport safe */ _parser_index_js__WEBPACK_IMPORTED_MODULE_4__.operationName; },
/* harmony export */   "parser": function() { return /* reexport safe */ _parser_index_js__WEBPACK_IMPORTED_MODULE_4__.parser; }
/* harmony export */ });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/index.js */ "./node_modules/@apollo/client/react/context/index.js");
/* harmony import */ var _hooks_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/index.js */ "./node_modules/@apollo/client/react/hooks/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hooks_index_js__WEBPACK_IMPORTED_MODULE_3__) if(["default","ApolloProvider","ApolloConsumer","getApolloContext","resetApolloContext","DocumentType","operationName","parser"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _hooks_index_js__WEBPACK_IMPORTED_MODULE_3__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _parser_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parser/index.js */ "./node_modules/@apollo/client/react/parser/index.js");
/* harmony import */ var _types_types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types/types.js */ "./node_modules/@apollo/client/react/types/types.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types_types_js__WEBPACK_IMPORTED_MODULE_5__) if(["default","ApolloProvider","ApolloConsumer","getApolloContext","resetApolloContext","DocumentType","operationName","parser"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _types_types_js__WEBPACK_IMPORTED_MODULE_5__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


__DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)("boolean" === typeof _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.DEV, _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.DEV) : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)("boolean" === typeof _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__.DEV, 37);




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/parser/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@apollo/client/react/parser/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentType": function() { return /* binding */ DocumentType; },
/* harmony export */   "operationName": function() { return /* binding */ operationName; },
/* harmony export */   "parser": function() { return /* binding */ parser; }
/* harmony export */ });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");

var DocumentType;
(function (DocumentType) {
    DocumentType[DocumentType["Query"] = 0] = "Query";
    DocumentType[DocumentType["Mutation"] = 1] = "Mutation";
    DocumentType[DocumentType["Subscription"] = 2] = "Subscription";
})(DocumentType || (DocumentType = {}));
var cache = new Map();
function operationName(type) {
    var name;
    switch (type) {
        case DocumentType.Query:
            name = 'Query';
            break;
        case DocumentType.Mutation:
            name = 'Mutation';
            break;
        case DocumentType.Subscription:
            name = 'Subscription';
            break;
    }
    return name;
}
function parser(document) {
    var cached = cache.get(document);
    if (cached)
        return cached;
    var variables, type, name;
    __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(!!document && !!document.kind, "Argument of " + document + " passed to parser was not a valid GraphQL " +
        "DocumentNode. You may need to use 'graphql-tag' or another method " +
        "to convert your operation into a document") : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(!!document && !!document.kind, 38);
    var fragments = document.definitions.filter(function (x) { return x.kind === 'FragmentDefinition'; });
    var queries = document.definitions.filter(function (x) {
        return x.kind === 'OperationDefinition' && x.operation === 'query';
    });
    var mutations = document.definitions.filter(function (x) {
        return x.kind === 'OperationDefinition' && x.operation === 'mutation';
    });
    var subscriptions = document.definitions.filter(function (x) {
        return x.kind === 'OperationDefinition' && x.operation === 'subscription';
    });
    __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(!fragments.length ||
        (queries.length || mutations.length || subscriptions.length), "Passing only a fragment to 'graphql' is not yet supported. " +
        "You must include a query, subscription or mutation as well") : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(!fragments.length ||
        (queries.length || mutations.length || subscriptions.length), 39);
    __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(queries.length + mutations.length + subscriptions.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " +
        (document + " had " + queries.length + " queries, " + subscriptions.length + " ") +
        ("subscriptions and " + mutations.length + " mutations. ") +
        "You can use 'compose' to join multiple operation types to a component") : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(queries.length + mutations.length + subscriptions.length <= 1, 40);
    type = queries.length ? DocumentType.Query : DocumentType.Mutation;
    if (!queries.length && !mutations.length)
        type = DocumentType.Subscription;
    var definitions = queries.length
        ? queries
        : mutations.length
            ? mutations
            : subscriptions;
    __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(definitions.length === 1, "react-apollo only supports one definition per HOC. " + document + " had " +
        (definitions.length + " definitions. ") +
        "You can use 'compose' to join multiple operation types to a component") : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(definitions.length === 1, 41);
    var definition = definitions[0];
    variables = definition.variableDefinitions || [];
    if (definition.name && definition.name.kind === 'Name') {
        name = definition.name.value;
    }
    else {
        name = 'data';
    }
    var payload = { name: name, type: type, variables: variables };
    cache.set(document, payload);
    return payload;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/types/types.js":
/*!**********************************************************!*\
  !*** ./node_modules/@apollo/client/react/types/types.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/arrays.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/arrays.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNonEmptyArray": function() { return /* binding */ isNonEmptyArray; }
/* harmony export */ });
function isNonEmptyArray(value) {
    return Array.isArray(value) && value.length > 0;
}
//# sourceMappingURL=arrays.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/canUse.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/canUse.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canUseWeakMap": function() { return /* binding */ canUseWeakMap; },
/* harmony export */   "canUseWeakSet": function() { return /* binding */ canUseWeakSet; }
/* harmony export */ });
var canUseWeakMap = typeof WeakMap === 'function' && !(typeof navigator === 'object' &&
    navigator.product === 'ReactNative');
var canUseWeakSet = typeof WeakSet === 'function';
//# sourceMappingURL=canUse.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/cloneDeep.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/cloneDeep.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cloneDeep": function() { return /* binding */ cloneDeep; }
/* harmony export */ });
var toString = Object.prototype.toString;
function cloneDeep(value) {
    return cloneDeepHelper(value);
}
function cloneDeepHelper(val, seen) {
    switch (toString.call(val)) {
        case "[object Array]": {
            seen = seen || new Map;
            if (seen.has(val))
                return seen.get(val);
            var copy_1 = val.slice(0);
            seen.set(val, copy_1);
            copy_1.forEach(function (child, i) {
                copy_1[i] = cloneDeepHelper(child, seen);
            });
            return copy_1;
        }
        case "[object Object]": {
            seen = seen || new Map;
            if (seen.has(val))
                return seen.get(val);
            var copy_2 = Object.create(Object.getPrototypeOf(val));
            seen.set(val, copy_2);
            Object.keys(val).forEach(function (key) {
                copy_2[key] = cloneDeepHelper(val[key], seen);
            });
            return copy_2;
        }
        default:
            return val;
    }
}
//# sourceMappingURL=cloneDeep.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/compact.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/compact.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compact": function() { return /* binding */ compact; }
/* harmony export */ });
function compact() {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    var result = Object.create(null);
    objects.forEach(function (obj) {
        if (!obj)
            return;
        Object.keys(obj).forEach(function (key) {
            var value = obj[key];
            if (value !== void 0) {
                result[key] = value;
            }
        });
    });
    return result;
}
//# sourceMappingURL=compact.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/errorHandling.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/errorHandling.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "graphQLResultHasError": function() { return /* binding */ graphQLResultHasError; }
/* harmony export */ });
function graphQLResultHasError(result) {
    return (result.errors && result.errors.length > 0) || false;
}
//# sourceMappingURL=errorHandling.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/filterInPlace.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/filterInPlace.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterInPlace": function() { return /* binding */ filterInPlace; }
/* harmony export */ });
function filterInPlace(array, test, context) {
    var target = 0;
    array.forEach(function (elem, i) {
        if (test.call(this, elem, i, array)) {
            array[target++] = elem;
        }
    }, context);
    array.length = target;
    return array;
}
//# sourceMappingURL=filterInPlace.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/global.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/global.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maybe.js */ "./node_modules/@apollo/client/utilities/common/maybe.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__.maybe)(function () { return globalThis; }) ||
    (0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__.maybe)(function () { return window; }) ||
    (0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__.maybe)(function () { return self; }) ||
    (0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__.maybe)(function () { return __webpack_require__.g; }) ||
    (0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__.maybe)(function () { return Function("return this")(); }));
//# sourceMappingURL=global.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/makeUniqueId.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/makeUniqueId.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeUniqueId": function() { return /* binding */ makeUniqueId; }
/* harmony export */ });
var prefixCounts = new Map();
function makeUniqueId(prefix) {
    var count = prefixCounts.get(prefix) || 1;
    prefixCounts.set(prefix, count + 1);
    return prefix + ":" + count + ":" + Math.random().toString(36).slice(2);
}
//# sourceMappingURL=makeUniqueId.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/maybe.js":
/*!***************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/maybe.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "maybe": function() { return /* binding */ maybe; }
/* harmony export */ });
function maybe(thunk) {
    try {
        return thunk();
    }
    catch (_a) { }
}
//# sourceMappingURL=maybe.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "maybeDeepFreeze": function() { return /* binding */ maybeDeepFreeze; }
/* harmony export */ });
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects.js */ "./node_modules/@apollo/client/utilities/common/objects.js");


function deepFreeze(value) {
    var workSet = new Set([value]);
    workSet.forEach(function (obj) {
        if ((0,_objects_js__WEBPACK_IMPORTED_MODULE_1__.isNonNullObject)(obj)) {
            if (!Object.isFrozen(obj))
                Object.freeze(obj);
            Object.getOwnPropertyNames(obj).forEach(function (name) {
                if ((0,_objects_js__WEBPACK_IMPORTED_MODULE_1__.isNonNullObject)(obj[name]))
                    workSet.add(obj[name]);
            });
        }
    });
    return value;
}
function maybeDeepFreeze(obj) {
    if (__DEV__) {
        deepFreeze(obj);
    }
    return obj;
}
//# sourceMappingURL=maybeDeepFreeze.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/mergeDeep.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/mergeDeep.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeDeep": function() { return /* binding */ mergeDeep; },
/* harmony export */   "mergeDeepArray": function() { return /* binding */ mergeDeepArray; },
/* harmony export */   "DeepMerger": function() { return /* binding */ DeepMerger; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects.js */ "./node_modules/@apollo/client/utilities/common/objects.js");


var hasOwnProperty = Object.prototype.hasOwnProperty;
function mergeDeep() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    return mergeDeepArray(sources);
}
function mergeDeepArray(sources) {
    var target = sources[0] || {};
    var count = sources.length;
    if (count > 1) {
        var merger = new DeepMerger();
        for (var i = 1; i < count; ++i) {
            target = merger.merge(target, sources[i]);
        }
    }
    return target;
}
var defaultReconciler = function (target, source, property) {
    return this.merge(target[property], source[property]);
};
var DeepMerger = (function () {
    function DeepMerger(reconciler) {
        if (reconciler === void 0) { reconciler = defaultReconciler; }
        this.reconciler = reconciler;
        this.isObject = _objects_js__WEBPACK_IMPORTED_MODULE_0__.isNonNullObject;
        this.pastCopies = new Set();
    }
    DeepMerger.prototype.merge = function (target, source) {
        var _this = this;
        var context = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            context[_i - 2] = arguments[_i];
        }
        if ((0,_objects_js__WEBPACK_IMPORTED_MODULE_0__.isNonNullObject)(source) && (0,_objects_js__WEBPACK_IMPORTED_MODULE_0__.isNonNullObject)(target)) {
            Object.keys(source).forEach(function (sourceKey) {
                if (hasOwnProperty.call(target, sourceKey)) {
                    var targetValue = target[sourceKey];
                    if (source[sourceKey] !== targetValue) {
                        var result = _this.reconciler.apply(_this, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([target, source, sourceKey], context));
                        if (result !== targetValue) {
                            target = _this.shallowCopyForMerge(target);
                            target[sourceKey] = result;
                        }
                    }
                }
                else {
                    target = _this.shallowCopyForMerge(target);
                    target[sourceKey] = source[sourceKey];
                }
            });
            return target;
        }
        return source;
    };
    DeepMerger.prototype.shallowCopyForMerge = function (value) {
        if ((0,_objects_js__WEBPACK_IMPORTED_MODULE_0__.isNonNullObject)(value) && !this.pastCopies.has(value)) {
            if (Array.isArray(value)) {
                value = value.slice(0);
            }
            else {
                value = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ __proto__: Object.getPrototypeOf(value) }, value);
            }
            this.pastCopies.add(value);
        }
        return value;
    };
    return DeepMerger;
}());

//# sourceMappingURL=mergeDeep.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/objects.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/objects.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNonNullObject": function() { return /* binding */ isNonNullObject; }
/* harmony export */ });
function isNonNullObject(obj) {
    return obj !== null && typeof obj === 'object';
}
//# sourceMappingURL=objects.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/stringifyForDisplay.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/stringifyForDisplay.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stringifyForDisplay": function() { return /* binding */ stringifyForDisplay; }
/* harmony export */ });
/* harmony import */ var _makeUniqueId_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeUniqueId.js */ "./node_modules/@apollo/client/utilities/common/makeUniqueId.js");

function stringifyForDisplay(value) {
    var undefId = (0,_makeUniqueId_js__WEBPACK_IMPORTED_MODULE_0__.makeUniqueId)("stringifyForDisplay");
    return JSON.stringify(value, function (key, value) {
        return value === void 0 ? undefId : value;
    }).split(JSON.stringify(undefId)).join("<undefined>");
}
//# sourceMappingURL=stringifyForDisplay.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/globals/DEV.js":
/*!**************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/globals/DEV.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/global.js */ "./node_modules/@apollo/client/utilities/common/global.js");
/* harmony import */ var _common_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/maybe.js */ "./node_modules/@apollo/client/utilities/common/maybe.js");


var __ = "__";
var GLOBAL_KEY = [__, __].join("DEV");
function getDEV() {
    try {
        return Boolean(__DEV__);
    }
    catch (_a) {
        Object.defineProperty(_common_global_js__WEBPACK_IMPORTED_MODULE_0__.default, GLOBAL_KEY, {
            value: (0,_common_maybe_js__WEBPACK_IMPORTED_MODULE_1__.maybe)(function () { return "development"; }) !== "production",
            enumerable: false,
            configurable: true,
            writable: true,
        });
        return _common_global_js__WEBPACK_IMPORTED_MODULE_0__.default[GLOBAL_KEY];
    }
}
/* harmony default export */ __webpack_exports__["default"] = (getDEV());
//# sourceMappingURL=DEV.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/globals/graphql.js":
/*!******************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/globals/graphql.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeTemporaryGlobals": function() { return /* binding */ removeTemporaryGlobals; }
/* harmony export */ });
/* harmony import */ var ts_invariant_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant/process */ "./node_modules/ts-invariant/process/index.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");


function removeTemporaryGlobals() {
    (0,graphql__WEBPACK_IMPORTED_MODULE_1__.isType)(null);
    return (0,ts_invariant_process__WEBPACK_IMPORTED_MODULE_0__.remove)();
}
//# sourceMappingURL=graphql.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/globals/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/globals/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEV": function() { return /* reexport safe */ _DEV_js__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "removeTemporaryGlobals": function() { return /* reexport safe */ _graphql_js__WEBPACK_IMPORTED_MODULE_1__.removeTemporaryGlobals; }
/* harmony export */ });
/* harmony import */ var _DEV_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DEV.js */ "./node_modules/@apollo/client/utilities/globals/DEV.js");
/* harmony import */ var _graphql_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphql.js */ "./node_modules/@apollo/client/utilities/globals/graphql.js");




(0,_graphql_js__WEBPACK_IMPORTED_MODULE_1__.removeTemporaryGlobals)();
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/graphql/directives.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/graphql/directives.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shouldInclude": function() { return /* binding */ shouldInclude; },
/* harmony export */   "getDirectiveNames": function() { return /* binding */ getDirectiveNames; },
/* harmony export */   "hasDirectives": function() { return /* binding */ hasDirectives; },
/* harmony export */   "hasClientExports": function() { return /* binding */ hasClientExports; },
/* harmony export */   "getInclusionDirectives": function() { return /* binding */ getInclusionDirectives; }
/* harmony export */ });
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");


function shouldInclude(_a, variables) {
    var directives = _a.directives;
    if (!directives || !directives.length) {
        return true;
    }
    return getInclusionDirectives(directives).every(function (_a) {
        var directive = _a.directive, ifArgument = _a.ifArgument;
        var evaledValue = false;
        if (ifArgument.value.kind === 'Variable') {
            evaledValue = variables && variables[ifArgument.value.name.value];
            __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(evaledValue !== void 0, "Invalid variable referenced in @" + directive.name.value + " directive.") : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(evaledValue !== void 0, 43);
        }
        else {
            evaledValue = ifArgument.value.value;
        }
        return directive.name.value === 'skip' ? !evaledValue : evaledValue;
    });
}
function getDirectiveNames(root) {
    var names = [];
    (0,graphql__WEBPACK_IMPORTED_MODULE_1__.visit)(root, {
        Directive: function (node) {
            names.push(node.name.value);
        },
    });
    return names;
}
function hasDirectives(names, root) {
    return getDirectiveNames(root).some(function (name) { return names.indexOf(name) > -1; });
}
function hasClientExports(document) {
    return (document &&
        hasDirectives(['client'], document) &&
        hasDirectives(['export'], document));
}
function isInclusionDirective(_a) {
    var value = _a.name.value;
    return value === 'skip' || value === 'include';
}
function getInclusionDirectives(directives) {
    var result = [];
    if (directives && directives.length) {
        directives.forEach(function (directive) {
            if (!isInclusionDirective(directive))
                return;
            var directiveArguments = directive.arguments;
            var directiveName = directive.name.value;
            __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(directiveArguments && directiveArguments.length === 1, "Incorrect number of arguments for the @" + directiveName + " directive.") : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(directiveArguments && directiveArguments.length === 1, 44);
            var ifArgument = directiveArguments[0];
            __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(ifArgument.name && ifArgument.name.value === 'if', "Invalid argument for the @" + directiveName + " directive.") : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(ifArgument.name && ifArgument.name.value === 'if', 45);
            var ifValue = ifArgument.value;
            __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(ifValue &&
                (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), "Argument for the @" + directiveName + " directive must be a variable or a boolean value.") : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(ifValue &&
                (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), 46);
            result.push({ directive: directive, ifArgument: ifArgument });
        });
    }
    return result;
}
//# sourceMappingURL=directives.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/graphql/fragments.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/graphql/fragments.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFragmentQueryDocument": function() { return /* binding */ getFragmentQueryDocument; },
/* harmony export */   "createFragmentMap": function() { return /* binding */ createFragmentMap; },
/* harmony export */   "getFragmentFromSelection": function() { return /* binding */ getFragmentFromSelection; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");


function getFragmentQueryDocument(document, fragmentName) {
    var actualFragmentName = fragmentName;
    var fragments = [];
    document.definitions.forEach(function (definition) {
        if (definition.kind === 'OperationDefinition') {
            throw __DEV__ ? new ts_invariant__WEBPACK_IMPORTED_MODULE_0__.InvariantError("Found a " + definition.operation + " operation" + (definition.name ? " named '" + definition.name.value + "'" : '') + ". " +
                'No operations are allowed when using a fragment as a query. Only fragments are allowed.') : new ts_invariant__WEBPACK_IMPORTED_MODULE_0__.InvariantError(47);
        }
        if (definition.kind === 'FragmentDefinition') {
            fragments.push(definition);
        }
    });
    if (typeof actualFragmentName === 'undefined') {
        __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(fragments.length === 1, "Found " + fragments.length + " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.") : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(fragments.length === 1, 48);
        actualFragmentName = fragments[0].name.value;
    }
    var query = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, document), { definitions: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([
            {
                kind: 'OperationDefinition',
                operation: 'query',
                selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                        {
                            kind: 'FragmentSpread',
                            name: {
                                kind: 'Name',
                                value: actualFragmentName,
                            },
                        },
                    ],
                },
            }
        ], document.definitions) });
    return query;
}
function createFragmentMap(fragments) {
    if (fragments === void 0) { fragments = []; }
    var symTable = {};
    fragments.forEach(function (fragment) {
        symTable[fragment.name.value] = fragment;
    });
    return symTable;
}
function getFragmentFromSelection(selection, fragmentMap) {
    switch (selection.kind) {
        case 'InlineFragment':
            return selection;
        case 'FragmentSpread': {
            var fragment = fragmentMap && fragmentMap[selection.name.value];
            __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(fragment, "No fragment named " + selection.name.value + ".") : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(fragment, 49);
            return fragment;
        }
        default:
            return null;
    }
}
//# sourceMappingURL=fragments.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/graphql/getFromAST.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkDocument": function() { return /* binding */ checkDocument; },
/* harmony export */   "getOperationDefinition": function() { return /* binding */ getOperationDefinition; },
/* harmony export */   "getOperationName": function() { return /* binding */ getOperationName; },
/* harmony export */   "getFragmentDefinitions": function() { return /* binding */ getFragmentDefinitions; },
/* harmony export */   "getQueryDefinition": function() { return /* binding */ getQueryDefinition; },
/* harmony export */   "getFragmentDefinition": function() { return /* binding */ getFragmentDefinition; },
/* harmony export */   "getMainDefinition": function() { return /* binding */ getMainDefinition; },
/* harmony export */   "getDefaultValues": function() { return /* binding */ getDefaultValues; }
/* harmony export */ });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _storeUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storeUtils.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");


function checkDocument(doc) {
    __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(doc && doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql") : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(doc && doc.kind === 'Document', 50);
    var operations = doc.definitions
        .filter(function (d) { return d.kind !== 'FragmentDefinition'; })
        .map(function (definition) {
        if (definition.kind !== 'OperationDefinition') {
            throw __DEV__ ? new ts_invariant__WEBPACK_IMPORTED_MODULE_0__.InvariantError("Schema type definitions not allowed in queries. Found: \"" + definition.kind + "\"") : new ts_invariant__WEBPACK_IMPORTED_MODULE_0__.InvariantError(51);
        }
        return definition;
    });
    __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(operations.length <= 1, "Ambiguous GraphQL document: contains " + operations.length + " operations") : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(operations.length <= 1, 52);
    return doc;
}
function getOperationDefinition(doc) {
    checkDocument(doc);
    return doc.definitions.filter(function (definition) { return definition.kind === 'OperationDefinition'; })[0];
}
function getOperationName(doc) {
    return (doc.definitions
        .filter(function (definition) {
        return definition.kind === 'OperationDefinition' && definition.name;
    })
        .map(function (x) { return x.name.value; })[0] || null);
}
function getFragmentDefinitions(doc) {
    return doc.definitions.filter(function (definition) { return definition.kind === 'FragmentDefinition'; });
}
function getQueryDefinition(doc) {
    var queryDef = getOperationDefinition(doc);
    __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(queryDef && queryDef.operation === 'query', 'Must contain a query definition.') : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(queryDef && queryDef.operation === 'query', 53);
    return queryDef;
}
function getFragmentDefinition(doc) {
    __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql") : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(doc.kind === 'Document', 54);
    __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(doc.definitions.length <= 1, 'Fragment must have exactly one definition.') : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(doc.definitions.length <= 1, 55);
    var fragmentDef = doc.definitions[0];
    __DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(fragmentDef.kind === 'FragmentDefinition', 'Must be a fragment definition.') : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(fragmentDef.kind === 'FragmentDefinition', 56);
    return fragmentDef;
}
function getMainDefinition(queryDoc) {
    checkDocument(queryDoc);
    var fragmentDefinition;
    for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
        var definition = _a[_i];
        if (definition.kind === 'OperationDefinition') {
            var operation = definition.operation;
            if (operation === 'query' ||
                operation === 'mutation' ||
                operation === 'subscription') {
                return definition;
            }
        }
        if (definition.kind === 'FragmentDefinition' && !fragmentDefinition) {
            fragmentDefinition = definition;
        }
    }
    if (fragmentDefinition) {
        return fragmentDefinition;
    }
    throw __DEV__ ? new ts_invariant__WEBPACK_IMPORTED_MODULE_0__.InvariantError('Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.') : new ts_invariant__WEBPACK_IMPORTED_MODULE_0__.InvariantError(57);
}
function getDefaultValues(definition) {
    var defaultValues = Object.create(null);
    var defs = definition && definition.variableDefinitions;
    if (defs && defs.length) {
        defs.forEach(function (def) {
            if (def.defaultValue) {
                (0,_storeUtils_js__WEBPACK_IMPORTED_MODULE_1__.valueToObjectRepresentation)(defaultValues, def.variable.name, def.defaultValue);
            }
        });
    }
    return defaultValues;
}
//# sourceMappingURL=getFromAST.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/graphql/storeUtils.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeReference": function() { return /* binding */ makeReference; },
/* harmony export */   "isReference": function() { return /* binding */ isReference; },
/* harmony export */   "isDocumentNode": function() { return /* binding */ isDocumentNode; },
/* harmony export */   "valueToObjectRepresentation": function() { return /* binding */ valueToObjectRepresentation; },
/* harmony export */   "storeKeyNameFromField": function() { return /* binding */ storeKeyNameFromField; },
/* harmony export */   "getStoreKeyName": function() { return /* binding */ getStoreKeyName; },
/* harmony export */   "argumentsObjectFromField": function() { return /* binding */ argumentsObjectFromField; },
/* harmony export */   "resultKeyNameFromField": function() { return /* binding */ resultKeyNameFromField; },
/* harmony export */   "getTypenameFromResult": function() { return /* binding */ getTypenameFromResult; },
/* harmony export */   "isField": function() { return /* binding */ isField; },
/* harmony export */   "isInlineFragment": function() { return /* binding */ isInlineFragment; }
/* harmony export */ });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _common_objects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/objects.js */ "./node_modules/@apollo/client/utilities/common/objects.js");
/* harmony import */ var _fragments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fragments.js */ "./node_modules/@apollo/client/utilities/graphql/fragments.js");



function makeReference(id) {
    return { __ref: String(id) };
}
function isReference(obj) {
    return Boolean(obj && typeof obj === 'object' && typeof obj.__ref === 'string');
}
function isDocumentNode(value) {
    return ((0,_common_objects_js__WEBPACK_IMPORTED_MODULE_1__.isNonNullObject)(value) &&
        value.kind === "Document" &&
        Array.isArray(value.definitions));
}
function isStringValue(value) {
    return value.kind === 'StringValue';
}
function isBooleanValue(value) {
    return value.kind === 'BooleanValue';
}
function isIntValue(value) {
    return value.kind === 'IntValue';
}
function isFloatValue(value) {
    return value.kind === 'FloatValue';
}
function isVariable(value) {
    return value.kind === 'Variable';
}
function isObjectValue(value) {
    return value.kind === 'ObjectValue';
}
function isListValue(value) {
    return value.kind === 'ListValue';
}
function isEnumValue(value) {
    return value.kind === 'EnumValue';
}
function isNullValue(value) {
    return value.kind === 'NullValue';
}
function valueToObjectRepresentation(argObj, name, value, variables) {
    if (isIntValue(value) || isFloatValue(value)) {
        argObj[name.value] = Number(value.value);
    }
    else if (isBooleanValue(value) || isStringValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isObjectValue(value)) {
        var nestedArgObj_1 = {};
        value.fields.map(function (obj) {
            return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
        });
        argObj[name.value] = nestedArgObj_1;
    }
    else if (isVariable(value)) {
        var variableValue = (variables || {})[value.name.value];
        argObj[name.value] = variableValue;
    }
    else if (isListValue(value)) {
        argObj[name.value] = value.values.map(function (listValue) {
            var nestedArgArrayObj = {};
            valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
            return nestedArgArrayObj[name.value];
        });
    }
    else if (isEnumValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isNullValue(value)) {
        argObj[name.value] = null;
    }
    else {
        throw __DEV__ ? new ts_invariant__WEBPACK_IMPORTED_MODULE_0__.InvariantError("The inline argument \"" + name.value + "\" of kind \"" + value.kind + "\"" +
            'is not supported. Use variables instead of inline arguments to ' +
            'overcome this limitation.') : new ts_invariant__WEBPACK_IMPORTED_MODULE_0__.InvariantError(58);
    }
}
function storeKeyNameFromField(field, variables) {
    var directivesObj = null;
    if (field.directives) {
        directivesObj = {};
        field.directives.forEach(function (directive) {
            directivesObj[directive.name.value] = {};
            if (directive.arguments) {
                directive.arguments.forEach(function (_a) {
                    var name = _a.name, value = _a.value;
                    return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
                });
            }
        });
    }
    var argObj = null;
    if (field.arguments && field.arguments.length) {
        argObj = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj, name, value, variables);
        });
    }
    return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = [
    'connection',
    'include',
    'skip',
    'client',
    'rest',
    'export',
];
var getStoreKeyName = Object.assign(function (fieldName, args, directives) {
    if (args &&
        directives &&
        directives['connection'] &&
        directives['connection']['key']) {
        if (directives['connection']['filter'] &&
            directives['connection']['filter'].length > 0) {
            var filterKeys = directives['connection']['filter']
                ? directives['connection']['filter']
                : [];
            filterKeys.sort();
            var filteredArgs_1 = {};
            filterKeys.forEach(function (key) {
                filteredArgs_1[key] = args[key];
            });
            return directives['connection']['key'] + "(" + stringify(filteredArgs_1) + ")";
        }
        else {
            return directives['connection']['key'];
        }
    }
    var completeFieldName = fieldName;
    if (args) {
        var stringifiedArgs = stringify(args);
        completeFieldName += "(" + stringifiedArgs + ")";
    }
    if (directives) {
        Object.keys(directives).forEach(function (key) {
            if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
                return;
            if (directives[key] && Object.keys(directives[key]).length) {
                completeFieldName += "@" + key + "(" + stringify(directives[key]) + ")";
            }
            else {
                completeFieldName += "@" + key;
            }
        });
    }
    return completeFieldName;
}, {
    setStringify: function (s) {
        var previous = stringify;
        stringify = s;
        return previous;
    },
});
var stringify = function defaultStringify(value) {
    return JSON.stringify(value, stringifyReplacer);
};
function stringifyReplacer(_key, value) {
    if ((0,_common_objects_js__WEBPACK_IMPORTED_MODULE_1__.isNonNullObject)(value) && !Array.isArray(value)) {
        value = Object.keys(value).sort().reduce(function (copy, key) {
            copy[key] = value[key];
            return copy;
        }, {});
    }
    return value;
}
function argumentsObjectFromField(field, variables) {
    if (field.arguments && field.arguments.length) {
        var argObj_1 = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj_1, name, value, variables);
        });
        return argObj_1;
    }
    return null;
}
function resultKeyNameFromField(field) {
    return field.alias ? field.alias.value : field.name.value;
}
function getTypenameFromResult(result, selectionSet, fragmentMap) {
    if (typeof result.__typename === 'string') {
        return result.__typename;
    }
    for (var _i = 0, _a = selectionSet.selections; _i < _a.length; _i++) {
        var selection = _a[_i];
        if (isField(selection)) {
            if (selection.name.value === '__typename') {
                return result[resultKeyNameFromField(selection)];
            }
        }
        else {
            var typename = getTypenameFromResult(result, (0,_fragments_js__WEBPACK_IMPORTED_MODULE_2__.getFragmentFromSelection)(selection, fragmentMap).selectionSet, fragmentMap);
            if (typeof typename === 'string') {
                return typename;
            }
        }
    }
}
function isField(selection) {
    return selection.kind === 'Field';
}
function isInlineFragment(selection) {
    return selection.kind === 'InlineFragment';
}
//# sourceMappingURL=storeUtils.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/graphql/transform.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/graphql/transform.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeDirectivesFromDocument": function() { return /* binding */ removeDirectivesFromDocument; },
/* harmony export */   "addTypenameToDocument": function() { return /* binding */ addTypenameToDocument; },
/* harmony export */   "removeConnectionDirectiveFromDocument": function() { return /* binding */ removeConnectionDirectiveFromDocument; },
/* harmony export */   "removeArgumentsFromDocument": function() { return /* binding */ removeArgumentsFromDocument; },
/* harmony export */   "removeFragmentSpreadFromDocument": function() { return /* binding */ removeFragmentSpreadFromDocument; },
/* harmony export */   "buildQueryFromSelectionSet": function() { return /* binding */ buildQueryFromSelectionSet; },
/* harmony export */   "removeClientSetsFromDocument": function() { return /* binding */ removeClientSetsFromDocument; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _getFromAST_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getFromAST.js */ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js");
/* harmony import */ var _common_filterInPlace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/filterInPlace.js */ "./node_modules/@apollo/client/utilities/common/filterInPlace.js");
/* harmony import */ var _storeUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storeUtils.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _fragments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fragments.js */ "./node_modules/@apollo/client/utilities/graphql/fragments.js");







var TYPENAME_FIELD = {
    kind: 'Field',
    name: {
        kind: 'Name',
        value: '__typename',
    },
};
function isEmpty(op, fragments) {
    return op.selectionSet.selections.every(function (selection) {
        return selection.kind === 'FragmentSpread' &&
            isEmpty(fragments[selection.name.value], fragments);
    });
}
function nullIfDocIsEmpty(doc) {
    return isEmpty((0,_getFromAST_js__WEBPACK_IMPORTED_MODULE_1__.getOperationDefinition)(doc) || (0,_getFromAST_js__WEBPACK_IMPORTED_MODULE_1__.getFragmentDefinition)(doc), (0,_fragments_js__WEBPACK_IMPORTED_MODULE_2__.createFragmentMap)((0,_getFromAST_js__WEBPACK_IMPORTED_MODULE_1__.getFragmentDefinitions)(doc)))
        ? null
        : doc;
}
function getDirectiveMatcher(directives) {
    return function directiveMatcher(directive) {
        return directives.some(function (dir) {
            return (dir.name && dir.name === directive.name.value) ||
                (dir.test && dir.test(directive));
        });
    };
}
function removeDirectivesFromDocument(directives, doc) {
    var variablesInUse = Object.create(null);
    var variablesToRemove = [];
    var fragmentSpreadsInUse = Object.create(null);
    var fragmentSpreadsToRemove = [];
    var modifiedDoc = nullIfDocIsEmpty((0,graphql__WEBPACK_IMPORTED_MODULE_3__.visit)(doc, {
        Variable: {
            enter: function (node, _key, parent) {
                if (parent.kind !== 'VariableDefinition') {
                    variablesInUse[node.name.value] = true;
                }
            },
        },
        Field: {
            enter: function (node) {
                if (directives && node.directives) {
                    var shouldRemoveField = directives.some(function (directive) { return directive.remove; });
                    if (shouldRemoveField &&
                        node.directives &&
                        node.directives.some(getDirectiveMatcher(directives))) {
                        if (node.arguments) {
                            node.arguments.forEach(function (arg) {
                                if (arg.value.kind === 'Variable') {
                                    variablesToRemove.push({
                                        name: arg.value.name.value,
                                    });
                                }
                            });
                        }
                        if (node.selectionSet) {
                            getAllFragmentSpreadsFromSelectionSet(node.selectionSet).forEach(function (frag) {
                                fragmentSpreadsToRemove.push({
                                    name: frag.name.value,
                                });
                            });
                        }
                        return null;
                    }
                }
            },
        },
        FragmentSpread: {
            enter: function (node) {
                fragmentSpreadsInUse[node.name.value] = true;
            },
        },
        Directive: {
            enter: function (node) {
                if (getDirectiveMatcher(directives)(node)) {
                    return null;
                }
            },
        },
    }));
    if (modifiedDoc &&
        (0,_common_filterInPlace_js__WEBPACK_IMPORTED_MODULE_4__.filterInPlace)(variablesToRemove, function (v) { return !!v.name && !variablesInUse[v.name]; }).length) {
        modifiedDoc = removeArgumentsFromDocument(variablesToRemove, modifiedDoc);
    }
    if (modifiedDoc &&
        (0,_common_filterInPlace_js__WEBPACK_IMPORTED_MODULE_4__.filterInPlace)(fragmentSpreadsToRemove, function (fs) { return !!fs.name && !fragmentSpreadsInUse[fs.name]; })
            .length) {
        modifiedDoc = removeFragmentSpreadFromDocument(fragmentSpreadsToRemove, modifiedDoc);
    }
    return modifiedDoc;
}
var addTypenameToDocument = Object.assign(function (doc) {
    return (0,graphql__WEBPACK_IMPORTED_MODULE_3__.visit)((0,_getFromAST_js__WEBPACK_IMPORTED_MODULE_1__.checkDocument)(doc), {
        SelectionSet: {
            enter: function (node, _key, parent) {
                if (parent &&
                    parent.kind === 'OperationDefinition') {
                    return;
                }
                var selections = node.selections;
                if (!selections) {
                    return;
                }
                var skip = selections.some(function (selection) {
                    return ((0,_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__.isField)(selection) &&
                        (selection.name.value === '__typename' ||
                            selection.name.value.lastIndexOf('__', 0) === 0));
                });
                if (skip) {
                    return;
                }
                var field = parent;
                if ((0,_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__.isField)(field) &&
                    field.directives &&
                    field.directives.some(function (d) { return d.name.value === 'export'; })) {
                    return;
                }
                return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, node), { selections: (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__spreadArray)([], selections), [TYPENAME_FIELD]) });
            },
        },
    });
}, {
    added: function (field) {
        return field === TYPENAME_FIELD;
    },
});
var connectionRemoveConfig = {
    test: function (directive) {
        var willRemove = directive.name.value === 'connection';
        if (willRemove) {
            if (!directive.arguments ||
                !directive.arguments.some(function (arg) { return arg.name.value === 'key'; })) {
                __DEV__ && ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant.warn('Removing an @connection directive even though it does not have a key. ' +
                    'You may want to use the key parameter to specify a store key.');
            }
        }
        return willRemove;
    },
};
function removeConnectionDirectiveFromDocument(doc) {
    return removeDirectivesFromDocument([connectionRemoveConfig], (0,_getFromAST_js__WEBPACK_IMPORTED_MODULE_1__.checkDocument)(doc));
}
function hasDirectivesInSelectionSet(directives, selectionSet, nestedCheck) {
    if (nestedCheck === void 0) { nestedCheck = true; }
    return (!!selectionSet &&
        selectionSet.selections &&
        selectionSet.selections.some(function (selection) {
            return hasDirectivesInSelection(directives, selection, nestedCheck);
        }));
}
function hasDirectivesInSelection(directives, selection, nestedCheck) {
    if (nestedCheck === void 0) { nestedCheck = true; }
    if (!(0,_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__.isField)(selection)) {
        return true;
    }
    if (!selection.directives) {
        return false;
    }
    return (selection.directives.some(getDirectiveMatcher(directives)) ||
        (nestedCheck &&
            hasDirectivesInSelectionSet(directives, selection.selectionSet, nestedCheck)));
}
function getArgumentMatcher(config) {
    return function argumentMatcher(argument) {
        return config.some(function (aConfig) {
            return argument.value &&
                argument.value.kind === 'Variable' &&
                argument.value.name &&
                (aConfig.name === argument.value.name.value ||
                    (aConfig.test && aConfig.test(argument)));
        });
    };
}
function removeArgumentsFromDocument(config, doc) {
    var argMatcher = getArgumentMatcher(config);
    return nullIfDocIsEmpty((0,graphql__WEBPACK_IMPORTED_MODULE_3__.visit)(doc, {
        OperationDefinition: {
            enter: function (node) {
                return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, node), { variableDefinitions: node.variableDefinitions ? node.variableDefinitions.filter(function (varDef) {
                        return !config.some(function (arg) { return arg.name === varDef.variable.name.value; });
                    }) : [] });
            },
        },
        Field: {
            enter: function (node) {
                var shouldRemoveField = config.some(function (argConfig) { return argConfig.remove; });
                if (shouldRemoveField) {
                    var argMatchCount_1 = 0;
                    if (node.arguments) {
                        node.arguments.forEach(function (arg) {
                            if (argMatcher(arg)) {
                                argMatchCount_1 += 1;
                            }
                        });
                    }
                    if (argMatchCount_1 === 1) {
                        return null;
                    }
                }
            },
        },
        Argument: {
            enter: function (node) {
                if (argMatcher(node)) {
                    return null;
                }
            },
        },
    }));
}
function removeFragmentSpreadFromDocument(config, doc) {
    function enter(node) {
        if (config.some(function (def) { return def.name === node.name.value; })) {
            return null;
        }
    }
    return nullIfDocIsEmpty((0,graphql__WEBPACK_IMPORTED_MODULE_3__.visit)(doc, {
        FragmentSpread: { enter: enter },
        FragmentDefinition: { enter: enter },
    }));
}
function getAllFragmentSpreadsFromSelectionSet(selectionSet) {
    var allFragments = [];
    selectionSet.selections.forEach(function (selection) {
        if (((0,_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__.isField)(selection) || (0,_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__.isInlineFragment)(selection)) &&
            selection.selectionSet) {
            getAllFragmentSpreadsFromSelectionSet(selection.selectionSet).forEach(function (frag) { return allFragments.push(frag); });
        }
        else if (selection.kind === 'FragmentSpread') {
            allFragments.push(selection);
        }
    });
    return allFragments;
}
function buildQueryFromSelectionSet(document) {
    var definition = (0,_getFromAST_js__WEBPACK_IMPORTED_MODULE_1__.getMainDefinition)(document);
    var definitionOperation = definition.operation;
    if (definitionOperation === 'query') {
        return document;
    }
    var modifiedDoc = (0,graphql__WEBPACK_IMPORTED_MODULE_3__.visit)(document, {
        OperationDefinition: {
            enter: function (node) {
                return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({}, node), { operation: 'query' });
            },
        },
    });
    return modifiedDoc;
}
function removeClientSetsFromDocument(document) {
    (0,_getFromAST_js__WEBPACK_IMPORTED_MODULE_1__.checkDocument)(document);
    var modifiedDoc = removeDirectivesFromDocument([
        {
            test: function (directive) { return directive.name.value === 'client'; },
            remove: true,
        },
    ], document);
    if (modifiedDoc) {
        modifiedDoc = (0,graphql__WEBPACK_IMPORTED_MODULE_3__.visit)(modifiedDoc, {
            FragmentDefinition: {
                enter: function (node) {
                    if (node.selectionSet) {
                        var isTypenameOnly = node.selectionSet.selections.every(function (selection) {
                            return (0,_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__.isField)(selection) && selection.name.value === '__typename';
                        });
                        if (isTypenameOnly) {
                            return null;
                        }
                    }
                },
            },
        });
    }
    return modifiedDoc;
}
//# sourceMappingURL=transform.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEV": function() { return /* reexport safe */ _globals_index_js__WEBPACK_IMPORTED_MODULE_1__.DEV; },
/* harmony export */   "shouldInclude": function() { return /* reexport safe */ _graphql_directives_js__WEBPACK_IMPORTED_MODULE_2__.shouldInclude; },
/* harmony export */   "hasDirectives": function() { return /* reexport safe */ _graphql_directives_js__WEBPACK_IMPORTED_MODULE_2__.hasDirectives; },
/* harmony export */   "hasClientExports": function() { return /* reexport safe */ _graphql_directives_js__WEBPACK_IMPORTED_MODULE_2__.hasClientExports; },
/* harmony export */   "getDirectiveNames": function() { return /* reexport safe */ _graphql_directives_js__WEBPACK_IMPORTED_MODULE_2__.getDirectiveNames; },
/* harmony export */   "getInclusionDirectives": function() { return /* reexport safe */ _graphql_directives_js__WEBPACK_IMPORTED_MODULE_2__.getInclusionDirectives; },
/* harmony export */   "createFragmentMap": function() { return /* reexport safe */ _graphql_fragments_js__WEBPACK_IMPORTED_MODULE_3__.createFragmentMap; },
/* harmony export */   "getFragmentQueryDocument": function() { return /* reexport safe */ _graphql_fragments_js__WEBPACK_IMPORTED_MODULE_3__.getFragmentQueryDocument; },
/* harmony export */   "getFragmentFromSelection": function() { return /* reexport safe */ _graphql_fragments_js__WEBPACK_IMPORTED_MODULE_3__.getFragmentFromSelection; },
/* harmony export */   "checkDocument": function() { return /* reexport safe */ _graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__.checkDocument; },
/* harmony export */   "getOperationDefinition": function() { return /* reexport safe */ _graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__.getOperationDefinition; },
/* harmony export */   "getOperationName": function() { return /* reexport safe */ _graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__.getOperationName; },
/* harmony export */   "getFragmentDefinitions": function() { return /* reexport safe */ _graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__.getFragmentDefinitions; },
/* harmony export */   "getQueryDefinition": function() { return /* reexport safe */ _graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__.getQueryDefinition; },
/* harmony export */   "getFragmentDefinition": function() { return /* reexport safe */ _graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__.getFragmentDefinition; },
/* harmony export */   "getMainDefinition": function() { return /* reexport safe */ _graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__.getMainDefinition; },
/* harmony export */   "getDefaultValues": function() { return /* reexport safe */ _graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__.getDefaultValues; },
/* harmony export */   "makeReference": function() { return /* reexport safe */ _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__.makeReference; },
/* harmony export */   "isDocumentNode": function() { return /* reexport safe */ _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__.isDocumentNode; },
/* harmony export */   "isReference": function() { return /* reexport safe */ _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__.isReference; },
/* harmony export */   "isField": function() { return /* reexport safe */ _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__.isField; },
/* harmony export */   "isInlineFragment": function() { return /* reexport safe */ _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__.isInlineFragment; },
/* harmony export */   "valueToObjectRepresentation": function() { return /* reexport safe */ _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__.valueToObjectRepresentation; },
/* harmony export */   "storeKeyNameFromField": function() { return /* reexport safe */ _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__.storeKeyNameFromField; },
/* harmony export */   "argumentsObjectFromField": function() { return /* reexport safe */ _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__.argumentsObjectFromField; },
/* harmony export */   "resultKeyNameFromField": function() { return /* reexport safe */ _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__.resultKeyNameFromField; },
/* harmony export */   "getStoreKeyName": function() { return /* reexport safe */ _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__.getStoreKeyName; },
/* harmony export */   "getTypenameFromResult": function() { return /* reexport safe */ _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__.getTypenameFromResult; },
/* harmony export */   "addTypenameToDocument": function() { return /* reexport safe */ _graphql_transform_js__WEBPACK_IMPORTED_MODULE_6__.addTypenameToDocument; },
/* harmony export */   "buildQueryFromSelectionSet": function() { return /* reexport safe */ _graphql_transform_js__WEBPACK_IMPORTED_MODULE_6__.buildQueryFromSelectionSet; },
/* harmony export */   "removeDirectivesFromDocument": function() { return /* reexport safe */ _graphql_transform_js__WEBPACK_IMPORTED_MODULE_6__.removeDirectivesFromDocument; },
/* harmony export */   "removeConnectionDirectiveFromDocument": function() { return /* reexport safe */ _graphql_transform_js__WEBPACK_IMPORTED_MODULE_6__.removeConnectionDirectiveFromDocument; },
/* harmony export */   "removeArgumentsFromDocument": function() { return /* reexport safe */ _graphql_transform_js__WEBPACK_IMPORTED_MODULE_6__.removeArgumentsFromDocument; },
/* harmony export */   "removeFragmentSpreadFromDocument": function() { return /* reexport safe */ _graphql_transform_js__WEBPACK_IMPORTED_MODULE_6__.removeFragmentSpreadFromDocument; },
/* harmony export */   "removeClientSetsFromDocument": function() { return /* reexport safe */ _graphql_transform_js__WEBPACK_IMPORTED_MODULE_6__.removeClientSetsFromDocument; },
/* harmony export */   "concatPagination": function() { return /* reexport safe */ _policies_pagination_js__WEBPACK_IMPORTED_MODULE_7__.concatPagination; },
/* harmony export */   "offsetLimitPagination": function() { return /* reexport safe */ _policies_pagination_js__WEBPACK_IMPORTED_MODULE_7__.offsetLimitPagination; },
/* harmony export */   "relayStylePagination": function() { return /* reexport safe */ _policies_pagination_js__WEBPACK_IMPORTED_MODULE_7__.relayStylePagination; },
/* harmony export */   "Observable": function() { return /* reexport safe */ _observables_Observable_js__WEBPACK_IMPORTED_MODULE_8__.Observable; }
/* harmony export */ });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _graphql_directives_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphql/directives.js */ "./node_modules/@apollo/client/utilities/graphql/directives.js");
/* harmony import */ var _graphql_fragments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphql/fragments.js */ "./node_modules/@apollo/client/utilities/graphql/fragments.js");
/* harmony import */ var _graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphql/getFromAST.js */ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js");
/* harmony import */ var _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./graphql/storeUtils.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _graphql_transform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graphql/transform.js */ "./node_modules/@apollo/client/utilities/graphql/transform.js");
/* harmony import */ var _policies_pagination_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./policies/pagination.js */ "./node_modules/@apollo/client/utilities/policies/pagination.js");
/* harmony import */ var _observables_Observable_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./observables/Observable.js */ "./node_modules/@apollo/client/utilities/observables/Observable.js");
/* harmony import */ var _common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/mergeDeep.js */ "./node_modules/@apollo/client/utilities/common/mergeDeep.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_9__) if(["default","DEV","shouldInclude","hasDirectives","hasClientExports","getDirectiveNames","getInclusionDirectives","createFragmentMap","getFragmentQueryDocument","getFragmentFromSelection","checkDocument","getOperationDefinition","getOperationName","getFragmentDefinitions","getQueryDefinition","getFragmentDefinition","getMainDefinition","getDefaultValues","makeReference","isDocumentNode","isReference","isField","isInlineFragment","valueToObjectRepresentation","storeKeyNameFromField","argumentsObjectFromField","resultKeyNameFromField","getStoreKeyName","getTypenameFromResult","addTypenameToDocument","buildQueryFromSelectionSet","removeDirectivesFromDocument","removeConnectionDirectiveFromDocument","removeArgumentsFromDocument","removeFragmentSpreadFromDocument","removeClientSetsFromDocument","concatPagination","offsetLimitPagination","relayStylePagination","Observable"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_9__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _common_cloneDeep_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/cloneDeep.js */ "./node_modules/@apollo/client/utilities/common/cloneDeep.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _common_cloneDeep_js__WEBPACK_IMPORTED_MODULE_10__) if(["default","DEV","shouldInclude","hasDirectives","hasClientExports","getDirectiveNames","getInclusionDirectives","createFragmentMap","getFragmentQueryDocument","getFragmentFromSelection","checkDocument","getOperationDefinition","getOperationName","getFragmentDefinitions","getQueryDefinition","getFragmentDefinition","getMainDefinition","getDefaultValues","makeReference","isDocumentNode","isReference","isField","isInlineFragment","valueToObjectRepresentation","storeKeyNameFromField","argumentsObjectFromField","resultKeyNameFromField","getStoreKeyName","getTypenameFromResult","addTypenameToDocument","buildQueryFromSelectionSet","removeDirectivesFromDocument","removeConnectionDirectiveFromDocument","removeArgumentsFromDocument","removeFragmentSpreadFromDocument","removeClientSetsFromDocument","concatPagination","offsetLimitPagination","relayStylePagination","Observable"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _common_cloneDeep_js__WEBPACK_IMPORTED_MODULE_10__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _common_maybeDeepFreeze_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/maybeDeepFreeze.js */ "./node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _common_maybeDeepFreeze_js__WEBPACK_IMPORTED_MODULE_11__) if(["default","DEV","shouldInclude","hasDirectives","hasClientExports","getDirectiveNames","getInclusionDirectives","createFragmentMap","getFragmentQueryDocument","getFragmentFromSelection","checkDocument","getOperationDefinition","getOperationName","getFragmentDefinitions","getQueryDefinition","getFragmentDefinition","getMainDefinition","getDefaultValues","makeReference","isDocumentNode","isReference","isField","isInlineFragment","valueToObjectRepresentation","storeKeyNameFromField","argumentsObjectFromField","resultKeyNameFromField","getStoreKeyName","getTypenameFromResult","addTypenameToDocument","buildQueryFromSelectionSet","removeDirectivesFromDocument","removeConnectionDirectiveFromDocument","removeArgumentsFromDocument","removeFragmentSpreadFromDocument","removeClientSetsFromDocument","concatPagination","offsetLimitPagination","relayStylePagination","Observable"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _common_maybeDeepFreeze_js__WEBPACK_IMPORTED_MODULE_11__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _observables_iteration_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./observables/iteration.js */ "./node_modules/@apollo/client/utilities/observables/iteration.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _observables_iteration_js__WEBPACK_IMPORTED_MODULE_12__) if(["default","DEV","shouldInclude","hasDirectives","hasClientExports","getDirectiveNames","getInclusionDirectives","createFragmentMap","getFragmentQueryDocument","getFragmentFromSelection","checkDocument","getOperationDefinition","getOperationName","getFragmentDefinitions","getQueryDefinition","getFragmentDefinition","getMainDefinition","getDefaultValues","makeReference","isDocumentNode","isReference","isField","isInlineFragment","valueToObjectRepresentation","storeKeyNameFromField","argumentsObjectFromField","resultKeyNameFromField","getStoreKeyName","getTypenameFromResult","addTypenameToDocument","buildQueryFromSelectionSet","removeDirectivesFromDocument","removeConnectionDirectiveFromDocument","removeArgumentsFromDocument","removeFragmentSpreadFromDocument","removeClientSetsFromDocument","concatPagination","offsetLimitPagination","relayStylePagination","Observable"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _observables_iteration_js__WEBPACK_IMPORTED_MODULE_12__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _observables_asyncMap_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./observables/asyncMap.js */ "./node_modules/@apollo/client/utilities/observables/asyncMap.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _observables_asyncMap_js__WEBPACK_IMPORTED_MODULE_13__) if(["default","DEV","shouldInclude","hasDirectives","hasClientExports","getDirectiveNames","getInclusionDirectives","createFragmentMap","getFragmentQueryDocument","getFragmentFromSelection","checkDocument","getOperationDefinition","getOperationName","getFragmentDefinitions","getQueryDefinition","getFragmentDefinition","getMainDefinition","getDefaultValues","makeReference","isDocumentNode","isReference","isField","isInlineFragment","valueToObjectRepresentation","storeKeyNameFromField","argumentsObjectFromField","resultKeyNameFromField","getStoreKeyName","getTypenameFromResult","addTypenameToDocument","buildQueryFromSelectionSet","removeDirectivesFromDocument","removeConnectionDirectiveFromDocument","removeArgumentsFromDocument","removeFragmentSpreadFromDocument","removeClientSetsFromDocument","concatPagination","offsetLimitPagination","relayStylePagination","Observable"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _observables_asyncMap_js__WEBPACK_IMPORTED_MODULE_13__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _observables_Concast_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./observables/Concast.js */ "./node_modules/@apollo/client/utilities/observables/Concast.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _observables_Concast_js__WEBPACK_IMPORTED_MODULE_14__) if(["default","DEV","shouldInclude","hasDirectives","hasClientExports","getDirectiveNames","getInclusionDirectives","createFragmentMap","getFragmentQueryDocument","getFragmentFromSelection","checkDocument","getOperationDefinition","getOperationName","getFragmentDefinitions","getQueryDefinition","getFragmentDefinition","getMainDefinition","getDefaultValues","makeReference","isDocumentNode","isReference","isField","isInlineFragment","valueToObjectRepresentation","storeKeyNameFromField","argumentsObjectFromField","resultKeyNameFromField","getStoreKeyName","getTypenameFromResult","addTypenameToDocument","buildQueryFromSelectionSet","removeDirectivesFromDocument","removeConnectionDirectiveFromDocument","removeArgumentsFromDocument","removeFragmentSpreadFromDocument","removeClientSetsFromDocument","concatPagination","offsetLimitPagination","relayStylePagination","Observable"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _observables_Concast_js__WEBPACK_IMPORTED_MODULE_14__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _observables_subclassing_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./observables/subclassing.js */ "./node_modules/@apollo/client/utilities/observables/subclassing.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _observables_subclassing_js__WEBPACK_IMPORTED_MODULE_15__) if(["default","DEV","shouldInclude","hasDirectives","hasClientExports","getDirectiveNames","getInclusionDirectives","createFragmentMap","getFragmentQueryDocument","getFragmentFromSelection","checkDocument","getOperationDefinition","getOperationName","getFragmentDefinitions","getQueryDefinition","getFragmentDefinition","getMainDefinition","getDefaultValues","makeReference","isDocumentNode","isReference","isField","isInlineFragment","valueToObjectRepresentation","storeKeyNameFromField","argumentsObjectFromField","resultKeyNameFromField","getStoreKeyName","getTypenameFromResult","addTypenameToDocument","buildQueryFromSelectionSet","removeDirectivesFromDocument","removeConnectionDirectiveFromDocument","removeArgumentsFromDocument","removeFragmentSpreadFromDocument","removeClientSetsFromDocument","concatPagination","offsetLimitPagination","relayStylePagination","Observable"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _observables_subclassing_js__WEBPACK_IMPORTED_MODULE_15__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _common_arrays_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./common/arrays.js */ "./node_modules/@apollo/client/utilities/common/arrays.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _common_arrays_js__WEBPACK_IMPORTED_MODULE_16__) if(["default","DEV","shouldInclude","hasDirectives","hasClientExports","getDirectiveNames","getInclusionDirectives","createFragmentMap","getFragmentQueryDocument","getFragmentFromSelection","checkDocument","getOperationDefinition","getOperationName","getFragmentDefinitions","getQueryDefinition","getFragmentDefinition","getMainDefinition","getDefaultValues","makeReference","isDocumentNode","isReference","isField","isInlineFragment","valueToObjectRepresentation","storeKeyNameFromField","argumentsObjectFromField","resultKeyNameFromField","getStoreKeyName","getTypenameFromResult","addTypenameToDocument","buildQueryFromSelectionSet","removeDirectivesFromDocument","removeConnectionDirectiveFromDocument","removeArgumentsFromDocument","removeFragmentSpreadFromDocument","removeClientSetsFromDocument","concatPagination","offsetLimitPagination","relayStylePagination","Observable"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _common_arrays_js__WEBPACK_IMPORTED_MODULE_16__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _common_objects_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./common/objects.js */ "./node_modules/@apollo/client/utilities/common/objects.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _common_objects_js__WEBPACK_IMPORTED_MODULE_17__) if(["default","DEV","shouldInclude","hasDirectives","hasClientExports","getDirectiveNames","getInclusionDirectives","createFragmentMap","getFragmentQueryDocument","getFragmentFromSelection","checkDocument","getOperationDefinition","getOperationName","getFragmentDefinitions","getQueryDefinition","getFragmentDefinition","getMainDefinition","getDefaultValues","makeReference","isDocumentNode","isReference","isField","isInlineFragment","valueToObjectRepresentation","storeKeyNameFromField","argumentsObjectFromField","resultKeyNameFromField","getStoreKeyName","getTypenameFromResult","addTypenameToDocument","buildQueryFromSelectionSet","removeDirectivesFromDocument","removeConnectionDirectiveFromDocument","removeArgumentsFromDocument","removeFragmentSpreadFromDocument","removeClientSetsFromDocument","concatPagination","offsetLimitPagination","relayStylePagination","Observable"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _common_objects_js__WEBPACK_IMPORTED_MODULE_17__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _common_errorHandling_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./common/errorHandling.js */ "./node_modules/@apollo/client/utilities/common/errorHandling.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _common_errorHandling_js__WEBPACK_IMPORTED_MODULE_18__) if(["default","DEV","shouldInclude","hasDirectives","hasClientExports","getDirectiveNames","getInclusionDirectives","createFragmentMap","getFragmentQueryDocument","getFragmentFromSelection","checkDocument","getOperationDefinition","getOperationName","getFragmentDefinitions","getQueryDefinition","getFragmentDefinition","getMainDefinition","getDefaultValues","makeReference","isDocumentNode","isReference","isField","isInlineFragment","valueToObjectRepresentation","storeKeyNameFromField","argumentsObjectFromField","resultKeyNameFromField","getStoreKeyName","getTypenameFromResult","addTypenameToDocument","buildQueryFromSelectionSet","removeDirectivesFromDocument","removeConnectionDirectiveFromDocument","removeArgumentsFromDocument","removeFragmentSpreadFromDocument","removeClientSetsFromDocument","concatPagination","offsetLimitPagination","relayStylePagination","Observable"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _common_errorHandling_js__WEBPACK_IMPORTED_MODULE_18__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _common_canUse_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./common/canUse.js */ "./node_modules/@apollo/client/utilities/common/canUse.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _common_canUse_js__WEBPACK_IMPORTED_MODULE_19__) if(["default","DEV","shouldInclude","hasDirectives","hasClientExports","getDirectiveNames","getInclusionDirectives","createFragmentMap","getFragmentQueryDocument","getFragmentFromSelection","checkDocument","getOperationDefinition","getOperationName","getFragmentDefinitions","getQueryDefinition","getFragmentDefinition","getMainDefinition","getDefaultValues","makeReference","isDocumentNode","isReference","isField","isInlineFragment","valueToObjectRepresentation","storeKeyNameFromField","argumentsObjectFromField","resultKeyNameFromField","getStoreKeyName","getTypenameFromResult","addTypenameToDocument","buildQueryFromSelectionSet","removeDirectivesFromDocument","removeConnectionDirectiveFromDocument","removeArgumentsFromDocument","removeFragmentSpreadFromDocument","removeClientSetsFromDocument","concatPagination","offsetLimitPagination","relayStylePagination","Observable"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _common_canUse_js__WEBPACK_IMPORTED_MODULE_19__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _common_compact_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./common/compact.js */ "./node_modules/@apollo/client/utilities/common/compact.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _common_compact_js__WEBPACK_IMPORTED_MODULE_20__) if(["default","DEV","shouldInclude","hasDirectives","hasClientExports","getDirectiveNames","getInclusionDirectives","createFragmentMap","getFragmentQueryDocument","getFragmentFromSelection","checkDocument","getOperationDefinition","getOperationName","getFragmentDefinitions","getQueryDefinition","getFragmentDefinition","getMainDefinition","getDefaultValues","makeReference","isDocumentNode","isReference","isField","isInlineFragment","valueToObjectRepresentation","storeKeyNameFromField","argumentsObjectFromField","resultKeyNameFromField","getStoreKeyName","getTypenameFromResult","addTypenameToDocument","buildQueryFromSelectionSet","removeDirectivesFromDocument","removeConnectionDirectiveFromDocument","removeArgumentsFromDocument","removeFragmentSpreadFromDocument","removeClientSetsFromDocument","concatPagination","offsetLimitPagination","relayStylePagination","Observable"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _common_compact_js__WEBPACK_IMPORTED_MODULE_20__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _common_makeUniqueId_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./common/makeUniqueId.js */ "./node_modules/@apollo/client/utilities/common/makeUniqueId.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _common_makeUniqueId_js__WEBPACK_IMPORTED_MODULE_21__) if(["default","DEV","shouldInclude","hasDirectives","hasClientExports","getDirectiveNames","getInclusionDirectives","createFragmentMap","getFragmentQueryDocument","getFragmentFromSelection","checkDocument","getOperationDefinition","getOperationName","getFragmentDefinitions","getQueryDefinition","getFragmentDefinition","getMainDefinition","getDefaultValues","makeReference","isDocumentNode","isReference","isField","isInlineFragment","valueToObjectRepresentation","storeKeyNameFromField","argumentsObjectFromField","resultKeyNameFromField","getStoreKeyName","getTypenameFromResult","addTypenameToDocument","buildQueryFromSelectionSet","removeDirectivesFromDocument","removeConnectionDirectiveFromDocument","removeArgumentsFromDocument","removeFragmentSpreadFromDocument","removeClientSetsFromDocument","concatPagination","offsetLimitPagination","relayStylePagination","Observable"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _common_makeUniqueId_js__WEBPACK_IMPORTED_MODULE_21__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _common_stringifyForDisplay_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./common/stringifyForDisplay.js */ "./node_modules/@apollo/client/utilities/common/stringifyForDisplay.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _common_stringifyForDisplay_js__WEBPACK_IMPORTED_MODULE_22__) if(["default","DEV","shouldInclude","hasDirectives","hasClientExports","getDirectiveNames","getInclusionDirectives","createFragmentMap","getFragmentQueryDocument","getFragmentFromSelection","checkDocument","getOperationDefinition","getOperationName","getFragmentDefinitions","getQueryDefinition","getFragmentDefinition","getMainDefinition","getDefaultValues","makeReference","isDocumentNode","isReference","isField","isInlineFragment","valueToObjectRepresentation","storeKeyNameFromField","argumentsObjectFromField","resultKeyNameFromField","getStoreKeyName","getTypenameFromResult","addTypenameToDocument","buildQueryFromSelectionSet","removeDirectivesFromDocument","removeConnectionDirectiveFromDocument","removeArgumentsFromDocument","removeFragmentSpreadFromDocument","removeClientSetsFromDocument","concatPagination","offsetLimitPagination","relayStylePagination","Observable"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _common_stringifyForDisplay_js__WEBPACK_IMPORTED_MODULE_22__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _types_IsStrictlyAny_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./types/IsStrictlyAny.js */ "./node_modules/@apollo/client/utilities/types/IsStrictlyAny.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types_IsStrictlyAny_js__WEBPACK_IMPORTED_MODULE_23__) if(["default","DEV","shouldInclude","hasDirectives","hasClientExports","getDirectiveNames","getInclusionDirectives","createFragmentMap","getFragmentQueryDocument","getFragmentFromSelection","checkDocument","getOperationDefinition","getOperationName","getFragmentDefinitions","getQueryDefinition","getFragmentDefinition","getMainDefinition","getDefaultValues","makeReference","isDocumentNode","isReference","isField","isInlineFragment","valueToObjectRepresentation","storeKeyNameFromField","argumentsObjectFromField","resultKeyNameFromField","getStoreKeyName","getTypenameFromResult","addTypenameToDocument","buildQueryFromSelectionSet","removeDirectivesFromDocument","removeConnectionDirectiveFromDocument","removeArgumentsFromDocument","removeFragmentSpreadFromDocument","removeClientSetsFromDocument","concatPagination","offsetLimitPagination","relayStylePagination","Observable"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _types_IsStrictlyAny_js__WEBPACK_IMPORTED_MODULE_23__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


__DEV__ ? (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)("boolean" === typeof _globals_index_js__WEBPACK_IMPORTED_MODULE_1__.DEV, _globals_index_js__WEBPACK_IMPORTED_MODULE_1__.DEV) : (0,ts_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)("boolean" === typeof _globals_index_js__WEBPACK_IMPORTED_MODULE_1__.DEV, 59);























//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/observables/Concast.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/observables/Concast.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Concast": function() { return /* binding */ Concast; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Observable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Observable.js */ "./node_modules/@apollo/client/utilities/observables/Observable.js");
/* harmony import */ var _iteration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iteration.js */ "./node_modules/@apollo/client/utilities/observables/iteration.js");
/* harmony import */ var _subclassing_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subclassing.js */ "./node_modules/@apollo/client/utilities/observables/subclassing.js");




function isPromiseLike(value) {
    return value && typeof value.then === "function";
}
var Concast = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(Concast, _super);
    function Concast(sources) {
        var _this = _super.call(this, function (observer) {
            _this.addObserver(observer);
            return function () { return _this.removeObserver(observer); };
        }) || this;
        _this.observers = new Set();
        _this.addCount = 0;
        _this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
        _this.handlers = {
            next: function (result) {
                if (_this.sub !== null) {
                    _this.latest = ["next", result];
                    (0,_iteration_js__WEBPACK_IMPORTED_MODULE_1__.iterateObserversSafely)(_this.observers, "next", result);
                }
            },
            error: function (error) {
                var sub = _this.sub;
                if (sub !== null) {
                    if (sub)
                        Promise.resolve().then(function () { return sub.unsubscribe(); });
                    _this.sub = null;
                    _this.latest = ["error", error];
                    _this.reject(error);
                    (0,_iteration_js__WEBPACK_IMPORTED_MODULE_1__.iterateObserversSafely)(_this.observers, "error", error);
                }
            },
            complete: function () {
                if (_this.sub !== null) {
                    var value = _this.sources.shift();
                    if (!value) {
                        _this.sub = null;
                        if (_this.latest &&
                            _this.latest[0] === "next") {
                            _this.resolve(_this.latest[1]);
                        }
                        else {
                            _this.resolve();
                        }
                        (0,_iteration_js__WEBPACK_IMPORTED_MODULE_1__.iterateObserversSafely)(_this.observers, "complete");
                    }
                    else if (isPromiseLike(value)) {
                        value.then(function (obs) { return _this.sub = obs.subscribe(_this.handlers); });
                    }
                    else {
                        _this.sub = value.subscribe(_this.handlers);
                    }
                }
            },
        };
        _this.cancel = function (reason) {
            _this.reject(reason);
            _this.sources = [];
            _this.handlers.complete();
        };
        _this.promise.catch(function (_) { });
        if (typeof sources === "function") {
            sources = [new _Observable_js__WEBPACK_IMPORTED_MODULE_2__.Observable(sources)];
        }
        if (isPromiseLike(sources)) {
            sources.then(function (iterable) { return _this.start(iterable); }, _this.handlers.error);
        }
        else {
            _this.start(sources);
        }
        return _this;
    }
    Concast.prototype.start = function (sources) {
        if (this.sub !== void 0)
            return;
        this.sources = Array.from(sources);
        this.handlers.complete();
    };
    Concast.prototype.deliverLastMessage = function (observer) {
        if (this.latest) {
            var nextOrError = this.latest[0];
            var method = observer[nextOrError];
            if (method) {
                method.call(observer, this.latest[1]);
            }
            if (this.sub === null &&
                nextOrError === "next" &&
                observer.complete) {
                observer.complete();
            }
        }
    };
    Concast.prototype.addObserver = function (observer) {
        if (!this.observers.has(observer)) {
            this.deliverLastMessage(observer);
            this.observers.add(observer);
            ++this.addCount;
        }
    };
    Concast.prototype.removeObserver = function (observer, quietly) {
        if (this.observers.delete(observer) &&
            --this.addCount < 1 &&
            !quietly) {
            this.handlers.error(new Error("Observable cancelled prematurely"));
        }
    };
    Concast.prototype.cleanup = function (callback) {
        var _this = this;
        var called = false;
        var once = function () {
            if (!called) {
                called = true;
                _this.observers.delete(observer);
                callback();
            }
        };
        var observer = {
            next: once,
            error: once,
            complete: once,
        };
        var count = this.addCount;
        this.addObserver(observer);
        this.addCount = count;
    };
    return Concast;
}(_Observable_js__WEBPACK_IMPORTED_MODULE_2__.Observable));

(0,_subclassing_js__WEBPACK_IMPORTED_MODULE_3__.fixObservableSubclass)(Concast);
//# sourceMappingURL=Concast.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/observables/Observable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/observables/Observable.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observable": function() { return /* reexport safe */ zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__.Observable; }
/* harmony export */ });
/* harmony import */ var zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zen-observable-ts */ "./node_modules/zen-observable-ts/module.js");
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");


var prototype = zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__.Observable.prototype;
var fakeObsSymbol = '@@observable';
if (!prototype[fakeObsSymbol]) {
    prototype[fakeObsSymbol] = function () { return this; };
}

//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/observables/asyncMap.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/observables/asyncMap.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asyncMap": function() { return /* binding */ asyncMap; }
/* harmony export */ });
/* harmony import */ var _Observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observable.js */ "./node_modules/@apollo/client/utilities/observables/Observable.js");

function asyncMap(observable, mapFn, catchFn) {
    return new _Observable_js__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
        var next = observer.next, error = observer.error, complete = observer.complete;
        var activeCallbackCount = 0;
        var completed = false;
        var promiseQueue = {
            then: function (callback) {
                return new Promise(function (resolve) { return resolve(callback()); });
            },
        };
        function makeCallback(examiner, delegate) {
            if (examiner) {
                return function (arg) {
                    ++activeCallbackCount;
                    var both = function () { return examiner(arg); };
                    promiseQueue = promiseQueue.then(both, both).then(function (result) {
                        --activeCallbackCount;
                        next && next.call(observer, result);
                        if (completed) {
                            handler.complete();
                        }
                    }, function (error) {
                        --activeCallbackCount;
                        throw error;
                    }).catch(function (caught) {
                        error && error.call(observer, caught);
                    });
                };
            }
            else {
                return function (arg) { return delegate && delegate.call(observer, arg); };
            }
        }
        var handler = {
            next: makeCallback(mapFn, next),
            error: makeCallback(catchFn, error),
            complete: function () {
                completed = true;
                if (!activeCallbackCount) {
                    complete && complete.call(observer);
                }
            },
        };
        var sub = observable.subscribe(handler);
        return function () { return sub.unsubscribe(); };
    });
}
//# sourceMappingURL=asyncMap.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/observables/iteration.js":
/*!************************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/observables/iteration.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iterateObserversSafely": function() { return /* binding */ iterateObserversSafely; }
/* harmony export */ });
function iterateObserversSafely(observers, method, argument) {
    var observersWithMethod = [];
    observers.forEach(function (obs) { return obs[method] && observersWithMethod.push(obs); });
    observersWithMethod.forEach(function (obs) { return obs[method](argument); });
}
//# sourceMappingURL=iteration.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/observables/subclassing.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/observables/subclassing.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fixObservableSubclass": function() { return /* binding */ fixObservableSubclass; }
/* harmony export */ });
/* harmony import */ var _Observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observable.js */ "./node_modules/@apollo/client/utilities/observables/Observable.js");

function fixObservableSubclass(subclass) {
    function set(key) {
        Object.defineProperty(subclass, key, { value: _Observable_js__WEBPACK_IMPORTED_MODULE_0__.Observable });
    }
    if (typeof Symbol === "function" && Symbol.species) {
        set(Symbol.species);
    }
    set("@@species");
    return subclass;
}
//# sourceMappingURL=subclassing.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/policies/pagination.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/policies/pagination.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "concatPagination": function() { return /* binding */ concatPagination; },
/* harmony export */   "offsetLimitPagination": function() { return /* binding */ offsetLimitPagination; },
/* harmony export */   "relayStylePagination": function() { return /* binding */ relayStylePagination; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/mergeDeep.js */ "./node_modules/@apollo/client/utilities/common/mergeDeep.js");



function concatPagination(keyArgs) {
    if (keyArgs === void 0) { keyArgs = false; }
    return {
        keyArgs: keyArgs,
        merge: function (existing, incoming) {
            return existing ? (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], existing), incoming) : incoming;
        },
    };
}
function offsetLimitPagination(keyArgs) {
    if (keyArgs === void 0) { keyArgs = false; }
    return {
        keyArgs: keyArgs,
        merge: function (existing, incoming, _a) {
            var args = _a.args;
            var merged = existing ? existing.slice(0) : [];
            if (args) {
                var _b = args.offset, offset = _b === void 0 ? 0 : _b;
                for (var i = 0; i < incoming.length; ++i) {
                    merged[offset + i] = incoming[i];
                }
            }
            else {
                merged.push.apply(merged, incoming);
            }
            return merged;
        },
    };
}
function relayStylePagination(keyArgs) {
    if (keyArgs === void 0) { keyArgs = false; }
    return {
        keyArgs: keyArgs,
        read: function (existing, _a) {
            var canRead = _a.canRead, readField = _a.readField;
            if (!existing)
                return;
            var edges = [];
            var firstEdgeCursor = "";
            var lastEdgeCursor = "";
            existing.edges.forEach(function (edge) {
                if (canRead(readField("node", edge))) {
                    edges.push(edge);
                    if (edge.cursor) {
                        firstEdgeCursor = firstEdgeCursor || edge.cursor || "";
                        lastEdgeCursor = edge.cursor || lastEdgeCursor;
                    }
                }
            });
            var _b = existing.pageInfo || {}, startCursor = _b.startCursor, endCursor = _b.endCursor;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, getExtras(existing)), { edges: edges, pageInfo: (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, existing.pageInfo), { startCursor: startCursor || firstEdgeCursor, endCursor: endCursor || lastEdgeCursor }) });
        },
        merge: function (existing, incoming, _a) {
            if (existing === void 0) { existing = makeEmptyData(); }
            var args = _a.args, isReference = _a.isReference, readField = _a.readField;
            var incomingEdges = incoming.edges ? incoming.edges.map(function (edge) {
                if (isReference(edge = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, edge))) {
                    edge.cursor = readField("cursor", edge);
                }
                return edge;
            }) : [];
            if (incoming.pageInfo) {
                var pageInfo_1 = incoming.pageInfo;
                var startCursor = pageInfo_1.startCursor, endCursor = pageInfo_1.endCursor;
                var firstEdge = incomingEdges[0];
                var lastEdge = incomingEdges[incomingEdges.length - 1];
                if (firstEdge && startCursor) {
                    firstEdge.cursor = startCursor;
                }
                if (lastEdge && endCursor) {
                    lastEdge.cursor = endCursor;
                }
                var firstCursor = firstEdge && firstEdge.cursor;
                if (firstCursor && !startCursor) {
                    incoming = (0,_common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_1__.mergeDeep)(incoming, {
                        pageInfo: {
                            startCursor: firstCursor,
                        },
                    });
                }
                var lastCursor = lastEdge && lastEdge.cursor;
                if (lastCursor && !endCursor) {
                    incoming = (0,_common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_1__.mergeDeep)(incoming, {
                        pageInfo: {
                            endCursor: lastCursor,
                        },
                    });
                }
            }
            var prefix = existing.edges;
            var suffix = [];
            if (args && args.after) {
                var index = prefix.findIndex(function (edge) { return edge.cursor === args.after; });
                if (index >= 0) {
                    prefix = prefix.slice(0, index + 1);
                }
            }
            else if (args && args.before) {
                var index = prefix.findIndex(function (edge) { return edge.cursor === args.before; });
                suffix = index < 0 ? prefix : prefix.slice(index);
                prefix = [];
            }
            else if (incoming.edges) {
                prefix = [];
            }
            var edges = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], prefix), incomingEdges), suffix);
            var pageInfo = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, incoming.pageInfo), existing.pageInfo);
            if (incoming.pageInfo) {
                var _b = incoming.pageInfo, hasPreviousPage = _b.hasPreviousPage, hasNextPage = _b.hasNextPage, startCursor = _b.startCursor, endCursor = _b.endCursor, extras = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_b, ["hasPreviousPage", "hasNextPage", "startCursor", "endCursor"]);
                Object.assign(pageInfo, extras);
                if (!prefix.length) {
                    if (void 0 !== hasPreviousPage)
                        pageInfo.hasPreviousPage = hasPreviousPage;
                    if (void 0 !== startCursor)
                        pageInfo.startCursor = startCursor;
                }
                if (!suffix.length) {
                    if (void 0 !== hasNextPage)
                        pageInfo.hasNextPage = hasNextPage;
                    if (void 0 !== endCursor)
                        pageInfo.endCursor = endCursor;
                }
            }
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, getExtras(existing)), getExtras(incoming)), { edges: edges, pageInfo: pageInfo });
        },
    };
}
var getExtras = function (obj) { return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(obj, notExtras); };
var notExtras = ["edges", "pageInfo"];
function makeEmptyData() {
    return {
        edges: [],
        pageInfo: {
            hasPreviousPage: false,
            hasNextPage: true,
            startCursor: "",
            endCursor: "",
        },
    };
}
//# sourceMappingURL=pagination.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/types/IsStrictlyAny.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/types/IsStrictlyAny.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=IsStrictlyAny.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/version.js":
/*!************************************************!*\
  !*** ./node_modules/@apollo/client/version.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "version": function() { return /* binding */ version; }
/* harmony export */ });
var version = '3.4.0';
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./components/UpdateProduct.js":
/*!*************************************!*\
  !*** ./components/UpdateProduct.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UpdateProduct; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\UpdateProduct.js",
    _s = $RefreshSig$();

function _templateObject2() {
  var data = (0,C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  mutation UPDATE_PRODUCT_MUTATION(\n    $id: ID!\n    $name: String\n    $description: String\n    $price: Int\n  ) {\n    updateProduct(\n      id: $id\n      data: { name: $name, description: $description, price: $price }\n    ) {\n      id\n      name\n      description\n      price\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  query SINGLE_PRODUCT_QUERY($id: ID!) {\n    Product(where: { id: $id }) {\n      id\n      name\n      description\n      price\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var SINGLE_PRODUCT_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_6__.default)(_templateObject());
var UPDATE_PRODUCT_MUTATION = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_6__.default)(_templateObject2());
function UpdateProduct() {
  _s();

  // 1. We need to get the existing product
  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery)(SINGLE_PRODUCT_QUERY, {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data,
      error = _useQuery.error,
      loading = _useQuery.loading; // 2. We need to get the mutation to update the product
  // 3. We need the form to handle the updates


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_5__.default, {
    onSubmit: /*#__PURE__*/function () {
      var _ref = (0,C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
        return C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault(); // // Submit the inputfields to the backend
                // TODO: Handle Submit!!
                // const res = await createProduct();
                // clearForm();
                // // Go to that product's page
                // Router.push({
                //   pathname: `/product/${res.data.createProduct.id}`,
                // });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__.default, {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("fieldset", {
      disabled: loading,
      "aria-busy": loading,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "image",
        children: ["Image", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          required: true,
          type: "file",
          id: "image",
          name: "image",
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "name",
        children: ["Name", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          id: "name",
          name: "name",
          placeholder: "name",
          value: inputs.name,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "price",
        children: ["Price", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "number",
          id: "price",
          name: "price",
          placeholder: "price",
          value: inputs.price,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "description",
        children: ["Description", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
          id: "description",
          name: "description",
          placeholder: "Description",
          value: inputs.description,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        children: "+ Add Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

_s(UpdateProduct, "eE+cqeCo2lkI//dPlCsO1rICVGU=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery];
});

_c = UpdateProduct;

var _c;

$RefreshReg$(_c, "UpdateProduct");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/@wry/context/lib/context.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/@wry/context/lib/context.esm.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Slot": function() { return /* binding */ Slot; },
/* harmony export */   "asyncFromGen": function() { return /* binding */ asyncFromGen; },
/* harmony export */   "bind": function() { return /* binding */ bind; },
/* harmony export */   "noContext": function() { return /* binding */ noContext; },
/* harmony export */   "setTimeout": function() { return /* binding */ setTimeoutWithContext; },
/* harmony export */   "wrapYieldingFiberMethods": function() { return /* binding */ wrapYieldingFiberMethods; }
/* harmony export */ });
// This currentContext variable will only be used if the makeSlotClass
// function is called, which happens only if this is the first copy of the
// @wry/context package to be imported.
var currentContext = null;
// This unique internal object is used to denote the absence of a value
// for a given Slot, and is never exposed to outside code.
var MISSING_VALUE = {};
var idCounter = 1;
// Although we can't do anything about the cost of duplicated code from
// accidentally bundling multiple copies of the @wry/context package, we can
// avoid creating the Slot class more than once using makeSlotClass.
var makeSlotClass = function () { return /** @class */ (function () {
    function Slot() {
        // If you have a Slot object, you can find out its slot.id, but you cannot
        // guess the slot.id of a Slot you don't have access to, thanks to the
        // randomized suffix.
        this.id = [
            "slot",
            idCounter++,
            Date.now(),
            Math.random().toString(36).slice(2),
        ].join(":");
    }
    Slot.prototype.hasValue = function () {
        for (var context_1 = currentContext; context_1; context_1 = context_1.parent) {
            // We use the Slot object iself as a key to its value, which means the
            // value cannot be obtained without a reference to the Slot object.
            if (this.id in context_1.slots) {
                var value = context_1.slots[this.id];
                if (value === MISSING_VALUE)
                    break;
                if (context_1 !== currentContext) {
                    // Cache the value in currentContext.slots so the next lookup will
                    // be faster. This caching is safe because the tree of contexts and
                    // the values of the slots are logically immutable.
                    currentContext.slots[this.id] = value;
                }
                return true;
            }
        }
        if (currentContext) {
            // If a value was not found for this Slot, it's never going to be found
            // no matter how many times we look it up, so we might as well cache
            // the absence of the value, too.
            currentContext.slots[this.id] = MISSING_VALUE;
        }
        return false;
    };
    Slot.prototype.getValue = function () {
        if (this.hasValue()) {
            return currentContext.slots[this.id];
        }
    };
    Slot.prototype.withValue = function (value, callback, 
    // Given the prevalence of arrow functions, specifying arguments is likely
    // to be much more common than specifying `this`, hence this ordering:
    args, thisArg) {
        var _a;
        var slots = (_a = {
                __proto__: null
            },
            _a[this.id] = value,
            _a);
        var parent = currentContext;
        currentContext = { parent: parent, slots: slots };
        try {
            // Function.prototype.apply allows the arguments array argument to be
            // omitted or undefined, so args! is fine here.
            return callback.apply(thisArg, args);
        }
        finally {
            currentContext = parent;
        }
    };
    // Capture the current context and wrap a callback function so that it
    // reestablishes the captured context when called.
    Slot.bind = function (callback) {
        var context = currentContext;
        return function () {
            var saved = currentContext;
            try {
                currentContext = context;
                return callback.apply(this, arguments);
            }
            finally {
                currentContext = saved;
            }
        };
    };
    // Immediately run a callback function without any captured context.
    Slot.noContext = function (callback, 
    // Given the prevalence of arrow functions, specifying arguments is likely
    // to be much more common than specifying `this`, hence this ordering:
    args, thisArg) {
        if (currentContext) {
            var saved = currentContext;
            try {
                currentContext = null;
                // Function.prototype.apply allows the arguments array argument to be
                // omitted or undefined, so args! is fine here.
                return callback.apply(thisArg, args);
            }
            finally {
                currentContext = saved;
            }
        }
        else {
            return callback.apply(thisArg, args);
        }
    };
    return Slot;
}()); };
// We store a single global implementation of the Slot class as a permanent
// non-enumerable symbol property of the Array constructor. This obfuscation
// does nothing to prevent access to the Slot class, but at least it ensures
// the implementation (i.e. currentContext) cannot be tampered with, and all
// copies of the @wry/context package (hopefully just one) will share the
// same Slot implementation. Since the first copy of the @wry/context package
// to be imported wins, this technique imposes a very high cost for any
// future breaking changes to the Slot class.
var globalKey = "@wry/context:Slot";
var host = Array;
var Slot = host[globalKey] || function () {
    var Slot = makeSlotClass();
    try {
        Object.defineProperty(host, globalKey, {
            value: host[globalKey] = Slot,
            enumerable: false,
            writable: false,
            configurable: false,
        });
    }
    finally {
        return Slot;
    }
}();

var bind = Slot.bind, noContext = Slot.noContext;
function setTimeoutWithContext(callback, delay) {
    return setTimeout(bind(callback), delay);
}
// Turn any generator function into an async function (using yield instead
// of await), with context automatically preserved across yields.
function asyncFromGen(genFn) {
    return function () {
        var gen = genFn.apply(this, arguments);
        var boundNext = bind(gen.next);
        var boundThrow = bind(gen.throw);
        return new Promise(function (resolve, reject) {
            function invoke(method, argument) {
                try {
                    var result = method.call(gen, argument);
                }
                catch (error) {
                    return reject(error);
                }
                var next = result.done ? resolve : invokeNext;
                if (isPromiseLike(result.value)) {
                    result.value.then(next, result.done ? reject : invokeThrow);
                }
                else {
                    next(result.value);
                }
            }
            var invokeNext = function (value) { return invoke(boundNext, value); };
            var invokeThrow = function (error) { return invoke(boundThrow, error); };
            invokeNext();
        });
    };
}
function isPromiseLike(value) {
    return value && typeof value.then === "function";
}
// If you use the fibers npm package to implement coroutines in Node.js,
// you should call this function at least once to ensure context management
// remains coherent across any yields.
var wrappedFibers = [];
function wrapYieldingFiberMethods(Fiber) {
    // There can be only one implementation of Fiber per process, so this array
    // should never grow longer than one element.
    if (wrappedFibers.indexOf(Fiber) < 0) {
        var wrap = function (obj, method) {
            var fn = obj[method];
            obj[method] = function () {
                return noContext(fn, arguments, this);
            };
        };
        // These methods can yield, according to
        // https://github.com/laverdet/node-fibers/blob/ddebed9b8ae3883e57f822e2108e6943e5c8d2a8/fibers.js#L97-L100
        wrap(Fiber, "yield");
        wrap(Fiber.prototype, "run");
        wrap(Fiber.prototype, "throwInto");
        wrappedFibers.push(Fiber);
    }
    return Fiber;
}


//# sourceMappingURL=context.esm.js.map


/***/ }),

/***/ "./node_modules/@wry/equality/lib/equality.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/@wry/equality/lib/equality.esm.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ equal; },
/* harmony export */   "equal": function() { return /* binding */ equal; }
/* harmony export */ });
var _a = Object.prototype, toString = _a.toString, hasOwnProperty = _a.hasOwnProperty;
var fnToStr = Function.prototype.toString;
var previousComparisons = new Map();
/**
 * Performs a deep equality check on two JavaScript values, tolerating cycles.
 */
function equal(a, b) {
    try {
        return check(a, b);
    }
    finally {
        previousComparisons.clear();
    }
}
function check(a, b) {
    // If the two values are strictly equal, our job is easy.
    if (a === b) {
        return true;
    }
    // Object.prototype.toString returns a representation of the runtime type of
    // the given value that is considerably more precise than typeof.
    var aTag = toString.call(a);
    var bTag = toString.call(b);
    // If the runtime types of a and b are different, they could maybe be equal
    // under some interpretation of equality, but for simplicity and performance
    // we just return false instead.
    if (aTag !== bTag) {
        return false;
    }
    switch (aTag) {
        case '[object Array]':
            // Arrays are a lot like other objects, but we can cheaply compare their
            // lengths as a short-cut before comparing their elements.
            if (a.length !== b.length)
                return false;
        // Fall through to object case...
        case '[object Object]': {
            if (previouslyCompared(a, b))
                return true;
            var aKeys = definedKeys(a);
            var bKeys = definedKeys(b);
            // If `a` and `b` have a different number of enumerable keys, they
            // must be different.
            var keyCount = aKeys.length;
            if (keyCount !== bKeys.length)
                return false;
            // Now make sure they have the same keys.
            for (var k = 0; k < keyCount; ++k) {
                if (!hasOwnProperty.call(b, aKeys[k])) {
                    return false;
                }
            }
            // Finally, check deep equality of all child properties.
            for (var k = 0; k < keyCount; ++k) {
                var key = aKeys[k];
                if (!check(a[key], b[key])) {
                    return false;
                }
            }
            return true;
        }
        case '[object Error]':
            return a.name === b.name && a.message === b.message;
        case '[object Number]':
            // Handle NaN, which is !== itself.
            if (a !== a)
                return b !== b;
        // Fall through to shared +a === +b case...
        case '[object Boolean]':
        case '[object Date]':
            return +a === +b;
        case '[object RegExp]':
        case '[object String]':
            return a == "" + b;
        case '[object Map]':
        case '[object Set]': {
            if (a.size !== b.size)
                return false;
            if (previouslyCompared(a, b))
                return true;
            var aIterator = a.entries();
            var isMap = aTag === '[object Map]';
            while (true) {
                var info = aIterator.next();
                if (info.done)
                    break;
                // If a instanceof Set, aValue === aKey.
                var _a = info.value, aKey = _a[0], aValue = _a[1];
                // So this works the same way for both Set and Map.
                if (!b.has(aKey)) {
                    return false;
                }
                // However, we care about deep equality of values only when dealing
                // with Map structures.
                if (isMap && !check(aValue, b.get(aKey))) {
                    return false;
                }
            }
            return true;
        }
        case '[object Uint16Array]':
        case '[object Uint8Array]': // Buffer, in Node.js.
        case '[object Uint32Array]':
        case '[object Int32Array]':
        case '[object Int8Array]':
        case '[object Int16Array]':
        case '[object ArrayBuffer]':
            // DataView doesn't need these conversions, but the equality check is
            // otherwise the same.
            a = new Uint8Array(a);
            b = new Uint8Array(b);
        // Fall through...
        case '[object DataView]': {
            var len = a.byteLength;
            if (len === b.byteLength) {
                while (len-- && a[len] === b[len]) {
                    // Keep looping as long as the bytes are equal.
                }
            }
            return len === -1;
        }
        case '[object AsyncFunction]':
        case '[object GeneratorFunction]':
        case '[object AsyncGeneratorFunction]':
        case '[object Function]': {
            var aCode = fnToStr.call(a);
            if (aCode !== fnToStr.call(b)) {
                return false;
            }
            // We consider non-native functions equal if they have the same code
            // (native functions require === because their code is censored).
            // Note that this behavior is not entirely sound, since !== function
            // objects with the same code can behave differently depending on
            // their closure scope. However, any function can behave differently
            // depending on the values of its input arguments (including this)
            // and its calling context (including its closure scope), even
            // though the function object is === to itself; and it is entirely
            // possible for functions that are not === to behave exactly the
            // same under all conceivable circumstances. Because none of these
            // factors are statically decidable in JavaScript, JS function
            // equality is not well-defined. This ambiguity allows us to
            // consider the best possible heuristic among various imperfect
            // options, and equating non-native functions that have the same
            // code has enormous practical benefits, such as when comparing
            // functions that are repeatedly passed as fresh function
            // expressions within objects that are otherwise deeply equal. Since
            // any function created from the same syntactic expression (in the
            // same code location) will always stringify to the same code
            // according to fnToStr.call, we can reasonably expect these
            // repeatedly passed function expressions to have the same code, and
            // thus behave "the same" (with all the caveats mentioned above),
            // even though the runtime function objects are !== to one another.
            return !endsWith(aCode, nativeCodeSuffix);
        }
    }
    // Otherwise the values are not equal.
    return false;
}
function definedKeys(obj) {
    // Remember that the second argument to Array.prototype.filter will be
    // used as `this` within the callback function.
    return Object.keys(obj).filter(isDefinedKey, obj);
}
function isDefinedKey(key) {
    return this[key] !== void 0;
}
var nativeCodeSuffix = "{ [native code] }";
function endsWith(full, suffix) {
    var fromIndex = full.length - suffix.length;
    return fromIndex >= 0 &&
        full.indexOf(suffix, fromIndex) === fromIndex;
}
function previouslyCompared(a, b) {
    // Though cyclic references can make an object graph appear infinite from the
    // perspective of a depth-first traversal, the graph still contains a finite
    // number of distinct object references. We use the previousComparisons cache
    // to avoid comparing the same pair of object references more than once, which
    // guarantees termination (even if we end up comparing every object in one
    // graph to every object in the other graph, which is extremely unlikely),
    // while still allowing weird isomorphic structures (like rings with different
    // lengths) a chance to pass the equality test.
    var bSet = previousComparisons.get(a);
    if (bSet) {
        // Return true here because we can be sure false will be returned somewhere
        // else if the objects are not equivalent.
        if (bSet.has(b))
            return true;
    }
    else {
        previousComparisons.set(a, bSet = new Set);
    }
    bSet.add(b);
    return false;
}


//# sourceMappingURL=equality.esm.js.map


/***/ }),

/***/ "./node_modules/@wry/trie/lib/trie.esm.js":
/*!************************************************!*\
  !*** ./node_modules/@wry/trie/lib/trie.esm.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Trie": function() { return /* binding */ Trie; }
/* harmony export */ });
// A [trie](https://en.wikipedia.org/wiki/Trie) data structure that holds
// object keys weakly, yet can also hold non-object keys, unlike the
// native `WeakMap`.
// If no makeData function is supplied, the looked-up data will be an empty,
// null-prototype Object.
var defaultMakeData = function () { return Object.create(null); };
// Useful for processing arguments objects as well as arrays.
var _a = Array.prototype, forEach = _a.forEach, slice = _a.slice;
var Trie = /** @class */ (function () {
    function Trie(weakness, makeData) {
        if (weakness === void 0) { weakness = true; }
        if (makeData === void 0) { makeData = defaultMakeData; }
        this.weakness = weakness;
        this.makeData = makeData;
    }
    Trie.prototype.lookup = function () {
        var array = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            array[_i] = arguments[_i];
        }
        return this.lookupArray(array);
    };
    Trie.prototype.lookupArray = function (array) {
        var node = this;
        forEach.call(array, function (key) { return node = node.getChildTrie(key); });
        return node.data || (node.data = this.makeData(slice.call(array)));
    };
    Trie.prototype.getChildTrie = function (key) {
        var map = this.weakness && isObjRef(key)
            ? this.weak || (this.weak = new WeakMap())
            : this.strong || (this.strong = new Map());
        var child = map.get(key);
        if (!child)
            map.set(key, child = new Trie(this.weakness, this.makeData));
        return child;
    };
    return Trie;
}());
function isObjRef(value) {
    switch (typeof value) {
        case "object":
            if (value === null)
                break;
        // Fall through to return true...
        case "function":
            return true;
    }
    return false;
}


//# sourceMappingURL=trie.esm.js.map


/***/ }),

/***/ "./node_modules/optimism/lib/bundle.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/optimism/lib/bundle.esm.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyTrie": function() { return /* reexport safe */ _wry_trie__WEBPACK_IMPORTED_MODULE_0__.Trie; },
/* harmony export */   "asyncFromGen": function() { return /* reexport safe */ _wry_context__WEBPACK_IMPORTED_MODULE_1__.asyncFromGen; },
/* harmony export */   "bindContext": function() { return /* reexport safe */ _wry_context__WEBPACK_IMPORTED_MODULE_1__.bind; },
/* harmony export */   "noContext": function() { return /* reexport safe */ _wry_context__WEBPACK_IMPORTED_MODULE_1__.noContext; },
/* harmony export */   "setTimeout": function() { return /* reexport safe */ _wry_context__WEBPACK_IMPORTED_MODULE_1__.setTimeout; },
/* harmony export */   "defaultMakeCacheKey": function() { return /* binding */ defaultMakeCacheKey; },
/* harmony export */   "dep": function() { return /* binding */ dep; },
/* harmony export */   "wrap": function() { return /* binding */ wrap; }
/* harmony export */ });
/* harmony import */ var _wry_trie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wry/trie */ "./node_modules/@wry/trie/lib/trie.esm.js");
/* harmony import */ var _wry_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/context */ "./node_modules/@wry/context/lib/context.esm.js");





function defaultDispose() { }
var Cache = /** @class */ (function () {
    function Cache(max, dispose) {
        if (max === void 0) { max = Infinity; }
        if (dispose === void 0) { dispose = defaultDispose; }
        this.max = max;
        this.dispose = dispose;
        this.map = new Map();
        this.newest = null;
        this.oldest = null;
    }
    Cache.prototype.has = function (key) {
        return this.map.has(key);
    };
    Cache.prototype.get = function (key) {
        var node = this.getNode(key);
        return node && node.value;
    };
    Cache.prototype.getNode = function (key) {
        var node = this.map.get(key);
        if (node && node !== this.newest) {
            var older = node.older, newer = node.newer;
            if (newer) {
                newer.older = older;
            }
            if (older) {
                older.newer = newer;
            }
            node.older = this.newest;
            node.older.newer = node;
            node.newer = null;
            this.newest = node;
            if (node === this.oldest) {
                this.oldest = newer;
            }
        }
        return node;
    };
    Cache.prototype.set = function (key, value) {
        var node = this.getNode(key);
        if (node) {
            return node.value = value;
        }
        node = {
            key: key,
            value: value,
            newer: null,
            older: this.newest
        };
        if (this.newest) {
            this.newest.newer = node;
        }
        this.newest = node;
        this.oldest = this.oldest || node;
        this.map.set(key, node);
        return node.value;
    };
    Cache.prototype.clean = function () {
        while (this.oldest && this.map.size > this.max) {
            this.delete(this.oldest.key);
        }
    };
    Cache.prototype.delete = function (key) {
        var node = this.map.get(key);
        if (node) {
            if (node === this.newest) {
                this.newest = node.older;
            }
            if (node === this.oldest) {
                this.oldest = node.newer;
            }
            if (node.newer) {
                node.newer.older = node.older;
            }
            if (node.older) {
                node.older.newer = node.newer;
            }
            this.map.delete(key);
            this.dispose(node.value, key);
            return true;
        }
        return false;
    };
    return Cache;
}());

var parentEntrySlot = new _wry_context__WEBPACK_IMPORTED_MODULE_1__.Slot();

var _a;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var 
// This Array.from polyfill is restricted to working with Set<any> for now,
// but we can improve the polyfill and add other input types, as needed. Note
// that this fallback implementation will only be used if the host environment
// does not support a native Array.from function. In most modern JS runtimes,
// the toArray function exported here will be === Array.from.
toArray = (_a = Array.from, _a === void 0 ? function (collection) {
    var array = [];
    collection.forEach(function (item) { return array.push(item); });
    return array;
} : _a);
function maybeUnsubscribe(entryOrDep) {
    var unsubscribe = entryOrDep.unsubscribe;
    if (typeof unsubscribe === "function") {
        entryOrDep.unsubscribe = void 0;
        unsubscribe();
    }
}

var emptySetPool = [];
var POOL_TARGET_SIZE = 100;
// Since this package might be used browsers, we should avoid using the
// Node built-in assert module.
function assert(condition, optionalMessage) {
    if (!condition) {
        throw new Error(optionalMessage || "assertion failure");
    }
}
function valueIs(a, b) {
    var len = a.length;
    return (
    // Unknown values are not equal to each other.
    len > 0 &&
        // Both values must be ordinary (or both exceptional) to be equal.
        len === b.length &&
        // The underlying value or exception must be the same.
        a[len - 1] === b[len - 1]);
}
function valueGet(value) {
    switch (value.length) {
        case 0: throw new Error("unknown value");
        case 1: return value[0];
        case 2: throw value[1];
    }
}
function valueCopy(value) {
    return value.slice(0);
}
var Entry = /** @class */ (function () {
    function Entry(fn) {
        this.fn = fn;
        this.parents = new Set();
        this.childValues = new Map();
        // When this Entry has children that are dirty, this property becomes
        // a Set containing other Entry objects, borrowed from emptySetPool.
        // When the set becomes empty, it gets recycled back to emptySetPool.
        this.dirtyChildren = null;
        this.dirty = true;
        this.recomputing = false;
        this.value = [];
        this.deps = null;
        ++Entry.count;
    }
    Entry.prototype.peek = function () {
        if (this.value.length === 1 && !mightBeDirty(this)) {
            rememberParent(this);
            return this.value[0];
        }
    };
    // This is the most important method of the Entry API, because it
    // determines whether the cached this.value can be returned immediately,
    // or must be recomputed. The overall performance of the caching system
    // depends on the truth of the following observations: (1) this.dirty is
    // usually false, (2) this.dirtyChildren is usually null/empty, and thus
    // (3) valueGet(this.value) is usually returned without recomputation.
    Entry.prototype.recompute = function (args) {
        assert(!this.recomputing, "already recomputing");
        rememberParent(this);
        return mightBeDirty(this)
            ? reallyRecompute(this, args)
            : valueGet(this.value);
    };
    Entry.prototype.setDirty = function () {
        if (this.dirty)
            return;
        this.dirty = true;
        this.value.length = 0;
        reportDirty(this);
        // We can go ahead and unsubscribe here, since any further dirty
        // notifications we receive will be redundant, and unsubscribing may
        // free up some resources, e.g. file watchers.
        maybeUnsubscribe(this);
    };
    Entry.prototype.dispose = function () {
        var _this = this;
        this.setDirty();
        // Sever any dependency relationships with our own children, so those
        // children don't retain this parent Entry in their child.parents sets,
        // thereby preventing it from being fully garbage collected.
        forgetChildren(this);
        // Because this entry has been kicked out of the cache (in index.js),
        // we've lost the ability to find out if/when this entry becomes dirty,
        // whether that happens through a subscription, because of a direct call
        // to entry.setDirty(), or because one of its children becomes dirty.
        // Because of this loss of future information, we have to assume the
        // worst (that this entry might have become dirty very soon), so we must
        // immediately mark this entry's parents as dirty. Normally we could
        // just call entry.setDirty() rather than calling parent.setDirty() for
        // each parent, but that would leave this entry in parent.childValues
        // and parent.dirtyChildren, which would prevent the child from being
        // truly forgotten.
        eachParent(this, function (parent, child) {
            parent.setDirty();
            forgetChild(parent, _this);
        });
    };
    Entry.prototype.forget = function () {
        // The code that creates Entry objects in index.ts will replace this method
        // with one that actually removes the Entry from the cache, which will also
        // trigger the entry.dispose method.
        this.dispose();
    };
    Entry.prototype.dependOn = function (dep) {
        dep.add(this);
        if (!this.deps) {
            this.deps = emptySetPool.pop() || new Set();
        }
        this.deps.add(dep);
    };
    Entry.prototype.forgetDeps = function () {
        var _this = this;
        if (this.deps) {
            toArray(this.deps).forEach(function (dep) { return dep.delete(_this); });
            this.deps.clear();
            emptySetPool.push(this.deps);
            this.deps = null;
        }
    };
    Entry.count = 0;
    return Entry;
}());
function rememberParent(child) {
    var parent = parentEntrySlot.getValue();
    if (parent) {
        child.parents.add(parent);
        if (!parent.childValues.has(child)) {
            parent.childValues.set(child, []);
        }
        if (mightBeDirty(child)) {
            reportDirtyChild(parent, child);
        }
        else {
            reportCleanChild(parent, child);
        }
        return parent;
    }
}
function reallyRecompute(entry, args) {
    forgetChildren(entry);
    // Set entry as the parent entry while calling recomputeNewValue(entry).
    parentEntrySlot.withValue(entry, recomputeNewValue, [entry, args]);
    if (maybeSubscribe(entry, args)) {
        // If we successfully recomputed entry.value and did not fail to
        // (re)subscribe, then this Entry is no longer explicitly dirty.
        setClean(entry);
    }
    return valueGet(entry.value);
}
function recomputeNewValue(entry, args) {
    entry.recomputing = true;
    // Set entry.value as unknown.
    entry.value.length = 0;
    try {
        // If entry.fn succeeds, entry.value will become a normal Value.
        entry.value[0] = entry.fn.apply(null, args);
    }
    catch (e) {
        // If entry.fn throws, entry.value will become exceptional.
        entry.value[1] = e;
    }
    // Either way, this line is always reached.
    entry.recomputing = false;
}
function mightBeDirty(entry) {
    return entry.dirty || !!(entry.dirtyChildren && entry.dirtyChildren.size);
}
function setClean(entry) {
    entry.dirty = false;
    if (mightBeDirty(entry)) {
        // This Entry may still have dirty children, in which case we can't
        // let our parents know we're clean just yet.
        return;
    }
    reportClean(entry);
}
function reportDirty(child) {
    eachParent(child, reportDirtyChild);
}
function reportClean(child) {
    eachParent(child, reportCleanChild);
}
function eachParent(child, callback) {
    var parentCount = child.parents.size;
    if (parentCount) {
        var parents = toArray(child.parents);
        for (var i = 0; i < parentCount; ++i) {
            callback(parents[i], child);
        }
    }
}
// Let a parent Entry know that one of its children may be dirty.
function reportDirtyChild(parent, child) {
    // Must have called rememberParent(child) before calling
    // reportDirtyChild(parent, child).
    assert(parent.childValues.has(child));
    assert(mightBeDirty(child));
    var parentWasClean = !mightBeDirty(parent);
    if (!parent.dirtyChildren) {
        parent.dirtyChildren = emptySetPool.pop() || new Set;
    }
    else if (parent.dirtyChildren.has(child)) {
        // If we already know this child is dirty, then we must have already
        // informed our own parents that we are dirty, so we can terminate
        // the recursion early.
        return;
    }
    parent.dirtyChildren.add(child);
    // If parent was clean before, it just became (possibly) dirty (according to
    // mightBeDirty), since we just added child to parent.dirtyChildren.
    if (parentWasClean) {
        reportDirty(parent);
    }
}
// Let a parent Entry know that one of its children is no longer dirty.
function reportCleanChild(parent, child) {
    // Must have called rememberChild(child) before calling
    // reportCleanChild(parent, child).
    assert(parent.childValues.has(child));
    assert(!mightBeDirty(child));
    var childValue = parent.childValues.get(child);
    if (childValue.length === 0) {
        parent.childValues.set(child, valueCopy(child.value));
    }
    else if (!valueIs(childValue, child.value)) {
        parent.setDirty();
    }
    removeDirtyChild(parent, child);
    if (mightBeDirty(parent)) {
        return;
    }
    reportClean(parent);
}
function removeDirtyChild(parent, child) {
    var dc = parent.dirtyChildren;
    if (dc) {
        dc.delete(child);
        if (dc.size === 0) {
            if (emptySetPool.length < POOL_TARGET_SIZE) {
                emptySetPool.push(dc);
            }
            parent.dirtyChildren = null;
        }
    }
}
// Removes all children from this entry and returns an array of the
// removed children.
function forgetChildren(parent) {
    if (parent.childValues.size > 0) {
        parent.childValues.forEach(function (_value, child) {
            forgetChild(parent, child);
        });
    }
    // Remove this parent Entry from any sets to which it was added by the
    // addToSet method.
    parent.forgetDeps();
    // After we forget all our children, this.dirtyChildren must be empty
    // and therefore must have been reset to null.
    assert(parent.dirtyChildren === null);
}
function forgetChild(parent, child) {
    child.parents.delete(parent);
    parent.childValues.delete(child);
    removeDirtyChild(parent, child);
}
function maybeSubscribe(entry, args) {
    if (typeof entry.subscribe === "function") {
        try {
            maybeUnsubscribe(entry); // Prevent double subscriptions.
            entry.unsubscribe = entry.subscribe.apply(null, args);
        }
        catch (e) {
            // If this Entry has a subscribe function and it threw an exception
            // (or an unsubscribe function it previously returned now throws),
            // return false to indicate that we were not able to subscribe (or
            // unsubscribe), and this Entry should remain dirty.
            entry.setDirty();
            return false;
        }
    }
    // Returning true indicates either that there was no entry.subscribe
    // function or that it succeeded.
    return true;
}

var EntryMethods = {
    setDirty: true,
    dispose: true,
    forget: true,
};
function dep(options) {
    var depsByKey = new Map();
    var subscribe = options && options.subscribe;
    function depend(key) {
        var parent = parentEntrySlot.getValue();
        if (parent) {
            var dep_1 = depsByKey.get(key);
            if (!dep_1) {
                depsByKey.set(key, dep_1 = new Set);
            }
            parent.dependOn(dep_1);
            if (typeof subscribe === "function") {
                maybeUnsubscribe(dep_1);
                dep_1.unsubscribe = subscribe(key);
            }
        }
    }
    depend.dirty = function dirty(key, entryMethodName) {
        var dep = depsByKey.get(key);
        if (dep) {
            var m_1 = (entryMethodName &&
                hasOwnProperty.call(EntryMethods, entryMethodName)) ? entryMethodName : "setDirty";
            // We have to use toArray(dep).forEach instead of dep.forEach, because
            // modifying a Set while iterating over it can cause elements in the Set
            // to be removed from the Set before they've been iterated over.
            toArray(dep).forEach(function (entry) { return entry[m_1](); });
            depsByKey.delete(key);
            maybeUnsubscribe(dep);
        }
    };
    return depend;
}

function makeDefaultMakeCacheKeyFunction() {
    var keyTrie = new _wry_trie__WEBPACK_IMPORTED_MODULE_0__.Trie(typeof WeakMap === "function");
    return function () {
        return keyTrie.lookupArray(arguments);
    };
}
// The defaultMakeCacheKey function is remarkably powerful, because it gives
// a unique object for any shallow-identical list of arguments. If you need
// to implement a custom makeCacheKey function, you may find it helpful to
// delegate the final work to defaultMakeCacheKey, which is why we export it
// here. However, you may want to avoid defaultMakeCacheKey if your runtime
// does not support WeakMap, or you have the ability to return a string key.
// In those cases, just write your own custom makeCacheKey functions.
var defaultMakeCacheKey = makeDefaultMakeCacheKeyFunction();
var caches = new Set();
function wrap(originalFunction, options) {
    if (options === void 0) { options = Object.create(null); }
    var cache = new Cache(options.max || Math.pow(2, 16), function (entry) { return entry.dispose(); });
    var keyArgs = options.keyArgs;
    var makeCacheKey = options.makeCacheKey ||
        makeDefaultMakeCacheKeyFunction();
    var optimistic = function () {
        var key = makeCacheKey.apply(null, keyArgs ? keyArgs.apply(null, arguments) : arguments);
        if (key === void 0) {
            return originalFunction.apply(null, arguments);
        }
        var entry = cache.get(key);
        if (!entry) {
            cache.set(key, entry = new Entry(originalFunction));
            entry.subscribe = options.subscribe;
            // Give the Entry the ability to trigger cache.delete(key), even though
            // the Entry itself does not know about key or cache.
            entry.forget = function () { return cache.delete(key); };
        }
        var value = entry.recompute(Array.prototype.slice.call(arguments));
        // Move this entry to the front of the least-recently used queue,
        // since we just finished computing its value.
        cache.set(key, entry);
        caches.add(cache);
        // Clean up any excess entries in the cache, but only if there is no
        // active parent entry, meaning we're not in the middle of a larger
        // computation that might be flummoxed by the cleaning.
        if (!parentEntrySlot.hasValue()) {
            caches.forEach(function (cache) { return cache.clean(); });
            caches.clear();
        }
        return value;
    };
    Object.defineProperty(optimistic, "size", {
        get: function () {
            return cache["map"].size;
        },
        configurable: false,
        enumerable: false,
    });
    function dirtyKey(key) {
        var entry = cache.get(key);
        if (entry) {
            entry.setDirty();
        }
    }
    optimistic.dirtyKey = dirtyKey;
    optimistic.dirty = function dirty() {
        dirtyKey(makeCacheKey.apply(null, arguments));
    };
    function peekKey(key) {
        var entry = cache.get(key);
        if (entry) {
            return entry.peek();
        }
    }
    optimistic.peekKey = peekKey;
    optimistic.peek = function peek() {
        return peekKey(makeCacheKey.apply(null, arguments));
    };
    function forgetKey(key) {
        return cache.delete(key);
    }
    optimistic.forgetKey = forgetKey;
    optimistic.forget = function forget() {
        return forgetKey(makeCacheKey.apply(null, arguments));
    };
    optimistic.makeCacheKey = makeCacheKey;
    optimistic.getKey = keyArgs ? function getKey() {
        return makeCacheKey.apply(null, keyArgs.apply(null, arguments));
    } : makeCacheKey;
    return Object.freeze(optimistic);
}


//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof __webpack_require__.g !== 'undefined') {
  root = __webpack_require__.g;
} else if (true) {
  root = module;
} else {}

var result = (0,_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__.default)(root);
/* harmony default export */ __webpack_exports__["default"] = (result);


/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ symbolObservablePonyfill; }
/* harmony export */ });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {

			if (typeof Symbol.for === 'function') {
				// This just needs to be something that won't trample other user's Symbol.for use
				// It also will guide people to the source of their issues, if this is problematic.
				// META: It's a resource locator!
				result = Symbol.for('https://github.com/benlesh/symbol-observable');
			} else {
				// Symbol.for didn't exist! The best we can do at this point is a totally 
				// unique symbol. Note that the string argument here is a descriptor, not
				// an identifier. This symbol is unique.
				result = Symbol('https://github.com/benlesh/symbol-observable');
			}
			try {
				Symbol.observable = result;
			} catch (err) {
				// Do nothing. In some environments, users have frozen `Symbol` for security reasons,
				// if it is frozen assigning to it will throw. In this case, we don't care, because
				// they will need to use the returned value from the ponyfill.
			}
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/ts-invariant/lib/invariant.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/ts-invariant/lib/invariant.esm.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvariantError": function() { return /* binding */ InvariantError; },
/* harmony export */   "default": function() { return /* binding */ invariant$1; },
/* harmony export */   "invariant": function() { return /* binding */ invariant; },
/* harmony export */   "setVerbosity": function() { return /* binding */ setVerbosity; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a;
var InvariantError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(InvariantError, _super);
    function InvariantError(message) {
        if (message === void 0) { message = genericMessage; }
        var _this = _super.call(this, typeof message === "number"
            ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)"
            : message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage;
        setPrototypeOf(_this, InvariantError.prototype);
        return _this;
    }
    return InvariantError;
}(Error));
function invariant(condition, message) {
    if (!condition) {
        throw new InvariantError(message);
    }
}
var verbosityLevels = ["debug", "log", "warn", "error", "silent"];
var verbosityLevel = verbosityLevels.indexOf("log");
function wrapConsoleMethod(name) {
    return function () {
        if (verbosityLevels.indexOf(name) >= verbosityLevel) {
            // Default to console.log if this host environment happens not to provide
            // all the console.* methods we need.
            var method = console[name] || console.log;
            return method.apply(console, arguments);
        }
    };
}
(function (invariant) {
    invariant.debug = wrapConsoleMethod("debug");
    invariant.log = wrapConsoleMethod("log");
    invariant.warn = wrapConsoleMethod("warn");
    invariant.error = wrapConsoleMethod("error");
})(invariant || (invariant = {}));
function setVerbosity(level) {
    var old = verbosityLevels[verbosityLevel];
    verbosityLevel = Math.max(0, verbosityLevels.indexOf(level));
    return old;
}
var invariant$1 = invariant;


//# sourceMappingURL=invariant.esm.js.map


/***/ }),

/***/ "./node_modules/ts-invariant/process/index.js":
/*!****************************************************!*\
  !*** ./node_modules/ts-invariant/process/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "install": function() { return /* binding */ install; },
/* harmony export */   "remove": function() { return /* binding */ remove; }
/* harmony export */ });
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
function maybe(thunk) {
  try { return thunk() } catch (_) {}
}

var safeGlobal = (
  maybe(function() { return globalThis }) ||
  maybe(function() { return window }) ||
  maybe(function() { return self }) ||
  maybe(function() { return __webpack_require__.g }) ||
  maybe(function() { return Function("return this")() })
);

var needToRemove = false;

function install() {
  if (safeGlobal &&
      !maybe(function() { return "development" }) &&
      !maybe(function() { return process })) {
    Object.defineProperty(safeGlobal, "process", {
      value: {
        env: {
          // This default needs to be "production" instead of "development", to
          // avoid the problem https://github.com/graphql/graphql-js/pull/2894
          // will eventually solve, once merged and released.
          NODE_ENV: "production",
        },
      },
      // Let anyone else change global.process as they see fit, but hide it from
      // Object.keys(global) enumeration.
      configurable: true,
      enumerable: false,
      writable: true,
    });
    needToRemove = true;
  }
}

// Call install() at least once, when this module is imported.
install();

function remove() {
  if (needToRemove) {
    delete safeGlobal.process;
    needToRemove = false;
  }
}


/***/ }),

/***/ "./node_modules/zen-observable-ts/module.js":
/*!**************************************************!*\
  !*** ./node_modules/zen-observable-ts/module.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observable": function() { return /* binding */ Observable; }
/* harmony export */ });
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// === Symbol Support ===
var hasSymbols = function () {
  return typeof Symbol === 'function';
};

var hasSymbol = function (name) {
  return hasSymbols() && Boolean(Symbol[name]);
};

var getSymbol = function (name) {
  return hasSymbol(name) ? Symbol[name] : '@@' + name;
};

if (hasSymbols() && !hasSymbol('observable')) {
  Symbol.observable = Symbol('observable');
}

var SymbolIterator = getSymbol('iterator');
var SymbolObservable = getSymbol('observable');
var SymbolSpecies = getSymbol('species'); // === Abstract Operations ===

function getMethod(obj, key) {
  var value = obj[key];
  if (value == null) return undefined;
  if (typeof value !== 'function') throw new TypeError(value + ' is not a function');
  return value;
}

function getSpecies(obj) {
  var ctor = obj.constructor;

  if (ctor !== undefined) {
    ctor = ctor[SymbolSpecies];

    if (ctor === null) {
      ctor = undefined;
    }
  }

  return ctor !== undefined ? ctor : Observable;
}

function isObservable(x) {
  return x instanceof Observable; // SPEC: Brand check
}

function hostReportError(e) {
  if (hostReportError.log) {
    hostReportError.log(e);
  } else {
    setTimeout(function () {
      throw e;
    });
  }
}

function enqueue(fn) {
  Promise.resolve().then(function () {
    try {
      fn();
    } catch (e) {
      hostReportError(e);
    }
  });
}

function cleanupSubscription(subscription) {
  var cleanup = subscription._cleanup;
  if (cleanup === undefined) return;
  subscription._cleanup = undefined;

  if (!cleanup) {
    return;
  }

  try {
    if (typeof cleanup === 'function') {
      cleanup();
    } else {
      var unsubscribe = getMethod(cleanup, 'unsubscribe');

      if (unsubscribe) {
        unsubscribe.call(cleanup);
      }
    }
  } catch (e) {
    hostReportError(e);
  }
}

function closeSubscription(subscription) {
  subscription._observer = undefined;
  subscription._queue = undefined;
  subscription._state = 'closed';
}

function flushSubscription(subscription) {
  var queue = subscription._queue;

  if (!queue) {
    return;
  }

  subscription._queue = undefined;
  subscription._state = 'ready';

  for (var i = 0; i < queue.length; ++i) {
    notifySubscription(subscription, queue[i].type, queue[i].value);
    if (subscription._state === 'closed') break;
  }
}

function notifySubscription(subscription, type, value) {
  subscription._state = 'running';
  var observer = subscription._observer;

  try {
    var m = getMethod(observer, type);

    switch (type) {
      case 'next':
        if (m) m.call(observer, value);
        break;

      case 'error':
        closeSubscription(subscription);
        if (m) m.call(observer, value);else throw value;
        break;

      case 'complete':
        closeSubscription(subscription);
        if (m) m.call(observer);
        break;
    }
  } catch (e) {
    hostReportError(e);
  }

  if (subscription._state === 'closed') cleanupSubscription(subscription);else if (subscription._state === 'running') subscription._state = 'ready';
}

function onNotify(subscription, type, value) {
  if (subscription._state === 'closed') return;

  if (subscription._state === 'buffering') {
    subscription._queue.push({
      type: type,
      value: value
    });

    return;
  }

  if (subscription._state !== 'ready') {
    subscription._state = 'buffering';
    subscription._queue = [{
      type: type,
      value: value
    }];
    enqueue(function () {
      return flushSubscription(subscription);
    });
    return;
  }

  notifySubscription(subscription, type, value);
}

var Subscription = /*#__PURE__*/function () {
  function Subscription(observer, subscriber) {
    // ASSERT: observer is an object
    // ASSERT: subscriber is callable
    this._cleanup = undefined;
    this._observer = observer;
    this._queue = undefined;
    this._state = 'initializing';
    var subscriptionObserver = new SubscriptionObserver(this);

    try {
      this._cleanup = subscriber.call(undefined, subscriptionObserver);
    } catch (e) {
      subscriptionObserver.error(e);
    }

    if (this._state === 'initializing') this._state = 'ready';
  }

  var _proto = Subscription.prototype;

  _proto.unsubscribe = function unsubscribe() {
    if (this._state !== 'closed') {
      closeSubscription(this);
      cleanupSubscription(this);
    }
  };

  _createClass(Subscription, [{
    key: "closed",
    get: function () {
      return this._state === 'closed';
    }
  }]);

  return Subscription;
}();

var SubscriptionObserver = /*#__PURE__*/function () {
  function SubscriptionObserver(subscription) {
    this._subscription = subscription;
  }

  var _proto2 = SubscriptionObserver.prototype;

  _proto2.next = function next(value) {
    onNotify(this._subscription, 'next', value);
  };

  _proto2.error = function error(value) {
    onNotify(this._subscription, 'error', value);
  };

  _proto2.complete = function complete() {
    onNotify(this._subscription, 'complete');
  };

  _createClass(SubscriptionObserver, [{
    key: "closed",
    get: function () {
      return this._subscription._state === 'closed';
    }
  }]);

  return SubscriptionObserver;
}();

var Observable = /*#__PURE__*/function () {
  function Observable(subscriber) {
    if (!(this instanceof Observable)) throw new TypeError('Observable cannot be called as a function');
    if (typeof subscriber !== 'function') throw new TypeError('Observable initializer must be a function');
    this._subscriber = subscriber;
  }

  var _proto3 = Observable.prototype;

  _proto3.subscribe = function subscribe(observer) {
    if (typeof observer !== 'object' || observer === null) {
      observer = {
        next: observer,
        error: arguments[1],
        complete: arguments[2]
      };
    }

    return new Subscription(observer, this._subscriber);
  };

  _proto3.forEach = function forEach(fn) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      if (typeof fn !== 'function') {
        reject(new TypeError(fn + ' is not a function'));
        return;
      }

      function done() {
        subscription.unsubscribe();
        resolve();
      }

      var subscription = _this.subscribe({
        next: function (value) {
          try {
            fn(value, done);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  };

  _proto3.map = function map(fn) {
    var _this2 = this;

    if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
    var C = getSpecies(this);
    return new C(function (observer) {
      return _this2.subscribe({
        next: function (value) {
          try {
            value = fn(value);
          } catch (e) {
            return observer.error(e);
          }

          observer.next(value);
        },
        error: function (e) {
          observer.error(e);
        },
        complete: function () {
          observer.complete();
        }
      });
    });
  };

  _proto3.filter = function filter(fn) {
    var _this3 = this;

    if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
    var C = getSpecies(this);
    return new C(function (observer) {
      return _this3.subscribe({
        next: function (value) {
          try {
            if (!fn(value)) return;
          } catch (e) {
            return observer.error(e);
          }

          observer.next(value);
        },
        error: function (e) {
          observer.error(e);
        },
        complete: function () {
          observer.complete();
        }
      });
    });
  };

  _proto3.reduce = function reduce(fn) {
    var _this4 = this;

    if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
    var C = getSpecies(this);
    var hasSeed = arguments.length > 1;
    var hasValue = false;
    var seed = arguments[1];
    var acc = seed;
    return new C(function (observer) {
      return _this4.subscribe({
        next: function (value) {
          var first = !hasValue;
          hasValue = true;

          if (!first || hasSeed) {
            try {
              acc = fn(acc, value);
            } catch (e) {
              return observer.error(e);
            }
          } else {
            acc = value;
          }
        },
        error: function (e) {
          observer.error(e);
        },
        complete: function () {
          if (!hasValue && !hasSeed) return observer.error(new TypeError('Cannot reduce an empty sequence'));
          observer.next(acc);
          observer.complete();
        }
      });
    });
  };

  _proto3.concat = function concat() {
    var _this5 = this;

    for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
      sources[_key] = arguments[_key];
    }

    var C = getSpecies(this);
    return new C(function (observer) {
      var subscription;
      var index = 0;

      function startNext(next) {
        subscription = next.subscribe({
          next: function (v) {
            observer.next(v);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            if (index === sources.length) {
              subscription = undefined;
              observer.complete();
            } else {
              startNext(C.from(sources[index++]));
            }
          }
        });
      }

      startNext(_this5);
      return function () {
        if (subscription) {
          subscription.unsubscribe();
          subscription = undefined;
        }
      };
    });
  };

  _proto3.flatMap = function flatMap(fn) {
    var _this6 = this;

    if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
    var C = getSpecies(this);
    return new C(function (observer) {
      var subscriptions = [];

      var outer = _this6.subscribe({
        next: function (value) {
          if (fn) {
            try {
              value = fn(value);
            } catch (e) {
              return observer.error(e);
            }
          }

          var inner = C.from(value).subscribe({
            next: function (value) {
              observer.next(value);
            },
            error: function (e) {
              observer.error(e);
            },
            complete: function () {
              var i = subscriptions.indexOf(inner);
              if (i >= 0) subscriptions.splice(i, 1);
              completeIfDone();
            }
          });
          subscriptions.push(inner);
        },
        error: function (e) {
          observer.error(e);
        },
        complete: function () {
          completeIfDone();
        }
      });

      function completeIfDone() {
        if (outer.closed && subscriptions.length === 0) observer.complete();
      }

      return function () {
        subscriptions.forEach(function (s) {
          return s.unsubscribe();
        });
        outer.unsubscribe();
      };
    });
  };

  _proto3[SymbolObservable] = function () {
    return this;
  };

  Observable.from = function from(x) {
    var C = typeof this === 'function' ? this : Observable;
    if (x == null) throw new TypeError(x + ' is not an object');
    var method = getMethod(x, SymbolObservable);

    if (method) {
      var observable = method.call(x);
      if (Object(observable) !== observable) throw new TypeError(observable + ' is not an object');
      if (isObservable(observable) && observable.constructor === C) return observable;
      return new C(function (observer) {
        return observable.subscribe(observer);
      });
    }

    if (hasSymbol('iterator')) {
      method = getMethod(x, SymbolIterator);

      if (method) {
        return new C(function (observer) {
          enqueue(function () {
            if (observer.closed) return;

            for (var _iterator = _createForOfIteratorHelperLoose(method.call(x)), _step; !(_step = _iterator()).done;) {
              var item = _step.value;
              observer.next(item);
              if (observer.closed) return;
            }

            observer.complete();
          });
        });
      }
    }

    if (Array.isArray(x)) {
      return new C(function (observer) {
        enqueue(function () {
          if (observer.closed) return;

          for (var i = 0; i < x.length; ++i) {
            observer.next(x[i]);
            if (observer.closed) return;
          }

          observer.complete();
        });
      });
    }

    throw new TypeError(x + ' is not observable');
  };

  Observable.of = function of() {
    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }

    var C = typeof this === 'function' ? this : Observable;
    return new C(function (observer) {
      enqueue(function () {
        if (observer.closed) return;

        for (var i = 0; i < items.length; ++i) {
          observer.next(items[i]);
          if (observer.closed) return;
        }

        observer.complete();
      });
    });
  };

  _createClass(Observable, null, [{
    key: SymbolSpecies,
    get: function () {
      return this;
    }
  }]);

  return Observable;
}();

if (hasSymbols()) {
  Object.defineProperty(Observable, Symbol('extensions'), {
    value: {
      symbol: SymbolObservable,
      hostReportError: hostReportError
    },
    configurable: true
  });
}




/***/ })

});