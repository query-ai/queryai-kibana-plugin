# About Query.AI Kibana Plugin
Query.AI IRIS Kibana UI plugin uses NLP to provide answers and insights from your data in Elastic stack.
Talk to your data with Query.AI IRIS, the industry's only Security Concierge.
Analyzing your data is now as easy as asking questions : "IRIS, Show me all login failures from yesterday".
With IRIS's AI you:
- Query your data in plain English (using chat or voice),
- Leverage an Out-of-box library of security questions.
- Create automated visualizations and insights.
- Easy App install with no data relocation or duplication
- Collaborate with teammates and industry peers.
See https://query.ai for more information. 
[![Watch demo video](https://youtu.be/RxQ2l2xufXs)](https://youtu.be/RxQ2l2xufXs)
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

### Support
Please contact us at help@query.ai for any product support or feature suggestions (We'd love to hear from you!)
