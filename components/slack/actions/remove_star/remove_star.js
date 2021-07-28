const slack = require("../../slack.app.js");

module.exports = {
  key: "slack-remove-star",
  name: "Remove Star",
  description: "Remove a star from an item on behalf of the authenticated user",
  version: "0.0.1",
  type: "action",
  props: {
    slack,
    conversation: {
      propDefinition: [
        slack,
        "conversation",
      ],
      optional: true,
    },
    timestamp: {
      propDefinition: [
        slack,
        "timestamp",
      ],
      optional: true,
    },
    file: {
      propDefinition: [
        slack,
        "file",
      ],
      optional: true,
    },
  },
  async run() {
    return await slack.sdk().stars.remove({
      conversation: this.conversation,
      timestamp: this.timestamp,
      file: this.file,
    });
  },
};
