import { mount } from '@vue/test-utils';
import Articles from './Articles.vue';

describe('Articles', () => {
  it('renders properly', () => {
    const wrapper = mount(Articles, {});
    expect(wrapper.text()).toContain('Welcome to Articles');
  });
});
