import Container from "../../common/Container";
import Navigation from "../../common/Navigation";
import HeaderCard from "../../common/HeaderCard";
import PersonCard from "../../common/PersonCard";
import { PeopleList } from "../../../common/styled";
import { Title } from "./styled";
import Header from "./Header";

const MovieDetailsPage = () => {
  const rate = (7.786).toFixed(1)
  const votes = 335

  return (
    <>
      <Navigation />
      <Header
        poster={"https://popkulturysci.pl/wp-content/uploads/2020/02/mulan-fina%C5%82owy-zwiastun-super-bowl-disney.jpg"}
        LongTitle={"Mulan long title"}
        rate={rate}
        votes={votes}
      />
      <Container>
        <HeaderCard
          imgUrl={'https://cdn1.naekranie.pl/wp-content/uploads/2020%2F02%2Fmulan-character-poster-1-1207853_5e500f8739bdd.jpeg'}
          title={"Mulan"}
          movieYear={2020}

          captionSubTitleFirs={"Production"}
          subTitleFirst={"China, United States of America"}
          captionSubTitleSecond={"Release date"}
          subTitleSecond={"24.10.2020"}

          rate={rate}
          votes={votes}
          tags={"TagsHere"}
          overview={
            `A young Chinese maiden disguises herself as a male warrior in order to save her father. 
          Disguises herself as a male warrior in order to save her father. 
          A young Chinese maiden disguises herself as a male warrior in order to save her father. 
          `
          }
        >
        </HeaderCard>
        <Title>Cast</Title>
        <PeopleList>
          <PersonCard
            pictureUrl={"https://cdn.gracza.pl/galeria/mdb/o/553701140.jpg"}
            name={"Liu Yifei"}
            character={"Mulan"}
          />
          <PersonCard
            pictureUrl={"https://cdn.gracza.pl/galeria/mdb/o/553701140.jpg"}
            name={"Liu Yifei"}
            character={"Mulan"}
          />
          <PersonCard
            pictureUrl={""}
            name={"Liu Yifei"}
            character={"Mulan"}
          />
          <PersonCard
            pictureUrl={"https://cdn.gracza.pl/galeria/mdb/o/553701140.jpg"}
            name={"Liu Yifei"}
            character={"Mulan"}
          />
        </PeopleList>

        <Title>Crew</Title>
        <PeopleList>
          <PersonCard
            pictureUrl={"https://cdn.gracza.pl/galeria/mdb/o/553701140.jpg"}
            name={"Liu Yifei"}
            character={"Mulan"}
          />
          <PersonCard
            pictureUrl={"https://cdn.gracza.pl/galeria/mdb/o/553701140.jpg"}
            name={"Liu Yifei"}
            character={"Mulan"}
          />
        </PeopleList>
      </Container>
    </>
  );
};

export default MovieDetailsPage;