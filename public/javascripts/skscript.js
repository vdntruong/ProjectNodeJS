$(function() {
	$(function() {
		bindDOMEvents();
	});

	var socket = io(location.hostname + ':' + location.port);

	function bindDOMEvents() {
		socket.on('new-client', newClient);
	}

	function newClient(data) {
		alert('new Client ' + data);
	}
});
