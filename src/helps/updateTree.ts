export default function updateTree(elements, targetElement) {

    function find(elements, targetElement) {
        for (const element of elements) {
            if (element.id === targetElement.id) {
                for (const key in targetElement) {
                    element[key] = targetElement[key]
                }
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
