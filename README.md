# AI-Analyst

Query.AI AI-Analyst Kibana UI plugin uses NLP to provide answers and insights from your data in Elastic stack. See https://query.ai for more information. See demo video at https://youtu.be/RxQ2l2xufXs

![Events](screenshot.png)

### Installation
- Prerequisites
  - Download and install Elasticsearch and Kibana
  - AI-Analyst is supported and tested with Kibana 7.x and 6.x
- Install AI-Analyst plugin
  - Kibana 7.3.0 : `./bin/kibana-plugin install https://github.com/query-ai/queryai-kibana-plugin/releases/download/7.3/Query.AI-kibana-plugin.7.3.zip`
  - Other versions : [https://github.com/query-ai/queryai-kibana-plugin/releases](https://github.com/query-ai/queryai-kibana-plugin/releases)
  - Kibana requires exact match of plugin version to the Kibana version. If you can't find AI-Analyst plugin release for a Kibana release, contact help@query.ai for help.
  - Restart Kibana after plugin install. 
  - NOTE: You do not need to install any other component beyond this plugin.

### Configuration
Add these lines in kibana.yml. Generally, the kibana.yml can be found at 	
`/etc/kibana`.
```
csp.rules:
  # current defaults
  - "script-src 'unsafe-eval' 'nonce-{nonce}'"
  - "worker-src blob'"
  - "child-src blob:"
  # New rule for iframes
  - "frame-src https://ai.query.ai/"
```
Register at [https://ai.query.ai/live](https://ai.query.ai/live)
**Note:** The lines above are telling the Kibana's content security policy that [https://ai.query.ai/](https://ai.query.ai/) is a safe website to load javascript from. Without adding the above lines, the Kibana plugin won’t work. Your data stays between your browser and your Elastic stack. NLP translation of your questions to search syntax happens via our cloud APIs. Please contact help@query.ai for any assistance or further information.

### Plugin Features
Talk to your Elastic Stack data using Query.AI. Query.AI IRIS (Investigations Response Intelligence Service) is the AI that talks to you using voice and NLP (Natural Language Processing) to produce answers, insights and automated visualizations from Elastic stack data. 
- Query your data in plain english
- Leverage an Out-of-box library of security questions
- Easy App install with no data relocation or duplication
- Automated visualizations and insights
- Collaborate with teammates and industry peers 
Getting value from your tools is now as easy as asking questions: “IRIS, show me all login failures from yesterday”

### Support
Please contact us at help@query.ai for any product support or feature suggestions (We'd love to hear from you!)
