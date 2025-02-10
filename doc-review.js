module.exports = function (RED) {
    function DocReview(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        
        node.on('input', function (msg) {
            try {
                msg.selectedDoc = config.selectedDoc
                node.warn("document review: " + JSON.stringify(msg)); 
                node.send(msg);
            } catch (error) {
                node.error("Invalid JSON", msg);
            }
        });
    }

    RED.nodes.registerType('document-review', DocReview);
};
