export default function deleteTree(elements, targetElement) {

    function find(elements, targetElement) {
        for (const element of elements) {
            if (element.id === targetElement.id) {
                const index = elements.indexOf(element)
                elements.splice(index, 1)
                return element
            }
            if (element.child) {
                find(element.child, targetElement)
            }
        }
    }
    find(elements, targetElement)

    return elements
}
