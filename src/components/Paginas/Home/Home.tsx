import React from "react";
import './Home.css';
import { useEffect } from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { clickStates } from "../../../store/clicks/clicksReducer";
import { changeClicks } from "../../../store/clicks/actions";

function Home() {
    const num = useSelector<clickStates, clickStates['clicks']>(
        (state) => state.clicks
    );
    const dispatch = useDispatch();
    useEffect(() => {
        document.title = `Clicou ${num} vezes`

        return () => {

        }
    }, [num]); //isso fará que o efeito só usará no num não nos outros estados

    return (
        <>
            <h1>Você clicou {num} vezes</h1>
            <Button color="primary" variant="contained" onClick={() => dispatch(changeClicks(num + 1))}>
                +
            </Button>
            <Button color="primary" variant="contained" onClick={() => dispatch(changeClicks(num - 1))}>
                -
            </Button>
        </>
    );
}

export { Home }