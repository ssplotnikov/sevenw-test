export type Props = {
    count: number,
    createParent: () => void,
    createChild: () => void,
    deleteRow: () => void,
    isEdit: boolean
}
