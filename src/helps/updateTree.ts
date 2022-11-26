export default function updateTree(element, actionObj) {
    if (element.id === actionObj.id) {
        return [...element, ...actionObj];
    } else if (element.child !== null) {
        let result = null;
        for (let i = 0; result === null && i < element.child.lenght; i++) {
            result = updateTree(element.child[i], actionObj);
        }
        return result;
    }
    return null;
}

