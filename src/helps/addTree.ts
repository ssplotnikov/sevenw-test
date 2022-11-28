export default function addTree(elements, targetElement, parentId = null) {
    if (parentId === null) {
        elements.push(targetElement)
        return elements
    }

    function find(elements, targetElement) {
        for (const element of elements) {
            if (element.id === parentId) {
                element.child.push(targetElement)
                return
            }
            if (element.child) {
                find(element.child, targetElement)
            }
        }
    }
    find(elements, targetElement)

    return elements
}
