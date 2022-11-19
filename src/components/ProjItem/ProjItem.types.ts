export type Props = {
    data: Data;
    edit?: boolean;
    count: number;
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
    child: Data[];
    rowName: string;
}
