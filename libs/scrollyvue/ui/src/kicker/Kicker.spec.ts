import { mount } from '@vue/test-utils';
import Kicker from './Kicker.vue';

describe('Kicker', () => {
  it('renders properly', () => {
    const wrapper = mount(Kicker, {});
    expect(wrapper.text()).toContain('Welcome to Kicker');
  });
});
