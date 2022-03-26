import { Ticket } from "../model";

export type HomeStackParamList = {
  HomeSearch: {
    target: "derpature" | "arrival";
  };
  HomeFiltered: undefined;
  HomeForm: undefined;
  HomePreview: {
    ticket: Ticket;
  };
  HomeSummary: undefined;
};

export type RootTabParamList = {
  Home: {
    screen: HomeStackParamList;
  };
  Orders: undefined;
  Others: undefined;
  Cancellations: undefined;
};
