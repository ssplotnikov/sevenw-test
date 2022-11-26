export type Props = {
    count: number | undefined,
    createParent: () => void,
    createChild: () => void,
    deleteRow: () => void,
    isEdit: boolean
}
