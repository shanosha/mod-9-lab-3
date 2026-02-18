import type { TaskFilterProps } from "../../types"

function TaskFilter({ onFilterChange }: TaskFilterProps) {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        onFilterChange({[name]: value});
    }
    
    return (
        <>
            <div>
                <label htmlFor="status">Status: </label>
                <select name="status" id="status" onChange={handleChange}>
                    <option value="">All Statuses</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <div>
                <label htmlFor="priority">Priority: </label>
                <select name="priority" id="priority" onChange={handleChange}>
                    <option value="">All Priorities</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
        </>
    )
}

export { TaskFilter };