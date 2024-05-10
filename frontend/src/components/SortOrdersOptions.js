
import { Option, OptionList } from './SortProductsOptions'

export default function SortOrdersOptions({ setSortPreferece, defaultValue }) {


    return (
        <OptionList defaultValue={defaultValue} name="sortProductBy" onChange={(e) => setSortPreferece(e.target.value)}>
            <Option value="-createdAt" >Most recent</Option>
            <Option value="createdAt" >Older</Option>
            <Option value="total" >Smaller Amount</Option>
            <Option value="-total">Largest Amount</Option>

        </OptionList>

    );

}