import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import GridList from "../../components/GridList";
import SelectItem from "../../components/ui/SelectItem";
import Popup from "../../components/Popup";
import { sortByField } from "../../sort/sortByField";

import "./styles.css";

const Characters = () => {
    const url = "https://rickandmortyapi.com/api/character";
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [showPopup, setShowPopup] = useState(false);
    const fields = ["name", "gender", "species", "status"];
    const sortFields = ["name", "gender", "species", "status"];
    const [currentCharacter, setCurrentCharacter] = useState();
    const [value, setValue] = useState("");

    useEffect(() => {
        fetch(`${url}?page=${currentPage}`)
            .then((response) => response.json())
            .then((data) => {
                setMaxPage(data.info.pages);
                setCharacters(
                    sortByField(characters.concat(data.results), value)
                );
            })
            .catch((err) => err);
    }, [currentPage]);

    const sortList = (value) => {
        setValue(value);
        setCharacters(sortByField(characters, value));
    };

    return (
        <div>
            <Container>
                <SelectItem
                    id="character-select"
                    items={sortFields}
                    onChange={sortList}
                />
                {!!characters.length && (
                    <GridList
                        items={characters}
                        setShowPopup={setShowPopup}
                        setCurrentItem={setCurrentCharacter}
                    />
                )}

                <Popup
                    showPopup={showPopup}
                    setShowPopup={setShowPopup}
                    currentItem={currentCharacter}
                    setCurrentItem={setCurrentCharacter}
                    fields={fields}
                />
                {currentPage !== maxPage && (
                    <Typography
                        className="load-more-btn"
                        onClick={() => {
                            setCurrentPage(currentPage + 1);
                        }}
                    >
                        see more
                    </Typography>
                )}
            </Container>
        </div>
    );
};

export default Characters;
