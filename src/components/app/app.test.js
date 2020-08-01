import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from '../../reducer/name-space.js';

const mockStore = configureStore([]);

const PROMO_MOVIE = {
  id: 1,
  previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  title: `The Grand Budapest Hotel`,
  backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
  backgroundColor: `#A6B7AC`,
  poster: `https://loremflickr.com/cache/resized/65535_49824720108_18907b74af_z_273_410_nofilter.jpg`,
  genre: `Drama`,
  releaseDate: 2014,
  description: `The Grand Budapest Hotel is a 2014 comedy-drama film written and directed by Wes Anderson, which explores tragedy, war, fascism, nostalgia, friendship, and loyalty.`,
  rating: {
    score: 9.3,
    count: 250,
  },
  director: `Wes Anderson`,
  actors: [`Michael Fassbender`, `Marion Cotillard`, `Paddy Considine`, `Sean Harris`],
  runtime: 99,
  isFavorite: false,
};

const movies = [
  {
    id: 1,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundImage: `https://loremflickr.com/cache/resized/65535_49876816733_f1ba86707f_h_1280_543_nofilter.jpg`,
    backgroundColor: `#A6B7AC`,
    poster: `https://loremflickr.com/cache/resized/65535_49824720108_18907b74af_z_273_410_nofilter.jpg`,
    genre: `Fantasy`,
    releaseDate: 2018,
    description: `The plot follows Newt Scamander and Albus Dumbledore as they attempt to take down the dark wizard Gellert Grindelwald while facing new threats in a more divided wizarding world.`,
    rating: {
      score: 8.9,
      count: 240,
    },
    director: `David Yates`,
    actors: [`Michael Fassbender`, `Marion Cotillard`, `Paddy Considine`, `Sean Harris`],
    runtime: 99,
    isFavorite: false,
  },
  {
    id: 2,
    previewImage: `img/bohemian-rhapsody.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    title: `Bohemian Rhapsody`,
    backgroundImage: `https://loremflickr.com/cache/resized/65535_49768198796_957c97bc00_h_1280_543_nofilter.jpg`,
    backgroundColor: `#A6B7AC`,
    poster: `https://loremflickr.com/cache/resized/65535_50001660108_922f0950ea_z_273_410_nofilter.jpg`,
    genre: `Drama`,
    releaseDate: 2018,
    description: `A British-American venture, the film was produced by 20th Century Fox, Regency Enterprises, GK Films, and Queen Films, with Fox serving as distributor. The film follows the singer's life from the formation of the band up to their 1985 Live Aid performance at the original Wembley Stadium.`,
    rating: {
      score: 9.0,
      count: 250,
    },
    director: `Bryan Singer`,
    actors: [`Michael Fassbender`, `Marion Cotillard`, `Paddy Considine`, `Sean Harris`],
    runtime: 99,
    isFavorite: false,
  },
  {
    id: 3,
    previewImage: `img/macbeth.jpg`,
    previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    title: `Macbeth`,
    backgroundImage: `https://loremflickr.com/cache/resized/65535_49757902562_3b737630e4_h_1280_543_nofilter.jpg`,
    backgroundColor: `#A6B7AC`,
    poster: `https://loremflickr.com/cache/resized/65535_49816709832_c9df27e040_z_273_410_nofilter.jpg`,
    genre: `Drama`,
    releaseDate: 2015,
    description: `The story follows a Scottish general's rise to power after receiving a prophecy from a trio of witches that one day he will become King of Scotland. Like the play it was adapted from, the film dramatises the damaging physical and psychological effects of political ambition on those who seek power for its own sake.`,
    rating: {
      score: 8.0,
      count: 234,
    },
    director: `Justin Kurzel`,
    actors: [`Michael Fassbender`, `Marion Cotillard`, `Paddy Considine`, `Sean Harris`],
    runtime: 99,
    isFavorite: false,
  },
];

const reviews = [
  {
    id: 1,
    user: {
      id: 1,
      name: `Kate Muir`,
    },
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    date: `2020-07-19T16:06:01.831Z`,
    rating: 8.9,
  },
  {
    id: 2,
    user: {
      id: 2,
      name: `Bill Goodykoontz`,
    },
    comment: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
    date: `2020-07-19T16:06:01.831Z`,
    rating: 8.0,
  },
];

const userInfo = {
  id: 1,
  email: `ben@mail.ru`,
  name: `Ben`,
  avatarUrl: `/wtw/static/avatar/5.jpg`,
};

it(`App should render correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      promoMovie: PROMO_MOVIE,
      movies,
      reviews,
    },
    [NameSpace.APP]: {
      currentMovieCard: movies[0],
      isFullScreenOn: false,
      isError: false,
    },
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
      authInfo: {userInfo},
      isSignedIn: false,
      isSignInError: false,
    }
  });

  const tree = renderer
     .create(
         <Provider store={store}>
           <App
             promoMovie={PROMO_MOVIE}
             currentMovieCard={movies[0]}
             handleMovieCardClick={() => {}}
             handlePlayButtonClick={() => {}}
             handleExitButtonClick={() => {}}
             isFullScreenOn={false}
             isError={false}
             authorizationStatus={`AUTH`}
             login={() => {}}
             authInfo={userInfo}
             onSignInClick={() => {}}
             isSignedIn={false}
             isSignInError={false}
             onReviewSubmit={() => {}}
           />
         </Provider>, {
           createNodeMock: () => {
             return {};
           }
         })
     .toJSON();

  expect(tree).toMatchSnapshot();
});
