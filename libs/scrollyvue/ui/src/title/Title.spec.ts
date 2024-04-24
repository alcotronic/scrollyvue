import { mount } from '@vue/test-utils';
import Title from './Title.vue';

describe('Title', () => {
  it('renders properly', () => {
    const wrapper = mount(Title, {});
    expect(wrapper.text()).toContain('Welcome to Title');
  });
});
