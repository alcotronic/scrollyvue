import { mount } from '@vue/test-utils';
import Map from './Map.vue';

describe('Map', () => {
  it('renders properly', () => {
    const wrapper = mount(Map, {});
    expect(wrapper.text()).toContain('Welcome to Map');
  });
});
