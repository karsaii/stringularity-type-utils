/* eslint-disable */
var paramsData = require('./fixtures/paramsData'),
    stu = require('../src/lib/stringularity-type-utils'),
    testUtils = require('./common/testUtils'),
    prereqTestScope = {
        object: stu
    },
    testScope = {
        object: stu,
        method: testUtils.isMethodReturnsConditionByParams
    },
    failCondition = testUtils.failConditionObject,
    passCondition = testUtils.passConditionObject,
    failConditionName = failCondition.name,
    passConditionName = passCondition.name,
    failConditionStatus = failCondition.condition,
    passConditionStatus = passCondition.condition,
    describeTemplate = function describeTempalteMethod(runner, groupName) {
        'use strict';
        var localGroupName = groupName === undefined ? 'Returns: ' : groupName;

        describe(localGroupName, function describeTemplateReturnMethod() {
            describe('True on', runner(passConditionName, passConditionStatus));
            describe('False on', runner(failConditionName, failConditionStatus));

            return;
        });

        return;
    },
    paramRunner = testUtils.paramRunner,
    makeTest = testUtils.makeTest,
    bothArrayRunnerCore = function bothArrayRunnerMethod(testObject, key, conditionName, conditionStatus) {
        'use strict';
        var baseObject = testObject.bothParameters,
            methodName = testObject.method,
            method = stu[methodName],
            testScope = {
                context: stu
            },
            localMethodReturnsConditionByParams = testUtils.isMethodReturnsConditionByParams.bind(testScope),
            testContainerObject,
            secondCurrent,
            firstCurrent,
            secondLength,
            secondArray,
            secondIndex,
            firstLength,
            firstArray,
            firstIndex,
            currentKey;

        testContainerObject = baseObject[conditionName];
        if (conditionName === failConditionName) {
            testContainerObject = testContainerObject[key];
        }

        secondArray = testContainerObject[baseObject.paramArray[0]];
        firstArray = testContainerObject[baseObject.paramArray[1]];

        firstLength = firstArray.length;
        firstIndex = 0;
        for(; firstIndex < firstLength; ++firstIndex) {
            firstCurrent = firstArray[firstIndex];
            secondLength = secondArray.length;
            secondIndex = 0;
            for(; secondIndex < secondLength; ++secondIndex) {
                secondCurrent = secondArray[secondIndex];
                makeTest({
                    method: method,
                    methodName: methodName,
                    conditionStatus: conditionStatus,
                    testMethod: localMethodReturnsConditionByParams,
                    description: baseObject.paramArray[0] + ':\t' + secondCurrent[1] + ',\t' + baseObject.paramArray[1] + ': ' + firstCurrent[1],
                    param: [secondCurrent[0], firstCurrent[0]]
                });
            }
        }

        return;
    },
    tripleArrayRunnerCore = function tripleArrayRunnerMethod(testObject, key, conditionName, conditionStatus) {
        'use strict';
        var baseObject = testObject.allParameters,
            methodName = testObject.method,
            method = stu[methodName],
            testScope = {
                context: stu
            },
            localMethodReturnsConditionByParams = testUtils.isMethodReturnsConditionByParams.bind(testScope),
            testParentContainerObject,
            testContainerObject,
            secondCurrent,
            firstCurrent,
            secondLength,
            secondArray,
            secondIndex,
            firstLength,
            firstArray,
            firstIndex,
            currentKey,
            keyLength,
            keyIndex,
            keyArray;

        testParentContainerObject = baseObject[conditionName];
        keyArray = testParentContainerObject.keyArray;

        keyIndex = 0;
        keyLength = keyArray.length;
        for(; keyIndex < keyLength; ++keyIndex) {
            currentKey = keyArray[keyIndex];
            testContainerObject = testParentContainerObject[currentKey];
            if (conditionName === failConditionName) {
                testContainerObject = testContainerObject[key];
            }

            secondArray = testContainerObject[baseObject.paramArray[0]];
            firstArray = testContainerObject[baseObject.paramArray[1]];

            firstLength = firstArray.length;
            firstIndex = 0;
            for(; firstIndex < firstLength; ++firstIndex) {
                firstCurrent = firstArray[firstIndex];
                secondLength = secondArray.length;
                secondIndex = 0;
                for(; secondIndex < secondLength; ++secondIndex) {
                    secondCurrent = secondArray[secondIndex];
                    makeTest({
                        method: method,
                        methodName: methodName,
                        conditionStatus: conditionStatus,
                        testMethod: localMethodReturnsConditionByParams,
                        description: 'Test:\tcurrentKey:\t' + currentKey + ',\tkey:\t' + key + ',\tArgs:\t' + secondCurrent[1] + ',\tConditional Function:\t' + (firstCurrent[1] || '').toString(),
                        param: [secondCurrent[0], firstCurrent[0], currentKey]
                    });
                }
            }
        }

        return;
    },
    definedTripleArrayRunnerCore = function definedTripleArrayRunnerMethod(testObject, key, conditionName, conditionStatus) {
        'use strict';
        var baseObject = testObject.allParameters,
            methodName = testObject.method,
            method = stu[methodName],
            testScope = {
                context: stu
            },
            localMethodReturnsConditionByParams = testUtils.isMethodReturnsConditionByParams.bind(testScope),
            testParentContainerObject,
            testContainerObject,
            secondCurrent,
            firstCurrent,
            secondLength,
            secondArray,
            secondIndex,
            firstLength,
            firstArray,
            firstIndex,
            currentKey,
            keyLength,
            keyIndex,
            keyArray;

        testParentContainerObject = baseObject[conditionName];
        keyArray = testParentContainerObject.keyArray;

        keyIndex = 0;
        keyLength = keyArray.length;
        for(; keyIndex < keyLength; ++keyIndex) {
            currentKey = keyArray[keyIndex];
            testContainerObject = testParentContainerObject[currentKey];
            if (conditionName === failConditionName) {
                testContainerObject = testContainerObject[key];
            }
            
            secondArray = testContainerObject[baseObject.paramArray[0]];
            firstArray = testContainerObject[baseObject.paramArray[1]];

            firstLength = firstArray.length;
            firstIndex = 0;
            for(; firstIndex < firstLength; ++firstIndex) {
                firstCurrent = firstArray[firstIndex];
                secondLength = secondArray.length;
                secondIndex = 0;
                for(; secondIndex < secondLength; ++secondIndex) {
                    secondCurrent = secondArray[secondIndex];
                    makeTest({
                        method: method,
                        methodName: methodName,
                        conditionStatus: conditionStatus,
                        testMethod: localMethodReturnsConditionByParams,
                        description: 'Test:\tKey:\t' + currentKey + ',\tKey:\t' + key + ',\tArgs:\t' + secondCurrent[1] + ',\tConditional Function:\t' + (firstCurrent[1] || '').toString(),
                        param: [secondCurrent[0], currentKey, firstCurrent[0]]
                    });
                }
            }
        }

        return;
    };

testUtils.prerequisitesCommon = testUtils.prerequisitesCommon.bind(prereqTestScope);

describe('Stringularity type utils unit tests: ', function stuDescribeBlockMethod() {
    var testScope = {
            context: stu
        },
        isMethodReturnsFCByParams = testUtils.isMethodReturnsFCByParams.bind(testScope),
        isMethodReturnsConditionByParams = testUtils.isMethodReturnsConditionByParams.bind(testScope),
        isMethodReturnsCondition = testUtils.isMethodReturnsCondition.bind(testScope),
        singleParamDescribeTemplate = function singleParamDescribeTemplateMethod(testContext) {
            'use strict';
            describe(testContext.parameterDescription, function parameterDescribeMethod() {
                'use strict';
                describeTemplate(paramRunner.bind(testContext));

                return;
            });
            return;
        }
        typeCheckerMeta = function typeCheckerMetaFunction(testObject, methodName) {
            'use strict';
            return function typeCheckerMetaMethod() {
                'use strict';
                var testContext = {
                        method: stu[methodName],
                        testMethod: isMethodReturnsConditionByParams,
                        methodName: methodName,
                        parameterLength: 2
                    };

                describe('Prerequisites: ', testUtils.prerequisitesDouble(methodName, ['object', 'type']));

                testContext.parameterDescription = 'No parameters: ';
                testContext.parameterPosition = 0;
                testContext.testObject = testObject['noParameters'];
                singleParamDescribeTemplate(testContext);

                testContext.parameterDescription = 'Object parameters: ';
                testContext.parameterPosition = 0;
                testContext.testObject = testObject['firstParameters'];
                singleParamDescribeTemplate(testContext);

                testContext.parameterDescription = 'Type name parameters: ';
                testContext.parameterPosition = 1;
                testContext.testObject = testObject['secondParameters'];
                singleParamDescribeTemplate(testContext);

                describe('Object, and type name parameters: ', function typeCheckerMetaTypeAndObjectParamsMethod() {
                    'use strict';
                    var bothRunner = function typeCheckerMetaTypeAndObjectParamsRunnerFunction(conditionName, conditionStatus) {
                        'use strict';
                        return function typeCheckerMetaTypeAndObjectParamsConditionRunnerMethod() {
                            'use strict;'
                            var baseObject = testObject.bothParameters,
                                methodName = testObject.method,
                                method = stu[methodName],
                                testArray = baseObject[conditionName],
                                keyArray = baseObject.keyArray,
                                keyLength = keyArray.length,
                                testScope = {
                                    context: stu
                                },
                                localMethodReturnsConditionByParams = testUtils.isMethodReturnsConditionByParams.bind(testScope),
                                currentElement,
                                currentTest,
                                currentKey,
                                testLength,
                                testIndex,
                                keyIndex;

                            for(keyIndex = 0; keyIndex < keyLength; ++keyIndex) {
                                currentKey = keyArray[keyIndex];
                                if (!testArray.hasOwnProperty(currentKey) || (testArray[currentKey] === undefined)) {
                                    continue;
                                }

                                localMethodReturnsConditionByParams;
                                currentTest = testArray[currentKey];
                                testLength = currentTest.length;
                                testIndex = 0;
                                for(; testIndex < testLength; ++testIndex) {
                                    currentElement = currentTest[testIndex];
                                    makeTest({
                                        method: method,
                                        methodName: methodName,
                                        conditionStatus: conditionStatus,
                                        testMethod: localMethodReturnsConditionByParams,
                                        description: currentElement[1] + ': is a ' + currentKey,
                                        param: [currentElement[0], currentKey]
                                    });
                                }
                            }

                            return;
                        };
                    };

                    describeTemplate(bothRunner);

                    return;
                });
                
                return;
            };
        },
        arePreGuardChecker = function arePreGuardCheckerFunction(testObject, methodName) {
            'use strict';
            return function arePreGuardCheckerMethod() {
                'use strict';
                var testContext = {
                        method: stu[methodName],
                        testMethod: isMethodReturnsConditionByParams,
                        methodName: methodName,
                        parameterLength: 2
                    };

                describe('Prerequisites:', testUtils.prerequisitesDouble(methodName, testObject.parameterList));

                testContext.parameterDescription = 'No parameters: ';
                testContext.testObject = testObject['noParameters'];
                singleParamDescribeTemplate(testContext);

                testContext.parameterDescription = testObject.parameterList[0] + ' parameters: ';
                testContext.testObject = testObject['firstParameters'];
                singleParamDescribeTemplate(testContext);

                testContext.parameterDescription = testObject.parameterList[1] + ' parameters: ';
                testContext.parameterPosition = 1;
                testContext.testObject = testObject['secondParameters'];
                singleParamDescribeTemplate(testContext);
                
                describe(
                    testObject.parameterList[0] +
                    ', and ' +
                    testObject.parameterList[1] +
                    ' parameters: ',
                    function arePreGuardBothParamsMethod() {
                    'use strict';
                    var bothRunner = function arePreGuardBothParamsRunnerFunction(conditionName, conditionStatus) {
                        'use strict';
                        return function arePreGuardBothParamsRunnerMethod() {
                            'use strict;'
                            if (conditionName === failConditionName) {
                                bothArrayRunnerCore(testObject, 'firstMismatch', conditionName, conditionStatus);
                                bothArrayRunnerCore(testObject, 'secondMismatch', conditionName, conditionStatus);
                                bothArrayRunnerCore(testObject, 'bothMismatch', conditionName, conditionStatus);
                            } else {
                                bothArrayRunnerCore(testObject, undefined, conditionName, conditionStatus);
                            }

                            return;
                        };
                    };

                    describeTemplate(bothRunner);

                    return;
                });

                return;
            };
        },
        areConditionChecker = function areConditionCheckerFunction(testObject, methodName) {
            'use strict';
            return function areConditionCheckerMethod() {
                'use strict';
                var testContext = {
                        method: stu[methodName],
                        testMethod: isMethodReturnsConditionByParams,
                        methodName: methodName,
                        parameterLength: 3
                    };

                describe('Prerequisites:', testUtils.prerequisitesTriple(methodName, testObject.parameterList));

                testContext.parameterDescription = 'No parameters: ';
                testContext.testObject = testObject['noParameters'];
                singleParamDescribeTemplate(testContext);

                testContext.parameterDescription = 'Args parameters: ';
                testContext.testObject = testObject['firstParameters'];
                singleParamDescribeTemplate(testContext);

                testContext.parameterDescription = 'Condition Function parameters: ';
                testContext.parameterPosition = 1;
                testContext.testObject = testObject['secondParameters'];
                singleParamDescribeTemplate(testContext);

                testContext.parameterDescription = 'cardinality Function parameters: ';
                testContext.parameterPosition = 1;
                testContext.testObject = testObject['thirdParameters'];
                singleParamDescribeTemplate(testContext);

                describe('Args, Condition Function, and Cardinality parameters: ', function areConditionTripleParamsMethod() {
                    'use strict';
                    var allRunner = function areConditionTripleParamsRunnerFunction(conditionName, conditionStatus) {
                        'use strict';
                        return function areConditionTripleParamsRunnerMethod() {
                            'use strict;'
                            if (conditionName === failConditionName) {
                                tripleArrayRunnerCore(testObject, 'noneMismatch', conditionName, conditionStatus);
                                tripleArrayRunnerCore(testObject, 'firstMismatch', conditionName, conditionStatus);
                                tripleArrayRunnerCore(testObject, 'secondMismatch', conditionName, conditionStatus);
                                tripleArrayRunnerCore(testObject, 'bothMismatch', conditionName, conditionStatus);
                            } else {
                                tripleArrayRunnerCore(testObject, undefined, conditionName, conditionStatus);
                            }

                            return;
                        };
                    };

                    describeTemplate(allRunner);

                    return;
                });

                return;
            };
        },
        isDefinedChecker = function isDefinedCheckerFunction(testObject, methodName) {
            'use strict';
            return function isDefinedCheckerMethod() {
                'use strict';
                var testContext = {
                        method: stu[methodName],
                        testMethod: isMethodReturnsConditionByParams,
                        methodName: methodName,
                        parameterLength: 3
                    };

                describe('Prerequisites:', testUtils.prerequisitesTriple(methodName, testObject.parameterList));

                testContext.parameterDescription = 'No parameters: ';
                testContext.testObject = testObject['noParameters'];
                singleParamDescribeTemplate(testContext);

                testContext.parameterDescription = 'Args parameters: ';
                testContext.testObject = testObject['firstParameters'];
                singleParamDescribeTemplate(testContext);

                testContext.parameterDescription = 'Condition Function parameters: ';
                testContext.parameterPosition = 1;
                testContext.testObject = testObject['secondParameters'];
                singleParamDescribeTemplate(testContext);

                testContext.parameterDescription = 'cardinality Function parameters: ';
                testContext.parameterPosition = 1;
                testContext.testObject = testObject['thirdParameters'];
                singleParamDescribeTemplate(testContext);

                describe(
                    testObject.parameterList[0] +
                    ', ' +
                    testObject.parameterList[1] +
                    ', ' +
                    testObject.parameterList[2] +
                    ' parameters: ', function isDefinedTripleParamsMethod() {
                    'use strict';
                    var allRunner = function isDefinedTripleParamsRunnerFunction(conditionName, conditionStatus) {
                        'use strict';
                        return function isDefinedTripleParamsRunnerMethod() {
                            'use strict;'
                            if (conditionName === failConditionName) {
                                definedTripleArrayRunnerCore(testObject, 'firstMismatch', conditionName, conditionStatus);
                                definedTripleArrayRunnerCore(testObject, 'secondMismatch', conditionName, conditionStatus);
                                definedTripleArrayRunnerCore(testObject, 'bothMismatch', conditionName, conditionStatus);
                            } else {
                                definedTripleArrayRunnerCore(testObject, undefined, conditionName, conditionStatus);
                            }

                            return;
                        };
                    };

                    describeTemplate(allRunner);

                    return;
                });

                return;
            };
        },
        isUndefinedChecker = function isUndefinedCheckerFunction(testObject, methodName) {
            'use strict';
            return function isDefinedCheckerMethod() {
                'use strict';
                var testContext = {
                        method: stu[methodName],
                        testMethod: isMethodReturnsConditionByParams,
                        methodName: methodName,
                        parameterLength: 3
                    };

                describe('Prerequisites:', testUtils.prerequisitesTriple(methodName, testObject.parameterList));

                describe(
                    testObject.parameterList[0] +
                    ', ' +
                    testObject.parameterList[1] +
                    ', ' +
                    testObject.parameterList[2] +
                    ' parameters: ', function isUndefinedTripleParamsMethod() {
                    'use strict';
                    var allRunner = function isUndefinedTripleParamsRunnerFunction(conditionName, conditionStatus) {
                        'use strict';
                        return function isUndefinedTripleParamsRunnerMethod() {
                            'use strict;'
                            if (conditionName === failConditionName) {
                                definedTripleArrayRunnerCore(testObject, 'firstMismatch', conditionName, conditionStatus);
                                definedTripleArrayRunnerCore(testObject, 'bothMismatch', conditionName, conditionStatus);
                            } else {
                                definedTripleArrayRunnerCore(testObject, undefined, conditionName, conditionStatus);
                            }

                            return;
                        };
                    };

                    describeTemplate(allRunner);

                    return;
                });

                return;
            };
        },
        isTypeCheckerCommon = function typeCheckerCommonFunction(testObject, methodName) {
            'use strict';
            return function typeCheckerCommonMethod() {
                'use strict';
                var testContext = {
                        testObject: testObject,
                        method: stu[methodName],
                        testMethod: isMethodReturnsConditionByParams,
                        methodName: methodName,
                        parameterPosition: 0,
                        parameterLength: 1
                    };

                describe('Prerequisites:', testUtils.prerequisitesSingle(methodName, ['object']));
                describeTemplate(paramRunner.bind(testContext));

                return;
            };
        },
        invertBooleanChecker = function invertBooleanCheckerFunction(testObject, methodName) {
            'use strict';
            return function invertBooleanCheckerMethod() {
                'use strict';
                var testContext = {
                        testObject: testObject,
                        method: stu[methodName],
                        testMethod: isMethodReturnsFCByParams,
                        methodName: methodName,
                        parameterPosition: 0,
                        parameterLength: 1
                    };

                describe('Prerequisites:', testUtils.prerequisitesSingle(methodName, ['object']));
                describeTemplate(paramRunner.bind(testContext));

                return;
            };
        },
        areTypeCheckerCommon = function areTypeCheckerCommonFunction(testObject, methodName) {
            'use strict';
            return function areTypeCheckerCommonMethod() {
                'use strict';
                var testContext = {
                        testObject: testObject.single,
                        method: stu[methodName],
                        testMethod: isMethodReturnsCondition,
                        methodName: methodName,
                        parameterPosition: 0,
                        parameterLength: 0
                    };

                describe('Prerequisites:', testUtils.prerequisitesZero(methodName));
                describeTemplate(paramRunner.bind(testContext), 'Single case Returns: ');

                testContext.testMethod = isMethodReturnsConditionByParams;
                testContext.testObject = testObject.multiple;
                describeTemplate(testUtils.areSingleParamRunner.bind(testContext), 'Arguments Many case Returns: ');

                return;
            };
        };

    describe('Base Object', function() {
        it('Exists', testUtils.isExists(stu, 'stu'));
        
        it('Is an Object',  testUtils.isObject(stu, 'stu'));
    });

    describe('Type Checkers: ', function() {
        var typeTests = [
                paramsData.stringTestObject,
                paramsData.notStringTestObject,
                paramsData.arrayTestObject,
                paramsData.notArrayTestObject,
                paramsData.primitiveBooleanTestObject,
                paramsData.notPrimitiveBooleanTestObject,
                paramsData.baseDefinedTestObject,
                paramsData.looselyDefinedTestObject,
                paramsData.strictlyDefinedTestObject,
                paramsData.truthyDefinedTestObject,
                paramsData.functionTestObject,
                paramsData.notFunctionTestObject,
                paramsData.numbersTestObject,
                paramsData.notNumbersTestObject,
                paramsData.roundedTestObject,
                paramsData.notRoundedTestObject,
                paramsData.integerTestObject,
                paramsData.notIntegerTestObject,
                paramsData.floatTestObject,
                paramsData.notFloatTestObject,
                paramsData.basicObjectTestObject,
                paramsData.basicNonArrayObjectTestObject,
                paramsData.objectTestObject,
                paramsData.notObjectTestObject,
                paramsData.emptyArrayTestObject,
                paramsData.emptyStringTestObject,
                paramsData.emptyObjectTestObject,
                paramsData.undefinedTestObject,
                paramsData.nonEmptyArrayTestObject,
                paramsData.notNonEmptyArrayTestObject,
                paramsData.nonEmptyStringTestObject,
                paramsData.notNonEmptyStringTestObject,
                paramsData.singleElementArrayTestObject,
                paramsData.singleNonEmptyStringArrayTestObject,
                paramsData.singleElementObjectArrayTestObject,
                paramsData.nonEmptyObjectTestObject,
                paramsData.notNonEmptyObjectTestObject,
                paramsData.stringBooleanTestObject,
                paramsData.constructedBooleanTestObject,
                paramsData.booleanTestObject,
                paramsData.argumentsTestObject
            ],
            areTypeTests = [
                paramsData.areArraysTestObject,
                paramsData.areEmptyArraysTestObject,
                paramsData.areNonEmptyArraysTestObject,

                paramsData.areAnyNotFunctionsTestObject,

                paramsData.areStringsTestObject,
                paramsData.areNoneStringsTestObject,
                paramsData.areEmptyStringsTestObject,
                paramsData.areAnyStringsTestObject,
                paramsData.areAnyEmptyStringsTestObject,
                paramsData.areNonEmptyStringsTestObject,
                
                paramsData.areDefinedTestObject
            ],
            length = typeTests.length,
            index = 0,
            currentTypeTestObject,
            methodName;

        currentTypeTestObject = typeTests[0];
        methodName = currentTypeTestObject.method;
        describe(methodName + ': ', isTypeCheckerCommon(currentTypeTestObject, methodName));
        
        currentTypeTestObject = paramsData.typeTestObject;
        methodName = currentTypeTestObject.method;
        describe(methodName + ': ', typeCheckerMeta(currentTypeTestObject, methodName));

        currentTypeTestObject = paramsData.definedCoreTestObject;
        methodName = currentTypeTestObject.method;
        describe(methodName + ': ', isDefinedChecker(currentTypeTestObject, methodName));

        currentTypeTestObject = paramsData.undefinedCoreTestObject;
        methodName = currentTypeTestObject.method;
        describe(methodName + ': ', isUndefinedChecker(currentTypeTestObject, methodName));

        for(index = 1; index < length; ++index) {
            currentTypeTestObject = typeTests[index];
            methodName = currentTypeTestObject.method;
            describe(methodName + ': ', isTypeCheckerCommon(currentTypeTestObject, methodName));
        }

        currentTypeTestObject = paramsData.invertBooleanTestObject;
        methodName = currentTypeTestObject.method;
        describe(methodName + ': ', invertBooleanChecker(currentTypeTestObject, methodName));

        currentTypeTestObject = paramsData.objectKeyTestObject;
        methodName = currentTypeTestObject.method;
        describe(methodName + ': ', arePreGuardChecker(currentTypeTestObject, methodName));

        currentTypeTestObject = paramsData.definedObjectKeyTestObject;
        methodName = currentTypeTestObject.method;
        describe(methodName + ': ', arePreGuardChecker(currentTypeTestObject, methodName));

        currentTypeTestObject = paramsData.areConditionGuardTestObject;
        methodName = currentTypeTestObject.method;
        describe(methodName + ': ', areConditionChecker(currentTypeTestObject, methodName));

        currentTypeTestObject = paramsData.areConditionTestObject;
        methodName = currentTypeTestObject.method;
        describe(methodName + ': ', areConditionChecker(currentTypeTestObject, methodName));

        length = areTypeTests.length;
        index = 0;
        for(;index < length; ++index) {
            currentTypeTestObject = areTypeTests[index];
            methodName = currentTypeTestObject.method;
            describe(methodName + ': ', areTypeCheckerCommon(currentTypeTestObject, methodName));            
        }
    });

    describe('Getters:', function() {
        'use strict';
        var testObject = paramsData.getSingleNonEmptyStringFromArrayTestObject,
            methodName = testObject.method,
            method = stu[methodName];

        describe(methodName + ': ', function() {
            describe('Prerequisites:', testUtils.prerequisitesSingle(methodName, ['object']));

            describe('Returns', function() {
                'use strict';
                var testArray = testObject.pass,
                    length = testArray.length,
                    index = 0,
                    currentElementFirst,
                    currentElement;

                for(; index < length; ++index) {
                    currentElement = testArray[index];
                    currentElementFirst = currentElement[0];
                    describe(currentElementFirst + ' on', function() {
                        makeTest({
                            method: method,
                            methodName: methodName,
                            conditionStatus: currentElementFirst[0],
                            testMethod: testUtils.isMethodReturnsValue,
                            description: currentElement[1],
                            param: currentElementFirst
                        });
                    });
                }

                testArray = testObject.fail,
                length = testArray.length,
                index = 0;
                describe('Empty String on', function() {
                    for(; index < length; ++index) {
                        currentElement = testArray[index];
                        makeTest({
                            method: method,
                            methodName: methodName,
                            conditionStatus: '',
                            testMethod: testUtils.isMethodReturnsValue,
                            description: currentElement[1],
                            param: currentElement[0]
                        });
                    }
                });
            });

            return;
        });

        return;
    });

    return;
});
/* eslint-enable */
