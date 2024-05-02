import { mount } from '@vue/test-utils';
import Kicker from './Kicker.vue';

describe('Kicker', () => {
  const testKickerText = 'Test Kicker';

  it('renders properly', () => {
    const wrapper = mount(Kicker, {
      props: {
        kicker: testKickerText
      }
    });
    expect(wrapper.text()).toContain(testKickerText);
  });
});
