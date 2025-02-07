module.exports = function (RED) {
    function MyCustomNode(config) {
        RED.nodes.createNode(this, config);
        let node = this;

        node.on('input', function (msg) {
            msg.file = config.file;
            msg.name = config.name
             node.warn("Pesan yang dikirim: " + JSON.stringify(msg)); 
            node.send(msg);
        });
    }
    RED.nodes.registerType("form-cuti", MyCustomNode);

    // API Endpoint untuk memberikan opsi dropdown
    RED.httpAdmin.get('/my-custom-endpoint', function (req, res) {
        // res.json({ methods: ["data.doc", "data.xml", "data.pdf"] });
        const axios = require('axios');

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            let titles = response.data.slice(0, 5).map(post => post.title);
            res.json({ methods: titles });
        })
        .catch(error => {
            res.status(500).json({ error: "Gagal mengambil data" });
        });
})};
