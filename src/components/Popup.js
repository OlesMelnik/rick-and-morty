import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import CloseIcon from "@material-ui/icons/Close";
import "./styles.css";

const Popup = ({
    showPopup,
    setShowPopup,
    setCurrentItem,
    currentItem,
    fields,
}) => {
    return (
        <div>
            {showPopup && currentItem && (
                <div
                    className="popup"
                    onClick={() => {
                        setShowPopup(false);
                        setCurrentItem(null);
                    }}
                >
                    <Paper
                        className="popup-container"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <CloseIcon
                            className="close-icon"
                            onClick={() => {
                                setShowPopup(false);
                                setCurrentItem(null);
                            }}
                        />
                        {currentItem?.image && <img src={currentItem.image} />}
                        <TableContainer
                            className="table-container"
                            component={Paper}
                        >
                            <Table className="table" aria-label="simple table">
                                <TableBody>
                                    {fields.map((field) => (
                                        <TableRow key={field}>
                                            <TableCell
                                                component="th"
                                                scope="row"
                                            >
                                                {field}
                                            </TableCell>
                                            <TableCell align="center">
                                                {currentItem[field]}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </div>
            )}
        </div>
    );
};

export default Popup;
