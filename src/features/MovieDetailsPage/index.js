import Container from "../../common/Container";
import Navigation from "../../common/Navigation";
import HeaderCard from "../../common/HeaderCard";

const MovieDetailsPage = () => {
  return (
    <>
      <Navigation />
      <Container>
        <HeaderCard
          imgUrl={'https://cdn1.naekranie.pl/wp-content/uploads/2020%2F02%2Fmulan-character-poster-1-1207853_5e500f8739bdd.jpeg'}
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