module.exports = function (RED) {
    function FormDesigner(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        
        node.on('input', function (msg) {
            console.log(msg, "msg")
            try {
                msg.files = config.files;
                msg.rows = config.rows;
                msg.flag = config.flag;
                msg.roles = config.roles

                node.warn("form designer: " + JSON.stringify(msg)); 
                node.send(msg);
            } catch (error) {
                node.error("Invalid JSON", msg);
            }
        });
    }

    RED.nodes.registerType('form-designer', FormDesigner, {
        settings: {
            formDesignerColumns: { value: [], exportable: true }
        },
        defaults: {
            formDesignerColumns: { value: [], required: false }
        }
    });
};
