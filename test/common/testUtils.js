/* eslint-disable */
var expect = require('chai').expect,
    testUtils = {
        objectHasOwnPropertyLocal: Object.prototype.hasOwnProperty,
        passConditionObject: {
            name: 'pass',
            condition: 'true'
        },
        failConditionObject: {
            name: 'fail',
            condition: 'false'
        }
    };

testUtils.isExists = function isExistsFunction(object, name) {
    'use strict';
    return function isExistsTestMethod() {
        'use strict';
        expect(object, 'Name ' + name + ' doesn\'t exist.').to.exist;

        return;
    };
};

testUtils.isFunction = function isFunctionFunction(object, name) {
    'use strict';
    return function isFunctionTestMethod() {
        'use strict';
        expect(typeof object, 'Function (' + name + ') isn\'t a function.').to.equal('function');

        return;
    };
};

testUtils.isObject = function isObjectFunction(object, name) {
    'use strict';
    return function isObjectTestMethod() {
        'use strict';
        expect(typeof object, 'Passed object isn\'t an object.').to.equal('object');

        return;
    };
};

testUtils.isNamed = function isNamedFunction(object, name) {
    'use strict';
    return function isNamedTestMethod() {
        'use strict';
        var functionNameLength = object.name.length,
            expectedLeastLength = 'Method'.length + 1;

        expect(
            functionNameLength,
            'Function misnamed: its length (' + functionNameLength + ') is under ' + expectedLeastLength + '(\'Method\'.length + 1).'
        ).to.be.at.least(expectedLeastLength);

        return;
    };
};

testUtils.isNamedProper = function isNamedProperFunction(object, name, type) {
    'use strict';
    return function isNamedProperTestMethod() {
        'use strict';
        var functionName = object.name,
            nameType = name + type;

        expect(functionName, 'Function (' + functionName + ') is not properly named as: ' + (nameType)).to.equal(nameType);

        return;
    };
};

testUtils.isNamedProperFunction = function isNamedProperFunctionFunction(object, name) {
    'use strict';
    return testUtils.isNamedProper(object, name, 'Function');
};

testUtils.isNamedProperMethod = function isNamedProperMethodFunction(object, name) {
    'use strict';
    return testUtils.isNamedProper(object, name, 'Method');
};

testUtils.isMethodReturnsCondition = function isMethodReturnsConditionFunction(object, param, condition, name) {
    'use strict';
    return function isMethodReturnsConditionTestMethod() {
        'use strict';
        var returnValue = object(param);
        expect(returnValue, 'Function (' + name + ') return value (' + returnValue + ') wrong. Parameter:\n' + JSON.stringify(param, null, 4) + '\n').to.be[condition];

        return;
    };
};

testUtils.isMethodReturnsConditionByParams = function isMethodReturnsConditionByParamsFunction(object, paramArray, condition, name) {
    'use strict';
    var context = this.context,
        externalParameters = this.params,
        localArray;

    if (externalParameters !== undefined) {
        localArray = [].concat(
            paramArray,
            externalParameters
        )
    } else {
        localArray = paramArray;
    }

    return function isMethodReturnsConditionByParamsTestMethod() {
        'use strict';
        var returnValue = object.apply(context, localArray);
        expect(returnValue, 'Function (' + name + ') return value (' + returnValue + ') wrong. Parameters:\n' + JSON.stringify(localArray, null, 4) + '\n').to.be[condition];

        return;
    };
};

testUtils.isMethodReturnsFCByParams = function isMethodReturnsFCByParamsFunction(object, paramArray, condition, name) {
    'use strict';
    var context = this.context,
        externalParameters = this.params,
        localArray;

    if (externalParameters !== undefined) {
        localArray = [].concat(
            paramArray,
            externalParameters
        )
    } else {
        localArray = paramArray;
    }

    return function isMethodReturnsFCByParamsTestMethod() {
        'use strict';
        var returnValue = object.apply(context, localArray)();
        expect(returnValue, 'Function (' + name + ') return value (' + returnValue + ') wrong. Parameters:\n' + JSON.stringify(localArray, null, 4) + '\n').to.be[condition];

        return;
    };
};

testUtils.isMethodReturnsValue = function isMethodReturnsValueFunction(object, param, value, name) {
    'use strict';
    return function isMethodReturnsValueTestMethod() {
        'use strict';
        var returnValue = object(param);
        expect(returnValue, 'Function (' + name + ') return value (' + returnValue + ') is wrong.').to.equal(value);
        
        return;
    };
};

testUtils.isParameterAmountCommon = function isParameterAmountCommonFunction(object, name, parameterAmount) {
    'use strict';
    return function isParameterAmountCommonTestMethod() {
        'use strict';
        var parameterLength = object.length;
        expect(parameterLength, 'Function (' + name + ') parameter number is wrong. Expected is: ' + parameterAmount + '.').to.equal(parameterAmount);

        return;
    };
};

testUtils.isZeroParameter = function isZeroParameterFunction(object, name) {
    'use strict';
    return testUtils.isParameterAmountCommon(object, name, 0);
};

testUtils.isSingleParameter = function isSingleParameterFunction(object, name) {
    'use strict';
    return testUtils.isParameterAmountCommon(object, name, 1);
};

testUtils.isDoubleParameter = function isDoubleParameterFunction(object, name) {
    'use strict';
    return testUtils.isParameterAmountCommon(object, name, 2);
};

testUtils.isTripleParameter = function isTripleParameterFunction(object, name) {
    'use strict';
    return testUtils.isParameterAmountCommon(object, name, 3);
};

testUtils.getParameterList = function getParameterListFunction(object) {
    'use strict';
    var parameterArray;
    if (typeof object !== 'function') {
        return [];
    }

    parameterArray = object.toString();
    parameterArray = parameterArray.substring(parameterArray.indexOf('(') + 1, parameterArray.indexOf(')'));
    return (parameterArray.indexOf(',') !== -1) ? parameterArray.split(/[\s,]+/) : !parameterArray.length ? [] : [parameterArray];
};

testUtils.isUsingArguments = function isUsingArgumentsFunction(object) {
    'use strict';
    var functionBody;
    if (typeof object !== 'function') {
        return [];
    }

    functionBody = object.toString();
    functionBody = functionBody.substring(functionBody.indexOf('{') + 1, functionBody.indexOf('}'));
    return functionBody.indexOf('arguments') > -1;
};

testUtils.isFormalParameterListProperlyNamedCommon = function isFormalParameterListProperlyNamedCommonFunction(object, name, parameterArray) {
    'use strict';
    return function isFormalParameterListProperlyNamedCommonTestMethod() {
        'use strict';
        var paramArrayFromString = testUtils.getParameterList(object);
        expect(paramArrayFromString, 'Function (' + name + ') parameter list wrong. Expected is: ' + parameterArray + '.').to.eql(parameterArray);

        return;  
    };
};

testUtils.isFormalParameterListUsingArguments = function isFormalParameterListUsingArgumentsFunction(object, name, option) {
    'use strict';
    return function isFormalParameterListUsingArgumentsTestMethod() {
        'use strict';
        var isUsingArguments = testUtils.isUsingArguments(object),
            localOption = (
                (typeof option == 'string') && ([true, false].indexOf(option) > -1)
            ) ? option.toString() : 'true',
            localErrorMessage = 'Function ' + (option ? 'not using' : 'using') + 'arguments.';

        expect(isUsingArguments, 'Function (' + name + ') parameter list wrong.' + localErrorMessage).to.be[option];
        return;
    };
};

testUtils.isSingleParameterProperlyNamed = function isSingleParameterProperlyNamedFunction(object, name, parameterArray) {
    'use strict';
    return testUtils.isFormalParameterListProperlyNamedCommon(object, name, parameterArray);
};

testUtils.isPropertyOfBase = function isPropertyOfBaseFunction(object, param) {
    'use strict';
    return function isPropertyOfBaseObjectTestMethod() {
        'use strict';
        expect(testUtils.objectHasOwnPropertyLocal.call(object, param), 'Base Object doesn\'t have property: ' + param + ' .').to.be.true;

        return;
    };
};

testUtils.prerequisitesCommon = function prerequisitesCommonFunction(methodName, parameterArray, expectedParameterAmountDescription) {
    'use strict';
    var object = this.object;

    return function prerequisitesCommonMethod() {
        'use strict';
        var option,
            func;

        it('Base Object owns property, not prototype.', testUtils.isPropertyOfBase(object, methodName));

        func = object[methodName];
        it('Exists.', testUtils.isExists(func, methodName));

        option = expectedParameterAmountDescription == 'Zero' ? true : false;
        describe('Is a ', function isAGroupPrerequisitesMethod() {
            it('Function.', testUtils.isFunction(func, methodName));
            it('Named Function.', testUtils.isNamed(func, methodName));
            it('Properly named Function.', testUtils.isNamedProperFunction(func, methodName));
            it(expectedParameterAmountDescription + ' parameter Function.', testUtils['is' + expectedParameterAmountDescription + 'Parameter'](func, methodName, parameterArray.length));
            it('Function with a properly enumerated formal Parameter List.', testUtils.isFormalParameterListProperlyNamedCommon(func, methodName, parameterArray));
            it('Function that uses the default arguments array - ' + option + '.', testUtils.isFormalParameterListUsingArguments(func, methodName, option));
        });

        return;
    };
};

testUtils.prerequisitesZero = function prerequisitesZeroFunction(methodName) {
    'use strict';
    return testUtils.prerequisitesCommon(methodName, [], 'Zero');
};

testUtils.prerequisitesSingle = function prerequisitesSingleFunction(methodName, parameterArray) {
    'use strict';
    return testUtils.prerequisitesCommon(methodName, parameterArray, 'Single');
};

testUtils.prerequisitesDouble = function prerequisitesDoubleFunction(methodName, parameterArray) {
    'use strict';
    return testUtils.prerequisitesCommon(methodName, parameterArray, 'Double');
};

testUtils.prerequisitesTriple = function prerequisitesTripleFunction(methodName, parameterArray) {
    'use strict';
    return testUtils.prerequisitesCommon(methodName, parameterArray, 'Triple');
};

testUtils.getUndefinedsArray = function getUndefinedsArrayFunction(length) {
    'use strict';
    var array = [],
        index;

    if (!Number.isInteger(length) || (length < 1 || length > 4)) {
        return array;
    }

    index = 0;
    for(; index < length; ++index) {
        array[index] = undefined;
    }

    return array;
};

testUtils.makeTest = function makeTestMethod(testObject) {
    'use strict';
    it(
        testObject.description,
        testObject.testMethod(
            testObject.method,
            testObject.param,
            testObject.conditionStatus,
            testObject.methodName
        )
    );

    return;
};

testUtils.paramRunner = function paramRunnerFunction(conditionName, conditionStatus) {
    'use strict';
    var testObject = this.testObject,
        testMethod = this.testMethod,
        parameterPosition = this.parameterPosition,
        parameterLength = this.parameterLength,
        methodName = this.methodName,
        method = this.method,
        makeTest = testUtils.makeTest;

    return function paramTestRunnerMethod() {
        'use strict';
        var localTestObject,
            currentElement,
            paramArray,
            testArray,
            length,
            index;

        if (!testObject.hasOwnProperty(conditionName) || testObject[conditionName] === undefined) {
            return;
        }

        testArray = testObject[conditionName];
        length = testArray.length;
        index = 0;
        if (parameterLength) {
            for(; index < length; ++index) {
                currentElement = testArray[index];
                localTestObject = {
                    method: method,
                    methodName: methodName,
                    conditionStatus: conditionStatus,
                    testMethod: testMethod,
                    description: currentElement[1],
                    param: testUtils.getUndefinedsArray(parameterLength)
                };
                localTestObject.param[parameterPosition] = currentElement[0];
                makeTest(localTestObject);
            }
        } else {
            for(; index < length; ++index) {
                currentElement = testArray[index]; 
                makeTest({
                    method: method,
                    methodName: methodName,
                    conditionStatus: conditionStatus,
                    testMethod: testMethod,
                    description: currentElement[1],
                    param: currentElement[0]
                });
            }
        }

        return;
    };
};

testUtils.areSingleParamRunner = function areSingleParamRunnerFunction(conditionName, conditionStatus) {
    'use strict';
    var testObject = this.testObject,
        testMethod = this.testMethod,
        methodName = this.methodName,
        method = this.method,
        makeTest = testUtils.makeTest;

    return function areSingleParamTestRunnerMethod() {
        'use strict';
        var currentElement,
            testArray,
            length,
            index;

        if (!testObject.hasOwnProperty(conditionName) || testObject[conditionName] === undefined) {
            return;
        }

        testArray = testObject[conditionName];
        length = testArray.length;
        index = 0;
        for(; index < length; ++index) {
            currentElement = testArray[index];
            makeTest({
                method: method,
                methodName: methodName,
                conditionStatus: conditionStatus,
                testMethod: testMethod,
                description: currentElement[1],
                param: currentElement[0]
            });
        }

        return;
    };
};

module.exports = testUtils;
/* eslint-enable */
