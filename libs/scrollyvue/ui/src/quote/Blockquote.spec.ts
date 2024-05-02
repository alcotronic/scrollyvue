import { mount } from '@vue/test-utils';
import Blockquote from './Blockquote.vue';

describe('Blockquote', () => {
  it('renders properly', () => {
    const wrapper = mount(Blockquote, {});
    expect(wrapper.text()).toContain('Welcome to Blockquote');
  });
});
