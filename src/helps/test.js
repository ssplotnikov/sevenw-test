
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

const tet = [{ id: 1, child: [{ id: 2, child: [{ id: 3 }] }] }]
const res = deleteTree(tet, { id: 3 })
console.log(JSON.stringify(res))
console.log(res)
