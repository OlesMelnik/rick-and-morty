import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

const SelectItem = ({ items, onChange, id }) => {
    const [value, setValue] = useState("");
    const classes = useStyles();
    return (
        <FormControl className={classes.formControl}>
            <InputLabel id={id}>Sort by</InputLabel>
            <Select
                labelId={id}
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                    onChange(event.target.value);
                }}
            >
                {items.map((item) => (
                    <MenuItem key={item} value={item}>
                        {item}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default SelectItem;
