import { mount } from '@vue/test-utils';
import Chart from './Chart.vue';

describe('Chart', () => {
  it('renders properly', () => {
    const wrapper = mount(Chart, {});
    expect(wrapper.text()).toContain('Welcome to Chart');
  });
});
