type ProblemTypes = {
    id: number;
    problem_id: string;
    title: string;
    description: string | null;
    solution: string | null;
    created_at: string;
    updated_at: string;
    difficulty: string;
    acceptance_rate: string;
    status: string;
}

export interface ProblemsInterface {
    problem_list:ProblemTypes[]
}
