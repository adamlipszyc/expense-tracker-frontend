import { FormGroup, FormControlLabel, Checkbox, FormControl } from "@mui/material";


export const Categories = ( {categories, updateCategories}) => {

    return(
        <div>
            <FormControl>
                <FormGroup>
                    <FormControlLabel 
                    control={<Checkbox checked={categories.has("Housing")} onChange={(e) => updateCategories("Housing")}/>} 
                    label="Housing" />
                    <FormControlLabel control={<Checkbox checked={categories.has("Transportation")} onChange={(e) => updateCategories("Transportation")}/>} label="Transportation" />
                    <FormControlLabel control={<Checkbox checked={categories.has("Food/Drink")} onChange={(e) => updateCategories("Food/Drink")}/>} label="Food/Drink" />
                </FormGroup>
            </FormControl>
            <FormControl>
                <FormGroup>
                    <FormControlLabel
                    control={<Checkbox checked={categories.has("Healthcare")} onChange={(e) => updateCategories("Healthcare")} />}
                    label="Healthcare"
                    />
                    <FormControlLabel
                    control={<Checkbox checked={categories.has("Personal Care")} onChange={(e) => updateCategories("Personal Care")} />}
                    label="Personal Care"
                    />
                    <FormControlLabel
                    control={<Checkbox checked={categories.has("Entertainment")} onChange={(e) => updateCategories("Entertainment")} />}
                    label="Entertainment"
                    />
                </FormGroup>
            </FormControl>
            <FormControl>
                <FormGroup>
                <FormControlLabel
                control={<Checkbox checked={categories.has("Debt and Savings")} onChange={(e) => updateCategories("Debt and Savings")} />}
                label="Debt and Savings"
                />
                <FormControlLabel
                control={<Checkbox checked={categories.has("Insurance")} onChange={(e) => updateCategories("Insurance")} />}
                label="Insurance"
                />
                <FormControlLabel
                control={<Checkbox checked={categories.has("Education")} onChange={(e) => updateCategories("Education")} />}
                label="Education"
                />
                </FormGroup>
            </FormControl>
            <FormControl>
                <FormGroup>
                    <FormControlLabel
                    control={<Checkbox checked={categories.has("Gifts and Donations")} onChange={(e) => updateCategories("Gifts and Donations")} />}
                    label="Gifts and Donations"
                    />
                    <FormControlLabel
                    control={<Checkbox checked={categories.has("Miscellaneous")} onChange={(e) => updateCategories("Miscellaneous")} />}
                    label="Miscellaneous"
                    />
                    <FormControlLabel
                    control={<Checkbox checked={categories.has("Taxes")} onChange={(e) => updateCategories("Taxes")} />}
                    label="Taxes"
                    />
                </FormGroup>
            </FormControl>


        </div>


    );

}