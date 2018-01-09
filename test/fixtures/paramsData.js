/* eslint-disable */
var data = require('./data'),
    getFirstElementArrayOf = data.getFirstElementArrayOf,
    argumentsData = data.arguments,
    arrayData = data.array,
    booleanData = data.boolean,
    stringData = data.string,
    numberData = data.number,
    objectData = data.object,
    definedData = data.defined,
    undefinedData = data.undefined,
    functionData = data.functions,
    nothingData = data.nothing,
    typeNamesData = data.typeNames,
    allData = data.all,
    paramsData = {
        argumentsFailParams: [].concat(
            arrayData.all,
            booleanData.all,
            functionData.all,
            numberData.all,
            stringData.all,
            objectData.nonExternalNonArgument
        ),

        arrayFailParams: [].concat(
            argumentsData.all,
            booleanData.all,
            functionData.all,
            numberData.all,
            stringData.all,
            objectData.all
        ),

        booleanFailParams: [].concat(
            argumentsData.all,
            arrayData.all,
            functionData.all,
            numberData.all,
            stringData.nonBooleans,
            objectData.nonExternal
        ),

        primitiveBooleanFailParams: [].concat(
            argumentsData.all,
            arrayData.all,
            booleanData.constructed,
            booleanData.string,
            functionData.all,
            numberData.all,
            stringData.all,
            objectData.nonExternal
        ),

        stringBooleanFailParams: [].concat(
            argumentsData.all,
            arrayData.all,
            booleanData.constructed,
            booleanData.nonString,
            functionData.all,
            numberData.all,
            stringData.nonBooleans,
            objectData.nonExternal
        ),

        constructedBooleanFailParams: [].concat(
            argumentsData.all,
            arrayData.all,
            booleanData.nonConstructed,
            functionData.all,
            numberData.all,
            stringData.all,
            objectData.nonExternal
        ),

        numbersFailParams: [].concat(
            argumentsData.all,
            arrayData.all,
            booleanData.all,
            numberData.constructed,
            stringData.all,
            objectData.nonExternal,
            functionData.all,
            undefinedData.all
        ),

        functionsFailParams: [].concat(
            argumentsData.all,
            arrayData.all,
            booleanData.nonString,
            numberData.all,
            stringData.all,
            objectData.nonExternal,
            undefinedData.all
        ),

        stringsFailParams: [].concat(
            argumentsData.all,
            arrayData.all,
            booleanData.nonString,
            functionData.all,
            numberData.all,
            stringData.constructed,
            objectData.nonExternal,
            undefinedData.all
        ),

        definedPassParams: [].concat(
            argumentsData.all,        
            arrayData.all,
            booleanData.all,
            functionData.all,
            numberData.all,
            objectData.nonExternal,
            stringData.all
        ),

        objectFailParams: [].concat(
            arrayData.all,
            booleanData.primitive,
            functionData.all,
            numberData.nonConstructed,
            stringData.nonConstructed,
            undefinedData.all
        ),

        emptyStringFailParams: [].concat(
            argumentsData.all,
            arrayData.all,
            booleanData.all,
            functionData.all,
            numberData.all,
            objectData.nonExternal,
            stringData.nonEmpties,
            undefinedData.all
        ),

        nonEmptyStringFailParams: [].concat(
            argumentsData.all,
            arrayData.all,
            booleanData.nonString,
            functionData.all,
            numberData.all,
            objectData.nonExternal,
            stringData.empty,
            stringData.constructed,
            undefinedData.all
        ),

        emptyArrayFailParams: [].concat(
            argumentsData.all,
            arrayData.nonEmpties,
            booleanData.all,
            functionData.all,
            numberData.all,
            objectData.nonExternal,
            stringData.all,
            undefinedData.all
        ),

        nonEmptyArrayFailParams: [].concat(
            argumentsData.all,
            arrayData.empties,
            booleanData.all,
            functionData.all,
            numberData.all,
            objectData.nonExternal,
            stringData.all,
            undefinedData.all
        ),

        singleNonEmptyStringArrayFailParams: [].concat(
            argumentsData.all,
            arrayData.allNonSingleOrEmptyString,
            booleanData.all,
            functionData.all,
            numberData.all,
            objectData.nonExternal,
            stringData.all,
            undefinedData.all
        ),

        basicObjectPassParams: [].concat(
            argumentsData.all,
            arrayData.all,
            objectData.all,
            undefinedData.null
        ),

        basicObjectFailParams: [].concat(
            booleanData.nonConstructed,
            functionData.all,
            numberData.nonConstructed,
            stringData.nonConstructed,
            undefinedData.undefined
        ),

        basicNonArrayObjectPassParams: [].concat(
            argumentsData.all,
            objectData.all,
            undefinedData.null
        ),

        basicNonArrayObjectFailParams: [].concat(
            arrayData.all,
            booleanData.nonConstructed,
            functionData.all,
            numberData.nonConstructed,
            stringData.nonConstructed,
            undefinedData.undefined
        ),

        singleElementArrayFailParams: [].concat(
            argumentsData.all,
            arrayData.empties,
            arrayData.nonSingleElement,
            booleanData.all,
            functionData.all,
            numberData.all,
            objectData.nonExternal,
            stringData.all,
            undefinedData.all
        ),

        singleElementObjectArrayFailParams: [].concat(
            argumentsData.all,
            arrayData.empties,
            arrayData.singleElementEmptyString,
            arrayData.singleElementNonEmptyString,
            arrayData.singleElementNonStrings,
            arrayData.constructedSingleElementEmptyString,
            arrayData.constructedSingleElementNonEmptyString,
            arrayData.constructedSingleElementNonStringsNonObjects,
            arrayData.nonSingleElement,
            booleanData.all,
            functionData.all,
            numberData.all,
            stringData.all,
            objectData.nonExternal,
            undefinedData.all
        ),

        singleElementObjectArrayPassParams: [].concat(
            arrayData.singleElementEmptyObject,
            arrayData.constructedSingleElementEmptyObject
        ),

        emptyObjectFailParams: [].concat(
            arrayData.all,
            booleanData.nonConstructed,
            functionData.all,
            numberData.nonConstructed,
            objectData.constructedNonEmpty,
            stringData.nonConstructed,
            undefinedData.all
        ),

        nonEmptyObjectPassParams: [].concat(
            objectData.nonConstructed,
            objectData.nonEmptyArgument,
            objectData.constructedNonEmpty,
            stringData.constructedNonEmpties
        ),

        nonEmptyObjectFailParams: [].concat(
            argumentsData.all,
            arrayData.all,
            booleanData.all,
            functionData.all,
            numberData.all,
            objectData.nonExternalNonCreatedEmpties,
            objectData.createdEmpty,
            stringData.nonConstructed,
            stringData.constructedEmpties,
            undefinedData.all
        ),

        typeObjectParams: [].concat(
            nothingData.nothing,
            undefinedData.all
        ),

        isTypeObjectTypePassParams: {},

        isTypeObjectTypeFailParams: {},

        roundedFailParams: [].concat(
            argumentsData.all,
            arrayData.all,
            booleanData.all,
            functionData.all,
            numberData.constructedNonInfinites,
            numberData.infinites,
            numberData.nonConstructedNaNs,
            objectData.nonExternal,
            stringData.all,
            undefinedData.all
        ),

        emptyObjectPassParams: [].concat(
            objectData.constructedEmpties,
            argumentsData.all
        )
    };

/* isArguments */
paramsData.argumentsTestObject = {
    method: 'isArgumentsObject',
    pass: argumentsData.all,
    fail: paramsData.argumentsFailParams
};

/* isArray */
paramsData.arrayTestObject = {
    method: 'isArray',
    pass: arrayData.all,
    fail: paramsData.arrayFailParams
};

/* areArrays */
paramsData.areArraysPassParams = [
    [getFirstElementArrayOf(arrayData, 'constructed'), 'Arrays: constructed'],
    [getFirstElementArrayOf(arrayData, 'empty'), 'Arrays: empty'],
    [getFirstElementArrayOf(arrayData, 'all'), 'Arrays: all'],
    [getFirstElementArrayOf(arrayData, 'constructedEmpty'), 'Arrays: constructed empty']
];

paramsData.areArraysFailParams = [
    [
        [].concat(
            getFirstElementArrayOf(booleanData, 'all'),
            getFirstElementArrayOf(functionData, 'all'),
            getFirstElementArrayOf(numberData, 'all'),
            getFirstElementArrayOf(objectData, 'nonExternal'),
            getFirstElementArrayOf(stringData, 'all'),
            getFirstElementArrayOf(undefinedData, 'all')
        ),
        'Arrays: Everything non-array in an array([...]).'
    ],
    [
        [].concat(
            getFirstElementArrayOf(arrayData, 'all'),
            getFirstElementArrayOf(undefinedData, 'null')
        ),
        'Arrays: all and Undefineds: null'
    ]
];

paramsData.areArraysTestObject = {
    method: 'areArrays',

    single: {
        pass: arrayData.all,
        fail: paramsData.arrayFailParams
    },

    multiple: {
        pass: paramsData.areArraysPassParams,
        fail: paramsData.areArraysFailParams
    }
};

/* isNotArray */
paramsData.notArrayTestObject = {
    method: 'isNotArray',
    pass: paramsData.arrayFailParams,
    fail: arrayData.all
};

paramsData.primitiveBooleanTestObject = {
    method: 'isPrimitiveBoolean',
    pass: booleanData.primitive,
    fail: paramsData.primitiveBooleanFailParams
};

paramsData.stringBooleanTestObject = {
    method: 'isStringBoolean',
    pass: booleanData.string,
    fail: paramsData.stringBooleanFailParams
};

paramsData.constructedBooleanTestObject = {
    method: 'isConstructedBoolean',
    pass: booleanData.constructed,
    fail: paramsData.constructedBooleanFailParams
};

paramsData.booleanTestObject = {
    method: 'isBoolean',
    pass: booleanData.all,
    fail: paramsData.booleanFailParams
};

paramsData.notPrimitiveBooleanTestObject = {
    method: 'isNotPrimitiveBoolean',
    pass: paramsData.primitiveBooleanFailParams,
    fail: booleanData.primitive
};

paramsData.numbersTestObject = {
    method: 'isNumber',
    pass: numberData.nonConstructed,
    fail: paramsData.numbersFailParams
};

paramsData.notNumbersTestObject = {
    method: 'isNotNumber',
    pass: paramsData.numbersFailParams,
    fail: numberData.nonConstructed
};

paramsData.roundedTestObject = {
    method: 'isRounded',
    pass: numberData.nonConstructedFinites,
    fail: paramsData.roundedFailParams
};

paramsData.notRoundedTestObject = {
    method: 'isNotRounded',
    pass: paramsData.roundedFailParams,
    fail: numberData.nonConstructedFinites
};

paramsData.integerTestObject = {
    method: 'isInteger',
    pass: numberData.nonConstructedFinites,
    fail: paramsData.roundedFailParams
};

paramsData.notIntegerTestObject = {
    method: 'isNotInteger',
    pass: paramsData.roundedFailParams,
    fail: numberData.nonConstructedFinites
};

paramsData.floatFailParams = [].concat(
    numberData.nonFloats,
    numberData.constructedNonZeroesFloat
);

paramsData.floatTestObject = {
    method: 'isFloat',
    pass: numberData.nonConstructedNonZeroesFloat,
    fail: paramsData.floatFailParams
};

paramsData.notFloatTestObject = {
    method: 'isNotFloat',
    pass: paramsData.floatFailParams,
    fail: numberData.nonConstructedNonZeroesFloat
};

/* isFunction */
paramsData.functionTestObject = {
    method: 'isFunction',
    pass: functionData.all,
    fail: paramsData.functionsFailParams
};

/* isNotFunction */
paramsData.notFunctionTestObject = {
    method: 'isNotFunction',
    pass: paramsData.functionsFailParams,
    fail: functionData.all
};

/* areAnyNotFunctions */
paramsData.areAnyNotFunctionsPassParams = [
    [getFirstElementArrayOf(paramsData, 'functionsFailParams'), 'Functions: Non-Function Fail params.'],
    [
        [].concat(
            getFirstElementArrayOf(paramsData, 'functionsFailParams'),
            getFirstElementArrayOf(paramsData, 'functionsFailParams')
        ),
        'Functions: Non-Function Fail params x2.'
    ],
    [
        [].concat(
            getFirstElementArrayOf(arrayData, 'all'),
            getFirstElementArrayOf(objectData, 'nonExternal'),
            getFirstElementArrayOf(undefinedData, 'all')
        ),
        'Functions: All of Array, Object and Undefined Fail Params.'
    ],
    [
        [].concat(
            getFirstElementArrayOf(functionData, 'all'),
            getFirstElementArrayOf(objectData, 'nonExternal')
        ),
        'Functions: All Function params, and Object Fail params.'
    ]
];

paramsData.areAnyNotFunctionsFailParams = [
    [getFirstElementArrayOf(functionData, 'all'), 'Functions: All Function params.'],

];

paramsData.areAnyNotFunctionsTestObject = {
    method: 'areAnyNotFunctions',
    single: {
        pass: paramsData.functionsFailParams,
        fail: functionData.all
    },
    multiple: {
        pass: paramsData.areAnyNotFunctionsPassParams,
        fail: paramsData.areAnyNotFunctionsFailParams
    }
};

/* isString */
paramsData.stringTestObject = {
    method: 'isString',
    pass: stringData.nonConstructed,
    fail: paramsData.stringsFailParams
};

/* areStrings */
paramsData.areStringsPassParams = [
    [getFirstElementArrayOf(stringData, 'nonConstructed'), 'All of the non-constructed strings.']
];

paramsData.areStringsFailParams = [
    [getFirstElementArrayOf(paramsData, 'stringsFailParams'), 'Strings: All of non Strings.'],
    [
        [].concat(
            getFirstElementArrayOf(numberData, 'all'),
            getFirstElementArrayOf(stringData, 'nonConstructed')
        ),
        'Strings: All Number and nonConstructed String Data Fail Params.'
    ],
    [
        [].concat(
            getFirstElementArrayOf(stringData, 'nonConstructed'),
            getFirstElementArrayOf(numberData, 'all')
        ),
        'Strings: All nonConstructed String and Number Data Fail Params.'
    ],
    [
        [].concat(
            getFirstElementArrayOf(functionData, 'all'),
            getFirstElementArrayOf(objectData, 'nonExternal'),
            getFirstElementArrayOf(undefinedData, 'all')
        ),
        'Strings: All of Function, nonExternal Object, and Undefined Data Fail Params.'
    ],
    [
        [].concat(
            getFirstElementArrayOf(arrayData, 'all'),
            getFirstElementArrayOf(booleanData, 'all'),
            getFirstElementArrayOf(functionData, 'all'),
            getFirstElementArrayOf(numberData, 'all'),
            getFirstElementArrayOf(objectData, 'nonExternal'),
            getFirstElementArrayOf(stringData, 'constructed'),
            getFirstElementArrayOf(undefinedData, 'all')
        ),
        'Strings: All constructed String, and everything non-string Data Fail Params.'
    ]
];

paramsData.areStringsTestObject = {
    method: 'areStrings',

    single: {
        pass: stringData.nonConstructed,
        fail: paramsData.stringsFailParams
    },

    multiple: {
        pass: paramsData.areStringsPassParams,
        fail: paramsData.areStringsFailParams
    }
};

/* isNotString */
paramsData.notStringTestObject = {
    method: 'isNotString',
    pass: paramsData.stringsFailParams,
    fail: stringData.nonConstructed
};

/* areNoneStrings */
paramsData.areNoneStringsPassParams = [
    [getFirstElementArrayOf(paramsData, 'stringsFailParams'), 'Strings: All of non Strings.'],
    [
        [].concat(
            getFirstElementArrayOf(functionData, 'all'),
            getFirstElementArrayOf(objectData, 'nonExternal'),
            getFirstElementArrayOf(undefinedData, 'all')
        ),
        'Strings: All of Function, nonExternal Object, and Undefined Data Fail Params.'
    ]
];

paramsData.areNoneStringsFailParams = [
    [getFirstElementArrayOf(stringData, 'nonConstructed'), 'Strings: All of nonConstructed Strings.'],
    [
        [].concat(
            getFirstElementArrayOf(functionData, 'all'),
            getFirstElementArrayOf(stringData, 'nonConstructed')
        ),
        'Strings: All of Function and nonConstructed Strings.'
    ],
    [
        [].concat(
            getFirstElementArrayOf(objectData, 'nonExternal'),
            getFirstElementArrayOf(functionData, 'all'),
            getFirstElementArrayOf(stringData, 'false')
        ),
        'Strings: All of nonExternal Object, Function, and false String Data Fail Params.'
    ],
    [
        [].concat(
            getFirstElementArrayOf(numberData, 'all'),
            getFirstElementArrayOf(stringData, 'nonConstructed')
        ),
        'Strings: All Number and nonConstructed String Data Fail Params.'
    ],
    [
        [].concat(
            getFirstElementArrayOf(stringData, 'nonConstructed'),
            getFirstElementArrayOf(numberData, 'all')
        ),
        'Strings: All nonConstructed String and Number Data Fail Params.'
    ]
];

paramsData.areNoneStringsTestObject = {
    method: 'areNoneStrings',

    single: {
        pass: paramsData.stringsFailParams,
        fail: stringData.nonConstructed
    },

    multiple: {
        pass: paramsData.areNoneStringsPassParams,
        fail: paramsData.areNoneStringsFailParams
    }
};

/* areAnyStrings */
paramsData.areAnyStringsTestObject = {
    method: 'areAnyStrings',
    single: {
        pass: stringData.nonConstructed,
        fail: paramsData.stringsFailParams
    },
    multiple: {
        pass: paramsData.areNoneStringsFailParams,
        fail: paramsData.areNoneStringsPassParams
    }
};

/* isEmptyArray */
paramsData.emptyArrayTestObject = {
    method: 'isEmptyArray',
    pass: arrayData.empties,
    fail: paramsData.emptyArrayFailParams
};

/* areEmptyArrays */
paramsData.areEmptyArraysPassParams = [
    [getFirstElementArrayOf(arrayData, 'empties'), 'Arrays: empties.'],
    [
        [].concat(
            getFirstElementArrayOf(arrayData, 'empties'),
            getFirstElementArrayOf(arrayData, 'empties')
        ),
        'Arrays: empties x2.'
    ]
];

paramsData.areEmptyArraysFailParams = [
    [getFirstElementArrayOf(paramsData, 'emptyArrayFailParams'), 'Arrays: All Empty Fail Params.'],
    [
        [].concat(
            getFirstElementArrayOf(arrayData, 'nonEmpties'),
            getFirstElementArrayOf(booleanData, 'all')
        ),
        'Arrays: All Non-empty Arrays and Boolean Fail Params.'
    ],
    [
        [].concat(
            getFirstElementArrayOf(functionData, 'all'),
            getFirstElementArrayOf(stringData, 'all'),
            getFirstElementArrayOf(objectData, 'nonExternal')
        ),
        'Arrays: All Non-empty Function, String, and Object Params.'
    ]
];

paramsData.areEmptyArraysTestObject = {
    method: 'areEmptyArrays',

    single: {
        pass: arrayData.empties,
        fail: paramsData.emptyArrayFailParams
    },

    multiple: {
        pass: paramsData.areEmptyArraysPassParams,
        fail: paramsData.areEmptyArraysFailParams
    }
};

/* areAnyEmptyArrays */
paramsData.areAnyEmptyArraysPassParams = [
    [getFirstElementArrayOf(arrayData, 'empties'), 'Arrays: Empties.'],
    [
        [].concat(
            getFirstElementArrayOf(stringData, 'all'),
            getFirstElementArrayOf(arrayData, 'empties')
        ),
        'Arrays: All of StringData, and Empty Array pass params.'
    ]
];

paramsData.areAnyEmptyArraysFailParams = [
    [getFirstElementArrayOf(stringData, 'all'), 'Arrays: All of String Data Fail Params.'],
    [
        [].concat(
            getFirstElementArrayOf(stringData, 'all'),
            getFirstElementArrayOf(functionData, 'all')
        ),
        'Arrays: All of String and Function Data Fail Params.'
    ],
    [
        [].concat(
            getFirstElementArrayOf(stringData, 'all'),
            getFirstElementArrayOf(functionData, 'all'),
            getFirstElementArrayOf(objectData, 'nonExternal')
        ),
        'Arrays: All of String, Function and nonExternal Object Data Fail Params.'
    ]
];

paramsData.areAnyEmptyArraysTestObject = {
    method: 'areAnyEmptyArrays',

    single: {
        pass: arrayData.empties,
        fail: paramsData.emptyArrayFailParams
    },

    multiple: {
        pass: paramsData.areAnyEmptyArraysPassParams,
        fail: paramsData.areAnyEmptyArraysFailParams
    }
};



/* isEmptyString */
paramsData.emptyStringTestObject = {
    method: 'isEmptyString',
    pass: stringData.empty,
    fail: paramsData.emptyStringFailParams
};

/* areEmptyStrings */
paramsData.areEmptyStringsPassParams = [
    [getFirstElementArrayOf(stringData, 'empty'), 'Strings: empty.'],
    [
        [].concat(
            getFirstElementArrayOf(stringData, 'empty'),
            getFirstElementArrayOf(stringData, 'empty')
        ),
        'Strings: empty x2.'
    ]
];

paramsData.areEmptyStringsFailParams = [
    [getFirstElementArrayOf(paramsData, 'emptyStringFailParams'), 'Strings: All empty Fail Params.'],
    [getFirstElementArrayOf(arrayData, 'all'), 'Strings: All Array empty Fail Params.'],
    [getFirstElementArrayOf(undefinedData, 'all'), 'Strings: All Undefined empty Fail Params.'],
    [
        [].concat(
            getFirstElementArrayOf(arrayData, 'all'),
            getFirstElementArrayOf(undefinedData, 'all')
        ),
        'Strings: All of Array and Undefined Fail Params.'
    ],
    [
        [].concat(
            getFirstElementArrayOf(arrayData, 'all'),
            getFirstElementArrayOf(numberData, 'all'),
            getFirstElementArrayOf(stringData, 'nonEmpties')
        ),
        'Strings: All of Array, Number and String Fail Params.'
    ]
];

paramsData.areEmptyStringsTestObject = {
    method: 'areEmptyStrings',

    single: {
        pass: stringData.empty,
        fail: paramsData.emptyStringFailParams
    },

    multiple: {
        pass: paramsData.areEmptyStringsPassParams,
        fail: paramsData.areEmptyStringsFailParams
    }
};

/* areAnyEmptyStrings */
paramsData.areAnyEmptyStringsPassParams = [
    [getFirstElementArrayOf(stringData, 'empty'), 'Strings: Non-constructed empty.'],
    [getFirstElementArrayOf(stringData, 'empties'), 'Strings: All empties.'],
    [
        [].concat(
            getFirstElementArrayOf(arrayData, 'all'),
            getFirstElementArrayOf(stringData, 'empties')
        ),
        'Strings: All of Array Data, and empty Strings pass params.'
    ]
];

paramsData.areAnyEmptyStringsFailParams = [
    [getFirstElementArrayOf(stringData, 'nonEmpties'), 'Strings: All of String Data Fail Params.'],
    [
        [].concat(
            getFirstElementArrayOf(stringData, 'nonEmpties'),
            getFirstElementArrayOf(functionData, 'all')
        ),
        'Strings: All of nonEmpty String and Function Data Fail Params.'
    ],
    [
        [].concat(
            getFirstElementArrayOf(stringData, 'nonEmpties'),
            getFirstElementArrayOf(functionData, 'all'),
            getFirstElementArrayOf(objectData, 'nonExternal')
        ),
        'Strings: All of nonEmpty String, Function and nonExternal Object Data Fail Params.'
    ],
    [
        [].concat(
            getFirstElementArrayOf(arrayData, 'all'),
            getFirstElementArrayOf(functionData, 'all'),
            getFirstElementArrayOf(objectData, 'nonExternal'),
            getFirstElementArrayOf(stringData, 'nonEmpties')
        ),
        'Strings: All of Array, Function, nonExternal Object and nonEmpty String Fail Params.'
    ]
];

paramsData.areAnyEmptyStringsTestObject = {
    method: 'areAnyEmptyStrings',

    single: {
        pass: stringData.empty,
        fail: paramsData.emptyStringFailParams
    },

    multiple: {
        pass: paramsData.areAnyEmptyStringsPassParams,
        fail: paramsData.areAnyEmptyStringsFailParams
    }
};



/* isNonEmptyString */
paramsData.nonEmptyStringTestObject = {
    method: 'isNonEmptyString',
    pass: stringData.nonEmpties,
    fail: paramsData.nonEmptyStringFailParams
};

/* areNonEmptyStrings */
paramsData.areNonEmptyStringsPassParams = [
    [getFirstElementArrayOf(stringData, 'nonEmpties'), 'Strings: Non-Empties.'],
    [
        [].concat(
            getFirstElementArrayOf(stringData, 'nonEmpties'),
            getFirstElementArrayOf(stringData, 'nonEmpties')
        ),
        'Strings: Non-Empties x2.'
    ]
];

paramsData.areNonEmptyStringsFailParams = [
    [getFirstElementArrayOf(paramsData, 'nonEmptyStringFailParams'), 'Strings: All Non-empty Fail Params.'],
    [
        [].concat(
            getFirstElementArrayOf(stringData, 'empty'),
            getFirstElementArrayOf(stringData, 'constructed'),
            getFirstElementArrayOf(undefinedData, 'all'),
            getFirstElementArrayOf(booleanData, 'nonString')
        ),
        'Strings: All Non-Empty String, Undefined and Boolean Fail Params.'
    ],
    [
        [].concat(
            getFirstElementArrayOf(numberData, 'all'),
            getFirstElementArrayOf(functionData, 'all'),
            getFirstElementArrayOf(objectData, 'nonExternal')
        ),
        'Strings: All Non-Empty ... Fail Params.'
    ]
];

paramsData.areNonEmptyStringsTestObject = {
    method: 'areNonEmptyStrings',

    single: {
        pass: stringData.nonEmpties,
        fail: paramsData.nonEmptyStringFailParams
    },

    multiple: {
        pass: paramsData.areNonEmptyStringsPassParams,
        fail: paramsData.areNonEmptyStringsFailParams
    }
};



/* isNonEmptyArray */
paramsData.nonEmptyArrayTestObject = {
    method: 'isNonEmptyArray',
    pass: arrayData.nonEmpties,
    fail: paramsData.nonEmptyArrayFailParams
};

/* areNonEmptyArrays */
paramsData.areNonEmptyArraysPassParams = [
    [getFirstElementArrayOf(arrayData, 'nonEmpties'), 'Arrays: all Non-Empties.'],
    [
        [].concat(
            getFirstElementArrayOf(arrayData, 'singleElementNonEmptyString'),
            getFirstElementArrayOf(arrayData, 'singleElementNonStrings')
        ),
        'Arrays: Non-Empty string and non string Arrays.'
    ]
];

paramsData.areNonEmptyArraysFailParams = [
    [getFirstElementArrayOf(paramsData, 'nonEmptyArrayFailParams'), 'Arrays: All non-Empty Fail Params.']
];

paramsData.areNonEmptyArraysTestObject = {
    method: 'areNonEmptyArrays',
    single: {
        pass: arrayData.nonEmpties,
        fail: paramsData.nonEmptyArrayFailParams
    },
    multiple: {
        pass: paramsData.areNonEmptyArraysPassParams,
        fail: paramsData.areNonEmptyArraysFailParams
    }
};

paramsData.notNonEmptyArrayTestObject = {
    method: 'isNotNonEmptyArray',
    pass: paramsData.nonEmptyArrayFailParams,
    fail: arrayData.nonEmpties
};

paramsData.notNonEmptyStringTestObject = {
    method: 'isNotNonEmptyString',
    pass: paramsData.nonEmptyStringFailParams,
    fail: stringData.nonConstructedNonEmpty
};

paramsData.baseDefinedTestObject = {
    method: 'isBaseDefined',
    pass: definedData.baseDefined,
    fail: undefinedData.undefined,
};

paramsData.looselyDefinedTestObject = {
    method: 'isLooselyDefined',
    pass: definedData.looselyDefined,
    fail: definedData.looselyUndefined
};

/* areDefined */
paramsData.areDefinedPassParams = [
    [getFirstElementArrayOf(definedData, 'looselyDefined'), 'Defined: All of loosely defined.'],
    [
        [].concat(
            getFirstElementArrayOf(numberData, 'all'),
            getFirstElementArrayOf(stringData, 'nonConstructed')
        ),
        'Defined: All Number and nonConstructed String Data.'
    ],
    [
        [].concat(
            getFirstElementArrayOf(stringData, 'nonConstructed'),
            getFirstElementArrayOf(numberData, 'all')
        ),
        'Defined: All nonConstructed String and Number Data.'
    ],
    [
        [].concat(
            getFirstElementArrayOf(functionData, 'all'),
            getFirstElementArrayOf(objectData, 'nonExternal')
        ),
        'Defined: All of Function, nonExternal Object Data.'
    ],
    [
        [].concat(
            getFirstElementArrayOf(arrayData, 'all'),
            getFirstElementArrayOf(booleanData, 'all'),
            getFirstElementArrayOf(functionData, 'all'),
            getFirstElementArrayOf(numberData, 'all'),
            getFirstElementArrayOf(objectData, 'nonExternal'),
            getFirstElementArrayOf(stringData, 'constructed')
        ),
        'Defined: All of non-undefined.'
    ]
];

paramsData.areDefinedFailParams = [
    [getFirstElementArrayOf(definedData, 'looselyUndefined'), 'Defined: All of loosely undefined.']
];

paramsData.areDefinedTestObject = {
    method: 'areDefined',

    single: {
        pass: definedData.looselyDefined,
        fail: definedData.looselyUndefined
    },

    multiple: {
        pass: paramsData.areDefinedPassParams,
        fail: paramsData.areDefinedFailParams
    }
};

paramsData.strictlyDefinedTestObject = {
    method: 'isStrictlyDefined',
    pass: definedData.strictlyDefined,
    fail: definedData.strictlyUndefined
};

paramsData.truthyDefinedTestObject = {
    method: 'isTruthyDefined',
    pass: definedData.truthyDefined,
    fail: definedData.truthyUndefined
};

paramsData.objectTestObject = {
    method: 'isObject',
    pass: objectData.all,
    fail: paramsData.objectFailParams
};

paramsData.basicObjectTestObject = {
    method: 'isBasicObject',
    pass: paramsData.basicObjectPassParams,
    fail: paramsData.basicObjectFailParams
};

paramsData.basicNonArrayObjectTestObject = {
    method: 'isBasicNonArrayObject',
    pass: paramsData.basicNonArrayObjectPassParams,
    fail: paramsData.basicNonArrayObjectFailParams
};

paramsData.notObjectTestObject = {
    method: 'isNotObject',
    pass: paramsData.objectFailParams,
    fail: objectData.all
};

paramsData.undefinedTestObject = {
    method: 'isUndefined',
    pass: definedData.looselyUndefined,
    fail: paramsData.definedPassParams
};

paramsData.emptyObjectTestObject = {
    method: 'isEmptyObject',
    pass: paramsData.emptyObjectPassParams,
    fail: paramsData.emptyObjectFailParams
};

paramsData.nonEmptyObjectTestObject = {
    method: 'isNonEmptyObject',
    pass: paramsData.nonEmptyObjectPassParams,
    fail: paramsData.nonEmptyObjectFailParams
};

paramsData.notNonEmptyObjectTestObject = {
    method: 'isNotNonEmptyObject',
    pass: paramsData.nonEmptyObjectFailParams,
    fail: paramsData.nonEmptyObjectPassParams
};

paramsData.singleElementArrayTestObject = {
    method: 'isSingleElementArray',
    pass: arrayData.singleElement,
    fail: paramsData.singleElementArrayFailParams
};

paramsData.singleNonEmptyStringArrayTestObject = {
    method: 'isSingleNonEmptyStringArray',
    pass: arrayData.singleElementNonEmptyStrings,
    fail: paramsData.singleNonEmptyStringArrayFailParams
};

paramsData.singleElementObjectArrayTestObject = {
    method: 'isSingleElementObjectArray',
    pass: paramsData.singleElementObjectArrayPassParams,
    fail: paramsData.singleElementObjectArrayFailParams
};

/* Uncommon tests */
paramsData.getSingleNonEmptyStringFromArrayTestObject = {
    method: 'getSingleNonEmptyStringFromArray',
    pass: arrayData.singleElementNonEmptyStrings,
    fail: paramsData.singleNonEmptyStringArrayFailParams
};

/* isType */
paramsData.isTypeObjectTypePassParams[typeNamesData['boolean'][0][0]] = [].concat(
    booleanData.primitive
);

paramsData.isTypeObjectTypePassParams[typeNamesData['function'][0][0]] = [].concat(
    functionData.all
);

paramsData.isTypeObjectTypePassParams[typeNamesData['number'][0][0]] = [].concat(
    numberData.nonConstructed
);

paramsData.isTypeObjectTypePassParams[typeNamesData['object'][0][0]] = [].concat(
    objectData.all,
    arrayData.all,
    booleanData.constructed,
    numberData.constructed,
    stringData.constructed
);

paramsData.isTypeObjectTypePassParams[typeNamesData['string'][0][0]] = [].concat(
    stringData.nonConstructed
);

paramsData.isTypeObjectTypeFailParams[typeNamesData['boolean'][0][0]] = [].concat(
    paramsData.primitiveBooleanFailParams
);

paramsData.isTypeObjectTypeFailParams[typeNamesData['function'][0][0]] = [].concat(
    paramsData.functionsFailParams
);

paramsData.isTypeObjectTypeFailParams[typeNamesData['number'][0][0]] = [].concat(
    paramsData.numbersFailParams
);

paramsData.isTypeObjectTypeFailParams[typeNamesData['object'][0][0]] = [].concat(
    functionData.all
);

paramsData.isTypeObjectTypeFailParams[typeNamesData['string'][0][0]] = [].concat(
    paramsData.stringsFailParams
);

paramsData.typeTestNoParamsFailParams = [
    [undefined, 'isType: no parameters Data Fail Params.']
];

paramsData.areConditionGuardNoParamsFailParams = [
    [undefined, 'areConditionGuard: no parameters Data Fail Params.']
];

paramsData.typeTestObject = {
    method: 'isType',

    noParameters: {
        pass: undefined,
        fail: undefined
    },

    firstParameters: {
        pass: undefined,
        fail: paramsData.typeObjectParams
    },

    secondParameters: {
        pass: stringData.basicTypeLackName,
        fail: stringData.basicTypeNames
    },

    bothParameters: {
        keyArray: typeNamesData.keyArray,
        pass: paramsData.isTypeObjectTypePassParams,
        fail: paramsData.isTypeObjectTypeFailParams
    }
};

/* copy of stu.definedExclusionsObject */
paramsData.definedExclusionsObject = [
    [
        {
            baseDefined: [undefined],
            looselyDefined: [undefined, null],
            strictlyDefined: [undefined, null, false],
            truthyDefined: [undefined, null, false, 0, Number.NaN, '']
        },
        'stringularity-type-utils.js DefinedExclusions.'
    ]
];

paramsData.objectKeyTestObject = {
    method: 'isObjectKey',

    parameterList: [
        'object',
        'key'
    ],

    noParameters: {
        pass: undefined,
        fail: paramsData.areConditionGuardNoParamsFailParams
    },

    firstParameters: {
        pass: undefined,
        fail: allData
    },

    secondParameters: {
        pass: undefined,
        fail: allData
    },

    bothParameters: {
        paramArray: [
            'object',
            'key'
        ],
        pass: {
            object: paramsData.definedExclusionsObject,
            key: [
                ['baseDefined', 'baseDefined key.'],
                ['looselyDefined', 'looselyDefined key.'],
                ['strictlyDefined', 'strictlyDefined key.'],
                ['truthyDefined', 'truthyDefined key.']
            ]
        },
        fail: {
            firstMismatch: {
                object: [
                    [{}, 'Object: Empty Object.']
                ],
                key: [
                    ['baseDefined', 'baseDefined key.'],
                    ['looselyDefined', 'looselyDefined key.'],
                    ['strictlyDefined', 'strictlyDefined key.'],
                    ['truthyDefined', 'truthyDefined key.']
                ]
            },
            secondMismatch: {
                object: paramsData.definedExclusionsObject,
                key: definedData.baseDefined
            },
            bothMismatch: {
                object: [
                    [{}, 'Object: Empty Object.']
                ],
                key: objectData.nonExternal
            }
        }
    }
};

paramsData.modDefinedExclusionsObject = [
    [
        {
            baseDefined: [undefined],
            looselyDefined: [undefined, null],
            strictlyDefined: [undefined, null, false],
            truthyDefined: [undefined, null, false, 0, Number.NaN, ''],
            undefKey: undefined
        },
        'stringularity-type-utils.js DefinedExclusions modified(undefKey: undefined).'
    ]
];

paramsData.definedObjectKeyTestObject = {
    method: 'isDefinedObjectKey',

    parameterList: [
        'object',
        'key'
    ],

    noParameters: {
        pass: undefined,
        fail: paramsData.areConditionGuardNoParamsFailParams
    },

    firstParameters: {
        pass: undefined,
        fail: allData
    },

    secondParameters: {
        pass: undefined,
        fail: allData
    },

    bothParameters: {
        paramArray: [
            'object',
            'key'
        ],
        pass: {
            object: paramsData.modDefinedExclusionsObject,
            key: [
                ['baseDefined', 'baseDefined key.'],
                ['looselyDefined', 'looselyDefined key.'],
                ['strictlyDefined', 'strictlyDefined key.'],
                ['truthyDefined', 'truthyDefined key.']
            ]
        },
        fail: {
            firstMismatch: {
                object: [
                    [{}, 'Object: Empty Object.']
                ],
                key: [
                    ['baseDefined', 'baseDefined key.'],
                    ['looselyDefined', 'looselyDefined key.'],
                    ['strictlyDefined', 'strictlyDefined key.'],
                    ['truthyDefined', 'truthyDefined key.']
                ]
            },
            secondMismatch: {
                object: paramsData.modDefinedExclusionsObject,
                key: [].concat(
                    ['undefKey', 'undefKey key.'],
                    definedData.looselyDefined
                )
            },
            bothMismatch: {
                object: [
                    [{}, 'Object: Empty Object.']
                ],
                key: objectData.nonExternal
            }
        }
    }
};

paramsData.definedCoreTestObject = {
    method: 'isDefinedCore',

    parameterList: [
        'object',
        'defineType',
        'defineExclusionsObject'
    ],

    noParameters: {
        pass: undefined,
        fail: paramsData.areConditionGuardNoParamsFailParams
    },

    firstParameters: {
        pass: undefined,
        fail: allData
    },

    secondParameters: {
        pass: undefined,
        fail: allData
    },
    
    thirdParameters: {
        pass: undefined,
        fail: allData
    },

    allParameters: {
        paramArray: [
            'object',
            'defineExclusionsObject'
        ],
        pass: {
            keyArray: [
                'baseDefined',
                'looselyDefined',
                'strictlyDefined',
                'truthyDefined'
            ],
            'baseDefined': {
                object: definedData.baseDefined,
                defineExclusionsObject: paramsData.definedExclusionsObject
            },
            'looselyDefined': {
                object: definedData.looselyDefined,
                defineExclusionsObject: paramsData.definedExclusionsObject
            },
            'strictlyDefined': {
                object: definedData.strictlyDefined,
                defineExclusionsObject: paramsData.definedExclusionsObject
            },
            'truthyDefined': {
                object: definedData.truthyDefined,
                defineExclusionsObject: paramsData.definedExclusionsObject
            }
        },
        fail: {
            keyArray: [
                'baseDefined',
                'looselyDefined',
                '',
                3,
                'strictlyDefined',
                'truthyDefined',
                'no'
            ],
            'baseDefined': {
                firstMismatch: {
                    object: undefinedData.undefined,
                    defineExclusionsObject: paramsData.definedExclusionsObject
                },
                secondMismatch: {
                    object: numberData.falsy,
                    defineExclusionsObject: [
                        [{}, 'Object: empty object']
                    ]
                },
                bothMismatch: {
                    object: undefinedData.undefined,
                    defineExclusionsObject: [
                        [{}, 'Object: empty object']
                    ]
                }
            },
            'looselyDefined': {
                firstMismatch: {
                    object: definedData.looselyUndefined,
                    defineExclusionsObject: paramsData.definedExclusionsObject
                },
                secondMismatch: {
                    object: numberData.falsy,
                    defineExclusionsObject: [
                        [{}, 'Object: empty object']
                    ]
                },
                bothMismatch: {
                    object: definedData.looselyUndefined,
                    defineExclusionsObject: [
                        [{}, 'Object: empty object']
                    ]
                }
            },
            'strictlyDefined': {
                firstMismatch: {
                    object: definedData.strictlyUndefined,
                    defineExclusionsObject: paramsData.definedExclusionsObject
                },
                secondMismatch: {
                    object: numberData.falsy,
                    defineExclusionsObject: [
                        [{}, 'Object: empty object']
                    ]
                },
                bothMismatch: {
                    object: definedData.strictlyUndefined,
                    defineExclusionsObject: [
                        [{}, 'Object: empty object']
                    ]
                }
            },
            'truthyDefined': {
                firstMismatch: {
                    object: definedData.truthyUndefined,
                    defineExclusionsObject: paramsData.definedExclusionsObject
                },
                secondMismatch: {
                    object: numberData.nonZeroes,
                    defineExclusionsObject: [
                        [{}, 'Object: empty object']
                    ]
                },
                bothMismatch: {
                    object: definedData.truthyUndefined,
                    defineExclusionsObject: [
                        [{}, 'Object: empty object']
                    ]
                }
            },
            3: {
                firstMismatch: {
                    object: definedData.looselyUndefined,
                    defineExclusionsObject: paramsData.definedExclusionsObject
                },
                secondMismatch: {
                    object: numberData.falsy,
                    defineExclusionsObject: [
                        [{}, 'Object: empty object']
                    ]
                },
                bothMismatch: {
                    object: definedData.looselyUndefined,
                    defineExclusionsObject: [
                        [{}, 'Object: empty object']
                    ]
                }
            },
            '': {
                firstMismatch: {
                    object: definedData.looselyUndefined,
                    defineExclusionsObject: paramsData.definedExclusionsObject
                },
                secondMismatch: {
                    object: numberData.falsy,
                    defineExclusionsObject: [
                        [{}, 'Object: empty object']
                    ]
                },
                bothMismatch: {
                    object: definedData.looselyUndefined,
                    defineExclusionsObject: [
                        [{}, 'Object: empty object']
                    ]
                }
            },
            'no': {
                firstMismatch: {
                    object: definedData.truthyUndefined,
                    defineExclusionsObject: paramsData.definedExclusionsObject
                },
                secondMismatch: {
                    object: numberData.nonZeroes,
                    defineExclusionsObject: [
                        [{}, 'Object: empty object']
                    ]
                },
                bothMismatch: {
                    object: definedData.truthyUndefined,
                    defineExclusionsObject: [
                        [{}, 'Object: empty object']
                    ]
                }
            }
        }
    }
};

paramsData.undefinedCoreTestObject = {
    method: 'isUndefinedCore',

    parameterList: [
        'object',
        'defineType',
        'defineExclusionsObject'
    ],

    allParameters: {
        paramArray: [
            'object',
            'defineExclusionsObject'
        ],
        pass: {
            keyArray: [
                'baseDefined',
                'looselyDefined',
                'strictlyDefined',
                'truthyDefined',
                3,
                '',
                'no'
            ],
            'baseDefined': {
                object: undefinedData.undefined,
                defineExclusionsObject: [
                    [undefined, 'Undefined: undefined.']
                ]
            },
            'looselyDefined': {
                object: definedData.looselyUndefined,
                defineExclusionsObject: [
                    [undefined, 'Undefined: undefined.']
                ]
            },
            'strictlyDefined': {
                object: definedData.strictlyUndefined,
                defineExclusionsObject: [
                    [undefined, 'Undefined: undefined.']
                ]
            },
            'truthyDefined': {
                object: definedData.truthyUndefined,
                defineExclusionsObject: [
                    [undefined, 'Undefined: undefined.']
                ]
            },
            3: {
                object: definedData.looselyUndefined,
                defineExclusionsObject: [
                    [{}, 'Object: empty object.'],
                    [undefined, 'Undefined: undefined.']
                ]
            },
            '': {
                object: definedData.looselyUndefined,
                defineExclusionsObject: [
                    [{}, 'Object: empty object'],
                    [undefined, 'Undefined: undefined.']
                ]
            },
            'no': {
                object: definedData.truthyUndefined,
                defineExclusionsObject: [
                    [{}, 'Object: empty object'],
                    [undefined, 'Undefined: undefined.']
                ]
            }
        },
        fail: {
            keyArray: [
                'baseDefined',
                'looselyDefined',
                'strictlyDefined',
                'truthyDefined'
            ],
            'baseDefined': {
                firstMismatch: {
                    object: definedData.baseDefined,
                    defineExclusionsObject: paramsData.definedExclusionsObject
                },
                bothMismatch: {
                    object: definedData.baseDefined,
                    defineExclusionsObject: [
                        [undefined, 'Undefined: undefined.']
                    ]
                }
            },
            'looselyDefined': {
                firstMismatch: {
                    object: definedData.looselyDefined,
                    defineExclusionsObject: paramsData.definedExclusionsObject
                },
                bothMismatch: {
                    object: definedData.looselyDefined,
                    defineExclusionsObject: [
                        [undefined, 'Undefined: undefined.']
                    ]
                }
            },
            'strictlyDefined': {
                firstMismatch: {
                    object: definedData.strictlyDefined,
                    defineExclusionsObject: paramsData.definedExclusionsObject
                },
                bothMismatch: {
                    object: definedData.strictlyDefined,
                    defineExclusionsObject: [
                        [undefined, 'Undefined: undefined.']
                    ]
                }
            },
            'truthyDefined': {
                firstMismatch: {
                    object: definedData.truthyDefined,
                    defineExclusionsObject: paramsData.definedExclusionsObject
                },
                bothMismatch: {
                    object: definedData.truthyDefined,
                    defineExclusionsObject: [
                        [undefined, 'Undefined: undefined.']
                    ]
                }
            }
        }
    }
};

paramsData.trueFunctionParam = [
    [function trueFunction() {
        'use strict';
        return true;
    }, 'True Function.']
];

paramsData.falseFunctionParam = [
    [function falseFunction() {
        'use strict';
        return false;
    }, 'False Function.']
];

paramsData.isStringFunctionParam = [
    [function isStringFunction(object) {
        'use strict';
        return typeof object === 'string';
    }, 'Is String Function.']
];

paramsData.emptyStringFunctionParam = [
    [function isStringFunction(object) {
        'use strict';
        return '';
    }, 'Empty String Function.']
];

paramsData.undefinedParam = [
    [undefined, 'Undefined.']
];
paramsData.areConditionGuardTestObject = {
    method: 'areConditionGuard',

    parameterList: [
        'args',
        'conditionFunction',
        'cardinality'
    ],

    noParameters: {
        pass: undefined,
        fail: paramsData.areConditionGuardNoParamsFailParams
    },

    firstParameters: {
        pass: undefined,
        fail: allData
    },

    secondParameters: {
        pass: undefined,
        fail: allData
    },
    
    thirdParameters: {
        pass: undefined,
        fail: allData
    },

    allParameters: {
        paramArray: [
            'args',
            'conditionFunction'
        ],
        pass: {
            keyArray: [
                'all',
                'any',
                'none'
            ],
            'all': {
                args: definedData.looselyDefined,
                conditionFunction: paramsData.trueFunctionParam
            },
            'any': {
                args: paramsData.areNoneStringsFailParams,
                conditionFunction: paramsData.isStringFunctionParam
            },
            'none': {
                args: paramsData.areNoneStringsPassParams,
                conditionFunction: paramsData.isStringFunctionParam
            }
        },
        fail: {
            keyArray: [
                'all',
                'any',
                'none',
                '-',
                3
            ],
            'all': {
                noneMismatch: {
                    args: [],
                    conditionFunction: []
                },
                firstMismatch: {
                    args: definedData.looselyUndefined,
                    conditionFunction: paramsData.isStringFunctionParam,
                },
                secondMismatch: {
                    args: paramsData.areNoneStringsPassParams,
                    conditionFunction: objectData.nonExternal
                },
                bothMismatch: {
                    args: definedData.looselyUndefined,
                    conditionFunction: objectData.nonExternal
                }
            },
            'any': {
                noneMismatch: {
                    args: [],
                    conditionFunction: []
                },
                firstMismatch: {
                    args: definedData.looselyUndefined,
                    conditionFunction: paramsData.isStringFunctionParam,
                },
                secondMismatch: {
                    args: paramsData.areNoneStringsPassParams,
                    conditionFunction: objectData.nonExternal
                },
                bothMismatch: {
                    args: definedData.looselyUndefined,
                    conditionFunction: objectData.nonExternal
                }
            },
            'none': {
                noneMismatch: {
                    args: [],
                    conditionFunction: []
                },
                firstMismatch: {
                    args: definedData.looselyUndefined,
                    conditionFunction: paramsData.isStringFunctionParam,
                },
                secondMismatch: {
                    args: paramsData.areNoneStringsPassParams,
                    conditionFunction: objectData.nonExternal
                },
                bothMismatch: {
                    args: definedData.looselyUndefined,
                    conditionFunction: objectData.nonExternal
                }
            },
            '-': {
                noneMismatch: {
                    args: paramsData.areNoneStringsFailParams,
                    conditionFunction: paramsData.falseFunctionParam
                },
                firstMismatch: {
                    args: definedData.looselyUndefined,
                    conditionFunction: paramsData.isStringFunctionParam,
                },
                secondMismatch: {
                    args: paramsData.areNoneStringsPassParams,
                    conditionFunction: objectData.nonExternal
                },
                bothMismatch: {
                    args: definedData.looselyUndefined,
                    conditionFunction: objectData.nonExternal
                }
            },
            3: {
                noneMismatch: {
                    args: paramsData.areNoneStringsFailParams,
                    conditionFunction: paramsData.falseFunctionParam
                },
                firstMismatch: {
                    args: definedData.looselyUndefined,
                    conditionFunction: paramsData.isStringFunctionParam,
                },
                secondMismatch: {
                    args: paramsData.areNoneStringsPassParams,
                    conditionFunction: objectData.nonExternal
                },
                bothMismatch: {
                    args: definedData.looselyUndefined,
                    conditionFunction: objectData.nonExternal
                }
            }
        }
    }
};
paramsData.areConditionTestObject = {
    method: 'areCondition',

    parameterList: [
        'args',
        'conditionFunction',
        'cardinality'
    ],

    noParameters: {
        pass: undefined,
        fail: paramsData.areConditionGuardNoParamsFailParams
    },

    firstParameters: {
        pass: undefined,
        fail: allData
    },

    secondParameters: {
        pass: undefined,
        fail: allData
    },
    
    thirdParameters: {
        pass: undefined,
        fail: allData
    },

    allParameters: {
        paramArray: [
            'args',
            'conditionFunction'
        ],
        pass: {
            keyArray: [
                'all',
                'any',
                'none'
            ],
            'all': {
                args: definedData.looselyDefined,
                conditionFunction: paramsData.trueFunctionParam
            },
            'any': {
                args: paramsData.areNoneStringsFailParams,
                conditionFunction: paramsData.isStringFunctionParam
            },
            'none': {
                args: paramsData.areNoneStringsPassParams,
                conditionFunction: paramsData.isStringFunctionParam
            }
        },
        fail: {
            keyArray: [
                'all',
                'any',
                'none',
                '-',
                3
            ],
            'all': {
                noneMismatch: {
                    args: [],
                    conditionFunction: []
                },
                firstMismatch: {
                    args: definedData.looselyUndefined,
                    conditionFunction: paramsData.isStringFunctionParam,
                },
                secondMismatch: {
                    args: paramsData.areNoneStringsPassParams,
                    conditionFunction: objectData.nonExternal
                },
                bothMismatch: {
                    args: definedData.looselyUndefined,
                    conditionFunction: objectData.nonExternal
                }
            },
            'any': {
                noneMismatch: {
                    args: [],
                    conditionFunction: []
                },
                firstMismatch: {
                    args: definedData.looselyUndefined,
                    conditionFunction: paramsData.isStringFunctionParam,
                },
                secondMismatch: {
                    args: paramsData.areNoneStringsPassParams,
                    conditionFunction: objectData.nonExternal
                },
                bothMismatch: {
                    args: definedData.looselyUndefined,
                    conditionFunction: objectData.nonExternal
                }
            },
            'none': {
                noneMismatch: {
                    args: [],
                    conditionFunction: []
                },
                firstMismatch: {
                    args: definedData.looselyUndefined,
                    conditionFunction: paramsData.isStringFunctionParam,
                },
                secondMismatch: {
                    args: paramsData.areNoneStringsPassParams,
                    conditionFunction: objectData.nonExternal
                },
                bothMismatch: {
                    args: definedData.looselyUndefined,
                    conditionFunction: objectData.nonExternal
                }
            },
            '-': {
                noneMismatch: {
                    args: paramsData.areNoneStringsFailParams,
                    conditionFunction: paramsData.falseFunctionParam
                },
                firstMismatch: {
                    args: definedData.looselyUndefined,
                    conditionFunction: paramsData.isStringFunctionParam,
                },
                secondMismatch: {
                    args: paramsData.areNoneStringsPassParams,
                    conditionFunction: objectData.nonExternal
                },
                bothMismatch: {
                    args: definedData.looselyUndefined,
                    conditionFunction: objectData.nonExternal
                }
            },
            3: {
                noneMismatch: {
                    args: paramsData.areNoneStringsFailParams,
                    conditionFunction: paramsData.falseFunctionParam
                },
                firstMismatch: {
                    args: definedData.looselyUndefined,
                    conditionFunction: paramsData.isStringFunctionParam,
                },
                secondMismatch: {
                    args: paramsData.areNoneStringsPassParams,
                    conditionFunction: objectData.nonExternal
                },
                bothMismatch: {
                    args: definedData.looselyUndefined,
                    conditionFunction: objectData.nonExternal
                }
            }
        }
    }
};

paramsData.invertBooleanFailParams = [].concat(
    paramsData.trueFunctionParam,
    paramsData.emptyStringFunctionParam,
    argumentsData.all,
    booleanData.true,
    booleanData.nonPrimitive,
    objectData.nonExternal,
    undefinedData.all
);

paramsData.invertBooleanTestObject = {
    method: 'invertBoolean',
    pass: [].concat(
        booleanData.false,
        paramsData.falseFunctionParam,
        paramsData.isStringFunctionParam
    ),
    fail: paramsData.invertBooleanFailParams
};

module.exports = paramsData;
/* eslint-enable */
