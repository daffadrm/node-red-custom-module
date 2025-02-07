module.exports = function (RED) {
    function JsonParserNode(config) {
        RED.nodes.createNode(this, config);
        let node = this;

        node.on('input', function (msg) {
            try {
                msg.name_approved = config.name;
                msg.approved = config.approved
                node.warn("form approval: " + JSON.stringify(msg)); 
                node.send(msg);
            } catch (error) {
                node.error("Invalid JSON", msg);
            }
        });
    }
    RED.nodes.registerType("form-approval", JsonParserNode);
};
