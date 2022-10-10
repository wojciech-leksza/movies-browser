import Container from "../../common/Container";
import Navigation from "../../common/Navigation";
import HeaderCard from "../../common/HeaderCard";

const MovieDetailsPage = () => {
  return (
    <>
      <Navigation />
      <Container>
        <HeaderCard
          imgUrl={'https://www.monolith.pl/wp-content/uploads/2022/06/ostatni-slad-ostatni-slad-245x347.jpg'}
          title={"Mulan"}
          movieYear={2020}

          captionSubTitleFirs={"Production"}
          subTitleFirst={"China, United States of America"}
          captionSubTitleSecond={"Release date"}
          subTitleSecond={"24.10.2020"}

          rate={7.786}
          votes={335}
          tags={"TagsHere"}
          overview={
            `A young Chinese maiden disguises herself as a male warrior in order to save her father. 
          Disguises herself as a male warrior in order to save her father. 
          A young Chinese maiden disguises herself as a male warrior in order to save her father.`
          }
        >
        </HeaderCard>
      </Container>
    </>
  );
};

export default MovieDetailsPage;