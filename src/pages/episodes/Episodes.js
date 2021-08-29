import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import SelectItem from "../../components/ui/SelectItem";
import Popup from "../../components/Popup";
import TableInfo from "../../components/TableInfo";
import { sortByField } from "../../sort/sortByField";

const Episodes = () => {
    const url = "https://rickandmortyapi.com/api/episode";
    const [episodes, setEpisodes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const fields = ["air_date", "episode"];
    const sortFields = ["name", "episode"];
    const [showPopup, setShowPopup] = useState(false);
    const [currentEpisode, setCurrentEpisode] = useState();
    const [value, setValue] = useState("");

    useEffect(() => {
        const res = fetch(`${url}?page=${currentPage}`)
            .then((response) => response.json())
            .then((data) => {
                setMaxPage(data.info.pages);
                setEpisodes(sortByField(episodes.concat(data.results), value));
            })
            .catch((err) => err);
    }, [currentPage]);

    const sortList = (value) => {
        setValue(value);
        setEpisodes(sortByField(episodes, value));
    };

    return (
        <Container>
            <SelectItem
                id="episdeos-select"
                items={sortFields}
                onChange={sortList}
            />
            {!!episodes.length && (
                <TableInfo items={episodes} fields={fields} />
            )}
            <Popup
                showPopup={showPopup}
                setShowPopup={setShowPopup}
                currentItem={currentEpisode}
                setCurrentItem={setCurrentEpisode}
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

export default Episodes;
