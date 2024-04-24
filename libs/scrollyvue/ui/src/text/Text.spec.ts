import { mount } from '@vue/test-utils';
import Text from './Text.vue';

describe('Text', () => {
  it('renders properly', () => {
    const wrapper = mount(Text, {});
    expect(wrapper.text()).toContain('Welcome to Text');
  });
});
