import { mount } from '@vue/test-utils';
import SvgFun from './SvgFun.vue';

describe('SvgFun', () => {
  it('renders properly', () => {
    const wrapper = mount(SvgFun, {});
    expect(wrapper.text()).toContain('Welcome to SvgFun');
  });
});
