import { mount } from '@vue/test-utils';
import Article from './Article.vue';

describe('Article', () => {
  it('renders properly', () => {
    const wrapper = mount(Article, {});
    expect(wrapper.text()).toContain('Welcome to Article');
  });
});
