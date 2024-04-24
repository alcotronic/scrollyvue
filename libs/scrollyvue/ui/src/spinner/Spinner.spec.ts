import { mount } from '@vue/test-utils';
import Spinner from './Spinner.vue';

describe('Spinner', () => {
  it('renders properly', () => {
    const wrapper = mount(Spinner, {});
    expect(wrapper.text()).toContain('Welcome to Spinner');
  });
});
