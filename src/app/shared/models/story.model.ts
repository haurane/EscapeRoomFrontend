export interface Story {
  id: string;
  title: string;
  description: string;
  intro: string;
  startingRoom: [{
    name: string;
    uuid: string;
  }];

}
