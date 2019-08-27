# Query.AI-kibana-plugin

## Install
``./bin/kibana-plugin install  https://github.com/query-ai/queryai-kibana-plugin/releases/download/7.1.0/Query.AI-kibana-plugin.7.2.zip``

Add below lines in kibana.yml
```
csp.rules:
  # current defaults
  - "script-src 'unsafe-eval' 'nonce-{nonce}'"
  - "worker-src blob'"
  - "child-src blob:"
  # New rule for iframes
  - "frame-src https://ai.query.ai/"
 ```
