
import { i18n } from '@kbn/i18n';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'query_ai',
    uiExports: {
      app: {
        title: 'Query AI',
        description: 'A plugin that embed Query.AI console in Kibana UI',
        main: 'plugins/query_ai/app'
      },
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    init(server, options) { // eslint-disable-line no-unused-vars

    }
  });
}
