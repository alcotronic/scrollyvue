import { mount } from '@vue/test-utils';
import BarChart from './BarChart.vue';

describe('BarChart', () => {
  it('renders properly', () => {
    const wrapper = mount(BarChart, {});
    expect(wrapper.text()).toContain('Welcome to BarChart');
  });
});
