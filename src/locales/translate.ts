import formatMessage from 'format-message';
import pt from './pt-BR/translation.json';

formatMessage.setup({
  locale: 'pt-BR',
  translations: {
    pt,
  },
  missingTranslation: 'ignore',
});
