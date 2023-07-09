import Item from "./Item"
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menu"


const ItemsContainer = () => {
    return 
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:ppx-8 px-5 py-16">
       <item Links={PRODUCTS} Title="PRODUCTS" />
       <item Links={RESOURCES} Title="RESOURCES" />
       <item Links={COMPANY} Title="COMPANY" />
       <item Links={SUPPORT} Title="SUPPORT" />


        



    </div>
}
 

export default ItemsContainer; 