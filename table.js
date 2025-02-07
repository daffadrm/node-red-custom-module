module.exports = function (RED) {
    function TableNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        
        node.on('input', function (msg) {
            try {
                msg.groups = config.groups;
                msg.label = config.label;
                msg.name = config.name;
                msg.rows = config.rows
                node.warn("table: " + JSON.stringify(msg)); 
                node.send(msg);
            } catch (error) {
                node.error("Invalid JSON", msg);
            }
        });
    }

    RED.nodes.registerType('custom-table', TableNode, {
        settings: {
            customTableColumns: { value: [], exportable: true }
        },
        defaults: {
            customTableColumns: { value: [], required: false }
        }
    });
};
