import { mount } from '@vue/test-utils';
import Card from './Card.vue';

describe('Card', () => {
  it('renders properly', () => {
    const wrapper = mount(Card, {});
    expect(wrapper.text()).toContain('Welcome to Card');
  });
});
