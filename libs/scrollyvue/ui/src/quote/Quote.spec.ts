import { mount } from '@vue/test-utils';
import Quote from './Quote.vue';

describe('Quote', () => {
  it('renders properly', () => {
    const wrapper = mount(Quote, {});
    expect(wrapper.text()).toContain('Welcome to Quote');
  });
});
