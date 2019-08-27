
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
        const xpackMainPlugin = server.plugins.xpack_main;
        if (xpackMainPlugin) {
          const featureId = 'query_ai';

          xpackMainPlugin.registerFeature({
            id: featureId,
            name: i18n.translate('queryAi.featureRegistry.featureName', {
              defaultMessage: 'Query.AI',
            }),
            navLinkId: featureId,
            icon: 'questionInCircle',
            app: [featureId, 'kibana'],
            catalogue: [],
            privileges: {
              all: {
                api: [],
                savedObject: {
                  all: [],
                  read: [],
                },
                ui: ['show'],
              },
              read: {
                api: [],
                savedObject: {
                  all: [],
                  read: [],
                },
                ui: ['show'],
              },
            },
          });
        }

    }
  });
}
