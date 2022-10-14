import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPersonDetails, selectPerson, selectStatus } from "../slice";
import Navigation from "../../../common/Navigation";
import Content from "./Content";

const PersonDetailsPage = () => {
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(fetchPersonDetails(params.id));
    }, [dispatch, params.id]);

    const status = useSelector(selectStatus);
    const person = useSelector(selectPerson);

    return (
        <>
            <Navigation />
            <Content
                person={person}
                status={status}
            />
        </>
    );

};

export default PersonDetailsPage;