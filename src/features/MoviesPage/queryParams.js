import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setQuery } from "./slice";

export const queryParamName = "search";

export const useQueryParams = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useSearchParams();
    const queryParam = search.get(queryParamName);
    const timeout = useRef(null);
    
    useEffect(() => {
        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
            dispatch(setQuery(queryParam));
        }, 500);

    }, [search]);

    const setQueryParam = (query) => {
        if (!query) {
            setSearch({});
        } else {
            setSearch({ [queryParamName]: query });
        };
    };

    return [queryParam, setQueryParam];
};