/**
 *  @module stringularity-type-utils
 */
var strings = require('../common/strings'),
    numbers = require('../common/numbers'),
    bools = require('../common/bools'),
    dontEnumBugObject = {toString: null},
    hasDontEnumBug = !dontEnumBugObject.propertyIsEnumerable('toString'),
    dontEnums = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
    ],
    dontEnumsLength = dontEnums.length,
    stu = {
        hasOwnProperty: Object.prototype.hasOwnProperty,
        definedExclusionsObject: {
            baseDefined: [
                undefined
            ],
            looselyDefined: [
                undefined,
                null
            ],
            strictlyDefined: [
                undefined,
                null,
                bools.FALSE
            ],
            truthyDefined: [
                undefined,
                null,
                bools.FALSE,
                numbers.ZERO,
                numbers.NAN,
                ''
            ]
        }
    };

/**
 *  Javascript typeof returns strings, thus, is a stringularity,
 *  Everything boils down to a string.
 *
 *  @function
 *  @name isString
 *  @param {Object} object - to be of type string.
 *  @return {Boolean} returnCondition
 */
stu.isString = function isStringFunction(object) {
    'use strict';
    return typeof object === 'string';
};

/**
 *  @function
 *  @name isType
 *  @param {Object} object
 *  @param {String} type
 *  @return {Boolean} returnCondition
 */
stu.isType = function isTypeFunction(object, type) {
    'use strict';
    return stu.isString(type) ? typeof object === type : bools.FALSE;
};

/**
 *  Basic - constructed values are objects.
 *  @function
 *  @name isBasicObject
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isBasicObject = function isBasicObjectFunction(object) {
    'use strict';
    return stu.isType(object, 'object');
};

/**
 *  Primitive - classic boolean type.
 *  @function
 *  @name isPrimitiveBoolean
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isPrimitiveBoolean = function isPrimitiveBooleanFunction(object) {
    'use strict';
    return stu.isType(object, 'boolean');
};

/**
 *  @function
 *  @name isFunction
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isFunction = function isFunctionFunction(object) {
    'use strict';
    return stu.isType(object, 'function');
};

/**
 *  @function
 *  @name isNumber
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isNumber = function isNumberFunction(object) {
    'use strict';
    return stu.isType(object, 'number');
};

/**
 *  @function
 *  @name isRounded
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isRounded = function isRoundedFunction(object) {
    'use strict';
    return isFinite(object) && (Math.floor(object) === object);
};

/**
 *  @function
 *  @name isInteger
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isInteger = function isIntegerFunction(object) {
    'use strict';
    return stu.isNumber(object) && stu.isRounded(object);
};

/**
 *  @function
 *  @name isNotRounded
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isNotRounded = function isNotRoundedFunction(object) {
    'use strict';
    return !stu.isRounded(object);
};

/**
 *  @function
 *  @name isFloat
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isFloat = function isFloatFunction(object) {
    'use strict';
    return stu.isNumber(object) && isFinite(object) && (Math.floor(object) !== object);
};

/**
 *  @function
 *  @name isArray
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isArray = function isArrayFunction(object) {
    'use strict';
    var isArray = Array.isArray;

    return isArray && isArray(object) ? bools.TRUE : object instanceof Array;
};

/**
 *  @function
 *  @name isNotArray
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isNotArray = function isNotArrayFunction(object) {
    'use strict';
    return !stu.isArray(object);
};

/**
 *  @function
 *  @name isBasicNonArrayObject
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isBasicNonArrayObject = function isBasicNonArrayObjectFunction(object) {
    'use strict';
    return stu.isNotArray(object) && stu.isBasicObject(object);
};

/**
 *  Primitive - classic boolean type.
 *  @function
 *  @name isNotPrimitiveBoolean
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isNotPrimitiveBoolean = function isNotPrimitiveBooleanFunction(object) {
    'use strict';
    return !stu.isPrimitiveBoolean(object);
};

/**
 *  @function
 *  @name isNotFunction
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isNotFunction = function isNotFunctionFunction(object) {
    'use strict';
    return !stu.isFunction(object);
};

/**
 *  @function
 *  @name isNotNumber
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isNotNumber = function isNotNumberFunction(object) {
    'use strict';
    return !stu.isNumber(object);
};

/**
 *  @function
 *  @name isNotInteger
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isNotInteger = function isNotIntegerFunction(object) {
    'use strict';
    return !stu.isInteger(object);
};

/**
 *  @function
 *  @name isNotFloat
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isNotFloat = function isNotFloatFunction(object) {
    'use strict';
    return !stu.isFloat(object);
};

/**
 *  @function
 *  @name isNotString
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isNotString = function isNotStringFunction(object) {
    'use strict';
    return !stu.isString(object);
};

/**
 *  @function
 *  @name isEmptyString
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isEmptyString = function isEmptyStringFunction(object) {
    'use strict';
    return stu.isString(object) && (object.length === numbers.ZERO);
};

/**
 *  @function
 *  @name isNonEmptyString
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isNonEmptyString = function isNonEmptyStringFunction(object) {
    'use strict';
    return stu.isString(object) && (object.length > numbers.ZERO);
};

/**
 *  Returns whether object is defined:
 *
 *  Javascript has truthy and falsy values. The latter is several
 *  concepts of the lack of definedness.
 *
 *  By default, not defined values are:
 *  - undefined (and void 0),
 *  - null
 *
 *  Falsy values:
 *  - false,
 *  - 0 (zero),
 *  - ''/"" (empty string),
 *  - NaN,
 *  - null,
 *  - undefined.
 *
 *  Truthy values:
 *  - Effectively everything else.
 *  
 *  Falsy values are, in essence, the levels of undefinedness.
 *  This function uses an exclusion "map" of several exclusion arrays:
 *  - baseDefined: [
 *    undefined
 *  ],
 *  - looselyDefined: [
 *    undefined,
 *    null
 *  ],
 *  - strictlyDefined: [
 *    undefined,
 *    null,
 *    false
 *  ],
 *  - truthyDefined: [
 *    undefined,
 *    null,
 *    false,
 *    0,
 *    '',
 *    NaN   
 *  ].
 *
 *  Default is looselyDefined.
 *
 *  @function
 *  @name isDefinedCore
 *  @param {Object} object
 *  @param {String} defineType
 *  @param {Object} [defineExclusionsObject = stu.definedExclusionsObject]
 *  @return {Boolean} [returnValue = false]
 */
stu.isDefinedCore = function isDefinedCoreFunction(object, defineType, defineExclusionsObject) {
    'use strict';
    var localDefineExclusionsObject = stu.isBasicNonArrayObject(defineExclusionsObject) ? defineExclusionsObject : stu.definedExclusionsObject,
        localDefineType = stu.isNonEmptyString(defineType) ? defineType : 'looselyDefined';

    if (!stu.hasOwnProperty.call(localDefineExclusionsObject, localDefineType)) {
        return bools.FALSE;
    }

    return localDefineExclusionsObject[localDefineType].indexOf(object) === numbers.MINUSONE;
};

/**
 *  @function
 *  @name isBaseDefined
 *  @param {Object} object
 *  @return {Boolean} returnValue
 */
stu.isBaseDefined = function isBaseDefinedFunction(object) {
    'use strict';
    return stu.isDefinedCore(object, 'baseDefined');   
};

/**
 *  @function
 *  @name isLooselyDefined
 *  @param {Object} object
 *  @return {Boolean} returnValue
 */
stu.isLooselyDefined = function isLooselyDefinedFunction(object) {
    'use strict';
    return stu.isDefinedCore(object, 'looselyDefined');
};

/**
 *  @function
 *  @name isStrictlyDefined
 *  @param {Object} object
 *  @return {Boolean} returnValue
 */
stu.isStrictlyDefined = function isStrictlyDefinedFunction(object) {
    'use strict';
    return stu.isDefinedCore(object, 'strictlyDefined');
};

/**
 *  @function
 *  @name isTruthyDefined
 *  @param {Object} object
 *  @return {Boolean} returnValue
 */
stu.isTruthyDefined = function isTruthyDefinedFunction(object) {
    'use strict';
    return stu.isDefinedCore(object, 'truthyDefined');
};

/**
 *  @function
 *  @name isNotNonEmptyString
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isNotNonEmptyString = function isNotNonEmptyStringFunction(object) {
    'use strict';
    return !stu.isNonEmptyString(object);
};

/**
 *  @function
 *  @name isNonEmptyArray
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isNonEmptyArray = function isNonEmptyArrayFunction(object) {
    'use strict';
    return stu.isArray(object) && (object.length > numbers.ZERO);
};

/**
 *  @function
 *  @name isNotNonEmptyArray
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isNotNonEmptyArray = function isNotNonEmptyArrayFunction(object) {
    'use strict';
    return !stu.isNonEmptyArray(object);
};

/**
 *  @function
 *  @name isEmptyArray
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isEmptyArray = function isEmptyArrayFunction(object) {
    'use strict';
    return stu.isArray(object) && (object.length === numbers.ZERO);
};

/**
 *  @function
 *  @name isSingleElementArray
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isSingleElementArray = function isSingleElementArrayFunction(object) {
    'use strict';
    return stu.isNonEmptyArray(object) && (object.length === numbers.ONE);
};

/**
 *  @function
 *  @name isSingleNonEmptyStringArray
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isSingleNonEmptyStringArray = function isSingleNonEmptyStringArrayFunction(object) {
    'use strict';
    return stu.isSingleElementArray(object) && stu.isNonEmptyString(object[numbers.ZERO]);
};

/**
 *  Returns the non-empty string element from - single element array - object, or an empty string.
 *  @function
 *  @name getSingleNonEmptyStringFromArray
 *  @param {Object} object
 *  @return {String} [returnCondition='']
 */
stu.getSingleNonEmptyStringFromArray = function getSingleNonEmptyStringFromArrayFunction(object) {
    'use strict';
    return stu.isSingleNonEmptyStringArray(object) ? object[numbers.ZERO] : '';
};

/**
 *  Lazy Boolean inverter function, mainly for functional magic.
 *  https://en.wikipedia.org/wiki/Lazy_evaluation
 *  Returns a function that when executed, would invert the value passed.
 *  Otherwise returns false if the passed object wasn't a boolean value or returning function.
 *
 *  The function is used in abstract cardinality functions.
 *  @function
 *  @name invertBoolean
 *  @param {Object} object
 *  @return {Function} returnFunction
 */
stu.invertBoolean = function invertBooleanFunction(object) {
    'use strict';
    var returnFunction;

    if (stu.isFunction(object)) {
        returnFunction = function partialInvertBoolFunction(_object) {
            'use strict';
            var localExpression = object(_object);

            return stu.isPrimitiveBoolean(localExpression) ? !localExpression : bools.FALSE;
        };
    } else {
        returnFunction = function partialTotalInvertBoolFunction() {
            'use strict';
            return stu.isPrimitiveBoolean(object) ? !object : bools.FALSE;
        };
    }

    return returnFunction;
};

stu.cardinalityObject = {
    any: {
        guardValue: bools.TRUE,
        finalValue: bools.FALSE
    },
    all: {
        conditionModifier: stu.invertBoolean,
        guardValue: bools.FALSE,
        finalValue: bools.TRUE
    },
    none: {
        guardValue: bools.FALSE,
        finalValue: bools.TRUE
    }
};

/**
 *  @function
 *  @name isUndefinedCore
 *  @param {Object} object
 *  @return {Boolean} returnValue
 */
stu.isUndefinedCore = function isUndefinedCoreFunction(object, defineType, defineExclusionsObject) {
    'use strict';
    return !stu.isDefinedCore(object, defineType, defineExclusionsObject);
};

/**
 *  @function
 *  @name isUndefined
 *  @param {Object} object
 *  @return {Boolean} returnValue
 */
stu.isUndefined = function isUndefinedFunction(object) {
    'use strict';
    return stu.isUndefinedCore(object, 'looselyDefined');
};

/**
 *  @function
 *  @name isObject
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isObject = function isObjectFunction(object) {
    'use strict';
    return stu.isBasicNonArrayObject(object) && stu.isStrictlyDefined(object);
};

/**
 *  @function
 *  @name isArgumentsObject
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isArgumentsObject = function isArgumentsObjectFunction(object) {
    'use strict';
    return (
        stu.isBasicNonArrayObject(object) &&
        stu.isStrictlyDefined(object) &&
        (object.toString().indexOf('Arguments') > numbers.MINUSONE)
    );
};

/**
 *  @function
 *  @name isSingleElementObjectArray
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isSingleElementObjectArray = function isSingleElementObjectArrayFunction(object) {
    'use strict';
    return stu.isSingleElementArray(object) && stu.isObject(object[numbers.ZERO]);
};

/* eslint-disable max-statements */
/* TODO: Increase coverage for objectKeys polyfill. */
stu.objectKeys = /* istanbul ignore next */ Object.keys || function objectKeysFunction(object) {
    var hasOwnProperty = stu.hasOwnProperty,
        currentDontEnum,
        property,
        array,
        index;

    if (!(
        stu.isStrictlyDefined(object) &&
        (
            stu.isObject(object) ||
            stu.isFunction(object)
        )
    )) {
        throw new TypeError('Object.keys called on non-object');
    }

    array = [];

    for (property in object) {
        if (hasOwnProperty.call(object, property)) {
            array.push(property);
        }
    }

    if (!hasDontEnumBug) {
        return array;
    }

    for (index = 0; index < dontEnumsLength; ++index) {
        currentDontEnum = dontEnums[index];
        if (hasOwnProperty.call(object, currentDontEnum)) {
            array.push(currentDontEnum);
        }
    }

    return array;
};
/* eslint-enable max-statements */

/**
 *  @function
 *  @name isEmptyObject
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isEmptyObject = function isEmptyObjectFunction(object) {
    'use strict';
    return stu.isObject(object) && (stu.objectKeys(object).length === numbers.ZERO);
};

/**
 *  @function
 *  @name isNonEmptyObject
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isNonEmptyObject = function isNonEmptyObjectFunction(object) {
    'use strict';
    return stu.isObject(object) && (stu.objectKeys(object).length > numbers.ZERO);
};

/**
 *  @function
 *  @name isNotNonEmptyObject
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isNotNonEmptyObject = function isNotNonEmptyObjectFunction(object) {
    'use strict';
    return !stu.isNonEmptyObject(object);
};

/**
 *  @function
 *  @name isNotObject
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isNotObject = function isNotObjectFunction(object) {
    'use strict';
    return !stu.isObject(object);
};

/**
 *  @function
 *  @name isObjectKey
 *  @param {Object} object
 *  @param {String} key
 *  @return {Boolean} returnCondition
 */
stu.isObjectKey = function isObjectKeyFunction(object, key) {
    'use strict';
    return (
        stu.isNonEmptyString(key) &&
        stu.isObject(object) &&
        stu.hasOwnProperty.call(object, key)
    );
};

/**
 *  @function
 *  @name isDefinedObjectKey
 *  @param {Object} object
 *  @param {String} key
 *  @return {Boolean} returnCondition
 */
stu.isDefinedObjectKey = function isDefinedObjectKeyFunction(object, key) {
    'use strict';
    return stu.isObjectKey(object, key) && stu.isLooselyDefined(object[key]);
};

/**
 *  @function
 *  @name isNotDefinedObjectKey
 *  @param {Object} object
 *  @param {String} key
 *  @return {Boolean} returnCondition
 */
stu.isNotDefinedObjectKey = function isNotDefinedObjectKeyFunction(object, key) {
    'use strict';
    return !stu.isDefinedObjectKey(object, key);
};

/**
 *  Returns true if:
 *  - parameter args is array(-like),
 *  - conditionFunction is a function,
 *  - cardinality exists in the cardinality object.
 *  Otherwise returns false.
 *  @function
 *  @name areConditionGuard
 *  @param {Object} object
 *  @param {Function} conditionFunction
 *  @param {String} cardinality
 *  @return {Function} returnFunction
 */
stu.areConditionGuard = function areConditionGuardFunction(args, conditionFunction, cardinality) {
    'use strict';
    var condition,
        length;

    if (stu.isUndefined(args) || stu.isNotDefinedObjectKey(stu.cardinalityObject, cardinality)) {
        return bools.FALSE;
    }
    condition = stu.isFunction(conditionFunction);
    if (stu.isArray(args) || stu.isArgumentsObject(args)) {
        length = args.length;
        condition = condition && (length === length) && (length > numbers.MINUSONE);
    }

    return condition;
};

/**
 *  Determines condition of passed arguments(args) by the condition function.
 *  Known cardinality are any, all, and none.
 *  @function
 *  @name areCondition
 *  @param {Array} [args=[]]
 *  @param {Function} [conditionFunction=undefined]
 *  @param {String} [cardinality=all]
 *  @return {Boolean} returnCondition
 */
/* eslint-disable max-statements */
stu.areCondition = function areConditionFunction(args, conditionFunction, cardinality) {
    'use strict';
    var localCardinality = !(
            stu.isStrictlyDefined(cardinality) || stu.isNonEmptyString(cardinality)
        ) ? 'all' : cardinality,
        conditionFunctionLocal,
        cardinalityObject,
        length,
        index;

    if (!stu.areConditionGuard(args, conditionFunction, localCardinality)) {
        return bools.FALSE;
    }

    cardinalityObject = stu.cardinalityObject[localCardinality];
    if (stu.isNotDefinedObjectKey(cardinalityObject, 'conditionModifier')) {
        conditionFunctionLocal = conditionFunction;
    } else {
        conditionFunctionLocal = cardinalityObject.conditionModifier(conditionFunction);
    }

    length = args.length;
    if (length === numbers.ONE) {
        return cardinalityObject[(conditionFunctionLocal(args[numbers.ZERO]) ? 'guard' : 'final') + 'Value'];
    }

    for (index = 0; index < length; ++index) {
        if (conditionFunctionLocal(args[index])) {
            return cardinalityObject.guardValue;
        }
    }

    return cardinalityObject.finalValue;
};
/* eslint-enable max-statements */

/**
 *  All cardinality wrapper function for {@link areCondition}.
 *  @function
 *  @name areAllCondition
 *  @param {Array} [args=[]]
 *  @param {Function} [conditionFunction=undefined]
 *  @return {Boolean} returnCondition
 */
stu.areAllCondition = function areAllConditionFunction(args, conditionFunction) {
    'use strict';
    return stu.areCondition(args, conditionFunction, 'all');
};

/**
 *  Any cardinality wrapper function for {@link areCondition}.
 *  @function
 *  @name areAnyCondition
 *  @param {Array} [args=[]]
 *  @param {Function} [conditionFunction=undefined]
 *  @return {Boolean} returnCondition
 */
stu.areAnyCondition = function areAnyConditionFunction(args, conditionFunction) {
    'use strict';
    return stu.areCondition(args, conditionFunction, 'any');
};

/**
 *  None cardinality wrapper function for {@link areCondition}.
 *  @function
 *  @name areNoneCondition
 *  @param {Array} [args=[]]
 *  @param {Function} [conditionFunction=undefined]
 *  @return {Boolean} returnCondition
 */
stu.areNoneCondition = function areNoneConditionFunction(args, conditionFunction) {
    'use strict';
    return stu.areCondition(args, conditionFunction, 'none');
};

/**
 *  Non-Primitive - string true or false.
 *  @function
 *  @name isStringBoolean
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isStringBoolean = function isStringBooleanFunction(object) {
    'use strict';
    var stringBooleans = strings.stringBooleanValues;
    
    return (
        stu.isNonEmptyString(object) &&
        stu.isNonEmptyArray(stringBooleans) &&
        (stringBooleans.indexOf(object) !== numbers.MINUSONE)
    );
};

/**
 *  Constructed - new Boolean().
 *  @function
 *  @name isConstructedBoolean
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isConstructedBoolean = function isConstructedBooleanFunction(object) {
    'use strict';
    return stu.isBasicObject(object) && stu.isPrimitiveBoolean(object.valueOf());
};

/**
 *  Handles all primitive and non-primitive, constructed booleans.
 *  @function
 *  @name isBoolean
 *  @param {Object} object
 *  @return {Boolean} returnCondition
 */
stu.isBoolean = function isBooleanFunction(object) {
    'use strict';
    return (
        stu.isStringBoolean(object) ||
        stu.isPrimitiveBoolean(object) ||
        stu.isConstructedBoolean(object)
    );
};

/**
 *  @function
 *  @name areStrings
 *  @param {...Object} args
 *  @return {Boolean} returnCondition
 */
stu.areStrings = function areStringsFunction() {
    'use strict';
    return stu.areAllCondition(arguments, stu.isString);
};

/**
 *  @function
 *  @name areEmptyStrings
 *  @param {...Object} args
 *  @return {Boolean} returnCondition
 */
stu.areEmptyStrings = function areEmptyStringsFunction() {
    'use strict';
    return stu.areAllCondition(arguments, stu.isEmptyString);
};

/**
 *  @function
 *  @name areAnyEmptyStrings
 *  @param {...Object} args
 *  @return {Boolean} returnCondition
 */
stu.areAnyEmptyStrings = function areAnyEmptyStringsFunction() {
    'use strict';
    return stu.areAnyCondition(arguments, stu.isEmptyString);
};

/**
 *  @function
 *  @name areNonEmptyStrings
 *  @param {...Object} args
 *  @return {Boolean} returnCondition
 */
stu.areNonEmptyStrings = function areNonEmptyStringsFunction() {
    'use strict';
    return stu.areAllCondition(arguments, stu.isNonEmptyString);
};

/**
 *  @function
 *  @name areNoneStrings
 *  @param {...Object} args
 *  @return {Boolean} returnCondition
 */
stu.areNoneStrings = function areNoneStringsFunction() {
    'use strict';
    return stu.areNoneCondition(arguments, stu.isString);
};

/**
 *  @function
 *  @name areAnyStrings
 *  @param {...Object} args
 *  @return {Boolean} returnCondition
 */
stu.areAnyStrings = function areAnyStringsFunction() {
    'use strict';
    return stu.areAnyCondition(arguments, stu.isString);
};

/**
 *  @function
 *  @name areArrays
 *  @param {...Object} args
 *  @return {Boolean} returnCondition
 */
stu.areArrays = function areArraysFunction() {
    'use strict';
    return stu.areCondition(arguments, stu.isArray);
};

/**

 *  @function
 *  @name areNonEmptyArrays
 *  @param {...Object} args
 *  @return {Boolean} returnCondition
 */
stu.areNonEmptyArrays = function areNonEmptyArraysFunction() {
    'use strict';
    return stu.areCondition(arguments, stu.isNonEmptyArray);
};

/**
 *  @function
 *  @name areEmptyArrays
 *  @param {...Object} args
 *  @return {Boolean} returnCondition
 */
stu.areEmptyArrays = function areEmptyArraysFunction() {
    'use strict';
    return stu.areAllCondition(arguments, stu.isEmptyArray);
};

/**
 *  @function
 *  @name areAnyNotFunctions
 *  @param {...Object} args
 *  @return {Boolean} returnCondition
 */
stu.areAnyNotFunctions = function areAnyNotFunctionsFunction() {
    'use strict';
    return stu.areAnyCondition(arguments, stu.isNotFunction);
};

/**
 *  All cardinality wrapped defined level wrapper for {@link stu.isLooselyDefined}.
 *  @function
 *  @name areDefined
 *  @param {...Object} args
 *  @return {Boolean} returnValue
 */
stu.areDefined = function areDefinedFunction() {
    'use strict';
    return stu.areCondition(arguments, stu.isLooselyDefined);
};

/**
 *  Object key value chain value getter function.
 *  Follows the specified keyArray keys from the root object to the last value.
 *  If any keys invalid, or subsequent keys point to non-object, returns undefined.
 *  @function
 *  @name getValueFromNestedObject
 *  @param {Object} object
 *  @param {Array(String)} keyArray
 *  @return {Object} element
 */
/* eslint-disable max-statements */
/* TODO: Increase coverage for getValueFromNestedObject. */
stu.getValueFromNestedObject = /* istanbul ignore next */ function getValueFromNestedObjectFunction(object, keyArray) {
    'use strict';
    var undefinedValue = void 0,
        isNotDefinedObjectKey,
        currentKey,
        element,
        length,
        index;

    if (!(stu.isObject(object) && stu.isNonEmptyArray(keyArray))) {
        return undefinedValue;
    }

    if (stu.isSingleNonEmptyStringArray(keyArray)) {
        currentKey = keyArray[numbers.ZERO];
        return stu.isDefinedObjectKey(object, currentKey) ? object[currentKey] : undefinedValue;
    }

    isNotDefinedObjectKey = stu.isNotDefinedObjectKey;
    element = object;
    length = keyArray.length;
    index = 0;
    for (; index < length; ++index) {
        currentKey = keyArray[index];
        if (isNotDefinedObjectKey(element, currentKey)) {
            break;
        }

        element = element[currentKey];
    }

    return element;
};
/* eslint-enable max-statements */

/**
 *  @exports stringularity-type-utils
 */
module.exports = stu;
