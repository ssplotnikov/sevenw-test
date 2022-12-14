type Rows = {
    child: Rows[] | null | [],
    equipmentCosts: number,
    estimatedProfit: number,
    id: number,
    machineOperatorSalary: number,
    mainCosts: number,
    materials: number,
    mimExploitation: number,
    overheads: number,
    rowName: string,
    salary: number,
    supportCosts: number,
    total: number,
}
type StateType = {
    rows: Rows[]
    status: string
    error: string
    isEdit: boolean
}
type AddRow = {
    parentId: any
    newRow: Rows,
}
export type { AddRow, Rows, StateType }
