import '../../testHelper';
import React from 'react';
import ReactTestUtils, { Simulate } from 'react-addons-test-utils';
import ArticleViewer from '../../../app/assets/javascripts/components/common/article_viewer.jsx';

describe('ArticleViewer', () => {
  it('renders', () => {
    const article = {
      title: 'Selfie',
      language: 'en',
      project: 'wikipedia',
      url: 'https://en.wikipedia.org/wiki/Selfie'
    };
    const TestArticleViewer = ReactTestUtils.renderIntoDocument(
      <ArticleViewer
        article={article}
      />
    );
    const showHideButton = ReactTestUtils.findRenderedDOMComponentWithClass(TestArticleViewer, 'button');
    Simulate.click(showHideButton); // show
    Simulate.click(showHideButton); // hide
  });
});
