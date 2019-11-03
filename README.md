### About Query.AI Kibana Plugin
Query.AI IRIS Kibana UI plugin uses NLP to provide answers and insights from your data in Elastic stack.
Talk to your data with Query.AI IRIS, the industry's only Security Concierge.
Analyzing your data is now as easy as asking questions : "IRIS, Show me all login failures from yesterday".
With IRIS's AI you:
- Query your data in plain English (using chat or voice),
- Leverage an Out-of-box library of security questions.
- Create automated visualizations and insights.
- Easy App install with no data relocation or duplication
- Collaborate with teammates and industry peers.

#### See https://query.ai for more information. 

#### Click this thumbnail for demo video
[![Watch demo video](https://img.youtube.com/vi/RxQ2l2xufXs/mqdefault.jpg)](https://youtu.be/RxQ2l2xufXs)

#### Query.AI Kibana Plugin Screenshot
![Events](screenshot.png)

### Installation
- Assistance
  - Contact help@query.ai for any assistance with below installation steps.
- Prerequisites
  - Download and install Elasticsearch and Kibana
  - AI-Analyst is supported and tested with Kibana 7.x and 6.x
- Install AI-Analyst plugin
  - cd to your kibana root folder, then run the following line.
  - Install from URL: Example Kibana 7.3.0 : 
  ```
  ./bin/kibana-plugin install https://github.com/query-ai/queryai-kibana-plugin/releases/download/7.3/ai_analyst-7.3.0.zip
  ```
  - Alternately, download the plugin zip and install : Example Kibana 6.7.2 : 
  ```
  ./bin/kibana-plugin install file:///my-local-file-path/ai_analyst-6.7.2.zip
  ```
  - Other versions : [https://github.com/query-ai/queryai-kibana-plugin/releases](https://github.com/query-ai/queryai-kibana-plugin/releases) Can't find your version? Kibana requires exact match of plugin version to the Kibana version. If you can't find AI-Analyst plugin zip for a Kibana release, download the closest versioned plugin zip file, unzip the file, change the version number in package.json, rezip the file, and then install using the file url example above. 
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
