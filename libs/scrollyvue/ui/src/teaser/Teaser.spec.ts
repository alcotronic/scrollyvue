import { mount } from '@vue/test-utils';
import Teaser from './Teaser.vue';

describe('Teaser', () => {
  it('renders properly', () => {
    const wrapper = mount(Teaser, {});
    expect(wrapper.text()).toContain('Welcome to Teaser');
  });
});
