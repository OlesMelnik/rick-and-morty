import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },

    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
}));

const GridList = ({ items, setShowPopup, setCurrentItem }) => {
    const classes = useStyles();
    return (
        <Grid container justifyContent="center" alignItems="center">
            {items.length &&
                items.map((item) => (
                    <Grid item sm={6} xs={12} md={3} lg={3} key={item.id}>
                        <Box
                            className={classes.paper}
                            onClick={() => {
                                setCurrentItem(item);
                                setShowPopup(true);
                            }}
                        >
                            {item.image && (
                                <img className="image" src={item.image} />
                            )}
                            <h3>{item.name}</h3>
                        </Box>
                    </Grid>
                ))}
        </Grid>
    );
};

export default GridList;
