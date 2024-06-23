import './dynamic-table.css'
import { Pencil, Trash } from '@/components/Icons'


export default function DynamicTable({ data = [], conf = [], handleEdit, handleDelete }) {

    return (
        <div className="dynamic-table">
            <table>
                <thead>
                    <tr>
                        {conf.map((title, i) => <td key={i}>{title}</td>)}
                    </tr>
                </thead>
                <tbody>
                    {data && data?.map((sales, i) => (
                        <tr key={sales.id + 545}>
                            <td>{sales.id}</td>
                            <td>{sales.product}</td>
                            <td>{sales.quantity}</td>
                            <td>{sales.price}</td>
                            <td>
                                <div onClick={() => handleEdit(sales.id)}>
                                    <Pencil></Pencil>
                                </div>
                                <div onClick={() => handleDelete(sales.id)}>
                                    <Trash></Trash>
                                </div>

                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}