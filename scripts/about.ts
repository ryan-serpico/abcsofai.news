import { json } from 'd3-fetch';

import CardList from './components/CardList.svelte';
import { syncSiteChromeOffset } from './utils/site-chrome';

syncSiteChromeOffset();

const url = '/api/dictionary.json';
const target = document.getElementById('card-container')!;
json(url).then(function (dictionary) {
  new CardList({
    target,
    props: {
      dictionary,
      displayAll: false,
    },
  });
});
