export type Props = {
    isEdit: boolean,
    Submit?: () => void,
    count: number,
    addNew: any,
    handleForm: () => void
    parentId: number | null
    handleAddNew: () => void
    submit: () => void
}
