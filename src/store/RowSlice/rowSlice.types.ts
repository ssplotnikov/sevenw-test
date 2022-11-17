type Rows = {
    child: Rows[] | null,
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
    edit: Rows | null
    status: string
    error: string
}
export type { Rows, StateType }
