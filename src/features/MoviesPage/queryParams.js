import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setQuery } from "./slice";

export const queryParamName = "search";

export const useQueryParams = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useSearchParams();
    const queryParam = search.get(queryParamName);

    useEffect(() => {
       dispatch(setQuery(queryParam));
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