import { Title, Wrapper } from "./styled";

const Container = ({ title, children }) => (
    <Wrapper>
        {title ? <Title>{title}</Title> : ""}
        {children}
    </Wrapper>
);

export default Container;