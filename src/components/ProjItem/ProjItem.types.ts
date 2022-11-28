type Props = {
    data: Data
    edit?: boolean;
    count?: number | undefined;
}

type Data = {
    equipmentCosts: number
    estimatedProfit: number
    id: number
    machineOperatorSalary: number
    mainCosts: number
    materials: number
    mimExploitation: number
    overheads: number
    salary: number
    supportCosts: number
    total: number
    child: Data[] | null;
    rowName: string;
}

type Obj = {
    id: number
    rowName: string
    mainCosts: number
    overheads: number
    equipCosts: number
    estimated: number

}

export type { Props, Data, Obj }
