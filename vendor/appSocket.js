class socketStream {
	constructor(io) {
		this.io = io;
		if (this.getStatus()) this.run();
	}
	getStatus() {
		if (this.io) return true;
		else return false;
	}

	run() {
		this.io.on('connection', (socket) => {
			this.newClient(socket);
			socket.on('disconnect', () => {
				this.disconnect(socket.id);
			});
		});
	}

	newClient(sk) {
		console.log('new client connect id:', sk.id);
		this.sendToAll('new-client', sk.id);
	}
	disconnect(id) {
		console.log('disconnect with client id:', id);
	}

	sendToAll(cn, data) {
		this.io.sockets.emit(cn, data);
	}
	sendToCurr(sk, cn, data) {
		sk.emit(cn, data);
	}
	sendToOther(sk, cn, data) {
		sk.broadcast.emit(cn, data);
	}
	sendToId(id, cn, data) {
		this.io.to(id).emit(cn, data);
	}
	sendToRoom(roomName, cn, data) {
		this.io.sockets.in(roomName).emit(cn, data);
	}

	joinRoom(sk, roomName) {
		sk.join(roomName);
	}
	outRoom(sk, roomName) {
		sk.leave(roomName);
	}

	/**
	 * get array room of socket
	 * default socket room have name is socket.id
	 *
	 * @param {socket} sk socket want to get rooms
	 * @returns array rooms
	 * @memberof socketStream
	 */
	getRoomsOfSocket(sk) {
		var rs = [];
		for (var r in sk.adapter.rooms) if (r != sk.id) rs.push(r);
		return rs;
	}
}

class socketServer {
	static attachIO(io) {
		var socket = new socketStream(io);
		if (socket.getStatus()) return socket;
		else return null;
	}
}

module.exports = socketServer;
