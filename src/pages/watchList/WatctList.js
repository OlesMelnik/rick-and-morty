import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Checkbox from "@material-ui/core/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import {
    addEpisode,
    changeEpisodeStatus,
    removeEpisode,
} from "../../store/feautres/episodesSlice";
import "./styles.css";

const WatchList = () => {
    const episodes = useSelector((state) => state.episodes.episodes);
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    return (
        <Container>
            <form className="form" noValidate autoComplete="off">
                <TextField
                    color="secondary"
                    id="outlined-basic"
                    className="textinput"
                    label="episode"
                    variant="outlined"
                    onChange={(event) => {
                        setValue(event.target.value);
                    }}
                />
                <Button
                    variant="contained"
                    color="secondary"
                    className="create-btn"
                    onClick={() => {
                        dispatch(
                            addEpisode({
                                id: Date.now(),
                                value: value,
                                checked: false,
                            })
                        );
                    }}
                >
                    Create
                </Button>
            </form>
            <div className="episode-list">
                {episodes.map((episode) => (
                    <div
                        className={
                            episode.checked
                                ? "disabled-episode"
                                : "active-episode"
                        }
                        key={episode.id}
                    >
                        <Checkbox
                            checked={episode.checked}
                            onChange={() => {
                                dispatch(
                                    changeEpisodeStatus({ id: episode.id })
                                );
                            }}
                            inputProps={{ "aria-label": "primary checkbox" }}
                        />
                        <span>{episode.value}</span>
                        <CloseIcon
                            className="closeIcon"
                            color="secondary"
                            onClick={() => {
                                dispatch(removeEpisode({ id: episode.id }));
                            }}
                        />
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default WatchList;
