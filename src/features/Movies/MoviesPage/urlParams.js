import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { setPage, setQuery } from "../slice";

export const queryParamName = "search";
export const pageParamName = "page";

export const useQueryParams = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const [urlParams, setUrlParams] = useSearchParams();
    const queryParam = urlParams.get(queryParamName);

    useEffect(() => {
        if (location.pathname === `/${location.pathname.split('/')[1]}`) {
            dispatch(setQuery(queryParam));
        };
    }, [queryParam, dispatch]);

    const setQueryParam = (query) => {
        urlParams.set(pageParamName, 1);
        if (!query) {
            urlParams.delete(queryParamName);
            setUrlParams(urlParams);
        } else {
            urlParams.set(queryParamName, query);
            setUrlParams(urlParams);
        };
    };

    return [queryParam, setQueryParam];
};

export const usePageParams = () => {
    const dispatch = useDispatch();
    const [urlParams, setUrlParams] = useSearchParams();
    const pageParam = urlParams.get(pageParamName);

    useEffect(() => {
        if (pageParam) {
            dispatch(setPage(+pageParam));
        };
    }, [pageParam, dispatch]);

    const setPageParams = (page) => {
        urlParams.set(pageParamName, page);
        setUrlParams(urlParams);
    };

    return setPageParams;
};