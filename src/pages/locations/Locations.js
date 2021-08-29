import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Popup from "../../components/Popup";
import SelectItem from "../../components/ui/SelectItem";
import TableInfo from "../../components/TableInfo";
import { sortByField } from "../../sort/sortByField";
const Locations = () => {
    const url = "https://rickandmortyapi.com/api/location";
    const [locations, setLocations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const fields = ["dimension", "type"];
    const sortFields = ["dimension", "name", "type"];
    const [showPopup, setShowPopup] = useState(false);
    const [currentLocation, setCurrentLocation] = useState();
    const [value, setValue] = useState("");

    useEffect(() => {
        const res = fetch(`${url}?page=${currentPage}`)
            .then((response) => response.json())
            .then((data) => {
                setMaxPage(data.info.pages);
                setLocations(
                    sortByField(locations.concat(data.results), value)
                );
            })
            .catch((err) => err);
    }, [currentPage]);

    const sortList = (value) => {
        setValue(value);
        setLocations(sortByField(locations, value));
    };

    return (
        <Container>
            <SelectItem
                id="location-select"
                items={sortFields}
                onChange={sortList}
            />
            {!!locations.length && (
                <TableInfo items={locations} fields={fields} />
            )}
            <Popup
                showPopup={showPopup}
                setShowPopup={setShowPopup}
                currentItem={currentLocation}
                setCurrentItem={setCurrentLocation}
                fields={fields}
            ></Popup>
            {currentPage !== maxPage && (
                <Typography
                    className="load-more-btn"
                    onClick={() => {
                        setCurrentPage(currentPage + 1);
                    }}
                >
                    See more
                </Typography>
            )}
        </Container>
    );
};

export default Locations;
