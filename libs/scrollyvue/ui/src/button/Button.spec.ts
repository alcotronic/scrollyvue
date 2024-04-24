import { mount } from '@vue/test-utils';
import Button from './Button.vue';

describe('Button', () => {
  it('renders properly', () => {
    const wrapper = mount(Button, {});
    expect(wrapper.text()).toContain('Welcome to Button');
  });
});
