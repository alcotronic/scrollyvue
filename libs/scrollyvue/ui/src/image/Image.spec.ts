import { mount } from '@vue/test-utils';
import Image from './Image.vue';

describe('Image', () => {
  it('renders properly', () => {
    const wrapper = mount(Image, {});
    expect(wrapper.text()).toContain('Welcome to Image');
  });
});
