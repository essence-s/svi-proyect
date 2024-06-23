import './services-products.css'
import DynamicTable from "@/components/dynamic-table/dynamic-table";

export default function ServicesProducts() {




    return (
        <div className="services-products">
            <form className="basic-form">
                <div className="basic-form__title">Servicios y Productos</div>
                <div className="basic-form__group">
                    <div className="basic-form__input-wrapper">
                        <label>
                            <span>Name</span>
                            <input type="text" />
                        </label>
                    </div>

                    <div className="basic-form__input-wrapper">
                        <label>
                            <span>price</span>
                            <input type="text" />
                        </label>
                    </div>

                    <div className="basic-form__input-wrapper">
                        <label>
                            <span>stock</span>
                            <input type="text" />
                        </label>
                    </div>
                </div>
            </form>
            <DynamicTable
                data={[]}
                conf={["id", "name"]}
            />
        </div >
    )
}