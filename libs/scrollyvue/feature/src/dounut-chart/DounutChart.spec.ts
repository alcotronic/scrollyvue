import { mount } from '@vue/test-utils';
import DounutChart from './DounutChart.vue';

describe('DounutChart', () => {
  it('renders properly', () => {
    const wrapper = mount(DounutChart, {});
    expect(wrapper.text()).toContain('Welcome to DounutChart');
  });
});
