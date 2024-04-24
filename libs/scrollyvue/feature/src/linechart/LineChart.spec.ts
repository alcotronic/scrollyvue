import { mount } from '@vue/test-utils';
import LineChart from './LineChart.vue';

describe('LineChart', () => {
  it('renders properly', () => {
    const wrapper = mount(LineChart, {});
    expect(wrapper.text()).toContain('Welcome to LineChart');
  });
});
