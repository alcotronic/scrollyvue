import { mount } from '@vue/test-utils';
import Sparkline from './sparkline.vue';

describe('Sparkline', () => {
  it('renders properly', () => {
    const wrapper = mount(Sparkline, {});
    expect(wrapper.text()).toContain('Welcome to Sparkline');
  });
});
