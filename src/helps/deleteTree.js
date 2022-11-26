export default function deleteTree(element, actionObj) {
    for (let j = 0; j < element.lenght; j++) {
        if (element[j].id === actionObj.id) {
            const index = element.indexOf(element[j])
            console.log(index)
            return element.slice(index, 1)
        }
        else if (element[j].child !== null) {
            let result = null;
            console.log(result)
            if (result === null) {
                result = deleteTree(element[j].child, actionObj);
            }
            return result;
        }
        return null;
    }
}



const tree = [
    {
        id: 1, child: [{
            id: 2, child: [{
                id: 3
            }]
        }]
    }
]

console.log(deleteTree(tree, { id: 3 }))
