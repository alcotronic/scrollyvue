import { Section } from "../section/section.type";

export type Article = {
  id: number,
  kicker: string,
  title: string,
  teaser: string,
  sections: Array<Section>
};