import { Section } from "../section/section.type";

export type Article = {
  kicker: string,
  title: string,
  teaser: string,
  sections: Array<Section>
};