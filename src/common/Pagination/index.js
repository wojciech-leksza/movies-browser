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
  return (
    <Wrapper>
      <Button>
        <LeftArrow />
        <LeftArrowMobile />
        <Text>First</Text>
      </Button>
      <Button>
        <LeftArrow />
        <Text>Previous</Text>
      </Button>
      <Paragraph>
        Page&nbsp;<PageNumber>1</PageNumber> of&nbsp;<PageNumber>500</PageNumber>
      </Paragraph>
      <Button>
        <Text>Next</Text>
        <RightArrow />
      </Button>
      <Button>
        <Text>Last</Text>
        <RightArrowMobile />
        <RightArrow />
      </Button>
    </Wrapper>
  )
};

export default Pagination;