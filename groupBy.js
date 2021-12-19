let myArray = [
    {
        description: '1',
        type: 'marvel'
    },
    {
        description: '2',
        type: 'DC'
    },
    {
        description: '3',
        type: 'comic'
    },
    {
        description: '4',
        type: 'marvel'
    },
    {
        description: '5',
        type: 'marvel'
    },
    {
        description: '6',
        type: 'comic'
    },
    {
        description: '7',
        type: 'DC'
    },
    {
        description: '8',
        type: 'DC'
    }
]

function throwIfMissing(name){
    throw new Error('Missing "' + name + '" argument!');
}

function groupByArray(arr = throwIfMissing('arr'), key= throwIfMissing('key')) {
            return arr.reduce((acc, obj) => {
                let v = obj[key];
                if(obj[key] === undefined){
                    return {}
                }
                let el = acc.find((r) => r && r.key === v);
                if (el) {
                    el.values.push(obj);
                } else {
                    acc.push({key: v, values: [obj]});
                }
                return acc;
            }, []);
}
console.log(groupByArray(myArray, 'type'));