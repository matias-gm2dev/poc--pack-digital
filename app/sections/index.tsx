import {registerSection} from '@pack/react';
import {Hero} from './Hero';
import {FiftyFiftyHero} from './FiftyFiftyHero';
import {TextBlock} from './TextBlock';
import {Image} from './Image';
import {HTML} from './HTML';
import {TestSection} from './TestSection';

export {Hero, FiftyFiftyHero, TextBlock, TestSection};

export function registerSections() {
  registerSection(Hero, {name: 'hero'});
  registerSection(FiftyFiftyHero, {name: 'fifty-fifty-hero'});
  registerSection(TextBlock, {name: 'text-block'});
  registerSection(Image, {name: 'image-block'});
  registerSection(HTML, {name: 'html-block'});
  registerSection(TestSection, {name: 'test-section'});
}
