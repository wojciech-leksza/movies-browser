import {
  ButtonLink,
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
      <ButtonLink>
        <LeftArrow />
        <LeftArrowMobile />
        <Text>First</Text>
      </ButtonLink>
      <ButtonLink>
        <LeftArrow />
        <Text>Previous</Text>
      </ButtonLink>
      <Paragraph>
        Page <PageNumber>1</PageNumber> of <PageNumber>500</PageNumber>
      </Paragraph>
      <ButtonLink>
        <Text>Next</Text>
        <RightArrow />
      </ButtonLink>
      <ButtonLink>
        <Text>Last</Text>
        <RightArrowMobile />
        <RightArrow />
      </ButtonLink>
    </Wrapper>
  )
};

export default Pagination;