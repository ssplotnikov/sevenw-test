export default function searchTree(element, matchParam) {
    if (element.id === matchParam) {
        return element;
    } else if (element.child !== null) {
        let result = null;
        for (let i = 0; result === null && i < element.child.lenght; i++) {
            result = searchTree(element.child[i], matchParam);
        }
        return result;
    }
    return null;
}

