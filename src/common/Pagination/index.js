import { useDispatch, useSelector } from "react-redux";
import { selectPage, selectTotalPages, setPage } from "../../features/MoviesPage/slice";
import {
  Button,
  Wrapper,
  Text,
  Paragraph,
  PageNumber,
  LeftArrow,
  RightArrow,
  LeftArrowMobile,
  RightArrowMobile
} from "./styled";

const Pagination = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  return (
    <Wrapper>
      <Button
        disabled={page <= 1}
        onClick={() => {dispatch(setPage(1))}}
      >
        <LeftArrow />
        <LeftArrowMobile />
        <Text>First</Text>
      </Button>
      <Button
        disabled={page <= 1}
        onClick={() => {dispatch(setPage(page - 1))}}
      >
        <LeftArrow />
        <Text>Previous</Text>
      </Button>
      <Paragraph>
        Page&nbsp;
        <PageNumber>
          {page}
        </PageNumber> of&nbsp;
        <PageNumber>
          {totalPages > 500 ? 500 : totalPages}
        </PageNumber>
      </Paragraph>
      <Button
        disabled={page >= totalPages || page >= 500}
        onClick={() => {dispatch(setPage(page + 1))}}
      >
        <Text>Next</Text>
        <RightArrow />
      </Button>
      <Button
        disabled={page >= totalPages || page >= 500}
        onClick={() => {dispatch(setPage(totalPages > 500 ? 500 : totalPages))}}
      >
        <Text>Last</Text>
        <RightArrowMobile />
        <RightArrow />
      </Button>
    </Wrapper>
  )
};

export default Pagination;