# AI-Analyst

Query.AI AI-Analyst Kibana UI plugin uses NLP to provide answers and insights from your data in Elastic stack. See https://query.ai for more information.

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
Register at [https://ai.query.ai/cloud](https://ai.query.ai/cloud)
**Note:** The lines above are telling the Kibana's content security policy that [https://ai.query.ai/](https://ai.query.ai/) is a safe website to load javascript from. Without adding the above lines, the Kibana plugin won’t work. Your data stays between your browser and your Elastic stack. NLP translation of your questions to search syntax happens via our cloud APIs. Please contact help@query.ai for any assistance or further information.

### Plugin Features
Query.AI democratizes Elastic stack data with its Artificial Intelligence virtual Analyst technology. Query.AI IRIS (Investigations Response Intelligence Service) is the AI that talks to you using voice and NLP (Natural Language Processing) to produce answers, insights and automated visualizations from Elastic stack data. Query.AI also captures and combines investigation sequences into NLP Playbooks that can be shared and automated.

IRIS AI assistant - Allows you to talk to your data using voice or chat to get answers.
Insights - Automated vizualizations and analysis using machine learning models.
Automation - Capture your investigations into NLP (Natural Language Processing) playbooks to be run using a single command, at scheduled times, or triggered by events.
Collaboration - Native environment chat and sharing features allow you to share your playbooks within your community.

### Support
Please contact us at help@query.ai for any product support or feature suggestions (We'd love to hear from you!)
